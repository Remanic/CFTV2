import { ArrowRight, Clock, Hourglass, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-warning font-semibold animate-pulse">
              <Clock className="h-5 w-5 text-gray-700" />
              <span>Limited Time Offer - Expires in {formatTime(timeLeft)}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Break Free from Student Loan Stress
              <span className="block text-primary mt-2">Start Your Debt-Free Journey Today</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600">
              Join over 50,000 students who've saved an average of $5,000 in interest using our expert guidance and tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Get Expert Tips & Save $1000s <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Find Best Plan in 60 Seconds
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                <span>Save Thousands</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Your Journey to Financial Freedom</h3>
                <Progress value={progress} className="h-2" />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-primary font-semibold">Step 1</div>
                    <div className="text-gray-600">Get Free Guide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-semibold">Step 2</div>
                    <div className="text-gray-600">Calculate Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-semibold">Step 3</div>
                    <div className="text-gray-600">Start Saving</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-warning/10 via-warning/20 to-warning/10 rounded-lg p-6 border border-warning/20">
              <div className="flex items-center gap-3 mb-3">
                <Hourglass className="h-6 w-6 text-warning" />
                <h3 className="text-lg font-semibold text-gray-900">Student Success Story</h3>
              </div>
              <p className="text-gray-700 italic">
                "This guide helped me save over $5,000 in interest and choose the perfect repayment plan for my situation!"
              </p>
              <div className="mt-2 text-sm text-gray-600">
                - Sarah M., Recent Graduate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};