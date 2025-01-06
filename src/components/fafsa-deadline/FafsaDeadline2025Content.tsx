import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { DeadlineHeader } from "./shared/DeadlineHeader";
import { KeyDeadlines } from "./shared/KeyDeadlines";
import { RequiredDocuments } from "./shared/RequiredDocuments";
import { FAQSection } from "./shared/FAQSection";

export const FafsaDeadline2025Content = () => {
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

  const stateDeadlines = [
    { state: "California", date: "March 2, 2025" },
    { state: "Texas", date: "January 15, 2025" },
    { state: "New York", date: "May 1, 2025" },
    { state: "Florida", date: "May 15, 2025" }
  ];

  const generalFaqs = [
    {
      question: "When does the FAFSA open for 2025-2026?",
      answer: "October 1, 2024"
    },
    {
      question: "Do I need to submit a FAFSA every year?",
      answer: "Yes, eligibility for financial aid is reassessed annually"
    }
  ];

  return (
    <main className="flex-grow">
      <Helmet>
        <title>FAFSA Deadlines 2025-2026 | Complete Federal & State Aid Application Guide</title>
        <meta name="description" content="Essential FAFSA deadlines for 2025-2026 academic year. Federal deadline June 30, 2026. State deadlines vary. Submit early for maximum financial aid opportunities." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <DeadlineHeader year="2025-2026" readingTime="5 min read" />
        
        <KeyDeadlines 
          federalDeadline="June 30, 2026"
          openingDate="October 1, 2024"
          stateDeadlines={stateDeadlines}
        />
        
        <RequiredDocuments />
        
        <section id="faq" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQSection title="General FAQs" faqs={generalFaqs} />
          </div>
        </section>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </main>
  );
};