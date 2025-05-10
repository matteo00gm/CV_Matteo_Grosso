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
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Experienced Full Stack Developer specializing in high-performance Golang services. 
      Proven ability to design, develop, and implement scalable and efficient server-side architectures. 
      Also skilled in Vue front-end development and DevOps practices with AWS, Docker and Kubernetes.
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
  ],
  education: [
    {
      school: "Politecnico di Torino",
      degree: "Bachelor's Degree in Computer Science",
      start: "2025",
      end: "Present",
    },
    {
      school: "ITIS C.Olivetti, Ivrea",
      degree: "Diploma in Information Technology and Communication Systems",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Nepta",
      link: "",
      badges: ["Remote", "Vue", "Go", "Docker", "Kafka"],
      title: "Full Stack DevOps",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
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
      badges: ["Remote", "Vue", "Go", "Java", "Docker", "Kafka"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description: (
        <>
          Sole developer for a client investment portfolio risk management web application.
          <ul className="list-inside list-disc">
            <li>
              This experience allowed me to collaborate directly with clients to discuss and propose both evolutionary and corrective solutions. Additionally, as the sole developer, I developed and maintained a web application crucial for employees in managing client investment portfolio risk.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Reply",
      link: "",
      badges: ["Remote", "Angular", "TypeScript", "Java", "Spring Boot", "Power BI"],
      title: "Full Stack Developer",
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
      title: "MusicPlayer",
      techStack: [
        "Go",
        "Vue",
        "WebSockets",
      ],
      description:
        "[WIP]Music streaming platform like spotify. Using the ebitengine/oto library for decoding the mp3 files and for the system calls, the project aims to reproduce the tracks selected to the clients who requested the audio file",
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
