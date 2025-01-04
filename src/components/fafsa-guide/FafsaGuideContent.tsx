import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./TableOfContents";

export const FafsaGuideContent = () => {
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
      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-50">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <article className="lg:w-3/4">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Guide to Filling Out the FAFSA Form
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

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Filling out the Free Application for Federal Student Aid (FAFSA) is a key step in getting financial help for college. By completing this form, you can qualify for grants, loans, and work-study opportunities that reduce your education costs. This guide explains each step clearly so you can fill out the FAFSA confidently and avoid mistakes.
              </p>

              <section id="what-is-fafsa" className="scroll-mt-20">
                <h2>1. What Is the FAFSA?</h2>
                <p>The FAFSA determines if you qualify for federal financial aid, including the Pell Grant, federal student loans, and work-study jobs. Submitting the FAFSA is free. Always use the official website, StudentAid.gov, to avoid scams.</p>
                
                <h3>Important Dates</h3>
                <ul>
                  <li>2025–26 FAFSA: Available now for the academic year starting July 1, 2025.</li>
                  <li>Federal Deadline: Submit by June 30, 2026, to qualify for aid.</li>
                  <li>State and School Deadlines: Deadlines differ, with some as early as February or March. Check your state and school websites for details.</li>
                </ul>
              </section>

              <section id="how-to-fill" className="scroll-mt-20">
                <h2>2. How to Fill Out the FAFSA: Step-by-Step</h2>
                <h3>Step 1: Create Your Account on StudentAid.gov</h3>
                <p>Go to StudentAid.gov and click “Create Account.” Use your full legal name and Social Security Number (SSN) as they appear on official documents. Parents, guardians, or spouses providing financial information must also create an account if required. Write down your FSA ID (username and password) and keep it safe. You’ll need it to log in, sign forms, and make changes later.</p>
                <p>Pro Tip: A "contributor" is anyone providing financial information for the FAFSA, such as a parent or spouse. Each contributor must create their own FSA ID to sign the application. Contributors should set up their accounts early to avoid delays.</p>
                <h4>FAQ Expansion:</h4>
                <p>Q: Who qualifies as a contributor? A: A contributor is anyone providing financial information on the FAFSA, such as a parent (biological, adoptive, or step-parent) or spouse. They must create their own FSA ID and sign the form.</p>
                <p>Q: What happens if a contributor doesn’t create their account? A: Without their signature, your FAFSA will be incomplete, delaying financial aid eligibility.</p>
                <p>Q: Can contributors share the same email address? A: No, each contributor must use a unique email address to create their account.</p>
                <h3>Step 2: Gather the Required Documents</h3>
                <p>To complete the FAFSA, you’ll need these documents for yourself and any financial contributors: Social Security Number (SSN) or Alien Registration Number (if applicable). Tax returns, W-2 forms, and records of other earnings. Bank statements, investment records, and untaxed income details (e.g., child support or veteran benefits). Driver’s license or other ID if needed. Having these ready will save you time and help you avoid errors.</p>
                <p>Pro Tip: Double-check that names and numbers match official documents to prevent processing delays.</p>
                <h3>Step 3: Log In and Start Your FAFSA</h3>
                <p>Go to fafsa.gov and click “Log In to Start.” Choose your role: Student: If you’re filling out your own FAFSA. Parent: If you’re helping your child with their application. Follow the prompts to begin your application.</p>
                <h3>Step 4: Complete Each Section</h3>
                <h4>A. Student Information</h4>
                <p>Enter your personal details, including SSN, date of birth, and contact information. Specify your citizenship status and educational history.</p>
                <h4>B. School Selection</h4>
                <p>List at least one college or career school. Use the School Search tool to find schools by name or code. Add multiple schools if you’re considering more than one. FAFSA allows up to 20 schools online or 10 on the paper form.</p>
                <p>Pro Tip: Some states and schools require specific order for listed schools. Check their guidelines.</p>
                <h4>C. Dependency Status</h4>
                <p>Answer questions to determine if you’re considered dependent or independent. Dependent students must provide parent information.</p>
                <h4>D. Parent Information (if applicable)</h4>
                <p>Enter your parents’ marital status, income, and household size. Ensure you understand who qualifies as a “parent” under FAFSA rules.</p>
                <h4>E. Financial Information</h4>
                <p>Use the IRS Data Retrieval Tool (DRT) to import tax data automatically and reduce errors. Include accurate balances for savings, checking, and investments as of the day you submit the FAFSA. If your family’s financial situation has changed (e.g., due to a job loss), contact the financial aid offices of your chosen schools. They can reassess your eligibility based on updated information.</p>
                <h3>Step 5: Sign and Submit Your FAFSA</h3>
                <p>Review all your entries for accuracy. Sign the form electronically using your FSA ID. Parents or other contributors must also sign. Submit the FAFSA and save the confirmation page.</p>
                <p>Reminder: Your application isn’t complete until all required signatures are submitted.</p>
                <p>Pro Tip: Save a copy of your confirmation email for your records.</p>
              </section>

              <section id="after-submit" className="scroll-mt-20">
                <h2>3. What Happens After You Submit Your FAFSA?</h2>
                <h3>Immediate Next Steps</h3>
                <p>Confirmation Email: You’ll get an email summarizing your submission. Student Aid Index (SAI): This new measure replaces the Expected Family Contribution (EFC) and helps schools decide your aid eligibility.</p>
                <h3>Ongoing Process</h3>
                <p>Corrections: Log in to update or fix mistakes as needed. School Reviews: Each listed school will use your FAFSA details to create financial aid offers. Respond to Requests: If a school needs more information, reply quickly to avoid delays.</p>
                <p>Pro Tip: Keep an eye on your email or StudentAid.gov account for updates or requests from schools.</p>
              </section>

              <section id="tips" className="scroll-mt-20">
                <h2>4. Helpful Tips for Success</h2>
                <p>Apply Early: Submitting early boosts your chances of getting aid. Ask Questions: Use FAFSA’s help tools or contact your school’s financial aid office if you’re stuck. Avoid Scams: Never pay to submit your FAFSA. Always use StudentAid.gov. Know Deadlines: Missing deadlines could mean missing out on financial aid.</p>
              </section>

              <section id="faqs" className="scroll-mt-20">
                <h2>5. FAQs</h2>
                <p>Q: Can I update my FAFSA after submitting it? A: Yes, log in to make corrections or add schools.</p>
                <p>Q: What if my parents won’t provide financial information? A: Talk to your school’s financial aid office about applying as an independent student or other options.</p>
                <p>Q: Do I need to submit the FAFSA every year? A: Yes, you must reapply for each academic year.</p>
                <p>Q: How do I check my FAFSA status? A: Log in at StudentAid.gov and click “View FAFSA Status.”</p>
                <p>Q: What should I do if my financial situation changes after filing? A: Contact the financial aid offices at your schools for help updating your application.</p>
                <p>Q: Do I need to report my savings and investments? A: Yes, include current balances for all accounts and investments when submitting the FAFSA.</p>
                <p>Q: Who qualifies as a contributor? A: A contributor is someone who provides financial information on your FAFSA, like a parent or spouse. They must create their own FSA ID to sign the application.</p>
                <p>Q: Can I list more than one school on my FAFSA? A: Yes, you can list up to 20 schools online or 10 on the paper form.</p>
                <p>Q: What if my parents are divorced? A: Provide information for the parent you lived with most in the past year. If equal, use the parent who provided the most financial support.</p>
                <p>Q: Can I use the same FSA ID for multiple FAFSAs? A: Yes, you can use the same FSA ID for multiple applications if you’re a parent completing FAFSAs for different children.</p>
                <p>Completing the FAFSA doesn’t have to be hard. This guide gives you the steps to confidently apply and secure financial aid. Don’t wait—start your FAFSA today at StudentAid.gov and take the next step toward your college dreams.</p>
              </section>
            </div>
          </article>

          {/* Table of contents sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-20">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>

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
    </main>
  );
};
