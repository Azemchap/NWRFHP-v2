'use client'

import { Reveal } from '@/components/ui/reveal'

export default function OurMission() {
  return (
    <div className="flex flex-col md:flex-row container mx-auto gap-4 p-4 my-12">
      <Reveal direction="up" delay={0} className="flex-1">
        <div className="bg-blue-950 h-full">
          <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6">
            <div className="text-center">
              <h2 className="leading-6 text-gray-300 font-semibold tracking-wide uppercase">
                Our Vision
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                What we want?
              </h3>
              <p className="max-w-xl mt-4 mx-auto text-xl text-gray-300">
                To assist the Ministry of Public Health in provide sustainable quality health care for the population
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal direction="up" delay={200} className="flex-1">
        <div className="bg-blue-950 h-full">
          <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6">
            <div className="text-center">
              <h2 className="leading-6 text-gray-300 font-semibold tracking-wide uppercase">
                Our mission
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                Why we exist?
              </h3>
              <p className="max-w-xl mt-4 mx-auto text-xl text-gray-300">
                Promoting access to quality health care for the population by improving the performance of the health system
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
