"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { sections, getSection } from "@/data/sections";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface SectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function SectionPage({ params }: SectionPageProps) {
  const { slug } = use(params);
  const section = getSection(slug);

  if (!section) {
    notFound();
  }

  // Get other sections for navigation
  const otherSections = sections.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: section.icon, text: section.acronym }}
        title={section.title}
        description={section.description}
        backgroundImage={section.heroImage}
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="white" asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get Involved
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline-accent"
            className="border-white/30 bg-white/5 text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            asChild
          >
            <a href={`tel:${siteConfig.contact.phone.primaryRaw}`}>
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-6"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {section.programs.length}
              </p>
              <p className="text-neutral-600">Programs</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {siteConfig.stats.healthDistricts}
              </p>
              <p className="text-neutral-600">Districts Covered</p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
            >
              <p className="text-4xl font-bold text-primary-600 mb-1">
                {siteConfig.stats.populationServed}M
              </p>
              <p className="text-neutral-600">Population Served</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="pt-8">
        <div className="container">
          <Button variant="ghost" asChild className="group">
            <Link href="/sections">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Sections
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${section.bgColor} mb-4`}
              >
                <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                <span className={`text-sm font-bold ${section.iconColor}`}>
                  {section.acronym}
                </span>
              </motion.div>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
              >
                {section.title}
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-neutral-600 leading-relaxed mb-8"
              >
                {section.fullDescription}
              </motion.p>

              {/* Quick Program Links */}
              <motion.div variants={staggerItem} className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  Quick Access to Programs
                </p>
                <div className="flex flex-wrap gap-2">
                  {section.programs.map((program) => (
                    <Link
                      key={program.id}
                      href={`/programs/${program.slug}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${program.bgColor} ${program.iconColor} text-sm font-medium hover:opacity-80 transition-opacity`}
                    >
                      <program.icon className="w-4 h-4" />
                      {program.shortTitle}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-neutral-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-3`}
                >
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-neutral-900">{section.acronym}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
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
              Our Programs
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
            >
              Programs in <span className="text-gradient">{section.acronym}</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-neutral-600">
              Explore the specialized programs within our {section.shortTitle}{" "}
              section.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {section.programs.map((program) => (
              <motion.div
                key={program.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-neutral-200 hover:shadow-xl hover:border-primary-200 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center`}
                    >
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Features preview */}
                    <div className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                          <span className="text-xs text-neutral-600 truncate">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/programs/${program.slug}`}
                      className="inline-flex items-center text-primary-600 font-medium text-sm group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="container">
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
              Explore More
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-neutral-900"
            >
              Other Sections
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {otherSections.map((otherSection) => (
              <motion.div
                key={otherSection.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/sections/${otherSection.slug}`}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${otherSection.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <otherSection.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-primary-600 mb-1">
                      {otherSection.acronym}
                    </p>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {otherSection.shortTitle}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {otherSection.programs.length} programs
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Learn More About {section.acronym}?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us today to learn more about our {section.shortTitle}{" "}
              programs and how they can benefit your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="white" asChild>
                <Link href="/contact">
                  Contact Us
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
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
