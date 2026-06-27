import { MapPin, Sparkles, Target, TrendingUp } from "lucide-react";
import type { AboutBlock } from "./types";

export const aboutBlocks: AboutBlock[] = [
  {
    icon: MapPin,
    title: "Origem",
    text: "Sou Carlos Varão, tenho 26 anos, nasci em Brasília, cresci no Tocantins e atualmente moro em Recife. Venho de uma família humilde, que sempre me ensinou valores fundamentais como honestidade, humildade, responsabilidade, perseverança e empatia. Esses princípios moldaram minha forma de enxergar a vida e influenciam diretamente minha postura pessoal e profissional até hoje.",
  },
  {
    icon: Sparkles,
    title: "Como comecei na tecnologia",
    text: "Minha conexão com a tecnologia começou ainda na infância, impulsionada pela curiosidade em entender como computadores, sistemas e equipamentos funcionavam. Desde cedo, explorava hardware, softwares e dava os primeiros passos na programação. Essa paixão se fortaleceu ao longo dos anos e me motivou a ingressar no curso de Engenharia de Software, transformando um interesse pessoal em um projeto de carreira.",
  },
  {
    icon: Target,
    title: "Motivação profissional",
    text: "O que me move na tecnologia é a vontade de resolver problemas reais, aprender continuamente e criar soluções que facilitem a vida das pessoas e tragam resultados concretos. Vejo a tecnologia como uma forma de transformar desafios em oportunidades de melhoria, gerar impacto positivo e contribuir para um futuro melhor, tanto para as empresas e equipes quanto para a sociedade como um todo.",
  },
  {
    icon: TrendingUp,
    title: "Evolução na área",
    text: "Na área de dados, atuo com conceitos de ETL/ELT, pipelines, Data Lakes, Data Warehouses, arquiteturas Lakehouse e outras abordagens modernas de dados, incluindo modelos como a arquitetura Medallion (Bronze, Silver e Gold), voltados para o processamento, refinamento e disponibilização de dados de forma escalável e confiável. Além disso, utilizo ferramentas como Databricks, que ampliam a capacidade de processamento, transformação e análise em ambientes distribuídos e de alta performance. No ecossistema SAP, tenho conhecimento em ABAP, integrações, BW e Datasphere, o que me permite transitar entre a camada transacional e a analítica, conectando sistemas, dados e necessidades de negócio.",
  },
];

export const personalValues: string[] = [
  "Aprendizado contínuo",
  "Visão de negócio",
  "Dados & Arquitetura",
  "SAP & Integrações",
];
