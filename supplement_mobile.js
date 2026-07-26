const supplementMobile = [
  // ==================== ANDROID - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "Android",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the correct order of the Activity lifecycle methods in Android?",
    "options": ["onCreate → onStart → onResume → onPause → onStop → onDestroy", "onStart → onCreate → onResume → onPause → onStop → onDestroy", "onCreate → onResume → onStart → onPause → onStop → onDestroy", "onCreate → onStart → onPause → onResume → onStop → onDestroy"],
    "answer": "onCreate → onStart → onResume → onPause → onStop → onDestroy"
  },
  {
    "domain": "Mobile",
    "category": "Android",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is an Intent in Android?",
    "options": ["A messaging object used to request an action from another app component", "A thread that runs in the background", "A layout file for designing UI", "A database query language"],
    "answer": "A messaging object used to request an action from another app component"
  },
  {
    "domain": "Mobile",
    "category": "Android",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of the AndroidManifest.xml file?",
    "options": ["It declares app components, permissions, and metadata for the Android app", "It stores the app's database schema", "It defines the app's color theme only", "It contains the compiled bytecode of the app"],
    "answer": "It declares app components, permissions, and metadata for the Android app"
  },

  // ==================== FLUTTER - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is Flutter?",
    "options": ["An open-source UI framework by Google for building cross-platform apps from a single codebase", "A JavaScript library for building mobile interfaces", "An Android-only SDK for native development", "A cloud backend service for mobile apps"],
    "answer": "An open-source UI framework by Google for building cross-platform apps from a single codebase"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between var, final, and const in Dart?",
    "options": ["var is mutable, final can be set once at runtime, const is a compile-time constant", "var is constant, final is mutable, const is a runtime variable", "var and final are identical, const is only for strings", "var, final, and const all create mutable variables"],
    "answer": "var is mutable, final can be set once at runtime, const is a compile-time constant"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the main difference between StatelessWidget and StatefulWidget?",
    "options": ["StatelessWidget cannot change its state after being built, StatefulWidget can", "StatelessWidget is faster, StatefulWidget is slower", "StatefulWidget cannot have child widgets", "StatelessWidget requires a key parameter, StatefulWidget does not"],
    "answer": "StatelessWidget cannot change its state after being built, StatefulWidget can"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does Flutter hot reload do?",
    "options": ["Injects updated source code into the running Dart VM without restarting the app", "Recompiles the entire app from scratch", "Resets the app to its initial state", "Clears the app cache and restarts the device"],
    "answer": "Injects updated source code into the running Dart VM without restarting the app"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the widget tree concept in Flutter?",
    "options": ["A hierarchical structure of widgets where each widget nests inside its parent widget", "A database structure for storing widget data", "A list of all available Flutter widgets", "A visual editor for designing widget layouts"],
    "answer": "A hierarchical structure of widgets where each widget nests inside its parent widget"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the Scaffold widget used for in Flutter?",
    "options": ["It provides a basic visual layout structure with AppBar, body, FAB, and drawer support", "It is used only for database connections", "It renders text on the screen", "It handles network requests"],
    "answer": "It provides a basic visual layout structure with AppBar, body, FAB, and drawer support"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which Flutter widgets are used for laying out children horizontally and vertically?",
    "options": ["Row for horizontal layout, Column for vertical layout", "Row for vertical layout, Column for horizontal layout", "Stack for horizontal, Wrap for vertical", "Row and Column both only support horizontal layout"],
    "answer": "Row for horizontal layout, Column for vertical layout"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of the pubspec.yaml file in a Flutter project?",
    "options": ["It declares project dependencies, assets, and metadata for the Flutter package manager", "It stores the app's runtime data", "It compiles Dart code into native ARM instructions", "It defines database migration scripts"],
    "answer": "It declares project dependencies, assets, and metadata for the Flutter package manager"
  },

  // ==================== FLUTTER - INTERMEDIATE ====================
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which Flutter navigation approach uses named routes and the Navigator 2.0 API?",
    "options": ["Navigator.pushNamed with onGenerateRoute for declarative routing", "Navigator.push for all navigation", "Using only setState for route changes", "Using a third-party JavaScript router"],
    "answer": "Navigator.pushNamed with onGenerateRoute for declarative routing"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In Dart, how does async/await work with Futures?",
    "options": ["async marks a function that returns a Future, await pauses execution until the Future completes", "async pauses the main thread indefinitely, await resumes it manually", "async converts a Future to Stream, await converts a Stream to Future", "async and await are only for network calls"],
    "answer": "async marks a function that returns a Future, await pauses execution until the Future completes"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you perform form validation in Flutter?",
    "options": ["Using GlobalKey<FormState> and validators on TextFormField widgets", "Using try-catch blocks around form fields", "Manually checking each field in setState", "Form validation is not supported in Flutter"],
    "answer": "Using GlobalKey<FormState> and validators on TextFormField widgets"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which widget is used to create responsive layouts that adapt to different screen sizes in Flutter?",
    "options": ["LayoutBuilder and MediaQuery", "Fixed SizedBox only", "Container with hardcoded width", "Opacity widget"],
    "answer": "LayoutBuilder and MediaQuery"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you create a custom widget in Flutter?",
    "options": ["Extend StatelessWidget or StatefulWidget and implement the build method", "Override the main() function", "Create a new Dart file only, no class needed", "Use the Flutter CLI to generate widgets automatically"],
    "answer": "Extend StatelessWidget or StatefulWidget and implement the build method"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are common state management approaches in Flutter for intermediate-level apps?",
    "options": ["setState, Provider, and InheritedWidget for lifting state up", "Only global variables", "Direct database queries for every state change", "Thread-based communication between widgets"],
    "answer": "setState, Provider, and InheritedWidget for lifting state up"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which package is commonly used for making HTTP requests in Flutter?",
    "options": ["dio or http package from pub.dev", "fetch API from JavaScript", "XMLHttpRequest class", "The socket package for TCP connections"],
    "answer": "dio or http package from pub.dev"
  },

  // ==================== FLUTTER - EXPERT ====================
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a custom RenderObject in Flutter used for?",
    "options": ["Implementing low-level layout and painting logic that the framework cannot handle with standard widgets", "Creating styled text components", "Managing app state globally", "Building REST API clients"],
    "answer": "Implementing low-level layout and painting logic that the framework cannot handle with standard widgets"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How do platform channels work in Flutter?",
    "options": ["They provide an asynchronous message-passing bridge between Dart and platform-specific code (Java/Kotlin or ObjC/Swift)", "They directly compile Dart to native code", "They use shared memory for synchronous calls", "They are only used for Android communication"],
    "answer": "They provide an asynchronous message-passing bridge between Dart and platform-specific code (Java/Kotlin or ObjC/Swift)"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Why would you use a Dart Isolate in Flutter?",
    "options": ["To run computationally expensive code on a separate thread without blocking the UI thread", "To access native platform APIs", "To manage widget state transitions", "To define CSS-like styles for widgets"],
    "answer": "To run computationally expensive code on a separate thread without blocking the UI thread"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the CustomPainter class allow you to do in Flutter?",
    "options": ["Draw custom shapes and graphics using the Canvas API in the paint method", "Create custom widgets from existing Material components", "Automatically generate responsive layouts", "Parse JSON data into Dart objects"],
    "answer": "Draw custom shapes and graphics using the Canvas API in the paint method"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a key difference between Riverpod and Bloc for Flutter state management?",
    "options": ["Riverpod uses compile-time safe providers without context dependency, Bloc uses event-driven state transitions with BlocProvider", "Riverpod is only for small apps, Bloc is only for large apps", "Riverpod requires WidgetTree context, Bloc does not", "Both are identical in architecture"],
    "answer": "Riverpod uses compile-time safe providers without context dependency, Bloc uses event-driven state transitions with BlocProvider"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How do you control animation duration and direction in Flutter?",
    "options": ["Using AnimationController to set duration, repeat, reverse, or animateTo a target value", "Using the Timer class only", "Using setState with a delay", "Animations in Flutter cannot be reversed"],
    "answer": "Using AnimationController to set duration, repeat, reverse, or animateTo a target value"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How should you organize platform-specific code in a Flutter project?",
    "options": ["Use the android/ and ios/ directories for native code and platform channels to communicate from Dart", "Put all code in the lib/ directory", "Use a single shared JavaScript file for both platforms", "Platform-specific code is not allowed in Flutter"],
    "answer": "Use the android/ and ios/ directories for native code and platform channels to communicate from Dart"
  },
  {
    "domain": "Mobile",
    "category": "Flutter",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "Which testing strategies are recommended for a production Flutter app?",
    "options": ["Unit tests for logic, Widget tests for UI components, and Integration tests for end-to-end flows", "Only manual testing on real devices", "Only unit tests for the main.dart file", "Flutter does not support automated testing"],
    "answer": "Unit tests for logic, Widget tests for UI components, and Integration tests for end-to-end flows"
  },

  // ==================== GENERAL MOBILE - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the MVC (Model-View-Controller) architecture in mobile apps?",
    "options": ["A pattern separating data (Model), UI (View), and business logic (Controller)", "A database management system", "A UI component library", "A networking protocol"],
    "answer": "A pattern separating data (Model), UI (View), and business logic (Controller)"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are push notifications used for in mobile apps?",
    "options": ["Sending real-time messages from a server to a user's device even when the app is not open", "Storing data locally on the device", "Rendering UI components on screen", "Encrypting network traffic"],
    "answer": "Sending real-time messages from a server to a user's device even when the app is not open"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does responsive mobile design mean?",
    "options": ["Designing UI that adapts its layout and elements to fit different screen sizes and orientations", "Designing only for one specific phone model", "Making apps load faster by compressing images", "Using a single fixed font size for all screens"],
    "answer": "Designing UI that adapts its layout and elements to fit different screen sizes and orientations"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why must mobile apps request runtime permissions for sensitive resources?",
    "options": ["To comply with platform privacy policies and give users control over what the app can access", "To slow down the app intentionally", "Permissions are optional and can be hardcoded", "Only iOS requires permissions, Android does not"],
    "answer": "To comply with platform privacy policies and give users control over what the app can access"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the main states of a mobile app lifecycle?",
    "options": ["Foreground (active), Background (inactive), and Terminated", "Only Running and Stopped", "Only On and Off", "Foreground and Crash"],
    "answer": "Foreground (active), Background (inactive), and Terminated"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between SharedPreferences (Android) and UserDefaults (iOS)?",
    "options": ["Both are key-value storage mechanisms for small amounts of persistent data on the device", "SharedPreferences stores files, UserDefaults stores databases", "UserDefaults is encrypted, SharedPreferences is not", "They are completely incompatible and serve different purposes"],
    "answer": "Both are key-value storage mechanisms for small amounts of persistent data on the device"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the Tab Bar navigation pattern commonly used for in mobile apps?",
    "options": ["Switching between top-level sections of an app using tabs at the top or bottom of the screen", "Navigating deeper into a hierarchical list", "Displaying alert dialogs", "Loading network data"],
    "answer": "Switching between top-level sections of an app using tabs at the top or bottom of the screen"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of gesture handling in mobile apps?",
    "options": ["Detecting and responding to user touch inputs like taps, swipes, and long presses", "Rendering 3D graphics", "Managing cloud storage", "Handling phone calls"],
    "answer": "Detecting and responding to user touch inputs like taps, swipes, and long presses"
  },

  // ==================== GENERAL MOBILE - INTERMEDIATE ====================
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What testing strategies are essential for mobile app quality assurance?",
    "options": ["Unit tests for business logic, UI tests for screens, and integration tests for end-user flows", "Only manual testing on a single device", "Only unit tests, UI tests are unnecessary", "Testing only the server API, not the mobile client"],
    "answer": "Unit tests for business logic, UI tests for screens, and integration tests for end-user flows"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of crash reporting tools like Firebase Crashlytics in mobile apps?",
    "options": ["Capturing and analyzing runtime exceptions and errors to help developers fix bugs in production", "Automatically fixing all bugs in the app", "Displaying crash information to end users", "Preventing all crashes from occurring"],
    "answer": "Capturing and analyzing runtime exceptions and errors to help developers fix bugs in production"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you integrate analytics into a mobile app?",
    "options": ["Using an SDK like Firebase Analytics or Mixpanel to track user events, screen views, and session data", "Manually writing logs to a text file on the device", "Using browser cookies for tracking", "Analytics integration is not possible in mobile apps"],
    "answer": "Using an SDK like Firebase Analytics or Mixpanel to track user events, screen views, and session data"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is required to set up in-app purchases on iOS and Android?",
    "options": ["Configuring products in App Store Connect and Google Play Console, implementing the store SDK, and handling purchase verification", "Only adding a credit card form in the app", "Using a third-party payment gateway like Stripe directly without platform store integration", "In-app purchases are automatically enabled for all apps"],
    "answer": "Configuring products in App Store Connect and Google Play Console, implementing the store SDK, and handling purchase verification"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is biometric authentication on mobile devices?",
    "options": ["Using fingerprint, face recognition, or iris scanning to verify user identity instead of passwords", "A type of encryption algorithm", "A way to store passwords in plain text", "A network authentication protocol"],
    "answer": "Using fingerprint, face recognition, or iris scanning to verify user identity instead of passwords"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you access the camera in a cross-platform mobile app?",
    "options": ["Using platform-specific APIs via plugins like image_picker or native camera APIs through platform channels", "The camera cannot be accessed from mobile apps", "Using HTML5 input elements only", "Calling a server endpoint that takes the photo"],
    "answer": "Using platform-specific APIs via plugins like image_picker or native camera APIs through platform channels"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do mobile apps handle file storage and retrieval on the device?",
    "options": ["Using the app's sandboxed file system or shared storage APIs like NSFileManager (iOS) and Context.getFilesDir (Android)", "Files are always stored in the root directory", "Mobile apps cannot access the file system", "Files are stored only on remote servers"],
    "answer": "Using the app's sandboxed file system or shared storage APIs like NSFileManager (iOS) and Context.getFilesDir (Android)"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is background processing in mobile apps?",
    "options": ["Executing tasks like syncing data or downloading files when the app is not in the foreground", "Processing only when the user is actively using the app", "Running JavaScript in a web browser", "Compiling code on a remote server"],
    "answer": "Executing tasks like syncing data or downloading files when the app is not in the foreground"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are common mobile networking patterns for API communication?",
    "options": ["REST or GraphQL over HTTP with JSON, using retry logic, caching, and error handling", "Direct socket connections without protocols", "Only SOAP XML over HTTP", "FTP file transfers for all data exchange"],
    "answer": "REST or GraphQL over HTTP with JSON, using retry logic, caching, and error handling"
  },

  // ==================== GENERAL MOBILE - EXPERT ====================
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is mobile app performance profiling?",
    "options": ["Using tools like Android Profiler or Instruments to measure CPU, memory, network, and battery usage to identify bottlenecks", "Manually guessing which part of the app is slow", "Only measuring app download time", "Profiling user behavior with surveys"],
    "answer": "Using tools like Android Profiler or Instruments to measure CPU, memory, network, and battery usage to identify bottlenecks"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is an offline-first architecture in mobile development?",
    "options": ["Designing the app to function primarily with local data and syncing to the server when connectivity is available", "Requiring internet connectivity for all app features", "Caching only images locally", "Storing all data on a remote server with no local copy"],
    "answer": "Designing the app to function primarily with local data and syncing to the server when connectivity is available"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a mobile CI/CD pipeline?",
    "options": ["An automated process that builds, tests, and deploys mobile app builds to testing or production environments on every code change", "A manual process for releasing apps", "A tool for designing mobile UIs", "A database migration tool for mobile apps"],
    "answer": "An automated process that builds, tests, and deploys mobile app builds to testing or production environments on every code change"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is app bundle optimization for app store distribution?",
    "options": ["Reducing APK/IPA size by removing unused resources, compressing images, and using ProGuard/R8 for code shrinking", "Increasing the app size to include all resources", "Removing all images from the build", "Disabling code obfuscation for easier debugging"],
    "answer": "Reducing APK/IPA size by removing unused resources, compressing images, and using ProGuard/R8 for code shrinking"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does deep linking work in mobile apps?",
    "options": ["Using URL schemes or universal links to open specific in-app content directly from a web browser or another app", "Sending push notifications to open the app", "Using only QR codes for navigation", "Deep linking requires the user to manually type a URL in the app"],
    "answer": "Using URL schemes or universal links to open specific in-app content directly from a web browser or another app"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are mobile security best practices?",
    "options": ["Certificate pinning, secure key storage, input validation, encryption at rest, and avoiding hardcoding secrets", "Storing API keys in plain text in source code", "Disabling HTTPS for faster network calls", "Allowing any third-party library without auditing"],
    "answer": "Certificate pinning, secure key storage, input validation, encryption at rest, and avoiding hardcoding secrets"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the code signing and provisioning process for iOS app distribution?",
    "options": ["Creating signing certificates and provisioning profiles in Apple Developer Portal to authorize app installation on devices", "Downloading the app from the App Store", "Using a third-party code signing service only", "Code signing is not required for iOS apps"],
    "answer": "Creating signing certificates and provisioning profiles in Apple Developer Portal to authorize app installation on devices"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is App Store Optimization (ASO)?",
    "options": ["Optimizing app metadata, keywords, screenshots, and ratings to improve visibility and conversion in app store search results", "Optimizing the app's source code for faster execution", "Reducing the app's binary size", "Optimizing the server-side API performance"],
    "answer": "Optimizing app metadata, keywords, screenshots, and ratings to improve visibility and conversion in app store search results"
  },
  {
    "domain": "Mobile",
    "category": "General Mobile",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are the key tradeoffs between cross-platform and native mobile development?",
    "options": ["Cross-platform shares code across platforms but may lack native performance and API access; native offers full platform capabilities but requires separate codebases", "Cross-platform is always faster than native", "Native development cannot access device hardware", "There are no meaningful differences between the two approaches"],
    "answer": "Cross-platform shares code across platforms but may lack native performance and API access; native offers full platform capabilities but requires separate codebases"
  },

  // ==================== KOTLIN - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a data class in Kotlin?",
    "options": ["A class that automatically generates equals(), hashCode(), toString(), and copy() methods based on its properties", "A class that can only hold primitive data types", "A class used exclusively for database operations", "A class without any constructors"],
    "answer": "A class that automatically generates equals(), hashCode(), toString(), and copy() methods based on its properties"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does null safety mean in Kotlin?",
    "options": ["The type system distinguishes between nullable and non-nullable types, preventing null pointer exceptions at compile time", "Kotlin automatically converts all null values to empty strings", "Null safety is a runtime feature that catches NullPointerExceptions", "Kotlin does not support null values in any form"],
    "answer": "The type system distinguishes between nullable and non-nullable types, preventing null pointer exceptions at compile time"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between val and var in Kotlin?",
    "options": ["val declares a read-only variable that cannot be reassigned, var declares a mutable variable that can be reassigned", "val is for strings, var is for integers", "val and var are identical", "var is read-only, val is mutable"],
    "answer": "val declares a read-only variable that cannot be reassigned, var declares a mutable variable that can be reassigned"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How does the when expression work in Kotlin?",
    "options": ["It replaces the switch statement and matches a value against multiple branches, executing the matching branch's code", "It only works with boolean values", "It is used to declare variables", "It loops through a collection of items"],
    "answer": "It replaces the switch statement and matches a value against multiple branches, executing the matching branch's code"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is an extension function in Kotlin?",
    "options": ["A function that can be added to an existing class without inheriting from it, defined outside the class", "A function that extends the length of a string", "A function that only works on subclasses", "A built-in function that cannot be customized"],
    "answer": "A function that can be added to an existing class without inheriting from it, defined outside the class"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the basic concept of Kotlin coroutines?",
    "options": ["Lightweight threads that enable asynchronous and non-blocking code using suspend functions", "A way to run code in parallel using OS threads", "A database query language", "A UI framework for Android"],
    "answer": "Lightweight threads that enable asynchronous and non-blocking code using suspend functions"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are higher-order functions in Kotlin?",
    "options": ["Functions that take other functions as parameters or return a function as a result", "Functions that operate on higher-level data types only", "Functions that run on the main thread", "Functions that are defined in the parent class"],
    "answer": "Functions that take other functions as parameters or return a function as a result"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do string templates work in Kotlin?",
    "options": ["You embed expressions inside strings using $ or ${expression} syntax to dynamically insert values", "String templates are only available in annotations", "You must concatenate strings with + operator only", "String templates require a special import"],
    "answer": "You embed expressions inside strings using $ or ${expression} syntax to dynamically insert values"
  },

  // ==================== KOTLIN - INTERMEDIATE ====================
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is type variance in Kotlin generics?",
    "options": ["out T (covariance) allows reading T but not writing, in T (contravariance) allows writing T but not reading", "Generics in Kotlin do not support variance", "variance only applies to primitive types", "Kotlin generics are invariant by default and cannot be changed"],
    "answer": "out T (covariance) allows reading T but not writing, in T (contravariance) allows writing T but not reading"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between let, also, with, apply, and run scope functions in Kotlin?",
    "options": ["let and run return the lambda result, also and apply return the object, with uses the object without a new variable", "All scope functions are identical in behavior", "scope functions cannot be used with nullable types", "scope functions replace all other Kotlin constructs"],
    "answer": "let and run return the lambda result, also and apply return the object, with uses the object without a new variable"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between filter, map, and reduce in Kotlin collections?",
    "options": ["filter selects elements matching a predicate, transform applies a function to each element, reduce combines elements into a single result", "filter and map are identical, reduce is unused", "These functions only work on arrays", "reduce returns a list, filter returns a single value"],
    "answer": "filter selects elements matching a predicate, transform applies a function to each element, reduce combines elements into a single result"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does Kotlin handle exceptions?",
    "options": ["Kotlin uses try-catch-finally blocks, all exceptions are unchecked, and the throw expression has type Nothing", "Kotlin requires all exceptions to be declared in the function signature", "Kotlin does not support try-catch blocks", "All exceptions in Kotlin are checked exceptions"],
    "answer": "Kotlin uses try-catch-finally blocks, all exceptions are unchecked, and the throw expression has type Nothing"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of a companion object in a Kotlin class?",
    "options": ["It holds members that are tied to the class itself rather than instances, similar to static members in Java", "It creates multiple instances of the class", "It defines the primary constructor", "It is only used for annotation processing"],
    "answer": "It holds members that are tied to the class itself rather than instances, similar to static members in Java"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a type alias in Kotlin?",
    "options": ["An alternative name for an existing type to improve readability, defined with the typealias keyword", "A way to create new primitive types", "A deprecated syntax for type casting", "A method for defining class inheritance"],
    "answer": "An alternative name for an existing type to improve readability, defined with the typealias keyword"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are Kotlin contracts and what problem do they solve?",
    "options": ["They allow functions to declare their effects on the compiler, enabling smart casts and type inference in lambdas", "They are legal agreements between developers", "They define database schemas", "They are used only for API versioning"],
    "answer": "They allow functions to declare their effects on the compiler, enabling smart casts and type inference in lambdas"
  },

  // ==================== KOTLIN - EXPERT ====================
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key difference between Kotlin Flow and LiveData?",
    "options": ["Flow is a cold stream that supports backpressure and operators, LiveData is a lifecycle-aware hot observable tied to Android", "Flow is Android-only, LiveData is cross-platform", "Flow cannot emit multiple values, LiveData can", "There is no difference between Flow and LiveData"],
    "answer": "Flow is a cold stream that supports backpressure and operators, LiveData is a lifecycle-aware hot observable tied to Android"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "When should you use sealed classes instead of enums in Kotlin?",
    "options": ["When you need to carry data with each type, support polymorphism across separate classes, or have a restricted type hierarchy with different properties", "When you only need simple constant values without behavior", "Sealed classes cannot have methods", "Enums are always preferred over sealed classes"],
    "answer": "When you need to carry data with each type, support polymorphism across separate classes, or have a restricted type hierarchy with different properties"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the benefit of building a DSL (Domain-Specific Language) in Kotlin?",
    "options": ["Kotlin's lambda syntax, extension functions, and receivers allow creating readable, type-safe DSLs that express domain logic concisely", "DSLs in Kotlin require a separate programming language", "Kotlin DSLs cannot be type-checked at compile time", "Building DSLs is discouraged in Kotlin"],
    "answer": "Kotlin's lambda syntax, extension functions, and receivers allow creating readable, type-safe DSLs that express domain logic concisely"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is an inline class in Kotlin?",
    "options": ["A wrapper type that is erased at runtime, providing type safety without runtime overhead for single-value wrappers", "A class that can only be defined inside another class", "A class that generates inline machine code", "A deprecated feature replaced by data classes"],
    "answer": "A wrapper type that is erased at runtime, providing type safety without runtime overhead for single-value wrappers"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How does the by keyword work for delegation in Kotlin?",
    "options": ["It transfers the responsibility of implementing an interface to another object, forwarding method calls automatically", "It declares a new variable", "It imports a module", "It defines a default parameter value"],
    "answer": "It transfers the responsibility of implementing an interface to another object, forwarding method calls automatically"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What are coroutine contexts and dispatchers in Kotlin?",
    "options": ["A CoroutineContext holds coroutine-specific data, and a Dispatcher determines which thread or thread pool the coroutine runs on", "They are UI layout managers", "They define Kotlin class inheritance hierarchies", "They are only used for network requests"],
    "answer": "A CoroutineContext holds coroutine-specific data, and a Dispatcher determines which thread or thread pool the coroutine runs on"
  },
  {
    "domain": "Mobile",
    "category": "Kotlin",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is Kotlin Multiplatform and what does it enable?",
    "options": ["Sharing business logic code across Android, iOS, web, and desktop while keeping platform-specific UI code native", "Compiling Kotlin to JavaScript only", "Running Kotlin code on a remote server only", "A framework for building desktop applications exclusively"],
    "answer": "Sharing business logic code across Android, iOS, web, and desktop while keeping platform-specific UI code native"
  },

  // ==================== NATIVE DEVELOPMENT - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "Native Development",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is native mobile development?",
    "options": ["Building apps using platform-specific languages and tools (Swift/Objective-C for iOS, Kotlin/Java for Android)", "Building apps that run on a web browser", "Using a single language for all platforms without platform-specific code", "Developing only backend services"],
    "answer": "Building apps using platform-specific languages and tools (Swift/Objective-C for iOS, Kotlin/Java for Android)"
  },
  {
    "domain": "Mobile",
    "category": "Native Development",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the main difference between native and hybrid mobile apps?",
    "options": ["Native apps use platform-specific code for better performance; hybrid apps use web technologies wrapped in a native container", "Hybrid apps are always faster than native apps", "Native apps cannot access device hardware", "There is no performance difference between native and hybrid apps"],
    "answer": "Native apps use platform-specific code for better performance; hybrid apps use web technologies wrapped in a native container"
  },
  {
    "domain": "Mobile",
    "category": "Native Development",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why are platform-specific UI guidelines (Material Design for Android, Human Interface Guidelines for iOS) important?",
    "options": ["They ensure apps feel familiar and consistent to users of each platform, improving usability and user satisfaction", "They are only suggestions with no impact on user experience", "They only apply to app icons", "They make apps slower to load"],
    "answer": "They ensure apps feel familiar and consistent to users of each platform, improving usability and user satisfaction"
  },
  {
    "domain": "Mobile",
    "category": "Native Development",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are Xcode and Android Studio used for?",
    "options": ["Xcode is Apple's IDE for iOS/macOS development; Android Studio is Google's IDE for Android development", "Xcode is for Android only, Android Studio is for iOS only", "Both are code editors for web development", "They are database management tools"],
    "answer": "Xcode is Apple's IDE for iOS/macOS development; Android Studio is Google's IDE for Android development"
  },

  // ==================== REACT NATIVE - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the core components in React Native?",
    "options": ["View is the basic container, Text displays text, and Image renders images on the screen", "View is for routing, Text is for styling, Image is for networking", "Core components are only available on iOS", "React Native has no built-in components"],
    "answer": "View is the basic container, Text displays text, and Image renders images on the screen"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How is styling handled in React Native?",
    "options": ["Using StyleSheet.create to define a JavaScript object of styles that map to native views", "Using CSS files imported directly into components", "Using inline HTML style attributes", "Styling is not possible in React Native"],
    "answer": "Using StyleSheet.create to define a JavaScript object of styles that map to native views"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you navigate between screens in React Native?",
    "options": ["Using navigation libraries like React Navigation or React Native Navigation to manage a stack of screens", "Using window.location.href like in a browser", "Navigation is not possible in React Native", "Using only the back button"],
    "answer": "Using navigation libraries like React Navigation or React Native Navigation to manage a stack of screens"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the difference between props and state in React Native?",
    "options": ["Props are read-only data passed from parent to child; state is mutable data managed within a component", "Props are mutable, state is read-only", "Props and state are identical", "State can only be passed from child to parent"],
    "answer": "Props are read-only data passed from parent to child; state is mutable data managed within a component"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How does Flexbox work in React Native?",
    "options": ["Flexbox is enabled by default on all components, using flexDirection, justifyContent, and alignItems to arrange children", "Flexbox only works with the <div> element", "React Native uses CSS Grid instead of Flexbox", "Flexbox must be explicitly enabled on each component"],
    "answer": "Flexbox is enabled by default on all components, using flexDirection, justifyContent, and alignItems to arrange children"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is TouchableOpacity used for in React Native?",
    "options": ["Wrapping a touchable area that reduces opacity when pressed to provide visual feedback for tap interactions", "Displaying images with transparency", "Animating text on screen", "Handling keyboard input"],
    "answer": "Wrapping a touchable area that reduces opacity when pressed to provide visual feedback for tap interactions"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "When should you use FlatList instead of ScrollView in React Native?",
    "options": ["FlatList renders items on demand for long lists with virtualization; ScrollView renders all children at once", "ScrollView is always better for performance", "FlatList can only render text items", "ScrollView supports pagination, FlatList does not"],
    "answer": "FlatList renders items on demand for long lists with virtualization; ScrollView renders all children at once"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you write platform-specific code in React Native?",
    "options": ["Using Platform.OS to check the platform and conditionally render code, or using platform-specific file extensions (.ios.js, .android.js)", "Platform-specific code is not possible in React Native", "Using separate repositories for each platform", "Using only JavaScript if statements"],
    "answer": "Using Platform.OS to check the platform and conditionally render code, or using platform-specific file extensions (.ios.js, .android.js)"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is AsyncStorage in React Native?",
    "options": ["A simple, unencrypted, asynchronous key-value storage system for persisting small amounts of data on the device", "A database management system", "A network caching layer", "A file system for storing images"],
    "answer": "A simple, unencrypted, asynchronous key-value storage system for persisting small amounts of data on the device"
  },

  // ==================== REACT NATIVE - INTERMEDIATE ====================
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you create animations in React Native using the Animated API?",
    "options": ["Using Animated.Value for state, Animated.timing for interpolation, and Animated.View for declarative animation composition", "Using CSS transitions directly", "Using setTimeout with setState", "Animations are not supported in React Native"],
    "answer": "Using Animated.Value for state, Animated.timing for interpolation, and Animated.View for declarative animation composition"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What tools are used for debugging React Native applications?",
    "options": ["React Native Debugger, Chrome DevTools via remote debugging, Flipper for inspecting network and layout", "console.log only, no debugging tools exist", "Xcode debugger is the only option", "React Native cannot be debugged"],
    "answer": "React Native Debugger, Chrome DevTools via remote debugging, Flipper for inspecting network and layout"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How do you test React Native applications?",
    "options": ["Using Jest for unit tests, React Native Testing Library for component tests, and Detox for end-to-end tests", "Manual testing only", "React Native does not support automated testing", "Using Selenium WebDriver for mobile tests"],
    "answer": "Using Jest for unit tests, React Native Testing Library for component tests, and Detox for end-to-end tests"
  },

  // ==================== REACT NATIVE - EXPERT ====================
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the React Native New Architecture (Fabric and TurboModules)?",
    "options": ["Fabric replaces the old renderer with a synchronous, concurrent rendering system; TurboModules provide lazy-loaded, type-safe native modules", "It is a new programming language for React Native", "It only applies to iOS development", "New Architecture is a UI component library"],
    "answer": "Fabric replaces the old renderer with a synchronous, concurrent rendering system; TurboModules provide lazy-loaded, type-safe native modules"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "How do you develop a custom native module in React Native?",
    "options": ["Write platform-specific code in Java/Kotlin (Android) and ObjC/Swift (iOS), then bridge it to JavaScript using the NativeModules API", "Using only JavaScript without any native code", "Native modules are automatically generated from React components", "Custom native modules can only be written in Python"],
    "answer": "Write platform-specific code in Java/Kotlin (Android) and ObjC/Swift (iOS), then bridge it to JavaScript using the NativeModules API"
  },
  {
    "domain": "Mobile",
    "category": "React Native",
    "phase": 1,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the Hermes engine and how does it optimize React Native apps?",
    "options": ["A JavaScript engine built by Facebook that compiles JS to bytecode at build time, reducing startup time and memory usage", "A native rendering engine for animations", "A database engine for local storage", "A network optimization library"],
    "answer": "A JavaScript engine built by Facebook that compiles JS to bytecode at build time, reducing startup time and memory usage"
  },

  // ==================== UI/UX - BEGINNER ====================
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are the four basic design principles (proximity, alignment, repetition, contrast)?",
    "options": ["Proximity groups related items, alignment creates order, repetition ensures consistency, contrast draws attention to key elements", "These principles only apply to print design", "They are optional guidelines with no measurable impact", "They only apply to color selection"],
    "answer": "Proximity groups related items, alignment creates order, repetition ensures consistency, contrast draws attention to key elements"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the role of color theory in mobile app design?",
    "options": ["Understanding color harmony, contrast ratios, and psychological associations to create visually appealing and accessible interfaces", "Color theory is only for painters", "It only involves choosing your favorite color", "Color has no impact on usability"],
    "answer": "Understanding color harmony, contrast ratios, and psychological associations to create visually appealing and accessible interfaces"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is typography important in mobile UI design?",
    "options": ["Font choice, size, weight, and spacing directly affect readability and the visual hierarchy of information on small screens", "Typography only affects the app icon", "Only the font color matters in mobile design", "Typography is not relevant for mobile apps"],
    "answer": "Font choice, size, weight, and spacing directly affect readability and the visual hierarchy of information on small screens"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of wireframing in the design process?",
    "options": ["Creating low-fidelity layouts to plan information architecture and user flow before investing in visual design", "Designing the final pixel-perfect UI", "Writing the app's source code", "Creating marketing materials for the app"],
    "answer": "Creating low-fidelity layouts to plan information architecture and user flow before investing in visual design"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is a user persona in UX design?",
    "options": ["A fictional character representing a key user segment, based on research data, to guide design decisions", "A real person hired to test the app", "A design template for the app's UI", "A database schema for user accounts"],
    "answer": "A fictional character representing a key user segment, based on research data, to guide design decisions"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What are Nielsen's usability heuristics?",
    "options": ["A set of 10 general principles for interaction design, including visibility of system status, error prevention, and consistency", "A legal framework for app compliance", "A programming language for UI development", "A list of required app features"],
    "answer": "A set of 10 general principles for interaction design, including visibility of system status, error prevention, and consistency"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does mobile-first design mean?",
    "options": ["Designing for the smallest screen size first, then progressively enhancing the layout for larger screens", "Designing the mobile version last after the desktop version", "Only designing for mobile, ignoring other devices", "A design approach that prioritizes mobile marketing"],
    "answer": "Designing for the smallest screen size first, then progressively enhancing the layout for larger screens"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is accessibility important in mobile app design?",
    "options": ["It ensures the app can be used by people with disabilities, expanding the user base and meeting legal requirements", "Accessibility only affects screen readers", "It is optional and not recommended", "Accessibility makes apps slower"],
    "answer": "It ensures the app can be used by people with disabilities, expanding the user base and meeting legal requirements"
  },

  // ==================== UI/UX - INTERMEDIATE ====================
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is user journey mapping?",
    "options": ["A visual representation of the steps a user takes to complete a goal within the app, identifying pain points and opportunities", "A map showing the physical location of users", "A database of user locations", "A navigation menu design"],
    "answer": "A visual representation of the steps a user takes to complete a goal within the app, identifying pain points and opportunities"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is A/B testing for design?",
    "options": ["Comparing two versions of a design element with real users to determine which performs better on a specific metric", "Testing two different programming languages", "A/B testing only applies to backend code", "Testing the app on two different devices simultaneously"],
    "answer": "Comparing two versions of a design element with real users to determine which performs better on a specific metric"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are design tokens?",
    "options": ["Named values for visual design attributes like colors, spacing, and typography that can be shared across platforms and tools", "Physical hardware tokens for authentication", "JavaScript variables for runtime configuration", "Tokens used for user authentication only"],
    "answer": "Named values for visual design attributes like colors, spacing, and typography that can be shared across platforms and tools"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is component library design?",
    "options": ["Creating a reusable set of UI components with consistent behavior and styling that can be assembled into different screens and features", "Building a library of physical books", "Designing a single-use component for one screen", "A design approach that prohibits reuse"],
    "answer": "Creating a reusable set of UI components with consistent behavior and styling that can be assembled into different screens and features"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is information architecture (IA) in mobile design?",
    "options": ["The structural design of information, organizing and labeling content to help users find what they need efficiently", "A method for compressing data on mobile devices", "A database design pattern", "A type of visual animation"],
    "answer": "The structural design of information, organizing and labeling content to help users find what they need efficiently"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is interaction design in mobile apps?",
    "options": ["Designing how users interact with the app through touch, gestures, and transitions to create intuitive and engaging experiences", "Only designing static screen layouts", "Writing the app's business logic", "Managing the app's database"],
    "answer": "Designing how users interact with the app through touch, gestures, and transitions to create intuitive and engaging experiences"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is motion design in mobile apps?",
    "options": ["Using animations and transitions to guide user attention, provide feedback, and create a sense of continuity between screens", "Creating 3D animated characters", "Adding background music to the app", "Motion design is only for video production"],
    "answer": "Using animations and transitions to guide user attention, provide feedback, and create a sense of continuity between screens"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What are the key considerations for designing dark mode?",
    "options": ["Reducing brightness, using appropriate contrast ratios, avoiding pure black, and testing both light and dark themes for readability", "Simply inverting all colors to black and white", "Dark mode only changes the background color", "Dark mode is only for OLED screens"],
    "answer": "Reducing brightness, using appropriate contrast ratios, avoiding pure black, and testing both light and dark themes for readability"
  },
  {
    "domain": "Mobile",
    "category": "UI/UX",
    "phase": 1,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is responsive typography in mobile design?",
    "options": ["Scaling font sizes and line heights relative to viewport or container dimensions to maintain readability across devices", "Using a fixed font size for all screen sizes", "Changing font color based on time of day", "Responsive typography is not relevant for mobile"],
    "answer": "Scaling font sizes and line heights relative to viewport or container dimensions to maintain readability across devices"
  }
];
module.exports = supplementMobile;
