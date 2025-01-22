import { GuideHeader } from "@/components/fafsa-guide/GuideHeader";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { FAQSection } from "@/components/fafsa-deadline/shared/FAQSection";

const LatestLoanForgiveness = () => {
  const sections = [
    { id: "what-are", title: "What Are Loan Forgiveness Programs?" },
    { id: "latest-programs", title: "Latest Loan Forgiveness Programs (2024-2025)" },
    { id: "steps", title: "Steps to Apply for Loan Forgiveness" },
    { id: "pitfalls", title: "Common Pitfalls to Avoid" },
    { id: "faqs", title: "FAQs About Loan Forgiveness Programs" },
    { id: "tips", title: "Life-Saving Tips for Loan Forgiveness Success" },
    { id: "final", title: "Final Steps" }
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
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <GuideHeader
        title="Latest Loan Forgiveness Programs"
        description="Navigate the complex world of loan forgiveness programs with our comprehensive, up-to-date guide covering all available options and strategies for success."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <aside className="md:col-span-1">
          <TableOfContents sections={sections} />
        </aside>

        <main className="md:col-span-3 space-y-8">
          <section id="what-are">
            <h2 className="text-2xl font-bold mb-4">What Are Loan Forgiveness Programs?</h2>
            <p className="text-gray-700 mb-4">
              Loan forgiveness programs are structured initiatives aimed at canceling a portion or the entirety of an outstanding loan balance for eligible borrowers. These programs cater to individuals who meet specific criteria, such as working in certain professions, demonstrating financial hardship, or completing public service obligations.
            </p>
          </section>

          <section id="latest-programs">
            <h2 className="text-2xl font-bold mb-4">Latest Loan Forgiveness Programs (2024-2025)</h2>
            <div className="space-y-6">
              {/* PSLF Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Public Service Loan Forgiveness (PSLF)</h3>
                <p className="text-gray-700 mb-4">
                  This program offers forgiveness of the remaining balance on Direct Loans after 120 qualifying payments under an eligible repayment plan while working full-time for a qualifying employer.
                </p>
              </div>

              {/* IDR Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Income-Driven Repayment (IDR) Forgiveness</h3>
                <p className="text-gray-700 mb-4">
                  After 20 or 25 years of qualifying payments, depending on the plan, any remaining loan balance is forgiven.
                </p>
              </div>
            </div>
          </section>

          <section id="steps">
            <h2 className="text-2xl font-bold mb-4">Steps to Apply for Loan Forgiveness</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">1. Determine Eligibility</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Research the requirements for each program you are considering</li>
                  <li>Verify your employment status, loan type, and repayment plan alignment</li>
                  <li>Use official tools to confirm eligibility and track progress</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="pitfalls">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Missing Deadlines: Always stay aware of application and recertification deadlines</li>
                <li>Incomplete Documentation: Review forms thoroughly to prevent delays</li>
                <li>Unqualified Employment or Loans: Confirm eligibility before applying</li>
              </ul>
            </div>
          </section>

          <section id="faqs">
            <h2 className="text-2xl font-bold mb-4">FAQs About Loan Forgiveness Programs</h2>
            <FAQSection title="Frequently Asked Questions" faqs={faqs} />
          </section>

          <section id="tips">
            <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for Loan Forgiveness Success</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Stay Organized: Maintain a dedicated folder for all loan-related documents</li>
                <li>Monitor Updates: Follow official channels for changes and opportunities</li>
                <li>Seek Expert Guidance: Consult financial advisors when needed</li>
              </ul>
            </div>
          </section>

          <section id="final">
            <h2 className="text-2xl font-bold mb-4">Final Steps</h2>
            <p className="text-gray-700">
              Loan forgiveness programs can redefine your financial future by offering relief and empowering you to move forward. Take the time to identify programs that align with your needs and career goals.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LatestLoanForgiveness;