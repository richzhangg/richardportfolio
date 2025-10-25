"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Keep roles OUTSIDE the component to avoid the hooks missing-deps warning
const roles = [
  "Software Engineer.",
  "Full Stack Software Engineer.",
  "ML/AI Researcher.",
  "Frontend Engineer.",
  "Backend Engineer.",
  "Cloud/DevOps Engineer.",
  "Applications Engineer.",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const atEnd = charIndex === current.length;
    const atStart = charIndex === 0;

    const typeSpeed = 70;
    const deleteSpeed = 60;
    const fullPause = 1800;
    const betweenWords = 250;

    // Pause when we finish typing the full word
    if (!deleting && atEnd) {
      const t = setTimeout(() => setDeleting(true), fullPause);
      return () => clearTimeout(t);
    }

    // When we've deleted everything, move to the next word
    if (deleting && atStart) {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, betweenWords);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCharIndex((i) => i + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile_pic.png"
              alt="Richard Portrait"
              width={320}
              height={320}
              quality={95}
              priority
              className="h-56 w-56 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-center text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m{" "}
        <span className="text-indigo-600 dark:text-indigo-400">Richard Zhang</span>.
        <div className="mt-2 w-full">
          {/* Keep the changing line perfectly centered */}
          <div className="mx-auto w-fit whitespace-nowrap">
            I&apos;m a{" "}
            <span className="dark:text-indigo-400">
              {roles[roleIndex].slice(0, charIndex)}
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-px bg-current align-[-0.15em] animate-pulse"
              />
            </span>
          </div>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white hover:text-indigo-400 px-7 py-3 flex items-center gap-2 rounded-full
               outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full
             outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
             cursor-pointer borderBlack dark:bg-white/10 dark:text-white
             hover:bg-indigo-600 hover:text-white hover:border-indigo-600
             dark:hover:bg-indigo-600 dark:hover:text-white"
          href="/RichardZhangResume1.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
             focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition
             cursor-pointer borderBlack
             dark:bg-white/10 dark:text-white
             hover:text-indigo-600 dark:hover:text-indigo-400"
          href="https://www.linkedin.com/in/richard-zhang-6784b0191/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
             focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack
             dark:bg-white/10 dark:text-white
             hover:text-indigo-600 dark:hover:text-indigo-400"
          href="https://github.com/richzhangg"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
