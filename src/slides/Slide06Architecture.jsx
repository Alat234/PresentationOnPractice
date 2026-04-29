import SlideShell from '../components/layout/SlideShell'
import architecture from '../data/architecture'
import '../styles/slides/slide06-architecture.css'

function Slide06Architecture() {
  return (
    <SlideShell
      number="06"
      label="Архітектура"
      title="Архітектура рішення"
      subtitle="Під час роботи над проєктом структура була організована як layered Spring Boot application, що покращило читабельність, підтримуваність і подальший розвиток системи."
    >
      <section className="architecture-diagram">
        {architecture.layers.map((layer, index) => (
          <article className="architecture-layer" key={layer.title}>
            <div className="architecture-layer__index">0{index + 1}</div>
            <div className="architecture-layer__body">
              <h2 className="architecture-layer__title">{layer.title}</h2>
              <ul className="architecture-layer__list">
                {layer.points.map((point) => (
                  <li className="architecture-layer__list-item" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="architecture-highlights">
        <div className="section-heading">
          <h2 className="section-heading__title">Що дало таке розбиття</h2>
          <p className="section-heading__text">
            Архітектура не лише зробила код чистішим, але й дозволила краще розділити
            відповідальності між частинами застосунку.
          </p>
        </div>

        <div className="architecture-highlight-grid">
          {architecture.highlights.map((item) => (
            <div className="architecture-highlight-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </SlideShell>
  )
}

export default Slide06Architecture
