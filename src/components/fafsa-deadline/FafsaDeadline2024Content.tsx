import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";
import { Calendar, Clock, AlertCircle } from "lucide-react";

export const FafsaDeadline2024Content = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main className="flex-grow">
      <Helmet>
        <title>FAFSA Deadlines 2024-2025: Complete Guide & Important Dates | Financial Aid</title>
        <meta name="description" content="Essential FAFSA deadlines for 2024-2025 academic year. Learn federal, state & college deadlines, submission tips, and maximize your financial aid opportunities." />
        <meta name="keywords" content="FAFSA deadline 2024-2025, FAFSA due date, financial aid deadline, college application deadline, FAFSA submission timeline" />
        <link rel="canonical" href="https://yourwebsite.com/fafsa-deadline-2024-2025" />
        <meta property="og:title" content="FAFSA Deadlines 2024-2025: Complete Guide & Important Dates" />
        <meta property="og:description" content="Comprehensive guide to FAFSA deadlines for 2024-2025. Don't miss out on financial aid - learn all important dates and deadlines." />
      </Helmet>

      <div className="sticky top-16 left-0 right-0 z-50">
        <Progress 
          value={progress} 
          className="h-1 rounded-none bg-gray-200"
          style={{
            '--progress-background': '#9b87f5',
            '--progress-foreground': '#7E69AB'
          } as React.CSSProperties}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guide: FAFSA Deadline for the Academic Year 2024-2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Essential deadlines and submission timeline to maximize your financial aid opportunities
          </p>
        </header>

        {/* Content goes here - Add your provided content in sections */}
        {/* ... Add the content provided by the user ... */}
      </div>
    </main>
  );
};