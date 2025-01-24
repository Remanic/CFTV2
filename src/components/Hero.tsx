import { ArrowRight, Shield, GraduationCap, DollarSign, Search, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "./hero/FeaturesList";

export const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-8">
              Your Complete Student Loan Solution
              <FeaturesList />
            </h1>

            {/* Emotional Hook */}
            <p className="text-lg text-gray-600 italic">
              Say goodbye to loan stress and confusion – start your journey to financial freedom today.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">Trusted by over 10,000 students and parents</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              Get Your Free Personalized Loan Plan <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Explore All Tools for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "FAFSA Aid Estimator",
                description: "Know how much aid you qualify for",
                icon: <GraduationCap className="h-6 w-6 text-primary" />,
              },
              {
                title: "Repayment Calculator",
                description: "Compare options and pick the best plan",
                icon: <DollarSign className="h-6 w-6 text-primary" />,
              },
              {
                title: "Loan Forgiveness Insights",
                description: "Find out if you're eligible",
                icon: <Search className="h-6 w-6 text-primary" />,
              },
              {
                title: "Private Lender Comparison",
                description: "Rates, pros & cons, all in one place",
                icon: <Building className="h-6 w-6 text-primary" />,
              },
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};