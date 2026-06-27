import { GraduationCap, Award, Cloud, Database, BookOpen } from "lucide-react";
import type { Education } from "./types";

export const education: Education[] = [
  {
    icon: GraduationCap,
    title: "Bacharelado em Tecnologia",
    org: "Instituição de Ensino",
    year: "20XX",
    type: "GRADUAÇÃO",
  },
  {
    icon: Award,
    title: "SAP Certified — ABAP Development",
    org: "SAP",
    year: "20XX",
    type: "SAP",
  },
  {
    icon: Award,
    title: "SAP Datasphere Associate",
    org: "SAP",
    year: "20XX",
    type: "SAP",
  },
  {
    icon: Cloud,
    title: "Cloud Data Engineering",
    org: "Cloud Provider",
    year: "20XX",
    type: "CLOUD",
  },
  {
    icon: Database,
    title: "Databricks Lakehouse",
    org: "Databricks",
    year: "20XX",
    type: "DADOS",
  },
  {
    icon: BookOpen,
    title: "Especialização em Dados",
    org: "Instituição de Ensino",
    year: "20XX",
    type: "CURSO",
  },
];
