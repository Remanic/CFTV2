import { ArrowRight, Clock, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-2/3 space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-warning font-semibold animate-pulse">
              <Clock className="h-5 w-5" />
              <span>Time-Sensitive Opportunity</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Navigate Your Student Loan Journey With Confidence
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Join over 50,000 students who've mastered their loan management and started their journey to becoming debt-free.
            </p>
            
            <div className="bg-gradient-to-r from-warning/10 via-warning/20 to-warning/10 rounded-lg p-6 border border-warning/20 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Hourglass className="h-6 w-6 text-warning animate-pulse" />
                <h3 className="text-lg font-semibold text-gray-900">Every Day Counts</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Don't let interest pile up. Your financial freedom is just one decision away.
              </p>
              <div className="text-xs text-warning font-medium">
                Take control of your future today
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Start Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Calculate Your Loans
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Free Forever</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};