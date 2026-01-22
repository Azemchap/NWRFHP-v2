import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS } from '@/config/contacts'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

interface NavigationLink {
    name: string;
    href: string;
}

interface SocialLink {
    name: string;
    href: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface Navigation {
    main: NavigationLink[];
    programs: NavigationLink[];
    social: SocialLink[];
}

const navigation: Navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ],
    programs: [
        { name: 'All Programs', href: '/programs' },
        { name: 'Health Coverage', href: '/health' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Information', href: '/infos' },
    ],
    social: [
        {
            name: 'Facebook',
            href: SOCIAL_LINKS.facebook,
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: SOCIAL_LINKS.instagram,
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: SOCIAL_LINKS.twitter,
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        }
    ],
}

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="NWRFHP"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold block">NWRFHP</span>
                                <span className="text-xs text-neutral-400 font-medium tracking-wider uppercase">
                                    Health Promotion
                                </span>
                            </div>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Promoting sustainable quality healthcare for the population of
                            North West Region, Cameroon since 1987.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                            Organization
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {navigation.main.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                            Programs
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {navigation.programs.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+237651421052"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                            >
                                <Phone className="h-4 w-4 text-primary-400 group-hover:scale-110 transition-transform" />
                                +237 651 421 052
                            </a>
                            <a
                                href="mailto:info@nwrfhp.org"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                            >
                                <Mail className="h-4 w-4 text-primary-400 group-hover:scale-110 transition-transform" />
                                info@nwrfhp.org
                            </a>
                            <div className="flex items-start gap-2 text-sm text-neutral-400">
                                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" />
                                <span>Bamenda, North West Region, Cameroon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-neutral-500">
                            &copy; {new Date().getFullYear()} NWRFHP. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
                                    aria-label={item.name}
                                >
                                    <item.icon className="h-4 w-4" aria-hidden="true" />
                                </a>
                            ))}
                        </div>

                        {/* Made with love */}
                        <p className="text-xs text-neutral-600 flex items-center gap-1">
                            <span>Made with</span>
                            <Heart className="h-3 w-3 text-primary-500 fill-primary-500" />
                            <span>for healthcare</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
