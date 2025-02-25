
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { FAQSection } from "@/components/fafsa-deadline/shared/FAQSection";

const sections = [
  { id: "what-is-extended", title: "1. What Is Extended Repayment?" },
  { id: "why-choose", title: "2. Why Choose Extended?" },
  { id: "key-features", title: "3. Key Features" },
  { id: "how-to-enroll", title: "4. How to Enroll" },
  { id: "is-it-right", title: "5. Is It Right for You?" },
  { id: "faqs", title: "6. FAQs" },
];

const ExtendedRepayment = () => {
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

  const faqs = [
    {
      question: "Who is eligible for the Extended Repayment Plan?",
      answer: "Borrowers with more than $30,000 in Direct Loans or FFEL Program Loans are eligible. Parent PLUS Loans and Consolidation Loans that include Parent PLUS Loans are not eligible unless consolidated again."
    },
    {
      question: "How does the Extended Repayment Plan affect the total interest I'll pay?",
      answer: "By extending your repayment term to 25 years, you'll pay more in total interest compared to the Standard 10-year plan. However, your monthly payments will be lower."
    },
    {
      question: "Can I switch to another repayment plan later?",
      answer: "Yes, you can change your repayment plan at any time by contacting your loan servicer. If you switch to an IDR plan, you may regain access to forgiveness options."
    },
    {
      question: "Is there loan forgiveness under the Extended Repayment Plan?",
      answer: "No, the Extended Repayment Plan does not offer loan forgiveness. If you're seeking forgiveness, consider an IDR plan or the Public Service Loan Forgiveness (PSLF) program."
    },
    {
      question: "How does the Extended Repayment Plan compare to other plans?",
      answer: "Extended Plan: Lower payments over a longer term (25 years), with fixed or graduated options.\nStandard Plan: Higher payments over a shorter term (10 years), with lower total interest.\nIDR Plans: Payments based on income, with potential for forgiveness after 20-25 years."
    },
    {
      question: "Can I make extra payments to pay off my loan faster?",
      answer: "Yes! You can make additional payments at any time without penalty. Specify that the extra amount should go toward the principal to reduce your balance faster."
    },
    {
      question: "What if I have multiple loans?",
      answer: "If you have multiple federal loans, you can consolidate them into a single loan with a fixed interest rate. However, consolidation may affect your eligibility for certain repayment plans or forgiveness programs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Extended Repayment Plan Guide | Federal Student Loans</title>
        <meta 
          name="description" 
          content="Learn about the Extended Repayment Plan for federal student loans, including eligibility requirements, payment options, and how to enroll." 
        />
      </Helmet>

      <Header />

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
          style={{ "--progress-background": "#9b87f5" } as React.CSSProperties}
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Extended Repayment Plan Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how the Extended Repayment Plan can help lower your monthly payments by stretching your repayment term up to 25 years.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <section id="what-is-extended" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">What is the Extended Repayment Plan?</h2>
            <div className="prose max-w-none">
              <p>
                The Extended Repayment Plan is a federal student loan repayment option that allows you to stretch your repayment term up to 25 years, compared to the standard 10 years. This plan is ideal for borrowers who need lower monthly payments but don't qualify for income-driven repayment (IDR) plans or prefer a longer repayment period without adjusting payments based on income. You can choose between fixed or graduated payments, offering flexibility as your financial situation changes.
              </p>
              <p className="mt-4">
                If your goal is to reduce your monthly payments without tying them to your income, the Extended Repayment Plan could be your solution. However, keep in mind that extending your repayment term means paying more interest over time.
              </p>
            </div>
          </section>

          <section id="why-choose" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Why Choose the Extended Repayment Plan?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Lower Monthly Payments:</span>
                  <span>By extending the repayment term, your monthly payments are smaller, making them easier to manage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Payment Flexibility:</span>
                  <span>Choose between fixed payments (same amount each month) or graduated payments (start low and increase every two years).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">No Income Requirement:</span>
                  <span>Unlike IDR plans, your income doesn't affect your eligibility or payment amount.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Longer Repayment Term:</span>
                  <span>Up to 25 years, giving you more time to pay off your loans.</span>
                </li>
              </ul>
              <p className="mt-4">
                This plan is especially helpful if you have a high loan balance and need breathing room in your budget but don't want to commit to an IDR plan.
              </p>
            </div>
          </section>

          <section id="key-features" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key Features of the Extended Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold">Repayment Term:</span> Up to 25 years for borrowers with more than $30,000 in federal student loans.
                </li>
                <li>
                  <span className="font-semibold">Payment Options:</span>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>Fixed Payments: Equal monthly payments for the entire repayment term.</li>
                    <li>Graduated Payments: Payments start low and increase every two years.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Eligibility:</span> Available to borrowers with Direct Loans or FFEL Program Loans who owe more than $30,000.
                </li>
                <li>
                  <span className="font-semibold">Interest Costs:</span> You'll pay more in total interest over the extended term compared to shorter plans.
                </li>
                <li>
                  <span className="font-semibold">No Income Verification:</span> Your payment amount is based on your loan balance, interest rate, and chosen term—not your income.
                </li>
              </ul>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <span className="font-semibold">Tip:</span> Use the Federal Student Aid Loan Simulator to estimate your payments and total interest under both fixed and graduated options.
                </p>
              </div>
            </div>
          </section>

          <section id="how-to-enroll" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">How to Enroll in the Extended Repayment Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">Enrolling in the Extended Repayment Plan is simple and free. Here's how:</p>
              <ol className="list-decimal pl-6 space-y-4 mb-4">
                <li><span className="font-semibold">Contact Your Loan Servicer:</span> Call or visit your servicer's website to request the Extended Repayment Plan.</li>
                <li><span className="font-semibold">Choose Your Payment Type:</span> Decide between fixed or graduated payments based on your financial needs.</li>
                <li><span className="font-semibold">Confirm Your New Terms:</span> Review your new payment schedule and repayment term.</li>
                <li><span className="font-semibold">Set Up Auto-Pay (Optional):</span> Many servicers offer a 0.25% interest rate reduction for automatic payments.</li>
              </ol>
              <p>You can switch to this plan at any time, even if you're currently on another repayment plan.</p>
              <div className="mt-4 bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800">
                  <span className="font-semibold">Important:</span> If you're switching from an IDR plan, you may lose access to certain benefits like loan forgiveness.
                </p>
              </div>
            </div>
          </section>

          <section id="is-it-right" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Is the Extended Repayment Plan Right for You?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">Consider the Extended Repayment Plan if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>You have more than $30,000 in federal student loans</li>
                <li>You need lower monthly payments but don't qualify for or prefer not to use an IDR plan</li>
                <li>You want the flexibility of fixed or graduated payments</li>
                <li>You're not seeking loan forgiveness</li>
              </ul>
              <p>However, if you can afford higher payments and want to save on interest, the Standard Repayment Plan might be a better fit.</p>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About the Extended Repayment Plan</h2>
            <FAQSection title="" faqs={faqs} />
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

export default ExtendedRepayment;
