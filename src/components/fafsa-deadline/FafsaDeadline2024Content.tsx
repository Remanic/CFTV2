import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { DeadlineHeader } from "./shared/DeadlineHeader";
import { KeyDeadlines } from "./shared/KeyDeadlines";
import { RequiredDocuments } from "./shared/RequiredDocuments";
import { FAQSection } from "./shared/FAQSection";
import { StateDeadlineFinder } from "./StateDeadlineFinder";

export const FafsaDeadline2024Content = () => {
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
    { state: "California", date: "March 2, 2024" },
    { state: "Texas", date: "January 15, 2024" },
    { state: "New York", date: "May 1, 2024" },
    { state: "Florida", date: "May 15, 2024" },
    { state: "Illinois", date: "As soon as possible after October 1, 2023" }
  ];

  const generalFaqs = [
    {
      question: "When does the FAFSA open for 2024-2025?",
      answer: "December 31, 2023"
    },
    {
      question: "Do I need to submit a FAFSA every year?",
      answer: "Yes, you must submit a new FAFSA for each academic year you want to receive financial aid."
    },
    {
      question: "What if I'm an independent student?",
      answer: "Independent students only need to provide their own financial information (and their spouse's if married) on the FAFSA."
    }
  ];

  const deadlineFaqs = [
    {
      question: "What happens if I miss the federal deadline?",
      answer: "If you miss the federal deadline, you won't be eligible for federal aid for that academic year. Submit as early as possible to maximize your aid opportunities."
    },
    {
      question: "Can I submit the FAFSA after my state's deadline?",
      answer: "While you can still submit for federal aid, you may miss out on state-specific grants and scholarships if you submit after your state's deadline."
    },
    {
      question: "What if I have multiple schools with different deadlines?",
      answer: "Submit your FAFSA by the earliest deadline to ensure you're considered for aid at all schools."
    }
  ];

  const lifeSavingTips = [
    {
      question: "What should I do if I lose access to my FSA ID?",
      answer: "Visit StudentAid.gov and use the 'Forgot Username/Password' feature to recover your FSA ID quickly."
    },
    {
      question: "How can I ensure I don't miss important updates?",
      answer: "Enable notifications on your StudentAid.gov account and check your email regularly for updates about your FAFSA status."
    },
    {
      question: "What if I need help completing my FAFSA?",
      answer: "Contact your school's financial aid office, attend a FAFSA workshop, or call the Federal Student Aid Information Center at 1-800-4-FED-AID."
    }
  ];

  return (
    <main className="flex-grow">
      <Helmet>
        <title>FAFSA Deadlines 2024-2025 | Complete Federal & State Aid Application Guide</title>
        <meta name="description" content="Essential FAFSA deadlines for 2024-2025 academic year. Federal deadline June 30, 2025. State deadlines vary. Submit early for maximum financial aid opportunities." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <DeadlineHeader year="2024-2025" readingTime="8 min read" />
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="lead text-xl text-gray-600">
            Submitting your FAFSA (Free Application for Federal Student Aid) on time is essential to maximize your chances of receiving financial aid for the 2024-2025 academic year. Missing the deadline can significantly reduce the amount of aid available to you. This guide outlines all the essential deadlines, tips, and frequently asked questions to help you stay on track.
          </p>
        </div>
        
        <KeyDeadlines 
          federalDeadline="June 30, 2025"
          openingDate="December 31, 2023"
          stateDeadlines={[]}
        />

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">State Deadlines Finder</h2>
          <StateDeadlineFinder />
        </section>
        
        <section className="mt-12">
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
                <span>Submit Early - File your FAFSA as soon as it opens to maximize aid opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">2.</span>
                <span>Stay Organized - Keep track of all deadlines and maintain copies of your submissions.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">3.</span>
                <span>Use Online Tools - Utilize the IRS DRT and FAFSA4caster for accurate and efficient filing.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">4.</span>
                <span>Seek Guidance - Reach out to financial aid offices or attend workshops for expert help.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">5.</span>
                <span>Follow Up - Monitor your FAFSA status and address any flagged issues promptly.</span>
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