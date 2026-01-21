import TeamMemberCard from '@/components/TeamMemberCard'
import teamData from '@/data/team.json'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  date: string
  slug: string
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-hero mb-4">Staff Of The Fund</h1>
          <p className="text-body max-w-2xl mx-auto">
            Meet our dedicated team of professionals committed to promoting health and wellness in the North West Region.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member: TeamMember) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
