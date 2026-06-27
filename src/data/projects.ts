import { Layers, Cable, RefreshCw, Zap } from "lucide-react";
import type { Project } from "./types";

const loremShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

export const projects: Project[] = [
  {
    name: "Migração de Dados entre Plataformas",
    icon: Layers,
    summary: "Substituição do SAP BW + Fabric por Databricks Lakehouse e SAP Datasphere com arquitetura Medallion.",
    problem:
      "A empresa operava com SAP BW + Microsoft Fabric, atualizando os painéis de BI apenas uma ou duas vezes ao dia — longe do tempo real exigido pelas áreas de negócio. Qualquer melhoria dependia de consultorias externas com custo elevado.",
    result:
      "Migração para SAP Datasphere + Databricks (Lakehouse com Delta Lake) e arquitetura Medallion (Bronze, Silver e Gold), centralizando dados brutos e tratados em uma única plataforma. Implementação do Unity Catalog para uma melhor governança de dados. Time interno assumiu a manutenção, eliminando a dependência de consultorias externas e viabilizando atualizações próximas ao tempo real.",
    metric: "+70% eficiência",
    tech: ["SAP Datasphere", "SAP BW", "Databricks", "Delta Lake", "Medallion", "Microsoft Fabric", "Power BI", "Azure"],
  },
  {
    name: "Desenvolvimento Interno no Ecossistema SAP",
    icon: Cable,
    summary: "Eliminação da dependência de consultoria SAP com capacidade técnica interna em ABAP e integrações.",
    problem:
      "A empresa contava com profissionais funcionais no SAP, porém sem nenhum desenvolvedor ABAP interno. Toda demanda de desenvolvimento, integração ou evolução técnica dependia exclusivamente de consultorias externas — sem ninguém internamente para validar as entregas, questionar decisões ou garantir que a solução proposta era de fato a mais adequada.",
    result:
      "Ao consolidar domínio técnico no ecossistema SAP, passei a ser a referência interna para desenvolvimento, integrações e alinhamento com consultorias. Demandas antes terceirizadas passaram a ser resolvidas internamente, com ganho financeiro expressivo e maior controle sobre as decisões técnicas da plataforma.",
    metric: "+60% eficiência",
    tech: ["SAP ABAP", "SAP CPI", "OData", "RAP", "CDS Views", "SAP S/4HANA", "ADT Eclipse"],
  },
  {
    name: "Automação de Processos Operacionais",
    icon: Zap,
    summary: "Automações que substituíram horas de trabalho manual por minutos, impactando toda a empresa.",
    problem:
      "Diversas áreas da empresa dependiam de processos manuais extremamente demorados — navegando entre sistemas, planilhas e copiando dados manualmente, com alto risco de erro humano e horas de trabalho improdutivo no dia a dia. Setores como financeiro, comercial e cadastro eram apenas alguns dos mais impactados.",
    result:
      "Desenvolvi diversas automações cobrindo extração de dados, preenchimento em sistemas e fluxos operacionais completos. Atividades que antes consumiam horas dos colaboradores passaram a ser executadas em minutos, transformando horas improdutivas em horas produtivas e reduzindo significativamente a dependência de trabalho manual em toda a empresa.",
    metric: "+80% eficiência",
    tech: ["Power Automate", "n8n", "Python", "SAP Script"],
  },
  {
    name: "Desenvolvimento em Sistema de Chão de Fábrica",
    icon: RefreshCw,
    summary: "Desenvolvimento interno em Delphi para sistema frigorífico, eliminando consultoria externa recorrente.",
    problem:
      "O sistema de chão de fábrica da indústria frigorífica era desenvolvido em Delphi — linguagem sem nenhum profissional interno capacitado. Qualquer parametrização, melhoria ou ajuste solicitado pela área de negócio ou controle de qualidade dependia de consultoria externa, gerando um custo recorrente superior a R$30 mil mensais.",
    result:
      "Ao assumir o desenvolvimento interno em Delphi, passei a atender todas as demandas de melhorias e parametrizações do sistema diretamente, eliminando a dependência da consultoria. Em alguns meses, o ganho financeiro gerado por uma única entrega chegou a R$60 mil — consolidando a capacidade técnica interna como um ativo estratégico da empresa.",
    metric: "+70% eficiência",
    tech: ["Delphi", "Chão de fábrica", "Controle de qualidade", "Parametrização de sistemas"],
  },
];
