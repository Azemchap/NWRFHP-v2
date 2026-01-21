import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  date: string
  slug: string
}

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-neutral-200">
      <CardHeader className="p-0">
        <div className="relative w-full h-72 overflow-hidden bg-neutral-100">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-primary-950 leading-tight">{member.name}</h3>
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            <Calendar className="h-3 w-3" />
            <span>{member.date}</span>
          </div>
        </div>
        <Badge variant="secondary" className="mb-3 bg-primary-100 text-primary-700 hover:bg-primary-200">
          {member.role}
        </Badge>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-colors">
          <Link href={`/team/${member.slug}`}>
            View Profile
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
