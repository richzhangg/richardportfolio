import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import opencv from "@/public/opencv.png";
import DigiPrescription from "@/public/DigiPrescription.png";
import ovaauth from "@/public/ovaauth.png";
import type { ExperienceItem } from "./types";

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

// lib/data.ts
export const experiencesData: ExperienceItem[] = [
  {
    title: "Software Development Engineering Intern",
    company: "OinAuto",
    location: "July 2024 - September 2024",
    description:
      ["Partnered with Honda to test and refine driving-scene object detection, delivering accurate real-time demos across vehicles, pedestrians, traffic lights, and signs.",
      "Trained the SSD MobileNet V3 detection model in TensorFlow/Keras and deployed it with OpenCV for live video, auto-drawing bounding boxes and labels for 10+ objects.",
      "Improved detection precision 23% by increasing input resolution and requiring high-confidence detections, evaluated on a driving dataset with a 50% box-overlap rule, while maintaining smooth 30 fps video."],
    iconSrc: "/OinAutoProfile.png",
    iconAlt: "OinAuto",
    date: "",
  },
  {
    title: "Full-Stack Software Development Intern",
    company: "Patriot Conceptions",
    location: "August 2023 - January 2024",
    description:
      ["Developed and launched company’s application site to review candidates used by 100+ users, owning the full stack from data model and APIs to secure access and page performance.",
      "Managed user logins with Firebase Authentication and built validated Next.js API routes, storing application data in Firestore under security rules to keep reads and writes fast and safe.",
      "Standardized Next.js routing with Tailwind/PostCSS pipeline to speed page additions while keeping builds consistent across machines and CI."],
    iconSrc: "/PatriotProfile.png",
    iconAlt: "PatriotConceptions",
    date: "",
  },
  {
    title: "Research Assistant",
    company: "Cal Poly Pomona CS Research",
    location: "December 2021 - February 2022",
    description:
      ["Designed and launched DigiPrescription, a HIPAA-compliant prescription storage application aligned with Pharmacy Laws, and facilitated its introduction to local pharmacies.",
      "Conducted research to improve data analysis efficiency in complex medical databases using Flutter and Dart on Android Studio.",
      "Authored and published a research paper titled \"DigiPrescription: An Intelligent System to Enable Paperless Prescription using Mobile Computing and Natural-language Processing,\" and applied for a U.S. patent."],
    iconSrc: "/ResearchProfile.png",
    iconAlt: "Research",
    date: "",
  },
  {
    title: "Programming Instructor",
    company: "Coding Minds",
    location: "September 2021 - June 2024",
    description:
      ["Delivered personalized instruction in Python, JavaScript, and Java to students across elementary through high school levels.",
      "Created custom learning modules and project-based curriculum, fostering practical problem-solving and programming proficiency.",
      "Taught 25+ students, achieving grade boosts in their programming courses."],
    iconSrc: "/CodingMindsProfile.png",
    iconAlt: "CodingMinds",
    date: "",
  },
] as const;


export const projectsData = [
  {
    title: "Object Detection Pipeline in OpenCV",
    description:
      "Partnered with Honda to build and deploy a real-time road-scene detection system that recognizes cars, pedestrians, etc.",
    tags: ["Python", "Tensorflow", "Keras", "OpenCV", "NumPy"],
    imageUrl: opencv,
    githubUrl: "https://github.com/richzhangg/Open-CV",
  },
  {
    title: "DigiPrescription: Medication Manager",
    description:
      "Cross-platform prescription manager for adding, viewing, and updating medications with reminders",
    tags: ["Flutter", "Dart", "Java", "Swift", "Kotlin", "Objective-C"],
    imageUrl: DigiPrescription,
    githubUrl: "https://github.com/richzhangg/DigiPrescription",
  },
  {
    title: "Ova Application Portal",
    description:
      "A secure, easy sign-in portal with signup, login, password reset, and access to protected pages.",
    tags: ["Next.js", "TypeScript", "Javascript", "Tailwind", "React", "PostCSS"],
    imageUrl: ovaauth,
    githubUrl: "https://github.com/richzhangg/ova",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git/Github",
  "Express.js",
  "REST API",
  "Flutter",
  "Dart",
  "Swift",
  "Kotlin",
  "Tailwind",
  "Material UI",
  "NumPy",
  "TensorFlow",
  "NLP",
  "Docker",
  "CI/CD",
  "Agile",
  "Object-Oriented Programming",
  "OpenCV",
  "HuggingFace",
  "RoBERTa",
  "BART"
] as const;

export const experienceIntro = `
In addition to industry experience, some completed university courses include, but are not limited to: 
Programming with Software Libraries, Boolean Logic and Discrete Structures, Discrete Mathematics for Computer Science, Programming in C/C++, Data Structure Implementation and Analysis, Principles in System Design, 
Computer Organization, Data Management, Information Retrieval, Design and Analysis of Algorithms, Graph Algorithms, Computational Geometry, Artificial Intelligence, Machine Learning/Data Mining, Project in AI, User Interaction Software, 
Project in User Interaction Software, Computer Networks, and Probability & Statistics for Computer Science.
`;