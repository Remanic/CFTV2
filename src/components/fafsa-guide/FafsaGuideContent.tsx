import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./TableOfContents";
import { FaqSection } from "./FaqSection";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Complete Guide to Filling Out the FAFSA Form (2024-2025) | Step by Step Instructions</title>
        <meta name="description" content="Learn how to fill out your FAFSA form correctly with our comprehensive guide. Step-by-step instructions, deadlines, and expert tips for maximizing your financial aid." />
        <meta name="keywords" content="FAFSA guide, how to fill out FAFSA, FAFSA application help, FAFSA instructions, financial aid application, college financial aid, FAFSA deadlines" />
        <meta property="og:title" content="Complete Guide to Filling Out the FAFSA Form (2024-2025)" />
        <meta property="og:description" content="Step-by-step guide to completing your FAFSA application successfully. Get expert tips and maximize your chances of receiving financial aid." />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-application-guide" />
      </Helmet>

      {/* Progress bar - responsive positioning */}
      <div className="hidden md:block fixed top-16 left-0 right-0 z-50">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>
      <div className="md:hidden sticky top-16 left-0 right-0 z-50">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Filling Out the FAFSA Form
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <article className="lg:w-full prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Filling out the Free Application for Federal Student Aid (FAFSA) is a key step in getting financial help for college. By completing this form, you can qualify for grants, loans, and work-study opportunities that reduce your education costs. This guide explains each step clearly so you can fill out the FAFSA confidently and avoid mistakes.
              </p>

              <section id="what-is-fafsa" className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4">1. What Is the FAFSA?</h2>
                <p>The FAFSA determines if you qualify for federal financial aid, including the Pell Grant, federal student loans, and work-study jobs. Submitting the FAFSA is free. Always use the official website, StudentAid.gov, to avoid scams.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Important Dates</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2025–26 FAFSA: Available now for the academic year starting July 1, 2025.</li>
                  <li>Federal Deadline: Submit by June 30, 2026, to qualify for aid.</li>
                  <li>State and School Deadlines: Deadlines differ, with some as early as February or March. Check your state and school websites for details.</li>
                </ul>
              </section>

              <section id="how-to-fill" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">2. How to Fill Out the FAFSA: Step-by-Step</h2>
                <h3 className="text-xl font-semibold mt-6 mb-4">Step 1: Create Your Account on StudentAid.gov</h3>
                <p>Go to StudentAid.gov and click "Create Account." Use your full legal name and Social Security Number (SSN) as they appear on official documents. Parents, guardians, or spouses providing financial information must also create an account if required. Write down your FSA ID (username and password) and keep it safe. You'll need it to log in, sign forms, and make changes later.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold">Pro Tip:</p>
                  <p>A "contributor" is anyone providing financial information for the FAFSA, such as a parent or spouse. Each contributor must create their own FSA ID to sign the application. Contributors should set up their accounts early to avoid delays.</p>
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-4">FAQ Expansion:</h4>
                <div className="space-y-4">
                  <p><span className="font-semibold">Q: Who qualifies as a contributor?</span><br />A: A contributor is anyone providing financial information on the FAFSA, such as a parent (biological, adoptive, or step-parent) or spouse. They must create their own FSA ID and sign the form.</p>
                  <p><span className="font-semibold">Q: What happens if a contributor doesn't create their account?</span><br />A: Without their signature, your FAFSA will be incomplete, delaying financial aid eligibility.</p>
                  <p><span className="font-semibold">Q: Can contributors share the same email address?</span><br />A: No, each contributor must use a unique email address to create their account.</p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Step 2: Gather the Required Documents</h3>
                <p>To complete the FAFSA, you'll need these documents for yourself and any financial contributors:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Social Security Number (SSN) or Alien Registration Number (if applicable)</li>
                  <li>Tax returns, W-2 forms, and records of other earnings</li>
                  <li>Bank statements, investment records, and untaxed income details</li>
                  <li>Driver's license or other ID if needed</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <p className="font-semibold">Pro Tip:</p>
                  <p>Double-check that names and numbers match official documents to prevent processing delays.</p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Step 3: Log In and Start Your FAFSA</h3>
                <p>Go to fafsa.gov and click "Log In to Start." Choose your role:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Student: If you're filling out your own FAFSA</li>
                  <li>Parent: If you're helping your child with their application</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Step 4: Complete Each Section</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">A. Student Information</h4>
                    <p>Enter your personal details, including SSN, date of birth, and contact information. Specify your citizenship status and educational history.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">B. School Selection</h4>
                    <p>List at least one college or career school. Use the School Search tool to find schools by name or code. Add multiple schools if you're considering more than one. FAFSA allows up to 20 schools online or 10 on the paper form.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">C. Dependency Status</h4>
                    <p>Answer questions to determine if you're considered dependent or independent. Dependent students must provide parent information.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">D. Parent Information (if applicable)</h4>
                    <p>Enter your parents' marital status, income, and household size. Ensure you understand who qualifies as a "parent" under FAFSA rules.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">E. Financial Information</h4>
                    <p>Use the IRS Data Retrieval Tool (DRT) to import tax data automatically and reduce errors. Include accurate balances for savings, checking, and investments as of the day you submit the FAFSA.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Step 5: Sign and Submit Your FAFSA</h3>
                <p>Review all your entries for accuracy. Sign the form electronically using your FSA ID. Parents or other contributors must also sign. Submit the FAFSA and save the confirmation page.</p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                  <p className="font-semibold">Reminder:</p>
                  <p>Your application isn't complete until all required signatures are submitted.</p>
                </div>
              </section>

              <section id="after-submit" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">3. What Happens After You Submit Your FAFSA?</h2>
                <h3 className="text-xl font-semibold mt-6 mb-4">Immediate Next Steps</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Confirmation Email: You'll get an email summarizing your submission.</li>
                  <li>Student Aid Index (SAI): This new measure replaces the Expected Family Contribution (EFC) and helps schools decide your aid eligibility.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Ongoing Process</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Corrections: Log in to update or fix mistakes as needed.</li>
                  <li>School Reviews: Each listed school will use your FAFSA details to create financial aid offers.</li>
                  <li>Respond to Requests: If a school needs more information, reply quickly to avoid delays.</li>
                </ul>
              </section>

              <section id="tips" className="scroll-mt-20 mt-12">
                <h2 className="text-2xl font-bold mb-4">4. Helpful Tips for Success</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Apply Early: Submitting early boosts your chances of getting aid.</li>
                  <li>Ask Questions: Use FAFSA's help tools or contact your school's financial aid office if you're stuck.</li>
                  <li>Avoid Scams: Never pay to submit your FAFSA. Always use StudentAid.gov.</li>
                  <li>Know Deadlines: Missing deadlines could mean missing out on financial aid.</li>
                </ul>
              </section>

              <FaqSection />
          </article>
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
