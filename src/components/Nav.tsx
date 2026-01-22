'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, Phone, MessageCircle, X, ChevronRight } from 'lucide-react'
import { CONTACTS } from '@/config/contacts'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationLink {
    href: string;
    name: string;
}

export default function Nav(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigationLinks: NavigationLink[] = [
        { href: '/programs', name: 'Programs' },
        { href: '/about', name: 'About' },
        { href: '/team', name: 'Team' },
        { href: '/contact', name: 'Contact' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-md'
                    : 'bg-white shadow-sm'
            }`}
        >
            {/* Top contact bar - Compact and professional */}
            <div className="bg-neutral-900">
                <div className="container mx-auto flex gap-6 items-center justify-end h-9 text-xs px-4 sm:px-6 lg:px-8">
                    <Link
                        href={`tel:${CONTACTS.phone}`}
                        className="flex gap-2 items-center text-neutral-300 hover:text-white transition-colors duration-200 font-medium group"
                    >
                        <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">Call Us</span>
                    </Link>
                    <Link
                        href={`https://wa.me/${CONTACTS.whatsapp}`}
                        className="flex gap-2 items-center text-neutral-300 hover:text-accent-400 transition-colors duration-200 font-medium group"
                        rel="noopener"
                        target="_blank"
                    >
                        <MessageCircle className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </Link>
                </div>
            </div>

            {/* Main navigation */}
            <nav aria-label="Main navigation" className="px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="h-16 lg:h-18 flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="NWRFHP Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg lg:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-primary-600 transition-colors">
                                    NWRFHP
                                </span>
                                <span className="text-[10px] text-neutral-500 font-medium tracking-wider uppercase hidden sm:block">
                                    Health Promotion
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-neutral-50 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/contact">
                                    Get in Touch
                                </Link>
                            </Button>
                            <Button size="sm" asChild>
                                <a href={`tel:${CONTACTS.phone}`}>
                                    <Phone className="h-4 w-4" />
                                    Call Now
                                </a>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Open menu"
                                    className="hover:bg-neutral-100"
                                >
                                    <Menu className="h-6 w-6 text-neutral-800" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full sm:w-[360px] bg-white border-l border-neutral-200 p-0"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Mobile Header */}
                                    <div className="flex items-center justify-between p-5 border-b border-neutral-100">
                                        <Link
                                            href="/"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-3"
                                        >
                                            <Image
                                                src="/images/logo.jpg"
                                                alt="NWRFHP Logo"
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 object-contain rounded-lg"
                                            />
                                            <span className="text-lg font-bold text-neutral-900">NWRFHP</span>
                                        </Link>
                                    </div>

                                    {/* Mobile Navigation Links */}
                                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                                        <div className="space-y-1">
                                            {navigationLinks.map((link, index) => (
                                                <motion.div
                                                    key={link.href}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center justify-between px-4 py-3.5 text-neutral-800 font-medium text-base hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-all duration-200 group"
                                                    >
                                                        {link.name}
                                                        <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <Separator className="my-6" />

                                        {/* Quick Links */}
                                        <div className="space-y-1">
                                            <p className="px-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                                                Quick Links
                                            </p>
                                            <Link
                                                href="/infos"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-neutral-600 text-sm hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-all duration-200"
                                            >
                                                Health Information
                                                <ChevronRight className="h-4 w-4 text-neutral-400" />
                                            </Link>
                                            <Link
                                                href="/socials"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-neutral-600 text-sm hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-all duration-200"
                                            >
                                                Social Media
                                                <ChevronRight className="h-4 w-4 text-neutral-400" />
                                            </Link>
                                        </div>
                                    </nav>

                                    {/* Mobile Footer Actions */}
                                    <div className="p-5 border-t border-neutral-100 bg-neutral-50 space-y-3">
                                        <Button className="w-full" size="lg" asChild>
                                            <a href={`tel:${CONTACTS.phone}`}>
                                                <Phone className="h-4 w-4" />
                                                Call Us Now
                                            </a>
                                        </Button>
                                        <Button variant="outline" className="w-full" size="lg" asChild>
                                            <a
                                                href={`https://wa.me/${CONTACTS.whatsapp}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                WhatsApp Us
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}
