"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Search, Filter, Users, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getAllBooks } from "@/lib/fake-data";

const categories = [
  { value: "all", label: "All Staff" },
  { value: "admin", label: "Administration" },
  { value: "store", label: "Store" },
  { value: "accounts", label: "Accounts" },
  { value: "coverage", label: "Coverage" },
  { value: "lab", label: "Laboratory" },
  { value: "logistics", label: "Logistics" },
  { value: "supervision", label: "Supervision" },
  { value: "secretariat", label: "Secretariat" },
  { value: "committee", label: "Committee" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
    },
  },
};

interface StaffMember {
  id: string;
  title: string;
  cover: string;
  desc: string;
  category: string;
}

export default function GalleryPage() {
  const allStaff = getAllBooks() as StaffMember[];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<StaffMember | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredStaff = useMemo(() => {
    return allStaff.filter((member) => {
      const matchesCategory =
        selectedCategory === "all" || member.category === selectedCategory;
      const matchesSearch =
        member.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allStaff, selectedCategory, searchQuery]);

  const openLightbox = (member: StaffMember, index: number) => {
    setSelectedImage(member);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredStaff.length) % filteredStaff.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredStaff[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredStaff.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredStaff[newIndex]);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/096A0583.jpg"
            alt="NWRFHP Staff Gallery"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-800/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
            >
              <Camera className="w-4 h-4" />
              Staff Gallery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                Amazing Team
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Discover the dedicated professionals who make quality healthcare accessible
              across the North West Region of Cameroon.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{allStaff.length}+</p>
              <p className="text-neutral-600 text-sm mt-1">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{categories.length - 1}</p>
              <p className="text-neutral-600 text-sm mt-1">Departments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">37+</p>
              <p className="text-neutral-600 text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">217</p>
              <p className="text-neutral-600 text-sm mt-1">Pharmacies Served</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search by name or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-primary-600 hover:bg-primary-700 text-white shadow-md"
                      : "bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex items-center gap-2 text-neutral-600"
          >
            <Filter className="h-4 w-4" />
            <span className="text-sm">
              Showing <strong className="text-neutral-900">{filteredStaff.length}</strong> team members
              {selectedCategory !== "all" && (
                <span> in <Badge variant="secondary" className="ml-1">{categories.find(c => c.value === selectedCategory)?.label}</Badge></span>
              )}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredStaff.length > 0 ? (
                filteredStaff.map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div
                      onClick={() => openLightbox(member, index)}
                      className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-neutral-100"
                    >
                      {/* Image Container */}
                      <div className="relative h-80 overflow-hidden bg-neutral-100">
                        <Image
                          src={member.cover}
                          alt={member.title}
                          fill
                          className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Hover overlay content */}
                        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-white text-sm font-medium">
                            <Camera className="h-4 w-4" />
                            <span>View Profile</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-neutral-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
                          {member.title}
                        </h3>
                        <p className="text-neutral-600 text-sm line-clamp-2 mb-3">
                          {member.desc}
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-primary-50 text-primary-700 hover:bg-primary-100 capitalize"
                        >
                          {member.category.replace(/_/g, " ")}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <Users className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                    No team members found
                  </h3>
                  <p className="text-neutral-500 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-72 md:h-auto md:min-h-[500px] flex-shrink-0">
                <Image
                  src={selectedImage.cover}
                  alt={selectedImage.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <Badge
                  variant="secondary"
                  className="w-fit bg-primary-50 text-primary-700 mb-4 capitalize"
                >
                  {selectedImage.category.replace(/_/g, " ")}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {selectedImage.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed flex-1">
                  {selectedImage.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <Button asChild className="w-full md:w-auto">
                    <Link href={`/details/${selectedImage.id}`}>
                      View Full Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentIndex + 1} / {filteredStaff.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We are always looking for passionate individuals committed to improving
              healthcare in the North West Region.
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
                <Link href="/team">View Team Page</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
