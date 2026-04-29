import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'
import testing from '../data/testing'
import '../styles/slides/slide08-testing.css'

function Slide08Testing() {
  return (
    <SlideShell
      number="08"
      label="Якість"
      title="Тестування"
      subtitle="Під час розробки проєкту важливо було не лише реалізувати функціонал, але й підтвердити його коректність та передбачувану поведінку."
    >
      <section className="testing-summary-grid">
        {testing.summary.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            value={item.value}
            description={item.description}
          />
        ))}
      </section>

      <section className="testing-areas-grid">
        {testing.areas.map((area) => (
          <article className="testing-area-card" key={area.title}>
            <h2 className="testing-area-card__title">{area.title}</h2>
            <ul className="testing-area-card__list">
              {area.points.map((point) => (
                <li className="testing-area-card__list-item" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </SlideShell>
  )
}

export default Slide08Testing
