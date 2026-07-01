import { GraduationCap, Award, Database } from "lucide-react";
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
    icon: Database,
    logo: "/alura.jpg",
    title: "Engenharia de Dados",
    institution: "Alura",
    type: "DADOS",
    courses: [
      {
        title: "Python para Dados: primeiros passos",
        link: "https://cursos.alura.com.br/certificate/4dddfe12-5ad7-4145-b15a-2a0a6089c274",
      },
      {
        title:
          "Python para Dados: trabalhando com funções, estruturas de dados e exceções",
        link: "https://cursos.alura.com.br/certificate/e6416c42-129c-40b1-99cf-6bf444487713",
      },
      {
        title: "Governança de dados: usando metadados para compreender dados",
        link: "https://cursos.alura.com.br/certificate/2874a70c-179d-4cde-ac44-c0f6abea802e",
      },
    ],
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
      {
        title: "Gateway e OData",
        link: "https://moovi.curseduca.pro/verify/9b88b03e52cd18902d27e072c98820fe86467a64",
      },
      {
        title: "Debug para Consultores SAP",
        link: "https://moovi.curseduca.pro/verify/da474645cf7e1d21e03c9642b2c24baeb680b29b",
      },
    ],
  },
];
