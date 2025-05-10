import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiNodedotjs } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
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
    title: "Subscription Management System",
    description:
      "A subscription management system API built with Node.js and Express. It allows users to manage their subscriptions and payments.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    imageUrl: corpcommentImg,
  },
  {
    title: "real time chat application",
    description:
      "A real-time chat application built with React, TypeScript, Node.js, and Socket.io. It allows users to chat in real-time.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind", "Express", "Vite", "Socket.io"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Express PostgreSQL REST API",
    description:
      "A REST API built with Node.js, Express, and PostgreSQL. It allows users to manage their data and perform CRUD operations.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Git",
  "GitHub",
  "Docker",
  "POSTMAN",
  "Prisma",
  "MongoDB",
  "JAVA",
  "C",
  "PHP",
  "Symfony",
  "SQL",
  "SQLite",
  "PL/SQL",
  "REST API",
  "GraphQL",
  "Oracle",
  "PostgreSQL",
  "MySQL",
  
  
] as const;
