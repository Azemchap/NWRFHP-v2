'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'

export default function SocialPage() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-950 to-primary-800 text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome<br />To Our Social Page
          </h1>
        </div>
      </div>

      {/* About Social Activities */}
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary-100 text-primary-700 uppercase tracking-wide">
                  About Our Social Activities
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-6">
                  We create digital ideas that are bigger, bolder, braver and better.
                </h2>
                <p className="text-body">
                  We work every single day during our working periods to render you with services that will provide you with the satisfaction you deserve. That is why we carry out social activities as one of our strategies to enable us complete our health package provision.
                </p>
              </div>

              {/* Social Mobilizer Image */}
              <Card className="overflow-hidden shadow-xl border-neutral-200">
                <CardContent className="p-0">
                  <div className="relative w-full h-96">
                    <Image
                      src="/images/magg1.jpg"
                      alt="Social Mobilizer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-primary-950">Our Social Mobilizer</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Social Committee Header */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Social Committee Members<br />Of The Fund
          </h2>
        </div>
      </div>

      {/* Committee Head */}
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl border-neutral-200">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full min-h-80">
                  <Image
                    src="/images/ndum.JPG"
                    alt="NDUM SEPHERINE KENG"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-white">
                  <h3 className="text-2xl font-bold text-primary-950 mb-4">NDUM SEPHERINE KENG</h3>
                  <p className="text-body mb-6">
                    She is head of the social committee of the North West Regional Fund For Health Promotion.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/team">Read more</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Committee Members Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { name: 'LUKONG JULIUS', role: 'Works in the Obstetrics Kit Management unit', image: '/images/lukong.JPG' },
                { name: 'FON EVELENE MUNDI', role: 'Works in the computerized stock management unit', image: '/images/fon3.jpg' },
                { name: 'FOPA TEMBONG ALIDA', role: 'Works in the Laboratory unit', image: '/images/alida.jpg' },
                { name: 'ASAFOR ATUNGOMBI ANIMBOM', role: 'Works in the Office of the Administrator as Administrative Assistant', image: '/images/anembum.JPG' },
                { name: 'NGWANA ALPHONSE', role: 'Works as Driver and Janitor', image: '/images/ngwana.JPG' },
                { name: 'TAMANJONG DIVINE AMBE', role: 'Works in the Regional Medical Store Unit as a storekeeper', image: '/images/ambe.JPG' },
              ].map((member, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-neutral-200">
                  <CardContent className="p-0">
                    <div className="relative w-full h-72 overflow-hidden bg-neutral-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-lg font-bold text-primary-950 mb-2">{member.name}</h3>
                      <p className="text-sm text-neutral-600">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600">
                <Link href="/team">Read More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ladies Section Header */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ladies Of The Fund
          </h2>
        </div>
      </div>

      {/* Ladies Content */}
      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* President Card */}
              <Card className="overflow-hidden shadow-xl border-neutral-200">
                <CardContent className="p-0">
                  <div className="relative w-full h-96">
                    <Image
                      src="/images/njamsi.JPG"
                      alt="MADAM NJAMSI MILDRED"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-primary-950 mb-2">MADAM NJAMSI MILDRED</h3>
                    <p className="text-sm text-neutral-600">
                      She is the president for ladies affairs and is technically assisted by our social mobilizer.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Ladies Text */}
              <div>
                <h3 className="text-3xl font-bold text-primary-950 mb-6">Why Ladies?</h3>
                <p className="text-body mb-4">
                  The North West Regional Fund For Health Promotion has eighteen female staff who are:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-xl font-semibold text-primary-700">Energetic</li>
                  <li className="text-xl font-semibold text-primary-700">Intelligent</li>
                  <li className="text-xl font-semibold text-primary-700">Generous</li>
                  <li className="text-xl font-semibold text-primary-700">And Charismatic</li>
                </ul>
                <p className="text-body mb-6">
                  All of these explain why our customer services are unique.
                </p>
                <Button asChild variant="outline">
                  <Link href="/team">Follow us and discover who our ladies are</Link>
                </Button>
              </div>
            </div>

            {/* Medal Celebration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="border-neutral-200 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary-950 mb-4">
                    Female Staff Celebrate The Award Of Medals
                  </h3>
                  <p className="text-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus consectetur blanditiis temporibus accusamus doloremque asperiores, qui eaque fugit atque, possimus adipisci sit magnam accusantium, quas nulla omnis distinctio soluta ea.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl border-neutral-200">
                <CardContent className="p-0">
                  <div className="relative w-full h-96">
                    <Image
                      src="/images/fonmedal1.jpg"
                      alt="Medal ceremony"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-bold text-primary-950 mb-2">Lorem ipsum dolor sit amet.</h4>
                    <p className="text-sm text-neutral-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* More Events Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            More Social Events<br />In Stock
          </h2>
        </div>
      </div>

      {/* Events Carousel */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full h-80 rounded-lg overflow-hidden shadow-xl"
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent>
                {[
                  '/images/social1.jpg', '/images/social2.jpg', '/images/social3.jpg',
                  '/images/social4.jpg', '/images/social5.jpg', '/images/social6.jpg',
                  '/images/social7.jpg', '/images/social8.jpg', '/images/social10.jpg',
                  '/images/social1.jpg', '/images/social12.jpg', '/images/social2.jpg',
                  '/images/social3.jpg'
                ].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-80">
                      <Image
                        src={src}
                        alt={`Social event ${index + 1}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
