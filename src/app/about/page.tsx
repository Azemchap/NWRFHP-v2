import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutUs() {
  return (
    <div className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-full min-h-100 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/096A0583.jpg"
                alt="North West Regional Fund for Health Promotion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4 bg-primary-100 text-primary-700 uppercase tracking-wide">
                About Us
              </Badge>

              <h1 className="heading-hero mb-6">Who Are We?</h1>

              <p className="text-body">
                The North West Regional Fund for Health Promotion - PIG is a public corporate dialogue structure set up by a constituent agreement of the state, the technical/financial partners, and the North West community on June 11, 2012 in line with law no. 2010/023 of December 2010 to define the status of Public Interest Groups in Cameroon.
              </p>
            </div>
          </div>

          {/* History Section */}
          <Card className="mb-8 shadow-lg border-neutral-200">
            <CardContent className="p-8 sm:p-10">
              <h2 className="heading-section mb-6">Brief History</h2>
              <p className="text-body">
                The North West Regional Fund for Health Promotion - PIG was set up in 1987 as North West Pro Pharmacy to ensure a constant supply of quality essential medicines to the population of the North West region in line with the 5th principal concerns of the Bamako Initiative. In 1991 it was transformed into North West Provincial Special Fund for Health in line with Law No.90/62 of 19th December 1990 relating to Freedom of associations. To improve its services to the population, it was transformed into a Public Interest Group on June 11, 2012 in line with Law No.2010/023 of December 2010 on Public Interest Groups in Cameroon. In compliance with its constituent agreement approved by Prime Ministerial order no. 005/CAB/PM of January 21, 2013 a Constitutive General Assembly was held in December 2013 to put in place the Management Committee and adopt the internal regulations and organizational chart.
              </p>
            </CardContent>
          </Card>

          {/* Difference Section */}
          <Card className="shadow-lg border-neutral-200">
            <CardContent className="p-8 sm:p-10">
              <h2 className="heading-section mb-6">How We&apos;re Different</h2>
              <p className="text-body">
                As PIG, it is a public corporate dialogue structure of the state, the technical/financial partners and the North West Community. As an essential health care program based on practical, scientifically sound, and socially acceptable methods, its services are made accessible to the population through their full participation and at a cost they can afford. Starting with 59 Community Pharmacies, about 100 Village Health Posts (now Integrated Health Centres) and a geographical coverage of 90%, it supplies medicines to 217 community pharmacies in public health facilities covering a population of 2.2 million inhabitants.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
