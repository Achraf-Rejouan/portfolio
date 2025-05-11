"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
  contentStyle={{
    background:
      theme === "light"
        ? "#f9fafb"
        : "rgba(30, 41, 59, 0.85)", 
    boxShadow:
      theme === "light"
        ? "0 4px 24px 0 rgba(0,0,0,0.06)"
        : "0 4px 24px 0 rgba(0,0,0,0.25)",
    border: theme === "light"
      ? "1px solid #e5e7eb" 
      : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "1rem",
    textAlign: "left",
    padding: "1.7rem 2.2rem",
  }}
  contentArrowStyle={{
    borderRight:
      theme === "light"
        ? "0.4rem solid #d1d5db"
        : "0.4rem solid #334155", 
  }}
  date={item.date}
  icon={item.icon}
  iconStyle={{
    background:
      theme === "light"
        ? "#fff"
        : "#334155",
    color: theme === "light" ? "#334155" : "#fff",
    fontSize: "1.5rem",
    boxShadow:
      theme === "light"
        ? "0 2px 8px 0 rgba(0,0,0,0.08)"
        : "0 2px 8px 0 rgba(0,0,0,0.25)",
  }}
>
  <h3 className="font-semibold capitalize">{item.title}</h3>
  <p className="font-normal !mt-0">{item.location}</p>
  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
    {item.description}
  </p>
</VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
