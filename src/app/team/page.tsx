"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Calendar, ArrowRight, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import teamData from "@/data/team.json";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/config/site";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section with Background Image */}
      <PageHero
        badge={{ icon: Users, text: "Our Team" }}
        title="Meet Our"
        titleHighlight="Dedicated Team"
        description="Our dedicated team of professionals is committed to promoting health and wellness in the North West Region of Cameroon. Get to know the people behind our mission."
        backgroundImage="/images/096A0583.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{teamData.length}+</p>
              <p className="text-neutral-600 text-sm mt-1">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">9</p>
              <p className="text-neutral-600 text-sm mt-1">Departments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.yearsOfService}+</p>
              <p className="text-neutral-600 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.communityPharmacies}</p>
              <p className="text-neutral-600 text-sm mt-1">Pharmacies Served</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
            >
              Leadership & Staff
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
            >
              The People Behind{" "}
              <span className="text-gradient">Our Success</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-neutral-600"
            >
              From administrators to field workers, each member of our team plays a vital
              role in delivering quality healthcare to communities across the region.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {teamData.map((member: TeamMember) => (
              <motion.div
                key={member.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/team/${member.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-neutral-100 h-full">
                    {/* Image Container */}
                    <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden bg-neutral-100">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover overlay content */}
                      <div className="absolute inset-0 flex items-end p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                          <Users className="h-4 w-4" />
                          <span>View Profile</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-neutral-900 text-sm sm:text-base mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
                        {member.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-primary-50 text-primary-700 hover:bg-primary-100 text-xs line-clamp-1"
                      >
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Users className="w-4 h-4" />
              Join Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Interested in Working With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We are always looking for passionate individuals who want to make a difference
              in healthcare delivery across the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
