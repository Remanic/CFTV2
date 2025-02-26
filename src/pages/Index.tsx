
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
import { useLocation } from "react-router-dom";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  // If we're already on the index page and try to navigate to index, prevent the navigation
  useEffect(() => {
    if (location.pathname === "/" && location.state?.from === "/") {
      window.history.replaceState(null, "", "/");
    }
  }, [location]);

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
