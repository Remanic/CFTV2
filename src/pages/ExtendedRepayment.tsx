
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TableOfContents } from "@/components/fafsa-guide/TableOfContents";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { FAQSection } from "@/components/fafsa-deadline/shared/FAQSection";
import { ExtendedIntroSection } from "@/components/extended-repayment/ExtendedIntroSection";
import { WhyChooseSection } from "@/components/extended-repayment/WhyChooseSection";
import { KeyFeaturesSection } from "@/components/extended-repayment/KeyFeaturesSection";
import { EnrollmentSection } from "@/components/extended-repayment/EnrollmentSection";
import { IsItRightSection } from "@/components/extended-repayment/IsItRightSection";

const sections = [
  { id: "what-is-extended", title: "1. What Is Extended Repayment?" },
  { id: "why-choose", title: "2. Why Choose Extended?" },
  { id: "key-features", title: "3. Key Features" },
  { id: "how-to-enroll", title: "4. How to Enroll" },
  { id: "is-it-right", title: "5. Is It Right for You?" },
  { id: "faqs", title: "6. FAQs" },
];

const ExtendedRepayment = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setProgress(Math.min(progress, 100));
      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const faqs = [
    {
      question: "Who is eligible for the Extended Repayment Plan?",
      answer: "Borrowers with more than $30,000 in Direct Loans or FFEL Program Loans are eligible. Parent PLUS Loans and Consolidation Loans that include Parent PLUS Loans are not eligible unless consolidated again."
    },
    {
      question: "How does the Extended Repayment Plan affect the total interest I'll pay?",
      answer: "By extending your repayment term to 25 years, you'll pay more in total interest compared to the Standard 10-year plan. However, your monthly payments will be lower."
    },
    {
      question: "Can I switch to another repayment plan later?",
      answer: "Yes, you can change your repayment plan at any time by contacting your loan servicer. If you switch to an IDR plan, you may regain access to forgiveness options."
    },
    {
      question: "Is there loan forgiveness under the Extended Repayment Plan?",
      answer: "No, the Extended Repayment Plan does not offer loan forgiveness. If you're seeking forgiveness, consider an IDR plan or the Public Service Loan Forgiveness (PSLF) program."
    },
    {
      question: "How does the Extended Repayment Plan compare to other plans?",
      answer: "Extended Plan: Lower payments over a longer term (25 years), with fixed or graduated options.\nStandard Plan: Higher payments over a shorter term (10 years), with lower total interest.\nIDR Plans: Payments based on income, with potential for forgiveness after 20-25 years."
    },
    {
      question: "Can I make extra payments to pay off my loan faster?",
      answer: "Yes! You can make additional payments at any time without penalty. Specify that the extra amount should go toward the principal to reduce your balance faster."
    },
    {
      question: "What if I have multiple loans?",
      answer: "If you have multiple federal loans, you can consolidate them into a single loan with a fixed interest rate. However, consolidation may affect your eligibility for certain repayment plans or forgiveness programs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Extended Repayment Plan Guide | Federal Student Loans</title>
        <meta 
          name="description" 
          content="Learn about the Extended Repayment Plan for federal student loans, including eligibility requirements, payment options, and how to enroll." 
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

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Extended Repayment Plan Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how the Extended Repayment Plan can help lower your monthly payments by stretching your repayment term up to 25 years.
          </p>
        </header>

        <TableOfContents sections={sections} />

        <div className="mt-12 space-y-16">
          <ExtendedIntroSection />
          <WhyChooseSection />
          <KeyFeaturesSection />
          <EnrollmentSection />
          <IsItRightSection />
          
          <section id="faqs" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">FAQ: Common Questions About the Extended Repayment Plan</h2>
            <FAQSection title="" faqs={faqs} />
          </section>
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

export default ExtendedRepayment;
