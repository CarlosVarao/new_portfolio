import {
  Layers3,
  Puzzle,
  Handshake,
  LineChart,
  GraduationCap,
  Workflow,
} from "lucide-react";
import type { Differential } from "./types";

const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

export const differentials: Differential[] = [
  { icon: Layers3, title: "Visão multidisciplinar", text: loremShort },
  { icon: Puzzle, title: "Conhecimento funcional e técnico", text: loremShort },
  { icon: Handshake, title: "Entre negócio e tecnologia", text: loremShort },
  { icon: LineChart, title: "Capacidade analítica", text: loremShort },
  { icon: GraduationCap, title: "Aprendizado contínuo", text: loremShort },
  { icon: Workflow, title: "Integração de sistemas", text: loremShort },
];
