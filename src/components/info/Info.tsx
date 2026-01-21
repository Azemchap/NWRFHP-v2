'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'

const infoSlides = [
  { image: '/images/coach.jpg', title: 'LUKONG JULIUS', alt: 'Coaching event' },
  { image: '/images/puncture.jpg', title: 'KUH JOSEPH', alt: 'Van puncture' },
  { image: '/images/offload.jpg', title: 'KUH JOSEPH', alt: 'Medicine offloading' },
]

export default function DefaultInfo() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="bg-neutral-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 sm:py-20 rounded-lg mb-12 shadow-xl">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Daily Events<br />That Make News<br />In The Fund
              </h1>
            </div>
          </div>

          {/* Info Carousel */}
          <Card className="overflow-hidden shadow-xl border-neutral-200">
            <CardContent className="p-0">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{ align: 'start', loop: true }}
              >
                <CarouselContent>
                  {infoSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-96 sm:h-[500px]">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                          <div className="p-8 sm:p-12">
                            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
                              {slide.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
