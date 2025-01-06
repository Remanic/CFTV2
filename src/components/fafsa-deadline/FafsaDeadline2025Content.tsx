import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, ChevronUp, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export const FafsaDeadline2025Content = () => {
  const [progress, setProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const readingTime = "3 min read";

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
        <title>FAFSA Deadlines 2025-2026 | Complete Federal & State Aid Application Guide</title>
        <meta name="description" content="Essential FAFSA deadlines for 2025-2026 academic year. Federal deadline June 30, 2026. State deadlines vary. Submit early for maximum financial aid opportunities." />
        <meta name="keywords" content="FAFSA deadline 2025-2026, FAFSA due date 2025, financial aid deadline, FAFSA submission date, college financial aid 2025" />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-deadline-2025-2026" />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <Progress value={progress} className="h-1 rounded-none bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <Calendar className="h-5 w-5" />
            <span className="text-sm font-medium">Updated for 2025-2026</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAFSA Deadlines for 2025-2026: Complete Guide
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Essential Guide
            </span>
            <span className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Last Updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-700">
              Submitting your FAFSA (Free Application for Federal Student Aid) on time is crucial for maximizing your financial aid opportunities. This guide outlines key deadlines and steps for the 2025-2026 academic year.
            </p>
          </div>

          <section id="key-deadlines" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6">Key FAFSA Deadlines for 2025-2026</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Federal Deadline</h3>
                <p className="text-red-600 font-bold mb-2">June 30, 2026</p>
                <p className="text-gray-600">Submit as early as possible, starting October 1, 2024</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">State Deadlines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>California: March 2, 2025</li>
                  <li>Texas: January 15, 2025</li>
                  <li>New York: May 1, 2025</li>
                  <li>Florida: May 15, 2025</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">College Deadlines</h3>
                <p className="text-gray-600">Check with individual colleges for their specific institutional aid deadlines</p>
              </div>
            </div>
          </section>

          <section id="early-submission" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Why Early Submission is Important</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Priority for Limited Funds</h3>
                <p>First-come, first-served basis for many aid programs</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Time to Address Issues</h3>
                <p>Resolve errors and provide additional documentation if needed</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Meet All Deadlines</h3>
                <p>Ensure eligibility for federal, state, and institutional aid</p>
              </div>
            </div>
          </section>

          <section id="required-documents" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li>Social Security numbers or Alien Registration Numbers</li>
                <li>2023 tax returns and W-2 forms</li>
                <li>Records of untaxed income</li>
                <li>FSA ID (create at StudentAid.gov)</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">General FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">When does the FAFSA open for 2025-2026?</p>
                    <p className="text-gray-600">October 1, 2024</p>
                  </div>
                  <div>
                    <p className="font-medium">Do I need to submit a FAFSA every year?</p>
                    <p className="text-gray-600">Yes, eligibility for financial aid is reassessed annually</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Deadline-Specific FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">What happens if I miss the federal deadline?</p>
                    <p className="text-gray-600">You'll lose eligibility for federal aid for that academic year</p>
                  </div>
                  <div>
                    <p className="font-medium">Can I still qualify for state aid if I miss the state deadline?</p>
                    <p className="text-gray-600">Generally, no. State aid programs often adhere strictly to their deadlines</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="final-tips" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-bold mb-6">Final Tips for Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Submit Early</h3>
                <p className="text-gray-600">File your FAFSA as soon as it opens to maximize aid opportunities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Stay Organized</h3>
                <p className="text-gray-600">Keep track of all deadlines and maintain copies of your submissions</p>
              </div>
            </div>
          </section>
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