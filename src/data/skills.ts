import { Layout, Server, Database, Boxes } from "lucide-react";
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End",
    tag: "INTERFACES",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Back-End",
    tag: "SERVIÇOS",
    icon: Server,
    items: ["Python", "Node.js", "APIs REST", "Java"],
  },
  {
    title: "Engenharia de Dados",
    tag: "DATA PLATFORM",
    icon: Database,
    items: [
      "SQL",
      "Databricks",
      "Spark",
      "Delta Lake",
      "ETL",
      "Data Warehouse",
      "Data Lake",
      "SAP Datasphere",
    ],
  },
  {
    title: "Ecossistema SAP",
    tag: "SAP STACK",
    icon: Boxes,
    items: [
      "ABAP",
      "CDS Views",
      "RAP",
      "OData",
      "SAP HANA",
      "SAP BW",
      "Integration Suite",
      "PI/PO",
      "Business Data Cloud",
    ],
  },
];
