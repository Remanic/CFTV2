import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const PSLFContent = () => {
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
        <title>Public Service Loan Forgiveness (PSLF) Guide 2024 | Complete Information</title>
        <meta name="description" content="Comprehensive guide to Public Service Loan Forgiveness (PSLF). Learn about eligibility requirements, application process, and recent changes to the program." />
        <meta name="keywords" content="PSLF, Public Service Loan Forgiveness, student loan forgiveness, federal student loans, loan forgiveness requirements, PSLF application" />
        <link rel="canonical" href="https://yourwebsite.com/public-service-loan-forgiveness" />
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
            Complete Guide to Public Service Loan Forgiveness (PSLF)
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

        <article className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            The Public Service Loan Forgiveness (PSLF) program offers federal student loan forgiveness for eligible public service employees. This comprehensive guide explains everything you need to know about qualifying for and receiving PSLF.
          </p>

          <section id="what-is-pslf" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is PSLF?</h2>
            <p>PSLF is a federal program that forgives the remaining balance on your Direct Loans after you make 120 qualifying monthly payments while working full-time for qualifying employers. The program was created to encourage individuals to enter and continue careers in public service.</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Important Update for 2024:</p>
              <p>The Department of Education has implemented several changes to make PSLF more accessible, including the Limited PSLF Waiver and temporary flexibilities due to COVID-19.</p>
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

            <h3 className="text-xl font-semibold mt-6 mb-4">3. Payment Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>120 qualifying payments are required</li>
              <li>Payments must be made under a qualifying repayment plan</li>
              <li>Payments must be made while working for a qualifying employer</li>
            </ul>
          </section>

          <section id="application-process" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Application Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Submit Employment Certification Form:</strong>
                <p>Submit the PSLF Form annually and whenever you change employers to track your progress.</p>
              </li>
              <li>
                <strong>Track Your Qualifying Payments:</strong>
                <p>Keep records of your qualifying payments and employment history.</p>
              </li>
              <li>
                <strong>Submit Final Application:</strong>
                <p>After making 120 qualifying payments, submit the PSLF application for loan forgiveness.</p>
              </li>
            </ol>
          </section>

          <section id="tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Tips for Success</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit the PSLF Form annually to verify your employment and payments</li>
              <li>Keep detailed records of your employment history</li>
              <li>Enroll in an income-driven repayment plan</li>
              <li>Use the PSLF Help Tool on StudentAid.gov</li>
              <li>Stay informed about program changes and updates</li>
            </ul>
          </section>

          <section id="common-mistakes" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not submitting the PSLF Form regularly</li>
              <li>Making payments under the wrong repayment plan</li>
              <li>Working part-time instead of full-time</li>
              <li>Having the wrong type of loans</li>
              <li>Not recertifying income for income-driven repayment plans</li>
            </ul>
          </section>
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