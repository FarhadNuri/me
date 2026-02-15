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
} from "@remixicon/react";

export const socialLink = [
  {
    id: 1,
    icon: RiGithubFill,
  },
  {
    id: 2,
    icon: RiLinkedinBoxFill,
  },
  {
    id: 3,
    icon: RiTwitterXFill,
  },
  {
    id: 4,
    icon: RiStackOverflowFill,
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
    text: "Node.js, Express.js, Nest.js",
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
  },
  {
    id: 2,
    icon: RiMailLine,
    label: "Get In Touch",
  },
  {
    id: 3,
    icon: RiDownloadLine,
    label: "Download Resume",
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
    id: 13,
    icon: import.meta.env.BASE_URL + "images/icon-13.svg",
    label: "Docker",
  },


  {
    id: 16,
    icon: import.meta.env.BASE_URL + "images/icon-16.svg",
    label: "Python",
  },
  {
    id: 17,
    icon: import.meta.env.BASE_URL + "images/amazon.png",
    label: "AWS",
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
  {
    id: 22,
    icon: import.meta.env.BASE_URL + "images/rabbitmq.svg",
    label: "RabbitMQ",
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
    img: import.meta.env.BASE_URL + "images/portfolio-1.png",
    title: "E-Commerce Platform",
    text: "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    img: import.meta.env.BASE_URL + "images/portfolio-2.png",
    title: "Glamping Destinations Finder",
    text: "Interactive travel platform for discovering unique glamping locations with booking system, reviews, and interactive maps.",
    tags: ["Next.js", "Mapbox", "Stripe"],
    link: "#",
  },
  {
    id: 3,
    img: import.meta.env.BASE_URL + "images/portfolio-3.png",
    title: "Creative Agency Website",
    text: "Modern agency portfolio with stunning animations, case studies showcase, and seamless contact integration.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#",
  },
  {
    id: 4,
    img: import.meta.env.BASE_URL + "images/portfolio-4.png",
    title: "Healthcare Management System",
    text: "Comprehensive medical platform for patient records, appointment scheduling, telemedicine, and health analytics.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: "#",
  },
  {
    id: 5,
    img: import.meta.env.BASE_URL + "images/portfolio-5.png",
    title: "Restaurant Ordering Platform",
    text: "Full-service restaurant website with online ordering, table reservations, menu management, and delivery tracking.",
    tags: ["Vue.js", "Firebase", "Stripe"],
    link: "#",
  },
];