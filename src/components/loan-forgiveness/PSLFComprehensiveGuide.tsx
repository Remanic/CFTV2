import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./pslf-guide/TableOfContents";
import { FaqSection } from "./pslf-guide/FaqSection";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

export const PSLFComprehensiveGuide = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "20 min read";

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

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-8">
          <TableOfContents />
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
            The Public Service Loan Forgiveness (PSLF) program is a pivotal financial relief initiative for individuals committed to serving the public through their careers. This program allows federal student loan borrowers to have their loans forgiven after meeting specific requirements, alleviating significant financial burdens.
          </p>

          <section id="what-is-pslf" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is PSLF?</h2>
            <p>PSLF is a federal program aimed at forgiving the remaining balance of Direct Loans for eligible borrowers who meet the following criteria:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work full-time for a qualifying public service employer.</li>
              <li>Make 120 qualifying monthly payments under a designated repayment plan.</li>
            </ul>

            <Card className="p-4 my-6 bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Important Update for 2024:</p>
                  <p className="text-blue-800 dark:text-blue-200">The Department of Education has implemented several changes to make PSLF more accessible.</p>
                </div>
              </div>
            </Card>
          </section>

          <section id="eligibility" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Steps to Qualify for PSLF</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Verify Employment Eligibility</h3>
            <div className="space-y-4">
              <p>To qualify for PSLF, your employer must meet specific eligibility requirements:</p>
              <div className="pl-6">
                <h4 className="font-medium mb-2">Eligible Employers:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Government organizations, including federal, state, local, or tribal entities.</li>
                  <li>Nonprofit organizations with 501(c)(3) tax-exempt status.</li>
                  <li>Other nonprofits providing public services like public health, safety, or education.</li>
                </ul>
                
                <h4 className="font-medium mt-4 mb-2">Ineligible Employers:</h4>
                <ul className="list-disc pl-6">
                  <li>Labor unions and political organizations.</li>
                </ul>
              </div>
            </div>

            <Card className="p-4 my-6 bg-emerald-50 dark:bg-emerald-900 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-900 dark:text-emerald-100">Pro Tip:</p>
                  <p className="text-emerald-800 dark:text-emerald-200">
                    Leverage the PSLF Help Tool available at StudentAid.gov to confirm your employer's eligibility. 
                    Regularly update your records and reverify your employer's status if you switch jobs.
                  </p>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-semibold mt-8 mb-4">2. Consolidate Ineligible Loans</h3>
            <p>Only Direct Loans are eligible for PSLF. If you possess other federal loans, such as FFEL or Perkins Loans, you must consolidate them into a Direct Consolidation Loan.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Begin the consolidation process on StudentAid.gov.</li>
              <li>Complete consolidation before making qualifying payments to ensure eligibility.</li>
              <li>Retain documentation of the process to prevent potential setbacks.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">3. Enroll in a Qualifying Repayment Plan</h3>
            <p>Qualifying repayment plans include:</p>
            <div className="pl-6 mt-4">
              <h4 className="font-medium mb-2">Income-Driven Repayment Plans (IDR):</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Income-Based Repayment (IBR)</li>
                <li>Pay As You Earn (PAYE)</li>
                <li>Revised Pay As You Earn (REPAYE)</li>
                <li>Income-Contingent Repayment (ICR)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">4. Make 120 Qualifying Payments</h3>
            <p>Payments must meet the following criteria:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Paid on time</li>
              <li>Paid in full</li>
              <li>Made under a qualifying repayment plan while employed full-time at a qualifying organization</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">5. Submit the PSLF Form Annually</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete the PSLF Form annually or upon changing jobs</li>
              <li>Submit through your loan servicer or the PSLF Help Tool</li>
              <li>Confirm receipt and ensure accurate tracking of qualifying payments</li>
            </ul>
          </section>

          <section id="common-pitfalls" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Late Payments:</strong> Ensure payments are made by their due dates to count toward PSLF.</li>
              <li><strong>Ineligible Loans or Employers:</strong> Confirm eligibility early to prevent wasted efforts.</li>
              <li><strong>Failure to Submit the PSLF Form:</strong> Neglecting to submit forms may cause delays or tracking errors.</li>
              <li><strong>Skipping IDR Plan Recertification:</strong> Annual income recertification is critical for staying on track.</li>
              <li><strong>Missing Temporary Waivers:</strong> Take advantage of any temporary programs to maximize benefits.</li>
            </ul>
          </section>

          <section id="tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for PSLF Success</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Document Everything</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain a detailed record of forms, payment receipts, and certifications</li>
                  <li>Use digital or physical folders for easy organization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">2. Stay Updated</h3>
                <p>MOHELA currently manages PSLF. Stay in contact for updates and verify account details regularly.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Leverage Temporary Opportunities</h3>
                <p>Temporary waivers offer flexibility for previously ineligible payments. Don't miss deadlines.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Avoid Scams</h3>
                <p>Rely exclusively on official resources like StudentAid.gov.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Seek Professional Advice</h3>
                <p>Consult experts or financial advisors specializing in student loans for tailored guidance.</p>
              </div>
            </div>
          </section>

          <FaqSection />

          <section id="final-steps" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Final Steps</h2>
            <p>
              PSLF is a transformative opportunity for public service professionals to eliminate their student loan debt. 
              By adhering to program requirements, avoiding common mistakes, and proactively managing your progress, 
              you can unlock the benefits of forgiveness. Start today by using the PSLF Help Tool, submitting employment 
              certifications regularly, and staying informed of updates. Visit StudentAid.gov to begin your PSLF journey 
              and secure a brighter financial future!
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