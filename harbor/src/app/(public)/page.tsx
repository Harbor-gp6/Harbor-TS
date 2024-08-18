import AdvantagesSection from './components/AdvantagesSection'
import { CommentSection } from './components/CommentSection'
import { FaqSection } from './components/FaqSection'
import FirstSection from './components/FirstSection'
import { OrbitalSection } from './components/OrbitalSection'

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <FirstSection />
            <OrbitalSection />
            <AdvantagesSection />
            <CommentSection />
            <FaqSection />
        </div>
    )
}
