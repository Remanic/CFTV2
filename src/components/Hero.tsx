import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Navigate Your Student Loan Journey With Confidence
            </h1>
            <p className="text-xl text-gray-600">
              Join over 50,000 students who've mastered their loan management and started their journey to becoming debt-free.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Calculate Your Loans
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
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
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              alt="Students collaborating on laptop while managing their loans"
              className="w-full h-auto rounded-lg shadow-xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};