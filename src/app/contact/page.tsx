import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";


const ContactUs: React.FC = () => {
    return (
        <div
            className="container-fluid container mx-auto pt-16 about-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className=" container mx-auto  about-section" id="about">
                <main>
                    <div>
                        {/* Hero card */}
                        <div className="relative container mx-auto ">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky-300 rounded" />
                            <div className="container mx-auto sm:px-6 lg:px-8">
                                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                    <div className="absolute inset-0">
                                        <Image
                                            className="h-full w-full object-cover"
                                            src="/images/096A0599.jpg"
                                            alt="People working on laptops"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
                                    </div>
                                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block text-white">Take control of your</span>
                                            <span className="block text-green-400">customer support</span>
                                        </h1>
                                        <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-100 sm:max-w-3xl">
                                            For any enquires, supplies, support, bulk purchases orders or any kind of assistance, please do contact us directly via any of the contact means provided
                                        </p>
                                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <Link
                                                   href="https://wa.me/+2376111222333"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-normal rounded-md shadow-sm text-white bg-blue-600 bg-opacity-90 hover:bg-opacity-80 sm:px-8 gap-1"
                                                >
                                                 <FaWhatsapp />  Chat on Whatsapp
                                                </Link>

                                                <Link
                                                   rel="noopener" target="_blank" href="tel:+2376111222333"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-normal rounded-md shadow-sm text-blue-600 bg-white hover:bg-indigo-50 sm:px-8 gap-2"
                                                >
                                                  <FaPhoneVolume /> Make a phone call
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo cloud */}
                        <div className="">
                            <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
                                <p className="text-center text-sm font-semibold uppercase text-blue-700 tracking-wide">
                                    Trusted by over 6 other institutions
                                </p>


                                <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6">


                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image className="h-12 grayscale object-contain" src="/images/logo1.gif" alt="Tuple" width={100} height={48} />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image className="h-12 grayscale object-contain" src="/images/logo2.png" alt="Mirage" width={100} height={48} />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src="/images/logo3.png"
                                            alt="StaticKit"
                                            width={100}
                                            height={48}
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src="/images/logo4.png"
                                            alt="Transistor"
                                            width={100}
                                            height={48}
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src="/images/logo5.png"
                                            alt="Transistor"
                                            width={100}
                                            height={48}
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src="/images/logo6.png"
                                            alt="Transistor"
                                            width={100}
                                            height={48}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More main page content here... */}
                </main>
            </div>
        </div>
    );
};

export default ContactUs;
