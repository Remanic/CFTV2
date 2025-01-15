import { ArrowRight, Clock, Shield, GraduationCap, DollarSign, Search, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const benefits = [
    {
      title: "FAFSA Aid Estimator",
      description: "Know how much aid you qualify for",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
    {
      title: "Repayment Calculator",
      description: "Compare options and pick the best plan",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
    },
    {
      title: "Loan Forgiveness",
      description: "Find out if you're eligible",
      icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
      title: "Lender Comparison",
      description: "Compare rates & options",
      icon: <Building className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section className="py-8 md:py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-3/5 space-y-4">
            {/* Urgency Banner - More Compact */}
            <div className="bg-warning/10 rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-sm text-warning font-medium">
              <Clock className="h-4 w-4" />
              <span>Limited Time: Free Premium Access</span>
            </div>
            
            {/* Main Heading - Condensed */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Your Complete Student Loan Solution
              </h1>
              <div className="flex flex-col space-y-1">
                <span className="text-base font-medium text-primary">Navigate FAFSA</span>
                <span className="text-base font-medium text-secondary">Find Best Loan Plans</span>
                <span className="text-base font-medium text-warning">Maximize Aid</span>
                <span className="text-base font-medium text-primary">Simplify Repayment</span>
              </div>
            </div>

            {/* Trust Badge - Compact */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-primary" />
              <span>Trusted by 10,000+ students</span>
            </div>

            {/* CTA Buttons - Inline */}
            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get Free Loan Plan <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border">
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/80 rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mb-2">
                      {benefit.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-4">
                <Progress value={progress} className="h-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
