import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import bgImg from "public/images/096A0599.jpg";
import logo1 from "public/images/logo1.gif";
import logo2 from "public/images/logo2.png";
import logo3 from "public/images/logo3.png";
import logo4 from "public/images/logo4.png";
import logo5 from "public/images/logo5.png";
import logo6 from "public/images/logo6.png";
import { FaPhone, FaPhoneFlip, FaPhoneSlash, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";


const ContactUs = () => {
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
                                            src={bgImg}
                                            alt="People working on laptops"
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
                                                    href="https://wa.me/+237651421052"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-normal rounded-md shadow-sm text-white bg-blue-600 bg-opacity-90 hover:bg-opacity-80 sm:px-8 gap-1"
                                                >
                                                    <FaWhatsapp />  Chat on Whatsapp
                                                </Link>

                                                <Link
                                                    rel="noopener" target="_blank" href="tel:+237651421052"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-normal rounded-md shadow-sm text-blue-600 bg-white hover:bg-indigo-50 sm:px-8 gap-2"
                                                >
                                                    <FaPhoneVolume /> Make a phone call
                                                </Link>

                                                <Link
                                                    rel="noopener" target="_blank" href="/"
                                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-normal rounded-md shadow-sm text-blue-600 bg-white hover:bg-indigo-50 sm:px-8 gap-2"
                                                >
                                                    Visit our request form
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
                                        <Image className="h-12 grayscale object-contain" src={logo1} alt="Tuple" />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image className="h-12 grayscale object-contain" src={logo2} alt="Mirage" />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src={logo3}
                                            alt="StaticKit"
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src={logo4}
                                            alt="Transistor"
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src={logo5}
                                            alt="Transistor"
                                        />
                                    </div>

                                    <div className="flex justify-center md:col-span-2 lg:col-span-1">
                                        <Image
                                            className="h-12 grayscale object-contain"
                                            src={logo6}
                                            alt="Transistor"
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
