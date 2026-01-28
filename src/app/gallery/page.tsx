"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Search,
  Filter,
  Calendar,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Truck,
  Users,
  GraduationCap,
  Handshake,
  Stethoscope,
  MapPin,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";

// Event categories
const categories = [
  { value: "all", label: "All Events", icon: Camera },
  { value: "distribution", label: "Medicine Distribution", icon: Truck },
  { value: "outreach", label: "Community Outreach", icon: MapPin },
  { value: "health-voucher", label: "Health Voucher", icon: Heart },
  { value: "training", label: "Training & Capacity", icon: GraduationCap },
  { value: "partnerships", label: "Partner Events", icon: Handshake },
  { value: "uhc", label: "UHC Activities", icon: Stethoscope },
  { value: "social", label: "Social Events", icon: PartyPopper },
];

// Gallery events data
const galleryEvents = [
  // Medicine Distribution
  {
    id: "1",
    title: "Medicine Distribution to Bamenda District",
    description: "Our logistics team successfully delivered essential medicines to 45 community pharmacies across Bamenda Health District, ensuring availability of critical healthcare supplies.",
    image: "/images/offload.jpg",
    category: "distribution",
    date: "2024",
    location: "Bamenda Health District",
  },
  {
    id: "2",
    title: "Regional Medical Store Operations",
    description: "Daily operations at our Regional Medical Store where we manage inventory for over 430 community pharmacies across the North West Region.",
    image: "/images/store.jpg",
    category: "distribution",
    date: "2024",
    location: "Regional Medical Store, Bamenda",
  },
  {
    id: "3",
    title: "Field Delivery Operations",
    description: "Our dedicated drivers navigate challenging terrain to ensure medicines reach even the most remote health facilities in the region.",
    image: "/images/puncture.jpg",
    category: "distribution",
    date: "2024",
    location: "North West Region",
  },
  // Community Outreach
  {
    id: "4",
    title: "Community Health Education Campaign",
    description: "Health education sessions conducted in rural communities to raise awareness about preventive healthcare and available UHC services.",
    image: "/images/front3.jpg",
    category: "outreach",
    date: "2024",
    location: "Rural Communities, NWR",
  },
  {
    id: "5",
    title: "Mobile Health Screening Program",
    description: "Our team provides free health screenings to community members, identifying health issues early and connecting people with appropriate care.",
    image: "/images/096A0583.jpg",
    category: "outreach",
    date: "2024",
    location: "Various Locations",
  },
  // Health Voucher Program
  {
    id: "6",
    title: "Health Voucher Distribution Ceremony",
    description: "Pregnant women receive their health vouchers worth FCFA 6,000, giving them access to complete maternal care from conception to 42 days after delivery.",
    image: "/images/voucher.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Enrolled Health Facilities",
  },
  {
    id: "7",
    title: "Safe Delivery Under Health Voucher",
    description: "A successful delivery at one of our enrolled facilities. The Health Voucher program covers all costs including C-sections if needed.",
    image: "/images/delivery.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Regional Hospital",
  },
  {
    id: "8",
    title: "Antenatal Care Sessions",
    description: "Regular antenatal visits covered by the Health Voucher program ensure healthy pregnancies and safe deliveries for mothers across the region.",
    image: "/images/magg1.jpg",
    category: "health-voucher",
    date: "2024",
    location: "Health Centers, NWR",
  },
  // Training & Capacity Building
  {
    id: "9",
    title: "Staff Development Workshop",
    description: "Quarterly training sessions to enhance the skills of our healthcare workers in customer service, inventory management, and healthcare delivery.",
    image: "/images/coach.jpg",
    category: "training",
    date: "2024",
    location: "NWRFHP Head Office",
  },
  {
    id: "10",
    title: "Pharmacy Management Training",
    description: "Capacity building program for community pharmacy managers on stock management, quality assurance, and patient counseling.",
    image: "/images/formulary.jpg",
    category: "training",
    date: "2024",
    location: "Training Center, Bamenda",
  },
  // Partner Events
  {
    id: "11",
    title: "GIZ Partnership Meeting",
    description: "Strategic coordination meeting with GIZ to strengthen healthcare delivery systems and expand coverage of essential health services.",
    image: "/images/logo1.gif",
    category: "partnerships",
    date: "2024",
    location: "Conference Room",
  },
  {
    id: "12",
    title: "Ministry of Health Coordination",
    description: "Working closely with the Ministry of Public Health to align our programs with national health priorities and policies.",
    image: "/images/head-office.jpg",
    category: "partnerships",
    date: "2024",
    location: "Ministry of Health",
  },
  // UHC Activities
  {
    id: "13",
    title: "Children Under 5 Free Consultation",
    description: "Children aged 0-5 years receiving free medical consultations and malaria treatment at enrolled government health facilities.",
    image: "/images/logu1.jpg",
    category: "uhc",
    date: "2024",
    location: "Health Facilities, NWR",
  },
  {
    id: "14",
    title: "Hemodialysis Service Delivery",
    description: "Our hemodialysis program provides kidney patients with unlimited dialysis sessions for just FCFA 15,000 annually - a 97% cost reduction.",
    image: "/images/store.jpg",
    category: "uhc",
    date: "2024",
    location: "Dialysis Centers",
  },
  // Social Events
  {
    id: "15",
    title: "Annual Staff Appreciation Day",
    description: "Celebrating the dedication of our team members who work tirelessly to ensure healthcare reaches every corner of the North West Region.",
    image: "/images/social1.jpg",
    category: "social",
    date: "2024",
    location: "NWRFHP Premises",
  },
  {
    id: "16",
    title: "International Women's Day Celebration",
    description: "Honoring the 18 dedicated women of NWRFHP who form the backbone of our exceptional customer service and healthcare delivery.",
    image: "/images/njamsi.JPG",
    category: "social",
    date: "2024",
    location: "NWRFHP Head Office",
  },
  {
    id: "17",
    title: "Medal Award Ceremony",
    description: "Staff members receive recognition for their outstanding contributions to healthcare delivery in the North West Region.",
    image: "/images/fonmedal1.jpg",
    category: "social",
    date: "2024",
    location: "Ceremony Hall",
  },
  {
    id: "18",
    title: "Team Building Activities",
    description: "Building stronger bonds among team members through various social and recreational activities.",
    image: "/images/social2.jpg",
    category: "social",
    date: "2024",
    location: "Various Venues",
  },
  {
    id: "19",
    title: "End of Year Celebration",
    description: "Annual celebration bringing together all staff to reflect on achievements and set goals for the coming year.",
    image: "/images/social3.jpg",
    category: "social",
    date: "2024",
    location: "NWRFHP Premises",
  },
  {
    id: "20",
    title: "Staff Social Gathering",
    description: "Regular social gatherings that strengthen team spirit and foster a positive working environment.",
    image: "/images/social4.jpg",
    category: "social",
    date: "2024",
    location: "Bamenda",
  },
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
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredEvents = useMemo(() => {
    return galleryEvents.filter((event) => {
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (event: GalleryEvent, index: number) => {
    setSelectedEvent(event);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
    setCurrentIndex(newIndex);
    setSelectedEvent(filteredEvents[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredEvents.length;
    setCurrentIndex(newIndex);
    setSelectedEvent(filteredEvents[newIndex]);
  };

  const getCategoryIcon = (categoryValue: string) => {
    const category = categories.find((c) => c.value === categoryValue);
    return category?.icon || Camera;
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <PageHero
        badge={{ icon: Camera, text: "Photo Gallery" }}
        title="Our Activities"
        titleHighlight="& Events"
        description="Explore moments captured across our healthcare programs, community outreach initiatives, and organizational events that showcase our commitment to quality healthcare."
        backgroundImage="/images/096A0583.jpg"
        overlay="gradient"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary-700 hover:bg-neutral-100"
            asChild
          >
            <Link href="/programs">
              <Heart className="mr-2 h-5 w-5" />
              Our Programs
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/team">Meet Our Team</Link>
          </Button>
        </div>
      </PageHero>

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
              <p className="text-3xl font-bold text-primary-600">{galleryEvents.length}+</p>
              <p className="text-neutral-600 text-sm mt-1">Events Captured</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{categories.length - 1}</p>
              <p className="text-neutral-600 text-sm mt-1">Event Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.yearsOfService}+</p>
              <p className="text-neutral-600 text-sm mt-1">Years of Impact</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-600">{siteConfig.stats.healthDistricts}+</p>
              <p className="text-neutral-600 text-sm mt-1">Health Districts</p>
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
            className="flex flex-col gap-6"
          >
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search events, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-neutral-200 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
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
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
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
              Showing <strong className="text-neutral-900">{filteredEvents.length}</strong> events
              {selectedCategory !== "all" && (
                <span>
                  {" "}in{" "}
                  <Badge variant="secondary" className="ml-1">
                    {categories.find((c) => c.value === selectedCategory)?.label}
                  </Badge>
                </span>
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => {
                  const CategoryIcon = getCategoryIcon(event.category);
                  return (
                    <motion.div
                      key={event.id}
                      variants={cardVariants}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <div
                        onClick={() => openLightbox(event, index)}
                        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-neutral-100 h-full"
                      >
                        {/* Image Container */}
                        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-neutral-100">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-white/90 text-neutral-800 backdrop-blur-sm">
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {categories.find((c) => c.value === event.category)?.label}
                            </Badge>
                          </div>

                          {/* Hover overlay content */}
                          <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 text-white text-sm font-medium">
                              <Camera className="h-4 w-4" />
                              <span>View Details</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-3 sm:p-4 md:p-5">
                          <h3 className="font-bold text-neutral-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors text-sm md:text-base">
                            {event.title}
                          </h3>
                          <p className="text-neutral-600 text-xs md:text-sm line-clamp-2 mb-2 sm:mb-3 hidden sm:block">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 sm:gap-4 text-xs text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <Camera className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                    No events found
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
        {selectedEvent && (
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
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
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
              className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full md:w-3/5 h-64 sm:h-80 md:h-auto md:min-h-[500px] flex-shrink-0">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
                <Badge
                  variant="secondary"
                  className="w-fit bg-primary-50 text-primary-700 mb-4"
                >
                  {categories.find((c) => c.value === selectedEvent.category)?.label}
                </Badge>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-neutral-600">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Date</p>
                      <p className="font-medium text-neutral-900">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Location</p>
                      <p className="font-medium text-neutral-900">{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-wrap gap-3">
                  <Button asChild className="flex-1 sm:flex-none">
                    <Link href="/programs">
                      View Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1 sm:flex-none">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {filteredEvents.length}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Heart className="w-4 h-4" />
              Be Part of Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Us in Making Healthcare Accessible
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether as a partner, volunteer, or beneficiary - there are many ways to be part
              of our mission to bring quality healthcare to every community in the North West Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100"
                asChild
              >
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <Link href="/health">Learn About UHC</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
