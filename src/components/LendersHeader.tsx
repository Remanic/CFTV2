import { Info, Shield, BadgeCheck, Trophy } from "lucide-react";

export const LendersHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Compare All Student Loan Lenders
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Make an informed decision by comparing rates, terms, and benefits from our comprehensive network of trusted lending partners.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Bank-Level Security</h3>
          <p className="text-sm text-gray-600">Your data is protected with industry-standard encryption</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <BadgeCheck className="h-8 w-8 text-secondary mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Soft Credit Check</h3>
          <p className="text-sm text-gray-600">Check rates without impacting your credit score</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <Trophy className="h-8 w-8 text-warning mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Compare Instantly</h3>
          <p className="text-sm text-gray-600">Get personalized rates from multiple lenders in minutes</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-8">
        <Info className="h-4 w-4" />
        We earn affiliate commission when you get approved through our links
      </div>
    </div>
  );
};