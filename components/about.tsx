"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently pursuing a degree in{" "}
        <span className="font-medium">Information Systems Development</span>, with graduation expected next year.
        <br></br>My primary focus is {" "}
        <span className="font-semibold">backend Engineering</span>,{" "}
        where I enjoy building robust systems and solving complex problems.
        I'm experienced with Node.js and Express, and I've worked with databases like
        <span className="font-medium"> MySQL, MongoDB, PostgreSQL, and OracleDB</span>.
        While backend is my main area of interest,{" "}I'm also learning frontend frameworks such as React and Next.js
        <span className="font-medium">
          to become a more well-rounded developer
        </span>
        . I'm always curious and motivated to learn new technologies and improve my skills.{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring new subjects and expanding my knowledge beyond tech.{" "}
        <span className="font-medium">I'm passionate about continuous learning and always looking for</span> opportunities to grow.{" "}
      </p>
    </motion.section>
  );
}
