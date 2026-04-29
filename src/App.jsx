import PresentationLayout from './components/layout/PresentationLayout'
import Slide01Title from './slides/Slide01Title'
import Slide02PracticeOverview from './slides/Slide02PracticeOverview'
import Slide03AppliedKnowledge from './slides/Slide03AppliedKnowledge'
import Slide04ProjectGoal from './slides/Slide04ProjectGoal'
import Slide05Functionality from './slides/Slide05Functionality'
import Slide06Architecture from './slides/Slide06Architecture'
import Slide07Modules from './slides/Slide07Modules'
import Slide08Testing from './slides/Slide08Testing'
import Slide09Demo from './slides/Slide09Demo'
import Slide10Conclusion from './slides/Slide10Conclusion'
import { slidesMeta } from './data/slides'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/slides.css'

const slideComponents = [
    Slide01Title,
    Slide02PracticeOverview,
    Slide03AppliedKnowledge,
    Slide04ProjectGoal,
    Slide05Functionality,
    Slide06Architecture,
    Slide07Modules,
    Slide08Testing,
    Slide09Demo,
    Slide10Conclusion,
]

function App() {
    return <PresentationLayout slidesMeta={slidesMeta} slideComponents={slideComponents} />
}

export default App