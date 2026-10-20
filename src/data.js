import amazon from "./img/amazonclone.png";
import autoback from "./img/autoback.png";
import MyImage from "./img/MyImage01.png";
import tas from "./img/icons/Techasoft.png";
import { FiShield, FiZap, FiDatabase, FiPieChart, FiKey, FiServer } from "react-icons/fi";

export const personalInfo = {
  name: "Anoop Kumar",
  title: "Full Stack Web Developer",
  email: "amt312002@gmail.com",
  linkedin: "https://www.linkedin.com/in/anoop--kumar/",
  github: "https://github.com/Anoop-Kumar-31",
  portfolio: "https://myportfolio-kto7.onrender.com",
  resumeUrl: "https://drive.google.com/file/d/1eHDaxMoXEm-IJtvzYnXIoFp-FyX6ua0U/view?usp=sharing",
  motto: "Building reliable full-stack systems with React, Node.js, and PostgreSQL—focused on Clean Architecture, User-Experience, Secure Authentication, and Scalable APIs.",
  MyImage: {
    src: MyImage,
    alt: "Anoop Kumar",
  },
};

export const workExperience = [
  {
    company: "Techasoft Pvt. Ltd.",
    companyLogo: tas,
    role: "Software Developer Intern",
    period: "May 2025 – Nov 2025",

    "Full-Stack Development": [
      "Built REST APIs using Node.js, Express.js, and Django, with Sequelize-based relational data models.",
      "Developed role-based React portals for Admin, Vendor, and Customer workflows using Redux Toolkit.",
      "Delivered end-to-end features across frontend, backend, authentication, and database layers.",
    ],

    "Real-Time & Performance": [
      "Integrated Server-Sent Events (SSE) for real-time application updates.",
      "Improved backend performance through Redis caching, query optimization, and database indexing.",
      "Implemented JWT authentication, RBAC, and automated email workflows using Nodemailer.",
    ],

    "Engineering & Collaboration": [
      "Built reusable UI components and refactored legacy modules for better maintainability.",
      "Worked with Git-based workflows and Linux environments in a collaborative development team.",
      "Documented APIs and backend modules to support development and onboarding.",
    ],
  },
];

export const projects = [
  {
    id: 4,
    title: "QueueFlow — Real-Time Workflow Intelligence Platform",
    businessContext:
      "Real-time developer workflow and project collaboration platform",

    period: "Feb 2026 – Present",

    description:
      "Production-grade collaboration platform combining real-time task synchronization, developer queues, workflow analytics, and client visibility in one system.",

    problemSolutionImpact: {
      problem:
        "Project teams often rely on fragmented task updates, delayed status reporting, and limited visibility into bottlenecks and workload distribution.",

      solution:
        "Engineered an event-driven platform with WebSocket synchronization, time-ordered task queues, role-based access, and workflow analytics for live project coordination.",

      impact:
        "Gives teams real-time visibility into task progress, bottlenecks, and workload distribution while enabling clients to track projects and leave contextual notes."
    },

    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "WebSockets",
      "JWT Authentication",
      "Event-Driven Architecture"
    ],

    link: "https://queue-flow-rho.vercel.app/",
    githubRepo:
      "https://github.com/Anoop-Kumar-31/QueueFlow-Real-Time-Task-Queue-Team-Collaboration-Platform",

    project_img: "/img/gallery/QueueFlow/ququeflow.png",
    category: "Full-Stack",
    startDate: "2026-02",

    gallery: [
      "/img/gallery/QueueFlow/Login.png",
      "/img/gallery/QueueFlow/SignUp.png",
      "/img/gallery/QueueFlow/AnalyticalOverview.png",
      "/img/gallery/QueueFlow/MyTask.png",
      "/img/gallery/QueueFlow/OverviewDashboard.png",
      "/img/gallery/QueueFlow/ProjectDashboard.png",
      "/img/gallery/QueueFlow/TaskDetails.png",
      "/img/gallery/QueueFlow/CodeTimeLimit.png",
      "/img/gallery/QueueFlow/CodeGenerated.png",
      "/img/gallery/QueueFlow/JoinWithProjectCode.png",
      "/img/gallery/QueueFlow/ManageAccess(PM).png"
    ],

    isFeatured: true
  },

  {
    id: 3,
    title: "NEXORA — Multi-Role Operations & Analytics Platform",
    businessContext:
      "Role-based restaurant operations and financial analytics platform",

    period: "Jan 2026 – Feb 2026",

    description:
      "Full-stack operations platform with secure role-based access, financial analytics, multi-location management, and API-level authorization.",

    problemSolutionImpact: {
      problem:
        "Multi-location operations require different access levels for administrators, managers, and staff while keeping financial and operational data centralized.",

      solution:
        "Built a role-driven platform with JWT authentication, middleware-based authorization, protected APIs, and dedicated dashboards for each operational role.",

      impact:
        "Centralizes revenue, expenses, users, and locations while ensuring each role can access only the data and actions relevant to its responsibilities."
    },

    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT Authentication",
      "RBAC",
      "REST APIs",
      "MVC Architecture"
    ],

    link: "https://role-based-analytics-dashboard.vercel.app/",
    githubRepo:
      "https://github.com/Anoop-Kumar-31/NEXORA-Multi-Tenant-Role-Based-Company-Restaurants-Management-Analytics-Platform",

    project_img:
      "/img/gallery/RBAC Analytics Dashboard/RBACAnalyticalDashboard.png",

    category: "Full-Stack",
    startDate: "2026-01",

    gallery: [
      "/img/gallery/RBAC Analytics Dashboard/signin.png",
      "/img/gallery/RBAC Analytics Dashboard/dashboard.png",
      "/img/gallery/RBAC Analytics Dashboard/onboarding.png",
      "/img/gallery/RBAC Analytics Dashboard/onboarded.png",
      "/img/gallery/RBAC Analytics Dashboard/user.png",
      "/img/gallery/RBAC Analytics Dashboard/revenue.png",
      "/img/gallery/RBAC Analytics Dashboard/expense.png",
      "/img/gallery/RBAC Analytics Dashboard/Bluebook.png",
      "/img/gallery/RBAC Analytics Dashboard/users.png",
      "/img/gallery/RBAC Analytics Dashboard/location.png"
    ],

    isFeatured: true
  },

  {
    id: 1,
    title: "HeartBeat — Blood Donor & Blood Bank Platform",
    businessContext:
      "Healthcare platform for blood banks and connecting donors with patients",

    period: "May 2023 – Aug 2023",

    description:
      "Full-stack blood assistance platform combining authenticated donor information with 2,800+ searchable government blood bank records from data.gov.in.",

    problemSolutionImpact: {
      problem:
        "People searching for blood often face fragmented donor information and difficulty discovering relevant blood banks from a single platform.",

      solution:
        "Built a centralized platform with geographic donor discovery, email OTP verification, and integration of 2,800+ real government blood bank records.",

      impact:
        "Brings donor discovery and verified public blood bank data into one searchable experience, reducing the effort required to find relevant blood resources."
    },

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Nodemailer",
      "OTP Authentication",
      "MVC Architecture"
    ],

    link:
      "https://blood-management-system-frontend-rosy.vercel.app/",

    githubRepo:
      "https://github.com/Anoop-Kumar-31/HeartBeat-Connecting-Donors-Saving-Lives-and-Finding-Blood-Banks",

    project_img:
      "/img/gallery/BloodManagementSystem/heartbeat.png",

    category: "Full-Stack",
    startDate: "2023-05",

    gallery: [
      "/img/gallery/BloodManagementSystem/HomePage.png",
      "/img/gallery/BloodManagementSystem/EmailVerification.png",
      "/img/gallery/BloodManagementSystem/OTPEmail.png",
      "/img/gallery/BloodManagementSystem/BloodBank.png"
    ],

    isFeatured: true
  },

  {
    id: 2,
    title: "The Secrets of CHIAROSCURO — Novel Experience",
    businessContext:
      "Immersive digital experience and reader engagement platform for an original fantasy novel",

    period: "Dec 2025 – Jan 2026",

    description:
      "Custom-built interactive website that transforms an original novel into an immersive digital experience with character exploration, world-building, and anonymous reader feedback.",

    problemSolutionImpact: {
      problem:
        "Publishing platforms provide limited control over visual identity, world-building presentation, and direct reader interaction.",

      solution:
        "Designed a dedicated story experience that brings characters, lore, and reader feedback together through responsive UI and motion-driven storytelling.",

      impact:
        "Creates a distinct digital identity for the novel and gives readers a centralized way to explore its world and share feedback."
    },

    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design"
    ],

    link:
      "https://secrets-of-chiaroscuro.vercel.app/",

    githubRepo:
      "https://github.com/Anoop-Kumar-31/Secrets_of_Chiaroscuro",

    project_img:
      "/img/gallery/NovelWebsite/tsocnovel.png",

    category: "Frontend",
    startDate: "2025-12",

    gallery: [
      "/img/gallery/NovelWebsite/herosection.png",
      "/img/gallery/NovelWebsite/about.png",
      "/img/gallery/NovelWebsite/char1.png",
      "/img/gallery/NovelWebsite/char2.png",
      "/img/gallery/NovelWebsite/char3.png",
      "/img/gallery/NovelWebsite/char4.png",
      "/img/gallery/NovelWebsite/lore.png",
      "/img/gallery/NovelWebsite/Feedbackandfooter.png"
    ]
  }
];

export const skills = {
  technical: [
    {
      name: "Languages",
      list: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      name: "Frontend",
      list: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      name: "Backend & APIs",
      list: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "REST APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Socket.IO",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
      ],
    },
    {
      name: "Databases & ORM",
      list: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
        {
          name: "Sequelize",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        },
      ],
    },
    {
      name: "Tools & Platforms",
      list: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/docker.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ],

  social: [
    "Problem Solving",
    "Clean & Maintainable Code",
    "User-Centered Development",
    "Collaboration & Communication",
    "Continuous Learning",
    "Ownership & Initiative",
  ],
};

export const education = {
  university: "Chandigarh University, Mohali",
  degree: "Bachelor of Engineering (B.E) in Computer Science & Engineering",
  period: "Aug 2021 – Jul 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png",
  cgpa: "7.98",
};

// Quick Info for HR (6-10 second scan)
export const quickInfo = {
  experience: "6 months professional",
  stack: "PERN | MERN | Full Stack",
  openTo: ["Full-Time", "Remote"],
  location: "Gonda, Uttar Pradesh",
  availability: "Available Immediately"
};

// Hire Readiness - What I Can Help With Immediately
export const hireReadiness = {
  title: "What I Can Help With Immediately",
  capabilities: [
    {
      title: "Build Secure RBAC Systems",
      description: "Implement JWT authentication with role-based middleware and protected API access",
      icon: FiShield,
      color: "#ec4899" // Pink
    },
    {
      title: "Develop Scalable REST APIs",
      description: "Design modular Node.js/Express APIs using controller-service architecture",
      icon: FiZap,
      color: "#f59e0b" // Amber
    },
    {
      title: "Design Relational Database Schemas",
      description: "Model structured PostgreSQL databases with proper relations and optimized queries",
      icon: FiDatabase,
      color: "#3b82f6" // Blue
    },
    {
      title: "Build Data-Driven Dashboards",
      description: "Create dynamic React dashboards with Redux state management and protected routing",
      icon: FiPieChart,
      color: "#10b981" // Emerald
    },
    {
      title: "Implement Authentication Systems",
      description: "Set up secure login flows with bcrypt hashing and token validation",
      icon: FiKey,
      color: "#8b5cf6" // Violet
    },
    {
      title: "Deploy Full-Stack Applications",
      description: "Configure environments and deploy applications on different platforms",
      icon: FiServer,
      color: "#06b6d4" // Cyan
    }
  ]

};


// export const certificates = [
//   { text: "SWAYAM– NPTEL: Introduction to Programming in C — ", highlight: "Elite + Gold Title", highlightColor: "text-yellow-400" },
//   { text: "REACT and Principles of UX/UI Design Certification by ", highlight: "META", highlightColor: "text-blue-400" },
//   { text: "Introduction to Web Development Certification by ", highlight: "IBM", highlightColor: "text-blue-500" },
//   { text: "Achiever Title by CHANDIGARH UNIVERSITY — ", highlight: "NPTEL– Swayam", highlightColor: "text-green-500" },
// ];



// New certificates info
export const certificates = [
  {
    name: "Google UX Design",
    type: "Specialization Certificate",
    date: "April 21, 2024",
    authorizedBy: "Google",
    verify: "https://www.coursera.org/account/accomplishments/specialization/certificate/EHVVYX8HTCNR",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Introduction to Front-End Development",
    type: "Course Certificate",
    date: "December 17, 2024",
    authorizedBy: "Meta",
    verify: "https://www.coursera.org/account/accomplishments/certificate/M9ZM3FBH54ZM",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Introduction to Back-End Development",
    type: "Course Certificate",
    date: "December 17, 2024",
    authorizedBy: "Meta",
    verify: "https://www.coursera.org/account/accomplishments/certificate/ZFZEMW6NLXMH",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Figma for UI/UX: Master Web Design in Figma",
    type: "Course Certificate",
    date: "December 10, 2024",
    authorizedBy: "Packt",
    verify: "https://www.coursera.org/account/accomplishments/certificate/MSZAFT5YJJ3N",
    icon: "https://www.packtpub.com/rebuild/build/assets/packt-Dz-8EKdV.svg"
  },
  {
    name: "Data Visualization with Tableau",
    type: "Specialization Certificate",
    date: "December 10, 2024",
    authorizedBy: "University of California, Davis",
    verify: "https://www.coursera.org/account/accomplishments/specialization/certificate/KBFRHMQR43N7",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_University_of_California_Davis.svg"
  }
];