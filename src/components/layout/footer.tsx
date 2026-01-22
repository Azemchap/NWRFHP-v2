import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

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
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="NWRFHP"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold">NWRFHP</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Promoting sustainable quality healthcare for the population of
              North West Region, Cameroon since 1987.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Programs
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.programs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Organization
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
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
            <div className="flex flex-col gap-2">
              <a
                href="tel:+237651421052"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +237 651 421 052
              </a>
              <a
                href="mailto:info@nwrfhp.org"
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@nwrfhp.org
              </a>
              <div className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Bamenda, North West Region, Cameroon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} NWRFHP. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
