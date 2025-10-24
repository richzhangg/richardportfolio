import type React from "react";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceItem = {
  title: string;
  company?: string;
  location: string;
  description: string | string[];
  date: string;
  icon?: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
};
