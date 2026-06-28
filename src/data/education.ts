import { GraduationCap, Award, Bug, Database } from "lucide-react";
import type { Education } from "./types";

export const education: Education[] = [
  {
    icon: GraduationCap,
    logo: "/anhanguera.jpg",
    title: "Bacharelado em Eng. de Software",
    institution: "Faculdade Anhanguera",
    type: "CURSANDO",
    courses: [{ title: "Bacharelado em Engenharia de Software", link: "" }],
  },
  {
    icon: Award,
    logo: "/moovi.jpg",
    title: "Academia ABAP / Integrações PI / PO / CPI",
    institution: "Moovi",
    type: "SAP",
    courses: [
      {
        title: "ABAP do Zero",
        link: "https://moovi.curseduca.pro/verify/974237744b66a3af204b9c10bd7e49e50ab7f130",
      },
      {
        title: "ABAP S/4HANA",
        link: "https://moovi.curseduca.pro/verify/d9268e34e929babab2edf51e5263822f810e479e",
      },
      {
        title: "CDS Views",
        link: "https://moovi.curseduca.pro/verify/1ec6ac9e66cb856ac858507b6ea4f4760b7f7215",
      },
    ],
  },
  {
    icon: Bug,
    logo: "/descomplicando.jpg",
    title: "DL Academy",
    institution: "Descomplicando Linguagens",
    type: "SAP",
    courses: [
      {
        title: "Debug para Consultores SAP",
        link: "https://www.descomplicandolinguagens.com.br/certificate/bcd015ad-9df5-11ee-9a3c-5254006119a7/user_2y5obQTiMUCGXN7vPgfVnO6qhWD",
      },
    ],
  },
  {
    icon: Database,
    logo: "/alura.jpg",
    title: "Engenharia de Dados com Python",
    institution: "Alura",
    type: "DADOS",
    courses: [
      {
        title: "Python para Dados: primeiros passos",
        link: "https://cursos.alura.com.br/certificate/4dddfe12-5ad7-4145-b15a-2a0a6089c274?lang",
      },
    ],
  },
];
