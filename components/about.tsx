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
      I'm a recent <span className="font-bold text-indigo-600 dark:text-indigo-400">B.S. Computer Science</span> graduate with a
      specialization in Intelligent Systems from the 
      <span className="font-bold text-indigo-600 dark:text-indigo-400"> University of California, Irvine</span>. I'm a developer who enjoys turning
      complex problems into dependable software. I value clarity and testability, with a
      consistent focus on performance and usability, making products feel effortless.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you’ll probably find me exploring coffee shops, going to the beach, or playing with my dog, Sky. 
        <span className="font-bold text-indigo-600 dark:text-indigo-400"> Shoot me a message!</span> I am always happy to chat about roles, projects, and ideas.
      </p>
    </motion.section>
  );
}