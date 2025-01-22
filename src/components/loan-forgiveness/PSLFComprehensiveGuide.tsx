import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./pslf-guide/TableOfContents";
import { FaqSection } from "./pslf-guide/FaqSection";
import { Helmet } from "react-helmet";

export const PSLFComprehensiveGuide = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "15 min read";

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
        <title>Comprehensive Guide to Public Service Loan Forgiveness (PSLF) | Complete Information</title>
        <meta name="description" content="In-depth guide to Public Service Loan Forgiveness (PSLF). Learn about eligibility, requirements, application process, and expert tips for successful loan forgiveness." />
        <meta name="keywords" content="PSLF guide, Public Service Loan Forgiveness, student loan forgiveness, federal student loans, loan forgiveness requirements, PSLF application process" />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Comprehensive Guide: Public Service Loan Forgiveness (PSLF)
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
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

        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <TableOfContents />
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
            The Public Service Loan Forgiveness (PSLF) program is a pivotal financial relief initiative for individuals committed to serving the public through their careers. This guide offers detailed, up-to-date information, actionable steps, and solutions to common challenges.
          </p>

          <section id="what-is-pslf" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is PSLF?</h2>
            <p>PSLF is a federal program aimed at forgiving the remaining balance of Direct Loans for eligible borrowers who meet specific criteria:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work full-time for a qualifying public service employer</li>
              <li>Make 120 qualifying monthly payments under a designated repayment plan</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Important Update for 2024:</p>
              <p>The Department of Education has implemented several changes to make PSLF more accessible.</p>
            </div>
          </section>

          <section id="eligibility" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Eligibility Requirements</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Employment Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full-time employment (at least 30 hours per week) with a qualifying employer</li>
              <li>Government organizations (federal, state, local, or tribal)</li>
              <li>Non-profit organizations that are tax-exempt under Section 501(c)(3)</li>
              <li>Other non-profit organizations providing qualifying public services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">2. Loan Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only Direct Loans or loans consolidated into Direct Loans qualify</li>
              <li>Loans must not be in default</li>
              <li>Private student loans are not eligible</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold">Pro Tip:</p>
              <p>Use the PSLF Help Tool on StudentAid.gov to verify your employer's eligibility and track your progress.</p>
            </div>
          </section>

          <section id="application-process" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Application Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Submit Employment Certification Form</strong>
                <p>Submit the PSLF Form annually and whenever you change employers.</p>
              </li>
              <li>
                <strong>Track Your Qualifying Payments</strong>
                <p>Keep detailed records of your payments and employment history.</p>
              </li>
              <li>
                <strong>Submit Final Application</strong>
                <p>After making 120 qualifying payments, submit the PSLF application.</p>
              </li>
            </ol>
          </section>

          <section id="payment-tracking" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Payment Tracking</h2>
            <p>To ensure your payments count toward PSLF:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make payments on time</li>
              <li>Pay the full amount due</li>
              <li>Make payments under a qualifying repayment plan</li>
              <li>Work full-time for a qualifying employer during each payment</li>
            </ul>
          </section>

          <FaqSection />
        </article>
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