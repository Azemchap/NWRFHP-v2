"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Calendar, Building, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import teamData from "@/data/team.json";
import { notFound } from "next/navigation";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

export default function TeamMemberPage() {
  const params = useParams();
  const slug = params.slug as string;

  const member = teamData.find((m: TeamMember) => m.slug === slug);

  if (!member) {
    notFound();
  }

  // Get related team members (same department or random selection)
  const relatedMembers = teamData
    .filter((m: TeamMember) => m.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/team" className="hover:text-primary-600 transition-colors">
              Team
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neutral-900 font-medium">{member.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" asChild className="mb-8 -ml-4">
              <Link href="/team">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Badge className="mb-4 bg-primary-100 text-primary-700">
                Staff Member
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                {member.name}
              </h1>

              <p className="text-xl text-primary-600 font-medium mb-6">
                {member.role}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-neutral-600">
                  <Calendar className="w-5 h-5" />
                  <span>Joined: {member.date}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Building className="w-5 h-5" />
                  <span>NWRFHP</span>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8 mb-8">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">About</h2>
                <p className="text-neutral-600 leading-relaxed">
                  {member.name} serves as {member.role} at the North West Regional Fund for Health Promotion (NWRFHP).
                  As a dedicated member of our team, they contribute to our mission of promoting sustainable quality
                  healthcare for the population of North West Region, Cameroon.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact NWRFHP
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/team">
                    View All Team Members
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Team Members */}
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
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Other Team Members
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedMembers.map((relatedMember: TeamMember, index: number) => (
              <motion.div
                key={relatedMember.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/team/${relatedMember.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedMember.image}
                        alt={relatedMember.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                        {relatedMember.name}
                      </h3>
                      <p className="text-sm text-neutral-600 line-clamp-2">
                        {relatedMember.role}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
