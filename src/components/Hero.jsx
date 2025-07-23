/* This example requires Tailwind CSS v2.0+ */

import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Carousel from './Carousel'



export default function Hero() {
    return (

        <div className="bg-hero px-4 py-16 sm:py-32 sm:px-6 xl:py-60">
            <div className="container mx-auto lg:flex">
                <div className=" pb-8 lg:w-2/3">
                    <main className=" mx-auto container lg:mr-20 sm:px-6 md:mt-0 ">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-left lg:text-4xl xl:text-6xl">
                                <span className="xl:block"> Welcome to</span>{' '}
                                <span className=" text-white">North West Regional  Fund For Health Promotion
                                    (NWRFHP)</span>
                            </h1>
                            <p className="mt-3 max-w-lg mx-auto font-medium text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-2xl md:mx-0">
                                The North West Regional Fund for Health Promotion PIG is a public corporate dialogue structure set up by a constituent agreement of the state, the technical/financial partners, and the North West community on June 11, 2012 in line with law no. 2010/023 of December 2010 to define the status of Public Interest Groups in Cameroon.
                            </p>
                            <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/about"
                                        className="group w-full flex gap-2 items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 md:px-10"
                                    >
                                       Learn more.. <ArrowRightIcon className='w-4 transition-all group-hover:translate-x-1 mt-1 opacity-75' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className='flex items-center lg:w-3/5'>
                    <Carousel />
                </div>
            </div>
        </div>
    )



    
}
