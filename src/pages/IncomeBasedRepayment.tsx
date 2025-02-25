import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { FAQAccordion } from "@/components/loan-repayment/FAQAccordion";

const sections = [
  { id: "what-is-idr", title: "1. What Are IDR Plans?" },
  { id: "types-of-idr", title: "2. Types of IDR Plans" },
  { id: "tips-and-hacks", title: "3. Tips and Hacks" },
  { id: "how-to-apply", title: "4. How to Apply" },
  { id: "latest-changes", title: "5. Latest Changes" },
  { id: "why-use", title: "6. Why Use IDR?" },
  { id: "faqs", title: "7. FAQs" },
];

const IncomeBasedRepayment = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Complete Guide to Income-Driven Repayment (IDR) Plans 2025</title>
        <meta name="description" content="Learn about Income-Driven Repayment (IDR) Plans, including SAVE, PAYE, IBR, and ICR. Find out how to lower your student loan payments based on your income." />
      </Helmet>

      <Header />

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Income-Driven Repayment (IDR) Plans
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to make your student loan payments more affordable through Income-Driven Repayment plans.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <section id="what-is-idr" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">What Are Income-Driven Repayment Plans?</h2>
            <div className="prose max-w-none">
              <p>
                Income-Driven Repayment (IDR) Plans are federal student loan repayment options that adjust your monthly payments based on your income and family size. These plans make payments more affordable compared to standard repayment plans, especially if you're struggling financially. They can reduce your monthly bill—sometimes to $0—and may offer loan forgiveness after 20-25 years of payments.
              </p>
              <p>
                If your student loan payments feel overwhelming, an IDR plan could be your lifeline, helping you avoid default while keeping payments manageable.
              </p>
            </div>
          </section>

          <section id="types-of-idr" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Types of Income-Driven Repayment Plans in 2025</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">1. SAVE (Saving on a Valuable Education) Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold">Status in 2025:</span>
                    <span>Currently offered, but facing legal challenges. Its future is uncertain due to ongoing litigation.</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Details:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payments are 5% of discretionary income for undergraduate loans and 10% for graduate loans</li>
                      <li>Payments can drop to $0, and unpaid interest doesn't capitalize (it won't increase your loan balance)</li>
                      <li>Forgiveness after 20-25 years, or as little as 10 years for borrowers with low original balances (e.g., $12,000 or less)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Changes Up to 2025:</p>
                    <p>Introduced as a replacement for REPAYE, SAVE is currently in limbo. As of 2025, borrowers are in a general forbearance due to legal disputes—no payments are due, and interest isn't accruing, but this time doesn't count toward forgiveness.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Who It's For:</p>
                    <p>Borrowers seeking the lowest possible payments, especially for undergraduate loans.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">2. PAYE (Pay As You Earn) Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold">Status in 2025:</span>
                    <span>Currently offered. Reopened to new borrowers in mid-January 2025.</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Details:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payments are 10% of discretionary income, capped at the standard 10-year repayment amount</li>
                      <li>Forgiveness after 20 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">3. IBR (Income-Based Repayment) Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold">Status in 2025:</span>
                    <span>Currently offered. No closures or interruptions reported.</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Details:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payments are 10% of discretionary income (for new borrowers after July 1, 2014) or 15% (for earlier borrowers)</li>
                      <li>Forgiveness after 20 years (new borrowers) or 25 years (older borrowers)</li>
                      <li>Remains stable, unaffected by legal challenges or closures impacting other plans</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Who It's For:</p>
                    <p>Borrowers who don't qualify for PAYE or need a reliable, long-standing option.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">4. ICR (Income-Contingent Repayment) Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold">Status in 2025:</span>
                    <span>Currently offered. Reopened to new borrowers in mid-January 2025.</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Details:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payments are the lesser of 20% of discretionary income or what you'd pay on a 12-year fixed plan</li>
                      <li>Forgiveness after 25 years</li>
                      <li>Similar to PAYE, ICR's temporary closure in 2024 was lifted in 2025</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Who It's For:</p>
                    <p>Borrowers ineligible for other IDR plans, including parent PLUS loan holders (after consolidation).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tips-and-hacks" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Life-Saving Tips and Hacks for IDR Plans</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">1. PSLF Eligibility Hack with Minimum Payments</h3>
                <div className="space-y-2">
                  <p className="font-medium">What It Is:</p>
                  <p>Public Service Loan Forgiveness (PSLF) cancels your remaining loan balance after 120 qualifying payments while working full-time for a qualifying employer.</p>
                  <p className="font-medium mt-2">How to Do It:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Enroll in SAVE or PAYE, where payments can be as low as $0 based on your income</li>
                    <li>Even $0 payments count toward the 120 needed for PSLF</li>
                    <li>Recertify your income yearly to keep payments minimal</li>
                  </ul>
                  <p className="mt-2"><span className="font-medium">Example:</span> If you owe $50,000 and your SAVE payment is $0, after 120 payments (10 years), the full $50,000 is forgiven under PSLF.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">2. Marriage and Income Strategy</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">What to Know:</span> For most IDR plans (PAYE, IBR, ICR), filing taxes jointly includes your spouse's income, potentially raising your payments.</p>
                  <p><span className="font-medium">Hack:</span> Under SAVE, filing separately considers only your income, lowering your payment if your spouse earns more.</p>
                  <p><span className="font-medium">Consideration:</span> Compare this benefit against tax advantages of filing jointly before deciding.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">3. Switching Plans Smartly</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">What to Know:</span> You can switch IDR plans if your finances change, but it might reset your forgiveness timeline or alter payments.</p>
                  <p><span className="font-medium">Hack:</span> Stick with your current plan if you're near forgiveness. Use the Loan Simulator to weigh pros and cons before switching.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">4. Build an Emergency Loan Fund</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">What to Do:</span> Save the difference between your IDR payment and a standard payment in a high-yield savings account.</p>
                  <p><span className="font-medium">Why It Helps:</span> If plans like SAVE are discontinued, this fund can cover higher payments, offering peace of mind amid uncertainty.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">5. Leverage the PSLF Buy Back Program</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">What It Is:</span> A 2025 update allowing borrowers to "buy back" PSLF credit for months spent in forbearance.</p>
                  <p><span className="font-medium">Hack:</span> If you've lost PSLF progress due to forbearance, this program could restore your timeline—check with your servicer for eligibility.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="how-to-apply" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">How to Apply for an IDR Plan</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ol className="list-decimal pl-6 space-y-4">
                <li><span className="font-semibold">Go Online:</span> Visit StudentAid.gov and log in.</li>
                <li><span className="font-semibold">Select a Plan:</span> Choose from SAVE, PAYE, IBR, or ICR based on your needs.</li>
                <li><span className="font-semibold">Submit Info:</span> Provide your income and family size details.</li>
                <li><span className="font-semibold">Recertify Annually:</span> Update your info each year to maintain eligibility.</li>
              </ol>
              <div className="mt-4 text-sm text-gray-600">
                Note: Applying is free—avoid third-party companies charging fees for this service.
              </div>
            </div>
          </section>

          <section id="latest-changes" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Latest Changes to IDR Plans in 2025</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <ul className="space-y-4">
                  <li>
                    <span className="font-semibold">SAVE Plan:</span> Still offered but under legal threat. Borrowers are in forbearance (no payments, no interest, but no forgiveness credit) due to litigation.
                  </li>
                  <li>
                    <span className="font-semibold">PAYE and ICR:</span> Both reopened to new enrollees in mid-January 2025 after being closed since June 2024.
                  </li>
                  <li>
                    <span className="font-semibold">Legislative Risks:</span> House Republican proposals could limit IDR forgiveness or PSLF, but these aren't law yet.
                  </li>
                  <li>
                    <span className="font-semibold">PSLF Buy Back:</span> A new option to reclaim forgiveness credit for past forbearance periods.
                  </li>
                  <li>
                    <span className="font-semibold">Stay Informed:</span> Check StudentAid.gov regularly for updates, especially if you're on SAVE.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="why-use" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Why Use an IDR Plan?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="mb-4">IDR plans are perfect if:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your loan payments exceed 10-15% of your income</li>
                <li>You're pursuing PSLF or long-term forgiveness</li>
                <li>You need flexibility due to low or variable income</li>
              </ul>
              <p>If you can pay more to save on interest, a standard plan might suit you better—but for most, IDR offers critical relief.</p>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About Income-Driven Repayment Plans</h2>
            <FAQAccordion />
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

export default IncomeBasedRepayment;
