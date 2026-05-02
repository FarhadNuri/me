import {
  RiCodeFill,
  RiDatabase2Line,
  RiDownloadLine,
  RiEyeLine,
  RiGithubFill,
  RiGlobalLine,
  RiLinkedinBoxFill,
  RiMailLine,
  RiStackOverflowFill,
  RiTwitterXFill,
  RiFacebookFill,
  RiWhatsappFill,
} from "@remixicon/react";
import { SiCodeforces } from "react-icons/si";
export const socialLink = [
  {
    id: 1,
    icon: RiGithubFill,
    label: "Github",
    url: "https://github.com/FarhadNuri",
  },
  {
    id: 2,
    icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/farhad-nuri-ba99a62a5/",
  },
  {
    id: 3,
    icon: RiFacebookFill,
    label: "Facebook",
    url: "https://www.facebook.com/farhad.hosen.7",
  },
  {
    id: 4,
    icon: SiCodeforces,
    label: "Codeforces",
    url: "https://codeforces.com/profile/63_FarhadNuri",
  },
  {
    id: 5,
    icon: RiWhatsappFill,
    label: "WhatsApp",
    url: "https://wa.me/1865779218",
  },
];

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#",
  },
  {
    id: 2,
    label: "About Me",
    href: "#about",
  },
  {
    id: 3,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    label: "Contact Me",
    href: "#contact",
  },
];

export const heroItems = [
  {
    id: 1,
    icon: RiCodeFill,
    subtitle: "Frontend",
    text: "React, TypeScript, Next.js",
  },
  {
    id: 2,
    icon: RiGlobalLine,
    subtitle: "Backend",
    text: "Node.js, Express.js",
  },
  {
    id: 3,
    icon: RiDatabase2Line,
    subtitle: "Databases",
    text: "MongoDB, Neon, Prisma",
  },
];

export const heroBtns = [
  {
    id: 1,
    icon: RiEyeLine,
    label: "View My Work",
    url: "#projects",
  },
  {
    id: 2,
    icon: RiMailLine,
    label: "Get In Touch",
    url: "#contact",
  },
  {
    id: 3,
    icon: RiDownloadLine,
    label: "Download Resume",
    url: "https://drive.google.com/file/d/1nesbPwi-clJqh6GpaOzeA62VdpHnKJna/view?usp=sharing"
  },
];

export const aboutItems = [
  {
    id: 1,
    icon: import.meta.env.BASE_URL + "images/icon-1.svg",
    label: "React",
  },
  {
    id: 2,
    icon: import.meta.env.BASE_URL + "images/icon-2.svg",
    label: "Next.js",
  },
  {
    id: 3,
    icon: import.meta.env.BASE_URL + "images/icon-3.svg",
    label: "JavaScript",
  },
  {
    id: 4,
    icon: import.meta.env.BASE_URL + "images/icon-4.svg",
    label: "TypeScript",
  },

  {
    id: 6,
    icon: import.meta.env.BASE_URL + "images/icon-6.svg",
    label: "Tailwind",
  },

  {
    id: 10,
    icon: import.meta.env.BASE_URL + "images/icon-10.svg",
    label: "Node",
  },
  {
    id: 11,
    icon: import.meta.env.BASE_URL + "images/icon-11.png",
    label: "Supabase",
  },



  {
    id: 16,
    icon: import.meta.env.BASE_URL + "images/icon-16.svg",
    label: "Python",
  },

  {
    id: 18,
    icon: import.meta.env.BASE_URL + "images/neon.png",
    label: "Neon",
  },
  {
    id: 19,
    icon: import.meta.env.BASE_URL + "images/pgsql.png",
    label: "PostgreSQL",
  },
  {
    id: 20,
    icon: import.meta.env.BASE_URL + "images/mongodb-icon.svg",
    label: "MongoDB",
  },
  {
    id: 21,
    icon: import.meta.env.BASE_URL + "images/redis.svg",
    label: "Redis",
  },

];

export const timelineItems = [
  {
    id: 1,
    title: "Lead Front-end Engineer",
    list: ["Nexus Digital", "Amsterdam, Netherlands", "Full-Time"],
    time: "Jan 2024 - Present",
  },
  {
    id: 2,
    title: "Senior Front-end Developer",
    list: ["WebCraft Studios", "Rotterdam, Netherlands", "Contract"],
    time: "Apr 2023 - Dec 2023",
  },
  {
    id: 3,
    title: "Front-end Developer",
    list: ["CodeBase Agency", "Utrecht, Netherlands", "Full-Time"],
    time: "Sep 2021 - Mar 2023",
  },
  {
    id: 4,
    title: "Junior Front-end Developer",
    list: ["StartUp Hub", "Remote", "Full-Time"],
    time: "Jan 2021 - Aug 2021",
  },
  {
    id: 5,
    title: "Freelance Web Developer",
    list: ["Various Clients", "Worldwide"],
    time: "Jun 2019 - Dec 2020",
  },
];

export const projectsItems = [
  {
    id: 1,
    img: import.meta.env.BASE_URL + "images/p1.png",
    title: "FeastFlash",
    text: "Simple food delivery site with category browsing, search, dish details, cart, random pricing, dark mode, and responsive layout.",
    tags: ["HTML5", "Bootstrap 5", "JavaScript", "TheMealDB API"],
    liveLink: "https://feastflash.netlify.app/",
    githubLink: "https://github.com/FarhadNuri/FeastFlash",
  },
  {
    id: 2,
    img: import.meta.env.BASE_URL + "images/p2.png",
    title: "PULSEWIRE - News Portal",
    text: "Minimalist news portal using NewsAPI with category browsing, sorting, responsive layout, and Today's Pick highlights.",
    tags: ["JavaScript", "NewsAPI", "Responsive UI", "Sorting"],
    liveLink: "https://pulsewirenews.netlify.app/#",
    githubLink: "https://github.com/FarhadNuri/PulseWire",
  },
  {
    id: 3,
    img: import.meta.env.BASE_URL + "images/p3.png",
    title: "Cartify",
    text: "Full-stack product sharing app for creating, browsing, and commenting on products with type-safe tooling and fast UX.",
    tags: ["React", "TypeScript", "TanStack Query", "Node.js", "Neon", "Clerk"],
    liveLink: "https://cartify-3r6u.onrender.com/",
    githubLink: "https://github.com/FarhadNuri/Cartify",
  },

];
