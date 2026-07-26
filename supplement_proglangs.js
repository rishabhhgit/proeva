const supplementProgLangs = [
  {
    "domain": "Programming Languages",
    "category": "C/C++",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a primary difference between C and C++?",
    "options": [
      "C supports classes and objects while C++ does not",
      "C++ supports classes and objects while C does not",
      "C is a compiled language while C++ is interpreted",
      "C++ has no support for pointers"
    ],
    "answer": "C++ supports classes and objects while C does not"
  },
  {
    "domain": "Programming Languages",
    "category": "C/C++",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the key difference between std::unique_ptr and std::shared_ptr?",
    "options": [
      "unique_ptr allows multiple owners of the same resource while shared_ptr does not",
      "shared_ptr provides exclusive ownership while unique_ptr allows shared ownership",
      "unique_ptr has exclusive ownership of the resource, while shared_ptr uses reference counting for shared ownership",
      "Both are identical in semantics but differ in syntax"
    ],
    "answer": "unique_ptr has exclusive ownership of the resource, while shared_ptr uses reference counting for shared ownership"
  },
  {
    "domain": "Programming Languages",
    "category": "C/C++",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What happens when you call a C++ template function with incompatible types at compile time?",
    "options": [
      "It generates a runtime error",
      "It silently produces undefined behavior",
      "The compiler generates a compile-time error",
      "It automatically casts all arguments to a common type"
    ],
    "answer": "The compiler generates a compile-time error"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is an algorithm?",
    "options": [
      "A specific programming language syntax",
      "A step-by-step procedure for solving a problem or performing a computation",
      "A type of computer hardware",
      "A database management technique"
    ],
    "answer": "A step-by-step procedure for solving a problem or performing a computation"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In Big O notation, what does O(n) represent?",
    "options": [
      "Constant time complexity",
      "Logarithmic time complexity",
      "Linear time complexity where execution time grows proportionally with input size",
      "Quadratic time complexity"
    ],
    "answer": "Linear time complexity where execution time grows proportionally with input size"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Hash Table"
    ],
    "answer": "Stack"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is recursion in programming?",
    "options": [
      "A loop that runs indefinitely",
      "A function that calls itself to solve smaller instances of the same problem",
      "A technique to reverse an array",
      "A method to allocate memory dynamically"
    ],
    "answer": "A function that calls itself to solve smaller instances of the same problem"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the worst-case time complexity of Bubble Sort?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(log n)"
    ],
    "answer": "O(n^2)"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a linked list?",
    "options": [
      "An array of fixed size stored in contiguous memory",
      "A linear data structure where elements are stored in nodes, each containing data and a pointer to the next node",
      "A circular data structure where the last element points to the first",
      "A two-dimensional array structure"
    ],
    "answer": "A linear data structure where elements are stored in nodes, each containing data and a pointer to the next node"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a hash table used for?",
    "options": [
      "Sorting elements in ascending order",
      "Storing key-value pairs for O(1) average-case lookup, insertion, and deletion",
      "Implementing a queue data structure",
      "Managing memory allocation for objects"
    ],
    "answer": "Storing key-value pairs for O(1) average-case lookup, insertion, and deletion"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which of the following are the four pillars of Object-Oriented Programming?",
    "options": [
      "Variables, loops, conditions, and functions",
      "Encapsulation, inheritance, polymorphism, and abstraction",
      "Arrays, strings, integers, and booleans",
      "Compilation, interpretation, debugging, and testing"
    ],
    "answer": "Encapsulation, inheritance, polymorphism, and abstraction"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the time complexity of binary search on a sorted array of n elements?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(1)"
    ],
    "answer": "O(log n)"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In a binary tree, what is the order of nodes visited in an in-order traversal?",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Root, Left"
    ],
    "answer": "Left, Root, Right"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which technique is used to resolve hash collisions in a hash map by placing colliding elements in adjacent slots?",
    "options": [
      "Chaining",
      "Open addressing (linear probing)",
      "Rehashing with a new hash function",
      "Sorting the hash table entries"
    ],
    "answer": "Open addressing (linear probing)"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does O(1) notation describe in algorithm analysis?",
    "options": [
      "Execution time that grows linearly with input size",
      "Execution time that remains constant regardless of input size",
      "Execution time that grows logarithmically with input size",
      "Execution time that doubles with each input increment"
    ],
    "answer": "Execution time that remains constant regardless of input size"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a key advantage of a linked list over an array?",
    "options": [
      "Faster random access by index",
      "More efficient memory usage with dynamic resizing without reallocation",
      "Better cache locality due to contiguous memory storage",
      "Lower overhead per element"
    ],
    "answer": "More efficient memory usage with dynamic resizing without reallocation"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a common cause of stack overflow?",
    "options": [
      "Exceeding the maximum number of array elements",
      "Excessive memory allocation on the heap",
      "Infinite recursion or deeply nested function calls that exhaust stack memory",
      "Using too many global variables"
    ],
    "answer": "Infinite recursion or deeply nested function calls that exhaust stack memory"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is an adjacency matrix used for in graph representation?",
    "options": [
      "Storing graph nodes in a linked list",
      "Representing edges as a 2D array where matrix[i][j] indicates an edge between vertex i and vertex j",
      "Compressing graph data for storage efficiency",
      "Converting a graph into a tree structure"
    ],
    "answer": "Representing edges as a 2D array where matrix[i][j] indicates an edge between vertex i and vertex j"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which sorting algorithm has the best average-case time complexity for general-purpose sorting?",
    "options": [
      "Bubble Sort — O(n^2)",
      "Insertion Sort — O(n^2)",
      "Merge Sort — O(n log n)",
      "Selection Sort — O(n^2)"
    ],
    "answer": "Merge Sort — O(n log n)"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "When should you use the Observer design pattern?",
    "options": [
      "When you need to create a single instance of a class throughout the application",
      "When an object needs to notify multiple dependent objects automatically when its state changes",
      "When you want to create objects without specifying their concrete classes",
      "When you need to compose objects into tree structures"
    ],
    "answer": "When an object needs to notify multiple dependent objects automatically when its state changes"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "In dynamic programming, what is the key difference between memoization and tabulation?",
    "options": [
      "Memoization is iterative while tabulation is recursive",
      "Memoization stores results top-down using recursion with caching, while tabulation fills a table bottom-up iteratively",
      "Tabulation uses less memory but has higher time complexity",
      "Memoization works only for optimization problems, tabulation for counting problems"
    ],
    "answer": "Memoization stores results top-down using recursion with caching, while tabulation fills a table bottom-up iteratively"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When should you use BFS over DFS in a graph algorithm?",
    "options": [
      "When finding the shortest path in a weighted graph with negative edges",
      "When finding the shortest path in an unweighted graph or level-order traversal",
      "When memory is severely constrained and the graph is deep",
      "When you need topological sorting of a directed acyclic graph"
    ],
    "answer": "When finding the shortest path in an unweighted graph or level-order traversal"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of the flyweight pattern in memory management?",
    "options": [
      "To defer object creation until it is needed",
      "To share common state across many fine-grained objects to reduce memory footprint",
      "To copy objects deeply instead of sharing references",
      "To pool and reuse expensive database connections"
    ],
    "answer": "To share common state across many fine-grained objects to reduce memory footprint"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
    "options": [
      "Factory Pattern",
      "Singleton Pattern",
      "Adapter Pattern",
      "Decorator Pattern"
    ],
    "answer": "Singleton Pattern"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is algorithmic complexity optimization primarily concerned with?",
    "options": [
      "Reducing the number of lines of code",
      "Reducing time and/or space requirements of an algorithm by choosing better data structures and techniques",
      "Making code more readable for maintenance",
      "Eliminating all conditional branches from code"
    ],
    "answer": "Reducing time and/or space requirements of an algorithm by choosing better data structures and techniques"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which factor is most critical when selecting a data structure for a specific application?",
    "options": [
      "The programming language syntax",
      "The frequency and type of operations (insert, delete, search, access) and their time complexity requirements",
      "The color scheme of the IDE being used",
      "The number of comments in the codebase"
    ],
    "answer": "The frequency and type of operations (insert, delete, search, access) and their time complexity requirements"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is loop unrolling in compiler optimization?",
    "options": [
      "Removing loops entirely from the code",
      "Reducing the number of loop iterations by duplicating the loop body, which decreases branch overhead",
      "Converting a while loop into a for loop",
      "Nesting loops inside other loops for parallel execution"
    ],
    "answer": "Reducing the number of loop iterations by duplicating the loop body, which decreases branch overhead"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the difference between a mutex and a semaphore in concurrency?",
    "options": [
      "A mutex is binary (locked/unlocked) and owned by a thread, while a semaphore can allow multiple concurrent accesses and is not owned",
      "A semaphore is binary and owned by a thread, while a mutex allows multiple concurrent accesses",
      "Both are identical and interchangeable in all contexts",
      "A mutex is used for process communication while a semaphore is used for thread synchronization only"
    ],
    "answer": "A mutex is binary (locked/unlocked) and owned by a thread, while a semaphore can allow multiple concurrent accesses and is not owned"
  },
  {
    "domain": "Programming Languages",
    "category": "General Programming",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the main disadvantage of mark-and-sweep garbage collection?",
    "options": [
      "It cannot detect circular references",
      "It causes stop-the-world pauses during the mark and sweep phases",
      "It requires compile-time analysis of object lifetimes",
      "It cannot reclaim memory from unreachable objects"
    ],
    "answer": "It causes stop-the-world pauses during the mark and sweep phases"
  },
  {
    "domain": "Programming Languages",
    "category": "JavaScript",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a callback function in JavaScript?",
    "options": [
      "A function that is called during the compilation phase",
      "A function passed as an argument to another function, to be executed later when an operation completes",
      "A function that is defined inside a class constructor",
      "A function that automatically runs when the page loads"
    ],
    "answer": "A function passed as an argument to another function, to be executed later when an operation completes"
  },
  {
    "domain": "Programming Languages",
    "category": "JavaScript",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the .then() method return when used with a Promise?",
    "options": [
      "The original Promise object",
      "A new Promise that resolves with the value returned by the callback",
      "undefined",
      "A boolean indicating success or failure"
    ],
    "answer": "A new Promise that resolves with the value returned by the callback"
  },
  {
    "domain": "Programming Languages",
    "category": "JavaScript",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the Array.prototype.reduce() method do?",
    "options": [
      "Removes duplicate elements from an array",
      "Filters array elements based on a condition",
      "Reduces each element by subtracting 1",
      "Executes a reducer function on each element, accumulating a single output value"
    ],
    "answer": "Executes a reducer function on each element, accumulating a single output value"
  },
  {
    "domain": "Programming Languages",
    "category": "JavaScript",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the V8 JavaScript engine do during JIT compilation?",
    "options": [
      "Interprets JavaScript source code line by line without any compilation",
      "Compiles JavaScript to native machine code at runtime using techniques like hot-spot detection and on-the-fly optimization",
      "Converts JavaScript to Java bytecode before execution",
      "Pre-compiles all JavaScript files during project build time"
    ],
    "answer": "Compiles JavaScript to native machine code at runtime using techniques like hot-spot detection and on-the-fly optimization"
  },
  {
    "domain": "Programming Languages",
    "category": "JavaScript",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does the event loop handle microtasks versus macrotasks?",
    "options": [
      "Macrotasks are processed first, then microtasks",
      "Microtasks are processed completely before the next macrotask is executed from the queue",
      "Both are processed in the exact order they are added regardless of type",
      "Microtasks are only processed during the idle phase of the event loop"
    ],
    "answer": "Microtasks are processed completely before the next macrotask is executed from the queue"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In Java, what is the relationship between a class and an object?",
    "options": [
      "An object defines the blueprint, and a class is an instance of it",
      "A class is the blueprint, and an object is an instance created from that class",
      "Classes and objects are the same thing",
      "An object can exist without a class definition"
    ],
    "answer": "A class is the blueprint, and an object is an instance created from that class"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the extends keyword do in Java inheritance?",
    "options": [
      "Implements an interface",
      "Creates a new instance of a class",
      "Enables a subclass to inherit fields and methods from a parent class",
      "Copies the entire parent class source code into the subclass"
    ],
    "answer": "Enables a subclass to inherit fields and methods from a parent class"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between an interface and an abstract class in Java?",
    "options": [
      "An interface can have constructors, an abstract class cannot",
      "An abstract class can have constructors and instance variables, while an interface defines only method signatures and constants (pre-Java 8)",
      "An interface can have non-static methods, an abstract class cannot",
      "There is no difference; both are identical"
    ],
    "answer": "An abstract class can have constructors and instance variables, while an interface defines only method signatures and constants (pre-Java 8)"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "In Java exception handling, which block is ALWAYS executed regardless of whether an exception is thrown?",
    "options": [
      "try block",
      "catch block",
      "finally block",
      "throw block"
    ],
    "answer": "finally block"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a key difference between ArrayList and LinkedList in Java?",
    "options": [
      "ArrayList is thread-safe while LinkedList is not",
      "LinkedList provides faster random access by index than ArrayList",
      "ArrayList provides O(1) random access, while LinkedList provides O(1) insertion and deletion at known positions",
      "LinkedList uses more memory per element due to node references, while ArrayList uses contiguous memory blocks"
    ],
    "answer": "ArrayList provides O(1) random access, while LinkedList provides O(1) insertion and deletion at known positions"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the key benefit of using lambda expressions in Java?",
    "options": [
      "They allow multiple inheritance of classes",
      "They enable functional programming by providing a concise way to implement single-method interfaces (functional interfaces)",
      "They replace the need for the final keyword",
      "They are evaluated lazily during class loading"
    ],
    "answer": "They enable functional programming by providing a concise way to implement single-method interfaces (functional interfaces)"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a key feature of the Java Stream API?",
    "options": [
      "It modifies the original collection in place",
      "It processes collections of elements declaratively with operations like map, filter, and reduce, supporting parallel and pipelined execution",
      "It is only available for数组-based collections",
      "It requires explicit iteration loops to process elements"
    ],
    "answer": "It processes collections of elements declaratively with operations like map, filter, and reduce, supporting parallel and pipelined execution"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of ExecutorService in Java concurrency?",
    "options": [
      "To replace the synchronized keyword entirely",
      "To manage a thread pool that executes submitted Runnable or Callable tasks asynchronously",
      "To provide lock-free data structures",
      "To serialize object state to disk"
    ],
    "answer": "To manage a thread pool that executes submitted Runnable or Callable tasks asynchronously"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the Java Memory Model (JMM) define?",
    "options": [
      "The physical layout of objects in heap memory",
      "The maximum heap size that can be allocated to a JVM instance",
      "The rules governing how threads interact through memory and when changes made by one thread become visible to others",
      "The type of garbage collector used by the JVM"
    ],
    "answer": "The rules governing how threads interact through memory and when changes made by one thread become visible to others"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is type erasure in Java generics?",
    "options": [
      "Generics are completely removed and not available at runtime",
      "Generic type information is erased at compile time, so the JVM operates on raw types (Object) and casts are inserted by the compiler",
      "Type erasure converts generic types into primitive types",
      "Only generic method types are erased, not generic class types"
    ],
    "answer": "Generic type information is erased at compile time, so the JVM operates on raw types (Object) and casts are inserted by the compiler"
  },
  {
    "domain": "Programming Languages",
    "category": "Java",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which JVM garbage collector is designed for low-latency applications by minimizing pause times?",
    "options": [
      "Serial GC",
      "Parallel GC",
      "G1GC (Garbage-First Garbage Collector)",
      "ZGC (Z Garbage Collector)"
    ],
    "answer": "ZGC (Z Garbage Collector)"
  },
  {
    "domain": "Programming Languages",
    "category": "Python",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does a list comprehension do in Python?",
    "options": [
      "It creates a list by executing a loop and applying an expression to each element in a single concise statement",
      "It sorts a list in ascending order",
      "It removes all elements from a list",
      "It converts a list into a dictionary"
    ],
    "answer": "It creates a list by executing a loop and applying an expression to each element in a single concise statement"
  },
  {
    "domain": "Programming Languages",
    "category": "Python",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is indentation significant in Python?",
    "options": [
      "It is required only for comments to be valid",
      "It defines code blocks such as loops, conditionals, and function bodies, replacing curly braces used in other languages",
      "It has no effect on execution; it is only for readability",
      "It determines variable types automatically"
    ],
    "answer": "It defines code blocks such as loops, conditionals, and function bodies, replacing curly braces used in other languages"
  },
  {
    "domain": "Programming Languages",
    "category": "Python",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the correct way to access the value associated with a key in a Python dictionary?",
    "options": [
      "dict.get_value(key)",
      "dict[key] or dict.get(key)",
      "dict(key)",
      "dict.indexOf(key)"
    ],
    "answer": "dict[key] or dict.get(key)"
  },
  {
    "domain": "Programming Languages",
    "category": "Python",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What does the @ symbol do when used above a function definition in Python?",
    "options": [
      "It declares the function as a static method",
      "It applies a decorator to the function, which can modify its behavior before execution",
      "It marks the function as deprecated",
      "It makes the function private"
    ],
    "answer": "It applies a decorator to the function, which can modify its behavior before execution"
  },
  {
    "domain": "Programming Languages",
    "category": "Python",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of Python's with statement (context manager)?",
    "options": [
      "It automatically imports modules needed by the block",
      "It ensures resources are properly acquired and released, handling setup and teardown automatically (e.g., file close)",
      "It creates a new thread for the code block",
      "It disables exception handling within the indented block"
    ],
    "answer": "It ensures resources are properly acquired and released, handling setup and teardown automatically (e.g., file close)"
  }
]
module.exports = supplementProgLangs
