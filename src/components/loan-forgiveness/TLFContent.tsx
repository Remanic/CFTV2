
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const TLFContent = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "10 min read";

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

  const TableOfContents = () => (
    <div className="space-y-2">
      <h4 className="font-semibold text-gray-900">On this page</h4>
      <ul className="space-y-1.5 text-sm">
        <li>
          <a href="#what-is" className="text-blue-600 hover:underline">What is Teacher Loan Forgiveness?</a>
        </li>
        <li>
          <a href="#why-pursue" className="text-blue-600 hover:underline">Why Pursue Teacher Loan Forgiveness</a>
        </li>
        <li>
          <a href="#eligibility" className="text-blue-600 hover:underline">Eligibility Requirements</a>
        </li>
        <li>
          <a href="#forgiveness-amounts" className="text-blue-600 hover:underline">Forgiveness Amounts</a>
        </li>
        <li>
          <a href="#how-to-apply" className="text-blue-600 hover:underline">How to Apply</a>
        </li>
        <li>
          <a href="#common-pitfalls" className="text-blue-600 hover:underline">Common Pitfalls to Avoid</a>
        </li>
        <li>
          <a href="#strategies" className="text-blue-600 hover:underline">Strategies for Success</a>
        </li>
        <li>
          <a href="#faqs" className="text-blue-600 hover:underline">FAQs</a>
        </li>
      </ul>
    </div>
  );

  return (
    <main className="flex-grow">
      <Helmet>
        <title>Teacher Loan Forgiveness Program Guide 2024 | Complete Information</title>
        <meta name="description" content="Comprehensive guide to Teacher Loan Forgiveness. Learn about eligibility requirements, qualifying schools, application process, and how to maximize your forgiveness amount." />
        <meta name="keywords" content="Teacher Loan Forgiveness, student loan forgiveness, teaching loans, education loan forgiveness, teacher benefits, loan forgiveness requirements" />
        <link rel="canonical" href="https://yourwebsite.com/teacher-loan-forgiveness" />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200 dark:bg-gray-700"
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Teacher Loan Forgiveness
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
          <TableOfContents />
        </div>

        <article className="prose prose-lg max-w-none">
          <section id="what-is" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">What is Teacher Loan Forgiveness?</h2>
            <p>
              Teacher Loan Forgiveness is a federal program that rewards educators who commit to teaching in low-income schools or educational service agencies. By meeting specific criteria, eligible teachers can have up to $17,500 of their federal student loans forgiven. This program is designed to encourage talented individuals to enter and remain in the teaching profession, particularly in underserved areas.
            </p>
            <p>
              If you're a teacher struggling with student loan debt, Teacher Loan Forgiveness can be a powerful tool to lighten your financial load while making a meaningful impact in your community.
            </p>
          </section>

          <section id="why-pursue" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Why Pursue Teacher Loan Forgiveness?</h2>
            <p>Teacher Loan Forgiveness offers several key benefits:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Debt Relief:</strong> Reduce your student loan balance by up to $17,500.</li>
              <li><strong>Career Support:</strong> Encourages teaching in high-need areas and subjects.</li>
              <li><strong>Financial Flexibility:</strong> Lower debt means more room in your budget for other goals.</li>
              <li><strong>No Tax Impact:</strong> Unlike some forgiveness programs, this benefit is tax-free.</li>
            </ul>
            <p>
              This program is perfect for educators dedicated to making a difference in low-income schools while seeking relief from student loan debt.
            </p>
          </section>

          <section id="eligibility" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Eligibility for Teacher Loan Forgiveness</h2>
            <p>To qualify for Teacher Loan Forgiveness, you must meet several specific requirements. Here's a detailed breakdown:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Qualifying Loans</h3>
            <p>Only certain federal loans are eligible:</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
              <p className="font-semibold">Eligible Loans:</p>
              <ul className="list-disc pl-6">
                <li>Direct Subsidized Loans</li>
                <li>Direct Unsubsidized Loans</li>
                <li>Subsidized Federal Stafford Loans</li>
                <li>Unsubsidized Federal Stafford Loans</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
              <p className="font-semibold">Ineligible Loans:</p>
              <ul className="list-disc pl-6">
                <li>Parent PLUS Loans</li>
                <li>Perkins Loans</li>
                <li>Private loans</li>
              </ul>
            </div>
            
            <p className="text-sm italic">Note: If you consolidated your loans, the Consolidation Loan may qualify if it repaid eligible Direct or Stafford Loans.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">2. Teaching Service Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duration:</strong> Teach full-time for five consecutive complete academic years.</li>
              <li><strong>Timing:</strong> At least one of those years must occur after the 1997-98 academic year.</li>
              <li><strong>Continuity:</strong> The five years must be uninterrupted, but exceptions exist (e.g., military service or returning to college) if you completed at least half the academic year.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="font-semibold flex items-center"><AlertCircle className="h-4 w-4 mr-2" /> Important:</p>
              <p>Loans must have been disbursed before the end of your fifth year of qualifying teaching service.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">3. School Eligibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Qualifying Schools:</strong> Teach at a low-income public or nonprofit private elementary or secondary school, or an educational service agency, listed in the Teacher Cancellation Low Income (TCLI) Directory.</li>
              <li><strong>How to Check:</strong> Visit the TCLI Directory to confirm your school's status for each year of service.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">4. Teacher Qualifications</h3>
            <p><strong>Highly Qualified Status:</strong> You must be a "highly qualified" teacher, which requires:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A bachelor's degree</li>
              <li>Full state certification (no emergency or provisional credentials)</li>
              <li>Demonstrated subject-matter competency (e.g., passing a state exam)</li>
            </ul>
            
            <p className="mt-4"><strong>Example:</strong> If you began teaching in 2018 and completed five years by 2023, your loans must have been taken out before 2023 to qualify.</p>
            
            <p className="mt-4"><strong>Additional Condition:</strong> You cannot have had an outstanding balance on a Direct Loan or FFEL Program loan as of October 1, 1998, unless you obtained a subsequent eligible loan after that date.</p>
          </section>

          <section id="forgiveness-amounts" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Forgiveness Amounts</h2>
            <p>The amount of forgiveness you receive depends on your teaching role:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h3 className="font-bold text-lg text-amber-800 mb-2">Up to $17,500</h3>
                <p>Available for highly qualified secondary school teachers in:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Special education</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-800 mb-2">Up to $5,000</h3>
                <p>For other full-time teachers who meet the basic eligibility criteria.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
              <p className="font-semibold">Key Insight:</p>
              <p>The forgiven amount won't exceed your loan balance, and no cash refunds are provided.</p>
            </div>
            
            <p><strong>Example:</strong> If you owe $10,000 and qualify for $17,500 in forgiveness, only $10,000 will be forgiven.</p>
          </section>

          <section id="how-to-apply" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">How to Apply for Teacher Loan Forgiveness</h2>
            <p>Ready to apply? Follow these steps after completing your five years of qualifying service:</p>
            
            <ol className="list-decimal pl-6 space-y-4 my-4">
              <li>
                <strong>Download the Form:</strong> Get the official Teacher Loan Forgiveness Application from StudentAid.gov.
              </li>
              <li>
                <strong>Obtain Certification:</strong> Have an authorized official (e.g., principal or HR representative) certify your employment for all five years.
              </li>
              <li>
                <strong>Submit to Your Loan Servicer:</strong> Send the completed form to your loan servicer. If you have multiple servicers, submit a separate application for each.
              </li>
              <li>
                <strong>Keep Paying:</strong> Continue making loan payments while your application is processed to avoid penalties.
              </li>
              <li>
                <strong>Processing Time:</strong> Expect several weeks for approval—contact your servicer to track progress.
              </li>
            </ol>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
              <p className="font-semibold flex items-center"><CheckCircle className="h-4 w-4 mr-2" /> Pro Tip:</p>
              <p>Save copies of all documents before submitting!</p>
            </div>
          </section>

          <section id="common-pitfalls" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
            <p>Avoid these mistakes to ensure you qualify:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Breaking Continuity:</strong> Leaving a qualifying school before five years resets your eligibility clock.</li>
              <li><strong>Non-Qualifying School:</strong> Teaching at a school not listed in the TCLI Directory disqualifies you—verify annually.</li>
              <li><strong>Defaulted Loans:</strong> You must not be in default unless you've made satisfactory repayment arrangements.</li>
              <li><strong>Incomplete Documentation:</strong> Missing certifications or incorrect forms can delay or deny your application.</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="font-semibold">Real-World Tip:</p>
              <p>If you switch schools mid-service, confirm the new school is TCLI-eligible to maintain continuity.</p>
            </div>
          </section>

          <section id="strategies" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Strategies for Success</h2>
            <p>Maximize your chances of success with these actionable tips:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Verify Eligibility Early:</strong> Check the TCLI Directory before accepting a teaching position.</li>
              <li><strong>Document Everything:</strong> Keep employment records, certification proofs, and loan statements organized.</li>
              <li><strong>Explore PSLF:</strong> If you work in public service beyond five years, consider Public Service Loan Forgiveness (PSLF) for additional relief after 10 years.</li>
              <li><strong>Stay Updated:</strong> Loan forgiveness rules can change—visit StudentAid.gov for the latest news.</li>
            </ul>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
              <p className="font-semibold">Bonus:</p>
              <p>Download a free checklist to track your progress toward forgiveness.</p>
            </div>
          </section>

          <section id="faqs" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">FAQs: Your Teacher Loan Forgiveness Questions Answered</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">1. Can I qualify if I teach part-time?</p>
                <p>No, you must teach full-time for all five years.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">2. What happens if I switch schools?</p>
                <p>You can switch, but each school must be TCLI-eligible for the years you teach there.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">3. Can I combine Teacher Loan Forgiveness with PSLF?</p>
                <p>Yes, but not for the same service period. Use Teacher Loan Forgiveness for the first five years, then switch to PSLF for years 6-10 if eligible.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">4. Do private school teachers qualify?</p>
                <p>Yes, if the private school is nonprofit and listed in the TCLI Directory.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">5. What if I take a break from teaching?</p>
                <p>A break resets your five-year clock unless it's for an approved reason (e.g., military service) and you completed half the year.</p>
              </div>
            </div>
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
