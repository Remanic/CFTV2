import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export const FafsaDeadline2025Content = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "10 min read";

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
        <title>FAFSA Deadlines 2025-2026: Complete Guide & Important Dates | Federal & State Deadlines</title>
        <meta name="description" content="Essential FAFSA deadlines for 2025-2026 academic year. Federal deadline June 30, 2026. State-specific deadlines and tips for maximizing financial aid opportunities." />
        <meta name="keywords" content="FAFSA deadline 2025-2026, FAFSA due date, financial aid deadline, college application deadline, FAFSA submission date" />
        <meta property="og:title" content="FAFSA Deadlines 2025-2026: Complete Guide & Important Dates" />
        <meta property="og:description" content="Comprehensive guide to FAFSA deadlines for 2025-2026. Learn about federal, state, and college-specific deadlines to maximize your financial aid." />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-deadline-2025-2026" />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
          style={{
            '--progress-background': '#9b87f5',
            '--progress-foreground': '#7E69AB'
          } as React.CSSProperties}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guide: FAFSA Deadline for the Academic Year 2025-2026
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Complete Guide
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            Submitting the FAFSA (Free Application for Federal Student Aid) on time is crucial for maximizing your financial aid opportunities. Missing the deadline can significantly reduce the amount of aid available to you. This guide outlines all the essential deadlines, tips, and frequently asked questions to help you stay on track for the 2025-2026 academic year.
          </p>

          <section id="key-deadlines" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key FAFSA Deadlines for 2025-2026</h2>
            
            <h3 className="text-xl font-semibold mb-4">Federal Deadline</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Deadline:</strong> June 30, 2026</li>
              <li><strong>Details:</strong> The federal deadline applies to all applicants. However, submitting closer to October 1, 2024 (when the FAFSA opens), ensures priority consideration for aid.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">State Deadlines</h3>
            <p>Each state sets its own FAFSA deadline for state-specific grants and scholarships. Below are some examples:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>California:</strong> March 2, 2025</li>
              <li><strong>Texas:</strong> Priority deadline is January 15, 2025</li>
              <li><strong>New York:</strong> May 1, 2025</li>
              <li><strong>Florida:</strong> May 15, 2025</li>
              <li><strong>Illinois:</strong> As soon as possible after October 1, 2024</li>
            </ul>
          </section>

          <section id="early-submission" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Why Submitting Early Matters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Maximize Aid Opportunities</h3>
                <p>Many grants and scholarships are awarded on a first-come, first-served basis.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Resolve Issues Promptly</h3>
                <p>Submitting early allows time to correct errors or provide additional documentation if required.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Meet All Deadlines</h3>
                <p>Early submission ensures you meet federal, state, and institutional deadlines.</p>
              </div>
            </div>
          </section>

          <section id="completion-steps" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Steps to Complete the FAFSA for 2025-2026</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">1. Gather Required Documents</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Social Security numbers (or Alien Registration Number for non-U.S. citizens)</li>
                  <li>2023 tax returns and W-2 forms</li>
                  <li>Records of untaxed income</li>
                  <li>FSA ID (create one at StudentAid.gov if you don't have one)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">2. Fill Out the FAFSA</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visit StudentAid.gov and log in with your FSA ID</li>
                  <li>Provide accurate information, especially about income and household size</li>
                  <li>Use the IRS Data Retrieval Tool (DRT) to transfer tax data directly from the IRS</li>
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