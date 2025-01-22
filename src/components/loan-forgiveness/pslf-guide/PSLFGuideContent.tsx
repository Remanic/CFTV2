import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./TableOfContents";
import { FaqSection } from "./FaqSection";
import { Helmet } from "react-helmet";

export const PSLFGuideContent = () => {
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
        <meta name="description" content="Learn about PSLF eligibility, requirements, application process, and expert tips for successful loan forgiveness. Step-by-step guide to navigate the PSLF program." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guide: Public Service Loan Forgiveness (PSLF)
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

        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <TableOfContents />
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            The Public Service Loan Forgiveness (PSLF) program is a pivotal financial relief initiative for individuals committed to serving the public through their careers. This program allows federal student loan borrowers to have their loans forgiven after meeting specific requirements, alleviating significant financial burdens.
          </p>

          <section id="what-is-pslf" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is PSLF?</h2>
            <p>PSLF is a federal program aimed at forgiving the remaining balance of Direct Loans for eligible borrowers who meet specific criteria:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work full-time for a qualifying public service employer</li>
              <li>Make 120 qualifying monthly payments under a designated repayment plan</li>
            </ul>
          </section>

          <section id="eligibility" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Steps to Qualify for PSLF</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Verify Employment Eligibility</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Eligible Employers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government organizations (federal, state, local, or tribal)</li>
                <li>Nonprofit organizations with 501(c)(3) tax-exempt status</li>
                <li>Other nonprofits providing qualifying public services</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">2. Consolidate Ineligible Loans</h3>
            <p>Only Direct Loans qualify for PSLF. Other federal loans must be consolidated into a Direct Consolidation Loan.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">3. Enroll in a Qualifying Repayment Plan</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Income-Based Repayment (IBR)</li>
              <li>Pay As You Earn (PAYE)</li>
              <li>Revised Pay As You Earn (REPAYE)</li>
              <li>Income-Contingent Repayment (ICR)</li>
            </ul>
          </section>

          <section id="payments" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Making Qualifying Payments</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold">Payment Requirements:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Must be made on time</li>
                <li>Must be paid in full</li>
                <li>Must be made under a qualifying repayment plan</li>
                <li>Must be made while working full-time for a qualifying employer</li>
              </ul>
            </div>
          </section>

          <section id="tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for PSLF Success</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-3">Document Everything</h3>
                <p>Maintain detailed records of forms, payments, and certifications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold mb-3">Stay Updated</h3>
                <p>Keep in contact with your loan servicer and verify account details regularly.</p>
              </div>
            </div>
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