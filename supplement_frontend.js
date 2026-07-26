const supplementFrontend = [
  // ==================== Angular - Beginner ====================
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which lifecycle hook is called after Angular has initialized all data-bound input properties of a component?",
    "options": ["ngOnChanges", "ngOnInit", "ngAfterViewInit", "ngDoCheck"],
    "answer": "ngOnInit"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the purpose of an NgModule in Angular?",
    "options": [
      "To define a single component's template and styles",
      "To organize related code into cohesive units of functionality",
      "To replace the need for TypeScript classes",
      "To handle HTTP requests only"
    ],
    "answer": "To organize related code into cohesive units of functionality"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which of the following is NOT a valid data binding type in Angular?",
    "options": ["Interpolation {{ }}", "Property binding [ ]", "Event binding ( )", "Two-way binding { }"],
    "answer": "Two-way binding { }"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the *ngIf directive do in an Angular template?",
    "options": [
      "Repeats an element for each item in a list",
      "Conditionally adds or removes an element from the DOM",
      "Binds a property to an input field",
      "Triggers an event on click"
    ],
    "answer": "Conditionally adds or removes an element from the DOM"
  },

  // ==================== Angular - Intermediate ====================
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the primary difference between a service and a component in Angular?",
    "options": [
      "Services have templates, components do not",
      "Components manage views, services handle business logic and data sharing",
      "Services can only be injected into other services",
      "Components cannot use dependency injection"
    ],
    "answer": "Components manage views, services handle business logic and data sharing"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Why are Observables preferred over Promises for handling HTTP requests in Angular?",
    "options": [
      "Observables are always faster",
      "Observables support cancellation and multiple values over time",
      "Promises do not work with TypeScript",
      "Observables do not require error handling"
    ],
    "answer": "Observables support cancellation and multiple values over time"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which route guard type is used to prevent navigation when a condition is NOT met (e.g., unauthorized access)?",
    "options": ["CanActivate", "CanDeactivate", "Resolve", "CanLoad"],
    "answer": "CanActivate"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which statement correctly describes the difference between reactive forms and template-driven forms in Angular?",
    "options": [
      "Reactive forms are defined in the template; template-driven forms are defined in the component",
      "Reactive forms are model-driven and set up in the component class; template-driven forms rely on directives in the template",
      "Template-driven forms do not support validation",
      "Reactive forms cannot be tested"
    ],
    "answer": "Reactive forms are model-driven and set up in the component class; template-driven forms rely on directives in the template"
  },

  // ==================== Angular - Expert ====================
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "In Angular's dependency injection hierarchy, what is the correct scope from broadest to narrowest?",
    "options": [
      "Element → Environment → Root → Platform",
      "Platform → Root → Environment → Element",
      "Root → Platform → Element → Environment",
      "Environment → Root → Platform → Element"
    ],
    "answer": "Platform → Root → Environment → Element"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which RxJS operator is best suited for canceling a previous HTTP request when a new one is initiated?",
    "options": ["mergeMap", "switchMap", "concatMap", "exhaustMap"],
    "answer": "switchMap"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the key difference between the Default and OnPush change detection strategies in Angular?",
    "options": [
      "Default runs on every microtask; OnPush only runs on reference changes and marked events",
      "OnPush runs more frequently than Default",
      "Default only checks @Input changes; OnPush checks everything",
      "There is no functional difference between them"
    ],
    "answer": "Default runs on every microtask; OnPush only runs on reference changes and marked events"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "How do you implement a custom async validator in an Angular reactive form?",
    "options": [
      "Return an Observable or Promise from a validator function that emits ValidationErrors or null",
      "Use the Validators.requiredAsync method",
      "Add an async attribute to the <input> element",
      "Custom validators cannot be asynchronous in Angular"
    ],
    "answer": "Return an Observable or Promise from a validator function that emits ValidationErrors or null"
  },
  {
    "domain": "Frontend",
    "category": "Angular",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which method is used to dynamically load a component at runtime in Angular?",
    "options": [
      "ComponentFactoryResolver.create() then ComponentRef.attach()",
      "ViewContainerRef.createComponent() with a ComponentFactory or class reference",
      "ModuleFactory.create() with an entry component",
      "DynamicComponent.createInstance() API"
    ],
    "answer": "ViewContainerRef.createComponent() with a ComponentFactory or class reference"
  },

  // ==================== General Frontend - Beginner ====================
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which method is used to select a single element from the DOM in modern JavaScript?",
    "options": ["document.getElementsByClassName", "document.querySelector", "document.getElementsByName", "document.getElementsByTagName"],
    "answer": "document.querySelector"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What happens during the event capturing phase in the DOM?",
    "options": [
      "The event travels from the target element up to the root",
      "The event travels from the root down to the target element",
      "The event is immediately handled by the target element",
      "The event is discarded"
    ],
    "answer": "The event travels from the root down to the target element"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which CSS technique ensures a website layout adapts to different screen sizes?",
    "options": ["Fixed pixel widths", "Responsive design using media queries", "Using only inline styles", "Using <table> for layout"],
    "answer": "Responsive design using media queries"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does the ARIA role='alert' attribute communicate to assistive technologies?",
    "options": [
      "The element is a navigation landmark",
      "The element contains important, time-sensitive information",
      "The element is a clickable button",
      "The element should be hidden from screen readers"
    ],
    "answer": "The element contains important, time-sensitive information"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which of the following is a semantic HTML element?",
    "options": ["<div>", "<span>", "<article>", "<b>"],
    "answer": "<article>"
  },

  // ==================== General Frontend - Intermediate ====================
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the primary use case of the Intersection Observer API?",
    "options": [
      "Monitoring network requests",
      "Detecting when an element enters or exits the viewport",
      "Managing browser history",
      "Creating animations on scroll"
    ],
    "answer": "Detecting when an element enters or exits the viewport"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "How does a Web Worker communicate with the main thread?",
    "options": [
      "Through direct DOM access",
      "Via postMessage and onmessage event handlers",
      "By sharing the same global scope",
      "Through synchronous XMLHttpRequest"
    ],
    "answer": "Via postMessage and onmessage event handlers"
  },

  // ==================== General Frontend - Expert ====================
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which of the Core Web Vitals metrics specifically measures the time it takes for the largest content element to become visible?",
    "options": ["FID", "CLS", "LCP", "TTFB"],
    "answer": "LCP"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "In a service worker, which caching strategy serves cached responses first, then fetches from the network for updates?",
    "options": ["Cache First", "Network First", "Stale While Revalidate", "Network Only"],
    "answer": "Stale While Revalidate"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which web standard enables creating reusable, encapsulated custom HTML elements with Shadow DOM?",
    "options": ["Web Components", "WebAssembly", "WebSockets", "WebGL"],
    "answer": "Web Components"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the correct order of the browser rendering pipeline?",
    "options": [
      "JavaScript → Style → Layout → Paint → Composite",
      "Style → JavaScript → Layout → Paint → Composite",
      "Layout → Style → JavaScript → Composite → Paint",
      "Paint → Layout → Style → JavaScript → Composite"
    ],
    "answer": "JavaScript → Style → Layout → Paint → Composite"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which tool is most effective for detecting memory leaks in a browser-based JavaScript application?",
    "options": [
      "ESLint",
      "Chrome DevTools heap snapshots and Allocation Timeline",
      "Webpack Bundle Analyzer",
      "JSDoc"
    ],
    "answer": "Chrome DevTools heap snapshots and Allocation Timeline"
  },
  {
    "domain": "Frontend",
    "category": "General Frontend",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which Chrome DevTools panel shows detailed timing information for each phase of page loading and rendering?",
    "options": ["Console", "Performance", "Network", "Lighthouse"],
    "answer": "Performance"
  },

  // ==================== HTML & CSS - Intermediate ====================
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "In CSS Grid, what does the `grid-template-areas` property allow you to do?",
    "options": [
      "Define named grid areas for layout placement",
      "Set the gap between grid items",
      "Create an implicit grid",
      "Define the number of grid tracks"
    ],
    "answer": "Define named grid areas for layout placement"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the difference between `align-items` and `align-content` in flexbox?",
    "options": [
      "align-items aligns flex items along the cross axis; align-content aligns wrapped lines along the cross axis",
      "align-content aligns items horizontally; align-items aligns them vertically",
      "They are aliases for the same property",
      "align-items only works with CSS Grid, align-content only with flexbox"
    ],
    "answer": "align-items aligns flex items along the cross axis; align-content aligns wrapped lines along the cross axis"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is a CSS custom property (variable), and how is it declared?",
    "options": [
      "A variable declared with @var and accessed with $variable",
      "A variable declared with -- prefix and accessed with var() function",
      "A variable declared with $ prefix and accessed with #variable",
      "A variable declared inline and accessed with getComputedStyle"
    ],
    "answer": "A variable declared with -- prefix and accessed with var() function"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "Which media query syntax targets devices with a maximum viewport width of 768px?",
    "options": [
      "@media (min-width: 768px)",
      "@media (max-width: 768px)",
      "@media (device-width: 768px)",
      "@media only screen and (width <= 768px)"
    ],
    "answer": "@media (max-width: 768px)"
  },

  // ==================== HTML & CSS - Expert ====================
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of the CSS `contain` property?",
    "options": [
      "To hide overflowing content",
      "To tell the browser that an element's subtree is independent, enabling layout/paint optimization",
      "To make an element a positioning context",
      "To restrict scrolling behavior"
    ],
    "answer": "To tell the browser that an element's subtree is independent, enabling layout/paint optimization"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "Which CSS property enables snap-to-point scrolling behavior on a scrollable container?",
    "options": ["overflow-snap", "scroll-snap-type", "scroll-behavior", "overflow-scrolling"],
    "answer": "scroll-snap-type"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What do CSS container queries allow you to do that media queries cannot?",
    "options": [
      "Target specific device pixel ratios",
      "Style elements based on the size of their parent container rather than the viewport",
      "Query the user's color preferences",
      "Detect the presence of specific CSS features"
    ],
    "answer": "Style elements based on the size of their parent container rather than the viewport"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the CSS `:has()` pseudo-class selector enable?",
    "options": [
      "Selecting an element based on its attribute values",
      "Selecting a parent element based on its descendants or siblings",
      "Selecting elements that have focus",
      "Selecting elements based on their position in a list"
    ],
    "answer": "Selecting a parent element based on its descendants or siblings"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of CSS `@layer` (cascade layers)?",
    "options": [
      "To create a new stacking context",
      "To explicitly control the order of CSS specificity and cascading across different sources",
      "To apply styles conditionally at runtime",
      "To replace the need for !important"
    ],
    "answer": "To explicitly control the order of CSS specificity and cascading across different sources"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the View Transitions API allow you to do in a web application?",
    "options": [
      "Automatically create CSS animations between DOM states or page navigations",
      "Render 3D objects in the browser",
      "Implement real-time multiplayer interactions",
      "Manage browser history without JavaScript"
    ],
    "answer": "Automatically create CSS animations between DOM states or page navigations"
  },
  {
    "domain": "Frontend",
    "category": "HTML & CSS",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What does CSS anchor positioning allow you to do?",
    "options": [
      "Pin an element to a fixed position on the screen",
      "Position an element relative to another element (the anchor) regardless of DOM hierarchy",
      "Create parallax scrolling effects",
      "Align text inside a table cell"
    ],
    "answer": "Position an element relative to another element (the anchor) regardless of DOM hierarchy"
  },

  // ==================== JavaScript - Beginner ====================
  {
    "domain": "Frontend",
    "category": "JavaScript",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the key difference between `var`, `let`, and `const` in JavaScript?",
    "options": [
      "var is block-scoped; let and const are function-scoped",
      "let and const are block-scoped; var is function-scoped and can be re-declared",
      "All three behave identically",
      "const can be reassigned; let cannot"
    ],
    "answer": "let and const are block-scoped; var is function-scoped and can be re-declared"
  },

  // ==================== JavaScript - Expert ====================
  {
    "domain": "Frontend",
    "category": "JavaScript",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary purpose of the JavaScript Proxy object?",
    "options": [
      "To create network proxies for API calls",
      "To intercept and customize fundamental operations on objects",
      "To manage memory allocation",
      "To create private class fields"
    ],
    "answer": "To intercept and customize fundamental operations on objects"
  },
  {
    "domain": "Frontend",
    "category": "JavaScript",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the purpose of the WeakRef object and FinalizationRegistry in JavaScript?",
    "options": [
      "To create strong references that prevent garbage collection",
      "To hold weak references to objects and register callbacks for when they are garbage collected",
      "To implement private properties in classes",
      "To optimize array iteration performance"
    ],
    "answer": "To hold weak references to objects and register callbacks for when they are garbage collected"
  },
  {
    "domain": "Frontend",
    "category": "JavaScript",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What does SharedArrayBuffer enable in JavaScript that ArrayBuffer does not?",
    "options": [
      "Encrypted data storage",
      "Shared memory access across multiple Web Workers simultaneously",
      "Automatic garbage collection",
      "Faster JSON parsing"
    ],
    "answer": "Shared memory access across multiple Web Workers simultaneously"
  },

  // ==================== React - Beginner ====================
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What does JSX stand for and what does it allow you to write?",
    "options": [
      "JavaScript XML — allows writing HTML-like syntax in JavaScript",
      "JSON XML — allows parsing XML data",
      "Java Syntax Extension — extends Java classes",
      "JavaScript Extension — adds type annotations"
    ],
    "answer": "JavaScript XML — allows writing HTML-like syntax in JavaScript"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you pass data from a parent component to a child component in React?",
    "options": [
      "Using the state property",
      "Using props (properties)",
      "Using global variables",
      "Using the context API only"
    ],
    "answer": "Using props (properties)"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "What is the main advantage of React's virtual DOM?",
    "options": [
      "It renders directly to the browser's native DOM",
      "It allows efficient updates by minimizing direct DOM manipulation",
      "It eliminates the need for HTML",
      "It provides built-in CSS styling"
    ],
    "answer": "It allows efficient updates by minimizing direct DOM manipulation"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Which pattern correctly renders content conditionally in React?",
    "options": [
      "Using if-else statements inside JSX curly braces directly",
      "Using a ternary operator or logical && inside JSX curly braces",
      "Using the v-if directive",
      "Using CSS display property only"
    ],
    "answer": "Using a ternary operator or logical && inside JSX curly braces"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "How do you render a list of items from an array in a React component?",
    "options": [
      "Using the ng-repeat directive",
      "Using the Array.map() method to return JSX elements",
      "Using a for loop directly inside JSX",
      "Using the v-for directive"
    ],
    "answer": "Using the Array.map() method to return JSX elements"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 1,
    "level": "Beginner",
    "type": "mcq",
    "question": "Why is the `key` prop important when rendering lists in React?",
    "options": [
      "It styles the list items",
      "It helps React identify which items have changed, been added, or removed",
      "It generates unique HTML IDs",
      "It defines the order of the list"
    ],
    "answer": "It helps React identify which items have changed, been added, or removed"
  },

  // ==================== React - Intermediate ====================
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 2,
    "level": "Intermediate",
    "type": "mcq",
    "question": "What is the purpose of React.lazy and Suspense?",
    "options": [
      "To lazy-load images in a component",
      "To perform code splitting and defer loading of components until they are needed",
      "To memoize expensive computations",
      "To handle form validation"
    ],
    "answer": "To perform code splitting and defer loading of components until they are needed"
  },

  // ==================== React - Expert ====================
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is a key characteristic of React Server Components?",
    "options": [
      "They can only be written in JavaScript, not TypeScript",
      "They execute on the server and can directly access server resources without client-side JavaScript overhead",
      "They replace the need for HTML entirely",
      "They require Redux for state management"
    ],
    "answer": "They execute on the server and can directly access server resources without client-side JavaScript overhead"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What does the useTransition hook allow you to do in React?",
    "options": [
      "Create CSS transitions between component states",
      "Mark a state update as non-urgent to keep the UI responsive during expensive re-renders",
      "Implement route transitions between pages",
      "Manage transition animations in lists"
    ],
    "answer": "Mark a state update as non-urgent to keep the UI responsive during expensive re-renders"
  },
  {
    "domain": "Frontend",
    "category": "React",
    "phase": 3,
    "level": "Expert",
    "type": "mcq",
    "question": "What is the primary goal of the React Compiler (formerly React Forget)?",
    "options": [
      "To compile React to WebAssembly",
      "To automatically memoize components and hooks to eliminate unnecessary re-renders",
      "To convert React code to Angular syntax",
      "To generate TypeScript types from JSX"
    ],
    "answer": "To automatically memoize components and hooks to eliminate unnecessary re-renders"
  }
];
module.exports = supplementFrontend;
