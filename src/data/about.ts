import { MapPin, Sparkles, Target, TrendingUp } from "lucide-react";
import type { AboutBlock } from "./types";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

export const aboutBlocks: AboutBlock[] = [
  { icon: MapPin, title: "Origem", text: lorem },
  { icon: Sparkles, title: "Como comecei na tecnologia", text: lorem },
  { icon: Target, title: "Motivação profissional", text: loremShort },
  { icon: TrendingUp, title: "Evolução na área", text: loremShort },
];

export const personalValues: string[] = [
  "Aprendizado contínuo",
  "Visão de negócio",
  "Excelência técnica",
  "Colaboração",
];
