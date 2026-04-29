import SlideShell from '../components/layout/SlideShell'
import demo from '../data/demo'
import '../styles/slides/slide09-demo.css'

function Slide09Demo() {
  return (
    <SlideShell
      number="09"
      label="Демонстрація"
      title="Інтерфейс і демонстрація"
      subtitle="Інтерфейс проєкту був побудований як dashboard, у якому основні сценарії роботи з маршрутами зібрані в одному вікні."
    >
      <section className="demo-layout">
        <div className="demo-browser">
          <div className="demo-browser__topbar">
            <span className="demo-browser__dot" />
            <span className="demo-browser__dot" />
            <span className="demo-browser__dot" />
          </div>

          <div className="demo-browser__body">
            <aside className="demo-browser__sidebar">
              <div className="demo-browser__panel demo-browser__panel--small">Upload track</div>
              <div className="demo-browser__panel demo-browser__panel--large">
                <span>Track list</span>
                <span>Search & Sort</span>
                <span>Mode / Actions</span>
              </div>
              <div className="demo-browser__panel demo-browser__panel--small">Recent uploads</div>
            </aside>

            <div className="demo-browser__main">
              <div className="demo-browser__status">Comparison result / track statistics</div>
              <div className="demo-browser__map">Interactive map area</div>
            </div>
          </div>
        </div>

        <div className="demo-zones">
          {demo.zones.map((zone) => (
            <article className="demo-zone-card" key={zone.title}>
              <h2 className="demo-zone-card__title">{zone.title}</h2>
              <p className="demo-zone-card__text">{zone.text}</p>
              <div className="demo-zone-card__tags">
                {zone.tags.map((tag) => (
                  <span className="demo-zone-card__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-notes">
        <div className="section-heading">
          <h2 className="section-heading__title">Що важливо в інтерфейсі</h2>
        </div>
        <ul className="demo-notes__list">
          {demo.notes.map((note) => (
            <li className="demo-notes__item" key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </SlideShell>
  )
}

export default Slide09Demo
