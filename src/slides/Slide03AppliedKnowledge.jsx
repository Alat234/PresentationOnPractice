import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'
import appliedKnowledge from '../data/appliedKnowledge'
import '../styles/slides/slide03-applied-knowledge.css'

function Slide03AppliedKnowledge() {
  return (
    <SlideShell
      number="03"
      label="Практика → проєкт"
      title="Знання, застосовані у проєкті"
      subtitle="Ключові теми практики не залишилися теорією — вони були використані під час побудови фінального Spring Boot застосунку."
    >
      <section className="knowledge-summary-grid">
        {appliedKnowledge.summary.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            value={item.value}
            description={item.description}
          />
        ))}
      </section>

      <section className="knowledge-mapping">
        <div className="section-heading">
          <h2 className="section-heading__title">Як теми практики відобразилися у фінальному рішенні</h2>
          <p className="section-heading__text">
            Нижче показано, які знання з програми EPAM були безпосередньо використані
            під час розробки GeoTracker і в яких частинах системи це проявилося.
          </p>
        </div>

        <div className="knowledge-mapping__list">
          {appliedKnowledge.mapping.map((item) => (
            <article className="knowledge-item" key={item.topic}>
              <div className="knowledge-item__topic">
                <span className="knowledge-item__label">Тема практики</span>
                <h3 className="knowledge-item__title">{item.topic}</h3>
              </div>

              <div className="knowledge-item__content">
                <span className="knowledge-item__label">Реалізація у проєкті</span>
                <ul className="knowledge-item__list">
                  {item.implementation.map((point) => (
                    <li key={point} className="knowledge-item__list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SlideShell>
  )
}

export default Slide03AppliedKnowledge
