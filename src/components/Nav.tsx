'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Phone, MessageCircle } from 'lucide-react'
import { CONTACTS } from '@/config/contacts'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface NavigationLink {
    href: string;
    name: string;
}

export default function Nav(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)

    const navigationLinks: NavigationLink[] = [
        { href: '/programs', name: 'Our Programs' },
        { href: '/contact', name: 'Contact Us' },
        { href: '/about', name: 'About Us' },
        { href: '/team', name: 'Our Team' },
        { href: '/socials', name: 'Socials' },
        { href: '/infos', name: 'Infos' },
    ]

    return (
        <div className="bg-white fixed top-0 left-0 right-0 z-40 shadow-sm">
            {/* Top contact bar */}
            <div className="bg-primary-950 border-b border-primary-900">
                <div className="container mx-auto flex gap-6 items-center justify-end h-10 text-xs px-4 sm:px-6 lg:px-8">
                    <Link
                        href={`tel:${CONTACTS.phone}`}
                        className="flex gap-2 items-center text-primary-100 hover:text-white transition-colors font-medium"
                        rel="noopener"
                        target="_blank"
                    >
                        <Phone className="h-3.5 w-3.5" />
                        Call Us Now
                    </Link>
                    <Link
                        href={`https://wa.me/${CONTACTS.whatsapp}`}
                        className="flex gap-2 items-center text-primary-100 hover:text-white transition-colors font-medium"
                        rel="noopener"
                        target="_blank"
                    >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                    </Link>
                </div>
            </div>

            {/* Main navigation */}
            <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.jpg"
                                alt="NWRFHP Logo"
                                width={48}
                                height={48}
                                className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                            />
                            <span className="text-lg lg:text-xl font-bold text-primary-950">NWRFHP</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" aria-label="Open menu">
                                    <Menu className="h-6 w-6 text-primary-950" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] bg-white">
                                <div className="flex flex-col gap-6 mt-8">
                                    {/* Mobile Logo */}
                                    <Link
                                        href="/"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 mb-4"
                                    >
                                        <Image
                                            src="/images/logo.jpg"
                                            alt="NWRFHP Logo"
                                            width={32}
                                            height={32}
                                            className="w-8 h-8 object-contain"
                                        />
                                        <span className="text-lg font-bold text-primary-950">NWRFHP</span>
                                    </Link>

                                    <Separator />

                                    {/* Mobile Navigation Links */}
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="text-primary-900 font-medium text-lg hover:text-primary-500 transition-colors uppercase tracking-wide"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </div>
    )
}
