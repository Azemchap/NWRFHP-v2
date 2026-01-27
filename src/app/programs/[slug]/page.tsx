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
  Target,
  Users,
  Activity,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { programs, getProgram } from "@/data/programs";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = use(params);
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  // Get related programs (excluding current)
  const relatedPrograms = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: program.icon, text: program.shortTitle }}
        title={program.title}
        description={program.description}
        backgroundImage={program.heroImage}
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
              Get Involved
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {program.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-100 text-center"
              >
                <p className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</p>
                <p className="text-neutral-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="pt-8">
        <div className="container">
          <Button variant="ghost" asChild className="group">
            <Link href="/programs">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Programs
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={staggerItem}
                className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
              >
                About This Program
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
              >
                {program.title}
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-neutral-600 leading-relaxed mb-8"
              >
                {program.fullDescription}
              </motion.p>

              {/* Features Grid */}
              <motion.div
                variants={staggerItem}
                className="grid sm:grid-cols-2 gap-4"
              >
                {program.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-8 h-8 rounded-lg ${program.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
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
                  src={program.image}
                  alt={program.title}
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
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-3`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-neutral-900">{program.shortTitle}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives, Beneficiaries, Activities */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Objectives */}
            <motion.div variants={staggerItem}>
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Objectives</h3>
                  <ul className="space-y-3">
                    {program.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600 text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Beneficiaries */}
            <motion.div variants={staggerItem}>
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Beneficiaries</h3>
                  <ul className="space-y-3">
                    {program.beneficiaries.map((beneficiary, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600 text-sm">{beneficiary}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Activities */}
            <motion.div variants={staggerItem}>
              <Card className="h-full border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Activities</h3>
                  <ul className="space-y-3">
                    {program.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-8 lg:py-12 bg-neutral-50">
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
              Related Programs
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {relatedPrograms.map((relatedProgram) => (
              <motion.div
                key={relatedProgram.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/programs/${relatedProgram.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProgram.image}
                      alt={relatedProgram.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${relatedProgram.color} flex items-center justify-center`}>
                      <relatedProgram.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedProgram.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
                      {relatedProgram.description}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Access This Program?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us today to learn more about how you can benefit from our
              {" "}{program.shortTitle} program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
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
