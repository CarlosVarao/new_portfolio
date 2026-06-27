import { Layers, Cable, RefreshCw } from "lucide-react";
import type { Project } from "./types";

const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

export const projects: Project[] = [
  {
    name: "Plataforma de Dados Corporativa",
    icon: Layers,
    problem: loremShort,
    result: loremShort,
    metric: "+40% eficiência",
    tech: ["Databricks", "Delta Lake", "Spark"],
  },
  {
    name: "Integração SAP ↔ Cloud",
    icon: Cable,
    problem: loremShort,
    result: loremShort,
    metric: "12 sistemas",
    tech: ["Integration Suite", "OData", "REST"],
  },
  {
    name: "Modernização ABAP",
    icon: RefreshCw,
    problem: loremShort,
    result: loremShort,
    metric: "-60% latência",
    tech: ["ABAP", "RAP", "CDS Views"],
  },
];
