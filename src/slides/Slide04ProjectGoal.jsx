import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'
import projectGoal from '../data/projectGoal'
import '../styles/slides/slide04-project-goal.css'

function Slide04ProjectGoal() {
  return (
    <SlideShell
      number="04"
      label="Фінальний проєкт"
      title="Мета фінального проєкту"
      subtitle="GeoTracker створювався як підсумкова робота, у якій знання з практики були застосовані в одному завершеному web-застосунку."
    >
      <section className="goal-summary-grid">
        {projectGoal.summary.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            value={item.value}
            description={item.description}
          />
        ))}
      </section>

      <section className="goal-layout">
        <article className="goal-panel">
          <div className="section-heading">
            <h2 className="section-heading__title">Що мав вирішувати проєкт</h2>
            <p className="section-heading__text">
              Основна ідея полягала в тому, щоб обʼєднати ключові сценарії роботи з маршрутами
              в одному інтерфейсі й показати практичне застосування Spring-based підходу.
            </p>
          </div>

          <ul className="goal-objectives">
            {projectGoal.objectives.map((item) => (
              <li key={item} className="goal-objectives__item">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="goal-panel goal-panel--focus">
          <div className="section-heading">
            <h2 className="section-heading__title">На чому був зосереджений розвиток</h2>
            <p className="section-heading__text">
              Проєкт розвивався як повноцінна система: від backend-логіки і бази даних
              до dashboard-інтерфейсу та візуалізації маршрутів.
            </p>
          </div>

          <div className="goal-focus-list">
            {projectGoal.implementationFocus.map((item) => (
              <div key={item.title} className="goal-focus-card">
                <h3 className="goal-focus-card__title">{item.title}</h3>
                <p className="goal-focus-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </SlideShell>
  )
}

export default Slide04ProjectGoal
