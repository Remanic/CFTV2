import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export const FafsaDeadline2024Content = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "5 min read";

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
    <main className="flex-grow">
      <Helmet>
        <title>FAFSA Deadlines 2024-2025 | Federal & State Aid Application Due Dates</title>
        <meta name="description" content="Complete guide to FAFSA deadlines 2024-2025. Federal deadline June 30, 2025. State deadlines vary. Submit early for maximum financial aid opportunities." />
        <meta name="keywords" content="FAFSA deadline 2024-2025, FAFSA due date 2024, financial aid deadline, FAFSA submission date, college financial aid 2024" />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-deadline-2024-2025" />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAFSA Deadlines for 2024-2025: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Essential Guide
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Submitting your FAFSA (Free Application for Federal Student Aid) on time is essential to maximize your chances of receiving financial aid for the 2024-2025 academic year. This guide provides key deadlines, actionable steps, and tips to ensure a smooth FAFSA submission process.
          </p>

          <section id="key-deadlines" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key FAFSA Deadlines for 2024-2025</h2>
            
            <h3 className="text-xl font-semibold mb-4">Federal Deadline</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Deadline:</strong> June 30, 2025</li>
              <li><strong>Details:</strong> The federal deadline applies to all applicants. To avoid missing out on aid, submit your FAFSA as early as possible, starting from October 1, 2023.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">State Deadlines</h3>
            <p>State-specific deadlines vary and may differ from the federal deadline. Here are some examples:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>California:</strong> March 2, 2024</li>
              <li><strong>Texas:</strong> Priority deadline is January 15, 2024</li>
              <li><strong>New York:</strong> May 1, 2024</li>
              <li><strong>Florida:</strong> May 15, 2024</li>
              <li><strong>Illinois:</strong> As soon as possible after October 1, 2023</li>
            </ul>
          </section>

          <section id="early-submission" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Why Early Submission is Important</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Priority for Limited Funds</h3>
                <p>Many state and institutional aid programs award funds on a first-come, first-served basis.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Time to Address Issues</h3>
                <p>Submitting early allows time to resolve errors or provide additional documentation if needed.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Meeting All Deadlines</h3>
                <p>Early submission ensures you meet federal, state, and institutional deadlines.</p>
              </div>
            </div>
          </section>

          <section id="completion-steps" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Steps to Complete Your FAFSA for 2024-2025</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">1. Gather Required Documents</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Social Security numbers or Alien Registration Numbers (if applicable)</li>
                  <li>2022 tax returns and W-2 forms</li>
                  <li>Records of untaxed income</li>
                  <li>FSA ID (create one at StudentAid.gov if you don't have one)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">2. Start Your FAFSA Application</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visit StudentAid.gov and log in with your FSA ID</li>
                  <li>Choose the application for the 2024-2025 academic year</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

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
