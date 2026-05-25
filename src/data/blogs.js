const blogs = [
  {
    id: "01",
    slug: "decoding-the-moniker-vsn",
    title: "LOG_001 // Decoding the Moniker: What is 'Vsn'?",
    date: "2026-05-25",
    excerpt: "Parsing the philosophical infrastructure and core consciousness behind the designation appended to my digital identity.",
    tags: ["#Philosophy", "#Identity", "#Consciousness"],
    content: [
      { type: "heading", text: "The Abstraction of 'Vsn'" },
      { type: "para", text: "If you look at my GitHub repository, my communication handles, or the footer infrastructure of this portfolio, you will see a recurring string appended to my identity: Vsn. Most observers parse it as a simple, stylized contraction. Today, I am initializing a routine to unpack its compilation parameters." },
      { type: "para", text: "The meaning is simple, yet deeply structural: Vsn stands for 'Vision'—but stripped entirely of the 'I's' (representing both physical optics and human ego). In interface design, we recognize that we do not generate light; we merely engineer configurations to frame it. Similarly, the human ego does not manufacture true vision. The clarity, the trajectory, and the consciousness required to see our ultimate path are provided by a higher source—by God." },
      { type: "para", text: "For me, utilizing this identifier is not a public demonstration of spirituality. It operates as an internal compiler flag. It continuously keeps me conscious of my baseline state: recognizing that I am not this material hardware chassis (the body), but the software process operating within (the soul)." },
      { type: "heading", text: "Intersecting Bytes and Beliefs" },
      { type: "para", text: "Operating inside this modern epoch of shifting automated environments and rapid AI progression, acquiring specialized operational skills is necessary for system survival. That is why I allocate my cycles to mastering native mobile architectures and declarative code configurations." },
      { type: "para", text: "I am a student from Nepal preparing to pursue a Bachelor's degree in Computer Engineering. Yet, despite a heavily analytical, logical, and mathematical background, my primary execution loop remains anchored outside the monitor layout: I am actively training to operate as a devotee of Krishna. Technology is my current craft, but mindfulness is the execution framework. Hare Krishna. 🙏" }
    ]
  },
  {
    id: "02",
    slug: "target-allocation-why-android",
    title: "LOG_002 // Target Allocation: Why Native Android Architecture?",
    date: "2026-05-22",
    excerpt: "Analyzing domain selection metrics and thread isolation boundaries across mobile development runtimes.",
    tags: ["#Android-SDK", "#Kotlin", "#Platform-Selection"],
    content: [
      { type: "heading", text: "The Allocation Matrix" },
      { type: "para", text: "When initializing a trajectory in software engineering, the stack landscape presents an array of open processing threads: Web Application stacks, Cyber Security auditing, Data Science modeling, or Mobile Platforms. For my terminal, the pipeline selection returned an immediate condition: Native Mobile Architecture." },
      { type: "para", text: "Web layers often suffer from viewport volatility and engine translation overhead; Cyber Security functions primarily as a defensive validation loop; Data Science maps out historical system logs. Mobile engineering, however, is beautifully immediate. It involves building high-performance systems that run natively inside local user memory, managing lifecycle transitions, and optimizing background services on constrained hardware targets." },
      { type: "heading", text: "The Game Dev Auxiliary Sandbox" },
      { type: "para", text: "Parallel to mobile architecture, I hold a persistent interest in game engine design. While my current capability parameters lack the advanced math configurations and physics constraints required to scale high-overhead interactive environments, I do not classify this interest as dead code." },
      { type: "para", text: "Instead, I approach game prototyping as an auxiliary sandbox—an exploratory runtime environment ideal for mastering complex state synchronization, asynchronous clock cycles, and complex rendering loops." },
      { type: "para", text: "Right now, my main execution thread is completely locked onto native Android development utilizing Kotlin and Jetpack Compose. To prevent processing drop-outs, thread allocation must remain focused on a singular, high-priority target." }
    ]
  },
  {
    id: "03",
    slug: "clean-architecture",
    title: "LOG_003 // Architectural Isolation: Clean Mobile Blueprints",
    date: "2026-05-15",
    excerpt: "Enforcing structural separation of concerns, untangled domain layers, and single-responsibility source dependency mapping.",
    tags: ["#Clean-Architecture", "#Decoupled-Code", "#Dependency-Injection"],
    content: [
      { type: "heading", text: "The Inversion of Isolation" },
      { type: "para", text: "Clean Architecture constructs strict, unidirectional boundaries between software components. By decoupling the core business infrastructure from the underlying frameworks, the application remains completely testable, safe from external dependency updates, and highly maintainable." },
      { type: "heading", text: "The Tri-Layer Specification" },
      { type: "para", text: "In a robust Android ecosystem, the code layout is split into three distinct modules: Data, Domain, and Presentation layers. The Domain ring exists as a pure code environment containing core business use cases, isolated entirely from Android OS dependencies." },
      { type: "para", text: "The Data ring manages the local cache databases (Room API) and external network connections (Retrofit Engine). The Presentation ring holds your ViewModels and declarative Composable layouts, observing stream layers emitted safely from the center." },
      { type: "code", text: 'class GetUserUseCase(private val repository: UserRepository) {\n    suspend operator fun invoke(id: String): Result<User> {\n        return repository.getUser(id)\n    }\n}' },
      { type: "heading", text: "System Optimization Benefits" },
      { type: "para", text: "Enforcing these boundaries scales development speeds smoothly over time. It allows developers to mock local data repositories instantly during testing, run swift unit assertions on standalone business logic, and guarantees a predictable, unidirectional information pipeline." }
    ]
  },
  {
    id: "04",
    slug: "coroutines-deep-dive",
    title: "LOG_004 // Concurrency Management: Coroutines and Flows",
    date: "2026-05-10",
    excerpt: "Isolating asynchronous processing chains and analyzing cold reactive stream emissions within structured lifecycles.",
    tags: ["#Kotlin", "#Coroutines", "#Asynchronous-Flow"],
    content: [
      { type: "heading", text: "Non-Blocking Telemetry" },
      { type: "para", text: "Kotlin Coroutines provide a lightweight, low-overhead mechanism for running asynchronous, non-blocking code in a clear, linear style. Instead of consuming expensive system threads, coroutines utilize cooperative suspension hooks, releasing the host context while awaiting slow network I/O operations." },
      { type: "heading", text: "Structured Lifecycle Binding" },
      { type: "para", text: "To prevent dangerous memory leaks and orphan background processes, Kotlin runs coroutines within a structured concurrency scope. When an interface container passes out of the lifecycle boundary, its associated scope executes a total cancellation down down the entire children processing tree." },
      { type: "code", text: 'viewModelScope.launch {\n    val data = withContext(Dispatchers.IO) {\n        repository.fetchData()\n    }\n    updateUI(data)\n}' },
      { type: "heading", text: "Asynchronous Data Streams" },
      { type: "para", text: "Kotlin Flow is a cold, asynchronous stream that sequentially emits data packets over time. Flow hooks directly into the local coroutine lifecycle, exposing powerful reactive operators like map, filter, and stateIn to handle transformations smoothly." },
      { type: "code", text: 'fun observeData(): Flow<List<Item>> = flow {\n    while(true) {\n        emit(repository.getItems())\n        delay(5000)\n    }\n}.catch { e -> emit(emptyList()) }' }
    ]
  }
];

export default blogs;