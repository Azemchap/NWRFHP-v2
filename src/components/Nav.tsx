'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { FaPhone, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6"
import { CONTACTS } from '@/config/contacts'

interface NavigationLink {
    href: string;
    name: string;
}

interface Navigation {
    links: NavigationLink[];
}

export default function Nav(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)

    const navigation: Navigation = {
        links: [
            {
                href: '/programs',
                name: 'Our Programs'
            },
            {
                href: '/contact',
                name: 'Contact Us'
            },
            {
                href: '/about',
                name: 'About Us'
            },
            {
                href: '/team',
                name: 'Our Team'
            },
            {
                href: '/socials',
                name: 'Socials'
            },
            {
                href: '/infos',
                name: 'Infos'
            },
            {
                href: '/animation',
                name: 'Animation'
            },
        ]
    }

    return (
        <div className="bg-white fixed top-0 left-0 right-0 z-40">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-primary bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative container w-full text-primary  uppercase font-bold bg-slate-50 shadow-xl py-6 px-4 flex flex-col overflow-y-auto z-50">
                            <div className="px-4 pt-5 pb-2 flex">
                                <div className=" flex ">
                                    <Link onClick={() => setOpen(false)} href="/" className='flex items-center gap-2'>
                                        <Image className='w-6 h-8 object-contain ' src="/images/logo.jpg" alt='logo' width={80} height={80} />
                                        <h2 className='text-lg text-primary font-bold'>NWRFHP</h2>
                                    </Link>
                                </div>
                                <button
                                    type="button"
                                    className="-m-2 ml-auto p-2 rounded-md inline-flex items-end justify-end text-primary"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                </button>
                            </div>


                            {/* Mobile menu  */}
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6 ">
                                {navigation.links.map((link) => (
                                    <div className='flow-root' key={link.href}>
                                        <Link onClick={() => setOpen(false)} className='-m-2 p-2 block text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white font-medium ' href={link.href}>{link.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">

                {/* Top navigation  */}
                <div className="bg-white border-b ">
                    <div className="container mx-auto flex gap-8 items-center justify-end text-xs font-medium text-primary px-4 sm:px-6 lg:px-8 h-10">
                        <Link rel="noopener" target="_blank" href={`tel:${CONTACTS.phone}`}> <span className='flex gap-2 font-semibold text-xs items-center'> <FaPhoneVolume /> Call Us Now!</span>
                        </Link>
                        <Link rel="noopener" target="_blank" href={`https://wa.me/${CONTACTS.whatsapp}`}> <span className=' flex gap-1 font-semibold text-xs items-center '><FaWhatsapp />  Whatsapp </span>
                        </Link>
                    </div>
                </div>

                {/* Desktop nav list  */}
                <nav aria-label="Top" className="shadow-lg px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto text-primary">
                        <div className="h-16 flex items-center">


                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/" className='flex items-center gap-2'>
                                    <Image className='w-6 h-8 lg:w-12 lg:h-12 object-contain ' src="/images/logo.jpg" alt='logo' width={80} height={80} />
                                    <h2 className='text-lg text-primary font-bold'>NWRFHP</h2>
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center leading-loose">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center text-center lg:justify-end lg:space-x-8 ">
                                    {navigation.links.map((link) => (
                                        <div className='flow-root' key={link.href}>
                                            <Link onClick={() => setOpen(false)} className='-m-2 p-2 block text-primary font-medium text-sm uppercase transition-all duration-200 ease-in-out hover:text-primary tracking-wide underline-offset-8 hover:underline ' href={link.href}>{link.name}</Link>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="bg-white p-2 rounded-md text-primary lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
