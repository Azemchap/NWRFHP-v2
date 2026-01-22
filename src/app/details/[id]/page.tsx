"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Building,
  Heart,
  Shield,
  FileText,
  Pill,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBookById } from "@/lib/fake-data";

interface StaffMember {
  id: string;
  title: string;
  cover: string;
  desc: string;
  category: string;
  link?: string;
}

const quickLinks = [
  { href: "/gallery", label: "Staff Gallery", icon: Users },
  { href: "/committee", label: "Management Committee", icon: Briefcase },
  { href: "/accounts", label: "Accounts Section", icon: FileText },
  { href: "/ppm", label: "Pharmaceutical Products", icon: Pill },
  { href: "/health", label: "Universal Health Coverage", icon: Shield },
  { href: "/support", label: "Partnership Support", icon: Heart },
  { href: "/secretariat", label: "General Secretariat", icon: Building },
  { href: "/logistics", label: "Logistics", icon: Stethoscope },
];

export default function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const member = getBookById(resolvedParams.id) as StaffMember | undefined;

  if (!member) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Staff member not found
          </h1>
          <Button asChild>
            <Link href="/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Gallery</span>
            </Link>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium capitalize"
            >
              <Users className="w-4 h-4" />
              {member.category.replace(/_/g, " ")}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              {member.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 -mt-8">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden shadow-2xl border-0 sticky top-24">
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                  <Image
                    src={member.cover}
                    alt={member.title}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                </div>
              </Card>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="border-neutral-200 shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <Badge
                    variant="secondary"
                    className="bg-primary-50 text-primary-700 mb-4 capitalize"
                  >
                    {member.category.replace(/_/g, " ")}
                  </Badge>

                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                    {member.title}
                  </h2>

                  <div className="prose prose-neutral max-w-none">
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      {member.desc}
                    </p>
                  </div>

                  {member.link && (
                    <p className="mt-6 text-neutral-500 italic">{member.link}</p>
                  )}

                  {/* Quick Links */}
                  <div className="mt-10 pt-8 border-t border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                      Explore More Sections
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-3 p-4 bg-neutral-50 hover:bg-primary-50 rounded-xl transition-all duration-300 group border border-neutral-100 hover:border-primary-200"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-primary-100 transition-colors">
                            <link.icon className="h-5 w-5 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                          </div>
                          <span className="font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">
                            {link.label}
                          </span>
                          <ArrowRight className="h-4 w-4 ml-auto text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-wrap gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gallery">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Gallery
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Join Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Together We Make Healthcare Accessible
            </h2>
            <p className="text-neutral-600 mb-8">
              Our dedicated team works tirelessly to ensure quality healthcare
              reaches every community in the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
