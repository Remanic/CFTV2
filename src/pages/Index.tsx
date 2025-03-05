
import { lazy, Suspense, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Hero } from "@/components/Hero";
import { WhyNeedGuide } from "@/components/WhyNeedGuide";
import { Header } from "@/components/Header";
import { LoanJourneyQuiz } from "@/components/quiz/LoanJourneyQuiz";
import { QuizProvider } from "@/components/quiz/QuizContext";
import { FloatingQuizButton } from "@/components/quiz/FloatingQuizButton";

// Above the fold critical components
import { HowItWorks } from "@/components/HowItWorks";

// Lazy load below-the-fold components
const TestimonialSection = lazy(() => import("@/components/hero/TestimonialSection"));
const AffiliateLoanSection = lazy(() => import("@/components/AffiliateLoanSection").then(m => ({ default: m.AffiliateLoanSection })));
const FafsaGuide = lazy(() => import("@/components/FafsaGuide").then(m => ({ default: m.FafsaGuide })));
const LoanComparison = lazy(() => import("@/components/LoanComparison").then(m => ({ default: m.LoanComparison })));
const LoanRepaymentSection = lazy(() => import("@/components/loan-repayment/LoanRepaymentSection").then(m => ({ default: m.LoanRepaymentSection })));
const LoanForgivenessPrograms = lazy(() => import("@/components/LoanForgivenessPrograms").then(m => ({ default: m.LoanForgivenessPrograms })));
const QuickUnderstand = lazy(() => import("@/components/QuickUnderstand").then(m => ({ default: m.QuickUnderstand })));
const CtaBanner = lazy(() => import("@/components/CtaBanner").then(m => ({ default: m.CtaBanner })));
const BackToTop = lazy(() => import("@/components/BackToTop").then(m => ({ default: m.BackToTop })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Lightweight fallback component
const SectionFallback = ({ height = "300px" }: { height?: string }) => (
  <div className="flex justify-center items-center py-8" style={{ height }}>
    <LoadingSpinner />
  </div>
);

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const location = useLocation();
  const [isClient, setIsClient] = useState(false);

  // Set client-side rendering flag to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimize testimonial timing - reduced animation frequency 
  useEffect(() => {
    // Only start testimonial timer if visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const testimonialTimer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % 4);
          }, 15000);
          return () => clearInterval(testimonialTimer);
        }
      },
      { threshold: 0.1 }
    );

    const testimonialSection = document.getElementById("testimonial-section");
    if (testimonialSection) {
      observer.observe(testimonialSection);
    }

    return () => {
      if (testimonialSection) {
        observer.unobserve(testimonialSection);
      }
    };
  }, [isClient]);

  // Improved scroll to section with offset adjustment
  useEffect(() => {
    if (location.state?.scrollToSection) {
      const section = document.getElementById(location.state.scrollToSection);
      if (section) {
        const headerOffset = 80; 
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
          
          <section id="testimonial-section" className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800 font-playfair">Student Success Stories</h3>
              {isClient && (
                <Suspense fallback={<SectionFallback height="200px" />}>
                  <TestimonialSection currentTestimonial={currentTestimonial} />
                </Suspense>
              )}
            </div>
          </section>
          
          <div className="py-4 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
          </div>
          
          <div id="affiliate-loan-section">
            <Suspense fallback={<SectionFallback />}>
              <AffiliateLoanSection />
            </Suspense>
          </div>
          <div id="fafsa-guide">
            <Suspense fallback={<SectionFallback />}>
              <FafsaGuide />
            </Suspense>
          </div>
          <div id="loan-comparison">
            <Suspense fallback={<SectionFallback />}>
              <LoanComparison />
            </Suspense>
          </div>
          <div id="loan-repayment">
            <Suspense fallback={<SectionFallback />}>
              <LoanRepaymentSection />
            </Suspense>
          </div>
          <div id="loan-forgiveness">
            <Suspense fallback={<SectionFallback />}>
              <LoanForgivenessPrograms />
            </Suspense>
          </div>
          <div id="quick-understand">
            <Suspense fallback={<SectionFallback />}>
              <QuickUnderstand />
            </Suspense>
          </div>
          <Suspense fallback={<SectionFallback height="100px" />}>
            <CtaBanner />
          </Suspense>
          <Suspense fallback={null}>
            <BackToTop />
          </Suspense>
          <Suspense fallback={null}>
            <FloatingQuizButton />
          </Suspense>
        </main>
        <Suspense fallback={<div className="py-4 bg-gray-100 text-center">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </QuizProvider>
  );
};

export default Index;
