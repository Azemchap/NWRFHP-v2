"use client";

import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import teamData from "@/data/team.json";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Crown,
  Mail,
  Package,
  Phone,
  UserCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

// Categorize team members by hierarchy
const categorizeTeam = (members: TeamMember[]) => {
  const administrator = members.filter((m) =>
    m.role.toUpperCase() === "ADMINISTRATOR"
  );

  const headsOfSection = members.filter((m) =>
    m.role.toUpperCase().includes("HEAD OF SECTION")
  );

  const headsOfUnit = members.filter((m) =>
    m.role.toUpperCase().includes("HEAD OF UNIT")
  );

  const subStoreStaff = members.filter((m) =>
    m.role.toUpperCase().includes("SUB-STORE") ||
    m.role.toUpperCase().includes("SUBSTORE")
  );

  // Get IDs of already categorized members
  const categorizedIds = new Set([
    ...administrator.map((m) => m.id),
    ...headsOfSection.map((m) => m.id),
    ...headsOfUnit.map((m) => m.id),
    ...subStoreStaff.map((m) => m.id),
  ]);

  // Filter out placeholder/dummy data and categorized members
  const otherStaff = members.filter(
    (m) => !categorizedIds.has(m.id) && !m.name.toLowerCase().includes("lorem")
  );

  return {
    administrator,
    headsOfSection,
    headsOfUnit,
    subStoreStaff,
    otherStaff,
  };
};

const teamCategories = categorizeTeam(teamData as TeamMember[]);

// Team card component for reuse
const TeamCard = ({
  member,
  variant = "default",
}: {
  member: TeamMember;
  variant?: "featured" | "default";
}) => {
  if (variant === "featured") {
    return (
      <motion.div
        variants={staggerItem}
        whileHover={{ y: -8 }}
        className="group"
      >
        <Link href={`/team/${member.slug}`}>
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 h-full">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-900/40 md:block hidden" />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-10 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="h-6 w-6 text-accent-400" />
                    <Badge className="bg-accent-500/20 text-accent-300 border-accent-500/30 uppercase text-xs font-bold tracking-wider">
                      Administrator
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-lg mb-6">{member.role}</p>
                  <div className="flex items-center gap-2 text-accent-300 font-medium">
                    <span>View Full Profile</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={staggerItem} whileHover={{ y: -8 }} className="group">
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
            <h3 className="font-bold text-neutral-900 text-xs sm:text-base mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors uppercase">
              {member.name}
            </h3>
            <Badge
              variant="secondary"
              className="bg-primary-50 text-primary-700 hover:bg-primary-100 text-xs line-clamp-1"
            >
              {member.role.split(",")[0]}
            </Badge>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Section header component
const SectionHeader = ({
  icon: Icon,
  badge,
  title,
  titleHighlight,
  description,
}: {
  icon: React.ElementType;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="text-center max-w-3xl mx-auto mb-10"
  >
    <motion.span
      variants={staggerItem}
      className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
    >
      <Icon className="h-4 w-4" />
      {badge}
    </motion.span>
    <motion.h2
      variants={staggerItem}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
    >
      {title} <span className="text-gradient">{titleHighlight}</span>
    </motion.h2>
    <motion.p variants={staggerItem} className="text-neutral-600">
      {description}
    </motion.p>
  </motion.div>
);

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
      </PageHero>

      {/* Stats Bar
      <section className="py-8 -mt-20 relative z-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">
                {teamData.length - 1}+
              </p>
              <p className="text-neutral-600 text-sm mt-1">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">9</p>
              <p className="text-neutral-600 text-sm mt-1">Departments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">
                {siteConfig.stats.yearsOfService}+
              </p>
              <p className="text-neutral-600 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">
                {siteConfig.stats.communityPharmacies}
              </p>
              <p className="text-neutral-600 text-sm mt-1">Pharmacies Served</p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Administrator Section - Full Width Featured */}
      {teamCategories.administrator.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container">
            <SectionHeader
              icon={Crown}
              badge="Leadership"
              title="Our"
              titleHighlight="Administrator"
              description="Leading the North West Regional Fund for Health Promotion with vision, dedication, and commitment to excellence in healthcare delivery."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {teamCategories.administrator.map((member) => (
                <TeamCard key={member.id} member={member} variant="featured" />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Heads of Section */}
      {teamCategories.headsOfSection.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <SectionHeader
              icon={Building2}
              badge="Section Leaders"
              title="Heads of"
              titleHighlight="Sections"
              description="Our section heads oversee major operational areas, ensuring efficient coordination and delivery of services across all departments."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {teamCategories.headsOfSection.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Heads of Unit */}
      {teamCategories.headsOfUnit.length > 0 && (
        <section className="py-12 lg:py-16 bg-neutral-50">
          <div className="container">
            <SectionHeader
              icon={Briefcase}
              badge="Unit Leaders"
              title="Heads of"
              titleHighlight="Units"
              description="Our unit heads manage specialized departments, bringing expertise and leadership to their respective areas of responsibility."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {teamCategories.headsOfUnit.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Sub Store Staff */}
      {teamCategories.subStoreStaff.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <SectionHeader
              icon={Package}
              badge="Regional Operations"
              title="Sub-Store"
              titleHighlight="Staff"
              description="Our sub-store staff ensure medicines and supplies reach communities across the North West Region through our satellite locations."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              {teamCategories.subStoreStaff.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Staff */}
      {teamCategories.otherStaff.length > 0 && (
        <section className="py-12 lg:py-16 bg-neutral-50">
          <div className="container">
            <SectionHeader
              icon={UserCheck}
              badge="Our Workforce"
              title="Dedicated"
              titleHighlight="Staff"
              description="The backbone of our operations - these dedicated professionals keep our organization running smoothly every day."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {teamCategories.otherStaff.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
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
              We are always looking for passionate individuals who want to make
              a difference in healthcare delivery across the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="white"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
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
