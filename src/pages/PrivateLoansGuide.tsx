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
  { id: "introduction", title: "1. Introduction" },
  { id: "what-is", title: "2. What is a Private Loan?" },
  { id: "why-consider", title: "3. Why Consider a Private Loan" },
  { id: "features", title: "4. Features of Private Loans" },
  { id: "how-to-apply", title: "5. How to Apply" },
  { id: "repayment", title: "6. Repaying a Private Loan" },
  { id: "management", title: "7. Managing Private Loans" },
  { id: "long-term-impact", title: "8. Long-Term Impact" },
  { id: "is-it-right", title: "9. Is a Private Loan Right for You?" },
  { id: "faqs", title: "10. FAQs" },
];

const faqs = [
  {
    question: "Can I refinance my private loan?",
    answer: "Yes, refinancing can lower rates (e.g., from 10% to 6%), but you lose original deferment options."
  },
  {
    question: "What if I can't make payments?",
    answer: "Contact your lender—some offer 3-6 months of forbearance, but interest accrues."
  },
  {
    question: "Is forgiveness available?",
    answer: "No federal-style forgiveness. Some lenders discharge loans for death or disability—check your terms."
  },
  {
    question: "How do co-signers work?",
    answer: "They're equally liable. Missed payments hit their credit too. Release after 12-36 payments is possible with some lenders."
  },
  {
    question: "Are private loans ever better than federal loans?",
    answer: "Rarely. Federal loans offer lower rates, income-driven plans, and forgiveness (e.g., PSLF). Private loans suit only those who've maxed federal aid and can handle the risks."
  },
  {
    question: "Can I pay off my loan early?",
    answer: "Yes, most lenders allow it without penalties—confirm in your contract."
  }
];

const PrivateLoansGuide = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Understanding Private Student Loans: A Complete Guide</title>
        <meta 
          name="description" 
          content="Learn everything about private student loans, including types, rates, application process, and management strategies. Make informed decisions about financing your education." 
        />
        <meta 
          name="keywords" 
          content="private student loans, student loan rates, student loan application, student loan management, student loan repayment" 
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
              Understanding Private Loans: A Borrower's Guide
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

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <TableOfContents sections={sections} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <article className="lg:w-full prose prose-lg max-w-none">
              <section id="introduction" className="scroll-mt-20">
                <p className="lead text-xl text-gray-600 mb-8">
                  Navigating private loans can feel overwhelming, but it doesn't have to be. This guide is designed to help you understand private loans clearly and confidently, with a focus on your needs as a borrower. We'll cover what private loans are, how they work, their risks and benefits, and most importantly, how to manage them without stress. Think of this as your roadmap to avoiding common pitfalls and making informed decisions.
                </p>
              </section>

              <section id="what-is" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">2. What is a Private Loan?</h2>
                <p className="mb-6">
                  A private loan is money borrowed from a non-government lender, such as a bank, credit union, or online platform (e.g., SoFi, Earnest). Unlike federal loans, which come with standard terms and protections, private loans are tailored to each lender's rules. They're often used for expenses like education, home renovations, or consolidating debt when other funding falls short.
                </p>
                <p className="mb-6">
                  <b>How Do Private Loans Work?</b>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><b>Borrowing:</b> You apply through a lender, who evaluates your credit, income, and sometimes a co-signer's details.</li>
                  <li><b>Approval:</b> If approved, the lender sets your interest rate, repayment term, and any fees.</li>
                  <li><b>Repayment:</b> You repay the loan in monthly installments, often starting immediately or after a grace period.</li>
                </ul>
                <p className="mb-6">
                  <b>Key Differences from Federal Loans</b>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><b>Interest Rates:</b> Private loans can have higher, variable rates.</li>
                  <li><b>Repayment Flexibility:</b> Fewer options for adjusting payments based on income.</li>
                  <li><b>Borrower Protections:</b> Limited or no access to deferment, forgiveness, or income-driven plans.</li>
                </ul>
                <p className="mb-6">
                  <b>Real-Life Example:</b> Sarah, a medical student, maxed out her federal loans but needed $20,000 more for tuition. With a 780 credit score, she secured a private loan at 4.5%—lower than the federal 6.53% rate. However, she knew she'd miss out on federal perks like forgiveness, so she weighed her options carefully.
                </p>
                <p className="mb-6">
                  Private loans can be a lifeline, but they come with risks. Knowing how they work is your first step to avoiding surprises.
                </p>
              </section>

              <section id="why-consider" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">3. Why Consider a Private Loan?</h2>
                <p className="mb-4">Private loans aren't the first choice, but they can serve specific needs:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><b>Filling Funding Gaps:</b> When federal aid, scholarships, or savings don't cover the full cost (e.g., tuition, housing).</li>
                  <li><b>Higher Borrowing Limits:</b> Federal loans cap at $5,500-$12,500/year for undergrads, but private loans can cover up to the school's total cost.</li>
                  <li><b>Special Circumstances:</b> International students or part-time learners may not qualify for federal aid.</li>
                  <li><b>Lower Rates (Rare):</b> Borrowers with excellent credit (750+) might get better rates than federal unsubsidized loans, though this is uncommon.</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="text-yellow-800">
                    <b>Trade-Off:</b> Private loans lack federal perks like income-driven repayment or forgiveness. Use them only after exhausting cheaper options.
                  </p>
                </div>
              </section>

              <section id="features" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">4. Features of Private Loans: What to Expect</h2>
                <p className="mb-6">Private loans vary widely. Here's a breakdown of the key features:</p>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li>
                    <p><b>Interest Rates</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Fixed:</b> Stay the same (e.g., 5% for 10 years).</li>
                      <li><b>Variable:</b> Tied to market indexes (e.g., SOFR), starting lower but potentially rising (e.g., 3% to 10%+).</li>
                    </ul>
                    <p><b>Credit Rating Impact</b></p>
                    <p>Your credit score (or your co-signer's) dictates your rate:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Excellent (750+): 3.5%-6% fixed.</li>
                      <li>Good (700-749): 5%-8%.</li>
                      <li>Fair (650-699): 7%-12%.</li>
                      <li>Poor (Below 650): 10%-15%+, often requiring a co-signer.</li>
                    </ul>
                    <p><b>Scenario:</b> A $20,000 loan at 5% over 10 years costs ~$6,600 in interest. At 10%, it jumps to ~$14,500—credit is crucial!</p>
                  </li>
                  <li>
                    <p><b>Repayment Terms</b></p>
                    <p><b>Duration:</b> 5-20 years. Shorter terms mean higher payments but less total interest.</p>
                    <p><b>Example:</b> A $30,000 loan at 6% over 10 years = $333/month. Over 20 years = $215/month but with $21,600 more in interest.</p>
                  </li>
                  <li>
                    <p><b>Borrowing Limits</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Undergrads: $50,000-$100,000.</li>
                      <li>Graduate Students: $150,000-$300,000.</li>
                      <li>Professional Degrees (e.g., Medical): Up to $500,000+.</li>
                      <li>Poor Credit: $10,000-$20,000 max, often with a co-signer.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Repayment Structures</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Immediate Repayment:</b> Full payments start 30-60 days after disbursement.</li>
                      <li><b>Interest-Only:</b> Pay interest while in school (e.g., $50-$100/month), deferring principal.</li>
                      <li><b>Deferred:</b> No payments until 6 months post-graduation, but interest accrues and capitalizes (e.g., $20,000 at 6% grows to $22,400 in 3 years).</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Fees</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Origination Fees:</b> 1%-5% of the loan (e.g., 3% on $20,000 = $600).</li>
                      <li><b>Late Fees:</b> $25-$50 per missed payment.</li>
                      <li><b>Prepayment Penalties:</b> Rare but possible—some lenders charge for early payoff.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Co-Signer Rules</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Required:</b> For borrowers with limited credit.</li>
                      <li><b>Release:</b> Some lenders allow release after 12-36 on-time payments, but not all.</li>
                    </ul>
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800"><b>Pro Tip:</b> Compare multiple lenders. A 1% rate difference on $50,000 can save ~$5,000 over 10 years.</p>
                </div>
              </section>

              <section id="how-to-apply" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">5. Applying for a Private Loan: A Step-by-Step Guide</h2>
                <p className="mb-6">Applying for a private loan requires preparation. Here's how to do it right:</p>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li><b>Research Lenders:</b> Compare banks, credit unions, and online platforms. Look at rates, fees, and reviews.</li>
                  <li><b>Check Eligibility:</b> Most lenders require a 650+ credit score and a low debt-to-income ratio.</li>
                  <li><b>Apply:</b> Submit personal, financial, and school info (co-signer details if needed).</li>
                  <li><b>Credit Check:</b> Lenders do a hard inquiry—apply to 2-3 lenders within 14 days to minimize credit score impact.</li>
                  <li><b>Choose a Plan:</b> Pick immediate, interest-only, or deferred repayment.</li>
                  <li><b>Review the Disclosure:</b> Ensure rates, terms, and fees are correct—errors are binding.</li>
                  <li><b>Set Up Payments:</b> Link a bank account. Autopay often reduces rates by 0.25%.</li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800"><b>Advice:</b> Don't take the first offer. Comparing lenders can save thousands.</p>
                </div>
              </section>

              <section id="repayment" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">6. Repaying a Private Loan: What You Need to Know</h2>
                <p className="mb-6">Repayment can feel daunting, but understanding your options helps. Here's the breakdown:</p>
                <p><b>Repayment Plan Options</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Standard:</b> Fixed monthly payments over the loan term.</li>
                  <li><b>Graduated:</b> Start with lower payments that increase over time (rare).</li>
                  <li><b>Extended:</b> Longer terms for lower payments (less common).</li>
                </ul>
                <p><b>Choosing the Right Plan</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Budget-Friendly:</b> Pick a term that keeps payments manageable (e.g., $200-$300/month).</li>
                  <li><b>Cost-Saving:</b> Shorter terms reduce total interest but raise monthly costs.</li>
                </ul>
                <p><b>Timely Payments Matter</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Late Fees:</b> $25-$50 per missed payment.</li>
                  <li><b>Credit Impact:</b> Late payments hurt your score, making future loans costlier.</li>
                </ul>
                <p><b>Consequences of Default</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Collections:</b> Lenders can send your debt to collectors.</li>
                  <li><b>Legal Action:</b> Wage garnishment or lawsuits are possible.</li>
                  <li><b>Credit Damage:</b> Default stays on your report for 7 years, blocking future credit.</li>
                </ul>
                <p className="mb-6"><b>Scenario:</b> John missed three payments on his $15,000 loan. His lender added $150 in late fees and reported him to credit bureaus, dropping his score by 100 points.</p>
              </section>

              <section id="management" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">7. Managing Private Loans Effectively: Tips and Strategies</h2>
                <p className="mb-6">Private loans demand careful management. Here's how to stay on top:</p>
                <ol className="list-decimal pl-6 space-y-4 mb-6">
                  <li>
                    <p><b>Budgeting and Saving</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Track Spending:</b> Use apps like Mint or YNAB to monitor expenses.</li>
                      <li><b>Emergency Fund:</b> Save 3-6 months of loan payments for unexpected costs.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Avoiding Pitfalls</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Don't Overborrow:</b> Every $10,000 at 7% adds ~$120/month for 10 years.</li>
                      <li><b>Read Statements:</b> Check for errors or rate changes (variable loans).</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Paying Off Debt Faster</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Extra Payments:</b> Pay $50-$100 extra each month to cut interest.</li>
                      <li><b>Biweekly Payments:</b> Split monthly payments in half every two weeks—adds an extra payment per year.</li>
                    </ul>
                  </li>
                  <li>
                    <p><b>Negotiating with Lenders</b></p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><b>Rate Reduction:</b> Ask for a lower rate if your credit improves.</li>
                      <li><b>Hardship Options:</b> Some lenders offer temporary payment pauses—ask before you miss a payment.</li>
                    </ul>
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800"><b>Insight:</b> Treat private loans like a mortgage—prioritize repayment and avoid unnecessary debt.</p>
                </div>
              </section>

              <section id="long-term-impact" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">8. The Long-Term Impact of Private Loans</h2>
                <p className="mb-6">Private loans can shape your financial future. Here's what to expect:</p>
                <p><b>Effects on Credit and Finances</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Credit Score:</b> On-time payments boost your score; misses hurt it.</li>
                  <li><b>Debt-to-Income Ratio:</b> High debt limits your ability to borrow for a home or car.</li>
                </ul>
                <p><b>Managing Debt Stress</b></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><b>Stay Organized:</b> Use a calendar for payment due dates.</li>
                  <li><b>Seek Support:</b> Talk to a financial counselor or join a debt support group.</li>
                </ul>
                <p className="mb-6"><b>Real-Life Example:</b> Maria felt overwhelmed by her $40,000 loan. She joined a debt management program, refinanced to a lower rate, and paid it off in 7 years instead of 10.</p>
              </section>

              <section id="is-it-right" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">9. Is a Private Loan Right for You?</h2>
                <p className="mb-4">Consider a private loan only if:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Federal aid, grants, and savings are exhausted.</li>
                  <li>You or a co-signer have strong credit for competitive rates.</li>
                  <li>You're confident in your post-grad income.</li>
                  <li>You're in a high-cost, high-return field (e.g., engineering, medicine).</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800"><b>Preference:</b> Federal loans first—their protections outweigh private loan perks.</p>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-6">10. FAQs: Your Top Questions Answered</h2>
                <p className="mb-4">Here's what borrowers often ask:</p>
                
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

export default PrivateLoansGuide;
