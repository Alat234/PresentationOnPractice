function SlideShell({ number, label, title, subtitle, children }) {
  return (
    <div className="slide">
      <div className="slide__inner">
        <div className="slide__number">{number}</div>

        <header className="slide__header">
          {label ? <div className="slide__label">{label}</div> : null}
          <h1 className="slide__title">{title}</h1>
          {subtitle ? <p className="slide__subtitle">{subtitle}</p> : null}
        </header>

        <div className="slide__content">{children}</div>
      </div>
    </div>
  )
}

export default SlideShell
