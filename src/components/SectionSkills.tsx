export default function SectionSkills() {
  return (
    <section className="section-glass">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
        <span className="text-xl text-accent-cyan">03.</span> Habilidades
        <span className="grow h-px bg-white/10 ml-4"></span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div className="glass-effect p-4 rounded-lg text-center glow-effect">
          <h3 className="font-display text-lg font-bold text-white mb-2">
            Linguagens
          </h3>
          <ul className="text-sm text-text-dark space-y-1">
            <li>Python</li>
            <li>SQL</li>
            <li>Scala</li>
          </ul>
        </div>
        <div className="glass-effect p-4 rounded-lg text-center glow-effect">
          <h3 className="font-display text-lg font-bold text-white mb-2">
            Big Data
          </h3>
          <ul className="text-sm text-text-dark space-y-1">
            <li>Apache Spark</li>
            <li>Hadoop</li>
            <li>Kafka</li>
          </ul>
        </div>
        <div className="glass-effect p-4 rounded-lg text-center glow-effect">
          <h3 className="font-display text-lg font-bold text-white mb-2">
            Cloud
          </h3>
          <ul className="text-sm text-text-dark space-y-1">
            <li>AWS (S3, EMR, Redshift)</li>
            <li>GCP (BigQuery, Dataproc)</li>
            <li>Azure (Data Factory)</li>
          </ul>
        </div>
        <div className="glass-effect p-4 rounded-lg text-center glow-effect">
          <h3 className="font-display text-lg font-bold text-white mb-2">
            Visualização
          </h3>
          <ul className="text-sm text-text-dark space-y-1">
            <li>Tableau</li>
            <li>Power BI</li>
            <li>Looker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
