
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

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
                      <li>Payments can drop to $0, and unpaid interest doesn't capitalize</li>
                      <li>Forgiveness after 20-25 years, or as little as 10 years for low original balances</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Similar blocks for PAYE, IBR, and ICR plans */}
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

              {/* Continue with IBR and ICR sections */}
            </div>
          </section>

          <section id="tips-and-hacks" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Life-Saving Tips and Hacks for IDR Plans</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="text-lg font-semibold mb-2">1. PSLF Eligibility Hack with Minimum Payments</h3>
                <p>Lower your monthly payments through an IDR plan to maximize the amount forgiven under PSLF. Since forgiveness occurs after 120 payments regardless of the amount paid, smaller payments mean more debt is erased.</p>
              </div>
              
              {/* Continue with other tips sections */}
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

          {/* Continue with Latest Changes, Why Use, and FAQ sections */}
          
          <section id="latest-changes" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Latest Changes to IDR Plans in 2025</h2>
            <div className="prose max-w-none">
              {/* Latest changes content */}
            </div>
          </section>

          <section id="why-use" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Why Use an IDR Plan?</h2>
            <div className="prose max-w-none">
              {/* Why use content */}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About Income-Driven Repayment Plans</h2>
            <div className="space-y-6">
              {/* FAQ content */}
            </div>
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
