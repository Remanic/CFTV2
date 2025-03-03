
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
import { CtaBanner } from "@/components/CtaBanner";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoanJourneyQuiz } from "@/components/quiz/LoanJourneyQuiz";
import { QuizProvider } from "@/components/quiz/QuizContext";
import { FloatingQuizButton } from "@/components/quiz/FloatingQuizButton";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const location = useLocation();

  // Optimize testimonial timing - reduced animation frequency 
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 4);
    }, 15000); // Further increased from 12000 to 15000 ms for even less frequent transitions
    return () => clearInterval(testimonialTimer);
  }, []);

  // Scroll to section only when needed
  useEffect(() => {
    if (location.state?.scrollToSection) {
      const section = document.getElementById(location.state.scrollToSection);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
      
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Prevent unnecessary navigation
  useEffect(() => {
    if (location.pathname === "/" && location.state?.from === "/") {
      window.history.replaceState(null, "", "/");
    }
  }, [location]);

  return (
    <QuizProvider>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Hero />
          <LoanJourneyQuiz />
          <WhyNeedGuide />
          
          <div className="py-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
          </div>
          
          <HowItWorks />
          
          <section className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800 font-playfair">Student Success Stories</h3>
              <TestimonialSection currentTestimonial={currentTestimonial} />
            </div>
          </section>
          
          <div className="py-4 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
          </div>
          
          <QuickUnderstand />
          <FafsaGuide />
          <AffiliateLoanSection />
          <LoanComparison />
          <LoanRepaymentSection />
          <LoanForgivenessPrograms />
          <CtaBanner />
          <BackToTop />
          <FloatingQuizButton />
        </main>
        <Footer />
      </div>
    </QuizProvider>
  );
};

export default Index;
