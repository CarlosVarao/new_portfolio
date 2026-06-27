import { GraduationCap, Award, Bug, Database } from "lucide-react";
import type { Education } from "./types";

export const education: Education[] = [
  {
    icon: GraduationCap,
    title: "Bacharelado em Engenharia de Software",
    org: "Faculdade Anhanguera",
    year: "",
    type: "CURSANDO",
    link: "",
  },
  {
    icon: Award,
    title: "ABAP do Zero",
    org: "Moovi",
    year: "",
    type: "SAP",
    link: "https://moovi.curseduca.pro/verify/974237744b66a3af204b9c10bd7e49e50ab7f130",
  },
  {
    icon: Award,
    title: "ABAP S/4HANA",
    org: "Moovi",
    year: "",
    type: "SAP",
    link: "https://moovi.curseduca.pro/verify/d9268e34e929babab2edf51e5263822f810e479e",
  },
  {
    icon: Award,
    title: "CDS Views",
    org: "Moovi",
    year: "",
    type: "SAP",
    link: "https://moovi.curseduca.pro/verify/1ec6ac9e66cb856ac858507b6ea4f4760b7f7215",
  },
  {
    icon: Bug,
    title: "Debug para Consultores SAP",
    org: "Descomplicando Linguagens",
    year: "",
    type: "SAP",
    link: "https://www.descomplicandolinguagens.com.br/certificate/bcd015ad-9df5-11ee-9a3c-5254006119a7/user_2y5obQTiMUCGXN7vPgfVnO6qhWD",
  },
  {
    icon: Database,
    title: "Engenharia de Dados com Python",
    org: "Alura",
    year: "",
    type: "DADOS",
    link: "https://cursos.alura.com.br/certificate/4dddfe12-5ad7-4145-b15a-2a0a6089c274?lang",
  },
];
