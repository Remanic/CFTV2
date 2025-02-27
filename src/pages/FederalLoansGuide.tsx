
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
  { id: "what-are-federal-loans", title: "1. What Are Federal Loans?" },
  { id: "why-choose-federal", title: "2. Why Choose Federal Loans" },
  { id: "types-of-loans", title: "3. Types of Federal Loans" },
  { id: "important-statistics", title: "4. Important Statistics" },
  { id: "eligibility", title: "5. Eligibility Requirements" },
  { id: "how-to-apply", title: "6. How to Apply" },
  { id: "repayment-plans", title: "7. Repayment Plans" },
  { id: "loan-forgiveness", title: "8. Loan Forgiveness Options" },
  { id: "deferment", title: "9. Deferment & Forbearance" },
  { id: "managing-loans", title: "10. Managing Loans Responsibly" },
  { id: "tax-implications", title: "11. Tax Implications" },
  { id: "faqs", title: "12. FAQs" },
];

const FederalLoansGuide = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "18 min read";

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
      question: "Can I switch repayment plans?",
      answer: "Yes, you can switch anytime by contacting your loan servicer."
    },
    {
      question: "What if I can't afford payments?",
      answer: "Apply for an IDR plan or request deferment/forbearance."
    },
    {
      question: "Is loan consolidation a good idea?",
      answer: "It simplifies repayment but may extend terms and increase total interest. Evaluate carefully."
    },
    {
      question: "How do I apply for PSLF?",
      answer: "Submit the Employment Certification Form annually to track progress toward 120 qualifying payments."
    },
    {
      question: "Can I refinance federal loans?",
      answer: "Yes, but refinancing with a private lender eliminates federal protections. Only do this if the savings are significant."
    },
    {
      question: "What happens if I die or become disabled?",
      answer: "Your loans may be discharged—apply through DisabilityDischarge.com for disability or have your family contact your servicer for death discharge."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Federal Student Loans 101: Complete Guide to Federal Loan Options</title>
        <meta name="description" content="Learn everything about federal student loans, including types, benefits, interest rates, application process, and repayment options. Your complete guide to making informed borrowing decisions." />
        <meta name="keywords" content="federal student loans, direct subsidized loans, direct unsubsidized loans, PLUS loans, student loan repayment, loan forgiveness, FAFSA" />
        <link rel="canonical" href="https://yourwebsite.com/federal-loans-guide" />
      </Helmet>

      <Header />

      {/* Progress bar - consistently positioned below header */}
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
              Federal Student Loans 101: Complete Guide
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

          {/* Table of Contents - Compact version */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <TableOfContents sections={sections} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <article className="lg:w-full prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Federal student loans are an essential resource for financing higher education. This comprehensive guide explains everything you need to know about federal loans, from types and eligibility to application processes and repayment options, helping you make informed decisions about your educational funding.
              </p>

              <section id="what-are-federal-loans" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">1. What Are Federal Loans?</h2>
                <p>
                  Federal loans are loans provided by the U.S. government to help students and their families pay for post-secondary education. Managed by the Department of Education, these loans come with standardized terms, fixed interest rates, and borrower protections that private loans often lack. They are a popular choice due to their flexible repayment options, potential for forgiveness, and safeguards like deferment or forbearance during financial hardship.
                </p>
              </section>

              <section id="why-choose-federal" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">2. Why Choose Federal Loans?</h2>
                <p>Federal loans offer several advantages over private loans:</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold">Fixed Interest Rates:</span> Rates are set by law and remain unchanged throughout the loan term.</li>
                    <li><span className="font-semibold">Flexible Repayment Plans:</span> Options like income-driven repayment (IDR) adjust based on your income.</li>
                    <li><span className="font-semibold">Loan Forgiveness Programs:</span> Forgiveness is available after a set number of payments, especially for public service workers.</li>
                    <li><span className="font-semibold">Borrower Protections:</span> Options to pause payments during hardship without interest accrual (for subsidized loans).</li>
                  </ul>
                  <p className="mt-4">These benefits make federal loans more manageable and less risky than private loans.</p>
                </div>
              </section>

              <section id="types-of-loans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">3. Types of Federal Loans and Annual Limits</h2>
                <p className="mb-6">There are four main types of federal loans, each with specific features and annual borrowing limits. Below are the details, including annual limits for each type.</p>
                
                <div className="space-y-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">1. Direct Subsidized Loans</h3>
                    <div className="space-y-4">
                      <p><span className="font-semibold">Eligibility:</span> Available to undergraduate students with demonstrated financial need.</p>
                      <p><span className="font-semibold">Interest:</span> The government pays interest while you're in school (at least half-time), during the 6-month grace period after leaving school, and during deferment.</p>
                      
                      <div>
                        <p className="font-semibold mb-2">Annual Limits:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>1st Year Undergraduate: $3,500</li>
                          <li>2nd Year Undergraduate: $4,500</li>
                          <li>3rd Year and Beyond Undergraduate: $5,500</li>
                        </ul>
                      </div>
                      
                      <p><span className="font-semibold">Best For:</span> Students needing help with education costs while minimizing interest accrual.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">2. Direct Unsubsidized Loans</h3>
                    <div className="space-y-4">
                      <p><span className="font-semibold">Eligibility:</span> Available to undergraduate, graduate, and professional students—no financial need required.</p>
                      <p><span className="font-semibold">Interest:</span> You're responsible for all interest, which begins accruing immediately upon disbursement. Interest accrues while you're in school, during the grace period, and during deferment.</p>
                      
                      <div>
                        <p className="font-semibold mb-2">Annual Limits:</p>
                        <ul className="list-none pl-0 space-y-2">
                          <li>
                            <p className="font-medium">Undergraduate (Dependent Students):</p>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>1st Year: $5,500 (minus any subsidized loan amount)</li>
                              <li>2nd Year: $6,500 (minus any subsidized loan amount)</li>
                              <li>3rd Year and Beyond: $7,500 (minus any subsidized loan amount)</li>
                            </ul>
                          </li>
                          <li>
                            <p className="font-medium">Undergraduate (Independent Students):</p>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>1st Year: $9,500 (minus any subsidized loan amount)</li>
                              <li>2nd Year: $10,500 (minus any subsidized loan amount)</li>
                              <li>3rd Year and Beyond: $12,500 (minus any subsidized loan amount)</li>
                            </ul>
                          </li>
                          <li>Graduate/Professional Students: $20,500</li>
                        </ul>
                      </div>
                      
                      <p><span className="font-semibold">Best For:</span> Students who don't qualify for subsidized loans but need additional funding.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">3. Direct PLUS Loans</h3>
                    <div className="space-y-4">
                      <p><span className="font-semibold">Eligibility:</span> Available to graduate students, professional students, and parents of dependent undergraduate students. Requires a credit check (or an endorser if credit is denied).</p>
                      <p><span className="font-semibold">Interest:</span> You're responsible for all interest, which begins accruing immediately upon disbursement. Interest rates are higher than subsidized or unsubsidized loans.</p>
                      <p><span className="font-semibold">Annual Limits:</span> Up to the cost of attendance minus other financial aid received.</p>
                      <p><span className="font-semibold">Best For:</span> Covering remaining education costs after other financial aid is exhausted.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">4. Federal Perkins Loans (Discontinued)</h3>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-yellow-800"><span className="font-semibold">Note:</span> This program ended in 2017, and no new loans are available. Existing borrowers continue to repay under the original terms.</p>
                      </div>
                      <p><span className="font-semibold">Annual Limits (When Available):</span> Varied by school, typically up to $5,500 per year for undergraduates.</p>
                      <p><span className="font-semibold">Best For:</span> Existing borrowers managing repayment of these loans.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="important-statistics" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">4. Important Numerical Statistics</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interest Rates (2023-2024):</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Direct Subsidized and Unsubsidized Loans (Undergraduate): 5.50%</li>
                        <li>Direct Unsubsidized Loans (Graduate/Professional): 7.05%</li>
                        <li>Direct PLUS Loans: 8.05%</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Loan Fees:</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Direct Subsidized and Unsubsidized Loans: 1.057% (deducted from disbursement)</li>
                        <li>Direct PLUS Loans: 4.228% (deducted from disbursement)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Aggregate Loan Limits (Lifetime Maximums):</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Undergraduate (Dependent Students): $31,000 (up to $23,000 can be subsidized)</li>
                        <li>Undergraduate (Independent Students): $57,500 (up to $23,000 can be subsidized)</li>
                        <li>Graduate/Professional Students: $138,500 (including undergraduate loans)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800"><span className="font-semibold">Loan Fee Example:</span> For a $10,000 Direct Subsidized Loan with a 1.057% fee, the disbursed amount is $9,894.30.</p>
                      <p className="text-blue-800 mt-2"><span className="font-semibold">Tip:</span> Use the Federal Student Aid Loan Simulator to estimate payments and compare loan types based on your needs.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="eligibility" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">5. Eligibility for Federal Loans</h2>
                <p className="mb-4">To qualify for federal loans, you must meet the following criteria:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Be a U.S. citizen, national, or eligible non-citizen.</li>
                  <li>Have a valid Social Security number.</li>
                  <li>Be enrolled at least half-time in an eligible degree or certificate program at a participating school.</li>
                  <li>Maintain satisfactory academic progress as defined by your school.</li>
                  <li>Not be in default on any existing federal student loans.</li>
                  <li>For PLUS Loans: Pass a credit check (or use an endorser if credit is denied).</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800"><span className="font-semibold">Key Insight:</span> Subsidized and unsubsidized loans do not require a credit check, making them accessible to most students. Only PLUS Loans require a credit check.</p>
                </div>
              </section>
              
              <section id="how-to-apply" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">6. How to Apply for Federal Loans</h2>
                <p className="mb-4">Follow these steps to apply for federal loans:</p>
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li><span className="font-semibold">Complete the FAFSA:</span> Submit the Free Application for Federal Student Aid annually at FAFSA.gov to determine eligibility for loans and other aid.</li>
                  <li><span className="font-semibold">Review Your Financial Aid Offer:</span> Your school will send an award letter detailing the loans you're eligible for. Accept only the loans you need.</li>
                  <li><span className="font-semibold">Complete Entrance Counseling:</span> Mandatory for first-time borrowers to ensure you understand your responsibilities. Available at StudentAid.gov.</li>
                  <li><span className="font-semibold">Sign the Master Promissory Note (MPN):</span> Legally agree to the loan terms at StudentAid.gov.</li>
                </ol>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800"><span className="font-semibold">Pro Tip:</span> Save copies of your FAFSA, financial aid award letter, and MPN for your records.</p>
                </div>
              </section>
              
              <section id="repayment-plans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">7. Repayment Plans for Federal Loans</h2>
                <p className="mb-6">Federal loans offer several repayment options to suit different financial situations:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Standard Repayment Plan:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fixed payments over 10 years.</li>
                      <li>Best for borrowers who can afford consistent payments.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Graduated Repayment Plan:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Payments start low and increase every 2 years over a 10-year term.</li>
                      <li>Best for borrowers expecting income to rise over time.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Extended Repayment Plan:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fixed or graduated payments over up to 25 years.</li>
                      <li>Available for borrowers with more than $30,000 in federal loans.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Income-Driven Repayment (IDR) Plans:</h3>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><span className="font-semibold">SAVE Plan:</span> Payments as low as 5% of discretionary income. Payments can be $0 if income is below 225% of the federal poverty line.</li>
                      <li><span className="font-semibold">Pay As You Earn (PAYE):</span> Payments are 10% of discretionary income, capped at the standard 10-year payment amount.</li>
                      <li><span className="font-semibold">Income-Based Repayment (IBR):</span> Payments are 10%-15% of discretionary income, depending on when you borrowed.</li>
                      <li><span className="font-semibold">Income-Contingent Repayment (ICR):</span> Payments are 20% of discretionary income or the amount on a 12-year fixed plan, whichever is lower.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800"><span className="font-semibold">Numerical Stat:</span> Under the SAVE Plan, payments can be as low as $0 if your income is below 225% of the federal poverty line.</p>
                  </div>
                </div>
              </section>
              
              <section id="loan-forgiveness" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">8. Loan Forgiveness, Cancellation, and Discharge</h2>
                <p className="mb-6">Federal loans offer several forgiveness and discharge options:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Public Service Loan Forgiveness (PSLF):</h3>
                    <p>Forgiveness after 120 qualifying payments while working full-time for a qualifying public service employer.</p>
                    <div className="mt-2 bg-blue-50 p-3 rounded">
                      <p className="text-blue-800"><span className="font-semibold">Numerical Stat:</span> As of 2023, over 600,000 borrowers have received PSLF forgiveness, totaling $42 billion.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Teacher Loan Forgiveness:</h3>
                    <p>Up to $17,500 forgiven after 5 consecutive years of teaching in a low-income school or educational service agency.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Income-Driven Repayment (IDR) Forgiveness:</h3>
                    <p>Remaining balance forgiven after 20-25 years of payments under an IDR plan.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Discharge Programs:</h3>
                    <p>Available for total and permanent disability, death of the borrower, or school closure.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800"><span className="font-semibold">Key Insight:</span> PSLF forgiveness is tax-free, but IDR forgiveness may be taxable as income.</p>
                  </div>
                </div>
              </section>
              
              <section id="deferment" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">9. Deferment and Forbearance</h2>
                <p className="mb-6">If you're struggling to make payments, you can pause them through:</p>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Deferment:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Temporarily pause payments.</li>
                      <li>Interest is waived for subsidized loans but accrues for unsubsidized and PLUS loans.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Forbearance:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Temporarily pause payments for up to 12 months at a time (no overall limit).</li>
                      <li>Interest accrues on all loans during forbearance.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800"><span className="font-semibold">Insight:</span> Use deferment or forbearance sparingly, as accrued interest may be capitalized (added to the principal), increasing your balance.</p>
                  </div>
                </div>
              </section>
              
              <section id="managing-loans" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">10. Managing Federal Loans Responsibly</h2>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li><span className="font-semibold">Make Timely Payments:</span> Set up autopay to receive a 0.25% interest rate reduction.</li>
                  <li><span className="font-semibold">Avoid Default:</span> Occurs after 270 days of non-payment, leading to consequences like wage garnishment or credit damage.</li>
                  <li><span className="font-semibold">Consider Consolidation:</span> Combine multiple federal loans into one, but be aware it may extend repayment terms and increase total interest paid. Consolidation also eliminates certain benefits (e.g., Perkins Loan forgiveness).</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800"><span className="font-semibold">Pro Tip:</span> Track your loan balance and repayment status at StudentAid.gov.</p>
                </div>
              </section>
              
              <section id="tax-implications" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">11. Tax Implications</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Student Loan Interest Deduction:</h3>
                    <p>Deduct up to $2,500 of student loan interest annually if your income is under $85,000 (single) or $170,000 (married filing jointly).</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Forgiveness Taxation:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>PSLF forgiveness is tax-free.</li>
                      <li>IDR forgiveness may be treated as taxable income, depending on future tax laws.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800"><span className="font-semibold">Insight:</span> Save for potential taxes if pursuing IDR forgiveness, as the forgiven amount could be taxed.</p>
                  </div>
                </div>
              </section>
              
              <section id="faqs" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-6">12. FAQs</h2>
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

      {/* Scroll to top button */}
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

export default FederalLoansGuide;
