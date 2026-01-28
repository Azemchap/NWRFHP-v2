"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PageHero } from "@/components/shared/page-hero";
import { staggerContainer, staggerItem } from "@/lib/animations";

const newsHighlights = [
  {
    image: "/images/coach.jpg",
    title: "Staff Coaching Session",
    description: "LUKONG JULIUS leads an engaging coaching session to enhance team skills and service delivery.",
    category: "Training",
  },
  {
    image: "/images/puncture.jpg",
    title: "Field Operations",
    description: "KUH JOSEPH handles van maintenance during delivery operations, ensuring medicines reach their destinations.",
    category: "Operations",
  },
  {
    image: "/images/offload.jpg",
    title: "Medicine Delivery",
    description: "KUH JOSEPH oversees the offloading of essential medicines at community pharmacies across the region.",
    category: "Logistics",
  },
];

const recentActivities = [
  {
    title: "Community Health Outreach",
    description: "Our team visited remote communities to provide health education and screenings.",
    date: "Recent",
  },
  {
    title: "Staff Development Workshop",
    description: "Quarterly training to enhance service delivery and customer care skills.",
    date: "Recent",
  },
  {
    title: "Medicine Distribution",
    description: "Successful delivery of essential medicines to all 430 community pharmacies.",
    date: "Ongoing",
  },
  {
    title: "Partner Coordination Meeting",
    description: "Strategic planning with international partners for improved healthcare delivery.",
    date: "Recent",
  },
];

export default function InfoPage() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Newspaper, text: "News & Updates" }}
        title="Daily Events That"
        titleHighlight="Make News"
        description="Stay informed about the latest happenings, achievements, and stories from the North West Regional Fund for Health Promotion."
        backgroundImage="/images/096A0583.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <Link href="/gallery">
              <Users className="mr-2 h-5 w-5" />
              View Gallery
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </PageHero>

      {/* Featured News Carousel */}
      <section className="py-16 lg:py-24 bg-white">
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
              Featured Stories
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
            >
              Highlights from{" "}
              <span className="text-gradient">The Fund</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-neutral-600"
            >
              Capturing the moments and efforts that drive our mission forward.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Carousel
              setApi={setApi}
              className="w-full rounded-3xl overflow-hidden shadow-2xl"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent>
                {newsHighlights.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                        <Badge className="bg-primary-600 text-white border-0 mb-4">
                          {item.category}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-lg max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
              <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                Recent Activities
              </motion.span>
              <motion.h2
                variants={staggerItem}
                className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6"
              >
                What We Have Been{" "}
                <span className="text-gradient">Up To</span>
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-lg text-neutral-600 mb-8 leading-relaxed"
              >
                Our team is constantly engaged in activities that improve healthcare
                delivery across the North West Region. Here are some of our recent
                initiatives.
              </motion.p>

              <motion.div variants={staggerItem}>
                <Button size="lg" asChild>
                  <Link href="/programs">
                    View Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-neutral-200 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-neutral-900">
                              {activity.title}
                            </h3>
                            <Badge variant="secondary" className="bg-neutral-100 text-neutral-600">
                              {activity.date}
                            </Badge>
                          </div>
                          <p className="text-neutral-600 text-sm">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Making a Difference Every Day
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our daily activities contribute to the overall health and well-being
              of the North West Region.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { value: "430+", label: "Pharmacies Served" },
              { value: "2.2M", label: "Population Reached" },
              { value: "21+", label: "Health Districts" },
              { value: "39+", label: "Years of Service" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full">
              Stay Connected
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Want to Know More?
            </h2>
            <p className="text-neutral-600 mb-8">
              Follow our journey and stay updated with the latest news and activities
              from the North West Regional Fund for Health Promotion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
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
