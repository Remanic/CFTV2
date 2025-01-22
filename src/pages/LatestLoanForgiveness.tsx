import { useEffect, useState } from "react";
import { Clock, BookOpen, ChevronUp, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { FAQSection } from "@/components/fafsa-deadline/shared/FAQSection";
import { Helmet } from "react-helmet";

const LatestLoanForgiveness = () => {
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

  const customSections = [
    { id: "what-are", title: "1. What Are Loan Forgiveness Programs?" },
    { id: "latest-programs", title: "2. Latest Programs (2024-2025)" },
    { id: "steps", title: "3. Application Steps" },
    { id: "pitfalls", title: "4. Common Pitfalls" },
    { id: "faqs", title: "5. FAQs" },
    { id: "tips", title: "6. Success Tips" },
    { id: "final", title: "7. Final Steps" }
  ];

  const faqs = [
    {
      question: "Are loan forgiveness programs taxable?",
      answer: "Most federal programs, including PSLF and IDR forgiveness, are not taxable. However, state tax laws may vary."
    },
    {
      question: "Can private loans qualify for forgiveness?",
      answer: "Private loans are typically ineligible for federal forgiveness programs but may qualify for state or employer-based assistance."
    },
    {
      question: "What if I don't meet PSLF requirements?",
      answer: "Consider loan consolidation or switching to an IDR plan to improve eligibility."
    },
    {
      question: "Does employment type affect PSLF eligibility?",
      answer: "Yes, only roles in public service or nonprofit organizations qualify."
    },
    {
      question: "Are unpaid interest and fees forgiven under IDR plans?",
      answer: "Yes, any remaining balance, including interest, is forgiven at the end of the repayment term."
    },
    {
      question: "Can I apply for multiple programs simultaneously?",
      answer: "Yes, provided you meet the eligibility requirements for each program."
    }
  ];

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Latest Loan Forgiveness Programs Guide 2024 | Complete Information</title>
        <meta name="description" content="Navigate the complex world of loan forgiveness programs with our comprehensive, up-to-date guide covering all available options and strategies for success." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <div className="h-1 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Latest Loan Forgiveness Programs Guide
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
          <TableOfContents sections={customSections} />
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
            Navigating the complex world of loan forgiveness programs can be overwhelming, especially as policies evolve and expand. This guide provides an extensive, up-to-date overview of the latest loan forgiveness programs, including practical steps to apply, insights to address common doubts, and strategies to maximize your chances of success.
          </p>

          <section id="what-are" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What Are Loan Forgiveness Programs?</h2>
            <p>Loan forgiveness programs are structured initiatives aimed at canceling a portion or the entirety of an outstanding loan balance for eligible borrowers. These programs cater to individuals who meet specific criteria, such as working in certain professions, demonstrating financial hardship, or completing public service obligations.</p>
            
            <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 p-4 my-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Key Benefits:</h3>
              <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                <li>Alleviation of significant financial burdens</li>
                <li>Support for careers in public service</li>
                <li>Tailored incentives for economic hardship</li>
              </ul>
            </div>
          </section>

          <section id="latest-programs" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Latest Loan Forgiveness Programs (2024-2025)</h2>
            <div className="grid gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Public Service Loan Forgiveness (PSLF)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      This program offers forgiveness of the remaining balance on Direct Loans after 120 qualifying payments under an eligible repayment plan while working full-time for a qualifying employer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Income-Driven Repayment (IDR) Forgiveness</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      After 20 or 25 years of qualifying payments, depending on the plan, any remaining loan balance is forgiven.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="steps" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Steps to Apply for Loan Forgiveness</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <ArrowRight className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">1. Determine Eligibility</h3>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                      <li>Research the requirements for each program</li>
                      <li>Verify your employment status and loan type</li>
                      <li>Use official tools to confirm eligibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pitfalls" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-red-500 mt-1" />
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Missing Deadlines: Always stay aware of application and recertification deadlines</li>
                  <li>Incomplete Documentation: Review forms thoroughly to prevent delays</li>
                  <li>Unqualified Employment or Loans: Confirm eligibility before applying</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">FAQs About Loan Forgiveness Programs</h2>
            <FAQSection title="Frequently Asked Questions" faqs={faqs} />
          </section>

          <section id="tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for Loan Forgiveness Success</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Stay Organized: Maintain a dedicated folder for all loan-related documents</li>
                <li>Monitor Updates: Follow official channels for changes and opportunities</li>
                <li>Seek Expert Guidance: Consult financial advisors when needed</li>
              </ul>
            </div>
          </section>

          <section id="final" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Final Steps</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Loan forgiveness programs can redefine your financial future by offering relief and empowering you to move forward. Take the time to identify programs that align with your needs and career goals.
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

export default LatestLoanForgiveness;