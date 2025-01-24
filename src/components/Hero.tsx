import { ArrowRight } from "lucide-react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "./hero/FeaturesList";

export const Hero = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-gray-900 mt-2 font-mono">
              Your Complete Student Loan Solution
              <FeaturesList />
            </h1>

            {/* Emotional Hook with darker color */}
            <p className="text-lg text-gray-800 italic font-mono">
              Say goodbye to loan stress and confusion – start your journey to financial freedom today.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-gray-600 font-mono">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">Trusted by over 10,000 students and parents</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all font-mono">
              Get Your Free Personalized Loan Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 font-mono">
              Explore All Tools for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Expert Guidance",
                description: "Step-by-step help with FAFSA and loan applications"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Smart Comparison",
                description: "Compare lenders and find your best rate"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Aid Optimization",
                description: "Maximize your financial aid opportunities"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Easy Management",
                description: "Track and manage all your loans in one place"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 font-mono"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};