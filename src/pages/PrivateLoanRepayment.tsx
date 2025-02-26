
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
  { id: "understanding", title: "1. Understanding Private Loans" },
  { id: "repayment-options", title: "2. Repayment Options" },
  { id: "strategies", title: "3. Repayment Strategies" },
  { id: "practical-steps", title: "4. Practical Steps" },
  { id: "avoiding-pitfalls", title: "5. Avoiding Pitfalls" },
  { id: "tips", title: "6. Life-Saving Tips" },
  { id: "faqs", title: "7. FAQs" },
];

const PrivateLoanRepayment = () => {
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

  const faqs = [
    {
      question: "Can I change my repayment plan?",
      answer: "Limited options exist—check with your lender. Refinancing is more common for adjustments."
    },
    {
      question: "What if I can't pay on time?",
      answer: "Call your lender—some offer 3-6 months of forbearance, but interest accrues. Act before you miss a payment."
    },
    {
      question: "Does paying extra save money?",
      answer: "Yes—every dollar above the minimum cuts principal, reducing interest (e.g., $100 extra on $20,000 at 6% saves ~$360 over 10 years)."
    },
    {
      question: "Is refinancing worth it?",
      answer: "If your credit improves or rates drop, yes. A 2% rate cut on $30,000 saves thousands—but compare fees."
    },
    {
      question: "What happens if I default?",
      answer: "Credit drops, debt goes to collections, and legal action (e.g., wage garnishment) may follow."
    },
    {
      question: "Can I release my co-signer?",
      answer: "Some lenders allow it after 12-36 on-time payments—confirm in your contract."
    },
    {
      question: "Are there tax benefits?",
      answer: "Yes—student loan interest (up to $2,500/year) is deductible if you meet income limits (e.g., under $85,000 single in 2025)."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Private Loan Repayment and Repayment Strategies Guide</title>
        <meta 
          name="description" 
          content="Learn effective strategies for managing and repaying private student loans, including repayment options, money-saving tips, and how to avoid common pitfalls." 
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
            Guide to Private Loan Repayment and Repayment Strategies
          </h1>
          <p className="text-xl text-gray-600">
            Master your private student loan repayment with proven strategies, money-saving tips, and expert guidance to take control of your financial future.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <section id="understanding" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Understanding Private Loan Repayment</h2>
            <div className="prose max-w-none">
              <p>
                Private loans come from banks, credit unions, or online lenders (e.g., Sallie Mae, SoFi) and lack the standardized terms of federal loans. Repayment hinges on the lender's policies, your loan agreement, and your financial situation. Unlike federal loans, private loans rarely offer income-driven plans or forgiveness, making strategic repayment critical.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
                <h3 className="font-semibold text-lg mb-4">How Repayment Works</h3>
                <ul className="space-y-3">
                  <li><span className="font-medium">Start Date:</span> Payments may begin immediately, during a grace period (typically 6 months post-graduation), or after a deferment period.</li>
                  <li><span className="font-medium">Monthly Payments:</span> Include principal and interest, determined by your loan amount, interest rate, and term.</li>
                  <li><span className="font-medium">Term Length:</span> Usually 5-20 years, set at loan origination.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="repayment-options" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Private Loan Repayment Options</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">1. Standard Repayment</h3>
                <p><span className="font-medium">What It Is:</span> Fixed monthly payments over the loan term (e.g., $330/month for 10 years).</p>
                <p><span className="font-medium">Best For:</span> Borrowers with stable income who want predictability.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">2. Graduated Repayment</h3>
                <p><span className="font-medium">What It Is:</span> Payments start low and increase every two years.</p>
                <p><span className="font-medium">Availability:</span> Rare—check with your lender.</p>
                <p><span className="font-medium">Best For:</span> Early-career borrowers expecting income growth.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">3. Extended Repayment</h3>
                <p><span className="font-medium">What It Is:</span> Stretched term (e.g., 15-20 years) for lower monthly payments.</p>
                <p><span className="font-medium">Availability:</span> Less common—some lenders offer it informally.</p>
                <p><span className="font-medium">Best For:</span> Those needing immediate relief but willing to pay more interest long-term.</p>
              </div>
            </div>
          </section>

          <section id="strategies" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Repayment Strategies: Pay Off Your Loan Smarter</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">1. Pay More Than the Minimum</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">How:</span> Add $50-$100 monthly to your payment, targeting principal.</li>
                  <li><span className="font-medium">Why:</span> Reduces total interest and shortens the term.</li>
                  <li><span className="font-medium">Example:</span> On a $20,000 loan at 6% over 10 years ($222/month), adding $50/month saves ~$1,800 in interest and cuts 2 years off repayment.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">2. Use the Biweekly Payment Trick</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">How:</span> Pay half your monthly amount every two weeks.</li>
                  <li><span className="font-medium">Why:</span> Results in 13 full payments per year instead of 12.</li>
                  <li><span className="font-medium">Example:</span> On a $20,000 loan at 6%, this saves ~$1,200 and shaves off 1.5 years.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">3. Refinance for Better Terms</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">How:</span> Apply with a new lender to lower your rate or extend your term.</li>
                  <li><span className="font-medium">Example:</span> Refinancing $30,000 from 10% to 6% over 10 years drops payments from $396 to $333, saving ~$7,500.</li>
                  <li className="text-amber-700">Caution: You lose original deferment options—ensure the savings outweigh this.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="practical-steps" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">How to Start Repaying: Practical Steps</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ol className="list-decimal pl-6 space-y-4">
                <li><span className="font-medium">Review Your Loan:</span> Check your rate, term, and balance in your loan agreement or online portal.</li>
                <li><span className="font-medium">Set a Budget:</span> Allocate funds for payments (e.g., 10%-15% of income).</li>
                <li><span className="font-medium">Choose a Strategy:</span> Pick one or combine (e.g., biweekly + extra payments).</li>
                <li><span className="font-medium">Set Up Autopay:</span> Avoid late fees and often get a 0.25% rate discount.</li>
                <li><span className="font-medium">Track Progress:</span> Monitor your balance monthly—small wins keep you motivated.</li>
              </ol>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800"><span className="font-medium">Advice:</span> Start small—paying $10 extra monthly builds momentum.</p>
              </div>
            </div>
          </section>

          <section id="avoiding-pitfalls" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Avoiding Repayment Pitfalls</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li><span className="font-medium">Missing Payments:</span> Late fees ($25-$50) and credit damage (7-year mark) add up.</li>
                <li><span className="font-medium">Over-Reliance on Deferment:</span> Interest capitalizes, ballooning your balance.</li>
                <li><span className="font-medium">Ignoring Variable Rates:</span> A 3% rate could climb to 10%+, raising payments unexpectedly.</li>
                <li><span className="font-medium">Default Risk:</span> Collections, wage garnishment, or lawsuits follow prolonged non-payment.</li>
              </ul>
              <div className="mt-4 bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800">
                  <span className="font-medium">Real-Life Example:</span> Jake deferred his $15,000 loan at 8% for 2 years. His balance grew to $17,400, and his new payment jumped from $203 to $236—costing him an extra $2,000 in interest.
                </p>
              </div>
            </div>
          </section>

          <section id="tips" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Life-Saving Repayment Tips</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="space-y-4">
                <li><span className="font-medium">Start Early:</span> Pay interest in school to avoid capitalization.</li>
                <li><span className="font-medium">Track Rates:</span> If variable, save extra cash for potential increases.</li>
                <li><span className="font-medium">Refinance Strategically:</span> Wait until your credit peaks for the best rate.</li>
                <li><span className="font-medium">Stay Motivated:</span> Celebrate milestones (e.g., $5,000 paid off) to keep going.</li>
              </ul>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <span className="font-medium">Insight:</span> Repayment is a marathon—small, consistent steps beat sporadic efforts.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQs: Common Repayment Questions</h2>
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

export default PrivateLoanRepayment;
