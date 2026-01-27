"use client";

import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Logo */}
            <Logo variant="light" size="md" showTagline={false} className="mb-4" />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-blue-600 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-green-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Programs
            </h3>
            <nav className="flex flex-col gap-3">
              {siteConfig.footerLinks.programs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-primary-400 hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Organization */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Organization
            </h3>
            <nav className="flex flex-col gap-3">
              {siteConfig.footerLinks.organization.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-primary-400 hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.primaryRaw}`}
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-primary-600 flex items-center justify-center transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                {siteConfig.contact.phone.primary}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email.primary}`}
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-primary-600 flex items-center justify-center transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                {siteConfig.contact.email.primary}
              </a>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-primary-600 flex items-center justify-center transition-colors flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5">{siteConfig.location.shortAddress}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-neutral-600">
              Serving communities since {siteConfig.foundedYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
