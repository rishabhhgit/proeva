"""
UNIVERSAL AI CALLER — multi-provider with automatic fallback.

Provider chain per agent: Groq → Cerebras → Cloudflare → Mistral (always last).
All providers use OpenAI-compatible chat completions format.
"""

import json
import logging
import os
import re
from typing import Any

import httpx

from config.models_config import MODELS

logger = logging.getLogger(__name__)

PROVIDER_ENDPOINTS = {
    "groq":       "https://api.groq.com/openai/v1/chat/completions",
    "cerebras":   "https://api.cerebras.ai/v1/chat/completions",
    "cloudflare": "https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1/chat/completions",
    "mistral":    "https://api.mistral.ai/v1/chat/completions",
}


def _parse_json(text: str, agent_name: str) -> dict:
    """Robust JSON extractor: handles markdown fences and partial wrapping."""
    cleaned = re.sub(r"```json\n?|```", "", text).strip()

    # Direct parse
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass

    # Extract outermost JSON object or array
    match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', cleaned)
    if match:
        try:
            return json.loads(match.group(1))
        except json.JSONDecodeError:
            pass

    logger.error("[AI] JSON parse failed for %s. Raw: %.500s", agent_name, cleaned)
    raise ValueError(f"{agent_name} returned invalid JSON")


async def _call_provider(
    url: str,
    api_key: str,
    model: str,
    temperature: float,
    max_tokens: int,
    system: str,
    user: str,
) -> str:
    """Single provider call. Returns raw text content."""
    payload = {
        "model": model,
        "max_tokens": max_tokens,
        "temperature": temperature,
        "messages": [
            {
                "role": "system",
                "content": system + "\n\nCRITICAL: Return ONLY raw JSON. No markdown, no commentary, no explanation.",
            },
            {"role": "user", "content": user},
        ],
    }
    async with httpx.AsyncClient(timeout=120.0) as client:
        resp = await client.post(
            url,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json=payload,
        )

    if resp.status_code != 200:
        raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:400]}")

    data = resp.json()
    return data["choices"][0]["message"]["content"]


async def ask(agent_name: str, user_prompt: str) -> dict[str, Any]:
    """
    Call an agent's provider chain in order, returning the first successful parsed JSON.

    Args:
        agent_name:  Key from MODELS dict (e.g. "BUG_DETECTOR")
        user_prompt: The filled-in user prompt template

    Returns:
        Parsed dict from the model's JSON response

    Raises:
        KeyError:    Unknown agent name
        RuntimeError: All providers exhausted
    """
    cfg = MODELS.get(agent_name)
    if not cfg:
        raise KeyError(f"No config found for agent: {agent_name}")

    skill = cfg["skill"]
    chain = cfg["providers"]
    last_err: Exception | None = None

    for attempt in chain:
        provider = attempt["provider"]
        model = attempt["model"]
        api_key = os.environ.get(attempt["apiKeyEnv"])

        if not api_key:
            logger.debug("[AI] %s: missing key %s, skipping", agent_name, attempt["apiKeyEnv"])
            continue

        url = PROVIDER_ENDPOINTS[provider]
        if provider == "cloudflare":
            account_id = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "")
            url = url.format(account_id=account_id)

        temperature = attempt.get("temperature", cfg.get("temperature", 0.2))
        max_tokens = attempt.get("maxTokens", cfg.get("maxTokens", 2000))

        try:
            logger.info("[AI] %s → %s / %s", agent_name, provider, model)
            raw = await _call_provider(url, api_key, model, temperature, max_tokens, skill, user_prompt)
            result = _parse_json(raw, agent_name)
            logger.info("[AI] %s ✓ via %s", agent_name, provider)
            return result

        except RuntimeError as exc:
            err_str = str(exc)
            # On 429 rate-limit: wait the suggested retry time then try SAME
            # provider once more before falling through to the next one.
            # This avoids burning the fallback key for a transient rate limit.
            if "429" in err_str:
                import re as _re
                import asyncio as _asyncio
                wait_match = _re.search(r"try again in ([\d.]+)s", err_str)
                wait_secs = min(float(wait_match.group(1)) if wait_match else 12.0, 20.0)
                logger.info("[AI] %s rate-limited on %s — waiting %.1fs then retrying", agent_name, provider, wait_secs)
                await _asyncio.sleep(wait_secs)
                try:
                    raw = await _call_provider(url, api_key, model, temperature, max_tokens, skill, user_prompt)
                    result = _parse_json(raw, agent_name)
                    logger.info("[AI] %s ✓ via %s (after retry)", agent_name, provider)
                    return result
                except Exception as retry_exc:
                    logger.warning("[AI] %s retry also failed on %s/%s: %s", agent_name, provider, model, retry_exc)
                    last_err = retry_exc
            else:
                logger.warning("[AI] %s failed on %s/%s: %s", agent_name, provider, model, exc)
                last_err = exc
            continue

        except Exception as exc:
            logger.warning("[AI] %s failed on %s/%s: %s", agent_name, provider, model, exc)
            last_err = exc
            continue

    raise RuntimeError(f"[{agent_name}] All providers exhausted. Last error: {last_err}")