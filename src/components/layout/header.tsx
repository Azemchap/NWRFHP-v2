"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Phone, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CONTACTS } from "@/config/contacts";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const quickLinks = [
  { href: "/gallery", label: "Staff Gallery" },
  { href: "/health", label: "Health Coverage" },
  { href: "/infos", label: "Information" },
  { href: "/socials", label: "Socials" },
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
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-100"
          : "bg-white shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-16 lg:h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
            <Image
              src="/images/logo.jpg"
              alt="NWRFHP"
              width={48}
              height={48}
              priority
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
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-neutral-50 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button size="sm" asChild>
            <a href={`tel:${CONTACTS?.phone || '+237651421052'}`}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
              <Menu className="h-6 w-6 text-neutral-800" />
              <span className="sr-only">Open menu</span>
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
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/images/logo.jpg"
                    alt="NWRFHP Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain rounded-lg"
                  />
                  <span className="text-lg font-bold text-neutral-900">
                    NWRFHP
                  </span>
                </Link>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 text-neutral-800 font-medium text-base hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-all duration-200 group"
                      >
                        {item.label}
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
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-neutral-600 text-sm hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-neutral-400" />
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile Footer Actions */}
              <div className="p-5 border-t border-neutral-100 bg-neutral-50 space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <a href={`tel:${CONTACTS?.phone || '+237651421052'}`}>
                    <Phone className="h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a
                    href={`https://wa.me/${CONTACTS?.whatsapp || '237651421052'}`}
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
    </motion.header>
  );
}
