import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { DeadlineHeader } from "./shared/DeadlineHeader";
import { KeyDeadlines } from "./shared/KeyDeadlines";
import { RequiredDocuments } from "./shared/RequiredDocuments";
import { FAQSection } from "./shared/FAQSection";

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
      answer: "October 1, 2023"
    },
    {
      question: "Do I need to submit a FAFSA every year?",
      answer: "Yes, eligibility for financial aid is reassessed annually"
    },
    {
      question: "What if my parents' financial situation has changed?",
      answer: "Contact your school's financial aid office to request a professional judgment review"
    },
    {
      question: "What happens if I miss the federal deadline?",
      answer: "You'll lose eligibility for federal aid for that academic year"
    },
    {
      question: "Can I correct my FAFSA after submission?",
      answer: "Yes, corrections can be made until June 30, 2025"
    }
  ];

  const deadlineFaqs = [
    {
      question: "Can I still qualify for state aid if I miss the state deadline?",
      answer: "Generally, no. State aid programs often adhere strictly to their deadlines"
    },
    {
      question: "What if I forgot to include a school?",
      answer: "Log in to your FAFSA account and add the school under 'Make FAFSA Corrections'"
    }
  ];

  const lifeSavingTips = [
    {
      question: "How can I avoid missing critical deadlines?",
      answer: "Set calendar reminders for federal, state, and school deadlines"
    },
    {
      question: "What if I need help completing the FAFSA?",
      answer: "Attend a FAFSA workshop or contact your school's financial aid office"
    },
    {
      question: "How can I track my FAFSA status?",
      answer: "Log in to your FAFSA dashboard regularly to monitor progress and resolve any issues"
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
          openingDate="October 1, 2023"
          stateDeadlines={stateDeadlines}
        />
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Why Early Submission is Important</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Priority for Limited Funds</h3>
              <p className="text-gray-600">Many state and institutional aid programs award funds on a first-come, first-served basis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Time to Address Issues</h3>
              <p className="text-gray-600">Submitting early allows time to resolve errors or provide additional documentation if needed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Meeting All Deadlines</h3>
              <p className="text-gray-600">Early submission ensures you meet federal, state, and institutional deadlines.</p>
            </div>
          </div>
        </section>
        
        <RequiredDocuments />
        
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