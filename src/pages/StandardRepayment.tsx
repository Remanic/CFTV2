import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { StandardFAQAccordion } from "@/components/loan-repayment/StandardFAQAccordion";

const sections = [
  { id: "what-is-standard", title: "1. What Is the Standard Plan?" },
  { id: "why-choose", title: "2. Why Choose Standard?" },
  { id: "key-features", title: "3. Key Features" },
  { id: "how-to-enroll", title: "4. How to Enroll" },
  { id: "is-it-right", title: "5. Is It Right for You?" },
  { id: "faqs", title: "6. FAQs" },
];

const StandardRepayment = () => {
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
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Standard Repayment Plan Guide | Federal Student Loans</title>
        <meta 
          name="description" 
          content="Learn about the Standard Repayment Plan for federal student loans, including fixed monthly payments, 10-year repayment terms, and how to enroll." 
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
            Standard Repayment Plan Guide
          </h1>
          <p className="text-xl text-gray-600">
            Understand how the Standard Repayment Plan works and decide if it's the right choice for your federal student loans.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <section id="what-is-standard" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">What is the Standard Repayment Plan?</h2>
            <div className="prose max-w-none">
              <p>
                The Standard Repayment Plan is the default repayment option for federal student loans. It's designed to help you pay off your loans in a fixed time frame—typically 10 years—by making equal monthly payments. Each payment covers both principal and interest, ensuring your loan balance decreases steadily over time.
              </p>
              <p>
                If you're looking for a straightforward way to repay your loans without surprises, the Standard Repayment Plan might be your best bet. It's ideal for borrowers who can afford consistent payments and want to minimize the total interest paid over the life of the loan.
              </p>
            </div>
          </section>

          <section id="why-choose" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Why Choose the Standard Repayment Plan?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Fixed Monthly Payments:</span>
                  <span>Your payment amount stays the same every month, making budgeting easier.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Shortest Repayment Term:</span>
                  <span>Most loans are repaid in 10 years, helping you become debt-free faster.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Lowest Total Interest:</span>
                  <span>Since the repayment period is shorter, you'll pay less interest compared to longer plans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Simplicity:</span>
                  <span>No need to recertify income or worry about changing payment amounts.</span>
                </li>
              </ul>
              <p className="mt-4">This plan is especially beneficial if you have a stable income and want to avoid the long-term costs associated with extended repayment options.</p>
            </div>
          </section>

          <section id="key-features" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key Features of the Standard Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Repayment Term:</span> 10 years for most federal loans (up to 30 years for consolidation loans).
                </li>
                <li>
                  <span className="font-semibold">Payment Structure:</span> Fixed monthly payments that cover both principal and interest.
                </li>
                <li>
                  <span className="font-semibold">Eligibility:</span> Available to all federal student loan borrowers, including Direct Loans, FFEL Program Loans, and Consolidation Loans.
                </li>
                <li>
                  <span className="font-semibold">No Income Requirement:</span> Unlike IDR plans, your income doesn't affect your eligibility or payment amount.
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <span className="font-semibold">Tip:</span> Use the Federal Student Aid Loan Simulator to estimate your monthly payments and total interest under the Standard Repayment Plan.
                </p>
              </div>
            </div>
          </section>

          <section id="how-to-enroll" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">How to Enroll in the Standard Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">If you don't choose a repayment plan, you'll automatically be placed on the Standard Repayment Plan. However, if you're currently on a different plan and want to switch, here's how:</p>
              <ol className="list-decimal pl-6 space-y-4 mb-4">
                <li><span className="font-semibold">Contact Your Loan Servicer:</span> Call or visit your servicer's website to request the change.</li>
                <li><span className="font-semibold">Confirm the Switch:</span> Ensure your new payment amount and due date are set.</li>
                <li><span className="font-semibold">Set Up Auto-Pay:</span> Many servicers offer a 0.25% interest rate reduction for automatic payments.</li>
              </ol>
              <p>Switching to the Standard Repayment Plan is free and can be done at any time.</p>
              <div className="mt-4 text-amber-800 bg-amber-50 p-4 rounded-lg">
                <p><span className="font-semibold">Important:</span> If you're on an IDR plan and switch to the Standard Plan, you may lose access to certain benefits like loan forgiveness.</p>
              </div>
            </div>
          </section>

          <section id="is-it-right" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Is the Standard Repayment Plan Right for You?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">Consider the Standard Repayment Plan if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>You can afford consistent, higher monthly payments</li>
                <li>You want to pay off your loans as quickly as possible</li>
                <li>You prefer a simple, predictable repayment schedule</li>
                <li>You're not seeking loan forgiveness</li>
              </ul>
              <p>However, if your monthly payments are unaffordable or you're pursuing forgiveness, an IDR plan might be a better fit.</p>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About the Standard Repayment Plan</h2>
            <StandardFAQAccordion />
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

export default StandardRepayment;
