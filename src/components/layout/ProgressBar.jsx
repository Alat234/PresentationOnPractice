function ProgressBar({ current, total }) {
  const progress = `${(current / total) * 100}%`

  return (
    <div className="progress-bar" aria-hidden="true">
      <div className="progress-bar__fill" style={{ width: progress }} />
    </div>
  )
}

export default ProgressBar
