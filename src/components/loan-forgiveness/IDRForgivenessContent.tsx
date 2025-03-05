
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp, Calculator, Award, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sections = [
  { id: "what-is-idr-forgiveness", title: "1. What Is IDR Forgiveness?" },
  { id: "eligible-plans", title: "2. Eligible IDR Plans" },
  { id: "requirements", title: "3. Requirements" },
  { id: "timeline", title: "4. Forgiveness Timeline" },
  { id: "tax-implications", title: "5. Tax Implications" },
  { id: "application", title: "6. Enrollment & Tracking" },
  { id: "faqs", title: "7. FAQs" },
  { id: "resources", title: "8. Additional Resources" }
];

const forgivenessPlanCards = [
  {
    title: "SAVE Plan",
    description: "The newest IDR plan with the most favorable terms for undergraduate loans",
    timeline: "20 years (undergraduate), 25 years (graduate)",
    specialFeature: "10 years for original balances under $12,000",
    status: "Active but facing legal challenges",
    icon: <Award className="h-6 w-6 text-amber-600" />
  },
  {
    title: "REPAYE Plan",
    description: "Revised Pay As You Earn - no payment cap but more favorable interest subsidies",
    timeline: "20 years (undergraduate), 25 years (graduate)",
    specialFeature: "50% interest subsidy during periods of negative amortization",
    status: "Mostly replaced by SAVE, but some borrowers remain on this plan",
    icon: <FileText className="h-6 w-6 text-amber-600" />
  },
  {
    title: "PAYE Plan",
    description: "Pay As You Earn - 10% of discretionary income with payment cap",
    timeline: "20 years",
    specialFeature: "Payments never exceed standard 10-year plan amount",
    status: "Active, recently reopened to new enrollments",
    icon: <Calculator className="h-6 w-6 text-amber-600" />
  },
  {
    title: "IBR Plan",
    description: "Income-Based Repayment - 10% or 15% of discretionary income",
    timeline: "20 or 25 years (depending on when you received loans)",
    specialFeature: "Available to most federal loan borrowers regardless of financial hardship",
    status: "Active, unaffected by recent changes",
    icon: <CheckCircle className="h-6 w-6 text-amber-600" />
  }
];

export const IDRForgivenessContent = () => {
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
    <main className="flex-grow">
      <Helmet>
        <title>Income-Driven Repayment (IDR) Loan Forgiveness | Complete Guide</title>
        <meta name="description" content="Learn how Income-Driven Repayment plans can lead to loan forgiveness after 20-25 years of payments, and how to maximize your benefits under these programs." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Income-Driven Repayment (IDR) Loan Forgiveness
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-amber-50 rounded-lg p-5 border border-amber-100 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Table of Contents</h2>
              <TableOfContents sections={sections} />
              
              <div className="mt-8">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Quick Tools</h3>
                  <div className="space-y-2">
                    <Link to="/loan-repayment-calculator" className="flex items-center text-blue-700 hover:text-blue-900">
                      <Calculator className="h-4 w-4 mr-2" />
                      <span>Repayment Calculator</span>
                    </Link>
                    <Link to="/student-loan-forgiveness-eligibility" className="flex items-center text-blue-700 hover:text-blue-900">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Eligibility Checker</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none lg:col-span-2">
            <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
              Income-Driven Repayment (IDR) plans offer not just lower monthly payments, but also a path to loan forgiveness after 20-25 years of qualifying payments. This guide will help you understand how IDR forgiveness works and how to maximize your benefits.
            </p>

            <section id="what-is-idr-forgiveness" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">What Is IDR Forgiveness?</h2>
              <p>
                Income-Driven Repayment forgiveness is a federal student loan benefit that cancels any remaining loan balance after you've made the required number of qualifying monthly payments under an IDR plan. Unlike Public Service Loan Forgiveness (PSLF), IDR forgiveness doesn't require specific employment—just consistent payments over 20-25 years.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 my-6">
                <p className="text-amber-800 font-medium">
                  <AlertCircle className="h-5 w-5 inline-block mr-2" />
                  Important: IDR forgiveness is not the same as immediate loan cancellation programs. It requires making payments for the full term—typically 20 or 25 years depending on your plan and loan type.
                </p>
              </div>
            </section>

            <section id="eligible-plans" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-6">Eligible IDR Plans</h2>
              <p className="mb-6">
                There are several IDR plans that can lead to forgiveness after the specified repayment period. Each plan has different terms and eligibility requirements:
              </p>
              
              <div className="grid grid-cols-1 gap-6 not-prose">
                {forgivenessPlanCards.map((plan, index) => (
                  <Card key={index} className="border border-amber-100">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-amber-50 p-3 rounded-full">
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                          <p className="text-gray-700 mb-3">{plan.description}</p>
                          <div className="space-y-2">
                            <p className="text-sm"><span className="font-semibold">Forgiveness Timeline:</span> {plan.timeline}</p>
                            <p className="text-sm"><span className="font-semibold">Special Feature:</span> {plan.specialFeature}</p>
                            <p className="text-sm"><span className="font-semibold">Current Status:</span> {plan.status}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="requirements" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Requirements for IDR Forgiveness</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Qualifying Payments:</strong> You must make the required number of payments (240 or 300 monthly payments, equivalent to 20 or 25 years) under an eligible IDR plan.
                </li>
                <li>
                  <strong>Payment Count:</strong> Only payments made while enrolled in an IDR plan count toward forgiveness. Months in deferment or forbearance generally don't count (with some exceptions during COVID-19).
                </li>
                <li>
                  <strong>Annual Recertification:</strong> You must recertify your income and family size annually to stay in your IDR plan.
                </li>
                <li>
                  <strong>Loan Type:</strong> Only federal Direct Loans are eligible. FFEL or Perkins loans must be consolidated into a Direct Consolidation Loan to qualify.
                </li>
              </ul>
            </section>

            <section id="timeline" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Forgiveness Timeline</h2>
              <p>
                The standard forgiveness timeline depends on your specific IDR plan and loan type:
              </p>
              <ul>
                <li><strong>20 years:</strong> For undergraduate loans under SAVE, PAYE, and newer IBR (post-July 2014 borrowers)</li>
                <li><strong>25 years:</strong> For graduate loans under SAVE, older IBR (pre-July 2014 borrowers), and ICR plans</li>
                <li><strong>10 years:</strong> Special provision for low-balance borrowers (original balance of $12,000 or less) under the SAVE plan only</li>
              </ul>
              <p className="mt-4">
                It's important to track your progress toward forgiveness. Your loan servicer should maintain records of your qualifying payments, but it's wise to keep your own documentation as well.
              </p>
            </section>

            <section id="tax-implications" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Tax Implications</h2>
              <p>
                Under current law (as of 2025), any amount forgiven through IDR forgiveness is <strong>not taxable</strong> at the federal level through 2025, thanks to the American Rescue Plan Act. After 2025, forgiven amounts may be taxable as income unless Congress extends this provision.
              </p>
              <p className="mt-2">
                However, state taxation varies. Some states may still tax forgiven loan amounts as income. Consult with a tax professional to understand your specific situation when approaching forgiveness.
              </p>
            </section>

            <section id="application" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Enrollment & Tracking</h2>
              <p>
                There is no separate application for IDR forgiveness. Once you've made the required number of qualifying payments, your loan servicer should automatically process the forgiveness. However, being proactive is recommended:
              </p>
              <ol className="space-y-2">
                <li><strong>Step 1:</strong> Enroll in an eligible IDR plan through <a href="https://studentaid.gov/app/ibrInstructions.action" className="text-blue-600 hover:text-blue-800">StudentAid.gov</a></li>
                <li><strong>Step 2:</strong> Recertify your income and family size annually</li>
                <li><strong>Step 3:</strong> Keep records of all payments and communications with your loan servicer</li>
                <li><strong>Step 4:</strong> Track your progress toward the required number of payments</li>
                <li><strong>Step 5:</strong> Contact your loan servicer when approaching the forgiveness milestone</li>
              </ol>
            </section>

            <section id="faqs" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">Can I switch between IDR plans without losing progress toward forgiveness?</h3>
                  <p>
                    Yes, payments made under any IDR plan count toward your forgiveness timeline. You can switch between IDR plans without losing progress.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What happens if I miss a payment?</h3>
                  <p>
                    Missed payments don't count toward your forgiveness timeline, but they don't reset your progress either. You simply need to make the full number of required payments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Can I receive IDR forgiveness and PSLF?</h3>
                  <p>
                    You cannot receive both for the same loans, but PSLF would come first (after 10 years) if you qualify. If you don't qualify for PSLF, you can still receive IDR forgiveness after 20-25 years.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What if my income increases significantly?</h3>
                  <p>
                    Your payments will increase with your income, but you'll still receive forgiveness after the specified term, even if you've repaid most of your loan.
                  </p>
                </div>
              </div>
            </section>

            <section id="resources" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                <Card className="border border-amber-100">
                  <CardContent className="p-4">
                    <Link to="/loan-repayment-calculator" className="flex items-center gap-3 text-amber-700 hover:text-amber-900">
                      <Calculator className="h-5 w-5" />
                      <div>
                        <h3 className="font-semibold">Repayment Calculator</h3>
                        <p className="text-sm text-gray-600">Estimate your monthly payments under different IDR plans</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="border border-amber-100">
                  <CardContent className="p-4">
                    <Link to="/income-based-repayment" className="flex items-center gap-3 text-amber-700 hover:text-amber-900">
                      <BookOpen className="h-5 w-5" />
                      <div>
                        <h3 className="font-semibold">IDR Plans Comparison</h3>
                        <p className="text-sm text-gray-600">Compare all available IDR plans in detail</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>
          </article>
        </div>
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
