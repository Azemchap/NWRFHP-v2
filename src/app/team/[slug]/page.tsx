"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Building,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import teamData from "@/data/team.json";
import { siteConfig } from "@/config/site";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = use(params);
  const member = (teamData as TeamMember[]).find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  // Get other team members (excluding current)
  const otherMembers = (teamData as TeamMember[])
    .filter((m) => m.slug !== slug)
    .slice(0, 4);

  // Generate department from role
  const getDepartment = (role: string): string => {
    if (role.toLowerCase().includes("administrator") || role.toLowerCase().includes("admin")) {
      return "Administration";
    }
    if (role.toLowerCase().includes("finance") || role.toLowerCase().includes("accountant") || role.toLowerCase().includes("treasurer")) {
      return "Finance Department";
    }
    if (role.toLowerCase().includes("health") || role.toLowerCase().includes("program")) {
      return "Health Programs";
    }
    if (role.toLowerCase().includes("secretary") || role.toLowerCase().includes("secretariat")) {
      return "Secretariat";
    }
    if (role.toLowerCase().includes("hr") || role.toLowerCase().includes("human")) {
      return "Human Resources";
    }
    if (role.toLowerCase().includes("supervisor") || role.toLowerCase().includes("distribution")) {
      return "Distribution & Supervision";
    }
    if (role.toLowerCase().includes("lab") || role.toLowerCase().includes("laboratory")) {
      return "Laboratory Services";
    }
    return "Operations";
  };

  const department = getDepartment(member.role);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-14 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" asChild>
              <Link href="/team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
              </div>

              {/* Date Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Joined</p>
                    <p className="font-semibold text-neutral-900">{member.date}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem}>
                <Badge className="bg-white/10 border-white/20 text-white/90 mb-4">
                  {department}
                </Badge>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                {member.name}
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-xl text-accent-300 font-medium mb-6"
              >
                {member.role}
              </motion.p>

              <motion.p
                variants={staggerItem}
                className="text-lg text-white/70 mb-8 leading-relaxed"
              >
                {member.name} is a dedicated member of the NWRFHP team, contributing
                to our mission of promoting health and wellness in the North West
                Region of Cameroon. Their expertise in {member.role.toLowerCase()} helps
                ensure the successful delivery of our healthcare programs.
              </motion.p>

              {/* Quick Info */}
              <motion.div
                variants={staggerItem}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Building className="w-5 h-5 text-accent-400" />
                  <div>
                    <p className="text-xs text-white/50">Department</p>
                    <p className="text-white font-medium">{department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-5 h-5 text-accent-400" />
                  <div>
                    <p className="text-xs text-white/50">Role</p>
                    <p className="text-white font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-4"
              >
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
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
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
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
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
                About
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
              >
                About {member.name.split(" ")[0]}
              </motion.h2>
              <motion.div variants={staggerItem} className="prose prose-lg max-w-none">
                <p className="text-neutral-600 leading-relaxed">
                  As a valued member of the NWRFHP team, {member.name} plays a crucial role
                  in our organization&apos;s mission to promote health and wellness across the
                  North West Region of Cameroon. With expertise in {member.role.toLowerCase()},
                  they contribute significantly to our efforts in ensuring quality healthcare
                  delivery to communities throughout the region.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Working within the {department} department, {member.name.split(" ")[0]} collaborates
                  with fellow team members to support NWRFHP&apos;s various programs including
                  essential medicines management, community health services, and universal
                  health coverage initiatives.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Since joining NWRFHP in {member.date}, {member.name.split(" ")[0]} has been
                  instrumental in advancing our organization&apos;s goals of making healthcare
                  accessible and affordable for all residents of the North West Region.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
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
              Our Team
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-neutral-900"
            >
              Other Team Members
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {otherMembers.map((otherMember) => (
              <motion.div
                key={otherMember.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/team/${otherMember.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={otherMember.image}
                      alt={otherMember.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-white font-medium text-sm">
                        View Profile
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
                      {otherMember.name}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-1">
                      {otherMember.role}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">
                View All Team Members
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Users className="w-4 h-4" />
              Join Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to Work With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We are always looking for passionate individuals who want to make a
              difference in healthcare delivery across the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
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
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
