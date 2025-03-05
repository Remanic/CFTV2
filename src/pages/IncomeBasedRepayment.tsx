
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { IDRIntroduction } from "@/components/loan-repayment/IDRIntroduction";
import { IDRPlansSection } from "@/components/loan-repayment/IDRPlansSection";
import { ForgivenessSection } from "@/components/loan-repayment/ForgivenessSection";
import { EligibilitySection } from "@/components/loan-repayment/EligibilitySection";
import { TipsSection } from "@/components/loan-repayment/TipsSection";
import { ApplicationSection } from "@/components/loan-repayment/ApplicationSection";
import { PitfallsSection } from "@/components/loan-repayment/PitfallsSection";
import { ExampleSection } from "@/components/loan-repayment/ExampleSection";
import { WhyUseSection } from "@/components/loan-repayment/WhyUseSection";
import { FAQAccordion } from "@/components/loan-repayment/FAQAccordion";

const sections = [
  { id: "what-is-idr", title: "1. What Are IDR Plans?" },
  { id: "why-use", title: "2. Why Choose an IDR Plan?" },
  { id: "types-of-idr", title: "3. Types of IDR Plans" },
  { id: "forgiveness", title: "4. How IDR Leads to Forgiveness" },
  { id: "eligibility", title: "5. Eligibility Requirements" },
  { id: "how-to-apply", title: "6. How to Apply" },
  { id: "pitfalls", title: "7. Common Pitfalls" },
  { id: "tips-and-hacks", title: "8. Strategies for Success" },
  { id: "example", title: "9. Real-World Example" },
  { id: "faqs", title: "10. FAQs" },
];

const IncomeBasedRepayment = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setProgress(progress);
      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Complete Guide to Income-Driven Repayment (IDR) Plans 2025</title>
        <meta 
          name="description" 
          content="Learn about Income-Driven Repayment (IDR) Plans, including SAVE, PAYE, IBR, and ICR. Find out how to lower your student loan payments based on your income." 
        />
      </Helmet>

      <Header />

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Income-Driven Repayment (IDR) Plans
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to make your student loan payments more affordable through Income-Driven Repayment plans.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <h4 className="font-semibold text-gray-900 mb-2">On this page</h4>
          <ul className="space-y-1.5 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-blue-600 hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-16">
          <IDRIntroduction />
          <WhyUseSection />
          <IDRPlansSection />
          <ForgivenessSection />
          <EligibilitySection />
          <ApplicationSection />
          <PitfallsSection />
          <TipsSection />
          <ExampleSection />
          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQs: Your Top IDR and Forgiveness Questions</h2>
            <FAQAccordion />
          </section>
        </div>
      </main>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default IncomeBasedRepayment;
