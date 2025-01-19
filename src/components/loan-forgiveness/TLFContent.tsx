import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const TLFContent = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "8 min read";

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

        <article className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            The Teacher Loan Forgiveness Program offers up to $17,500 in federal student loan forgiveness for eligible teachers who work in low-income schools. This comprehensive guide explains the requirements, benefits, and application process.
          </p>

          <section id="program-overview" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
            <p>The Teacher Loan Forgiveness Program is designed to encourage individuals to enter and continue in the teaching profession at low-income schools. After completing five complete and consecutive academic years of teaching, eligible teachers can receive up to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>$17,500 for highly qualified math, science, or special education teachers</li>
              <li>$5,000 for other qualifying teachers</li>
            </ul>
          </section>

          <section id="eligibility" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Eligibility Requirements</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">1. Teaching Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Five complete and consecutive academic years of teaching</li>
              <li>Full-time teaching position</li>
              <li>Highly qualified teacher status</li>
              <li>Teaching at a qualifying low-income school</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">2. Loan Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct Subsidized and Unsubsidized Loans</li>
              <li>Subsidized and Unsubsidized Federal Stafford Loans</li>
              <li>Loans must not be in default</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold">Important Note:</p>
              <p>PLUS loans and private student loans are not eligible for this program.</p>
            </div>
          </section>

          <section id="qualifying-schools" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Qualifying Schools</h2>
            <p>Schools must meet one of these criteria:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Listed in the Teacher Cancellation Low Income Directory</li>
              <li>Serve low-income students (Title I school)</li>
              <li>Operated by the Bureau of Indian Education (BIE)</li>
            </ul>
          </section>

          <section id="application-process" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Application Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Complete Five Years of Teaching:</strong>
                <p>Ensure you meet all teaching and school requirements for five consecutive years.</p>
              </li>
              <li>
                <strong>Gather Documentation:</strong>
                <p>Collect proof of your teaching service and school eligibility.</p>
              </li>
              <li>
                <strong>Submit Application:</strong>
                <p>Complete the Teacher Loan Forgiveness Application with your loan servicer.</p>
              </li>
            </ol>
          </section>

          <section id="maximizing-benefits" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-4">Maximizing Your Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consider combining with other forgiveness programs strategically</li>
              <li>Keep detailed records of your teaching service</li>
              <li>Stay informed about program changes</li>
              <li>Maintain contact with your loan servicer</li>
            </ul>
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