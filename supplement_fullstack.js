const supplementFullStack = [
  // ==================== API Design - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which HTTP method is used to create a new resource in a REST API?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "answer": "POST"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What status code indicates that a resource was successfully created?",
    "options": ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently"],
    "answer": "201 Created"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which status code indicates that the requested resource was not found?",
    "options": ["400 Bad Request", "401 Unauthorized", "404 Not Found", "500 Internal Server Error"],
    "answer": "404 Not Found"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a best practice for naming REST API URLs?",
    "options": ["Use verbs like /getUser", "Use nouns like /users", "Use camelCase like /getUserList", "Use file extensions like /users.json"],
    "answer": "Use nouns like /users"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which request header specifies the format of the request body?",
    "options": ["Authorization", "Accept", "Content-Type", "User-Agent"],
    "answer": "Content-Type"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the primary value of API documentation tools like Swagger/OpenAPI?",
    "options": ["They generate backend code automatically", "They provide a standardized way to describe and test APIs", "They replace the need for unit tests", "They handle API authentication"],
    "answer": "They provide a standardized way to describe and test APIs"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is JSON the preferred format for REST API responses?",
    "options": ["It is faster to parse than XML", "It is human-readable, lightweight, and language-independent", "It supports more data types than XML", "It is enforced by HTTP standards"],
    "answer": "It is human-readable, lightweight, and language-independent"
  },
  // ==================== API Design - Expert ====================
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which API versioning strategy embeds the version directly in the URL path?",
    "options": ["Header versioning", "Query parameter versioning", "URI path versioning", "Content negotiation versioning"],
    "answer": "URI path versioning"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of the X-RateLimit-Reset header in rate limiting?",
    "options": ["It tells the client how many requests remain", "It indicates the Unix timestamp when the rate limit resets", "It disables rate limiting for the client", "It logs the rate limit violation"],
    "answer": "It indicates the Unix timestamp when the rate limit resets"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In OAuth2, what is the purpose of the authorization code flow?",
    "options": ["It allows direct token exchange without user interaction", "It exchanges an authorization code for tokens after user consent", "It refreshes expired access tokens", "It handles API rate limiting"],
    "answer": "It exchanges an authorization code for tokens after user consent"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary function of an API gateway in a microservices architecture?",
    "options": ["It replaces the need for individual microservices", "It acts as a single entry point that routes, secures, and monitors API calls", "It stores API responses in a database", "It compiles API source code"],
    "answer": "It acts as a single entry point that routes, secures, and monitors API calls"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When designing webhooks, what is a recommended practice for handling delivery failures?",
    "options": ["Ignore the failure and move on", "Implement exponential backoff retry logic", "Immediately alert the end user via email", "Disable the webhook permanently"],
    "answer": "Implement exponential backoff retry logic"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does HATEOAS stand for and what does it add to REST APIs?",
    "options": ["It adds authentication headers to all responses", "Hypermedia As The Engine Of Application State - it provides hypermedia links for navigation", "It enables automatic API documentation", "It handles error responses uniformly"],
    "answer": "Hypermedia As The Engine Of Application State - it provides hypermedia links for navigation"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In GraphQL, what is the purpose of a schema definition language (SDL)?",
    "options": ["It defines the database structure directly", "It describes the types, queries, mutations, and relationships available in the API", "It handles authentication for GraphQL endpoints", "It generates client-side code"],
    "answer": "It describes the types, queries, mutations, and relationships available in the API"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the Cache-Control header value 'stale-while-revalidate' used for?",
    "options": ["It prevents caching entirely", "It serves stale cached content while fetching fresh data in the background", "It forces revalidation on every request", "It caches responses indefinitely"],
    "answer": "It serves stale cached content while fetching fresh data in the background"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Why is idempotency important for API operations like PUT and DELETE?",
    "options": ["It makes the API faster", "It ensures that repeated requests produce the same result without side effects", "It reduces the size of request payloads", "It eliminates the need for authentication"],
    "answer": "It ensures that repeated requests produce the same result without side effects"
  },
  // ==================== API Design - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the advantage of cursor-based pagination over offset-based pagination?",
    "options": ["It is simpler to implement", "It provides consistent results when data is being inserted or deleted", "It always returns fewer results", "It does not require a database index"],
    "answer": "It provides consistent results when data is being inserted or deleted"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the main difference between JWT and API key authentication?",
    "options": ["JWT is only for browsers, API keys are for servers", "JWT contains encoded claims and is self-contained; API keys are simple tokens for identification", "JWT does not require encryption", "API keys expire automatically"],
    "answer": "JWT contains encoded claims and is self-contained; API keys are simple tokens for identification"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the Access-Control-Allow-Origin header control in CORS?",
    "options": ["Which HTTP methods are allowed", "Which domains are permitted to access the resource", "Which headers can be sent in the request", "Whether cookies are included in requests"],
    "answer": "Which domains are permitted to access the resource"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which component of a standardized error response helps developers identify the error programmatically?",
    "options": ["HTTP status code", "Error code or error type string", "Response timestamp", "Request ID"],
    "answer": "Error code or error type string"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of multipart/form-data content type in file upload APIs?",
    "options": ["It compresses the file before upload", "It allows sending binary file data alongside form fields in a single request", "It encrypts the file during transmission", "It converts files to JSON format"],
    "answer": "It allows sending binary file data alongside form fields in a single request"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does API throttling differ from rate limiting?",
    "options": ["They are the same thing", "Throttling slows down response times; rate limiting rejects requests after a threshold", "Throttling is for frontend only", "Rate limiting only applies to authenticated users"],
    "answer": "Throttling slows down response times; rate limiting rejects requests after a threshold"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a key consideration when designing batch API endpoints?",
    "options": ["Each request in the batch should be independent of others", "The batch size should be unlimited", "Batch requests should bypass authentication", "Batch responses should not include error details"],
    "answer": "Each request in the batch should be independent of others"
  },
  {
    "domain": "Full Stack",
    "category": "API Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What protocol do WebSocket APIs use after the initial handshake?",
    "options": ["HTTP/1.1", "HTTP/2", "TCP with the WebSocket protocol", "UDP"],
    "answer": "TCP with the WebSocket protocol"
  },
  // ==================== Angular - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which Angular CLI command generates a new component?",
    "options": ["ng generate service", "ng generate component", "ng generate module", "ng generate directive"],
    "answer": "ng generate component"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the default file extension for Angular component templates?",
    "options": [".js", ".html", ".ts", ".css"],
    "answer": ".html"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which syntax is used for one-way data binding from component to template in Angular?",
    "options": ["[()]", "(())", "{{ }}", "[( )]"],
    "answer": "{{ }}"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the ngModel directive provide in Angular forms?",
    "options": ["Form validation only", "Two-way data binding between form inputs and component properties", "HTTP request handling", "Route navigation"],
    "answer": "Two-way data binding between form inputs and component properties"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of Angular dependency injection?",
    "options": ["It handles DOM manipulation", "It provides class instances (services) to components without hardcoding dependencies", "It manages CSS styling", "It compiles TypeScript to JavaScript"],
    "answer": "It provides class instances (services) to components without hardcoding dependencies"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why are Angular services used?",
    "options": ["To define HTML templates", "To share data and logic across multiple components", "To handle CSS animations", "To configure routing paths"],
    "answer": "To share data and logic across multiple components"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the ngFor directive do in Angular templates?",
    "options": ["It conditionally renders elements", "It iterates over a collection and renders a template for each item", "It handles form submissions", "It creates HTTP requests"],
    "answer": "It iterates over a collection and renders a template for each item"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the role of RouterModule in Angular?",
    "options": ["It handles HTTP requests", "It configures application routes and navigation between views", "It manages database connections", "It optimizes image loading"],
    "answer": "It configures application routes and navigation between views"
  },
  // ==================== Angular - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the main advantage of Angular signals over traditional RxJS subjects?",
    "options": ["Signals support more operators", "Signals provide synchronous, fine-grained reactivity without explicit subscription management", "Signals replace the need for components", "Signals only work with HTTP requests"],
    "answer": "Signals provide synchronous, fine-grained reactivity without explicit subscription management"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does Angular lazy loading reduce initial bundle size?",
    "options": ["It removes unused code permanently", "It loads feature modules only when they are navigated to, splitting the application into smaller chunks", "It compresses all modules into a single file", "It delays all module loading until user interaction"],
    "answer": "It loads feature modules only when they are navigated to, splitting the application into smaller chunks"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of Angular custom pipes?",
    "options": ["They handle HTTP interceptors", "They transform displayed values in templates with reusable formatting logic", "They manage route guards", "They connect to external APIs"],
    "answer": "They transform displayed values in templates with reusable formatting logic"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What can an HttpClient interceptor do in Angular?",
    "options": ["It only logs outgoing requests", "It can modify, intercept, or handle HTTP requests and responses globally", "It replaces the need for services", "It manages form validation"],
    "answer": "It can modify, intercept, or handle HTTP requests and responses globally"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Why might you use NgZone.runOutsideAngular()?",
    "options": ["To skip dependency injection", "To perform work outside Angular's change detection for better performance", "To disable routing", "To remove components from the DOM"],
    "answer": "To perform work outside Angular's change detection for better performance"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key difference between AOT and JIT compilation in Angular?",
    "options": ["JIT compiles faster at runtime; AOT compiles at build time for better performance and earlier error detection", "AOT is only for development", "JIT produces smaller bundles", "They are interchangeable with no differences"],
    "answer": "JIT compiles faster at runtime; AOT compiles at build time for better performance and earlier error detection"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between BehaviorSubject and ReplaySubject in RxJS?",
    "options": ["BehaviorSubject always replays all values; ReplaySubject only emits the latest", "BehaviorSubject requires an initial value and emits the current value to new subscribers; ReplaySubject replays a specified number of past values", "They are functionally identical", "ReplaySubject cannot be subscribed to multiple times"],
    "answer": "BehaviorSubject requires an initial value and emits the current value to new subscribers; ReplaySubject replays a specified number of past values"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When would you use an async validator in Angular reactive forms?",
    "options": ["To validate form fields synchronously", "To perform server-side validation (like checking username availability) without blocking the UI", "To format date inputs", "To handle form submission"],
    "answer": "To perform server-side validation (like checking username availability) without blocking the UI"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a micro-frontend architecture in Angular?",
    "options": ["A single Angular application with many components", "An approach where independently deployable frontend applications are composed into a larger application", "A backend microservice for frontend rendering", "A method to reduce Angular bundle size"],
    "answer": "An approach where independently deployable frontend applications are composed into a larger application"
  },
  // ==================== Angular - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In which lifecycle hook would you perform cleanup to prevent memory leaks?",
    "options": ["ngOnInit", "ngOnChanges", "ngOnDestroy", "ngAfterViewInit"],
    "answer": "ngOnDestroy"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you make an HTTP GET request using Angular HttpClient?",
    "options": ["HttpClient.fetch(url)", "HttpClient.request('GET', url)", "HttpClient.get(url)", "HttpClient.open(url)"],
    "answer": "HttpClient.get(url)"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of an Angular Resolver guard?",
    "options": ["It protects routes from unauthorized access", "It pre-fetches data before a route is activated so the component receives resolved data", "It resolves CSS conflicts", "It handles form validation"],
    "answer": "It pre-fetches data before a route is activated so the component receives resolved data"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does a parent component communicate data to a child component in Angular?",
    "options": ["Using EventEmitter in the parent", "Using @Input() decorator on the child component", "Using @Output() decorator on the child", "Using window.postMessage"],
    "answer": "Using @Input() decorator on the child component"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the @ViewChild decorator do in Angular?",
    "options": ["It listens to child component events", "It queries and returns a reference to a DOM element or child component in the template", "It creates multiple instances of a component", "It handles HTTP responses"],
    "answer": "It queries and returns a reference to a DOM element or child component in the template"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What module must be imported to use Angular animations?",
    "options": ["HttpClientModule", "BrowserAnimationsModule", "FormsModule", "RouterModule"],
    "answer": "BrowserAnimationsModule"
  },
  {
    "domain": "Full Stack",
    "category": "Angular",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How should HTTP errors typically be handled in Angular HttpClient?",
    "options": ["Using try-catch blocks around every HTTP call", "Using the catchError operator in an RxJS pipe", "Ignoring them since Angular handles them automatically", "Using window.alert()"],
    "answer": "Using the catchError operator in an RxJS pipe"
  },
  // ==================== DevOps Basics - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the primary purpose of version control systems like Git?",
    "options": ["To compile code into executables", "To track changes in code over time and enable collaboration", "To deploy applications to servers", "To manage database schemas"],
    "answer": "To track changes in code over time and enable collaboration"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does 'git clone' do?",
    "options": ["Creates a new branch", "Creates a local copy of a remote repository on your machine", "Merges two branches together", "Deletes a remote repository"],
    "answer": "Creates a local copy of a remote repository on your machine"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is continuous integration (CI)?",
    "options": ["A method to manually test code before deployment", "The practice of frequently merging code changes into a shared repository with automated builds and tests", "A database synchronization technique", "A way to manage cloud infrastructure"],
    "answer": "The practice of frequently merging code changes into a shared repository with automated builds and tests"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is containerization in DevOps?",
    "options": ["Storing data in containers like Docker", "Packaging applications with their dependencies into isolated, portable containers", "Using virtual machines exclusively", "Running applications directly on physical servers"],
    "answer": "Packaging applications with their dependencies into isolated, portable containers"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between IaaS and PaaS cloud models?",
    "options": ["IaaS provides only storage; PaaS provides computing", "IaaS provides virtualized infrastructure (servers, storage); PaaS provides a platform for deploying apps without managing infrastructure", "They are the same thing", "PaaS is only for database hosting"],
    "answer": "IaaS provides virtualized infrastructure (servers, storage); PaaS provides a platform for deploying apps without managing infrastructure"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which Linux command lists files and directories in the current folder?",
    "options": ["cd", "ls", "mkdir", "rm"],
    "answer": "ls"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why are environment variables used in application configuration?",
    "options": ["To store CSS styles", "To keep configuration values (like API keys and database URLs) separate from code for security and flexibility", "To define HTML templates", "To manage Git repositories"],
    "answer": "To keep configuration values (like API keys and database URLs) separate from code for security and flexibility"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is logging important in production applications?",
    "options": ["It makes applications run faster", "It helps developers understand application behavior, diagnose issues, and monitor performance", "It replaces the need for testing", "It automatically fixes bugs"],
    "answer": "It helps developers understand application behavior, diagnose issues, and monitor performance"
  },
  // ==================== DevOps Basics - Expert ====================
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the main advantage of using Terraform for infrastructure management?",
    "options": ["It only supports AWS cloud", "It provides a declarative language to define and provision infrastructure across multiple cloud providers", "It replaces the need for version control", "It is a container runtime"],
    "answer": "It provides a declarative language to define and provision infrastructure across multiple cloud providers"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How can CI/CD pipeline execution time be optimized?",
    "options": ["Run all tests sequentially", "Implement parallel test execution, caching of dependencies, and incremental builds", "Disable all automated tests", "Deploy only on Fridays"],
    "answer": "Implement parallel test execution, caching of dependencies, and incremental builds"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a Kubernetes Pod?",
    "options": ["A standalone virtual machine", "The smallest deployable unit that can contain one or more containers sharing network and storage", "A type of network load balancer", "A database replication unit"],
    "answer": "The smallest deployable unit that can contain one or more containers sharing network and storage"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of Prometheus and Grafana in a DevOps monitoring stack?",
    "options": ["They handle code deployments", "Prometheus collects and queries metrics; Grafana visualizes them in dashboards", "They manage container orchestration", "They perform security scans"],
    "answer": "Prometheus collects and queries metrics; Grafana visualizes them in dashboards"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What type of security scanning checks container images for known vulnerabilities before deployment?",
    "options": ["Static code analysis", "Container image scanning", "Penetration testing", "Code formatting checks"],
    "answer": "Container image scanning"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key difference between blue-green deployment and canary deployment?",
    "options": ["Blue-green runs both versions simultaneously permanently", "Blue-green switches all traffic at once; canary gradually shifts a small percentage of traffic first", "Canary deployment requires downtime; blue-green does not", "They are the same strategy"],
    "answer": "Blue-green switches all traffic at once; canary gradually shifts a small percentage of traffic first"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of Ansible in configuration management?",
    "options": ["It is a container runtime", "It automates server provisioning, configuration, and application deployment using agentless SSH-based playbooks", "It monitors network traffic", "It manages DNS records"],
    "answer": "It automates server provisioning, configuration, and application deployment using agentless SSH-based playbooks"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is infrastructure cost optimization in cloud computing?",
    "options": ["Using the most expensive instance types", "Strategies like right-sizing instances, using spot instances, and auto-scaling to reduce unnecessary spending", "Avoiding cloud services entirely", "Using only on-premise servers"],
    "answer": "Strategies like right-sizing instances, using spot instances, and auto-scaling to reduce unnecessary spending"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What should a comprehensive disaster recovery plan include?",
    "options": ["Only data backup to a local hard drive", "Regular backups, recovery time objectives (RTO), recovery point objectives (RPO), and failover procedures", "Just documentation of the current setup", "Only email notifications for outages"],
    "answer": "Regular backups, recovery time objectives (RTO), recovery point objectives (RPO), and failover procedures"
  },
  // ==================== DevOps Basics - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of feature branches in Git?",
    "options": ["To permanently delete old code", "To develop new features in isolation before merging into the main branch", "To deploy code directly to production", "To store backup copies of files"],
    "answer": "To develop new features in isolation before merging into the main branch"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between a Docker image and a Docker container?",
    "options": ["They are the same thing", "An image is a read-only template; a container is a running instance of an image", "A container is always larger than an image", "Images can only run on Linux"],
    "answer": "An image is a read-only template; a container is a running instance of an image"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the typical stages of a CI/CD pipeline?",
    "options": ["Only build and deploy", "Build, test, security scan, staging deployment, production deployment", "Just testing and deployment", "Code review and merge only"],
    "answer": "Build, test, security scan, staging deployment, production deployment"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is serverless computing?",
    "options": ["Running servers without any hardware", "A model where the cloud provider manages server infrastructure and you only pay for actual execution time", "Using only on-premise servers", "Building physical data centers"],
    "answer": "A model where the cloud provider manages server infrastructure and you only pay for actual execution time"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the benefit of deploying an API to a staging environment before production?",
    "options": ["It costs less money", "It allows testing the API in a production-like environment to catch issues before affecting end users", "It speeds up development", "It is required by law"],
    "answer": "It allows testing the API in a production-like environment to catch issues before affecting end users"
  },
  {
    "domain": "Full Stack",
    "category": "DevOps Basics",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of a monitoring dashboard in DevOps?",
    "options": ["To write application code", "To provide real-time visibility into application health, performance metrics, and system status", "To manage Git repositories", "To handle user authentication"],
    "answer": "To provide real-time visibility into application health, performance metrics, and system status"
  },
  // ==================== General Backend - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between server-side rendering (SSR) and client-side rendering (CSR)?",
    "options": ["SSR runs in the browser; CSR runs on the server", "SSR generates HTML on the server and sends it to the client; CSR generates HTML in the browser using JavaScript", "They produce identical user experiences", "SSR does not support dynamic content"],
    "answer": "SSR generates HTML on the server and sends it to the client; CSR generates HTML in the browser using JavaScript"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is required to establish a database connection from a backend application?",
    "options": ["Only the database name", "Connection parameters including host, port, database name, username, and password", "Only a web browser", "Just the application source code"],
    "answer": "Connection parameters including host, port, database name, username, and password"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a key difference between REST and SOAP APIs?",
    "options": ["SOAP is always faster than REST", "REST is lightweight and uses JSON; SOAP uses XML with a strict envelope structure and built-in error handling", "REST requires XML; SOAP uses JSON", "They both use the same transport protocols only"],
    "answer": "REST is lightweight and uses JSON; SOAP uses XML with a strict envelope structure and built-in error handling"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "When handling file uploads on the backend, what content type should the client send?",
    "options": ["application/json", "multipart/form-data", "text/plain", "application/xml"],
    "answer": "multipart/form-data"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of session management on the server?",
    "options": ["To store CSS styles", "To maintain user state and authentication data across multiple HTTP requests", "To compile JavaScript code", "To manage database connections"],
    "answer": "To maintain user state and authentication data across multiple HTTP requests"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why should environment variables be used for configuration instead of hardcoding values?",
    "options": ["They make code run faster", "They allow different configurations for development, staging, and production without changing code", "They are required by Node.js", "They reduce the number of files in a project"],
    "answer": "They allow different configurations for development, staging, and production without changing code"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What criteria should guide the selection of a backend framework?",
    "options": ["Only the team's familiarity with the framework", "Community support, performance, scalability, ecosystem, and alignment with project requirements", "The framework with the most GitHub stars", "The newest framework available"],
    "answer": "Community support, performance, scalability, ecosystem, and alignment with project requirements"
  },
  // ==================== General Backend - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the sliding window algorithm commonly used for in API rate limiting?",
    "options": ["It encrypts API responses", "It tracks the number of requests within a rolling time window to enforce rate limits accurately", "It compresses request payloads", "It rotates API keys"],
    "answer": "It tracks the number of requests within a rolling time window to enforce rate limits accurately"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of a background job processing system like Bull or Celery?",
    "options": ["To handle real-time user interactions", "To offload time-consuming tasks (like email sending or report generation) so they do not block the main request-response cycle", "To serve static files", "To manage database transactions"],
    "answer": "To offload time-consuming tasks (like email sending or report generation) so they do not block the main request-response cycle"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why is database connection pooling used in backend applications?",
    "options": ["To increase the database storage limit", "To reuse existing database connections instead of creating new ones for each request, improving performance", "To encrypt database queries", "To automatically backup the database"],
    "answer": "To reuse existing database connections instead of creating new ones for each request, improving performance"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the primary benefit of using Redis for server-side caching?",
    "options": ["It replaces the need for a primary database", "It stores frequently accessed data in memory for sub-millisecond retrieval times", "It handles user authentication", "It generates HTML templates"],
    "answer": "It stores frequently accessed data in memory for sub-millisecond retrieval times"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are common cloud-based file storage solutions for backend applications?",
    "options": ["Local hard drives only", "AWS S3, Google Cloud Storage, and Azure Blob Storage", "USB flash drives", "Git repositories"],
    "answer": "AWS S3, Google Cloud Storage, and Azure Blob Storage"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the role of SMTP in email sending integration?",
    "options": ["It renders email templates in the browser", "It is the standard protocol for sending emails from a backend server to an email server", "It stores received emails in a database", "It manages email subscriptions"],
    "answer": "It is the standard protocol for sending emails from a backend server to an email server"
  },
  {
    "domain": "Full Stack",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does Elasticsearch differ from a traditional SQL database for search functionality?",
    "options": ["Elasticsearch is only for logging", "Elasticsearch is optimized for full-text search, complex queries, and real-time indexing using an inverted index", "Elasticsearch does not support structured data", "SQL databases are always faster for search"],
    "answer": "Elasticsearch is optimized for full-text search, complex queries, and real-time indexing using an inverted index"
  },
  // ==================== General Full Stack - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does a full-stack developer work on?",
    "options": ["Only the frontend user interface", "Both the client-side (frontend) and server-side (backend) of web applications", "Only database management", "Only mobile app development"],
    "answer": "Both the client-side (frontend) and server-side (backend) of web applications"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the three tiers in a three-tier architecture?",
    "options": ["HTML, CSS, and JavaScript", "Presentation layer (frontend), application layer (backend), and data layer (database)", "Development, staging, and production", "Frontend, API, and mobile"],
    "answer": "Presentation layer (frontend), application layer (backend), and data layer (database)"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why should you avoid testing features directly in the production environment?",
    "options": ["Production environments are too slow for testing", "Bugs in production can affect real users and cause data loss or downtime", "Testing is only needed in development", "Production does not support debugging"],
    "answer": "Bugs in production can affect real users and cause data loss or downtime"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of package managers like npm and yarn?",
    "options": ["To write HTML code", "To install, manage, and update third-party libraries and dependencies in a project", "To deploy applications to cloud servers", "To manage Git branches"],
    "answer": "To install, manage, and update third-party libraries and dependencies in a project"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the typical workflow for code versioning with Git?",
    "options": ["Commit directly to the main branch", "Create a branch, make changes, commit, push, and create a pull request for review", "Copy files manually to a backup folder", "Write all code in a single file"],
    "answer": "Create a branch, make changes, commit, push, and create a pull request for review"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the core principle of responsive web design?",
    "options": ["Using only desktop screen sizes for design", "Layouts and elements should adapt to different screen sizes and devices automatically", "Websites should load only on mobile devices", "All websites should have the same fixed width"],
    "answer": "Layouts and elements should adapt to different screen sizes and devices automatically"
  },
  // ==================== General Full Stack - Expert ====================
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the main advantage of a monorepo strategy for full-stack applications?",
    "options": ["Each team uses a completely different tech stack", "Shared code, atomic commits across services, and simplified dependency management", "It eliminates the need for CI/CD", "It is only suitable for small projects"],
    "answer": "Shared code, atomic commits across services, and simplified dependency management"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What testing strategies should a full-stack application implement?",
    "options": ["Only manual testing", "Unit tests, integration tests, end-to-end tests, and API contract tests across all layers", "Just frontend visual testing", "Only load testing"],
    "answer": "Unit tests, integration tests, end-to-end tests, and API contract tests across all layers"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does end-to-end application monitoring track in a full-stack system?",
    "options": ["Only frontend performance", "Request flow from user interaction through frontend, API, backend services, and database queries", "Only server CPU usage", "Only error logs"],
    "answer": "Request flow from user interaction through frontend, API, backend services, and database queries"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of database migration strategies in full-stack development?",
    "options": ["To migrate data between different cloud providers only", "To manage and version control database schema changes across environments safely", "To back up database files", "To compress database tables"],
    "answer": "To manage and version control database schema changes across environments safely"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the API-first development approach?",
    "options": ["Building the frontend before the backend", "Designing and documenting the API contract before implementing frontend or backend", "Deploying the API before testing it", "Writing API documentation after development"],
    "answer": "Designing and documenting the API contract before implementing frontend or backend"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How do feature flags improve full-stack development workflows?",
    "options": ["They replace the need for code reviews", "They allow enabling or disabling features in production without redeployment, supporting gradual rollouts and A/B testing", "They only work on the frontend", "They manage database migrations"],
    "answer": "They allow enabling or disabling features in production without redeployment, supporting gradual rollouts and A/B testing"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is technical debt and why should it be managed?",
    "options": ["Money owed to software vendors", "Accumulated shortcuts and suboptimal solutions that increase maintenance cost and slow future development", "The cost of cloud infrastructure", "The number of bugs in production"],
    "answer": "Accumulated shortcuts and suboptimal solutions that increase maintenance cost and slow future development"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a performance budget in full-stack development?",
    "options": ["A financial budget for cloud spending", "A set of predefined performance thresholds (like load time, bundle size) that must not be exceeded", "A limit on the number of API calls", "A budget for hardware purchases"],
    "answer": "A set of predefined performance thresholds (like load time, bundle size) that must not be exceeded"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What challenges are unique to CI/CD for full-stack applications?",
    "options": ["Only frontend build steps need automation", "Coordinating builds, tests, and deployments across frontend, backend, and database changes atomically", "Only backend deployment matters", "Full-stack apps do not need CI/CD"],
    "answer": "Coordinating builds, tests, and deployments across frontend, backend, and database changes atomically"
  },
  // ==================== General Full Stack - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a common pattern for frontend-backend integration in a full-stack application?",
    "options": ["Hardcoding API URLs in frontend components", "Using environment variables and a centralized API client to communicate with backend endpoints", "Directly connecting the frontend to the database", "Embedding backend logic in HTML files"],
    "answer": "Using environment variables and a centralized API client to communicate with backend endpoints"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In a JWT-based authentication flow, where is the token typically stored on the client?",
    "options": ["In the URL query parameters", "In an HTTP-only cookie or local storage (with security considerations)", "In a global CSS variable", "In a meta tag only"],
    "answer": "In an HTTP-only cookie or local storage (with security considerations)"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What makes WebSocket connections suitable for real-time features like chat applications?",
    "options": ["They use the HTTP protocol exclusively", "They maintain a persistent, bidirectional connection between client and server for instant data transfer", "They only support one-way communication", "They require page reloads to receive new data"],
    "answer": "They maintain a persistent, bidirectional connection between client and server for instant data transfer"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a typical full-stack project directory structure?",
    "options": ["All files in a single folder", "Separate folders for frontend, backend, shared utilities, and configuration files", "Only backend files on the server", "One HTML file for everything"],
    "answer": "Separate folders for frontend, backend, shared utilities, and configuration files"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How should errors be handled across the full stack?",
    "options": ["Silently ignore all errors", "Log errors at each layer, return meaningful error responses from the API, and display user-friendly messages on the frontend", "Only handle frontend errors", "Throw errors without logging"],
    "answer": "Log errors at each layer, return meaningful error responses from the API, and display user-friendly messages on the frontend"
  },
  {
    "domain": "Full Stack",
    "category": "General Full Stack",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What considerations are important when designing a database schema for a full-stack application?",
    "options": ["Use only one table for all data", "Normalize data to reduce redundancy, define relationships, and plan for the queries the application will need", "Avoid using primary keys", "Store all data as JSON strings"],
    "answer": "Normalize data to reduce redundancy, define relationships, and plan for the queries the application will need"
  },
  // ==================== HTML & CSS - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of HTML semantic elements like header, nav, and article?",
    "options": ["They make the page load faster", "They provide meaningful structure to the document for accessibility and SEO", "They replace the need for CSS", "They only work in specific browsers"],
    "answer": "They provide meaningful structure to the document for accessibility and SEO"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the CSS box model consist of?",
    "options": ["Only width and height", "Content, padding, border, and margin", "Only margin and padding", "Content and border only"],
    "answer": "Content, padding, border, and margin"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which CSS Flexbox property aligns items along the main axis?",
    "options": ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    "answer": "justify-content"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between position: relative and position: absolute?",
    "options": ["They are the same thing", "Relative positions an element relative to its normal position; absolute positions it relative to the nearest positioned ancestor", "Absolute is only for mobile devices", "Relative removes the element from the document flow"],
    "answer": "Relative positions an element relative to its normal position; absolute positions it relative to the nearest positioned ancestor"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which CSS selector has the highest specificity?",
    "options": ["Element selector (p)", "Class selector (.class)", "ID selector (#id)", "Universal selector (*)"],
    "answer": "ID selector (#id)"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between rem and em CSS units?",
    "options": ["rem is for print; em is for screen", "rem is relative to the root font size; em is relative to the parent element's font size", "They are identical", "em is relative to the viewport width"],
    "answer": "rem is relative to the root font size; em is relative to the parent element's font size"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the CSS :hover pseudo-class do?",
    "options": ["Styles an element when it is clicked", "Applies styles when the user's cursor is over an element", "Styles an element when the page loads", "Styles an element when it receives focus via keyboard"],
    "answer": "Applies styles when the user's cursor is over an element"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which HTML element is used to create an input field for email addresses?",
    "options": ["<input type='text'>", "<input type='email'>", "<email>", "<input type='mail'>"],
    "answer": "<input type='email'>"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the CSS transition property control?",
    "options": ["Instant property changes", "The animation of property changes over a specified duration", "The position of elements in the document", "The font size of text"],
    "answer": "The animation of property changes over a specified duration"
  },
  // ==================== HTML & CSS - Expert ====================
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What do CSS container queries allow you to do?",
    "options": ["Query the viewport size only", "Apply styles based on the size of a parent container rather than the viewport", "Query the user's device type", "Replace media queries entirely"],
    "answer": "Apply styles based on the size of a parent container rather than the viewport"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the CSS :has() selector enable?",
    "options": ["Selecting elements based on their children or sibling relationships", "Selecting elements with a specific ID", "Selecting only the first child element", "Selecting elements by their class name"],
    "answer": "Selecting elements based on their children or sibling relationships"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of CSS cascade layers (@layer)?",
    "options": ["They add animations to elements", "They allow explicit control over the order of style precedence, overriding default cascade rules", "They replace the need for specificity", "They only work with inline styles"],
    "answer": "They allow explicit control over the order of style precedence, overriding default cascade rules"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What enables CSS scroll-driven animations?",
    "options": ["JavaScript scroll event listeners only", "Animation timelines linked to scroll position, allowing animations to progress as the user scrolls", "CSS transforms alone", "Media queries for scroll direction"],
    "answer": "Animation timelines linked to scroll position, allowing animations to progress as the user scrolls"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is an advantage of the OKLCH color space over traditional RGB or HSL?",
    "options": ["It uses fewer color values", "It provides perceptually uniform color adjustments and supports a wider gamut of colors", "It is supported by all older browsers", "It only works for grayscale"],
    "answer": "It provides perceptually uniform color adjustments and supports a wider gamut of colors"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does CSS anchor positioning allow developers to do?",
    "options": ["Fix elements to the viewport only", "Position elements relative to other elements (anchor elements) without JavaScript calculations", "Create anchor tags in CSS", "Only position elements at the top of the page"],
    "answer": "Position elements relative to other elements (anchor elements) without JavaScript calculations"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the View Transitions API used for in modern web development?",
    "options": ["It only transitions between HTML pages", "It provides smooth animated transitions between different DOM states or page navigations", "It replaces CSS animations entirely", "It only works with server-side rendering"],
    "answer": "It provides smooth animated transitions between different DOM states or page navigations"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does native CSS nesting improve stylesheet authoring?",
    "options": ["It compiles CSS to JavaScript", "It allows writing nested selectors similar to SCSS without a preprocessor", "It only works with inline styles", "It replaces the need for classes"],
    "answer": "It allows writing nested selectors similar to SCSS without a preprocessor"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the CSS @scope rule designed to do?",
    "options": ["Define global styles", "Limit the range of CSS selectors to a specific part of the DOM, preventing style leakage", "Create scoped JavaScript modules", "Replace media queries"],
    "answer": "Limit the range of CSS selectors to a specific part of the DOM, preventing style leakage"
  },
  // ==================== HTML & CSS - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between CSS Grid and Flexbox?",
    "options": ["They are identical", "Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row or column)", "Flexbox is only for layouts", "Grid does not support responsive design"],
    "answer": "Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row or column)"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the @media rule do in CSS?",
    "options": ["Imports external stylesheets", "Applies styles conditionally based on device characteristics like screen width", "Defines media elements in HTML", "Optimizes images for different devices"],
    "answer": "Applies styles conditionally based on device characteristics like screen width"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do CSS custom properties (variables) improve maintainability?",
    "options": ["They are faster to parse than regular properties", "They allow defining reusable values in one place and updating them globally without searching through the entire stylesheet", "They only work with JavaScript", "They replace the need for class names"],
    "answer": "They allow defining reusable values in one place and updating them globally without searching through the entire stylesheet"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What CSS property allows you to rotate, scale, or skew an element?",
    "options": ["transition", "transform", "animation", "visibility"],
    "answer": "transform"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of the ::before and ::after pseudo-elements?",
    "options": ["They add real HTML elements to the DOM", "They insert decorative or contextual content before or after an element's actual content using CSS", "They replace existing elements", "They only work with images"],
    "answer": "They insert decorative or contextual content before or after an element's actual content using CSS"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the CSS overflow property control?",
    "options": ["The color of an element's background", "What happens when content exceeds the element's defined dimensions", "The position of an element on the page", "The font weight of text"],
    "answer": "What happens when content exceeds the element's defined dimensions"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the CSS filter property do?",
    "options": ["It removes HTML elements from the DOM", "It applies graphical effects like blur, brightness, and grayscale to elements", "It filters network requests", "It sorts elements alphabetically"],
    "answer": "It applies graphical effects like blur, brightness, and grayscale to elements"
  },
  {
    "domain": "Full Stack",
    "category": "HTML & CSS",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does CSS multi-column layout work?",
    "options": ["It only applies to tables", "It automatically splits content into multiple columns using columns or column-count properties", "It requires JavaScript to function", "It is only supported in print stylesheets"],
    "answer": "It automatically splits content into multiple columns using columns or column-count properties"
  },
  // ==================== Next.js - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How does Next.js determine the URL routes for pages in the Pages Router?",
    "options": ["Routes are defined in a configuration file", "Each file in the pages/ directory automatically becomes a route based on its filename", "Routes must be manually registered in a central router", "Only index.js files create routes"],
    "answer": "Each file in the pages/ directory automatically becomes a route based on its filename"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is file-based routing in Next.js?",
    "options": ["It requires a separate routing library", "The file system structure directly maps to application routes without additional configuration", "It only works with the App Router", "It generates routes at runtime from database queries"],
    "answer": "The file system structure directly maps to application routes without additional configuration"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does getServerSideProps do in Next.js?",
    "options": ["It fetches data at build time only", "It runs on the server for every request and passes data as props to the page component", "It handles client-side navigation", "It optimizes images automatically"],
    "answer": "It runs on the server for every request and passes data as props to the page component"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of the Next.js Image component?",
    "options": ["It only displays SVG files", "It optimizes images with automatic lazy loading, resizing, and modern format support", "It replaces the need for CSS", "It handles form submissions"],
    "answer": "It optimizes images with automatic lazy loading, resizing, and modern format support"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Where do you define API routes in a Next.js Pages Router project?",
    "options": ["In the public/ directory", "In the pages/api/ directory where each file becomes an API endpoint", "In a separate Express server file", "In the package.json file"],
    "answer": "In the pages/api/ directory where each file becomes an API endpoint"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the standard Next.js project directory structure?",
    "options": ["All files in the root directory", "pages/, public/, components/, and styles/ directories with configuration files", "Only src/ and dist/ directories", "Just a single index.js file"],
    "answer": "pages/, public/, components/, and styles/ directories with configuration files"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between static and dynamic pages in Next.js?",
    "options": ["They are always generated at runtime", "Static pages are pre-rendered at build time; dynamic pages are rendered per request or at runtime", "Dynamic pages do not support JavaScript", "Static pages cannot be updated"],
    "answer": "Static pages are pre-rendered at build time; dynamic pages are rendered per request or at runtime"
  },
  // ==================== Next.js - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does the Next.js App Router differ from the Pages Router?",
    "options": ["It uses the same file-based routing system", "It introduces layouts, React Server Components, and a new directory-based routing structure under app/", "It only supports static pages", "It removes the need for React"],
    "answer": "It introduces layouts, React Server Components, and a new directory-based routing structure under app/"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the benefit of React Server Components in Next.js?",
    "options": ["They replace client-side JavaScript entirely", "They run on the server, reducing client-side JavaScript bundle size while allowing server-side data fetching and logic", "They only work with static pages", "They cannot use any React hooks"],
    "answer": "They run on the server, reducing client-side JavaScript bundle size while allowing server-side data fetching and logic"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What can Next.js middleware do?",
    "options": ["Only serve static files", "Run code before a request is completed, including rewriting URLs, checking authentication, and modifying headers", "Only handle POST requests", "Only redirect to external sites"],
    "answer": "Run code before a request is completed, including rewriting URLs, checking authentication, and modifying headers"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is Incremental Static Regeneration (ISR) in Next.js?",
    "options": ["It regenerates all pages on every request", "It allows static pages to be regenerated in the background after a specified revalidation period", "It only works with dynamic routes", "It requires a full rebuild to update content"],
    "answer": "It allows static pages to be regenerated in the background after a specified revalidation period"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What do Next.js parallel routes allow you to do?",
    "options": ["Run multiple servers simultaneously", "Render multiple pages in the same layout simultaneously using named slots", "Load pages faster by compressing them", "Only serve pages to authenticated users"],
    "answer": "Render multiple pages in the same layout simultaneously using named slots"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are Next.js intercepting routes used for?",
    "options": ["They block all navigation", "They allow rendering a different page while keeping the URL of the previous page, useful for modals on detail pages", "They intercept API calls", "They redirect all traffic to a single page"],
    "answer": "They allow rendering a different page while keeping the URL of the previous page, useful for modals on detail pages"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the Next.js metadata API provide?",
    "options": ["It only generates sitemaps", "A way to define metadata (title, description, Open Graph tags) for pages using a generateMetadata function or export", "It handles image optimization only", "It manages database connections"],
    "answer": "A way to define metadata (title, description, Open Graph tags) for pages using a generateMetadata function or export"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does streaming SSR work in Next.js?",
    "options": ["It sends the entire page at once after all data loads", "It progressively streams HTML to the client as server components render, using Suspense boundaries", "It only works with static pages", "It requires WebSocket connections"],
    "answer": "It progressively streams HTML to the client as server components render, using Suspense boundaries"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What strategies does Next.js use for cache optimization?",
    "options": ["It does not cache anything by default", "Request memoization, data cache, full route cache, and static generation with revalidation", "It only caches API responses", "It requires Redis for all caching"],
    "answer": "Request memoization, data cache, full route cache, and static generation with revalidation"
  },
  // ==================== Next.js - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you create a dynamic route in the Next.js Pages Router?",
    "options": ["Create a file named [param].js in the pages directory", "Add a query parameter to the URL manually", "Use a special @route annotation", "Dynamic routes are not supported"],
    "answer": "Create a file named [param].js in the pages directory"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "When should you use getStaticProps versus getServerSideProps?",
    "options": ["getStaticProps for all pages", "getStaticProps for content that can be pre-rendered at build time; getServerSideProps for content requiring per-request data", "They are interchangeable", "getServerSideProps is faster than getStaticProps"],
    "answer": "getStaticProps for content that can be pre-rendered at build time; getServerSideProps for content requiring per-request data"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why should you use Next.js Link component instead of a regular a tag?",
    "options": ["It looks visually different", "It enables client-side navigation without full page reloads and preloads linked pages", "It only works with external URLs", "It is required for accessibility"],
    "answer": "It enables client-side navigation without full page reloads and preloads linked pages"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does next/font do for font optimization?",
    "options": ["It loads fonts from external CDNs only", "It self-hosts fonts at build time, eliminating layout shift and improving performance by preloading font files", "It generates random font styles", "It only supports system fonts"],
    "answer": "It self-hosts fonts at build time, eliminating layout shift and improving performance by preloading font files"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How are environment variables accessed in Next.js?",
    "options": ["Only through process.env in server-side code", "Through process.env with NEXT_PUBLIC_ prefix for client-side exposure and without prefix for server-only", "Through import.meta.env only", "They cannot be used in Next.js"],
    "answer": "Through process.env with NEXT_PUBLIC_ prefix for client-side exposure and without prefix for server-only"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the primary deployment platform optimized for Next.js?",
    "options": ["GitHub Pages only", "Vercel, which provides automatic builds, serverless functions, edge network, and zero-configuration deployment", "Heroku exclusively", "AWS S3 static hosting"],
    "answer": "Vercel, which provides automatic builds, serverless functions, edge network, and zero-configuration deployment"
  },
  {
    "domain": "Full Stack",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of API middleware in a Next.js API route?",
    "options": ["To handle database migrations", "To add shared logic (like authentication or validation) that runs before the main route handler", "To generate static pages", "To optimize image loading"],
    "answer": "To add shared logic (like authentication or validation) that runs before the main route handler"
  },
  // ==================== Node.js - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the Node.js event loop?",
    "options": ["A function that runs code on a separate thread", "A mechanism that handles asynchronous operations by processing callbacks and events in a non-blocking manner", "A loop that runs only in browsers", "A way to create new threads for each request"],
    "answer": "A mechanism that handles asynchronous operations by processing callbacks and events in a non-blocking manner"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of the package.json file in a Node.js project?",
    "options": ["It only stores the project's README", "It defines project metadata, dependencies, scripts, and configuration for the project", "It compiles TypeScript to JavaScript", "It manages Git branches"],
    "answer": "It defines project metadata, dependencies, scripts, and configuration for the project"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the key difference between CommonJS and ES modules in Node.js?",
    "options": ["They are identical", "CommonJS uses require/module.exports; ES modules use import/export with static analysis", "ES modules only work in browsers", "CommonJS is deprecated in all Node.js versions"],
    "answer": "CommonJS uses require/module.exports; ES modules use import/export with static analysis"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you read a file asynchronously in Node.js?",
    "options": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.readSync()"],
    "answer": "fs.readFile()"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is Express.js?",
    "options": ["A database management tool", "A minimal and flexible Node.js web application framework for building APIs and web applications", "A frontend JavaScript library", "A CSS preprocessor"],
    "answer": "A minimal and flexible Node.js web application framework for building APIs and web applications"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the Node.js REPL?",
    "options": ["A deployment tool", "An interactive Read-Eval-Print-Loop shell for executing and testing JavaScript code in Node.js", "A package manager", "A testing framework"],
    "answer": "An interactive Read-Eval-Print-Loop shell for executing and testing JavaScript code in Node.js"
  },
  // ==================== Node.js - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of Node.js worker threads?",
    "options": ["They replace the event loop entirely", "They allow running JavaScript in parallel threads for CPU-intensive tasks without blocking the main event loop", "They only handle HTTP requests", "They are used for database connections only"],
    "answer": "They allow running JavaScript in parallel threads for CPU-intensive tasks without blocking the main event loop"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How can you diagnose memory leaks in a Node.js application?",
    "options": ["Restart the server periodically", "Use the V8 inspector, heap snapshots, and memory profiling tools to identify objects not being garbage collected", "Check the CPU usage only", "Use console.log statements exclusively"],
    "answer": "Use the V8 inspector, heap snapshots, and memory profiling tools to identify objects not being garbage collected"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How should errors be handled in Express.js error handling middleware?",
    "options": ["With a regular route handler", "With a middleware function that takes four parameters (err, req, res, next) to catch and respond to errors centrally", "By throwing uncaught exceptions", "By returning undefined"],
    "answer": "With a middleware function that takes four parameters (err, req, res, next) to catch and respond to errors centrally"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is stream backpressure in Node.js?",
    "options": ["The pressure exerted on the CPU by streams", "A situation where a readable stream produces data faster than a writable stream can consume it, requiring flow control", "A method to compress stream data", "A way to increase stream buffer size"],
    "answer": "A situation where a readable stream produces data faster than a writable stream can consume it, requiring flow control"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the Node.js cluster module do?",
    "options": ["It connects to database clusters", "It allows spawning multiple Node.js processes to utilize multiple CPU cores and improve application throughput", "It manages npm package versions", "It handles file system operations"],
    "answer": "It allows spawning multiple Node.js processes to utilize multiple CPU cores and improve application throughput"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are Node.js native addons?",
    "options": ["JavaScript packages from npm", "C++ modules compiled with node-gyp that provide access to low-level system APIs not available in JavaScript", "Built-in Node.js HTTP server features", "CSS modules for Node.js"],
    "answer": "C++ modules compiled with node-gyp that provide access to low-level system APIs not available in JavaScript"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How can the Node.js event loop performance be optimized?",
    "options": ["Run all tasks synchronously", "Avoid blocking the event loop with CPU-heavy tasks by offloading to worker threads or splitting work into smaller chunks", "Increase the event loop delay to 10 seconds", "Disable asynchronous operations"],
    "answer": "Avoid blocking the event loop with CPU-heavy tasks by offloading to worker threads or splitting work into smaller chunks"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which is a Node.js security best practice?",
    "options": ["Store secrets in source code", "Use helmet middleware, validate inputs, set security headers, and keep dependencies updated", "Disable all logging", "Run the application as root"],
    "answer": "Use helmet middleware, validate inputs, set security headers, and keep dependencies updated"
  },
  // ==================== Node.js - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you define a route in Express.js?",
    "options": ["app.route('/path', handler)", "app.get('/path', handler) or app.post('/path', handler)", "router.create('/path')", "express.define('/path')"],
    "answer": "app.get('/path', handler) or app.post('/path', handler)"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is Express.js middleware?",
    "options": ["A database query language", "Functions that have access to the request and response objects and can execute code, modify responses, or call the next middleware", "A way to define HTML templates", "A method for static file serving only"],
    "answer": "Functions that have access to the request and response objects and can execute code, modify responses, or call the next middleware"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the Express.json() middleware do?",
    "options": ["It serves JSON files statically", "It parses incoming JSON request bodies and makes the data available on req.body", "It converts responses to JSON format", "It validates JSON schema"],
    "answer": "It parses incoming JSON request bodies and makes the data available on req.body"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you render an HTML template with EJS in Express.js?",
    "options": ["res.sendFile('template.html')", "res.render('template', { data })", "res.json('template')", "res.redirect('template')"],
    "answer": "res.render('template', { data })"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the role of Multer middleware in Express.js?",
    "options": ["It handles database connections", "It processes multipart/form-data requests for handling file uploads", "It compresses HTTP responses", "It authenticates API requests"],
    "answer": "It processes multipart/form-data requests for handling file uploads"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How should errors be handled in Express.js route handlers?",
    "options": ["Ignore them silently", "Use try-catch for async code and pass errors to next() or the error handling middleware", "Always crash the server", "Return 200 status codes for all errors"],
    "answer": "Use try-catch for async code and pass errors to next() or the error handling middleware"
  },
  {
    "domain": "Full Stack",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between cookies and sessions in Express.js?",
    "options": ["They are the same thing", "Cookies store data on the client; sessions store data on the server with a session ID in the cookie", "Sessions are smaller than cookies", "Cookies are more secure than sessions"],
    "answer": "Cookies store data on the client; sessions store data on the server with a session ID in the cookie"
  },
  // ==================== React - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is React?",
    "options": ["A server-side framework for databases", "A JavaScript library for building user interfaces using a component-based architecture", "A CSS framework for styling", "A package manager for Node.js"],
    "answer": "A JavaScript library for building user interfaces using a component-based architecture"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does JSX allow you to do in React?",
    "options": ["Write CSS directly in JavaScript", "Write HTML-like syntax within JavaScript to describe UI elements", "Replace the need for components", "Handle database queries"],
    "answer": "Write HTML-like syntax within JavaScript to describe UI elements"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you create a function component in React?",
    "options": ["Using the React.Component class only", "By defining a JavaScript function that returns JSX", "Using the React.createElement API directly", "By writing HTML files"],
    "answer": "By defining a JavaScript function that returns JSX"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are props in React?",
    "options": ["Internal component state that can change", "Read-only inputs passed from a parent component to a child component", "CSS styling properties", "Event handlers only"],
    "answer": "Read-only inputs passed from a parent component to a child component"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the useState hook do?",
    "options": ["It handles HTTP requests", "It adds state management to function components", "It creates new components", "It optimizes performance automatically"],
    "answer": "It adds state management to function components"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "When does the useEffect hook run by default?",
    "options": ["Only when state changes", "After every render of the component", "Only once when the component is first created", "Only when props change"],
    "answer": "After every render of the component"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you handle click events in React?",
    "options": ["Using the onclick HTML attribute directly", "Using the onClick prop with a handler function on JSX elements", "Using addEventListener in the render method", "Events are not supported in React"],
    "answer": "Using the onClick prop with a handler function on JSX elements"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you conditionally render elements in React?",
    "options": ["Using CSS display property only", "Using JavaScript expressions like ternary operators or && inside JSX", "Using a special render-if attribute", "Conditional rendering is not possible in React"],
    "answer": "Using JavaScript expressions like ternary operators or && inside JSX"
  },
  // ==================== React - Expert ====================
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What problem does the React Context API solve?",
    "options": ["It replaces the need for components", "It provides a way to pass data through the component tree without manually passing props at every level (prop drilling)", "It handles form validation", "It manages CSS styles globally"],
    "answer": "It provides a way to pass data through the component tree without manually passing props at every level (prop drilling)"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When should you use React.memo()?",
    "options": ["On every component in the application", "On components that receive the same props frequently and re-render unnecessarily, to skip re-renders when props have not changed", "Only on class components", "Only on components with no state"],
    "answer": "On components that receive the same props frequently and re-render unnecessarily, to skip re-renders when props have not changed"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of a custom hook in React?",
    "options": ["To replace the need for components", "To extract and reuse stateful logic across multiple components without duplicating code", "To handle routing only", "To create global CSS styles"],
    "answer": "To extract and reuse stateful logic across multiple components without duplicating code"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does React.lazy() enable?",
    "options": ["It makes components render faster automatically", "It allows code-splitting by dynamically importing components only when they are needed", "It delays state initialization", "It creates async components without Suspense"],
    "answer": "It allows code-splitting by dynamically importing components only when they are needed"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of an error boundary in React?",
    "options": ["It catches errors in event handlers", "It catches JavaScript errors in child component trees and displays a fallback UI instead of crashing the entire application", "It handles API errors", "It validates prop types"],
    "answer": "It catches JavaScript errors in child component trees and displays a fallback UI instead of crashing the entire application"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between useRef and createRef?",
    "options": ["They are identical", "useRef persists across renders in function components; createRef creates a new ref on every render", "createRef only works in class components", "useRef cannot be used with DOM elements"],
    "answer": "useRef persists across renders in function components; createRef creates a new ref on every render"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a React portal used for?",
    "options": ["It routes between pages", "It renders children into a different part of the DOM tree, outside the parent component's hierarchy, useful for modals and tooltips", "It sends data to the server", "It creates new React instances"],
    "answer": "It renders children into a different part of the DOM tree, outside the parent component's hierarchy, useful for modals and tooltips"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a state machine in the context of React application architecture?",
    "options": ["A component that always shows a loading spinner", "An explicit model of all possible states and transitions for a UI component, often implemented with libraries like XState", "A way to manage global CSS state", "A database connection state"],
    "answer": "An explicit model of all possible states and transitions for a UI component, often implemented with libraries like XState"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What technique does React use for efficient DOM updates?",
    "options": ["It replaces the entire DOM on every change", "It uses a virtual DOM to diff changes and minimally update only the necessary parts of the real DOM", "It uses direct DOM manipulation only", "It does not interact with the DOM"],
    "answer": "It uses a virtual DOM to diff changes and minimally update only the necessary parts of the real DOM"
  },
  // ==================== React - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "When should you use the useReducer hook instead of useState?",
    "options": ["For simple boolean state", "When state logic is complex, involves multiple sub-values, or the next state depends on the previous state", "When you need to make HTTP requests", "When you want to optimize rendering"],
    "answer": "When state logic is complex, involves multiple sub-values, or the next state depends on the previous state"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the return value of a useEffect cleanup function used for?",
    "options": ["It restarts the component", "It performs cleanup actions (like unsubscribing from events or canceling timers) before the component unmounts or before the effect runs again", "It resets the state to initial values", "It triggers a re-render"],
    "answer": "It performs cleanup actions (like unsubscribing from events or canceling timers) before the component unmounts or before the effect runs again"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What approach should be used for handling form submissions in React?",
    "options": ["Using the action attribute on form elements", "Using controlled components with onChange handlers and onSubmit to manage form state in React", "Using innerHTML to modify forms", "Forms are not supported in React"],
    "answer": "Using controlled components with onChange handlers and onSubmit to manage form state in React"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the React children prop used for?",
    "options": ["It stores child component state", "It allows a component to receive and render its child elements, enabling composition patterns", "It handles routing between components", "It manages CSS classes"],
    "answer": "It allows a component to receive and render its child elements, enabling composition patterns"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why is the key prop important when rendering lists in React?",
    "options": ["It provides styling to list items", "It helps React identify which items have changed, been added, or removed for efficient re-rendering", "It is optional and does not affect performance", "It only works with string values"],
    "answer": "It helps React identify which items have changed, been added, or removed for efficient re-rendering"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the advantage of using CSS Modules in a React project?",
    "options": ["They make CSS globally available", "They scope CSS class names locally to the component, preventing naming conflicts between components", "They replace the need for CSS entirely", "They only work with inline styles"],
    "answer": "They scope CSS class names locally to the component, preventing naming conflicts between components"
  },
  {
    "domain": "Full Stack",
    "category": "React",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a common React component composition pattern?",
    "options": ["Writing all logic in a single component", "Breaking the UI into small, reusable components and composing them together using props and children", "Using global state for everything", "Avoiding component reuse"],
    "answer": "Breaking the UI into small, reusable components and composing them together using props and children"
  },
  // ==================== Security - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is HTTPS important for web applications?",
    "options": ["It makes pages load faster", "It encrypts data transmitted between the client and server, preventing eavesdropping and tampering", "It replaces the need for authentication", "It only applies to email servers"],
    "answer": "It encrypts data transmitted between the client and server, preventing eavesdropping and tampering"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why should passwords never be stored in plain text in a database?",
    "options": ["Plain text passwords are too large for storage", "If the database is compromised, attackers would have direct access to all user passwords", "Plain text passwords slow down login", "Databases do not support plain text"],
    "answer": "If the database is compromised, attackers would have direct access to all user passwords"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a cross-site scripting (XSS) attack?",
    "options": ["A database injection attack", "An attack where malicious scripts are injected into web pages viewed by other users", "A brute force login attempt", "A denial of service attack"],
    "answer": "An attack where malicious scripts are injected into web pages viewed by other users"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does CORS (Cross-Origin Resource Sharing) control?",
    "options": ["It encrypts API responses", "It determines which origins are allowed to access resources from a different domain", "It manages database connections", "It handles file uploads"],
    "answer": "It determines which origins are allowed to access resources from a different domain"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of API authentication?",
    "options": ["To make API responses faster", "To verify the identity of clients making requests to the API", "To cache API responses", "To log API usage"],
    "answer": "To verify the identity of clients making requests to the API"
  },
  // ==================== Security - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a JWT security best practice regarding token storage?",
    "options": ["Store JWTs in localStorage for easy access", "Store JWTs in HTTP-only, secure cookies to prevent XSS attacks from accessing the token", "Embed JWTs in URLs for convenience", "Store JWTs in session storage without any protection"],
    "answer": "Store JWTs in HTTP-only, secure cookies to prevent XSS attacks from accessing the token"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of the Authorization Code flow with PKCE in OAuth2?",
    "options": ["It is only for server-to-server communication", "It adds a code verifier challenge to the authorization code flow to prevent authorization code interception attacks in public clients", "It replaces the need for client secrets", "It is only used for mobile apps"],
    "answer": "It adds a code verifier challenge to the authorization code flow to prevent authorization code interception attacks in public clients"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does a Content Security Policy (CSP) header do?",
    "options": ["It encrypts all page content", "It specifies which sources of content (scripts, styles, images) the browser is allowed to load, preventing XSS attacks", "It manages CORS headers", "It caches API responses"],
    "answer": "It specifies which sources of content (scripts, styles, images) the browser is allowed to load, preventing XSS attacks"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does parameterized query usage prevent SQL injection?",
    "options": ["It encrypts the SQL query", "It separates SQL query structure from data, ensuring user input is treated as data, not executable code", "It limits the number of database connections", "It uses stored procedures exclusively"],
    "answer": "It separates SQL query structure from data, ensuring user input is treated as data, not executable code"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a CSRF token and how does it protect against cross-site request forgery?",
    "options": ["It encrypts cookies automatically", "It is a unique, unpredictable value included in forms that the server validates to ensure requests originate from the legitimate site", "It blocks all cross-origin requests", "It only applies to API endpoints"],
    "answer": "It is a unique, unpredictable value included in forms that the server validates to ensure requests originate from the legitimate site"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How can rate limiting be used as a security measure?",
    "options": ["It improves application performance", "It limits the number of requests from a single source within a time window, preventing brute force attacks and API abuse", "It caches API responses", "It encrypts data in transit"],
    "answer": "It limits the number of requests from a single source within a time window, preventing brute force attacks and API abuse"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is API key rotation and why is it important?",
    "options": ["It changes the API key format periodically", "It involves regularly replacing API keys to limit the impact if a key is compromised and to enforce security policies", "It is only needed for development keys", "It changes the API endpoint URLs"],
    "answer": "It involves regularly replacing API keys to limit the impact if a key is compromised and to enforce security policies"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What makes a session management implementation secure?",
    "options": ["Using predictable session IDs", "Using cryptographically random session IDs, setting appropriate timeouts, invalidating sessions on logout, and using secure cookie attributes", "Storing sessions in localStorage", "Sharing sessions between users"],
    "answer": "Using cryptographically random session IDs, setting appropriate timeouts, invalidating sessions on logout, and using secure cookie attributes"
  },
  // ==================== Security - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between authentication and authorization?",
    "options": ["They are the same thing", "Authentication verifies identity; authorization determines what resources an authenticated user can access", "Authentication is for APIs only; authorization is for browsers", "Authorization always comes before authentication"],
    "answer": "Authentication verifies identity; authorization determines what resources an authenticated user can access"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the steps in a token-based authentication flow?",
    "options": ["User logs in and receives a token, includes the token in subsequent requests, server validates the token", "User sends password with every request", "Token is generated once and never expires", "Server stores the token on the client's device"],
    "answer": "User logs in and receives a token, includes the token in subsequent requests, server validates the token"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is role-based access control (RBAC)?",
    "options": ["A method to control network traffic", "An access control model where permissions are assigned to roles, and users are assigned to those roles", "A database backup strategy", "A way to manage API keys"],
    "answer": "An access control model where permissions are assigned to roles, and users are assigned to those roles"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why is bcrypt preferred over MD5 or SHA for password hashing?",
    "options": ["It is faster to compute", "It includes a salt and is designed to be computationally slow, making brute force attacks impractical", "It produces shorter hash values", "It does not require a salt"],
    "answer": "It includes a salt and is designed to be computationally slow, making brute force attacks impractical"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which security headers should be set in API responses?",
    "options": ["Only Content-Type", "X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, and Content-Security-Policy", "Only Accept headers", "Only Authorization headers"],
    "answer": "X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, and Content-Security-Policy"
  },
  {
    "domain": "Full Stack",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of input sanitization in web applications?",
    "options": ["To improve form styling", "To clean and validate user input to prevent injection attacks, XSS, and other security vulnerabilities", "To compress user data", "To format dates consistently"],
    "answer": "To clean and validate user input to prevent injection attacks, XSS, and other security vulnerabilities"
  },
  // ==================== System Design - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of a load balancer?",
    "options": ["To store database backups", "To distribute incoming network traffic across multiple servers to ensure no single server is overwhelmed", "To encrypt data in transit", "To manage DNS records"],
    "answer": "To distribute incoming network traffic across multiple servers to ensure no single server is overwhelmed"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is caching in the context of system design?",
    "options": ["Storing data permanently in a database", "Storing frequently accessed data in a fast, temporary storage layer to reduce database load and improve response times", "Compressing network traffic", "Backing up data to the cloud"],
    "answer": "Storing frequently accessed data in a fast, temporary storage layer to reduce database load and improve response times"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is database indexing?",
    "options": ["Creating a backup of the database", "A data structure that improves the speed of data retrieval operations on a database table at the cost of additional storage", "Encrypting database columns", "Deleting old database records"],
    "answer": "A data structure that improves the speed of data retrieval operations on a database table at the cost of additional storage"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a message queue used for in system design?",
    "options": ["Serving static files to users", "Enabling asynchronous communication between services by buffering messages until they are processed by consumers", "Managing user sessions", "Rendering HTML templates"],
    "answer": "Enabling asynchronous communication between services by buffering messages until they are processed by consumers"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between horizontal and vertical scaling?",
    "options": ["Horizontal means upgrading a single server; vertical means adding more servers", "Horizontal means adding more servers to a pool; vertical means increasing the resources of a single server", "They are the same strategy", "Vertical scaling is always cheaper"],
    "answer": "Horizontal means adding more servers to a pool; vertical means increasing the resources of a single server"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a key difference between microservices and monolithic architecture?",
    "options": ["Microservices are always faster", "A monolith is a single deployable unit; microservices are independent, loosely coupled services that can be deployed separately", "Microservices cannot communicate with each other", "Monoliths are easier to scale horizontally"],
    "answer": "A monolith is a single deployable unit; microservices are independent, loosely coupled services that can be deployed separately"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a CDN (Content Delivery Network)?",
    "options": ["A type of database", "A distributed network of servers that delivers cached content to users from the server closest to their geographic location", "A source code repository", "A load testing tool"],
    "answer": "A distributed network of servers that delivers cached content to users from the server closest to their geographic location"
  },
  // ==================== System Design - Expert ====================
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What trade-offs does the CAP theorem describe?",
    "options": ["Cost, availability, and performance", "A distributed system can only guarantee two of three properties simultaneously: Consistency, Availability, and Partition tolerance", "CPU, API, and process", "Cache, API, and proxy"],
    "answer": "A distributed system can only guarantee two of three properties simultaneously: Consistency, Availability, and Partition tolerance"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a database sharding strategy?",
    "options": ["Creating a backup of the entire database", "Partitioning data horizontally across multiple database instances so each shard holds a subset of the data", "Encrypting all database tables", "Running queries in parallel on a single server"],
    "answer": "Partitioning data horizontally across multiple database instances so each shard holds a subset of the data"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are the key characteristics of event-driven architecture?",
    "options": ["Components poll each other for data", "Components communicate through events, enabling loose coupling, asynchronous processing, and scalability", "All components must be tightly coupled", "Events are only used for logging"],
    "answer": "Components communicate through events, enabling loose coupling, asynchronous processing, and scalability"
  },
  // ==================== System Design - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are common caching strategies in system design?",
    "options": ["Write-through, write-back, and cache-aside", "Only in-memory caching", "Only CDN caching", "Only database-level caching"],
    "answer": "Write-through, write-back, and cache-aside"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What considerations are important when designing a database for scale?",
    "options": ["Using only a single database server", "Choosing between SQL and NoSQL based on data patterns, implementing sharding, replication, and proper indexing", "Storing all data in a single table", "Avoiding any form of indexing"],
    "answer": "Choosing between SQL and NoSQL based on data patterns, implementing sharding, replication, and proper indexing"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How should an API be designed to handle high traffic?",
    "options": ["Increase response time deliberately", "Implement caching, rate limiting, pagination, compression, and horizontal scaling", "Return all data at once without pagination", "Disable all security measures"],
    "answer": "Implement caching, rate limiting, pagination, compression, and horizontal scaling"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between pub/sub and task queue patterns in message queues?",
    "options": ["They are identical", "Pub/sub broadcasts messages to all subscribers; task queues dispatch tasks to specific workers for processing", "Task queues only support one consumer", "Pub/sub is synchronous only"],
    "answer": "Pub/sub broadcasts messages to all subscribers; task queues dispatch tasks to specific workers for processing"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What architecture pattern is used for implementing a search engine at scale?",
    "options": ["Simple SQL LIKE queries", "Inverted indexes, distributed indexing, sharding, and query-time ranking using engines like Elasticsearch", "Full table scans on every query", "Storing search results in the database permanently"],
    "answer": "Inverted indexes, distributed indexing, sharding, and query-time ranking using engines like Elasticsearch"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are key components of a real-time system design?",
    "options": ["Polling the server every minute", "WebSocket connections, event streaming (Kafka), and low-latency message brokers", "Batch processing only", "Static HTML pages"],
    "answer": "WebSocket connections, event streaming (Kafka), and low-latency message brokers"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What considerations are important for file storage system design?",
    "options": ["Storing all files on a single server", "Redundancy, versioning, metadata storage, distributed storage, and efficient retrieval mechanisms", "Only storing files locally", "Avoiding any backup strategy"],
    "answer": "Redundancy, versioning, metadata storage, distributed storage, and efficient retrieval mechanisms"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What components should a notification system include?",
    "options": ["Only email sending", "A message queue, multiple delivery channels (email, push, SMS), retry logic, and preference management", "A single cron job", "Only browser notifications"],
    "answer": "A message queue, multiple delivery channels (email, push, SMS), retry logic, and preference management"
  },
  {
    "domain": "Full Stack",
    "category": "System Design",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are essential design considerations for a payment system?",
    "options": ["Storing credit card numbers directly in the database", "PCI compliance, idempotency, transaction atomicity, fraud detection, and retry mechanisms", "Processing payments synchronously only", "Using a single payment provider without fallback"],
    "answer": "PCI compliance, idempotency, transaction atomicity, fraud detection, and retry mechanisms"
  },
  // ==================== Version Control - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the 'git init' command do?",
    "options": ["Clones a remote repository", "Creates a new Git repository in the current directory", "Commits all changes", "Deletes the repository"],
    "answer": "Creates a new Git repository in the current directory"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of 'git add' before committing?",
    "options": ["It commits changes directly", "It stages changes to be included in the next commit", "It pushes changes to the remote repository", "It creates a new branch"],
    "answer": "It stages changes to be included in the next commit"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does 'git commit' do?",
    "options": ["Sends changes to the remote repository", "Saves staged changes as a new snapshot in the local repository history with a message", "Merges two branches", "Creates a new file"],
    "answer": "Saves staged changes as a new snapshot in the local repository history with a message"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of 'git branch'?",
    "options": ["To delete files from the repository", "To create, list, or delete branches in the repository", "To merge changes from different branches", "To view the commit history"],
    "answer": "To create, list, or delete branches in the repository"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does 'git merge' do?",
    "options": ["It deletes a branch", "It combines changes from one branch into another", "It creates a new branch", "It shows the differences between files"],
    "answer": "It combines changes from one branch into another"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of the .gitignore file?",
    "options": ["It lists all files to be committed", "It tells Git which files or directories to ignore and not track in version control", "It configures Git aliases", "It defines merge strategies"],
    "answer": "It tells Git which files or directories to ignore and not track in version control"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does 'git log' show?",
    "options": ["The current Git configuration", "A chronological list of commits in the repository with their messages and metadata", "The status of modified files", "The list of remote branches"],
    "answer": "A chronological list of commits in the repository with their messages and metadata"
  },
  // ==================== Version Control - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between git rebase and git merge?",
    "options": ["They produce identical results", "Rebase rewrites commit history to create a linear sequence; merge preserves the full branch history with a merge commit", "Merge is faster than rebase always", "Rebase creates a merge commit"],
    "answer": "Rebase rewrites commit history to create a linear sequence; merge preserves the full branch history with a merge commit"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does 'git cherry-pick' do?",
    "options": ["Deletes a specific commit", "Applies the changes from a specific commit from one branch onto another branch", "Merges all commits from another branch", "Creates a new commit from an existing one"],
    "answer": "Applies the changes from a specific commit from one branch onto another branch"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of 'git bisect'?",
    "options": ["It splits a branch into two", "It performs a binary search through commit history to identify the exact commit that introduced a bug", "It merges two branches together", "It creates a new tag"],
    "answer": "It performs a binary search through commit history to identify the exact commit that introduced a bug"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What can a git pre-commit hook do?",
    "options": ["Push code to the remote repository", "Run automated checks (like linting or tests) before a commit is created, preventing bad commits", "Merge branches automatically", "Create new branches"],
    "answer": "Run automated checks (like linting or tests) before a commit is created, preventing bad commits"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of git submodules?",
    "options": ["To compress repository size", "To include and manage external repositories as dependencies within a parent Git repository", "To create nested branches", "To manage npm packages"],
    "answer": "To include and manage external repositories as dependencies within a parent Git repository"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the trunk-based development workflow?",
    "options": ["Using long-lived feature branches", "Developers commit frequently to a single main branch (trunk) using short-lived feature branches and feature flags", "Never using branches", "Only committing to release branches"],
    "answer": "Developers commit frequently to a single main branch (trunk) using short-lived feature branches and feature flags"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the best approach to resolve a complex merge conflict?",
    "options": ["Always accept the incoming changes", "Understand the intent of both sides, manually resolve the conflict, and run tests before committing the resolution", "Delete the conflicting file", "Ignore the conflict and commit anyway"],
    "answer": "Understand the intent of both sides, manually resolve the conflict, and run tests before committing the resolution"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is Git LFS (Large File Storage)?",
    "options": ["A way to store Git config files", "An extension that replaces large files with text pointers in Git while storing the actual file contents on a remote server", "A backup tool for Git repositories", "A way to merge large branches"],
    "answer": "An extension that replaces large files with text pointers in Git while storing the actual file contents on a remote server"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does 'git stash' do in advanced usage?",
    "options": ["It permanently deletes changes", "It temporarily shelves uncommitted changes so you can work on a different branch without committing incomplete work", "It creates a new branch from the stashed changes", "It pushes stashed changes to the remote"],
    "answer": "It temporarily shelves uncommitted changes so you can work on a different branch without committing incomplete work"
  },
  // ==================== Version Control - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the GitFlow branching strategy?",
    "options": ["Using only the main branch", "A structured workflow with main, develop, feature, release, and hotfix branches for managing releases", "Committing directly to production", "Never using feature branches"],
    "answer": "A structured workflow with main, develop, feature, release, and hotfix branches for managing releases"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "When should you prefer git rebase over git merge?",
    "options": ["When you want to preserve the full branch history", "When you want a clean, linear commit history for a feature branch before integrating it", "When working on a shared public branch", "Never - rebase should always be avoided"],
    "answer": "When you want a clean, linear commit history for a feature branch before integrating it"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of git stash during development?",
    "options": ["To permanently remove uncommitted changes", "To temporarily save working directory changes so you can switch contexts and apply them later", "To push changes to a remote branch", "To create a backup of the repository"],
    "answer": "To temporarily save working directory changes so you can switch contexts and apply them later"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are Git tags used for?",
    "options": ["To organize commits by topic", "To mark specific points in history as important, typically used for version releases", "To create new branches", "To ignore files in the repository"],
    "answer": "To mark specific points in history as important, typically used for version releases"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between git reset and git revert?",
    "options": ["They do the same thing", "git reset moves the HEAD to undo commits; git revert creates a new commit that undoes changes from a previous commit", "git revert is destructive; git reset is safe", "git reset only works on the main branch"],
    "answer": "git reset moves the HEAD to undo commits; git revert creates a new commit that undoes changes from a previous commit"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does 'git blame' show?",
    "options": ["Who deleted a file", "The author and date of the last modification for each line in a file", "The difference between two branches", "The list of untracked files"],
    "answer": "The author and date of the last modification for each line in a file"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does 'git diff' display?",
    "options": ["The commit history", "The differences between files in the working directory, staging area, and commits", "The list of remote repositories", "The configuration settings"],
    "answer": "The differences between files in the working directory, staging area, and commits"
  },
  {
    "domain": "Full Stack",
    "category": "Version Control",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a pull request in collaborative Git workflows?",
    "options": ["A command to pull the latest changes", "A proposal to merge changes from one branch into another, enabling code review and discussion before integration", "A way to force push changes", "A method to delete remote branches"],
    "answer": "A proposal to merge changes from one branch into another, enabling code review and discussion before integration"
  },
  // ==================== Web Fundamentals - Beginner ====================
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What happens during an HTTP request/response cycle?",
    "options": ["The browser sends HTML to the server", "The client sends a request to a server, which processes it and returns a response with a status code and data", "The server pushes data to the client automatically", "DNS resolves the IP address to a domain name"],
    "answer": "The client sends a request to a server, which processes it and returns a response with a status code and data"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What role does DNS play when a user types a URL in the browser?",
    "options": ["It encrypts the connection", "It translates the human-readable domain name into an IP address that servers can locate", "It caches the webpage for faster loading", "It manages cookies for the session"],
    "answer": "It translates the human-readable domain name into an IP address that servers can locate"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the basic steps the browser takes to render a web page?",
    "options": ["It only downloads images", "It parses HTML to build the DOM, parses CSS to build the CSSOM, combines them into a render tree, and paints pixels to the screen", "It directly executes JavaScript before parsing HTML", "It sends the page to a cloud renderer"],
    "answer": "It parses HTML to build the DOM, parses CSS to build the CSSOM, combines them into a render tree, and paints pixels to the screen"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the key difference between cookies and localStorage?",
    "options": ["They are identical", "Cookies are sent with every HTTP request and have expiration; localStorage persists data on the client without automatic expiration", "localStorage is more secure than cookies", "Cookies can store more data than localStorage"],
    "answer": "Cookies are sent with every HTTP request and have expiration; localStorage persists data on the client without automatic expiration"
  },
  // ==================== Web Fundamentals - Expert ====================
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are the key performance advantages of HTTP/2 over HTTP/1.1?",
    "options": ["It uses UDP instead of TCP", "It supports multiplexing multiple requests over a single connection, header compression, and server push", "It only works with HTTPS", "It removes the need for TLS"],
    "answer": "It supports multiplexing multiple requests over a single connection, header compression, and server push"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does browser caching with Cache-Control headers improve performance?",
    "options": ["It compresses all network traffic", "It instructs the browser to store and reuse previously fetched resources, reducing redundant network requests", "It preloads all pages the user might visit", "It eliminates the need for a CDN"],
    "answer": "It instructs the browser to store and reuse previously fetched resources, reducing redundant network requests"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are the lifecycle stages of a service worker?",
    "options": ["Install, activate, and fetch", "Install, activate, and a fetch event listener that handles network requests", "Register, cache, and serve", "Download, parse, and execute"],
    "answer": "Install, activate, and a fetch event listener that handles network requests"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is WebAssembly primarily used for in web applications?",
    "options": ["Replacing HTML entirely", "Running compiled C, C++, or Rust code at near-native speed for performance-critical tasks", "Managing database connections from the browser", "Styling web pages with a binary format"],
    "answer": "Running compiled C, C++, or Rust code at near-native speed for performance-critical tasks"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does a Content Security Policy help prevent cross-site scripting?",
    "options": ["It encrypts all page content", "It defines whitelists of allowed content sources, blocking scripts from unauthorized origins", "It disables JavaScript entirely", "It caches all resources locally"],
    "answer": "It defines whitelists of allowed content sources, blocking scripts from unauthorized origins"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What web performance metrics should be monitored using browser profiling tools?",
    "options": ["Only the total page size", "Core Web Vitals (LCP, FID, CLS), time to first byte, and first contentful paint", "Only the number of HTTP requests", "Only JavaScript execution time"],
    "answer": "Core Web Vitals (LCP, FID, CLS), time to first byte, and first contentful paint"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How can browser developer tools be used to profile web application performance?",
    "options": ["They only display HTML source code", "They provide flame charts for CPU profiling, network waterfall analysis, and memory snapshots", "They only debug CSS issues", "They cannot measure runtime performance"],
    "answer": "They provide flame charts for CPU profiling, network waterfall analysis, and memory snapshots"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are the fundamentals of SEO for web applications?",
    "options": ["Only adding meta keywords", "Proper semantic HTML, structured data markup, fast page loads, mobile-friendliness, and crawlable URLs", "Only creating backlinks", "Only using JavaScript for rendering"],
    "answer": "Proper semantic HTML, structured data markup, fast page loads, mobile-friendliness, and crawlable URLs"
  },
  // ==================== Web Fundamentals - Intermediate ====================
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the five main HTTP methods and their primary purposes?",
    "options": ["GET, POST, PUT, DELETE, and PATCH for CRUD operations and partial updates", "GET, POST, PUT, DELETE, and HEAD for security only", "GET, POST, PUT, DELETE, and OPTIONS for caching only", "GET, POST, PUT, DELETE, and CONNECT for WebSocket connections"],
    "answer": "GET, POST, PUT, DELETE, and PATCH for CRUD operations and partial updates"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the main browser storage options available for web applications?",
    "options": ["Only cookies", "Cookies, localStorage, sessionStorage, IndexedDB, and the Cache API", "Only localStorage and cookies", "Only sessionStorage"],
    "answer": "Cookies, localStorage, sessionStorage, IndexedDB, and the Cache API"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does the CORS preflight request work?",
    "options": ["It sends the full request body twice", "The browser sends an OPTIONS request first to check if the server allows the actual request", "It only applies to GET requests", "It bypasses all security checks"],
    "answer": "The browser sends an OPTIONS request first to check if the server allows the actual request"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which security headers protect web applications from common attacks?",
    "options": ["Only the Authorization header", "Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy", "Only the Content-Type header", "Only the Accept header"],
    "answer": "Strict-Transport-Security, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the core characteristics of a Progressive Web App (PWA)?",
    "options": ["It must be built with React", "It is installable, works offline, loads fast, and provides a native app-like experience using service workers", "It only works on Android devices", "It requires a native wrapper like Cordova"],
    "answer": "It is installable, works offline, loads fast, and provides a native app-like experience using service workers"
  },
  {
    "domain": "Full Stack",
    "category": "Web Fundamentals",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What strategies optimize web font loading performance?",
    "options": ["Loading all fonts from Google Fonts", "Using font-display swap, self-hosting fonts, preloading critical fonts, and using system font stacks as fallbacks", "Embedding fonts as base64 in CSS", "Using only web-safe fonts like Arial"],
    "answer": "Using font-display swap, self-hosting fonts, preloading critical fonts, and using system font stacks as fallbacks"
  }
];
module.exports = supplementFullStack;
