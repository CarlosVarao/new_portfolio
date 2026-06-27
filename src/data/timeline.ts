import { Database, Code2, GitMerge, Terminal } from "lucide-react";
import type { TimelineEntry } from "./types";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    company: "Empresa A",
    role: "Engenheiro de Dados Sênior",
    icon: Database,
    description: lorem,
    tech: ["Databricks", "Spark", "SAP Datasphere"],
  },
  {
    year: "2022",
    company: "Empresa B",
    role: "Desenvolvedor SAP ABAP",
    icon: Code2,
    description: lorem,
    tech: ["ABAP", "CDS Views", "OData"],
  },
  {
    year: "2020",
    company: "Empresa C",
    role: "Analista de Integração",
    icon: GitMerge,
    description: loremShort,
    tech: ["PI/PO", "REST", "SAP HANA"],
  },
  {
    year: "2018",
    company: "Empresa D",
    role: "Desenvolvedor Júnior",
    icon: Terminal,
    description: loremShort,
    tech: ["SQL", "Java", "ETL"],
  },
];
