import SlideShell from '../components/layout/SlideShell'
import SectionLabel from '../components/ui/SectionLabel'

function Slide01Title() {
    return (
        <SlideShell
            number="01"
            label="EPAM Practice"
            title="Java Fundamentals Program"
            subtitle="Фінальний проєкт: GeoTracker"
        >
            <section className="hero hero--title">
                <div className="hero__main hero__main--wide">
                    <SectionLabel>Presentation Overview</SectionLabel>

                    <p className="hero__description hero__description--large">
                        Вебзастосунок для завантаження, візуалізації та порівняння маршрутів,
                        створений як підсумковий результат проходження практики.
                    </p>

                    <div className="hero__meta-list hero__meta-list--inline">
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
            </section>
        </SlideShell>
    )
}

export default Slide01Title