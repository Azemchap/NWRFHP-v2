
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import OurMission from '../components/OurMission'
import OurObjectives from '../components/OurObjectives'
import OurValues from '../components/OurValues'
import ProgramSection from '../components/ProgramSection'

export default function Home(): JSX.Element {

  return (
    <main>
      <Hero />
      <LogoCloud />
      <OurMission />
      <OurValues />
      <OurObjectives />
      <ProgramSection />
    </main>
  )
}
