
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StudentLoanEssentials = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Helmet>
        <title>Essential Student Loan Information | Complete Guide to Borrowing Wisely</title>
        <meta name="description" content="Understand student loan basics, federal vs private options, repayment plans, and forgiveness programs. Essential guide for managing education debt effectively." />
      </Helmet>

      {/* Progress bar */}
      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
          style={{
            '--progress-background': '#87c5f5',
            '--progress-foreground': '#2d7fbd'
          } as React.CSSProperties}
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Essential Student Loan Information
          </h1>
          <div className="flex items-center text-gray-600">
            <span className="text-lg">{readingTime}</span>
          </div>
        </header>

        {/* Table of Contents - Compact version */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <nav className="flex flex-wrap gap-2 justify-start items-center">
            <a href="#why-understanding" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-blue-50 text-blue-600 font-medium">
              Why Understanding
            </a>
            <a href="#terminology" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Terminology
            </a>
            <a href="#types" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Loan Types
            </a>
            <a href="#choosing" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Choosing Loans
            </a>
            <a href="#applying" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Applying
            </a>
            <a href="#repayment" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Repayment
            </a>
            <a href="#forgiveness" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Forgiveness
            </a>
            <a href="#strategies" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Strategies
            </a>
            <a href="#pitfalls" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Pitfalls
            </a>
            <a href="#considerations" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              Considerations
            </a>
            <a href="#faq" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 text-gray-600">
              FAQ
            </a>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <section id="why-understanding" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">Why Understanding Student Loan Matters</h2>
            <p>Student loans can be a lifeline for funding your education, but they also come with long-term financial implications. Here's why getting a handle on student loan essentials is critical:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Avoid Overborrowing:</strong> Knowing your options helps you borrow only what you need.</li>
              <li><strong>Minimize Costs:</strong> Understanding interest rates and repayment plans can save you thousands.</li>
              <li><strong>Protect Your Credit:</strong> Proper loan management keeps your credit score healthy.</li>
              <li><strong>Access Forgiveness:</strong> Certain loans and careers offer forgiveness programs, erasing part of your debt.</li>
            </ul>
            <p>With student debt at record levels, being informed is your best defense against financial strain.</p>
          </section>

          <section id="terminology" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Student Loan Terminology</h2>
            <p>Understanding the language of student loans is your foundation for navigating the borrowing process. Below are essential terms explained with examples:</p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <ul className="space-y-4">
                <li>
                  <strong>Principal:</strong> The initial amount you borrow.<br />
                  <em>Example: You take out a $10,000 loan; that's your principal.</em>
                </li>
                <li>
                  <strong>Interest:</strong> The fee for borrowing, calculated as a percentage of the principal.<br />
                  <em>Example: On a $10,000 loan with a 5% annual rate, you'd owe $500 in interest per year if unpaid.</em>
                </li>
                <li>
                  <strong>Deferment:</strong> A temporary break from payments, often during school or hardship. Interest may accrue depending on the loan type.<br />
                  <em>Example: You defer payments while in college; subsidized loans pause interest, but unsubsidized ones don't.</em>
                </li>
                <li>
                  <strong>Forbearance:</strong> A payment pause for financial difficulty, where interest accrues on all loans.<br />
                  <em>Example: During unemployment, you pause payments, but interest increases your balance.</em>
                </li>
                <li>
                  <strong>Grace Period:</strong> A post-graduation window (typically 6 months for federal loans) before repayment starts.<br />
                  <em>Example: Graduate in May, and payments begin in November.</em>
                </li>
                <li>
                  <strong>Capitalization:</strong> When unpaid interest is added to the principal, raising your total debt.<br />
                  <em>Example: $1,000 in accrued interest capitalizes, bumping your $10,000 principal to $11,000—future interest grows from there.</em>
                </li>
              </ul>
            </div>
            
            <p>Mastering these terms helps you understand how your loan evolves and what you'll owe over time.</p>
          </section>

          <section id="types" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Types of Student Loans</h2>
            <p>Student loans come in two primary flavors: federal and private. Each has distinct features, advantages, and risks. Here's the breakdown:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Federal Student Loans</h3>
            <p>Federal loans, backed by the U.S. government, offer fixed interest rates and borrower protections, making them a top choice for most students.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Key Types</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Direct Subsidized Loans:</strong> For undergrads with financial need; the government pays interest while you're in school and during the grace period.<br />
                <em>Example: A low-income student borrows $5,500, interest-free until 6 months post-graduation.</em>
              </li>
              <li>
                <strong>Direct Unsubsidized Loans:</strong> Open to all students; interest accrues from day one.<br />
                <em>Example: A grad student borrows $20,500, with interest piling up during school.</em>
              </li>
              <li>
                <strong>Direct PLUS Loans:</strong> For grad students or parents; requires a credit check and carries higher rates.<br />
                <em>Example: A parent borrows $15,000 for their child's tuition.</em>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Advantages</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fixed rates (e.g., 5.50% for undergrads in 2023-2024).</li>
              <li>Flexible repayment options, like income-driven plans.</li>
              <li>Forgiveness possibilities, such as Public Service Loan Forgiveness (PSLF).</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Drawbacks</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Borrowing caps may fall short of total costs.</li>
              <li>PLUS loans have higher rates (8.05% in 2023-2024) and fees (4.228%).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Private Student Loans</h3>
            <p>Private loans from banks, credit unions, or online lenders fill gaps federal loans can't cover but lack federal safeguards.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Key Features</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rates (fixed or variable) depend on your credit or a co-signer's.</li>
              <li>No access to federal forgiveness or income-based repayment.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Advantages</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Higher borrowing limits.</li>
              <li>Lower rates possible with strong credit.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Drawbacks</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Variable rates can climb over time.</li>
              <li>Limited help if repayment becomes tough.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Federal vs. Private Loans: Quick Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Federal Loans</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Private Loans</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Interest Rates</td>
                    <td className="border border-gray-300 px-4 py-2">Fixed (e.g., 5.50%)</td>
                    <td className="border border-gray-300 px-4 py-2">Fixed or Variable</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Forgiveness</td>
                    <td className="border border-gray-300 px-4 py-2">Yes (e.g., PSLF)</td>
                    <td className="border border-gray-300 px-4 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Credit Check</td>
                    <td className="border border-gray-300 px-4 py-2">No (except PLUS)</td>
                    <td className="border border-gray-300 px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Repayment Options</td>
                    <td className="border border-gray-300 px-4 py-2">High (IDR plans)</td>
                    <td className="border border-gray-300 px-4 py-2">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="font-semibold">Pro Tip:</p>
              <p>Always max out federal loans before turning to private ones—they're safer and more flexible.</p>
            </div>
          </section>

          <section id="choosing" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Choosing the Right Student Loan</h2>
            <p>Selecting the best loan for your situation can save you money and stress. Here's how to choose wisely:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Max Out Federal Loans First:</strong> They offer better terms and protections.</li>
              <li><strong>Compare Private Lenders:</strong> If you need additional funds, shop around for the lowest rates and best terms.</li>
              <li><strong>Avoid Variable Rates:</strong> Fixed rates provide predictability, especially for long-term loans.</li>
              <li><strong>Consider Future Income:</strong> If you expect a high salary, private loans might offer lower rates, but weigh the loss of federal benefits.</li>
            </ul>
            <p className="mt-4"><em>Example: A student with a 750+ credit score might get a private loan at 4%, beating the federal 5.50% rate—but they'd lose access to IDR and forgiveness.</em></p>
          </section>

          <section id="applying" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">How to Apply for Student Loans</h2>
            <p>Applying for student loans requires careful planning. Here's a step-by-step guide:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Complete the FAFSA (For Federal Loans)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What It Is:</strong> The Free Application for Federal Student Aid (FAFSA) determines your eligibility for federal aid.</li>
              <li><strong>How:</strong> Submit online at FAFSA.gov each year you need aid.</li>
              <li><strong>Deadline:</strong> Varies by state and school—check with your financial aid office.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. Review Your Aid Offer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What It Is:</strong> Your school's financial aid office will send an award letter detailing the loans you qualify for.</li>
              <li><strong>Action:</strong> Accept only what you need—don't overborrow.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. Complete Entrance Counseling and Sign the MPN (For Federal Loans)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Entrance Counseling:</strong> Mandatory for first-time borrowers to understand loan responsibilities.</li>
              <li><strong>Master Promissory Note (MPN):</strong> Legal agreement to repay the loan.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4. Apply for Private Loans (If Needed)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>How:</strong> Research lenders, compare rates, and apply directly through the lender's website.</li>
              <li><strong>Documentation:</strong> Proof of income, credit history, and possibly a co-signer.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Insight:</p>
              <p>Always start with federal loans—they're safer and more flexible.</p>
            </div>
          </section>

          <section id="repayment" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Repayment Plans: Federal vs. Private</h2>
            <p>Repayment is where federal and private loans differ significantly.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Federal Loan Repayment Plans</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard Plan:</strong> Fixed payments over 10 years.</li>
              <li><strong>Graduated Plan:</strong> Payments start low and increase every two years.</li>
              <li><strong>Extended Plan:</strong> Lower payments over 25 years (for borrowers with $30,000+ in loans).</li>
              <li><strong>Income-Driven Repayment (IDR) Plans:</strong> Payments based on income, with forgiveness after 20-25 years.</li>
            </ul>
            <p><strong>Best For:</strong> Borrowers seeking flexibility or pursuing forgiveness.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Private Loan Repayment Plans</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard:</strong> Fixed payments over 5-20 years.</li>
              <li><strong>Graduated or Extended:</strong> Less common, but some lenders offer them.</li>
            </ul>
            <p><strong>Best For:</strong> Borrowers with stable income who can handle fixed payments.</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold">Tip:</p>
              <p>Use IDR plans for federal loans if your income is low or unstable.</p>
            </div>
          </section>

          <section id="forgiveness" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Loan Forgiveness Programs</h2>
            <p>Several forgiveness programs can reduce or eliminate your student debt:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Public Service Loan Forgiveness (PSLF)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What It Is:</strong> Forgiveness after 120 qualifying payments while working full-time for a qualifying public service employer.</li>
              <li><strong>Best For:</strong> Teachers, nurses, government workers, etc.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. Teacher Loan Forgiveness</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What It Is:</strong> Up to $17,500 forgiven after five years of teaching in a low-income school.</li>
              <li><strong>Best For:</strong> Educators in high-need areas.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. IDR Forgiveness</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What It Is:</strong> Remaining balance forgiven after 20-25 years on an IDR plan.</li>
              <li><strong>Tax Implication:</strong> Forgiven amounts may be taxable.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Insight:</p>
              <p>PSLF offers tax-free forgiveness, while IDR forgiveness may trigger a tax bill.</p>
            </div>
          </section>

          <section id="strategies" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Strategies for Managing Student Loans</h2>
            <p>Effective loan management can save you thousands. Here are proven strategies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pay Interest Early:</strong> For unsubsidized loans, pay interest while in school to avoid capitalization.</li>
              <li><strong>Set Up Autopay:</strong> Federal loans offer a 0.25% rate reduction; some private lenders do too.</li>
              <li><strong>Refinance Private Loans:</strong> If your credit improves, refinancing can lower rates—but don't refinance federal loans unless the savings outweigh lost benefits.</li>
              <li><strong>Make Extra Payments:</strong> Target the principal to reduce total interest.</li>
            </ul>
            <p className="mt-4"><em>Example: Paying an extra $50/month on a $20,000 loan at 5% can save ~$1,000 in interest over 10 years.</em></p>
          </section>

          <section id="pitfalls" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <p>Steer clear of these mistakes to keep your loans manageable:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Overborrowing:</strong> Every $1,000 adds ~$10/month to your payment for 10 years.</li>
              <li><strong>Missing Payments:</strong> Late fees and credit damage can spiral quickly.</li>
              <li><strong>Ignoring Forgiveness:</strong> If you qualify, missing out on PSLF or IDR forgiveness costs you.</li>
              <li><strong>Consolidating Carelessly:</strong> Mixing federal and private loans eliminates federal protections.</li>
            </ul>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="font-semibold">Pro Tip:</p>
              <p>Track your loans at StudentAid.gov for federal loans and your lender's portal for private ones.</p>
            </div>
          </section>

          <section id="considerations" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">Borrowing Considerations</h2>
            <p>Borrowing smartly means planning ahead to avoid overwhelming debt. Here are key factors and tips to guide you:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. How Much to Borrow</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Guideline:</strong> Limit loans to your expected first-year salary after graduation.</li>
              <li><strong>Example:</strong> If you'll earn $40,000 as a teacher, keep total debt under $40,000.</li>
              <li><strong>Assess Needs:</strong> Include tuition, living costs, and subtract grants or scholarships.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. Interest Rates and Fees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Federal Loans:</strong> Fixed rates; no fees for subsidized/unsubsidized loans, but PLUS loans charge 4.228% (2023-2024).</li>
              <li><strong>Private Loans:</strong> Rates vary (3% to 15%+); origination fees can hit 1-10%.</li>
              <li><strong>Tip:</strong> Focus on total loan cost, not just monthly payments.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. Repayment Options</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Federal:</strong> Options include standard (10 years), graduated, extended (up to 25 years), or income-driven plans (as low as 10% of income).</li>
              <li><strong>Example:</strong> A $20,000 loan at 5% has ~$212/month standard payments; an IDR plan might cut it to $100/month with low income.</li>
              <li><strong>Private:</strong> Fixed terms (5-20 years); hardship relief is rare.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4. Loan Forgiveness and Discharge</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Forgiveness:</strong> Federal loans offer PSLF (after 120 payments in public service) or IDR forgiveness (after 20-25 years).</li>
              <li><strong>Example:</strong> A nurse with $30,000 in debt could erase it after 10 years via PSLF.</li>
              <li><strong>Discharge:</strong> Debt canceled for specific cases (e.g., school closure, disability).</li>
              <li><strong>Private Loans:</strong> Forgiveness is uncommon—review lender policies.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">5. Tips for Responsible Borrowing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Borrow Minimally:</strong> Excess funds rack up unnecessary interest.</li>
              <li><strong>Pay Interest In-School:</strong> For unsubsidized loans, small payments prevent capitalization.</li>
              <li><strong>Match Debt to Career:</strong> High-earning fields (e.g., medicine) can handle more debt than lower-paying ones (e.g., social work).</li>
              <li><strong>Avoid Variable Rates:</strong> They're risky with private loans as rates can spike.</li>
            </ul>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
              <p className="font-semibold">Caution:</p>
              <p>Overborrowing can trap you in debt for decades. For every $10,000 at 5%, expect ~$106/month for 10 years.</p>
            </div>
          </section>

          <section id="faq" className="scroll-mt-20 mt-10">
            <h2 className="text-2xl font-bold mb-4">FAQ: Common Student Loan Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">What's the difference between federal and private loans?</h3>
                <p>Federal loans have fixed rates and protections like forgiveness; private loans vary by credit and lack those benefits.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Can I pay off student loans early?</h3>
                <p>Yes, federal and most private loans allow early repayment without penalties—saving you interest.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">What happens if I can't repay?</h3>
                <p>Federal loans offer deferment, forbearance, or income-driven plans; private loans have fewer options, risking default.</p>
              </div>
            </div>
          </section>
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

export default StudentLoanEssentials;
