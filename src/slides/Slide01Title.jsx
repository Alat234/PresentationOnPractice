import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'
import SectionLabel from '../components/ui/SectionLabel'
import TwoColumn from '../components/ui/TwoColumn'

function Slide01Title() {
  return (
    <SlideShell
      number="01"
      label="EPAM Practice"
      title="Java Fundamentals Program"
      subtitle="Фінальний проєкт: GeoTracker"
    >
      <div className="hero">
        <TwoColumn
          left={(
            <div className="hero__main">
              <SectionLabel>Presentation Overview</SectionLabel>
              <p className="hero__description">
                Вебзастосунок для завантаження, візуалізації та порівняння маршрутів,
                створений як підсумковий результат проходження практики.
              </p>

              <div className="hero__meta-list">
                <div className="meta-item">
                  <span className="meta-item__label">Виконав</span>
                  <span className="meta-item__value">Владислав Атаманюк Тарасович</span>
                </div>
                <div className="meta-item">
                  <span className="meta-item__label">Група</span>
                  <span className="meta-item__value">КН-41</span>
                </div>
              </div>
            </div>
          )}
          right={(
            <div className="hero__cards">
              <InfoCard title="Фокус презентації" accent>
                <ul className="list">
                  <li className="list__item">короткий огляд практики в EPAM</li>
                  <li className="list__item">застосування вивчених тем у проєкті</li>
                  <li className="list__item">архітектура, функціонал і тестування</li>
                </ul>
              </InfoCard>

              <InfoCard title="Формат" >
                <p className="card__text">
                  Презентація побудована як окремий React-додаток зі слайдами-компонентами
                  та єдиною системою навігації.
                </p>
              </InfoCard>
            </div>
          )}
        />
      </div>
    </SlideShell>
  )
}

export default Slide01Title
