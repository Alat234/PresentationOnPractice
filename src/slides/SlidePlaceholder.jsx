import SlideShell from '../components/layout/SlideShell'
import InfoCard from '../components/ui/InfoCard'

function SlidePlaceholder({ number, label, title }) {
  return (
    <SlideShell
      number={number}
      label={label}
      title={title}
      subtitle="Цей слайд буде наповнений на наступному етапі"
    >
      <InfoCard title="Поточний статус">
        <p className="card__text">
          Структура презентації підготовлена. Далі можна послідовно наповнювати
          кожен слайд окремим змістом без редагування всієї сторінки.
        </p>
      </InfoCard>
    </SlideShell>
  )
}

export default SlidePlaceholder
