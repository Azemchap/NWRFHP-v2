"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  { src: "/images/096A0522.jpg", alt: "NWRFHP Activities", category: "Activities" },
  { src: "/images/096A0566.jpg", alt: "Team Meeting", category: "Team" },
  { src: "/images/096A0579.jpg", alt: "Healthcare Delivery", category: "Healthcare" },
  { src: "/images/096A0583.jpg", alt: "Community Outreach", category: "Community" },
  { src: "/images/096A0599.jpg", alt: "Medical Supplies", category: "Operations" },
  { src: "/images/head-office.jpg", alt: "NWRFHP Head Office", category: "Facilities" },
  { src: "/images/delivery.jpg", alt: "Medicine Delivery", category: "Operations" },
  { src: "/images/formulary.jpg", alt: "Essential Medicines", category: "Healthcare" },
  { src: "/images/UHC1.jpg", alt: "Universal Health Coverage", category: "Programs" },
  { src: "/images/UHC2.jpg", alt: "UHC Program", category: "Programs" },
  { src: "/images/UHC3.jpg", alt: "UHC Activities", category: "Programs" },
  { src: "/images/UHC4.jpg", alt: "Health Services", category: "Programs" },
  { src: "/images/UHC5.jpg", alt: "Community Health", category: "Programs" },
  { src: "/images/UHC6.jpg", alt: "Healthcare Access", category: "Programs" },
  { src: "/images/management1.jpg", alt: "Management Team", category: "Team" },
  { src: "/images/medalists.jpg", alt: "Award Ceremony", category: "Events" },
  { src: "/images/medalists2.jpg", alt: "Recognition Event", category: "Events" },
  { src: "/images/front1.jpg", alt: "Office Front View", category: "Facilities" },
  { src: "/images/front2.jpg", alt: "Building Exterior", category: "Facilities" },
  { src: "/images/logistics.jpg", alt: "Logistics Operations", category: "Operations" },
  { src: "/images/ebolowa1.jpg", alt: "Regional Activities", category: "Activities" },
  { src: "/images/ebolowa2.jpg", alt: "Partnership Meeting", category: "Activities" },
  { src: "/images/fondohmedal1.jpg", alt: "Administrator Award", category: "Events" },
  { src: "/images/fonmedal1.jpg", alt: "Staff Recognition", category: "Events" },
];

const categories = ["All", "Activities", "Team", "Healthcare", "Operations", "Programs", "Facilities", "Events", "Community"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
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
              Photo Gallery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                Gallery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Explore moments from our journey of promoting sustainable healthcare
              across the North West Region of Cameroon.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b sticky top-0 z-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${index % 5 === 0 ? "h-[400px] md:h-full" : "h-[200px] md:h-[250px]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-white/70 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">{filteredImages[currentImageIndex].alt}</p>
              <p className="text-white/60 text-sm">{currentImageIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
