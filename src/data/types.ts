import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface AboutBlock {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface TimelineEntry {
  year: string;
  company: string;
  role: string;
  icon: LucideIcon;
  logo?: string;
  description: string;
  tech: string[];
}

export interface SkillGroup {
  title: string;
  tag: string;
  icon: LucideIcon;
  items: string[];
}

export interface Project {
  name: string;
  icon: LucideIcon;
  summary: string;
  problem: string;
  result: string;
  metric: string;
  tech: string[];
}

export interface Differential {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface EducationCourse {
  title: string;
  link?: string;
}

export interface Education {
  icon: LucideIcon;
  logo?: string;
  title: string;
  institution: string;
  type: string;
  courses: EducationCourse[];
}

export interface SocialLink {
  label: string;
  href: string;
}
