import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div>
            <Image
              src="/images/logo.png"
              alt="NWRFHP"
              width={150}
              height={50}
              className="mb-4 h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Promoting sustainable quality healthcare for the population of the
              North West Region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/programs"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Our Programs
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Staff Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/health"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Universal Health Coverage
              </Link>
              <Link
                href="/infos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Health Information
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="tel:+237651421052"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +237 651 421 052
              </a>
              <a
                href="mailto:info@nwrfhp.org"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@nwrfhp.org
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Bamenda, North West Region, Cameroon</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NWRFHP. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
