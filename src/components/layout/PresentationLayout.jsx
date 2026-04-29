import { useEffect, useMemo, useState } from 'react'
import ProgressBar from './ProgressBar'
import SideNavigation from './SideNavigation'

function PresentationLayout({ slidesMeta, slideComponents }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = useMemo(
    () => slideComponents.map((SlideComponent, index) => ({
      ...slidesMeta[index],
      element: <SlideComponent key={slidesMeta[index].anchor} />,
    })),
    [slideComponents, slidesMeta],
  )

  const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return
    setCurrentSlide(index)
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        goToSlide(currentSlide + 1)
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [currentSlide, slides.length])

  return (
    <div className="presentation-shell">
      <ProgressBar current={currentSlide + 1} total={slides.length} />
      <SideNavigation slides={slides} currentSlide={currentSlide} onNavigate={goToSlide} />

      <main className="presentation-stage">
        {slides.map((slide, index) => (
          <section
            key={slide.anchor}
            id={slide.anchor}
            className={`presentation-slide ${index === currentSlide ? 'presentation-slide--active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            {slide.element}
          </section>
        ))}
      </main>

      <div className="presentation-controls">
        <button
          type="button"
          className="control-button"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
        >
          Назад
        </button>

        <div className="control-counter">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        <button
          type="button"
          className="control-button control-button--primary"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
        >
          Далі
        </button>
      </div>
    </div>
  )
}

export default PresentationLayout
