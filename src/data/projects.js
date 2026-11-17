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

export const PROJECTS = [
  {
    id: "avalokan",
    category: "Android",
    featured: true,
    isNew: true,
    title: "Avalokan",
    problem:
      "Nepal's heritage is scattered across dozens of sources — places, stories, festivals, and events each live somewhere else.",
    solution:
      "Built a native Android heritage explorer that brings places, stories, and events into one app — Firestore-backed, offline-first with Room, and designed around Nepal's landscape.",
    learning:
      "Learned to design a repository layer that merges a live cloud stream with a local cache, wire Hilt across an app-wide graph, and shape a product's identity from a real cultural brief.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    status: "Android · v1.0.0 Released",
    github: "https://github.com/SamratVsn/Avalokan",
    download:
      "https://github.com/SamratVsn/Avalokan/releases/download/v1.0.0/avalokan1.0.0.apk",
    path: "/projects/avalokan",
  },
  {
    id: "themovie",
    category: "Android",
    featured: true,
    title: "The Movie App",
    problem:
      "I wanted to build a real-world Android app that talks to a live REST API and handles real user data.",
    solution:
      "Built a Jetpack Compose app in Kotlin using the TMDB API, with movie browsing, search, details, profile, and DataStore-backed settings.",
    learning:
      "Learned client-server architecture end to end — Retrofit networking, Kotlinx Serialization, reactive state with Coroutines & Flow, and MVVM with manual DI.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
    github: "https://github.com/SamratVsn/TheMovie",
    path: "/projects/themovie",
  },
  {
    id: "todo",
    category: "Android",
    featured: true,
    title: "Tasks",
    problem:
      "I wanted a lightweight task manager and a real project to apply modern Android architecture.",
    solution:
      "Built a Jetpack Compose app in Kotlin using MVVM + Repository, with Room persistence, Pomodoro-style focus sessions, smart reminders, and type-safe navigation.",
    learning:
      "Learned clean layering between UI, domain, and data, plus reactive state handling with StateFlow and Coroutines.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    github: "http://github.com/SamratVsn/Tasks",
    path: "/projects/todo",
  },
  {
    id: "blogvsn",
    category: "Web",
    featured: true,
    title: "BlogVsn Platform",
    problem:
      "I wanted a fast blog site where content is managed separately from the frontend.",
    solution:
      "Connected a React website to Google's Blogger API so I can write posts in Blogger and have them appear on the site automatically.",
    learning:
      "Learned how OAuth authentication works, how to fetch data from REST APIs, and how to deploy with edge caching for speed.",
    tags: ["React", "OAuth", "REST API"],
    github: "https://github.com/SamratVsn/BlogVsn",
    live: "https://blogvsn.vercel.app/",
    path: "/projects/blogvsn",
  },
  {
    id: "juicetracker",
    category: "Android",
    featured: false,
    title: "Juice Tracker",
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
    id: "kathmandu",
    category: "Android",
    featured: false,
    title: "Kathmandu My-City App",
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
    id: "portfolio",
    category: "Web",
    featured: false,
    title: "Portfolio Website",
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
    id: "sms",
    category: "C",
    featured: false,
    title: "Student Management System",
    problem:
      "I needed a way to store and manage student records persistently without using a database.",
    solution:
      "Built a program in C that saves data directly to a file and lets you add, search, update, and delete records.",
    learning:
      "Learned how files work at a low level — reading and writing data byte by byte, and keeping data safe even if the program crashes.",
    tags: ["C", "Binary I/O", "CLI"],
    github: "https://github.com/SamratVsn/C-codes",
    path: "/projects/sms",
  },
  {
    id: "bmsk",
    category: "Experiments",
    featured: false,
    title: "Bank Account Manager",
    problem:
      "I wanted to understand how banking applications handle accounts and transactions securely.",
    solution:
      "Created a Kotlin program with account creation, deposits, withdrawals, and balance checks — all with proper error handling.",
    learning:
      "Practiced object-oriented programming concepts like encapsulation, state management, and designing clean interfaces.",
    tags: ["Kotlin", "OOP", "CLI"],
    github:
      "https://github.com/SamratVsn/Kotlin-Beginner-Codes/blob/main/bankAccountManagement.kt",
    path: "/projects/bmsk",
  },
];
