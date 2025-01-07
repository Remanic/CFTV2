import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { DeadlineHeader } from "./shared/DeadlineHeader";
import { KeyDeadlines } from "./shared/KeyDeadlines";
import { RequiredDocuments } from "./shared/RequiredDocuments";
import { FAQSection } from "./shared/FAQSection";
import { StateDeadlineFinder2025 } from "./StateDeadlineFinder2025";

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
    { state: "Florida", date: "May 15, 2025" },
    { state: "Illinois", date: "As soon as possible after October 1, 2024" }
  ];

  const generalFaqs = [
    {
      question: "When does the FAFSA open for 2025-2026?",
      answer: "October 1, 2024"
    },
    {
      question: "Do I need to submit a FAFSA every year?",
      answer: "Yes, financial aid eligibility is reassessed annually"
    },
    {
      question: "What if I'm an independent student?",
      answer: "You'll only need your own financial information, not your parents'"
    }
  ];

  const deadlineFaqs = [
    {
      question: "What happens if I miss the federal deadline?",
      answer: "You won't be eligible for federal aid for that academic year"
    },
    {
      question: "Can I submit the FAFSA after my state's deadline?",
      answer: "You may still qualify for federal aid but will miss state-specific grants and scholarships"
    },
    {
      question: "What if I have multiple schools with different deadlines?",
      answer: "Submit your FAFSA before the earliest deadline to ensure eligibility across all schools"
    }
  ];

  const lifeSavingTips = [
    {
      question: "What should I do if I lose access to my FSA ID?",
      answer: "Use the 'Forgot Username/Password' feature on StudentAid.gov to recover it quickly"
    },
    {
      question: "How can I ensure I don't miss important updates?",
      answer: "Enable notifications on your FAFSA account and check your email regularly"
    },
    {
      question: "What if I need help completing my FAFSA?",
      answer: "Reach out to your school's financial aid office or attend a local FAFSA workshop"
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
        <DeadlineHeader year="2025-2026" readingTime="8 min read" />
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="lead text-xl text-gray-600">
            Submitting the FAFSA (Free Application for Federal Student Aid) on time is crucial for maximizing your financial aid opportunities. Missing the deadline can significantly reduce the amount of aid available to you. This guide outlines all the essential deadlines, tips, and frequently asked questions to help you stay on track for the 2025-2026 academic year.
          </p>
        </div>
        
        <KeyDeadlines 
          federalDeadline="June 30, 2026"
          openingDate="October 1, 2024"
          stateDeadlines={stateDeadlines}
        />
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">State Deadlines Finder</h2>
          <StateDeadlineFinder2025 />
        </section>
        
        <section id="faq" className="scroll-mt-20 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQSection title="General FAQs" faqs={generalFaqs} />
            <FAQSection title="Deadline-Specific FAQs" faqs={deadlineFaqs} />
            <FAQSection title="Life-Saving Tips" faqs={lifeSavingTips} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Final Tips for Success</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">1.</span>
                <span>Mark Your Calendar - Set reminders for key deadlines to avoid last-minute stress.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">2.</span>
                <span>Use Online Tools - The FAFSA4caster on StudentAid.gov can help estimate your aid eligibility.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">3.</span>
                <span>Seek Assistance - Attend FAFSA workshops or ask your school's financial aid office for help if needed.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">4.</span>
                <span>Monitor Your Status - Regularly check your FAFSA dashboard for updates or requests for additional information.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">5.</span>
                <span>File Early Even if Incomplete - Submit your FAFSA with the best estimates if waiting for tax information. Corrections can be made later.</span>
              </li>
            </ul>
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
