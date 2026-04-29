import '../../styles/components/info-card.css'

function InfoCard({ title, value, description, children }) {
    return (
        <div className="info-card">
            <div className="info-card__title">{title}</div>
            {value ? <div className="info-card__value">{value}</div> : null}
            {description ? <p className="info-card__description">{description}</p> : null}
            {children ? <div className="info-card__content">{children}</div> : null}
        </div>
    )
}

export default InfoCard
