export default function SectionProject() {
  return (
    <section className="section-glass" id="projetos">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
        <span className="text-xl text-accent-cyan">02.</span> Projetos
        <span className="flex-grow h-px bg-white/10 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col rounded-lg p-6 transition-all duration-300 ease-in-out glow-effect glass-effect">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-4xl text-accent-cyan">
              folder
            </span>
            <div className="flex gap-3">
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Plataforma de Análise de Streaming
          </h3>
          <p className="text-text-dark text-sm leading-relaxed mb-4 flex-grow">
            Desenvolvimento de um pipeline de dados em tempo real para processar
            e analisar terabytes de dados de eventos de usuários, fornecendo
            insights para personalização de conteúdo.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-display text-text-dark">
            <span>Spark</span>
            <span>Kafka</span>
            <span>AWS S3</span>
            <span>Tableau</span>
          </div>
        </div>
        <div className="flex flex-col rounded-lg p-6 transition-all duration-300 ease-in-out glow-effect glass-effect">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-4xl text-accent-cyan">
              folder
            </span>
            <div className="flex gap-3">
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Data Lakehouse para E-commerce
          </h3>
          <p className="text-text-dark text-sm leading-relaxed mb-4 flex-grow">
            Arquitetura e implementação de um Data Lakehouse na GCP para
            unificar dados de vendas, marketing e logística, otimizando a gestão
            de estoque e campanhas.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-display text-text-dark">
            <span>BigQuery</span>
            <span>Dataproc</span>
            <span>Airflow</span>
            <span>Python</span>
          </div>
        </div>
        <div className="flex flex-col rounded-lg p-6 transition-all duration-300 ease-in-out glow-effect glass-effect">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-4xl text-accent-cyan">
              folder
            </span>
            <div className="flex gap-3">
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                className="text-text-dark hover:text-accent-cyan transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Modelo de Predição de Churn
          </h3>
          <p className="text-text-dark text-sm leading-relaxed mb-4 flex-grow">
            Criação de pipelines de ETL para alimentar um modelo de Machine
            Learning, resultando em uma redução de 15% na taxa de churn de
            clientes em 6 meses.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-display text-text-dark">
            <span>SQL</span>
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>Power BI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
