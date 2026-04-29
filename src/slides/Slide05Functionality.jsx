import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'
import functionality from '../data/functionality'
import '../styles/slides/slide05-functionality.css'

function Slide05Functionality() {
  return (
    <SlideShell
      number="05"
      label="Фінальний проєкт"
      title="Основний функціонал"
      subtitle="GeoTracker об’єднує кілька практичних сценаріїв роботи з маршрутами: від завантаження файлу до аналізу, візуалізації та керування даними користувача."
    >
      <section className="functionality-summary-grid">
        {functionality.summary.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            value={item.value}
            description={item.description}
          />
        ))}
      </section>

      <section className="functionality-groups">
        {functionality.groups.map((group) => (
          <article className="feature-group-card" key={group.title}>
            <h2 className="feature-group-card__title">{group.title}</h2>
            <ul className="feature-group-card__list">
              {group.items.map((item) => (
                <li className="feature-group-card__list-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </SlideShell>
  )
}

export default Slide05Functionality
