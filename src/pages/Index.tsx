
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
import { BackToTop } from "@/components/BackToTop";
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

  // Scroll to section if returning from another page
  useEffect(() => {
    if (location.state?.scrollToSection) {
      const section = document.getElementById(location.state.scrollToSection);
      if (section) {
        // Give a little delay to ensure the page is loaded
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
      
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // If we're already on the index page and try to navigate to index, prevent the navigation
  useEffect(() => {
    if (location.pathname === "/" && location.state?.from === "/") {
      window.history.replaceState(null, "", "/");
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          </div>
        </div>
        <HowItWorks />
        <div className="py-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <TestimonialSection currentTestimonial={currentTestimonial} />
        </div>
        <div className="py-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
        <WhyNeedGuide />
        <div className="py-4 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
        <AffiliateLoanSection />
        <FafsaGuide />
        <LoanForgivenessPrograms />
        <LoanRepaymentSection />
        <LoanComparison />
        <QuickUnderstand />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
