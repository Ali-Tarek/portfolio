import React, { ReactElement } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiJavascriptFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiCplusplus,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiDocker,
  SiSpring,
  SiAxios,
  SiJsonwebtokens,
  SiSwiper,
  SiPostman,
  SiShadcnui,
  SiSupabase,
} from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const socials = [
  {
    icon: React.createElement(BiLogoLinkedin),
    href: "https://www.linkedin.com/in/atarek100/",
  },
  {
    icon: React.createElement(BiLogoGithub),
    href: "https://github.com/Ali-Tarek",
  },

  {
    icon: React.createElement(BiLogoFacebook),
    href: "https://www.facebook.com/ali.tarek.90/",
  },
  {
    icon: React.createElement(BiLogoWhatsapp),
    href: "https://wa.me/+201152526996",
  },
  {
    icon: React.createElement(BiLogoInstagramAlt),
    href: "https://www.instagram.com/ali_tarek10/",
  },
];

export const typingSequence = [
  "Software Engineer",
  2000,
  "Full Stack Web Developer",
  2000,
  "CS Graduate",
  2000,
];

export const experience = [
  {
    years: "2025 - Present",
    role: "Freelance Web Developer",
    institution: "Upwork",
  },
  {
    years: "2024 - 2025",
    role: "LLM Trainer",
    institution: "Scale AI",
  },
  {
    years: "2021 - 2025",
    role: "Computer Science Student",
    institution: "Cairo University, Faculty of Computers and AI",
  },
];

export const skills = [
  {
    icon: React.createElement(RiReactjsFill),
    name: "ReactJS",
  },
  {
    icon: React.createElement(RiNextjsFill),
    name: "NextJS",
  },
  {
    icon: React.createElement(RiTailwindCssFill),
    name: "Tailwind CSS",
  },
  {
    icon: React.createElement(RiNodejsFill),
    name: "NodeJS",
  },
  {
    icon: React.createElement(RiJavascriptFill),
    name: "JavaScript",
  },
  {
    icon: React.createElement(SiTypescript),
    name: "TypeScript",
  },
  {
    icon: React.createElement(SiExpress),
    name: "Express.js",
  },
  {
    icon: React.createElement(SiPostgresql),
    name: "PostgreSQL",
  },
  {
    icon: React.createElement(SiMongodb),
    name: "MongoDB",
  },
  {
    icon: React.createElement(SiGit),
    name: "Git",
  },
  {
    icon: React.createElement(SiGithub),
    name: "GitHub",
  },
  {
    icon: React.createElement(SiDocker),
    name: "Docker",
  },
  {
    icon: React.createElement(SiCplusplus),
    name: "C++",
  },
  {
    icon: React.createElement(RiHtml5Fill),
    name: "HTML5",
  },
  {
    icon: React.createElement(RiCss3Fill),
    name: "CSS3",
  },
  {
    icon: React.createElement(FaJava),
    name: "Java",
  },
];

export const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Custom-built websites tailored to your needs, from sleek landing pages to complex e-commerce platforms.",
  },
  {
    id: "02",
    title: "Figma to React",
    description:
      "Pixel-perfect React websites that bring your Figma designs to life, with smooth animations and responsive layouts.",
  },
  {
    id: "03",
    title: "Backend Development",
    description:
      "Robust APIs, database architectures, and server-side logic using ExpressJs, MongoDB, and MySQL to power your web applications.",
  },
  {
    id: "04",
    title: "SaaS Development",
    description:
      "Full-stack SaaS solutions including user authentication, payment integration, and scalable cloud infrastructure.",
  },
];

export const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, experience, and achievements in software development.",
    image: "/assets/work/thumb1.png",
    link: "https://alitarek.vercel.app/",
    github: "https://github.com/Ali-Tarek/portfolio",
    tech: [
      { icon: React.createElement(RiNextjsFill), name: "NextJS" },
      { icon: React.createElement(RiTailwindCssFill), name: "Tailwind CSS" },
      { icon: React.createElement(TbBrandFramerMotion), name: "FramerMotion" },
      { icon: React.createElement(SiSwiper), name: "Swiper" },
      { icon: React.createElement(SiShadcnui), name: "Shadcn/ui" },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    title: "Airbnb Clone",
    description:
      "A clone of the Airbnb platform, featuring user authentication, property listings, and booking functionalities.",
    image: "/assets/work/thumb2.png",
    link: "https://tinybnb.vercel.app/",
    github: "https://github.com/Ali-Tarek/Airbnb-small-clone",
    tech: [
      { icon: React.createElement(RiReactjsFill), name: "ReactJS" },
      { icon: React.createElement(RiNextjsFill), name: "NextJS" },
      { icon: React.createElement(SiTypescript), name: "TypeScript" },
      { icon: React.createElement(RiTailwindCssFill), name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    category: "Frontend",
    title: "Bakery Website",
    description:
      "A responsive bakery landing page, showcasing products, services, and a contact form for customer inquiries.",
    image: "/assets/work/thumb3.png",
    link: "https://bakery-azure-six.vercel.app/",
    github: "https://github.com/Ali-Tarek/Bakery",
    tech: [
      { icon: React.createElement(RiNextjsFill), name: "NextJS" },
      { icon: React.createElement(RiTailwindCssFill), name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    category: "Full Stack",
    title: "Shopsphere",
    description:
      "A full-stack responsive e-commerce application, featuring user authentication, ordering products, product management, and a shopping cart.",
    image: "/assets/work/thumb5.png",
    link: "https://shopsphere-flax.vercel.app/",
    github: "https://github.com/Ali-Tarek/Shopsphere",
    tech: [
      { icon: React.createElement(RiNextjsFill), name: "NextJS" },
      { icon: React.createElement(SiExpress), name: "ExpressJS" },
      { icon: React.createElement(SiTypescript), name: "TypeScript" },
      { icon: React.createElement(SiMongodb), name: "MongoDB" },
      { icon: React.createElement(SiAxios), name: "Axios" },
      { icon: React.createElement(SiJsonwebtokens), name: "JsonWebToken" },
    ],
  },
  {
    id: 5,
    category: "Full Stack",
    title: "Soundora",
    description:
      "A full-stack music streaming application similar to Spotify, featuring uploading music, and playlist management.",
    image: "/assets/work/thumb8.png",
    link: "https://soundora-snowy.vercel.app/",
    github: "https://github.com/Ali-Tarek/Soundora",
    tech: [
      { icon: React.createElement(RiNextjsFill), name: "NextJS" },
      { icon: React.createElement(SiTypescript), name: "TypeScript" },
      { icon: React.createElement(SiSupabase), name: "Supabase" },
      { icon: React.createElement(SiPostgresql), name: "PostgreSQL" },
      { icon: React.createElement(RiTailwindCssFill), name: "Tailwind CSS" },
    ],
  },
  {
    id: 6,
    category: "Data Structures and Algorithms",
    title: "Student Management System",
    description:
      "A C++ program designed to efficiently store and manage student information using various data structures, including BST, AVL Tree, Min Heap, and Max Heap.",
    image: "/assets/work/thumb6.png",
    link: "",
    github: "https://github.com/Ali-Tarek/Student-Management-System",
    tech: [{ icon: React.createElement(SiCplusplus), name: "C++" }],
  },
  {
    id: 7,
    category: "Backend",
    title: "E-Commerce Orders & Notifications API",
    description:
      "A RESTful API in Java Spring Boot for managing online purchases, accounts, orders, and shipping with balance control and notifications.",
    image: "/assets/work/thumb7.png",
    link: "",
    github: "https://github.com/Ali-Tarek/Orders-and-Notifications-Management",
    tech: [
      { icon: React.createElement(FaJava), name: "Java" },
      { icon: React.createElement(SiSpring), name: "SpringBoot" },
      { icon: React.createElement(SiPostman), name: "Postman" },
    ],
  },
  {
    id: 8,
    category: "Full Stack",
    title: "InstaChat",
    description:
      "A full-stack social media application similar to Messenger, featuring user authentication, and real-time chat functionalities.",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "https://github.com/Ali-Tarek/InstaChat",
    tech: [
      { icon: React.createElement(RiReactjsFill), name: "ReactJS" },
      { icon: React.createElement(RiNodejsFill), name: "NodeJS" },
      { icon: React.createElement(SiExpress), name: "ExpressJS" },
      { icon: React.createElement(SiMongodb), name: "MongoDB" },
      { icon: React.createElement(SiSocketdotio), name: "Socket.io" },
      { icon: React.createElement(RiTailwindCssFill), name: "Tailwind CSS" },
    ],
  },
];

export const categories = [
  "Full Stack",
  "Frontend",
  "Backend",
  "Data Structures and Algorithms",
];

export const firstName = "Ali";
export const lastName = "Tarek";
export const phone = "+20 115 252 6996";
export const email = "alitarek115.at@gmail.com";
export const dateOfBirth = "9 March 2003";
export const location = "Giza, Egypt";

export const briefDescription = `Proficient in ReactJS/NextJS and ExpressJS. I bring creativity and precision to every project. Let's turn your ideas into captivating web realities!`;

export const aboutParagraph =
  "I'm a software engineer who graduated from Cairo University, with strong expertise in software development, web development, and building scalable, user-focused applications using technologies like MERN and advanced data structures. While experienced across the full stack web development, I'm especially passionate about backend engineering, specializing in backend systems and architecture. I have a strong knowledge of core concepts and am dedicated to delivering high-quality solutions through hands-on projects and coding competitions.";
