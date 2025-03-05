import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp, ArrowRight, Bell, Calendar, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";

const sections = [
  { id: "what-are", title: "1. What Are Loan Forgiveness Programs?" },
  { id: "latest-programs", title: "2. Latest Programs (2024-2025)" },
  { id: "steps", title: "3. Application Steps" },
  { id: "pitfalls", title: "4. Common Pitfalls" },
  { id: "faqs", title: "5. FAQs" },
  { id: "tips", title: "6. Success Tips" },
  { id: "final", title: "7. Final Steps" }
];

const latestUpdates = [
  {
    date: "May 15, 2025",
    title: "SAVE Plan Litigation Update",
    description: "The SAVE plan remains in legal limbo. All borrowers placed in administrative forbearance.",
    icon: <Bell className="h-6 w-6 text-amber-600" />,
    link: "#latest-programs"
  },
  {
    date: "April 3, 2025",
    title: "IDR Account Adjustment Extended",
    description: "Deadline for retroactive IDR credit extended to September 2025.",
    icon: <Calendar className="h-6 w-6 text-amber-600" />,
    link: "#latest-programs"
  },
  {
    date: "March 12, 2025",
    title: "PSLF Buy-Back Option Announced",
    description: "New option to reclaim forgiveness credit for past forbearance periods.",
    icon: <FileCheck className="h-6 w-6 text-amber-600" />,
    link: "#latest-programs"
  }
];

export const LatestLoanForgivenessContent = () => {
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
    <main className="flex-grow">
      <Helmet>
        <title>Latest Loan Forgiveness Programs Guide 2024 | Complete Information</title>
        <meta name="description" content="Navigate the complex world of loan forgiveness programs with our comprehensive, up-to-date guide covering all available options and strategies for success." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Latest Loan Forgiveness Programs: 2025 Updates
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
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-amber-600" />
                  Latest Updates
                </h3>
                <div className="space-y-3">
                  {latestUpdates.map((update, index) => (
                    <a 
                      key={index} 
                      href={update.link}
                      className="block p-3 bg-white rounded-md border border-amber-100 hover:shadow-md transition-shadow"
                    >
                      <p className="text-xs text-amber-600 font-medium">{update.date}</p>
                      <p className="font-medium text-gray-900">{update.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none lg:col-span-2">
            <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
              Navigating the complex world of loan forgiveness programs can be overwhelming, especially as policies evolve and expand. This guide provides an extensive, up-to-date overview of the latest loan forgiveness programs, including practical steps to apply, insights to address common doubts, and strategies to maximize your chances of success.
            </p>

            <section id="what-are" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4">What Are Loan Forgiveness Programs?</h2>
              <p>Loan forgiveness programs are structured initiatives aimed at canceling a portion or the entirety of an outstanding loan balance for eligible borrowers. These programs cater to individuals who meet specific criteria, such as working in certain professions, demonstrating financial hardship, or completing public service obligations. While these programs are most commonly associated with federal student loans, other forms of debt may also qualify under unique circumstances.</p>
              <h4 className="font-semibold mt-4">Key Benefits of Loan Forgiveness Programs:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alleviation of significant financial burdens, providing much-needed relief to borrowers.</li>
                <li>Support for careers in public service, education, healthcare, and other high-demand fields, fostering national and community-level development.</li>
                <li>Tailored incentives to help borrowers facing economic hardships regain financial stability and long-term security.</li>
              </ul>
            </section>

            <section id="latest-programs" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Latest Loan Forgiveness Programs (2024-2025)</h2>
              <h3 className="font-semibold mt-4">1. Public Service Loan Forgiveness (PSLF)</h3>
              <p><strong>Overview:</strong> This program offers forgiveness of the remaining balance on Direct Loans after 120 qualifying payments under an eligible repayment plan while working full-time for a qualifying employer.</p>
              <h4 className="font-semibold mt-2">Eligibility:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employment with government agencies or nonprofit organizations.</li>
                <li>Enrollment in an Income-Driven Repayment (IDR) plan.</li>
                <li>Submission of annual certification forms to verify progress.</li>
              </ul>
              <h4 className="font-semibold mt-2">Updates:</h4>
              <p>The Limited PSLF Waiver has extended eligibility for certain payments made under non-qualifying plans. Retroactive adjustments may still be available for those who act promptly.</p>

              <h3 className="font-semibold mt-4">2. Income-Driven Repayment (IDR) Forgiveness</h3>
              <p><strong>Overview:</strong> After 20 or 25 years of qualifying payments, depending on the plan, any remaining loan balance is forgiven.</p>
              <h4 className="font-semibold mt-2">Plans:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Income-Based Repayment (IBR).</li>
                <li>Pay As You Earn (PAYE).</li>
                <li>Revised Pay As You Earn (REPAYE).</li>
                <li>Income-Contingent Repayment (ICR).</li>
              </ul>
              <h4 className="font-semibold mt-2">Updates:</h4>
              <p>A new IDR Account Adjustment allows previously ineligible payments and certain periods of deferment or forbearance to count toward forgiveness, broadening access to relief.</p>

              <h3 className="font-semibold mt-4">3. Teacher Loan Forgiveness Program</h3>
              <p><strong>Overview:</strong> Offers up to $17,500 in loan forgiveness for highly qualified teachers working in low-income schools or educational service agencies.</p>
              <h4 className="font-semibold mt-2">Eligibility:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full-time teaching for five consecutive years.</li>
                <li>Specialization in subjects such as math, science, or special education.</li>
              </ul>
              <h4 className="font-semibold mt-2">New Considerations:</h4>
              <p>Expanded eligibility for teachers in underserved districts and schools facing acute shortages.</p>

              <h3 className="font-semibold mt-4">4. Total and Permanent Disability (TPD) Discharge</h3>
              <p><strong>Overview:</strong> Cancels federal student loans for borrowers who cannot work due to a permanent disability.</p>
              <h4 className="font-semibold mt-2">Steps to Apply:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit documentation from the VA, SSA, or a physician certifying the disability.</li>
                <li>Complete the TPD application through Nelnet, the loan servicer for this program.</li>
                <li>Monitor the account regularly for updates and compliance with any post-discharge conditions.</li>
              </ul>

              <h3 className="font-semibold mt-4">5. Fresh Start Initiative</h3>
              <p><strong>Overview:</strong> Focuses on borrowers with defaulted federal loans, offering a pathway to remove defaults, regain eligibility for federal aid, and restore credit.</p>
              <h4 className="font-semibold mt-2">Key Features:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Waives collection fees to reduce financial strain.</li>
                <li>Provides access to repayment and forgiveness programs to encourage long-term stability.</li>
              </ul>

              <h3 className="font-semibold mt-4">6. State-Based Loan Forgiveness Programs</h3>
              <p>Many states offer targeted loan forgiveness for professionals in high-need fields like healthcare, education, and law enforcement. These programs address local shortages and provide meaningful incentives.</p>
              <h4 className="font-semibold mt-2">Examples:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Healthcare workers in rural areas.</li>
                <li>STEM educators in underserved schools.</li>
                <li>Law enforcement officers in economically disadvantaged communities.</li>
              </ul>
            </section>

            <section id="steps" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Steps to Apply for Loan Forgiveness</h2>
              <h4 className="font-semibold mt-2">1. Determine Eligibility</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Research the requirements for each program you are considering.</li>
                <li>Verify your employment status, loan type, and repayment plan alignment with program guidelines.</li>
                <li>Use official tools, such as the PSLF Help Tool, to confirm eligibility and track progress.</li>
              </ul>
              <h4 className="font-semibold mt-2">2. Gather Required Documentation</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Collect proof of employment, including W-2 forms and employer certifications.</li>
                <li>Secure loan statements and repayment histories.</li>
                <li>Ensure all additional forms specific to your chosen program are completed (e.g., PSLF Form, TPD Application).</li>
                <li>Maintain a checklist to avoid overlooking critical documents.</li>
              </ul>
              <h4 className="font-semibold mt-2">3. Submit Your Application</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apply through official portals like <a href="https://studentaid.gov" className="text-blue-600">StudentAid.gov</a>.</li>
                <li>Work closely with your loan servicer to confirm submission and monitor processing updates.</li>
                <li>Retain both digital and physical copies of all submitted forms for future reference.</li>
              </ul>
              <h4 className="font-semibold mt-2">4. Track Progress</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep detailed records of all applications, certifications, and correspondence.</li>
                <li>Use tools like the PSLF Help Tool or IDR calculators to ensure payments are accurately documented.</li>
                <li>Schedule reminders for annual recertifications and compliance updates.</li>
              </ul>
            </section>

            <section id="pitfalls" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Common Pitfalls to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Missing Deadlines:</strong> Always stay aware of application and recertification deadlines.</li>
                <li><strong>Incomplete Documentation:</strong> Review forms thoroughly to prevent delays caused by errors or missing information.</li>
                <li><strong>Unqualified Employment or Loans:</strong> Confirm that your job and loan type align with program requirements before applying.</li>
                <li><strong>Neglecting Updates:</strong> Stay informed about policy changes and new opportunities.</li>
                <li><strong>Relying on Verbal Confirmation:</strong> Always seek written verification from your loan servicer for critical updates.</li>
              </ul>
            </section>

            <section id="faqs" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">FAQs About Loan Forgiveness Programs</h2>
              <h4 className="font-semibold mt-2">General FAQs</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Q: Are loan forgiveness programs taxable?</strong> <br /> A: Most federal programs, including PSLF and IDR forgiveness, are not taxable. However, state tax laws may vary.</li>
                <li><strong>Q: Can private loans qualify for forgiveness?</strong> <br /> A: Private loans are typically ineligible for federal forgiveness programs but may qualify for state or employer-based assistance.</li>
              </ul>
              <h4 className="font-semibold mt-2">PSLF-Specific FAQs</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Q: What if I don’t meet PSLF requirements?</strong> <br /> A: Consider loan consolidation or switching to an IDR plan to improve eligibility.</li>
                <li><strong>Q: Does employment type affect PSLF eligibility?</strong> <br /> A: Yes, only roles in public service or nonprofit organizations qualify.</li>
              </ul>
              <h4 className="font-semibold mt-2">IDR-Specific FAQs</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Q: Are unpaid interest and fees forgiven under IDR plans?</strong> <br /> A: Yes, any remaining balance, including interest, is forgiven at the end of the repayment term.</li>
              </ul>
              <h4 className="font-semibold mt-2">Miscellaneous FAQs</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Q: Can I apply for multiple programs simultaneously?</strong> <br /> A: Yes, provided you meet the eligibility requirements for each program.</li>
                <li><strong>Q: What if my servicer denies my application?</strong> <br /> A: File an appeal with supporting documentation or contact the FSA Ombudsman for resolution.</li>
              </ul>
            </section>

            <section id="tips" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Life-Saving Tips for Loan Forgiveness Success</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stay Organized:</strong> Maintain a dedicated folder for all loan-related documents, including applications, receipts, and correspondence.</li>
                <li><strong>Monitor Updates:</strong> Follow official channels like <a href="https://studentaid.gov" className="text-blue-600">StudentAid.gov</a> to stay informed about changes and opportunities.</li>
                <li><strong>Seek Expert Guidance:</strong> Consult financial advisors or nonprofits specializing in loan forgiveness for tailored advice.</li>
                <li><strong>Beware of Scams:</strong> Never pay for assistance with loan forgiveness; use free, official resources.</li>
                <li><strong>Act Quickly on Temporary Opportunities:</strong> Take advantage of time-sensitive initiatives like the Fresh Start Initiative or PSLF waivers.</li>
                <li><strong>Engage with Support Networks:</strong> Participate in forums or groups for borrowers to share experiences and gain insights.</li>
              </ul>
            </section>

            <section id="final" className="scroll-mt-20 mt-12">
              <h2 className="text-2xl font-bold mb-4">Final Steps</h2>
              <p>Loan forgiveness programs can redefine your financial future by offering relief and empowering you to move forward. Take the time to identify programs that align with your needs and career goals. Stay proactive in meeting eligibility requirements, and use reliable tools and resources to guide your application journey. Visit <a href="https://studentaid.gov" className="text-blue-600">StudentAid.gov</a> today to take the first step toward securing financial freedom!</p>
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
