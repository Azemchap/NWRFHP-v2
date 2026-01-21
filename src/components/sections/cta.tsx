"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { SlideInUp } from "@/components/animations/slide-in-up";

export function CTASection() {
  return (
    <section className="border-t bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <SlideInUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Join us in our mission to provide quality healthcare for all residents
              of the North West Region. Together, we can build a healthier community.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+237651421052">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </SlideInUp>
      </div>
    </section>
  );
}
