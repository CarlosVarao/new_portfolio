import { MapPin, Sparkles, Target, TrendingUp } from "lucide-react";
import type { AboutBlock } from "./types";

export const aboutBlocks: AboutBlock[] = [
  {
    icon: MapPin,
    title: "Origem",
    text: "Tenho 27 anos, nasci em Brasília e vivi grande parte da minha infância, adolescência e início da fase adulta no Tocantins, lugar onde construí uma parte importante da minha história e das minhas experiências pessoais e profissionais. Atualmente, moro em Recife, uma nova etapa da minha vida, onde venho me desenvolvendo tanto profissionalmente quanto pessoalmente, enfrentando novos desafios e adquirindo novos aprendizados.",
  },
  {
    icon: Sparkles,
    title: "Como comecei na tecnologia",
    text: "Minha conexão com a tecnologia começou ainda na infância, despertada pela curiosidade em entender como computadores, sistemas e equipamentos funcionavam. Desde cedo, buscava explorar esse universo, tentando compreender o que existia por trás das telas e dos processos. Essa curiosidade cresceu ao longo dos anos e me motivou a ingressar no curso de Engenharia de Software, transformando um interesse de infância em uma trajetória profissional.",
  },
  {
    icon: Target,
    title: "Motivação profissional",
    text: "O que me move na tecnologia nasceu da curiosidade que sempre tive em entender como as coisas funcionavam e evoluiu para a vontade de criar soluções capazes de resolver problemas reais. Hoje, busco aprender continuamente, transformar desafios em oportunidades e desenvolver ferramentas que facilitem a vida das pessoas e gerem resultados concretos. Acredito que a tecnologia tem o poder de conectar pessoas, melhorar processos e contribuir para um futuro mais eficiente e inovador.",
  },
  {
    icon: TrendingUp,
    title: "Evolução na área",
    text: "Na área de dados, venho desenvolvendo minha atuação em engenharia de dados, trabalhando com conceitos de ETL/ELT, pipelines, Data Lakes, Data Warehouses, arquiteturas Lakehouse e outras abordagens modernas de dados, incluindo modelos como a arquitetura Medallion (Bronze, Silver e Gold), voltados para o processamento, refinamento e disponibilização de dados de forma escalável e confiável. Além disso, utilizo ferramentas como Databricks, AWS, GCP, Airflow e Airbyte, ampliando minha capacidade de ingestão, transformação e análise em ambientes distribuídos e de alta performance. No ecossistema SAP, possuo conhecimentos em ABAP, integrações, DW e Datasphere, permitindo conectar sistemas, dado e necessidades de negócio entre as camadas transacional e analítica.",
  },
];

export const personalValues: string[] = [
  "Aprendizado contínuo",
  "Visão de negócio",
  "Dados & Arquitetura",
  "SAP & Integrações",
];
