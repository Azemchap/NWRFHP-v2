'use client'

import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import Programs from './Programs'

export default function ProgramSection() {
  return (
    <div className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <Reveal direction="up">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary-100 text-primary-700 uppercase tracking-wide">
                Management
              </Badge>
              <h1 className="heading-hero mb-6">Management of Health Products</h1>
            </div>
          </Reveal>

          {/* Programs Content */}
          <Reveal direction="up" delay={200}>
            <Programs />
          </Reveal>
        </div>
      </div>
    </div>
  )
}
