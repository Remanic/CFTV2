
import { Hero } from "@/components/Hero";
import { WhyNeedGuide } from "@/components/WhyNeedGuide";
import { LoanComparison } from "@/components/LoanComparison";
import { QuickUnderstand } from "@/components/QuickUnderstand";
import { FafsaGuide } from "@/components/FafsaGuide";
import { LoanForgivenessPrograms } from "@/components/LoanForgivenessPrograms";
import { LoanRepaymentSection } from "@/components/loan-repayment/LoanRepaymentSection";
import { AffiliateLoanSection } from "@/components/AffiliateLoanSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import TestimonialSection from "@/components/hero/TestimonialSection";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4); // Updated for 4 testimonials
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <div className="container mx-auto px-4 py-12">
          <TestimonialSection currentTestimonial={currentTestimonial} />
        </div>
        <WhyNeedGuide />
        <AffiliateLoanSection />
        <FafsaGuide />
        <LoanForgivenessPrograms />
        <LoanRepaymentSection />
        <LoanComparison />
        <QuickUnderstand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
