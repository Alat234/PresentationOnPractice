import SlideShell from '../components/layout/SlideShell'
import modules from '../data/modules'
import '../styles/slides/slide07-modules.css'

function Slide07Modules() {
  return (
    <SlideShell
      number="07"
      label="Модулі"
      title="Ключові модулі системи"
      subtitle="Фінальний проєкт складався з кількох логічних модулів, кожен з яких відповідав за окрему частину функціональності застосунку."
    >
      <section className="modules-grid">
        {modules.map((module, index) => (
          <article className="module-card" key={module.title}>
            <div className="module-card__index">0{index + 1}</div>
            <h2 className="module-card__title">{module.title}</h2>
            <p className="module-card__text">{module.text}</p>
          </article>
        ))}
      </section>
    </SlideShell>
  )
}

export default Slide07Modules
