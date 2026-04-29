import { useState } from 'react'
import '../../styles/components/accordion.css'

function Accordion({ eyebrow, title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <section className={`accordion ${isOpen ? 'accordion--open' : ''}`}>
            <button
                type="button"
                className="accordion__trigger"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="accordion__heading">
                    {eyebrow && <span className="accordion__eyebrow">{eyebrow}</span>}
                    <span className="accordion__title">{title}</span>
                </div>

                <span className="accordion__icon">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && <div className="accordion__content">{children}</div>}
        </section>
    )
}

export default Accordion