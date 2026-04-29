import SlideShell from '../components/layout/SlideShell'
import conclusion from '../data/conclusion'
import '../styles/slides/slide10-conclusion.css'

function Slide10Conclusion() {
  return (
    <SlideShell
      number="10"
      label="Підсумок"
      title="Висновки"
      subtitle="Фінальний проєкт став підсумком практики та показав, як окремі теми навчальної програми можуть бути об’єднані в один завершений web-застосунок."
    >
      <section className="conclusion-layout">
        <article className="conclusion-panel">
          <div className="section-heading">
            <h2 className="section-heading__title">Основні результати</h2>
          </div>
          <ul className="conclusion-list">
            {conclusion.highlights.map((item) => (
              <li className="conclusion-list__item" key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="conclusion-panel conclusion-panel--accent">
          <div className="section-heading">
            <h2 className="section-heading__title">Подальший розвиток</h2>
          </div>
          <ul className="conclusion-list">
            {conclusion.nextSteps.map((item) => (
              <li className="conclusion-list__item" key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="conclusion-final-note">
        <div className="conclusion-final-note__text">
          Практика в EPAM дала не лише набір тем, а й основу для побудови повноцінного проєкту,
          у якому були поєднані backend, database, security, UI та testing.
        </div>
      </section>
    </SlideShell>
  )
}

export default Slide10Conclusion
