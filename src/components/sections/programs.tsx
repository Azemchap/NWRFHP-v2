"use client";

import { ProgramCard } from "@/components/shared/program-card";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { SlideInUp } from "@/components/animations/slide-in-up";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Essential Medicines Management",
    description: "Ensuring 95% availability of quality medicines across 217 community pharmacies serving rural and urban populations.",
    imageUrl: "/images/programs/medicines.jpg",
    slug: "essential-medicines",
  },
  {
    title: "Community Health Services",
    description: "Comprehensive primary healthcare services delivered through our extensive network of community health workers.",
    imageUrl: "/images/programs/community-health.jpg",
    slug: "community-health",
  },
  {
    title: "Universal Health Coverage",
    description: "Working towards accessible, affordable, and quality healthcare for all residents of North West Region.",
    imageUrl: "/images/programs/uhc.jpg",
    slug: "universal-health-coverage",
  },
];

export function ProgramsSection() {
  return (
    <section className="border-t bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SlideInUp>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive healthcare initiatives improving lives across the region
            </p>
          </div>
        </SlideInUp>

        <StaggerContainer>
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <StaggerItem key={program.slug}>
                <ProgramCard {...program} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <SlideInUp className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </SlideInUp>
      </div>
    </section>
  );
}
