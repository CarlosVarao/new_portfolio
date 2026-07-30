import { MapPin, Sparkles, Target, TrendingUp } from "lucide-react";
import type { AboutBlock } from "./types";

export const aboutBlocks: AboutBlock[] = [
  {
    icon: MapPin,
    title: "Origem",
    text: "Tenho 27 anos, nasci em Brasília e vivi grande parte da minha infância, adolescência e início da fase adulta no Tocantins, lugar onde construí uma parte importante da minha história pessoal e profissional. Atualmente, moro em Recife, uma nova etapa da minha trajetória, onde venho enfrentando novos desafios, ampliando meus conhecimentos e buscando constante evolução.",
  },
  {
    icon: Sparkles,
    title: "Como comecei na tecnologia",
    text: "O que me impulsiona na tecnologia é justamente essa busca por compreender problemas e transformar ideias em soluções. Ao longo da minha trajetória, desenvolvi a visão de que a tecnologia não é apenas sobre ferramentas, mas sobre criar soluções capazes de otimizar processos, gerar informações relevantes e apoiar melhores decisões.",
  },
  {
    icon: Target,
    title: "Motivação profissional",
    text: "O que me move na tecnologia nasceu da curiosidade que sempre tive em entender como as coisas funcionavam e evoluiu para a vontade de criar soluções capazes de resolver problemas reais. Hoje, busco aprender continuamente, transformar desafios em oportunidades e desenvolver ferramentas que facilitem a vida das pessoas e gerem resultados concretos. Acredito que a tecnologia tem o poder de conectar pessoas, melhorar processos e contribuir para um futuro mais eficiente e inovador.",
  },
  {
    icon: TrendingUp,
    title: "Evolução na área",
    text: "Com essa evolução, direciono minha atuação para a área de dados, trabalhando na construção de soluções envolvendo engenharia de dados, integração, processamento e disponibilização de informações. Tenho experiência com conceitos de ETL/ELT, pipelines de dados, Data Lakes, Data Warehouses e arquiteturas modernas como Lakehouse e Medallion (Bronze, Silver e Gold), buscando estruturar dados de forma escalável, confiável e preparada para consumo analítico. Nesse contexto, utilizo tecnologias como Databricks, AWS, GCP, Airflow e Airbyte para processos de ingestão e transformação de dados. Além disso, no ecossistema SAP, possuo conhecimentos em ABAP, integrações, Data Warehousing e SAP Datasphere, conectando sistemas transacionais às necessidades analíticas do negócio.",
  },
];

export const personalValues: string[] = [
  "Aprendizado contínuo",
  "Visão de negócio",
  "Dados & Arquitetura",
  "SAP & Integrações",
];
