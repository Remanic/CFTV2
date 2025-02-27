
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  { id: "what-are", title: "1. What Are Parent PLUS Loans?" },
  { id: "why-consider", title: "2. Why Consider Parent PLUS Loans" },
  { id: "eligibility", title: "3. Eligibility Requirements" },
  { id: "how-to-apply", title: "4. How to Apply" },
  { id: "interest-fees", title: "5. Interest Rates and Fees" },
  { id: "repayment-plans", title: "6. Repayment Plans" },
  { id: "deferment", title: "7. Deferment and Forbearance" },
  { id: "forgiveness", title: "8. Loan Forgiveness Options" },
  { id: "strategies", title: "9. Management Strategies" },
  { id: "alternatives", title: "10. Alternatives" },
  { id: "faqs", title: "11. FAQs" },
];

const ParentPlusGuide = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "12 min read";

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
      question: "Can I transfer the loan to my child?",
      answer: "No, Parent PLUS Loans cannot be transferred. The parent is solely responsible for repayment."
    },
    {
      question: "What if I'm denied due to bad credit?",
      answer: "You can appeal with documentation of extenuating circumstances or use an endorser. Alternatively, your child may qualify for additional unsubsidized loans."
    },
    {
      question: "Can I consolidate Parent PLUS Loans?",
      answer: "Yes, but consolidating makes the loan eligible only for ICR, not other IDR plans like SAVE or PAYE."
    },
    {
      question: "Is there a way to lower the interest rate?",
      answer: "Refinancing with a private lender can lower rates, but you'll lose federal benefits like deferment and forgiveness."
    },
    {
      question: "What happens if I retire before the loan is paid off?",
      answer: "You're still responsible for payments. Consider extended repayment or ICR to lower monthly costs, but plan for the long-term impact on your finances."
    },
    {
      question: "Can my child make payments on my behalf?",
      answer: "Yes, but the loan remains in your name. Missed payments affect your credit, not theirs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Parent PLUS Loans: Complete Guide for Parents</title>
        <meta 
          name="description" 
          content="Learn everything about Parent PLUS Loans, including eligibility, application process, repayment options, and alternatives. Make informed decisions about financing your child's education." 
        />
        <meta 
          name="keywords" 
          content="parent plus loans, parent student loans, college financing, federal loans for parents, student loan repayment, plus loan application" 
        />
      </Helmet>

      <Header />

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

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Parent PLUS Loans: Complete Guide
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
              <section id="what-are" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">1. What Are Parent PLUS Loans?</h2>
                <p className="mb-6">
                  Parent PLUS Loans are federal loans available to parents of dependent undergraduate students to help cover the cost of their child's education. These loans are part of the Direct Loan Program, managed by the U.S. Department of Education. Unlike other federal student loans, Parent PLUS Loans are taken out in the parent's name, making the parent solely responsible for repayment.
                </p>
                <p className="mb-6">
                  Parent PLUS Loans can cover up to the full cost of attendance (minus other financial aid), but they come with higher interest rates and fees compared to other federal loans. Understanding the details of these loans is crucial to avoid unnecessary debt and manage repayment effectively.
                </p>
              </section>

              <section id="why-consider" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">2. Why Consider Parent PLUS Loans?</h2>
                <p className="mb-4">Parent PLUS Loans can be a helpful option when:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Other federal aid, scholarships, or savings don't cover the full cost of attendance.</li>
                  <li>Parents have a good credit history and can qualify for the loan.</li>
                  <li>The family prefers federal loan protections over private loans.</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="text-yellow-800">
                    However, these loans should be a last resort due to their higher costs and the fact that they cannot be transferred to the student. You must ensure you can manage the repayment without jeopardizing your financial stability.
                  </p>
                </div>
              </section>

              <section id="eligibility" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">3. Eligibility for Parent PLUS Loans</h2>
                <p className="mb-4">To qualify for a Parent PLUS Loan, you must meet the following criteria:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Be the biological or adoptive parent (or stepparent, if included on the FAFSA) of a dependent undergraduate student.</li>
                  <li>The student must be enrolled at least half-time in an eligible degree or certificate program.</li>
                  <li>Pass a credit check. If denied, you can:
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Use an endorser (similar to a co-signer).</li>
                      <li>Document extenuating circumstances.</li>
                      <li>Have the student qualify for additional unsubsidized loans instead.</li>
                    </ul>
                  </li>
                  <li>Not be in default on any federal student loans.</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Key Insight:</span> Unlike other federal loans, Parent PLUS Loans require a credit check, but they don't have strict credit score requirements. Adverse credit history (e.g., bankruptcy, foreclosure) can lead to denial.
                  </p>
                </div>
              </section>

              <section id="how-to-apply" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">4. How to Apply for Parent PLUS Loans</h2>
                <p className="mb-6">Applying for a Parent PLUS Loan is straightforward but requires careful attention. Here's the step-by-step process:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">1. Complete the FAFSA</h3>
                    <p>The student must submit the Free Application for Federal Student Aid (FAFSA) each year to determine eligibility for federal aid, including Parent PLUS Loans.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">2. Submit the Parent PLUS Loan Application</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Apply online at StudentAid.gov.</li>
                      <li>You'll need to specify the loan amount (up to the cost of attendance minus other aid).</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">3. Complete the Master Promissory Note (MPN)</h3>
                    <p>Sign the MPN to agree to the loan terms. This is a legal document outlining your responsibility to repay the loan.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">4. Review the Loan Disbursement</h3>
                    <p>The loan is typically disbursed directly to the school to cover tuition and fees. Any remaining funds are sent to you or the student.</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-6">
                  <p className="text-green-800">
                    <span className="font-semibold">Pro Tip:</span> Borrow only what you need. The loan can cover up to the full cost of attendance, but overborrowing can lead to unnecessary debt.
                  </p>
                </div>
              </section>

              <section id="interest-fees" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">5. Interest Rates and Fees</h2>
                <p className="mb-6">Parent PLUS Loans have higher interest rates and fees compared to other federal loans:</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <ul className="space-y-2">
                    <li><span className="font-semibold">Interest Rate (2023-2024):</span> 8.05% (fixed for the life of the loan).</li>
                    <li><span className="font-semibold">Loan Fee:</span> 4.228% of the loan amount, deducted from each disbursement.</li>
                  </ul>
                  
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">Example: For a $10,000 Parent PLUS Loan:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Loan fee: $422.80 (4.228% of $10,000).</li>
                      <li>Amount disbursed to the school: $9,577.20.</li>
                      <li>Interest will accrue at 8.05% on the full $10,000.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Insight:</span> The higher interest rate and fees make Parent PLUS Loans more expensive than subsidized or unsubsidized loans, so consider them carefully.
                  </p>
                </div>
              </section>

              <section id="repayment-plans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">6. Repayment Plans for Parent PLUS Loans</h2>
                <p className="mb-6">Repayment for Parent PLUS Loans begins immediately after the loan is fully disbursed, but you can request deferment while the student is enrolled at least half-time and for 6 months after. Here are the repayment options:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">1. Standard Repayment Plan</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fixed payments over 10 years.</li>
                      <li>Best for parents who can afford consistent, higher payments.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">2. Graduated Repayment Plan</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Payments start low and increase every two years over 10 years.</li>
                      <li>Best for parents expecting their income to rise.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">3. Extended Repayment Plan</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fixed or graduated payments over up to 25 years.</li>
                      <li>Eligibility: Must have more than $30,000 in federal loans.</li>
                      <li>Best for parents needing lower monthly payments but willing to pay more interest over time.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">4. Income-Contingent Repayment (ICR) Plan</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Available only after consolidating the Parent PLUS Loan into a Direct Consolidation Loan.</li>
                      <li>Payments are 20% of discretionary income or what you'd pay on a 12-year fixed plan, whichever is lower.</li>
                      <li>Best for parents with low income relative to their debt.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-6 mb-4">
                  <p className="text-yellow-800">
                    <span className="font-semibold">Important Note:</span> Parent PLUS Loans are not directly eligible for other income-driven repayment (IDR) plans like SAVE, PAYE, or IBR. Consolidation is required to access ICR, but this may not always be beneficial.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Tip:</span> Use the Federal Student Aid Loan Simulator to compare repayment plans and estimate monthly payments.
                  </p>
                </div>
              </section>

              <section id="deferment" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">7. Deferment and Forbearance</h2>
                <p className="mb-6">If you're struggling to make payments, you can pause them through:</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <ul className="space-y-4">
                    <li><span className="font-semibold">Deferment:</span> Available while the student is enrolled at least half-time and for 6 months after. Interest accrues during deferment.</li>
                    <li><span className="font-semibold">Forbearance:</span> Available for up to 12 months at a time for financial hardship. Interest accrues.</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800">
                    <span className="font-semibold">Caution:</span> Interest capitalization after deferment or forbearance can significantly increase your loan balance.
                  </p>
                </div>
              </section>

              <section id="forgiveness" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">8. Loan Forgiveness and Discharge</h2>
                <p className="mb-6">Parent PLUS Loans have limited forgiveness options compared to other federal loans:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Public Service Loan Forgiveness (PSLF):</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Available only if the parent (borrower) works full-time for a qualifying employer and consolidates the loan to access the ICR plan.</li>
                      <li>Forgiveness after 120 qualifying payments.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Income-Contingent Repayment (ICR) Forgiveness:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Remaining balance forgiven after 25 years of payments under ICR.</li>
                      <li>Forgiven amounts may be taxable.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Discharge Programs:</h3>
                    <p>Available for total and permanent disability of the parent or student, or death of the parent or student.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6 mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Insight:</span> PSLF is only available to the parent if they meet the employment requirements—working in public service themselves, not the student.
                  </p>
                </div>
              </section>

              <section id="strategies" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">9. Strategies for Managing Parent PLUS Loans</h2>
                <p className="mb-4">To manage Parent PLUS Loans responsibly and minimize costs:</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Borrow Only What You Need:</span> Avoid taking the maximum amount offered.</li>
                    <li><span className="font-semibold">Consider Repayment While the Student Is in School:</span> Making interest payments during deferment prevents capitalization.</li>
                    <li><span className="font-semibold">Explore Refinancing (With Caution):</span> Refinancing with a private lender can lower rates but eliminates federal protections.</li>
                    <li><span className="font-semibold">Plan for Retirement:</span> Ensure loan payments don't interfere with retirement savings—your financial health matters too.</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                  <p className="text-green-800">
                    <span className="font-semibold">Pro Tip:</span> If your child plans to pursue a high-paying career, consider an agreement where they help with repayment after graduation (though this isn't legally binding).
                  </p>
                </div>
              </section>

              <section id="alternatives" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">10. Alternatives to Parent PLUS Loans</h2>
                <p className="mb-4">Before committing to a Parent PLUS Loan, explore these options:</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Student's Federal Loans:</span> Encourage your child to max out their subsidized and unsubsidized loans first.</li>
                    <li><span className="font-semibold">Private Student Loans:</span> May offer lower rates for borrowers with excellent credit, but lack federal protections.</li>
                    <li><span className="font-semibold">Home Equity Loans:</span> Can have lower rates but put your home at risk.</li>
                    <li><span className="font-semibold">Payment Plans:</span> Many schools offer interest-free monthly payment plans.</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <span className="font-semibold">Key Insight:</span> Always exhaust federal student loan options before considering Parent PLUS or private loans.
                  </p>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-6">11. FAQs: Common Questions About Parent PLUS Loans</h2>
                <p className="mb-4">Here are answers to frequently asked questions:</p>
                
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

export default ParentPlusGuide;
