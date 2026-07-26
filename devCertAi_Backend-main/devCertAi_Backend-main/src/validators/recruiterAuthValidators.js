/**
 * validators/recruiterAuthValidators.js
 *
 * Zod schemas for the recruiter OTP authentication endpoints.
 */

const { z } = require('zod')

const urlField = z.string().optional().or(z.literal('')).transform(v => {
  if (!v || v === '') return ''
  if (!/^https?:\/\//i.test(v)) return `https://${v}`
  return v
}).pipe(z.string().url().or(z.literal('')))

// ── Register Step 1 ───────────────────────────────────────────────────────────
const recruiterRegisterSendOtpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(100),
  companyWebsite: urlField,
  industry: z.string().max(50).optional(),
})

// ── Register Step 2 ───────────────────────────────────────────────────────────
const recruiterRegisterVerifyOtpSchema = z.object({
  email: z.string().email('Invalid email address'),
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d{6}$/, 'OTP must be numeric'),
})

// ── Login Step 1 ──────────────────────────────────────────────────────────────
const recruiterLoginSendOtpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

// ── Login Step 2 ──────────────────────────────────────────────────────────────
const recruiterLoginVerifyOtpSchema = z.object({
  email: z.string().email('Invalid email address'),
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d{6}$/, 'OTP must be numeric'),
})

// ── Resend OTP ────────────────────────────────────────────────────────────────
const recruiterResendOtpSchema = z.object({
  email: z.string().email('Invalid email address'),
  purpose: z.enum(['register', 'login'], { required_error: 'Purpose is required' }),
})

module.exports = {
  recruiterRegisterSendOtpSchema,
  recruiterRegisterVerifyOtpSchema,
  recruiterLoginSendOtpSchema,
  recruiterLoginVerifyOtpSchema,
  recruiterResendOtpSchema,
}
