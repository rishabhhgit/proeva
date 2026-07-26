const supplementBackend = [
  // ==================== API Design - Beginner (6) ====================
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which HTTP method is used to create a new resource in a REST API?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "answer": "POST"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the HTTP status code 404 indicate?",
    "options": ["Server error", "Resource not found", "Unauthorized access", "Request successful"],
    "answer": "Resource not found"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which HTTP status code should be returned when a resource is successfully created?",
    "options": ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently"],
    "answer": "201 Created"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the recommended URL naming convention for listing all users in a REST API?",
    "options": ["/getUsers", "/Users", "/api/users", "/api/getAllUsers"],
    "answer": "/api/users"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which HTTP method is used to update an existing resource entirely?",
    "options": ["GET", "POST", "PUT", "PATCH"],
    "answer": "PUT"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of API documentation tools like Swagger/OpenAPI?",
    "options": ["To test APIs automatically", "To describe and document API endpoints", "To monitor API performance", "To cache API responses"],
    "answer": "To describe and document API endpoints"
  },

  // ==================== API Design - Expert (9) ====================
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which API versioning strategy embeds the version directly in the URL path?",
    "options": ["Query parameter versioning", "Header versioning", "URL path versioning", "Content negotiation"],
    "answer": "URL path versioning"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which rate limiting algorithm uses a fixed window counter that resets at regular intervals?",
    "options": ["Token bucket", "Sliding window log", "Fixed window counter", "Leaky bucket"],
    "answer": "Fixed window counter"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In OAuth2, which grant type is used by server-side applications that can securely store client secrets?",
    "options": ["Authorization Code", "Client Credentials", "Implicit", "Resource Owner Password"],
    "answer": "Client Credentials"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which API gateway pattern routes requests to different backend services based on request content?",
    "options": ["Single entry point", "Content-based routing", "API composition", "Service mesh"],
    "answer": "Content-based routing"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary security concern when implementing webhooks?",
    "options": ["Rate limiting", "Verifying request authenticity", "Caching responses", "Load balancing"],
    "answer": "Verifying request authenticity"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does HATEOAS stand for in REST API design?",
    "options": [
      "Hypertext As The Engine Of Application State",
      "Hyperlink Transfer And Exchange Of Application State",
      "Hypertext Application Transfer Engine",
      "Hypermedia Access Transfer Engine"
    ],
    "answer": "Hypertext As The Engine Of Application State"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which advantage does GraphQL have over REST for mobile applications?",
    "options": [
      "Better caching capabilities",
      "Clients request only the data they need",
      "Simpler server implementation",
      "Built-in authentication"
    ],
    "answer": "Clients request only the data they need"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which technique improves API performance by reducing the amount of data transferred?",
    "options": ["Pagination", "Compression (gzip)", "Rate limiting", "CORS headers"],
    "answer": "Compression (gzip)"
  },
  {
    "domain": "Backend",
    "category": "API Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does idempotency mean in the context of API design?",
    "options": [
      "The API responds with the same status code every time",
      "Making the same request multiple times produces the same result",
      "The API processes requests in parallel",
      "The API uses consistent data formats"
    ],
    "answer": "Making the same request multiple times produces the same result"
  },

  // ==================== Databases - Beginner (9) ====================
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which SQL statement is used to retrieve data from a database?",
    "options": ["GET", "FETCH", "SELECT", "RETRIEVE"],
    "answer": "SELECT"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which SQL command is used to insert new data into a table?",
    "options": ["ADD", "INSERT INTO", "CREATE", "NEW"],
    "answer": "INSERT INTO"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a primary key in a database?",
    "options": [
      "A field that allows NULL values",
      "A field that uniquely identifies each row in a table",
      "A field that references another table",
      "A field used for sorting data"
    ],
    "answer": "A field that uniquely identifies each row in a table"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of a foreign key constraint?",
    "options": [
      "To speed up queries",
      "To enforce referential integrity between tables",
      "To store large binary data",
      "To create automatic backups"
    ],
    "answer": "To enforce referential integrity between tables"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which normal form eliminates transitive dependencies?",
    "options": ["First Normal Form", "Second Normal Form", "Third Normal Form", "BCNF"],
    "answer": "Third Normal Form"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the main purpose of a database index?",
    "options": [
      "To store backup data",
      "To speed up data retrieval operations",
      "To enforce data constraints",
      "To encrypt sensitive data"
    ],
    "answer": "To speed up data retrieval operations"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which JOIN type returns all rows from both tables, with NULLs where there is no match?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "answer": "FULL OUTER JOIN"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the 'A' in ACID stand for?",
    "options": ["Availability", "Atomicity", "Asynchrony", "Access"],
    "answer": "Atomicity"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which data type is most appropriate for storing a user's email address?",
    "options": ["INTEGER", "VARCHAR", "TEXT", "BOOLEAN"],
    "answer": "VARCHAR"
  },

  // ==================== Databases - Expert (6) ====================
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What technique does a database use to analyze query execution and suggest improvements?",
    "options": ["EXPLAIN plan", "ANALYZE query", "PROFILE statement", "OPTIMIZE hint"],
    "answer": "EXPLAIN plan"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is database sharding?",
    "options": [
      "Creating database backups",
      "Splitting a database into smaller partitions distributed across servers",
      "Encrypting database contents",
      "Compressing database files"
    ],
    "answer": "Splitting a database into smaller partitions distributed across servers"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "According to the CAP theorem, a distributed system can guarantee at most how many of the following: Consistency, Availability, Partition tolerance?",
    "options": ["All three", "Two", "One", "None"],
    "answer": "Two"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is Write-Ahead Logging (WAL) used for in databases?",
    "options": [
      "To encrypt data before writing",
      "To write changes to a log before modifying the actual data",
      "To cache frequently accessed data",
      "To compress data on disk"
    ],
    "answer": "To write changes to a log before modifying the actual data"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary benefit of database connection pooling?",
    "options": [
      "Increasing data security",
      "Reducing the overhead of establishing new connections",
      "Improving query syntax",
      "Automatically scaling database storage"
    ],
    "answer": "Reducing the overhead of establishing new connections"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which protocol is commonly used for distributed transactions across multiple databases?",
    "options": ["Two-Phase Commit (2PC)", "TCP/IP", "HTTP", "WebSocket"],
    "answer": "Two-Phase Commit (2PC)"
  },

  // ==================== Databases - Intermediate (6) ====================
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the COMMIT statement do in SQL?",
    "options": [
      "Rolls back all changes",
      "Permanently saves all changes made in the current transaction",
      "Creates a new table",
      "Deletes all data from a table"
    ],
    "answer": "Permanently saves all changes made in the current transaction"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a correlated subquery?",
    "options": [
      "A subquery that runs independently of the outer query",
      "A subquery that references columns from the outer query",
      "A subquery that returns multiple columns",
      "A subquery that uses JOIN operations"
    ],
    "answer": "A subquery that references columns from the outer query"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which clause is used to group rows that have the same values in specified columns?",
    "options": ["ORDER BY", "GROUP BY", "HAVING", "DISTINCT"],
    "answer": "GROUP BY"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a stored procedure?",
    "options": [
      "A precompiled collection of SQL statements stored in the database",
      "A temporary table used for caching",
      "A backup file for database recovery",
      "An index on a table column"
    ],
    "answer": "A precompiled collection of SQL statements stored in the database"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What event triggers a database trigger to execute?",
    "options": [
      "Only manual invocation",
      "A predefined data modification event (INSERT, UPDATE, DELETE)",
      "Database backup completion",
      "User login"
    ],
    "answer": "A predefined data modification event (INSERT, UPDATE, DELETE)"
  },
  {
    "domain": "Backend",
    "category": "Databases",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a database view?",
    "options": [
      "A physical copy of a table",
      "A virtual table defined by a SQL query",
      "A backup snapshot of data",
      "An index structure"
    ],
    "answer": "A virtual table defined by a SQL query"
  },

  // ==================== General Backend - Beginner (8) ====================
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In a client-server model, where does the application logic typically reside?",
    "options": ["On the client", "On the server", "In the database", "On the network router"],
    "answer": "On the server"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What port does HTTPS typically use?",
    "options": ["80", "443", "8080", "3000"],
    "answer": "443"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does JSON stand for?",
    "options": [
      "Java Source Object Notation",
      "JavaScript Object Notation",
      "Java Serialized Object Notification",
      "JavaScript Oriented Network"
    ],
    "answer": "JavaScript Object Notation"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is middleware in web development?",
    "options": [
      "A frontend framework",
      "Software that sits between the OS and applications to process requests",
      "A type of database",
      "A testing tool"
    ],
    "answer": "Software that sits between the OS and applications to process requests"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between authentication and authorization?",
    "options": [
      "They are the same thing",
      "Authentication verifies identity; authorization determines access rights",
      "Authentication is for databases; authorization is for APIs",
      "Authentication uses tokens; authorization uses passwords"
    ],
    "answer": "Authentication verifies identity; authorization determines access rights"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does it mean for an API to be stateless?",
    "options": [
      "The API does not store any data",
      "Each request contains all information needed to process it",
      "The API uses no database",
      "The API responds immediately"
    ],
    "answer": "Each request contains all information needed to process it"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why should database credentials not be hardcoded in source code?",
    "options": [
      "It makes the code run slower",
      "It exposes sensitive information if the code is shared or leaked",
      "The compiler does not support it",
      "It increases file size"
    ],
    "answer": "It exposes sensitive information if the code is shared or leaked"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the primary purpose of application logging?",
    "options": [
      "To display messages to end users",
      "To record events and errors for debugging and monitoring",
      "To compress files on the server",
      "To manage user sessions"
    ],
    "answer": "To record events and errors for debugging and monitoring"
  },

  // ==================== General Backend - Expert (9) ====================
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does CQRS stand for?",
    "options": [
      "Command Query Responsibility Segregation",
      "Central Queue Request System",
      "Cached Query Response Service",
      "Concurrent Query Rate Scaling"
    ],
    "answer": "Command Query Responsibility Segregation"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In event sourcing, what is stored as the source of truth?",
    "options": [
      "Only the current state of the entity",
      "A sequence of immutable events representing all changes",
      "Only the final database snapshot",
      "Only error logs"
    ],
    "answer": "A sequence of immutable events representing all changes"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which message queue protocol is widely used for reliable enterprise messaging?",
    "options": ["AMQP", "FTP", "SMTP", "SNMP"],
    "answer": "AMQP"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What communication pattern does gRPC primarily use between microservices?",
    "options": ["REST over HTTP", "Binary protocol with Protocol Buffers", "Plain text over TCP", "WebSocket streams"],
    "answer": "Binary protocol with Protocol Buffers"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of a circuit breaker pattern?",
    "options": [
      "To encrypt network traffic",
      "To prevent cascading failures by stopping calls to a failing service",
      "To load balance requests across servers",
      "To cache API responses"
    ],
    "answer": "To prevent cascading failures by stopping calls to a failing service"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which distributed caching system stores data in memory across a cluster of nodes?",
    "options": ["Redis", "MySQL", "MongoDB", "Elasticsearch"],
    "answer": "Redis"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is graceful degradation in backend systems?",
    "options": [
      "Shutting down all services immediately on failure",
      "Maintaining partial functionality when some components fail",
      "Automatically scaling up all resources",
      "Logging errors to a file"
    ],
    "answer": "Maintaining partial functionality when some components fail"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the main benefit of read replicas in database replication?",
    "options": [
      "Automatically scaling storage",
      "Offloading read traffic from the primary database",
      "Ensuring write consistency",
      "Encrypting data at rest"
    ],
    "answer": "Offloading read traffic from the primary database"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does a service mesh provide in a microservice architecture?",
    "options": [
      "A visual dashboard for monitoring",
      "Infrastructure for handling service-to-service communication",
      "A database for each microservice",
      "A frontend framework"
    ],
    "answer": "Infrastructure for handling service-to-service communication"
  },

  // ==================== General Backend - Intermediate (8) ====================
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does JWT stand for?",
    "options": [
      "JavaScript Web Token",
      "JSON Web Token",
      "Java Web Toolkit",
      "JSON Wrapper Token"
    ],
    "answer": "JSON Web Token"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the 'sliding window' approach to rate limiting?",
    "options": [
      "Using a fixed time interval that resets periodically",
      "Tracking requests within a moving time window relative to the current time",
      "Allowing unlimited requests",
      "Blocking all requests after the first one"
    ],
    "answer": "Tracking requests within a moving time window relative to the current time"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is cache invalidation?",
    "options": [
      "Deleting all data from the cache",
      "Removing or updating cached data when the underlying data changes",
      "Encrypting cached data",
      "Increasing cache size"
    ],
    "answer": "Removing or updating cached data when the underlying data changes"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do WebSockets differ from HTTP connections?",
    "options": [
      "WebSockets are slower than HTTP",
      "WebSockets provide full-duplex communication over a single persistent connection",
      "WebSockets only support text data",
      "WebSockets require a new connection for each message"
    ],
    "answer": "WebSockets provide full-duplex communication over a single persistent connection"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of a message queue for background job processing?",
    "options": [
      "To display results immediately to users",
      "To defer time-consuming tasks and process them asynchronously",
      "To replace the database",
      "To serve static files"
    ],
    "answer": "To defer time-consuming tasks and process them asynchronously"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the 'page' and 'limit' query parameters implement?",
    "options": ["Sorting", "Filtering", "Pagination", "Authentication"],
    "answer": "Pagination"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the Access-Control-Allow-Origin header used for?",
    "options": [
      "Authentication",
      "CORS policy configuration",
      "Rate limiting",
      "Data encryption"
    ],
    "answer": "CORS policy configuration"
  },
  {
    "domain": "Backend",
    "category": "General Backend",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a health check endpoint?",
    "options": [
      "An endpoint that returns user data",
      "An endpoint that reports the operational status of a service",
      "An endpoint for login",
      "An endpoint that performs database migrations"
    ],
    "answer": "An endpoint that reports the operational status of a service"
  },

  // ==================== Go - Beginner (2) ====================
  {
    "domain": "Backend",
    "category": "Go",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a goroutine in Go?",
    "options": [
      "A type of variable",
      "A lightweight thread managed by the Go runtime",
      "A package import",
      "A function that cannot be called"
    ],
    "answer": "A lightweight thread managed by the Go runtime"
  },
  {
    "domain": "Backend",
    "category": "Go",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What file defines module dependencies in a Go project?",
    "options": ["package.json", "go.mod", "Cargo.toml", "pom.xml"],
    "answer": "go.mod"
  },

  // ==================== Go - Expert (1) ====================
  {
    "domain": "Backend",
    "category": "Go",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the Go race detector identify?",
    "options": [
      "Syntax errors in Go code",
      "Race conditions in concurrent goroutines",
      "Unused variables",
      "Memory leaks in garbage collection"
    ],
    "answer": "Race conditions in concurrent goroutines"
  },

  // ==================== Go - Intermediate (1) ====================
  {
    "domain": "Backend",
    "category": "Go",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the key characteristic of Go interfaces?",
    "options": [
      "They must be explicitly implemented by the implementing type",
      "They are satisfied implicitly without an explicit declaration",
      "They can only contain method signatures, not fields",
      "They require a base class to inherit from"
    ],
    "answer": "They are satisfied implicitly without an explicit declaration"
  },

  // ==================== Java Spring Boot - Beginner (2) ====================
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which annotation marks a class as a Spring Boot application entry point?",
    "options": ["@Bean", "@SpringBootApplication", "@Configuration", "@Component"],
    "answer": "@SpringBootApplication"
  },
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does Spring Boot auto-configuration do?",
    "options": [
      "Writes Java code automatically",
      "Automatically configures Spring application based on dependencies",
      "Generates database schemas",
      "Creates REST endpoints automatically"
    ],
    "answer": "Automatically configures Spring application based on dependencies"
  },

  // ==================== Java Spring Boot - Expert (2) ====================
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In Spring Security, what is the role of the FilterChainProxy?",
    "options": [
      "To filter database queries",
      "To manage the delegation of requests through a chain of security filters",
      "To cache HTTP responses",
      "To validate XML input"
    ],
    "answer": "To manage the delegation of requests through a chain of security filters"
  },
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which tool is commonly used with Spring Boot for distributed tracing?",
    "options": ["Selenium", "Micrometer + Zipkin", "JUnit", "Mockito"],
    "answer": "Micrometer + Zipkin"
  },

  // ==================== Java Spring Boot - Intermediate (3) ====================
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What interface does Spring Data JPA extend to provide CRUD operations?",
    "options": ["Repository", "CrudRepository", "JpaRepository", "EntityManager"],
    "answer": "CrudRepository"
  },
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In which phase of the Spring Bean lifecycle are dependency injection callbacks invoked?",
    "options": ["Before instantiation", "During instantiation", "After properties set", "After destruction"],
    "answer": "After properties set"
  },
  {
    "domain": "Backend",
    "category": "Java Spring Boot",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you activate a Spring profile?",
    "options": [
      "Using @Profile annotation or spring.profiles.active property",
      "By deleting the application.properties file",
      "Using @Bean annotation",
      "By renaming the main class"
    ],
    "answer": "Using @Profile annotation or spring.profiles.active property"
  },

  // ==================== Next.js - Beginner (1) ====================
  {
    "domain": "Backend",
    "category": "Next.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Where do you define API routes in a Next.js application?",
    "options": ["In the pages/api directory", "In package.json", "In next.config.js", "In the public folder"],
    "answer": "In the pages/api directory"
  },

  // ==================== Next.js - Expert (3) ====================
  {
    "domain": "Backend",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key difference between ISR (Incremental Static Regeneration) and SSR?",
    "options": [
      "ISR generates pages at build time only",
      "ISR allows static pages to be regenerated in the background after a specified time",
      "SSR is faster than ISR",
      "ISR does not support dynamic data"
    ],
    "answer": "ISR allows static pages to be regenerated in the background after a specified time"
  },
  {
    "domain": "Backend",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What advantage do Next.js edge middleware functions provide?",
    "options": [
      "They run on the server side only",
      "They execute at the edge before the request reaches the server",
      "They replace API routes",
      "They can only be used for authentication"
    ],
    "answer": "They execute at the edge before the request reaches the server"
  },
  {
    "domain": "Backend",
    "category": "Next.js",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are Server Actions in Next.js?",
    "options": [
      "Actions performed on the client only",
      "Async functions that run on the server and can be called directly from client components",
      "Actions that run during build time",
      "Actions that only work with GET requests"
    ],
    "answer": "Async functions that run on the server and can be called directly from client components"
  },

  // ==================== Next.js - Intermediate (1) ====================
  {
    "domain": "Backend",
    "category": "Next.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which function is used to fetch data on the server side in Next.js pages?",
    "options": ["useEffect", "getServerSideProps", "useState", "useCallback"],
    "answer": "getServerSideProps"
  },

  // ==================== Node.js - Beginner (9) ====================
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which phase of the Node.js event loop handles I/O callbacks?",
    "options": ["Timers phase", "Pending callbacks phase", "Poll phase", "Check phase"],
    "answer": "Poll phase"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What command installs a package and saves it as a dependency in package.json?",
    "options": ["npm install package-name", "npm start", "npm run", "npm init"],
    "answer": "npm install package-name"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the key difference between require() and ES module import?",
    "options": [
      "They are identical in every way",
      "require() is CommonJS (synchronous), import is ES Module (can be asynchronous)",
      "require() only works in browsers",
      "import only works in Node.js"
    ],
    "answer": "require() is CommonJS (synchronous), import is ES Module (can be asynchronous)"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you export a single value from a Node.js module using CommonJS?",
    "options": ["export default", "module.exports = value", "exports.value", "return value"],
    "answer": "module.exports = value"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which Node.js module is used to read files from the filesystem?",
    "options": ["path", "fs", "http", "os"],
    "answer": "fs"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a readable stream in Node.js?",
    "options": [
      "A way to write files quickly",
      "An interface for reading data from a source in chunks",
      "A way to compress files",
      "A database connection"
    ],
    "answer": "An interface for reading data from a source in chunks"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does process.env provide in Node.js?",
    "options": [
      "Information about the CPU",
      "Access to environment variables",
      "File system operations",
      "Network connections"
    ],
    "answer": "Access to environment variables"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the Buffer class used for in Node.js?",
    "options": [
      "Buffering network requests",
      "Handling raw binary data",
      "Creating user interfaces",
      "Managing database connections"
    ],
    "answer": "Handling raw binary data"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you handle uncaught exceptions in Node.js?",
    "options": [
      "They are automatically handled by the runtime",
      "Using process.on('uncaughtException', callback)",
      "Using try-catch outside all functions",
      "They cause the application to silently fail"
    ],
    "answer": "Using process.on('uncaughtException', callback)"
  },

  // ==================== Node.js - Intermediate (9) ====================
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In Express.js, what is the purpose of the next() function in middleware?",
    "options": [
      "To end the response",
      "To pass control to the next middleware in the stack",
      "To restart the server",
      "To log the request"
    ],
    "answer": "To pass control to the next middleware in the stack"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What problem does async/await solve compared to callback functions?",
    "options": [
      "It makes code run faster",
      "It avoids callback hell by providing sequential-looking asynchronous code",
      "It eliminates the need for try-catch",
      "It removes the need for promises"
    ],
    "answer": "It avoids callback hell by providing sequential-looking asynchronous code"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between a readable stream and a transform stream?",
    "options": [
      "They are the same",
      "A transform stream modifies data as it passes through, while a readable stream only reads",
      "A readable stream can write data",
      "A transform stream is faster"
    ],
    "answer": "A transform stream modifies data as it passes through, while a readable stream only reads"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the cluster module in Node.js enable?",
    "options": [
      "Database clustering",
      "Running multiple Node.js processes to utilize all CPU cores",
      "File system clustering",
      "Network clustering"
    ],
    "answer": "Running multiple Node.js processes to utilize all CPU cores"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of worker_threads in Node.js?",
    "options": [
      "To manage database connections",
      "To run JavaScript in parallel threads for CPU-intensive tasks",
      "To handle HTTP requests",
      "To create user interfaces"
    ],
    "answer": "To run JavaScript in parallel threads for CPU-intensive tasks"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is an EventEmitter in Node.js?",
    "options": [
      "A class that emits HTTP requests",
      "A class that allows objects to emit and listen for named events",
      "A database event handler",
      "A file watcher"
    ],
    "answer": "A class that allows objects to emit and listen for named events"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which method spawns a new child process in Node.js?",
    "options": ["process.fork()", "child_process.spawn()", "os.run()", "cluster.fork()"],
    "answer": "child_process.spawn()"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which npm package is commonly used to handle multipart form data for file uploads?",
    "options": ["body-parser", "multer", "express-fileupload", "formidable"],
    "answer": "multer"
  },
  {
    "domain": "Backend",
    "category": "Node.js",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of template engines like EJS or Pug in Node.js?",
    "options": [
      "To compile JavaScript to machine code",
      "To generate HTML dynamically on the server side",
      "To manage database schemas",
      "To handle WebSocket connections"
    ],
    "answer": "To generate HTML dynamically on the server side"
  },

  // ==================== Security (Backend) - Intermediate (7) ====================
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the most effective way to prevent SQL injection?",
    "options": [
      "Using input length limits",
      "Using parameterized queries or prepared statements",
      "Escaping single quotes only",
      "Using stored procedures exclusively"
    ],
    "answer": "Using parameterized queries or prepared statements"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which technique prevents Cross-Site Scripting (XSS) attacks?",
    "options": [
      "Using HTTPS",
      "Sanitizing and encoding user input before rendering",
      "Using cookies",
      "Rate limiting requests"
    ],
    "answer": "Sanitizing and encoding user input before rendering"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of a CSRF token?",
    "options": [
      "To encrypt passwords",
      "To prevent unauthorized commands from being transmitted using a user's authenticated session",
      "To rate limit API requests",
      "To cache authentication data"
    ],
    "answer": "To prevent unauthorized commands from being transmitted using a user's authenticated session"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why is HTTPS important for backend security?",
    "options": [
      "It makes pages load faster",
      "It encrypts data in transit between client and server",
      "It eliminates the need for authentication",
      "It prevents SQL injection"
    ],
    "answer": "It encrypts data in transit between client and server"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What should be done with user input before using it in a database query?",
    "options": [
      "Use it directly",
      "Validate and sanitize it",
      "Convert it to uppercase",
      "Store it in a log file"
    ],
    "answer": "Validate and sanitize it"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which item is NOT in the OWASP Top 10?",
    "options": [
      "Broken Access Control",
      "Cryptographic Failures",
      "SQL Injection",
      "Server misconfiguration only"
    ],
    "answer": "Server misconfiguration only"
  },
  {
    "domain": "Backend",
    "category": "Security",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What HTTP header helps prevent clickjacking attacks?",
    "options": [
      "Content-Security-Policy",
      "X-Frame-Options",
      "Strict-Transport-Security",
      "X-Content-Type-Options"
    ],
    "answer": "X-Frame-Options"
  },

  // ==================== System Design (Backend) - Expert (8) ====================
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which load balancing algorithm distributes requests to the server with the fewest active connections?",
    "options": ["Round Robin", "Least Connections", "IP Hash", "Weighted Round Robin"],
    "answer": "Least Connections"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which database index type is most efficient for range queries on a single column?",
    "options": ["Hash index", "B-tree index", "Bitmap index", "GiST index"],
    "answer": "B-tree index"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary purpose of a CDN in a backend architecture?",
    "options": [
      "To run server-side code",
      "To cache and serve static content from edge locations close to users",
      "To manage database connections",
      "To process background jobs"
    ],
    "answer": "To cache and serve static content from edge locations close to users"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between point-to-point and publish-subscribe message queue patterns?",
    "options": [
      "They are identical",
      "Point-to-point sends to one consumer; publish-subscribe broadcasts to all subscribers",
      "Publish-subscribe is slower",
      "Point-to-point uses more memory"
    ],
    "answer": "Point-to-point sends to one consumer; publish-subscribe broadcasts to all subscribers"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is token bucket rate limiting?",
    "options": [
      "Rejecting all requests after a limit",
      "Allowing bursts of traffic up to a capacity while refilling tokens at a steady rate",
      "Counting requests in fixed time windows",
      "Dropping every other request"
    ],
    "answer": "Allowing bursts of traffic up to a capacity while refilling tokens at a steady rate"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When should you prefer horizontal scaling over vertical scaling?",
    "options": [
      "When you need a simple setup for a small application",
      "When you need to distribute load across multiple machines for high availability",
      "When budget is very limited",
      "When you only need a single database"
    ],
    "answer": "When you need to distribute load across multiple machines for high availability"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In the CAP theorem, what is a CP system?",
    "options": [
      "A system that prioritizes availability over consistency",
      "A system that ensures consistency and partition tolerance but may sacrifice availability",
      "A system with no partition tolerance",
      "A system that ensures all three properties"
    ],
    "answer": "A system that ensures consistency and partition tolerance but may sacrifice availability"
  },
  {
    "domain": "Backend",
    "category": "System Design",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the strangangler fig pattern in microservice decomposition?",
    "options": [
      "Building all microservices at once",
      "Gradually replacing parts of a monolith with microservices while the system continues to run",
      "Deleting the monolith immediately",
      "Building a monolith from microservices"
    ],
    "answer": "Gradually replacing parts of a monolith with microservices while the system continues to run"
  }
];

module.exports = supplementBackend;
