import SlideShell from '../components/layout/SlideShell'
import demo from '../data/demo'
import dashboardMain from '../assets/demo/dashboard-main.png'
import compareResult from '../assets/demo/compare-result.png'
import mapView from '../assets/demo/map-view.png'
import '../styles/slides/slide09-demo.css'

function Slide09Demo() {
    return (
        <SlideShell
            number="09"
            label="Демонстрація"
            title="Інтерфейс і демонстрація"
            subtitle="Інтерфейс проєкту побудований як dashboard, у якому основні сценарії роботи з маршрутами зібрані в одному вікні."
        >
            <section className="demo-gallery">
                <article className="demo-shot demo-shot--primary">
                    <div className="demo-shot__image-wrap">
                        <img
                            src={dashboardMain}
                            alt="Головний екран dashboard"
                            className="demo-shot__image"
                        />
                    </div>
                    <div className="demo-shot__content">
                        <h2 className="demo-shot__title">Головний робочий екран</h2>
                        <p className="demo-shot__text">
                            На головній сторінці поєднано список маршрутів, пошук, сортування,
                            блок нещодавніх завантажень та інтерактивну карту.
                        </p>
                    </div>
                </article>

                <div className="demo-gallery__secondary">
                    <article className="demo-shot">
                        <div className="demo-shot__image-wrap">
                            <img
                                src={compareResult}
                                alt="Екран порівняння маршрутів"
                                className="demo-shot__image"
                            />
                        </div>
                        <div className="demo-shot__content">
                            <h2 className="demo-shot__title">Порівняння маршрутів</h2>
                            <p className="demo-shot__text">
                                Система відображає результат порівняння треків, відсоток схожості
                                та додаткові параметри для аналізу.
                            </p>
                        </div>
                    </article>

                    <article className="demo-shot">
                        <div className="demo-shot__image-wrap">
                            <img
                                src={mapView}
                                alt="Відображення маршрутів на карті"
                                className="demo-shot__image"
                            />
                        </div>
                        <div className="demo-shot__content">
                            <h2 className="demo-shot__title">Візуалізація на карті</h2>
                            <p className="demo-shot__text">
                                Маршрути відображаються на карті з візуальним розділенням треків,
                                маркерами та супровідною інформацією.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="demo-zones">
                {demo.zones.map((zone) => (
                    <article className="demo-zone-card" key={zone.title}>
                        <h2 className="demo-zone-card__title">{zone.title}</h2>
                        <p className="demo-zone-card__text">{zone.text}</p>
                        <div className="demo-zone-card__tags">
                            {zone.tags.map((tag) => (
                                <span className="demo-zone-card__tag" key={tag}>
                  {tag}
                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <section className="demo-notes">
                <div className="section-heading">
                    <h2 className="section-heading__title">Що важливо в інтерфейсі</h2>
                </div>
                <ul className="demo-notes__list">
                    {demo.notes.map((note) => (
                        <li className="demo-notes__item" key={note}>
                            {note}
                        </li>
                    ))}
                </ul>
            </section>
        </SlideShell>
    )
}

export default Slide09Demo