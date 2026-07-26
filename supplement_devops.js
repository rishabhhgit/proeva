const supplementDevOps = [
  // ==================== CI/CD - Beginner ====================
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is continuous integration (CI)?",
    "options": [
      "A practice where developers frequently merge code changes into a central repository, followed by automated builds and tests",
      "A process of manually deploying code to production servers",
      "A method of storing source code in local machines only",
      "A technique for writing code without version control"
    ],
    "answer": "A practice where developers frequently merge code changes into a central repository, followed by automated builds and tests"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the primary purpose of a CI/CD pipeline?",
    "options": [
      "To automate the process from code commit to production deployment, reducing manual intervention and human error",
      "To replace all developers with automated bots",
      "To store source code in multiple repositories simultaneously",
      "To monitor employee productivity during work hours"
    ],
    "answer": "To automate the process from code commit to production deployment, reducing manual intervention and human error"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In a CI pipeline, where are build artifacts typically stored after a successful build?",
    "options": [
      "In an artifact repository such as JFrog Artifactory, Nexus, or AWS S3",
      "Directly on the developer's laptop",
      "Only in the version control system alongside source code",
      "On a USB drive passed between team members"
    ],
    "answer": "In an artifact repository such as JFrog Artifactory, Nexus, or AWS S3"
  },
  // ==================== CI/CD - Expert ====================
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which pipeline optimization strategy involves running independent stages in parallel rather than sequentially?",
    "options": [
      "Stage parallelization — running independent jobs concurrently to reduce total pipeline duration",
      "Pipeline caching — reusing previous build artifacts without rebuilding",
      "Test sharding — splitting tests across multiple runners",
      "Branch-based triggers — limiting pipeline runs to specific branches"
    ],
    "answer": "Stage parallelization — running independent jobs concurrently to reduce total pipeline duration"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In a canary deployment strategy within a CI/CD pipeline, what is the key characteristic?",
    "options": [
      "Traffic is gradually shifted from the old version to the new version, starting with a small percentage of users",
      "The entire fleet of servers is replaced simultaneously with the new version",
      "The old version is completely shut down before the new version is deployed",
      "Only the staging environment receives the new version while production remains unchanged"
    ],
    "answer": "Traffic is gradually shifted from the old version to the new version, starting with a small percentage of users"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the fundamental difference between GitOps and traditional CI/CD pipelines?",
    "options": [
      "GitOps uses Git as the single source of truth for declarative infrastructure and application config, with agents reconciling desired vs actual state, whereas traditional CI/CD uses push-based pipelines",
      "GitOps does not use version control at all",
      "Traditional CI/CD requires Git but GitOps uses SVN",
      "There is no meaningful difference; they are interchangeable terms"
    ],
    "answer": "GitOps uses Git as the single source of truth for declarative infrastructure and application config, with agents reconciling desired vs actual state, whereas traditional CI/CD uses push-based pipelines"
  },
  // ==================== CI/CD - Intermediate ====================
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which branching strategy is best suited for trunk-based development in CI?",
    "options": [
      "Short-lived feature branches merged directly into main with feature flags for incomplete work",
      "Long-lived release branches maintained for months alongside the main branch",
      "No branching — all developers commit directly to main without any isolation",
      "Environment-specific branches that mirror production, staging, and development"
    ],
    "answer": "Short-lived feature branches merged directly into main with feature flags for incomplete work"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why should automated tests be integrated early in the CI pipeline (shift-left testing)?",
    "options": [
      "Because finding defects earlier in the development cycle significantly reduces the cost and effort of fixing them",
      "Because manual testing is completely obsolete and should never be used",
      "Because unit tests are the only type of test that matters",
      "Because running tests late in the pipeline uses fewer compute resources"
    ],
    "answer": "Because finding defects earlier in the development cycle significantly reduces the cost and effort of fixing them"
  },
  {
    "domain": "DevOps",
    "category": "CI/CD",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the correct sequence of steps in an automated rollback strategy?",
    "options": [
      "Detect failure → halt traffic to new version → switch load balancer to previous version → verify health → notify team",
      "Notify team → take manual backup → rebuild from source → deploy manually",
      "Restart all servers → pray the issue resolves itself → check logs next morning",
      "Rollback database → redeploy code → clear caches → apologize to users"
    ],
    "answer": "Detect failure → halt traffic to new version → switch load balancer to previous version → verify health → notify team"
  },
  // ==================== Cloud (AWS/Azure/GCP) - Expert ====================
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which technique does NOT help optimize AWS Lambda cold start latency?",
    "options": [
      "Increasing the Lambda function's memory allocation to the maximum available",
      "Using provisioned concurrency to keep a specified number of warm instances ready",
      "Minimizing deployment package size by excluding unnecessary dependencies",
      "Using Lambda SnapStart (for Java runtimes) to snapshot initialized state"
    ],
    "answer": "Increasing the Lambda function's memory allocation to the maximum available"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which S3 storage class is most cost-effective for data accessed once per quarter with millisecond retrieval requirements?",
    "options": [
      "S3 Standard — General Purpose",
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA"
    ],
    "answer": "S3 Standard — General Purpose"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key architectural difference between Azure Kubernetes Service (AKS) and Amazon EKS?",
    "options": [
      "AKS manages the control plane as a fully Azure-managed service at no cost, while EKS charges for the control plane and manages it differently with Fargate options",
      "EKS does not support autoscaling but AKS does",
      "AKS only runs on Azure VMs, while EKS runs on bare metal",
      "There is no difference — they are identical services from different providers"
    ],
    "answer": "AKS manages the control plane as a fully Azure-managed service at no cost, while EKS charges for the control plane and manages it differently with Fargate options"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does Google Cloud Functions handle pricing?",
    "options": [
      "You are billed only for the compute time your function actually runs, measured in gigabyte-seconds, with no charge when idle",
      "You pay a fixed monthly fee regardless of invocations or execution time",
      "Pricing is based solely on the number of HTTP requests regardless of execution duration",
      "Functions run on reserved VMs that you pay for 24/7 whether used or not"
    ],
    "answer": "You are billed only for the compute time your function actually runs, measured in gigabyte-seconds, with no charge when idle"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In a multi-tier VPC design pattern, why should application subnets not have direct internet access?",
    "options": [
      "To enforce security by requiring traffic to pass through a public-facing load balancer or NAT gateway, reducing the attack surface",
      "Because application servers cannot run network protocols",
      "To reduce AWS costs by eliminating Elastic IP assignments",
      "Application subnets do support direct internet access by default in AWS"
    ],
    "answer": "To enforce security by requiring traffic to pass through a public-facing load balancer or NAT gateway, reducing the attack surface"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which cloud cost optimization strategy involves committing to a one-year or three-year usage term in exchange for a significant discount?",
    "options": [
      "Reserved Instances / Savings Plans",
      "Spot Instances",
      "On-Demand pricing",
      "Auto-scaling policies"
    ],
    "answer": "Reserved Instances / Savings Plans"
  },
  // ==================== Cloud (AWS/Azure/GCP) - Intermediate ====================
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which EC2 instance family is best suited for memory-intensive applications like in-memory databases or real-time big data analytics?",
    "options": [
      "R-series (e.g., R5, R6g) — optimized for memory-intensive workloads",
      "C-series (e.g., C5) — optimized for compute-intensive tasks",
      "T-series (e.g., T3) — burstable general-purpose instances",
      "I-series (e.g., I3) — optimized for high I/O storage-intensive workloads"
    ],
    "answer": "R-series (e.g., R5, R6g) — optimized for memory-intensive workloads"
  },
  {
    "domain": "DevOps",
    "category": "Cloud (AWS/Azure/GCP)",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the IAM best practice regarding the root account?",
    "options": [
      "Enable MFA on root and use it only for account-level tasks; create IAM users or roles for all day-to-day operations",
      "Use the root account for all daily tasks since it has the most permissions",
      "Share root credentials with the DevOps team for faster incident response",
      "Disable root account login entirely — IAM roles cannot function without root"
    ],
    "answer": "Enable MFA on root and use it only for account-level tasks; create IAM users or roles for all day-to-day operations"
  },
  // ==================== Docker & Kubernetes - Beginner ====================
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the fundamental difference between a Docker image and a Docker container?",
    "options": [
      "An image is a read-only template with application code and dependencies; a container is a running instance of that image",
      "They are exactly the same thing — the terms are interchangeable",
      "A container is stored on disk while an image only exists in memory",
      "An image runs on Windows while a container runs on Linux"
    ],
    "answer": "An image is a read-only template with application code and dependencies; a container is a running instance of that image"
  },
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In a Dockerfile, what is the key difference between the COPY and ADD instructions?",
    "options": [
      "ADD can automatically extract local tar archives and supports fetching URLs, while COPY is a straightforward file copy without extra features",
      "COPY supports URL fetching but ADD does not",
      "ADD only copies files from the build context while COPY can pull from remote registries",
      "They are identical commands with different names for backward compatibility"
    ],
    "answer": "ADD can automatically extract local tar archives and supports fetching URLs, while COPY is a straightforward file copy without extra features"
  },
  // ==================== Docker & Kubernetes - Expert ====================
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In Kubernetes, which pod scheduling constraint ensures a pod is placed on a node matching specific labels defined by nodeSelector?",
    "options": [
      "nodeSelector field in the pod spec — a simple mechanism to constrain pods to nodes with specific key-value label pairs",
      "Pod affinity rules",
      "Resource quotas at the namespace level",
      "Taints and tolerations"
    ],
    "answer": "nodeSelector field in the pod spec — a simple mechanism to constrain pods to nodes with specific key-value label pairs"
  },
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the correct directory structure of a basic Helm chart?",
    "options": [
      "Chart.yaml (metadata), values.yaml (default config), templates/ (K8s manifest templates), and charts/ (dependency charts)",
      "docker-compose.yaml, Dockerfile, .env, and scripts/",
      "main.tf, variables.tf, outputs.tf, and backend.tf",
      "Jenkinsfile, .gitlab-ci.yml, pipeline.yaml, and deploy.sh"
    ],
    "answer": "Chart.yaml (metadata), values.yaml (default config), templates/ (K8s manifest templates), and charts/ (dependency charts)"
  },
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary purpose of a Kubernetes NetworkPolicy?",
    "options": [
      "To define rules that control pod-to-pod and namespace-level network traffic by specifying allowed ingress and egress connections",
      "To configure DNS resolution for services within the cluster",
      "To manage the physical network switches in a bare-metal cluster",
      "To assign IP addresses to pods automatically from a CIDR range"
    ],
    "answer": "To define rules that control pod-to-pod and namespace-level network traffic by specifying allowed ingress and egress connections"
  },
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Why would you choose a StatefulSet over a Deployment in Kubernetes?",
    "options": [
      "When you need stable, unique network identities, persistent storage, and ordered deployment/scaling for stateful applications like databases",
      "When you want faster pod restart times during failures",
      "When your application has no state and can be freely rescheduled",
      "When you want to use ReplicaSets instead of pods"
    ],
    "answer": "When you need stable, unique network identities, persistent storage, and ordered deployment/scaling for stateful applications like databases"
  },
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In Kubernetes, what happens when a container's actual memory usage exceeds its memory limit?",
    "options": [
      "The container is OOMKilled (Out Of Memory killed) by the kubelet, and the pod may be restarted depending on the restart policy",
      "The container automatically gets more memory from the node's swap space",
      "The container throttles CPU to compensate for memory shortage",
      "Kubernetes ignores the limit and lets the container use unlimited memory"
    ],
    "answer": "The container is OOMKilled (Out Of Memory killed) by the kubelet, and the pod may be restarted depending on the restart policy"
  },
  // ==================== Docker & Kubernetes - Intermediate ====================
  {
    "domain": "DevOps",
    "category": "Docker & Kubernetes",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the main benefit of using docker-compose for multi-container applications?",
    "options": [
      "It defines and runs multi-container Docker applications using a YAML file, allowing you to configure services, networks, and volumes in one place",
      "It replaces Docker entirely and runs containers without the Docker engine",
      "It only works on production servers, not local development",
      "It automatically scales containers across multiple physical machines"
    ],
    "answer": "It defines and runs multi-container Docker applications using a YAML file, allowing you to configure services, networks, and volumes in one place"
  },
  // ==================== General DevOps - Beginner ====================
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is Infrastructure as Code (IaC)?",
    "options": [
      "The practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes",
      "Writing application code that runs directly on bare metal servers",
      "Using GUI wizards in cloud consoles to create resources",
      "A programming paradigm for writing documentation about servers"
    ],
    "answer": "The practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual processes"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In Git, what is the difference between a merge and a rebase?",
    "options": [
      "Merge creates a new commit combining branches and preserves history; rebase replays commits linearly onto a new base for a cleaner history",
      "Merge only works on GitHub while rebase works locally",
      "They are the same operation with different syntax",
      "Rebase deletes the original branch while merge preserves it"
    ],
    "answer": "Merge creates a new commit combining branches and preserves history; rebase replays commits linearly onto a new base for a cleaner history"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the key difference between monitoring and observability?",
    "options": [
      "Monitoring tracks predefined metrics and alerts on known failure patterns; observability is the ability to understand system internal state by examining its external outputs, enabling debugging of unknown issues",
      "Monitoring is newer and more advanced than observability",
      "Observability only applies to network hardware, not software systems",
      "They are synonymous terms with no practical difference"
    ],
    "answer": "Monitoring tracks predefined metrics and alerts on known failure patterns; observability is the ability to understand system internal state by examining its external outputs, enabling debugging of unknown issues"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which of the following is a configuration management tool used to automate server provisioning and configuration?",
    "options": [
      "Ansible — an agentless tool that uses YAML playbooks to define and enforce desired system state",
      "Notepad — a text editor for manually editing config files",
      "Slack — a messaging platform for team communication",
      "Photoshop — an image editing application"
    ],
    "answer": "Ansible — an agentless tool that uses YAML playbooks to define and enforce desired system state"
  },
  // ==================== General DevOps - Expert ====================
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Why is Terraform state locking critical in a team environment?",
    "options": [
      "It prevents concurrent modifications to the same infrastructure by multiple team members, avoiding state corruption and conflicting changes",
      "It encrypts state files for regulatory compliance",
      "It speeds up Terraform plan operations by caching results",
      "It is only required for production environments, not staging"
    ],
    "answer": "It prevents concurrent modifications to the same infrastructure by multiple team members, avoiding state corruption and conflicting changes"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary architectural difference between Ansible and Puppet/Chef?",
    "options": [
      "Ansible is agentless and uses SSH/WinRM, while Puppet and Chef require agents installed on managed nodes",
      "Puppet is agentless while Ansible requires agents",
      "Chef uses YAML while Ansible uses Ruby",
      "All three use the same architecture — only syntax differs"
    ],
    "answer": "Ansible is agentless and uses SSH/WinRM, while Puppet and Chef require agents installed on managed nodes"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In a GitOps workflow, what is the role of a reconciliation loop?",
    "options": [
      "A controller continuously compares the desired state in Git with the actual cluster state and makes corrections to converge them",
      "A human operator manually reviews every Git commit before deployment",
      "A script that deletes all resources and recreates them on every push",
      "A backup mechanism that snapshots the cluster state every hour"
    ],
    "answer": "A controller continuously compares the desired state in Git with the actual cluster state and makes corrections to converge them"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How is infrastructure drift typically detected in an IaC environment?",
    "options": [
      "By running a plan/diff command (e.g., terraform plan) that compares the state file against actual infrastructure and reports discrepancies",
      "By manually SSHing into each server and checking configurations",
      "By restarting all servers and checking if they come back up correctly",
      "Drift cannot be detected — it must be prevented entirely"
    ],
    "answer": "By running a plan/diff command (e.g., terraform plan) that compares the state file against actual infrastructure and reports discrepancies"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is immutable infrastructure and why is it preferred over mutable infrastructure?",
    "options": [
      "Immutable infrastructure replaces servers with new instances for every change, ensuring consistency and eliminating configuration drift, while mutable infrastructure modifies existing servers in place",
      "Immutable infrastructure means servers cannot be turned off once created",
      "Mutable infrastructure is always more cost-effective and secure",
      "Immutable infrastructure requires manual patching of running servers"
    ],
    "answer": "Immutable infrastructure replaces servers with new instances for every change, ensuring consistency and eliminating configuration drift, while mutable infrastructure modifies existing servers in place"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which approach is most effective for testing infrastructure code in a CI pipeline?",
    "options": [
      "Use tools like Terratest or InSpec to run automated tests that provision real or mock infrastructure and validate outputs against expected values",
      "Manually review Terraform files and hope for the best",
      "Only test in production after deployment",
      "Infrastructure code does not need testing because cloud providers handle validation"
    ],
    "answer": "Use tools like Terratest or InSpec to run automated tests that provision real or mock infrastructure and validate outputs against expected values"
  },
  // ==================== General DevOps - Intermediate ====================
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the key benefits of adopting Infrastructure as Code?",
    "options": [
      "Version control for infrastructure, reproducibility across environments, faster provisioning, and reduced human error through automation",
      "IaC eliminates the need for any cloud provider",
      "IaC only benefits small startups, not enterprises",
      "IaC requires writing all infrastructure in assembly language"
    ],
    "answer": "Version control for infrastructure, reproducibility across environments, faster provisioning, and reduced human error through automation"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In a blue-green deployment, what happens when the green (new) version encounters a critical issue in production?",
    "options": [
      "Traffic is instantly switched back to the blue (old) version, minimizing downtime while the issue is investigated",
      "Both blue and green versions are taken down simultaneously",
      "The green version continues running until the blue version is rebuilt from source",
      "The deployment pipeline automatically deletes the green environment"
    ],
    "answer": "Traffic is instantly switched back to the blue (old) version, minimizing downtime while the issue is investigated"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do feature flags enable safer deployments?",
    "options": [
      "They decouple deployment from release by allowing code to be deployed in a disabled state and toggled on for specific users or segments",
      "They prevent code from being deployed at all until manually approved",
      "They replace the need for staging environments entirely",
      "They only work with frontend JavaScript applications"
    ],
    "answer": "They decouple deployment from release by allowing code to be deployed in a disabled state and toggled on for specific users or segments"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which tool is commonly used for centralized log aggregation across multiple microservices?",
    "options": [
      "ELK Stack (Elasticsearch, Logstash, Kibana) — collects, parses, stores, and visualizes logs from distributed systems",
      "Git — a version control system for source code",
      "Jenkins — a CI server for building and testing code",
      "Docker Compose — a tool for defining multi-container applications"
    ],
    "answer": "ELK Stack (Elasticsearch, Logstash, Kibana) — collects, parses, stores, and visualizes logs from distributed systems"
  },
  {
    "domain": "DevOps",
    "category": "General DevOps",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is configuration drift and why is it problematic?",
    "options": [
      "The gradual divergence of actual system configuration from the desired state defined in IaC, leading to unpredictable behavior and difficult debugging",
      "The tendency of monitoring dashboards to show outdated metrics",
      "A planned upgrade strategy for server operating systems",
      "The automatic scaling of cloud resources during peak traffic"
    ],
    "answer": "The gradual divergence of actual system configuration from the desired state defined in IaC, leading to unpredictable behavior and difficult debugging"
  },
  // ==================== Monitoring & Security - Beginner ====================
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is application logging and why is it important?",
    "options": [
      "The process of recording events, errors, and runtime information to files or centralized systems for debugging, auditing, and performance analysis",
      "Writing code comments inside source files for other developers",
      "Creating user manuals for end-users",
      "Sending physical letters to clients about system updates"
    ],
    "answer": "The process of recording events, errors, and runtime information to files or centralized systems for debugging, auditing, and performance analysis"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the key components of an effective alerting system?",
    "options": [
      "Defined thresholds, escalation policies, notification channels (email, Slack, PagerDuty), and clear runbooks for remediation",
      "A single email sent to the entire company for every alert",
      "Only monitoring CPU usage with no other metrics",
      "Waiting for users to report problems before investigating"
    ],
    "answer": "Defined thresholds, escalation policies, notification channels (email, Slack, PagerDuty), and clear runbooks for remediation"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which of the following are the four core Prometheus metric types?",
    "options": [
      "Counter, Gauge, Histogram, and Summary",
      "Integer, Float, String, and Boolean",
      "Input, Output, Error, and Success",
      "CPU, Memory, Disk, and Network"
    ],
    "answer": "Counter, Gauge, Histogram, and Summary"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between SLA, SLO, and SLI?",
    "options": [
      "SLI is a quantitative metric of service performance; SLO is a target value for that metric; SLA is a contractual commitment with consequences for missing the SLO",
      "They are all the same thing with different acronyms",
      "SLA measures uptime only; SLO measures latency only; SLI measures throughput only",
      "SLA is internal while SLO is external-facing"
    ],
    "answer": "SLI is a quantitative metric of service performance; SLO is a target value for that metric; SLA is a contractual commitment with consequences for missing the SLO"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which tool is commonly used for network monitoring and packet analysis?",
    "options": [
      "Wireshark — an open-source tool for capturing and inspecting network traffic at the packet level",
      "Postman — an API testing tool",
      "Webpack — a JavaScript module bundler",
      "CMake — a build system generator"
    ],
    "answer": "Wireshark — an open-source tool for capturing and inspecting network traffic at the packet level"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of a monitoring dashboard?",
    "options": [
      "To provide a visual, real-time overview of key system metrics, health status, and trends in a single interface for quick assessment",
      "To replace all documentation and runbooks",
      "To send emails to the operations team every minute",
      "To automatically fix all detected issues without human intervention"
    ],
    "answer": "To provide a visual, real-time overview of key system metrics, health status, and trends in a single interface for quick assessment"
  },
  // ==================== Monitoring & Security - Expert ====================
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does distributed tracing with tools like Jaeger or Zipkin help debug microservices?",
    "options": [
      "It assigns a unique trace ID to each request and records the full call chain across services, allowing you to identify latency bottlenecks and failure points in distributed systems",
      "It logs every database query made by each microservice",
      "It replaces centralized logging by storing all data in trace format only",
      "It only works with monolithic architectures"
    ],
    "answer": "It assigns a unique trace ID to each request and records the full call chain across services, allowing you to identify latency bottlenecks and failure points in distributed systems"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is an error budget in the context of SLOs?",
    "options": [
      "The allowed amount of unreliability (e.g., 0.1% of requests can fail) within a rolling window, derived from the SLO target, which teams can 'spend' on deployments and changes",
      "A financial budget allocated for purchasing monitoring tools",
      "A list of known bugs that must be fixed before the next release",
      "The total number of errors expected in a system's lifetime"
    ],
    "answer": "The allowed amount of unreliability (e.g., 0.1% of requests can fail) within a rolling window, derived from the SLO target, which teams can 'spend' on deployments and changes"
  },
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between SAST and DAST in pipeline security scanning?",
    "options": [
      "SAST analyzes source code statically without executing it to find vulnerabilities; DAST tests the running application from the outside simulating real attacks",
      "SAST is for database security; DAST is for network security",
      "They are the same tool with different brand names",
      "SAST runs in production only; DAST runs during development only"
    ],
    "answer": "SAST analyzes source code statically without executing it to find vulnerabilities; DAST tests the running application from the outside simulating real attacks"
  },
  // ==================== Monitoring & Security - Intermediate ====================
  {
    "domain": "DevOps",
    "category": "Monitoring & Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "When should you use WARN log level versus ERROR log level?",
    "options": [
      "WARN indicates a potentially problematic situation that is not yet an error (e.g., deprecated API usage); ERROR indicates a failure that prevented a specific operation from completing",
      "WARN and ERROR are identical and can be used interchangeably",
      "ERROR should be used for all log messages regardless of severity",
      "WARN is only for development environments; ERROR is for production"
    ],
    "answer": "WARN indicates a potentially problematic situation that is not yet an error (e.g., deprecated API usage); ERROR indicates a failure that prevented a specific operation from completing"
  }
];
module.exports = supplementDevOps;
