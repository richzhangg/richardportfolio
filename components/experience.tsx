"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, experienceIntro } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

// Normalize description to bullets (supports string or string[])
function toLines(desc: string | readonly string[]): string[] {
  if (Array.isArray(desc)) return [...desc];
  return String(desc)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

// ==== Tweak these two to your taste ====
const ICON_SIZE = 64; // px (try 56, 64, 72…)
const ICON_RADIUS = 0; // px; 0 = perfect square, 8 = rounded square
// =======================================

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-20 sm:mb-28">
      <SectionHeading>My experience</SectionHeading>

      <p className="mt-2 mb-6 max-w-3xl mx-auto text-center text-[0.95rem] leading-7 text-gray-300 tracking-tight">
        {experienceIntro}
      </p>

      <VerticalTimeline lineColor="" className="!pt-0 !pb-0">
        {experiencesData.map((item) => {
          const lines = toLines(item.description);

          // If you provided iconSrc in your data, use that PNG; otherwise fall back to any React icon
          const iconNode = item.iconSrc ? (
            <img
              src={item.iconSrc}
              alt={item.iconAlt ?? ""}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            item.icon ?? null
          );

          return (
            <VerticalTimelineElement
              key={`${item.title}-${item.date}`}
              className="!mb-3"
              date={item.date}
              icon={iconNode}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "left",
                padding: "0.65rem 0.9rem",
              }}
              contentArrowStyle={{
                borderRight: "0.3rem solid rgba(255, 255, 255, 0.30)",
              }}
              iconStyle={{
                // This styles the OUTER wrapper that is round by default
                background: "rgba(255, 255, 255, 0.08)",
                boxShadow: "none",
                width: ICON_SIZE,
                height: ICON_SIZE,
                borderRadius: ICON_RADIUS, // ← square (0) or rounded square (e.g., 8)
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 6, // inner padding so your PNG isn't flush to edges
              }}
            >
              <div className="leading-snug space-y-1">
                {/* Role */}
                <h3 className="m-0 text-[1.05rem] md:text-[1.1rem] font-semibold tracking-[-0.02em] text-gray-100">
                  {item.title}
                </h3>

                {/* Company (optional) */}
                {"company" in item && item.company ? (
                  <p className="m-0 font-medium tracking-tight text-indigo-400">
                    {item.company}
                  </p>
                ) : null}

                {/* Location */}
                <p className="m-0 text-[0.9rem] tracking-tight text-gray-400">
                  {item.location}
                </p>

                {/* Bulleted description */}
                {lines.length > 0 && (
                  <ul className="m-0 mt-1 list-disc pl-5 space-y-1 text-[0.95rem] tracking-tight leading-relaxed text-gray-300">
                    {lines.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
