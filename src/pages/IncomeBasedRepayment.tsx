
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { IDRIntroduction } from "@/components/loan-repayment/IDRIntroduction";
import { IDRPlansSection } from "@/components/loan-repayment/IDRPlansSection";
import { TipsSection } from "@/components/loan-repayment/TipsSection";
import { ApplicationSection } from "@/components/loan-repayment/ApplicationSection";
import { LatestChangesSection } from "@/components/loan-repayment/LatestChangesSection";
import { WhyUseSection } from "@/components/loan-repayment/WhyUseSection";
import { FAQAccordion } from "@/components/loan-repayment/FAQAccordion";

const sections = [
  { id: "what-is-idr", title: "1. What Are IDR Plans?" },
  { id: "types-of-idr", title: "2. Types of IDR Plans" },
  { id: "tips-and-hacks", title: "3. Tips and Hacks" },
  { id: "how-to-apply", title: "4. How to Apply" },
  { id: "latest-changes", title: "5. Latest Changes" },
  { id: "why-use", title: "6. Why Use IDR?" },
  { id: "faqs", title: "7. FAQs" },
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

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <IDRIntroduction />
          <IDRPlansSection />
          <TipsSection />
          <ApplicationSection />
          <LatestChangesSection />
          <WhyUseSection />
          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About Income-Driven Repayment Plans</h2>
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
