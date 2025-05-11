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
      <p className="mb-3 text-lg text-neutral-800 dark:text-neutral-200">
        I'm currently pursuing a degree in{" "}
        <span className="font-bold text-neutral-900 dark:text-white">Information Systems Development</span>, with graduation expected next year.
        <br />
        My primary focus is{" "}
        <span className="font-bold text-neutral-900 dark:text-white">Backend Engineering</span>, where I enjoy building robust systems and solving complex problems.
        I'm experienced with <span className="font-semibold text-neutral-900 dark:text-white">Node.js</span> and <span className="font-semibold text-neutral-900 dark:text-white">Express</span>, and I've worked with databases like
        <span className="font-bold text-neutral-900 dark:text-white"> MySQL, MongoDB, PostgreSQL, and OracleDB</span>.
        <br />
        While backend is my main area of interest, I'm also learning frontend frameworks such as <span className="font-semibold text-neutral-900 dark:text-white">React</span> and <span className="font-semibold text-neutral-900 dark:text-white">Next.js</span>
        <span className="font-bold text-neutral-900 dark:text-white"> to become a more well-rounded developer</span>.
        <br />
        I'm always curious and motivated to learn new technologies and improve my skills. Currently, I'm seeking a <span className="font-bold text-neutral-900 dark:text-white">full-time position</span> as a software developer.
      </p>

      <p className="text-lg text-neutral-800 dark:text-neutral-200">
        <span className="italic text-neutral-900 dark:text-white">When I'm not coding</span>, I enjoy exploring new subjects and expanding my knowledge beyond tech.
        <span className="font-bold text-neutral-900 dark:text-white"> I'm passionate about continuous learning and always looking for opportunities to grow.</span>
      </p>
    </motion.section>
  );
}
