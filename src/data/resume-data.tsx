import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Matteo Grosso",
  initials: "MG",
  location: "Turin, Italy, CET",
  locationLink: "https://www.google.com/maps/place/RivaroloCanavese",
  about:
    "Detail-oriented Backend Engineer dedicated to building performant products.",
  summary: (
    <>
      Experienced Backend Developer specializing in high-performance Golang services.
      Proven ability to design, develop, and implement scalable and efficient server-side architectures.
      Also skilled in DevOps practices with AWS, Docker and Kubernetes.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/76428629?s=400&u=0567efbcb65ee9b9bf47050a928c9f08c35426bd&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "grossomatteo.lavoro@gmail.com",
    tel: "+39 3458760155",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/matteo00gm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/teo-grosso",
        icon: LinkedInIcon,
      },
    ],
  },
  certification: [
    {
      title: "AWS Certified Developer – Associate",
      start: "August 29, 2024",
    },
    {
      title: "AWS Certified Solution Architect – Associate",
      start: "September 21, 2025",
    },
  ],
  education: [
    {
      school: "ITIS C.Olivetti, Ivrea",
      degree: "Diploma in Information Technology and Communication Systems",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Banjo Robotics",
      link: "",
      badges: ["Remote", "Java", "Docker", "AWS"],
      title: "Senior Fullstack Developer",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description: (
        <>
          Operated as an autonomous consultant, taking full ownership of the architectural design and development of key internal projects. I combined software engineering with DevOps best practices to deliver scalable cloud solutions.
          <ul className="list-inside list-disc">
            Key Responsibilities:
            <li>
              Cloud Architect & DevOps: Designed and deployed a robust cloud infrastructure on AWS using cloudformation and ECS.
            </li>
            <li>
              Containerization & ci/cd: Dockerized an open-source library wrapper and established a comprehensive CI/CD pipeline using GitHub Actions, managing deployments across Development, Testing, and Production environments.
            </li>
            <li>
              Serverless Development: Built a Chatbot wrapper POC from scratch using Spring Boot 3 & Java 21. Leveraged a serverless architecture with AWS Lambda, Cloudfront, and SAM for efficient and cost-effective deployment.
            </li>
            <li>
              Tecnical Leadership: Acted as a technical reference for the recruitment process, conducting technical interviews for new team members.
            </li>
            <li>
              Mentorship: Provided guidance and mentorship to junior colleagues.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nepta",
      link: "",
      badges: ["Remote", "Go", "Java", "Docker", "Kafka"],
      title: "Backend Developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: "2025",
      description: (
        <>
          Worked across multiple projects, contributing to both application development and infrastructure management.
          <ul className="list-inside list-disc">
            <li>
              Successfully led the end-to-end development of a centralized web application for Poste Italiane, streamlining employee portal access and enhancing user experience.
            </li>
          </ul>
          <ul className="list-inside list-disc">
            <li>
              Contributed to the development of a microservices-based architecture for Poste Italiane, focusing on implementing a fan-out mechanism using Kafka streams.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "IBM",
      link: "",
      badges: ["Remote", "Go", "Java", "Docker", "Kafka"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description: (
        <>
          Risk management restfull application.
          <ul className="list-inside list-disc">
            <li>
              This experience allowed me to collaborate directly with clients to discuss and propose both evolutionary and corrective solutions. Additionally, I developed and maintained some rest APIs crucial for employees in managing client investment portfolio risk.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Reply",
      link: "",
      badges: ["Remote", "Java", "Spring Boot", "Power BI"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "2020",
      end: "2023",
      description: (
        <>
          Vehicle delivery estimation web app based on Spring Boot microservices + first mentoring experience.
          <ul className="list-inside list-disc">
            <li>
              I contributed to the development of a web application, based on Spring Boot microservices, for estimating and calculating vehicle delivery times and costs from factory to dealerships. During this period, I quickly familiarized myself with the codebase through analysis and had my first experience mentoring a junior colleague.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Go",
    "Java",
    "WebSockets",
    "Vue",
    "Kubernetes",
    "Kafka Streams",
    "AWS (API Gateway, Lambda, SAM, EC2, ECS, Route 53, RDS, Amplify)",
  ],
  projects: [
    {
      title: "Project Theremin",
      techStack: [
        "Go", "Python",
      ],
      description:
        "A low latency, multimodal HCI system for touchless OS navigation combining relative hand-gesture tracking and acoustic triggers.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/matteo00gm/project-theremin",
      },
    },
    {
      title: "Quiz Formazione Primaria",
      techStack: [
        "Flutter",
      ],
      description:
        "A growing Flutter-based quiz application for students who want to join the university in the Formazione Primaria course. It runs 100% locally, generates revenue through ads and offers premium plans via in-app purchases.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://play.google.com/store/apps/details?id=com.matteogrosso.fp_quiz_app",
      },
    },
    {
      title: "Pulse",
      techStack: [
        "Go", "Kafka", "Redis",
      ],
      description:
        "Pulse is a distributed event ingestion system built in Go. It handles high-volume telemetry data via gRPC, buffers it through Kafka, processes it with a background worker, and stores real-time aggregations in Redis. The entire stack is fully observable with Prometheus, Grafana, and pprof.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/matteo00gm/pulse",
      },
    },
    {
      title: "Chase Game",
      techStack: [
        "Go",
      ],
      description:
        "Simple 2D game which uses my A* library in order to move the AI that chases the player.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/matteo00gm/chase-game",
      },
    },
    {
      title: "A* algorithm",
      techStack: [
        "Go",
      ],
      description:
        "Go Implementation of the A* Pathfinding Algorithm tailored with comprehensive test classes and benchmarks.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://github.com/matteo00gm/go-astar",
      },
    },
    {
      title: "StereoPlayer API",
      techStack: [
        "Go",
      ],
      description:
        "Personal stereo working with rest APIs. Using the ebitengine/oto library for decoding the mp3 files and for the system calls, the project aims to reproduce the tracks selected directly to the server.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "PauperLeague",
      techStack: ["Java", "Spring Boot", "Vue", "PostgreSQL"],
      description:
        "PauperLeague is a tournament management platform designed specifically for Magic: The Gathering.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
