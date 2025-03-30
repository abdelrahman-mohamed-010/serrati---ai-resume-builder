"use client";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Templates } from "@/components/landing/templates";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { Pricing } from "@/components/landing/pricing";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
