"use client";

import { SlideInUp } from "@/components/animations/slide-in-up";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Our Vision",
    description: "To assist the Ministry of Public Health in providing sustainable quality healthcare for the population.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "Promoting access to quality healthcare by improving the performance of the health system.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SlideInUp>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Purpose
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Committed to improving healthcare access and quality across North West Region
            </p>
          </div>
        </SlideInUp>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, index) => (
            <SlideInUp key={item.title} delay={index * 0.2}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </SlideInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
