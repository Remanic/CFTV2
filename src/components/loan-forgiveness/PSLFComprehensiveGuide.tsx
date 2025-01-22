import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
            The Public Service Loan Forgiveness (PSLF) program is a pivotal financial relief initiative for individuals committed to serving the public through their careers. This program allows federal student loan borrowers to have their loans forgiven after meeting specific requirements, alleviating significant financial burdens. However, understanding and navigating the PSLF process can be daunting due to its complexity. This guide offers detailed, up-to-date information, actionable steps, and solutions to common challenges, ensuring you have everything needed to successfully achieve loan forgiveness.
          </p>

          <section id="what-is-pslf" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is PSLF?</h2>
            <p>PSLF is a federal program aimed at forgiving the remaining balance of Direct Loans for eligible borrowers who meet the following criteria:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Work full-time for a qualifying public service employer.</li>
              <li>Make 120 qualifying monthly payments under a designated repayment plan.</li>
            </ol>
          </section>

          <section id="steps-to-qualify" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Steps to Qualify for PSLF</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Verify Employment Eligibility</h3>
            <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Eligible Employers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government organizations (federal, state, local, or tribal)</li>
                <li>Nonprofit organizations with 501(c)(3) tax-exempt status</li>
                <li>Other nonprofits providing public services</li>
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

          <section id="common-pitfalls" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Late payments</li>
              <li>Ineligible loans or employers</li>
              <li>Failure to submit the PSLF Form</li>
              <li>Skipping IDR plan recertification</li>
              <li>Missing temporary waivers</li>
            </ul>
          </section>

          <section id="faqs" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">FAQs About PSLF</h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-semibold">Q: Is PSLF taxable?</p>
                <p>A: No, loan forgiveness under PSLF is not taxable income.</p>
              </div>
              
              <div>
                <p className="font-semibold">Q: Does my job title matter?</p>
                <p>A: No, eligibility depends on your employer, not your job title.</p>
              </div>
              
              <div>
                <p className="font-semibold">Q: Can part-time work qualify?</p>
                <p>A: Yes, if you work part-time for multiple qualifying employers, totaling at least 30 hours weekly.</p>
              </div>
            </div>
          </section>

          <section id="tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for PSLF Success</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Document Everything</strong>
                <p>Maintain detailed records of forms, payments, and certifications.</p>
              </li>
              <li>
                <strong>Stay Updated</strong>
                <p>Keep in contact with your loan servicer for important updates.</p>
              </li>
              <li>
                <strong>Leverage Temporary Opportunities</strong>
                <p>Take advantage of temporary waivers when available.</p>
              </li>
              <li>
                <strong>Avoid Scams</strong>
                <p>Only use official resources like StudentAid.gov.</p>
              </li>
            </ol>
          </section>

          <section id="final-steps" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Final Steps</h2>
            <p>
              PSLF is a transformative opportunity for public service professionals to eliminate their student loan debt. 
              Start today by using the PSLF Help Tool, submitting employment certifications regularly, and staying informed of updates. 
              Visit StudentAid.gov to begin your PSLF journey and secure a brighter financial future!
            </p>
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