"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem } from "@/lib/animations";

const news = [
  {
    id: 1,
    title: "Health Voucher Program Expands to All 19 Districts",
    excerpt: "The maternal health voucher program now covers all health districts in the North West Region, making safe delivery accessible to more pregnant women.",
    image: "/images/voucher.jpg",
    date: "Jan 15, 2026",
    readTime: "3 min read",
    category: "Program Update",
    href: "/programs/maternal-child-health",
  },
  {
    id: 2,
    title: "New Community Health Workers Trained in Nkambe",
    excerpt: "Over 50 new community health workers completed their training program and are now serving remote communities in Nkambe health district.",
    image: "/images/front2.jpg",
    date: "Jan 10, 2026",
    readTime: "4 min read",
    category: "Training",
    href: "/programs/community-health",
  },
  {
    id: 3,
    title: "Partnership with WHO Strengthens Medicine Supply",
    excerpt: "A new partnership agreement with WHO will enhance our medicine supply chain, ensuring better availability across all community pharmacies.",
    image: "/images/formulary.jpg",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    category: "Partnership",
    href: "/programs/essential-medicines",
  },
];

export function NewsSection() {
  return (
    <section className="py-10 lg:py-16 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <motion.span
              variants={staggerItem}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
            >
              Latest Updates
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
            >
              News &{" "}
              <span className="text-gradient">Announcements</span>
            </motion.h2>
          </div>
          <motion.div variants={staggerItem}>
            <Button variant="outline" asChild>
              <Link href="/infos">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-100 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary-700 hover:bg-white">
                    {item.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center text-primary-600 font-medium text-sm">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
