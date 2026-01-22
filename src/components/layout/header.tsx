"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="NWRFHP"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
              NWRFHP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="sm" asChild>
              <a href="tel:+237651421052">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <Image
                      src="/images/logo.jpg"
                      alt="NWRFHP"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain rounded"
                    />
                    <span className="font-bold">NWRFHP</span>
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-neutral-800 hover:bg-neutral-100 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t bg-neutral-50">
                  <Button className="w-full" asChild>
                    <a href="tel:+237651421052">
                      <Phone className="h-4 w-4" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
