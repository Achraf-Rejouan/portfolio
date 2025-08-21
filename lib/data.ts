import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiNodedotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import fadhakkerImg from "@/public/fadhakker.png";
import chattyImg from "@/public/chatty.png";
import symfonyImg from "@/public/symfonyImg.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student, Computer Science at ISET Djerba/Zaghouan",
    location: "Tunisia",
    description:
      "I started my studies in computer science. I learned the foundations of programming and algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
  },
  {
    title: "Tunisie Telecom Intern",
    location: "Zaghouan, Tunisia",
    description:
      "I worked as a web developer intern at Tunisie Telecom. I learned the basics of web development and networking.",
    icon: React.createElement(CgWorkAlt),
    date: "JAN 2022 - FEB 2022",
  },
  {
    title: "Software Developer Intern",
    location: "Zaghouan, Tunisia",
    description:
      " I worked as a software developer intern at a startup. I learned about web development and software engineering.",
    icon: React.createElement(SiNodedotjs),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "fa-dhakker - prayer learning platform",
    description:
      "fa-dhakker/فَذَكِّر is a comprehensive Islamic prayer learning platform that teaches users how to perform the five daily prayers (Salah) step-by-step.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    imageUrl: fadhakkerImg,
    url: "https://fa-dhakker.vercel.app/",
  },
  {
    title: "chatty - real time chat application",
    description:
      "A real-time chat application built with React, TypeScript, Node.js, and Socket.io. It allows users to chat in real-time.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind", "Express", "Vite", "Socket.io"],
    imageUrl: chattyImg,
    url: "https://real-time-chat-app-cpsx.onrender.com/",
  },
  {
    title: "CRUD-Symfony7-web-app",
    description:
      "A simple CRUD web application built with Symfony 7. It allows users to create, read, update, and delete data.",
    tags: ["PHP", "Symfony 7", "Twig", "Bootstrap"],
    imageUrl: symfonyImg,
    url: "https://github.com/Achraf-Rejouan/CRUD-Symfony7-web-app?tab=readme-ov-file",
  },
] as const;

export const skillsData = [
  "JAVA",
  "Spring Boot",
  "Spring Data JPA",
  "Spring Security",
  "Hibernate",
  "Maven",
  "Gradle",
  "JUnit",
  "Mockito",
  "SQL",
  "PL/SQL",
  "RESTful API",
  "WebSockets",
  "OracleDB",
  "PostgreSQL",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Docker",
  "POSTMAN",
  "Prisma",
  "MongoDB",
  "C",
  "PHP",
  "Symfony",
  
] as const;
