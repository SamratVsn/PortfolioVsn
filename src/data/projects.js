import Tasks from "../assets/ToDo/Home.png";
import MoviePoster from "../assets/TheMovie/MoviePoster.webp";
import BlogVsnB1 from "../assets/BlogVsn/B1.png";
import SMS1 from "../assets/SMS/SMS1.png";
import Portfolio from "../assets/Profile.webp";
import BMSK from "../assets/BMSK/BMSK1.png";
import Kathmandu from "../assets/KathmanduPoster.jpeg";
import JuicePoster from "../assets/JuicePoster.jpeg";
import AvalokanHome from "../assets/Avalokan/home.png";

export const screenshots = {
  "/projects/avalokan": AvalokanHome,
  "/projects/todo": Tasks,
  "/projects/themovie": MoviePoster,
  "/projects/blogvsn": BlogVsnB1,
  "/projects/sms": SMS1,
  "/projects/this": Portfolio,
  "/projects/bmsk": BMSK,
  "/projects/kathmandu": Kathmandu,
  "/projects/juicetracker": JuicePoster,
};

// Project tiers are evidence-based, not marketing categories:
//   shipped     - a verified release or a live deployed product exists
//   applied     - a substantial system built to apply a technical capability
//   foundations - coursework, first builds, and small experiments
export const TIERS = [
  {
    id: "shipped",
    eyebrow: "Shipped",
    title: "Shipped products",
    subtitle:
      "Projects with a verified release or a live product you can open today.",
  },
  {
    id: "applied",
    eyebrow: "Applied",
    title: "Applied engineering",
    subtitle:
      "Systems built to apply a technical idea in depth - no release or production users implied.",
  },
  {
    id: "foundations",
    eyebrow: "Foundations",
    title: "Foundations & Coursework",
    subtitle:
      "Course projects and experiments that built the fundamentals - kept here honestly, not presented as shipped products.",
  },
];

export const PROJECTS = [
  {
    id: "avalokan",
    category: "Android",
    tier: "shipped",
    featured: true,
    isNew: true,
    title: "Avalokan",
    thesis:
      "One Android app for Nepal's places, stories, and events, with a Firestore-backed Room cache that keeps working when the signal does not.",
    status: "Android - v1.0.0 released",
    problem:
      "Nepal's heritage is scattered across dozens of sources - places, stories, festivals, and events each live somewhere else.",
    solution:
      "Built a native Android heritage explorer that brings places, stories, and events into one app - Firestore-backed, offline-first with Room, and designed around Nepal's landscape.",
    learning:
      "Learned to design a repository layer that merges a live cloud stream with a local cache, wire Hilt across an app-wide graph, and shape a product's identity from a real cultural brief.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt"],
    github: "https://github.com/SamratVsn/Avalokan",
    download:
      "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk",
    path: "/projects/avalokan",
    decisions: [
      {
        title: "Room is the stream the UI reads",
        context:
          "Content lives in Firestore, but the app has to open on a weak or absent connection without an empty screen.",
        choice:
          "Firestore snapshot listeners write into Room. Repositories expose the Room flow and map Room entities to domain models, so ViewModels see one state stream. Listener and snapshot failures are logged instead of cancelling the cached stream.",
        tradeoff:
          "Screens never wait on the network for their first paint, but the UI can trail the server by a snapshot, and every synced collection needs a Room schema plus a mapping layer.",
        alternative:
          "Reading Firestore directly from ViewModels would remove the mapping layer but put a network dependency in the first paint. Not implemented.",
      },
      {
        title: "Only server-confirmed data may remove cache",
        context:
          "Firestore can report a document missing from its local cache before the server confirms a deletion, and a cold offline start can produce an empty cached snapshot.",
        choice:
          "A missing document is deleted only when the snapshot is server-confirmed. Cache replacement is skipped for empty cached snapshots, while an empty server snapshot remains authoritative.",
        tradeoff:
          "A good Room cache is not wiped offline, but a real server-side deletion can leave a stale row visible until the next server snapshot arrives.",
      },
      {
        title: "Treat the database as a disposable cache",
        context:
          "Places, events, and stories are remote content. None of the Room tables hold user-created records.",
        choice:
          "The database registers a destructive fallback for schema changes, plus a real v9 to v10 migration that preserves cached rows while the classification columns are added.",
        tradeoff:
          "Schema work stays cheap and the cache self-heals, but the fallback must be removed before any user-owned data is stored there. That contract is documented in AppModule.",
      },
      {
        title: "Relationships are ID lists, not foreign keys",
        context:
          "Content is document-shaped: a story references places, an event references places and other events, and each collection syncs independently.",
        choice:
          "Related IDs are stored as List<String> columns through Room type converters. Repositories resolve them into domain objects.",
        tradeoff:
          "There is no database-level referential integrity and broken references must be handled in code. In exchange, each Firestore document maps to one row without joins or sync ordering.",
      },
      {
        title: "Device-local preferences stay out of Firestore",
        context:
          "Saved places, visited places, favourite events, theme, notifications, and the avatar belong to one install.",
        choice:
          "They live in Preferences DataStore behind a PreferencesStore interface. Synced content stays in Room.",
        tradeoff:
          "These flags are fast and device-scoped, but they do not follow the user across devices or reinstalls.",
      },
    ],
    dataModel: [
      {
        name: "PlaceItem",
        table: "places",
        fields:
          "id (PK), name, description, meta, imageUrl, primaryCategory, secondaryCategories, typologies, attributes, tags, locality, relatedPlaceIds, relatedEventIds, provenance fields",
        responsibility:
          "Room cache of a Firestore place document. Mapped to the domain Place at the repository boundary.",
        note: "No Room foreign keys; related content is referenced by string ID lists.",
      },
      {
        name: "EventItem",
        table: "events",
        fields:
          "id (PK), title, description, date, fee, joinLink, eventKind, locality, ticketing, priceBasis, participation, format, relatedPlaceIds, relatedEventIds, provenance fields",
        responsibility:
          "Cached events and festivals, including the fields needed for registration and classification.",
        note: "Type, reach, participation, and pricing stay independent so a technology conference is not forced into a festival type.",
      },
      {
        name: "StoryItem",
        table: "stories",
        fields:
          "id (PK), title, subtitle, description, author, date, readTime, placeIds, primaryCategory, typologies, tags, relatedEventIds, period, provenance fields",
        responsibility:
          "Editorial stories, including Story of the Day and the full reader.",
        note: "Stories reference places and events by ID rather than by database relations.",
      },
      {
        name: "SnapshotBatch",
        table: "sync layer (not persisted)",
        fields: "items, isFromCache",
        responsibility:
          "Maps a Firestore snapshot to Room entities and applies the cache policy before writing.",
        note: "Kept separate from Firebase so the policy can be tested without an emulator.",
      },
      {
        name: "PreferencesStore",
        table: "DataStore",
        fields:
          "themeChoice, notificationsEnabled, avatarLocalUri, savedPlaceIds, favoriteEventIds, visitedPlaceIds",
        responsibility:
          "Device-local user state used by the profile, saves, and settings screens.",
        note: "Not part of the Firestore content cache and not a Room entity.",
      },
    ],
  },
  {
    id: "todo",
    category: "Android",
    tier: "shipped",
    featured: true,
    title: "Tasks",
    thesis:
      "A local-first task manager that pairs Room persistence with Pomodoro focus sessions and a Compose interface.",
    status: "Android - v2.1.0 released",
    problem:
      "I wanted a lightweight task manager and a real project to apply modern Android architecture.",
    solution:
      "Built a Jetpack Compose app in Kotlin using MVVM + Repository, with Room persistence, Pomodoro-style focus sessions, smart reminders, and type-safe navigation.",
    learning:
      "Learned clean layering between UI, domain, and data, plus reactive state handling with StateFlow and Coroutines.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    github: "https://github.com/SamratVsn/Tasks",
    download:
      "https://github.com/SamratVsn/Tasks/releases/latest/download/Tasks.apk",
    path: "/projects/todo",
    decisions: [
      {
        title: "Seed categories in both migration and creation",
        context:
          "Existing installs and fresh installs both need the default category set before a task can be filed.",
        choice:
          "The v6 to v7 migration creates the Categories table and inserts Study, Work, Productive, Personal, and Important. Fresh databases run the same inserts in the Room onCreate callback.",
        tradeoff:
          "The defaults are reliable on every install path, but changing them later needs another migration. INSERT OR IGNORE preserves any user edits.",
      },
      {
        title: "Deleting a category keeps its tasks",
        context:
          "A category is an organisational label, not the task itself, so deleting one should not silently destroy work.",
        choice:
          "deleteCategoryAndMoveTasks first updates every task in the removed category to Personal, then deletes the category row.",
        tradeoff:
          "No tasks disappear, but the reassignment is implicit and the task loses its original category.",
      },
      {
        title: "Manual dependency injection",
        context:
          "The app is a single module with one Activity and a small repository set.",
        choice:
          "AppContainer exposes the Room-backed ToDoRepository and PreferenceRepository as lazily created singletons. ViewModels are built through AppViewModelProvider factories.",
        tradeoff:
          "No annotation processor or generated graph, but the wiring is manual and there is no compile-time graph validation.",
      },
      {
        title: "Local-only persistence",
        context:
          "The current source has no account system or network data source.",
        choice:
          "Tasks and categories live in Room. Preferences and focus statistics live in DataStore. Nothing is sent to a server.",
        tradeoff:
          "The app is fast and works offline by construction, but there is no multi-device sync. Cloud sync is listed as roadmap, not shipped.",
      },
      {
        title: "Flow from Room, StateFlow in ViewModels",
        context:
          "Task lists and categories change in the database and must update the interface without manual refresh.",
        choice:
          "DAOs return Flow. Repositories pass them through. ViewModels convert them to StateFlow with stateIn, including the Focus timer state combined with stored preferences.",
        tradeoff:
          "Reactive updates come for free, but lifecycle and subscription management move into ViewModels.",
      },
    ],
    dataModel: [
      {
        name: "ToDoItem",
        table: "Tasks",
        fields:
          "id (Int, auto PK), title, description, category (default Personal), createdAt (LocalDateTime), isCompleted",
        responsibility:
          "One task row, ordered by completion state and creation time in the list query.",
        note: "category is a string label, not a Room foreign key to Categories.",
      },
      {
        name: "Category",
        table: "Categories",
        fields: "name (String PK)",
        responsibility:
          "The available category names shown in the editor and filters.",
        note: "Deleting a category updates its tasks to Personal before the row is removed.",
      },
      {
        name: "UserPreferences",
        table: "DataStore",
        fields:
          "themeMode, displayName, totalTasksCreated, smartRemindersEnabled, focusSessionsToday, lastFocusDate",
        responsibility:
          "Theme, profile name, reminder settings, and focus statistics.",
        note: "Stored separately from task data; focus counts reset by date.",
      },
      {
        name: "DateConverters",
        table: "Room type converters",
        fields: "LocalDate, LocalTime, LocalDateTime <-> String",
        responsibility:
          "Converts Java time values for SQLite storage and restores them safely.",
        note: "Parsing is wrapped in runCatching and returns null for malformed values.",
      },
      {
        name: "FocusUiState",
        table: "runtime state (not persisted)",
        fields:
          "totalTimeSeconds, timeLeftSeconds, isRunning, selectedDuration, isSessionCompleted, sessionsCompletedToday",
        responsibility:
          "Timer state exposed to the Focus screen, including the formatted time and progress.",
        note: "Built in FocusViewModel; only the completed-session count is written to DataStore.",
      },
    ],
  },
  {
    id: "blogvsn",
    category: "Web",
    tier: "shipped",
    featured: true,
    title: "BlogVsn Platform",
    thesis:
      "A React front end that turns a Blogger blog into a live site, with Google sign-in and a client-side contact form.",
    status: "Web - live on Vercel",
    problem:
      "I wanted a fast blog site where content is managed separately from the frontend.",
    solution:
      "Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically.",
    learning:
      "Learned how OAuth sign-in works, how to fetch data from REST APIs, and how to deploy a static site.",
    tags: ["React", "OAuth", "REST API"],
    github: "https://github.com/SamratVsn/BlogVsn",
    live: "https://blogvsn.vercel.app/",
    path: "/projects/blogvsn",
    decisions: [
      {
        title: "Blogger is the CMS",
        context:
          "Writing already happens in Blogger. The site needs a React interface without building an editor or a content database.",
        choice:
          "IntroPost calls the Blogger API v3 posts endpoint for the blog and renders the latest three posts as cards that link back to Blogger.",
        tradeoff:
          "There is no CMS to maintain, but the site depends on an external API and only shows the latest three posts. The search box and tag chips in the current source are presentational, not wired to the feed.",
      },
      {
        title: "All data fetching happens in the browser",
        context:
          "The project is a static Vite build deployed to Vercel with no server runtime.",
        choice:
          "Axios fetches Blogger content inside useEffect. vercel.json rewrites every path to index.html so React Router handles the client-side routes.",
        tradeoff:
          "Deployment is simple and cheap, but there is no server-side cache or secret store. The Blogger API key is embedded in the client bundle and the first content paint waits on a client request.",
      },
      {
        title: "Google sign-in is identity display, not authorization",
        context:
          "The app needs a recognisable signed-in state without operating a backend session service.",
        choice:
          "GoogleLogin returns an ID token. jwt-decode extracts the profile and stores it in localStorage. The signed-in state is rendered on the login route.",
        tradeoff:
          "No password handling and no server session, but localStorage is readable by any script on the origin and no content in the app is protected by the sign-in.",
      },
      {
        title: "Contact delivery is client-side",
        context:
          "A static site still needs a contact form without adding a server to operate.",
        choice:
          "EmailJS sends name, email, and message from the browser using a service, template, and public key.",
        tradeoff:
          "There is no backend to run, but the keys ship to the client and there is no server-side validation or spam control.",
      },
    ],
    dataModel: [
      {
        name: "Blogger post",
        table: "external API",
        fields: "id, title, content (HTML), url, published",
        responsibility:
          "The content feed rendered as post cards, with a 180-character content excerpt in the current UI.",
        note: "Only the latest three posts are requested; there is no pagination or search query.",
      },
      {
        name: "Google profile",
        table: "localStorage: user",
        fields: "Decoded ID-token claims such as name, email, and picture",
        responsibility:
          "Keeps the signed-in header state across a reload.",
        note: "There is no server session and no authorization check tied to this object.",
      },
      {
        name: "Contact payload",
        table: "EmailJS template",
        fields: "name, email, message",
        responsibility:
          "The three fields sent by the contact form.",
        note: "Delivery and validation happen entirely in the browser.",
      },
    ],
  },
  {
    id: "themovie",
    category: "Android",
    tier: "applied",
    featured: true,
    title: "The Movie App",
    thesis:
      "A TMDB client that separates networking, caching, and UI state, with a DataStore watchlist and Firebase authentication.",
    status: "Android - source only, no release",
    problem:
      "I wanted to build a real-world Android app that talks to a live REST API and handles real user data.",
    solution:
      "Built a Jetpack Compose app in Kotlin using the TMDB API, with movie browsing, search, details, profile, and DataStore-backed settings.",
    learning:
      "Learned client-server architecture end to end - Retrofit networking, Kotlinx Serialization, reactive state with Coroutines & Flow, and MVVM with manual DI.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    github: "https://github.com/SamratVsn/TheMovie",
    path: "/projects/themovie",
    decisions: [
      {
        title: "Two cache layers with different jobs",
        context:
          "TMDB responses are slow and the app should still show something when the network drops.",
        choice:
          "OkHttp keeps a 10 MB disk cache in cacheDir. MovieRepository keeps a five-minute in-memory TTL cache for first pages and detail responses and falls back to stale cached data on failure.",
        tradeoff:
          "Cached reads are fast and survive transient failures, but only page one is cached in memory, deeper pages always hit the network, and the memory cache is lost on process death.",
      },
      {
        title: "The API key is attached in an interceptor",
        context:
          "TMDB authenticates requests with an API key and the client must not leak it into release logs.",
        choice:
          "An OkHttp interceptor appends api_key from BuildConfig. The logging interceptor runs at BASIC in debug and NONE in release.",
        tradeoff:
          "The key stays out of logcat, but any key shipped in an APK can be extracted. A backend proxy would be the stronger boundary. Not implemented.",
      },
      {
        title: "Watchlist is a JSON list in DataStore",
        context:
          "The watchlist is a small, user-local set of movies and does not need a server account.",
        choice:
          "WatchlistRepository serialises List<Movie> to JSON in Preferences DataStore and exposes it as a Flow, with toggle, remove, and clear operations.",
        tradeoff:
          "No database schema or migration burden, but every toggle rewrites the whole list and the watchlist does not sync across devices.",
      },
      {
        title: "Firebase Auth owns identity, DataStore owns profile fields",
        context:
          "The app needs sign-up, login, password reset, and a display name, plus editable profile text and a favourite genre.",
        choice:
          "AuthRepository wraps FirebaseAuth in a callbackFlow. Name, bio, favourite genre, and theme live in a separate DataStore-backed PreferencesRepository.",
        tradeoff:
          "Auth state is reactive and profile edits stay local, but the two sources can disagree and there is no server-side profile record. Email verification and Google sign-in are roadmap items, not shipped.",
      },
    ],
    dataModel: [
      {
        name: "Movie",
        table: "serializable DTO",
        fields:
          "id, title, overview, posterPath, backdropPath, releaseDate, voteAverage, voteCount, genreIds, originalLanguage, originalTitle, popularity",
        responsibility:
          "List, search, and watchlist card data, with computed posterUrl and backdropUrl.",
        note: "This is also the shape serialised into the DataStore watchlist.",
      },
      {
        name: "MovieApiResponse",
        table: "serializable DTO",
        fields: "page, results, totalPages, totalResults",
        responsibility:
          "The paginated envelope returned by TMDB list and search endpoints.",
        note: "Only first-page results are kept in the in-memory cache.",
      },
      {
        name: "MovieDetail",
        table: "serializable DTO",
        fields:
          "id, title, overview, runtime, tagline, status, genres, releaseDate, voteAverage, posterPath, backdropPath",
        responsibility:
          "Detail-screen data, including genre names and runtime.",
        note: "Cached per movie ID for five minutes with a stale fallback.",
      },
      {
        name: "Genre",
        table: "serializable DTO",
        fields: "id, name",
        responsibility:
          "Genre labels on a movie detail response and the favourite-genre selector.",
        note: "The app also maps genre names to TMDB IDs for recommendations.",
      },
      {
        name: "AuthState / AuthUser",
        table: "runtime state",
        fields: "Loading, SignedOut, SignedIn(user: uid, displayName, email, photoUrl)",
        responsibility:
          "Reactive Firebase session state consumed by the profile and auth screens.",
        note: "Produced from a FirebaseAuth AuthStateListener wrapped in callbackFlow.",
      },
      {
        name: "UserPreferences",
        table: "DataStore",
        fields:
          "themeMode, defaultCategory, displayName, bio, favoriteGenre",
        responsibility:
          "Local appearance and profile preferences.",
        note: "Separate from the Firebase user record.",
      },
    ],
  },
  {
    id: "juicetracker",
    category: "Android",
    tier: "applied",
    featured: false,
    title: "Juice Tracker",
    thesis:
      "An Android app that mixes Compose with RecyclerView to log juice recipes, details, and ratings in Room.",
    status: "Android - source only, learning build",
    problem:
      "I wanted to explore how Jetpack Compose integrates with traditional Android Views while building something useful.",
    solution:
      "Built a Kotlin app that logs juice combinations, details, and ratings using Room for local persistence and a UI that mixes Compose with RecyclerView.",
    learning:
      "Learned Compose-View interoperability, Room database integration, and reactive state with StateFlow inside an MVVM structure.",
    tags: ["Kotlin", "Compose + Views", "Room"],
    github: "https://github.com/SamratVsn/Juicetracker",
    path: "/projects/juicetracker",
  },
  {
    id: "portfolio",
    category: "Web",
    tier: "applied",
    featured: false,
    title: "Portfolio Website",
    thesis:
      "This site: a prerendered React and Vite portfolio with a shared case-study system and a single SEO builder.",
    status: "Web - live site",
    problem:
      "I needed a portfolio that looks professional and shows who I am without feeling generic.",
    solution:
      "Built this site with React and Tailwind CSS, focusing on clean design and clear storytelling about my work.",
    learning:
      "Practiced React component design, responsive layouts, and making deliberate UX choices.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SamratVsn",
    live: "https://www.samratparajuli0.com.np",
    path: "/projects/this",
  },
  {
    id: "kathmandu",
    category: "Android",
    tier: "foundations",
    featured: false,
    title: "Kathmandu My-City App",
    thesis:
      "A Compose city guide built to complete Android Basics with Compose.",
    status: "Android - course project",
    problem:
      "I wanted to build a real app that showcases my city and completes the Android Basics with Compose course.",
    solution:
      "Built a Jetpack Compose recommendation app featuring Kathmandu's special places, temples, shops, and tourist destinations with MVVM and Navigation Compose.",
    learning:
      "Practiced Material 3 theming, ViewModel-backed state preservation across rotations, and adaptive layouts for different screen sizes.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    github: "https://github.com/SamratVsn/Kathmandu",
    path: "/projects/kathmandu",
  },
  {
    id: "sms",
    category: "C",
    tier: "foundations",
    featured: false,
    title: "Student Management System",
    thesis:
      "A C program that stores student records in a binary file without a database.",
    status: "C - coursework",
    problem:
      "I needed a way to store and manage student records persistently without using a database.",
    solution:
      "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
    learning:
      "Learned how files work at a low level - reading and writing data byte by byte, and keeping data safe even if the program crashes.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms",
  },
  {
    id: "bmsk",
    category: "Experiments",
    tier: "foundations",
    featured: false,
    title: "Bank Account Manager",
    thesis:
      "A Kotlin CLI that models bank accounts and transactions with object-oriented state.",
    status: "Kotlin - learning experiment",
    problem:
      "I wanted to understand how banking applications handle accounts and transactions securely.",
    solution:
      "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks - all with proper error handling.",
    learning:
      "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
    tags: ["Kotlin", "OOP", "CLI"],
    github:
      "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    path: "/projects/bmsk",
  },
];

export function getProject(id) {
  return PROJECTS.find((project) => project.id === id);
}
