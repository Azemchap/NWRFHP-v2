"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone.primary,
    description: "Mon-Fri from 8am to 5pm",
    href: `tel:${siteConfig.contact.phone.primaryRaw}`,
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email.primary,
    description: "We'll respond within 24 hours",
    href: `mailto:${siteConfig.contact.email.primary}`,
    color: "bg-purple-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Start a conversation",
    description: "Quick responses guaranteed",
    href: siteConfig.contact.whatsapp.link,
    color: "bg-green-500",
    external: true,
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.location.city,
    description: siteConfig.location.fullAddress,
    href: siteConfig.location.googleMapsUrl,
    color: "bg-red-500",
    external: true,
  },
];

const partners = [
  { src: "/images/logo1.gif", alt: "Partner 1" },
  { src: "/images/logo2.png", alt: "Partner 2" },
  { src: "/images/logo3.png", alt: "Partner 3" },
  { src: "/images/logo4.png", alt: "Partner 4" },
  { src: "/images/logo5.png", alt: "Partner 5" },
  { src: "/images/logo6.png", alt: "Partner 6" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/096A0599.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-800/75" />
        </div>

        <div className="container relative z-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              We're Here to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                Help You
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/80 mb-8 max-w-2xl"
            >
              For enquiries, supplies, support, bulk purchase orders, or any kind of assistance,
              please contact us directly through any of the channels below.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
                <a href={siteConfig.contact.whatsapp.link} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 -mt-16 relative z-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{method.label}</h3>
                <p className="text-primary-600 font-medium mb-2">{method.value}</p>
                <p className="text-sm text-neutral-500">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Additional Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                <Clock className="w-4 h-4" />
                Business Hours
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Visit Our Office
              </h2>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our headquarters is located in Bamenda, the heart of the North West Region.
                We welcome visitors during business hours and are always ready to assist you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Address</p>
                    <p className="text-neutral-600">{siteConfig.location.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Working Hours</p>
                    <p className="text-neutral-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-neutral-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63547.24!2d${siteConfig.location.coordinates.lng}!3d${siteConfig.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f41b0f8c87c8f%3A0x2e9b5c1e3e7a8b3d!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Our Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Trusted by Leading Organizations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
