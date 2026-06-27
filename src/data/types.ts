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

export interface Education {
  icon: LucideIcon;
  title: string;
  org: string;
  year: string;
  type: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
