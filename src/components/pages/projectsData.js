import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.jpg";
import image7 from "./img/image7.png";
import image8 from "./img/image8.jpg";
import image9 from "./img/image9.png";
import image10 from "./img/image10.jpg";
import image12 from "./img/image12.png";
import image13 from "./img/image13.png";
import image14 from "./img/image14.jpg";

import projectImage1 from "./img/projectImage1.png";
import projectImage2 from "./img/projectImage2.png";
import projectImage6 from "./img/projectImage6.jpg";
import projectImage8 from "./img/projectImage8.png";
import projectImage9 from "./img/projectImage9.png";


const projectsData = [
    {
        id: 1,
        title: "TodoList-app",
        image: image1,
        imageProject: projectImage1,
        tech: "ReactJS, CSS",
        description: "A task management application that helps users organize their daily activities efficiently. Features include adding, editing, and deleting tasks, marking tasks as completed, dynamic filters for better organization, and a clean, responsive user interface for seamless usability.",
        technologies: "Built using React, CSS, and integrated with GitHub Pages.",
        link: "https://github.com/makskhv21/TodoList-app",
        demo: "https://todo-list-9r5ann0p1-makskhv21s-projects.vercel.app/"
    },
    {
        id: 2,
        title: "UI-Frontend-Websites",
        image: image2,
        imageProject: projectImage2,
        tech: "HTML, CSS, LESS, Stylus, SASS, and SCSS",
        description: "A collection of responsive and visually appealing frontend websites built using modern web technologies. The websites showcase various UI/UX designs, task management features, and dynamic content presentation to enhance user experience across multiple devices.",
        technologies: "Built using HTML, CSS, LESS, Stylus, SASS, and SCSS for styling, and optimized for performance and accessibility.",
        link: "https://github.com/makskhv21/UI-Frontend-labs",
        demo: "https://makskhv21.github.io/UI-Frontend-labs/"
    },
    {
        id: 3,
        title: "Spotify-clone",
        image: image3,
        imageProject: image3,
        "tech": "React, Redux Toolkit, React Router DOM, TailwindCSS, Swiper, Axios, Vite",
        description: "Spotify-Clone is an elegant music application built using modern technologies such as React, Redux Toolkit, Tailwind CSS, and Vite, which provides a fast and interactive user experience, allowing users to search for music, create playlists, and enjoy their favorite tracks.",
        technologies: "Built using React, Redux Toolkit for state management, TailwindCSS for styling, React Router DOM for navigation, Swiper for dynamic carousels, Axios for API integration, and Vite for optimized development and build performance.",
        link: "https://github.com/makskhv21/Spotify-clone",
    },
    {
        id: 4,
        title: "Website-tailwindCSS",
        image: image4,
        imageProject: image4,
        tech: "HTML, CSS, JavaScript, TailwindCSS",
        description: "This project showcases a responsive website built using TailwindCSS, a utility-first CSS framework. The website demonstrates the usage of Tailwind's powerful classes for rapid UI development, including key features such as a mobile navigation menu, responsive design, and a clean, modern layout.",
        technologies: "Built using HTML for structure, TailwindCSS for styling with utility-first classes, JavaScript for interactive elements like the mobile menu and tab panels, and hosted on GitHub Pages for seamless deployment.",
        link: "https://github.com/makskhv21/website-tailwindCSS",
    },      
    {
        id: 5,
        title: "Basics-frontend",
        image: image5,
        imageProject: image5,
        tech: "HTML5, CSS3, JavaScript, React, API Integration",
        description: "A comprehensive collection of front-end lab assignments designed to teach the fundamentals of web development. Projects include hands-on practice with structuring content, styling layouts, adding interactivity, building dynamic React components, and integrating APIs for data-driven applications.",
        technologies: "HTML5: Modern web structuring; CSS3: Advanced styling with Flexbox, Grid, and transformations; JavaScript: Client-side interactivity and event handling; React: Component-based UI development and state management; API Integration: Fetching and utilizing JSON data from external APIs.",
        link: "https://github.com/makskhv21/frontendBasicsLabs",
        demo: "https://makskhv21.github.io/frontendBasicsLabs/"
    },
    {
        id: 6,
        title: "Bot-TodoList",
        image: image6,
        imageProject: projectImage6,
        tech: "Telegram Bot API, Node.js, JavaScript",
        description: "TaskBot is your personal assistant designed to help you manage tasks efficiently. Whether it's adding tasks, scheduling reminders, or tracking your progress, TaskBot provides a user-friendly interface and a variety of features to keep you organized.",
        technologies: "Telegram Bot API: For creating the bot and handling user interactions; Node.js: Backend runtime environment for efficient performance; JavaScript: Core scripting for implementing bot functionalities.",
        link: "https://github.com/makskhv21/bot-TodoList",
    },
    {
        id: 7,
        title: "Bot-weather",
        image: image7,
        imageProject: image7,
        tech: "Node.js, Telegraf.js, OpenWeatherMap API",
        description: "WeatherBot is a Telegram bot that provides up-to-date weather information for various cities. Users can view current weather, weekly forecasts, add cities, use geolocation for weather updates, and set daily reminders.",
        technologies: "Node.js: Backend runtime environment; Telegraf.js: Library for building Telegram bots; OpenWeatherMap API: Fetches real-time weather data.",
        link: "https://github.com/makskhv21/bot-weather",
    },    
    {
        id: 8,
        title: "Tic-tac-toe-game",
        image: image8,
        imageProject: projectImage8,
        tech: "React, Minimax Algorithm, CSS",
        description: "Tic-Tac-Toe is an interactive game application built with React. It features an implementation of the minimax algorithm for an intelligent AI opponent, a responsive design, and an intuitive user interface for seamless gameplay.",
        technologies: "React: Framework for building the UI and handling state; Minimax Algorithm: AI logic for intelligent gameplay; CSS: Styling for responsive and engaging design.",    
        link: "https://github.com/makskhv21/Tic-tac-toe-game",
    },
    {
        id: 9,
        title: "Microblog",
        image: image9,
        imageProject: projectImage9,
        tech: "React, React Query, Tailwind CSS, Axios",
        description: "Microblog is a modern social media app built with React, Zustand, React Query, and Tailwind CSS. The app allows users to log in, create posts, like/unlike posts, and view posts from other users, offering a seamless and engaging user experience.",
        technologies: "React: Framework for building a dynamic and interactive UI; Zustand: Lightweight state management for user authentication and post interactions; React Query: Efficient server data fetching with caching and synchronization; Tailwind CSS: Utility-first CSS framework for responsive and modern design; Axios: HTTP client for making API requests.",
        link: "https://github.com/makskhv21/UI-Frontend-labs/tree/main/microblog",
    },
    {
        id: 10,
        title: "Software Quality and Testing",
        image: image10,
        imageProject: image10,
        tech: "JavaScript, Rust, Unit, Integration, Randomized, Load Testing",
        description: "This project includes laboratory assignments focused on understanding and implementing various testing methodologies, tools, and best practices to ensure software quality. Tasks included enhancing test coverage, performing load and randomized tests, and using diverse testing strategies to improve the stability and performance of programs.",
        technologies: "Implemented tests using Python and Rust. Utilized Tarpaulin for measuring test coverage and generating reports. Developed unit, integration, load, and randomized tests to cover various scenarios.",
        link: "https://github.com/makskhv21/testing",
    },
    {
        id: 11,
        title: "Guess-word-gallows",
        image: image12,
        imageProject: image12,
        tech: "React, TypeScript, Styled Components",
        description: "Guess-word-gallows is a React (TypeScript) app that revives the classic word-guessing game with a modern touch. Players guess a hidden word one letter at a time, with incorrect guesses tracked in a hangman-style display. This project showcases my skills in combining game logic with interactive web technologies for a smooth user experience.",
        technologies: "Built using React for dynamic UI, TypeScript for strong typing, and Styled Components for modern styling.",
        link: "https://github.com/makskhv21/Guess-word-gallows",
    },
    {
        id: 12,
        title: "GithubFinder-app",
        image: image13,
        imageProject: image13,
        tech: "React, TypeScript, Styled Components, Axios",
        description: "GitHubFinder is a web application that allows users to search for GitHub profiles, view detailed information about repositories, followers, and more. It provides an intuitive and seamless experience for discovering and exploring GitHub users.",
        technologies: "Built using React for dynamic UI, TypeScript for strong typing, Styled Components for modern styling, and Axios for efficient API requests.",
        link: "https://github.com/makskhv21/GithubFinder-app",
    },
    {
        id: 13,
        title: "Other Pet Projects",
        image: image14,
        imageProject: image14,
        tech: "HTML, CSS, JavaScript, React",
        description: "A collection of small, interesting applications developed to demonstrate my knowledge and creative approach to web development. Each project emphasizes interactivity, visual appeal, and user-oriented interfaces with a high level of interaction.",
        technologies: "Built using modern web development technologies such as HTML, CSS, JavaScript, and React, focusing on delivering engaging and visually appealing user experiences.",
        link: "https://github.com/makskhv21/myPortfolio",
      },      
];

export default projectsData;