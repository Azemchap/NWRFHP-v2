"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    question: "What is the Health Voucher program and how does it work?",
    answer: "The Health Voucher program allows pregnant women to access quality maternal care for just FCFA 6,000. This covers 4 antenatal visits, safe delivery (including C-sections if needed), and care for mother and baby up to 42 days after birth. Simply register at any participating health facility to get your Health Voucher.",
  },
  {
    question: "How can I access free consultation for my child under 5?",
    answer: "Children aged 0-5 years can receive free medical consultations at any of our enrolled government health facilities. Simply visit the facility with your child and inform the staff that you want to access the UHC child health services. No registration fee is required.",
  },
  {
    question: "What is covered under the dialysis program?",
    answer: "For an annual fee of FCFA 15,000, registered patients can access unlimited hemodialysis sessions at the Bamenda Reference Hospital. This is a significant saving from the normal cost of FCFA 520,000. Registration is done at the hospital's hemodialysis center.",
  },
  {
    question: "Are HIV/AIDS and TB treatments really free?",
    answer: "Yes, persons living with HIV/AIDS and TB patients receive free treatment including consultations, laboratory tests, and medications (including ARVs) at all enrolled health facilities. Simply visit any health center to get started with testing and treatment.",
  },
  {
    question: "How do I find a community pharmacy near me?",
    answer: `NWRFHP operates ${siteConfig.stats.communityPharmacies} community pharmacies across all ${siteConfig.stats.healthDistricts} health districts in the North West Region. Contact us at ${siteConfig.contact.phone.primary} or visit our office in ${siteConfig.location.city} for information about the nearest community pharmacy to your location.`,
  },
  {
    question: "Can I become a community health worker?",
    answer: "Yes! We regularly recruit and train community health workers to support our programs. If you're interested in contributing to healthcare in your community, please contact us through our website or visit our office to learn about current opportunities.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 rounded-full"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6"
            >
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-neutral-600 mb-8"
            >
              Find answers to common questions about our healthcare programs and services.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary-50 border border-primary-100"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Still have questions?</h3>
                <p className="text-sm text-neutral-600 mb-2">
                  Our team is here to help you with any inquiries.
                </p>
                <a
                  href="/contact"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Contact us →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - FAQ Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="rounded-2xl border border-neutral-200 overflow-hidden hover:border-primary-200 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-neutral-600 leading-relaxed border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
