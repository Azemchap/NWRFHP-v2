import {
  HeroSection,
  StatsSection,
  MissionSection,
  ProgramsSection,
  CTASection
} from '@/components/sections'

export default function Home(): JSX.Element {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ProgramsSection />
      <CTASection />
    </main>
  )
}
