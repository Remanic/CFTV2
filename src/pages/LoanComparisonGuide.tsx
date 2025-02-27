
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp, Clock, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "why-understanding-matters", title: "2. Why Understanding Matters" },
  { id: "federal-loans", title: "3. Federal Student Loans" },
  { id: "private-loans", title: "4. Private Student Loans" },
  { id: "key-differences", title: "5. Key Differences" },
  { id: "when-choose-federal", title: "6. When to Choose Federal Loans" },
  { id: "when-choose-private", title: "7. When to Consider Private Loans" },
  { id: "repayment-strategies", title: "8. Repayment Strategies" },
  { id: "tips-managing", title: "9. Tips for Managing Student Loans" },
  { id: "faqs", title: "10. FAQs" },
];

const LoanComparisonGuide = () => {
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

  const faqs = [
    {
      question: "Can I consolidate federal and private loans together?",
      answer: "No. Federal consolidation is only for federal loans. Mixing them with private loans requires private refinancing, which strips away federal protections."
    },
    {
      question: "What happens if I default on a private loan?",
      answer: "You could face collections, wage garnishment, or lawsuits. Unlike federal loans, private loans lack rehab options, so act fast if you're struggling."
    },
    {
      question: "Are private loans eligible for forgiveness?",
      answer: "Almost never. Some lenders offer discharge for death or disability, but federal forgiveness programs don't apply."
    },
    {
      question: "Can I switch private loans to federal?",
      answer: "No, but you can refinance private loans into a new private loan with better terms."
    },
    {
      question: "How do I know if I need a private loan?",
      answer: "If federal aid and other resources fall short, and you've exhausted alternatives, a private loan might be your last step—but use it cautiously."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Federal vs Private Student Loans: A Complete Comparison Guide</title>
        <meta 
          name="description" 
          content="Compare federal and private student loans side-by-side. Learn about interest rates, repayment options, forgiveness programs, and which type is best for your situation." 
        />
        <meta 
          name="keywords" 
          content="federal student loans, private student loans, student loan comparison, federal vs private loans, student loan options, student loan repayment" 
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

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Federal vs. Private Student Loans: A Complete Guide
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
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

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <TableOfContents sections={sections} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <article className="lg:w-full prose prose-lg max-w-none">
              <section id="introduction" className="scroll-mt-20">
                <p className="lead text-xl text-gray-600 mb-8">
                  Navigating the world of student loans can be daunting, but knowing the differences between federal and private options is essential for making smart financial choices. Both types of loans help you pay for education, but they vary significantly in terms of cost, flexibility, and risk. This guide breaks it all down so you can choose the right loan for your needs and manage it effectively.
                </p>
              </section>

              <section id="why-understanding-matters" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">Why Understanding Federal vs. Private Loans Matters</h2>
                <p className="mb-6">
                  Federal and private student loans both fund your education, but they come with different rules and benefits. Federal loans, backed by the U.S. government, offer protections like fixed rates and forgiveness programs, making them a safer bet for most borrowers. Private loans, offered by banks or other lenders, can cover additional costs but often have higher rates and fewer safeguards. Understanding these distinctions helps you borrow wisely and avoid unnecessary debt.
                </p>
              </section>

              <section id="federal-loans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">What Are Federal Student Loans?</h2>
                <p className="mb-6">
                  Federal student loans are provided by the U.S. Department of Education. They feature fixed interest rates, standardized terms, and benefits like income-driven repayment and loan forgiveness.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Types of Federal Loans</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Direct Subsidized Loans:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>For undergraduates with demonstrated financial need.</li>
                        <li>The government covers interest while you're in school and during deferment periods.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Direct Unsubsidized Loans:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Available to undergraduates and graduate students, no financial need required.</li>
                        <li>Interest starts accruing immediately.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Direct PLUS Loans:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>For graduate students and parents of undergraduates.</li>
                        <li>Requires a credit check.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Be a U.S. citizen or eligible non-citizen.</li>
                    <li>Enroll at least half-time in an eligible program.</li>
                    <li>Submit the Free Application for Federal Student Aid (FAFSA).</li>
                    <li>No credit check needed for subsidized or unsubsidized loans (PLUS loans require a credit check).</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Fixed Interest Rates:</span> Locked in and predictable for the life of the loan.</li>
                    <li><span className="font-semibold">Income-Driven Repayment (IDR):</span> Payments adjust to your income, with forgiveness after 20-25 years.</li>
                    <li><span className="font-semibold">Loan Forgiveness:</span> Options like Public Service Loan Forgiveness (PSLF) after 10 years of qualifying payments.</li>
                    <li><span className="font-semibold">Deferment and Forbearance:</span> Pause payments during financial hardship, with interest waived for subsidized loans.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 font-semibold">Current Rates (2023-2024):</p>
                  <ul className="list-disc pl-6 space-y-1 text-blue-800">
                    <li>Undergraduate subsidized/unsubsidized: 5.50%</li>
                    <li>Graduate unsubsidized: 7.05%</li>
                    <li>PLUS loans: 8.05%</li>
                  </ul>
                </div>
              </section>

              <section id="private-loans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">What Are Private Student Loans?</h2>
                <p className="mb-6">
                  Private student loans come from banks, credit unions, or online lenders (e.g., Sallie Mae, SoFi). They're designed to cover costs beyond what federal aid provides but offer fewer protections.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Usually requires a credit check (or a co-signer with good credit).</li>
                    <li>Enrollment in an eligible program (specifics vary by lender).</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Interest Rates:</span> Can be fixed or variable, often higher than federal rates, depending on your credit score.</li>
                    <li><span className="font-semibold">Repayment Terms:</span> Typically 5-20 years, with limited flexibility.</li>
                    <li><span className="font-semibold">Borrower Protections:</span> Minimal options for deferment, forbearance, or forgiveness.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800">
                    <span className="font-semibold">Note:</span> Private loans can be riskier due to variable rates and fewer safety nets.
                  </p>
                </div>
              </section>

              <section id="key-differences" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">Federal vs. Private Student Loans: Key Differences</h2>
                <p className="mb-6">Here's a clear comparison of the two loan types:</p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Feature</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Federal Loans</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b">Private Loans</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Interest Rates</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Fixed (e.g., 5.50% for undergrads)</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Fixed or variable (3%-15%+, credit-based)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Eligibility</td>
                        <td className="py-3 px-6 text-sm text-gray-700">FAFSA-based, no credit check (except PLUS)</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Credit check or co-signer required</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Repayment Options</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Flexible, including IDR</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Standard, graduated, or extended—less flexible</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Loan Forgiveness</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Yes (e.g., PSLF, IDR forgiveness)</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Rare or nonexistent</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Deferment/Forbearance</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Available, subsidized interest waived</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Limited, interest accrues</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Borrowing Limits</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Capped (e.g., $31,000 for dependent undergrads)</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Up to cost of attendance, varies by lender</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-sm text-gray-700 font-medium">Fees</td>
                        <td className="py-3 px-6 text-sm text-gray-700">1.057% (Direct), 4.228% (PLUS)</td>
                        <td className="py-3 px-6 text-sm text-gray-700">Varies (origination fees, late fees, etc.)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                  <p className="text-green-800">
                    <span className="font-semibold">Quick Tip:</span> Max out federal loans first—they're safer and more forgiving.
                  </p>
                </div>
              </section>

              <section id="when-choose-federal" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">When to Choose Federal Loans</h2>
                <p className="mb-4">Federal loans are usually the best option because they offer:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><span className="font-semibold">Predictable Costs:</span> Fixed rates mean no surprises.</li>
                  <li><span className="font-semibold">Flexible Repayment:</span> IDR plans adapt to your income.</li>
                  <li><span className="font-semibold">Forgiveness Opportunities:</span> PSLF or IDR can erase debt over time.</li>
                  <li><span className="font-semibold">Safety Nets:</span> Deferment and forbearance help during tough times.</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Example:</span> Sarah, a teacher, used federal loans and qualified for PSLF. After 10 years, her $30,000 balance was forgiven.
                  </p>
                </div>
              </section>

              <section id="when-choose-private" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">When to Consider Private Loans</h2>
                <p className="mb-4">Private loans make sense in certain cases:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><span className="font-semibold">Funding Shortfalls:</span> When federal aid, scholarships, and savings aren't enough.</li>
                  <li><span className="font-semibold">Great Credit:</span> A high credit score (e.g., 750+) might get you a lower rate than federal loans.</li>
                  <li><span className="font-semibold">Unique Needs:</span> International students or part-time learners may not qualify for federal aid.</li>
                </ul>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800">
                    <span className="font-semibold">Caution:</span> You'll lose federal protections, so weigh the risks carefully.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Scenario:</span> John needed $10,000 beyond federal limits. With a 780 credit score, he got a private loan at 4.5%—better than the federal 5.50%—but gave up IDR and forgiveness options.
                  </p>
                </div>
              </section>

              <section id="repayment-strategies" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">Repayment Strategies for Federal and Private Loans</h2>
                <p className="mb-6">Smart repayment keeps your loans manageable. Here's how:</p>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">For Federal Loans</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Pick the Best Plan:</span> Use IDR if your income is low or unsteady.</li>
                    <li><span className="font-semibold">Enable Autopay:</span> Save 0.25% on your interest rate.</li>
                    <li><span className="font-semibold">Chase Forgiveness:</span> Track eligibility for PSLF or IDR forgiveness.</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <h3 className="text-xl font-semibold mb-4">For Private Loans</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Refinance if Possible:</span> Lower your rate with improved credit.</li>
                    <li><span className="font-semibold">Pay Extra:</span> Focus on principal to cut total interest.</li>
                    <li><span className="font-semibold">Save for Emergencies:</span> No federal protections mean you need a backup plan.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Tool:</span> Try the Federal Student Aid Loan Simulator to test repayment options.
                  </p>
                </div>
              </section>

              <section id="tips-managing" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">Tips for Managing Student Loans</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <ul className="list-disc pl-6 space-y-3">
                    <li><span className="font-semibold">Borrow Minimally:</span> Every $1,000 at 5% adds ~$10/month for 10 years.</li>
                    <li><span className="font-semibold">Pay Interest Early:</span> Avoid capitalization by paying interest in school.</li>
                    <li><span className="font-semibold">Refinance Private Loans Only:</span> Don't refinance federal loans unless savings outweigh lost benefits.</li>
                    <li><span className="font-semibold">Stay Organized:</span> Track federal loans at StudentAid.gov and private loans via your lender's portal.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="text-yellow-800">
                    <span className="font-semibold">Warning:</span> Consolidating federal and private loans together (via private refinancing) eliminates federal benefits—avoid this.
                  </p>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-6">FAQs: Common Questions About Federal and Private Loans</h2>
                <p className="mb-4">Got questions? Here are answers:</p>
                
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-white border rounded-lg">
                      <AccordionTrigger className="px-4 hover:no-underline">
                        <span className="text-left font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </article>
          </div>
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

export default LoanComparisonGuide;
