function SideNavigation({ slides, currentSlide, onNavigate }) {
  return (
    <nav className="side-nav" aria-label="Навігація по слайдах">
      <div className="side-nav__title">Slides</div>
      <ul className="side-nav__list">
        {slides.map((slide, index) => (
          <li key={slide.anchor} className="side-nav__item">
            <button
              type="button"
              className={`side-nav__button ${index === currentSlide ? 'side-nav__button--active' : ''}`}
              onClick={() => onNavigate(index)}
              title={slide.title}
            >
              <span className="side-nav__number">{slide.number}</span>
              <span className="side-nav__label">{slide.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavigation
