import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  programs: [
    { label: "Essential Medicines", href: "/programs/essential-medicines" },
    { label: "Community Health", href: "/programs/community-health" },
    { label: "Health Coverage", href: "/programs/universal-health-coverage" },
    { label: "All Programs", href: "/programs" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Health Information", href: "/infos" },
    { label: "Universal Health Coverage", href: "/health" },
    { label: "News & Updates", href: "/socials" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
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
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Promoting sustainable quality healthcare for the population of
              North West Region, Cameroon since 1987. Together, we're building
              a healthier future.
            </p>

            {/* Newsletter CTA */}
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <p className="text-sm font-medium text-white mb-2">
                Stay Updated
              </p>
              <p className="text-xs text-neutral-400 mb-4">
                Get health tips and program updates
              </p>
              <Button size="sm" className="w-full" asChild>
                <Link href="/contact">
                  Subscribe to Updates
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Programs */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                  Programs
                </h3>
                <nav className="flex flex-col gap-3">
                  {footerLinks.programs.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                  Organization
                </h3>
                <nav className="flex flex-col gap-3">
                  {footerLinks.company.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
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
                    <span>
                      Bamenda,
                      <br />
                      North West Region,
                      <br />
                      Cameroon
                    </span>
                  </div>
                </div>
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
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              <span>&copy; {new Date().getFullYear()} NWRFHP.</span>
              <span>All rights reserved.</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
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
  );
}
