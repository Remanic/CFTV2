
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { GraduatedFAQAccordion } from "@/components/loan-repayment/GraduatedFAQAccordion";

const sections = [
  { id: "what-is-graduated", title: "1. What Is the Graduated Plan?" },
  { id: "why-choose", title: "2. Why Choose Graduated?" },
  { id: "key-features", title: "3. Key Features" },
  { id: "how-to-enroll", title: "4. How to Enroll" },
  { id: "is-it-right", title: "5. Is It Right for You?" },
  { id: "faqs", title: "6. FAQs" },
];

const GraduatedRepayment = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setProgress(Math.min(progress, 100));
      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call to set progress
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Graduated Repayment Plan Guide | Federal Student Loans</title>
        <meta 
          name="description" 
          content="Learn about the Graduated Repayment Plan for federal student loans, including increasing payments, eligibility, and how to enroll." 
        />
      </Helmet>

      <Header />

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
          style={{ "--progress-background": "rgb(79, 70, 229)" } as React.CSSProperties}
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Graduated Repayment Plan Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how the Graduated Repayment Plan can help you start with lower payments that increase over time as your income grows.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <section id="what-is-graduated" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">What is the Graduated Repayment Plan?</h2>
            <div className="prose max-w-none">
              <p>
                The Graduated Repayment Plan is a federal student loan repayment option where monthly payments start low and increase over time, typically every two years. It's tailored for borrowers who expect their income to rise steadily, offering smaller payments early on and larger ones later as earnings grow. The standard repayment term is 10 years, though it can extend to 30 years for consolidation loans.
              </p>
              <p>
                If you're early in your career and confident about future income growth, this plan provides flexibility to ease into repayment while keeping you on track to pay off your loans within a set timeframe.
              </p>
            </div>
          </section>

          <section id="why-choose" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Why Choose the Graduated Repayment Plan?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Lower Early Payments:</span>
                  <span>Begin with affordable payments when your income is limited.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Scales with Income Growth:</span>
                  <span>Payments rise as your earnings increase, potentially speeding up debt payoff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">No Income Verification:</span>
                  <span>Eligibility and payment amounts don't depend on your income, unlike IDR plans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Predictable Term:</span>
                  <span>Most loans are repaid in 10 years, keeping total interest costs lower than extended plans.</span>
                </li>
              </ul>
              <p className="mt-4">This plan suits those expecting career advancement and preferring simplicity over income-driven options.</p>
            </div>
          </section>

          <section id="key-features" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key Features of the Graduated Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Repayment Term:</span> 10 years for most loans (up to 30 years for consolidation loans).
                </li>
                <li>
                  <span className="font-semibold">Payment Structure:</span> Payments start low and increase every two years. Each payment covers at least the accrued interest, and no payment exceeds three times any prior payment.
                </li>
                <li>
                  <span className="font-semibold">Eligibility:</span> Open to all federal student loan borrowers, including Direct Loans, FFEL Loans, and Consolidation Loans.
                </li>
                <li>
                  <span className="font-semibold">Income Not Factored:</span> Payments are determined by your loan balance and interest rate, not your earnings.
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <span className="font-semibold">Tip:</span> Check the Federal Student Aid Loan Simulator to preview your payment progression.
                </p>
              </div>
            </div>
          </section>

          <section id="how-to-enroll" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">How to Enroll in the Graduated Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">Signing up is quick and free. Follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-4 mb-4">
                <li><span className="font-semibold">Reach Out to Your Loan Servicer:</span> Contact them by phone or online to request the Graduated Repayment Plan.</li>
                <li><span className="font-semibold">Review Your Payment Schedule:</span> Your servicer will share a timeline of your increasing payments.</li>
                <li><span className="font-semibold">Opt for Auto-Pay:</span> Set up automatic payments for a possible 0.25% interest rate discount (varies by servicer).</li>
              </ol>
              <p>You can switch to this plan anytime, even from another repayment option.</p>
              <div className="mt-4 text-amber-800 bg-amber-50 p-4 rounded-lg">
                <p><span className="font-semibold">Note:</span> Leaving an IDR plan might impact forgiveness eligibility.</p>
              </div>
            </div>
          </section>

          <section id="is-it-right" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Is the Graduated Repayment Plan Right for You?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">This plan might be ideal if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>You anticipate steady income growth</li>
                <li>You need lower payments now but can handle increases later</li>
                <li>You want a set term without income recertification</li>
                <li>Forgiveness isn't your goal</li>
              </ul>
              <p>If your income is unstable or you need minimal payments now, consider an IDR plan instead.</p>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About the Graduated Repayment Plan</h2>
            <GraduatedFAQAccordion />
          </section>
        </div>
      </main>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default GraduatedRepayment;
