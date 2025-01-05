import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { TableOfContents } from "./TableOfContents";
import { StatusSection } from "./StatusSection";
import { ReviewSection } from "./ReviewSection";
import { SarSection } from "./SarSection";
import { FaqSection } from "./FaqSection";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export const FafsaReviewContent = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "12 min read";

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
        <title>Comprehensive Guide: Checking, Reviewing, and Understanding Your FAFSA Submission</title>
        <meta name="description" content="Learn how to check your FAFSA status, review and correct errors, and understand your Student Aid Report (SAR). Step-by-step guide for managing your FAFSA submission." />
        <meta name="keywords" content="FAFSA review, FAFSA status check, SAR report, FAFSA corrections, Student Aid Report, financial aid status" />
        <meta property="og:title" content="Guide to Reviewing Your FAFSA Submission" />
        <meta property="og:description" content="Complete guide to checking your FAFSA status, making corrections, and understanding your Student Aid Report (SAR)." />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-review-guide" />
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
            Comprehensive Guide: Checking, Reviewing, and Understanding Your FAFSA Submission
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn how to verify your FAFSA status, make corrections, and understand your Student Aid Report (SAR) to maximize your chances of receiving financial aid.
          </p>
        </header>

        <TableOfContents />

        <div className="mt-12 space-y-16">
          <StatusSection />
          <ReviewSection />
          <SarSection />
          <FaqSection />
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