function TwoColumn({ left, right }) {
  return (
    <div className="columns columns--2">
      <div className="column">{left}</div>
      <div className="column">{right}</div>
    </div>
  )
}

export default TwoColumn
