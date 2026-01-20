/* This example requires Tailwind CSS v2.0+ */
import React from "react";


export default function OurMission(): JSX.Element {
    return (
        <div
            className=" flex flex-col md:flex-row container mx-auto gap-4 p-4 my-12"
            id="mission-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="bg-blue-950 flex-1 " data-aos="fade-up"
                data-aos-duration="1000 " >
                <div className=" mx-auto py-16 px-4 sm:py-24 sm:px-6 ">
                    <div className="text-center">
                        <h2 className="leading-6 text-gray-300 font-semibold tracking-wide uppercase">	Our Vision</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                            What we want?
                        </h3>
                        <p className="max-w-xl mt-4 mx-auto text-xl text-gray-300">
                            To assist the Ministry of Public Health in provide sustainable quality health care for the population
                        </p>
                    </div>
                </div>
            </div >
            <div className="bg-blue-950  flex-1" data-aos="fade-up"
                data-aos-duration="1000 " >
                <div className=" mx-auto py-16 px-4 sm:py-24 sm:px-6 ">
                    <div className="text-center">
                        <h2 className="leading-6 text-gray-300 font-semibold tracking-wide uppercase">Our mission</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                            Why we exist?
                        </h3>
                        <p className="max-w-xl mt-4 mx-auto text-xl text-gray-300">
                            Promoting access to quality health care for the population by improving the performance of the health system
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}
