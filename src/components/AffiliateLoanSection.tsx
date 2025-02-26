import { Button } from "@/components/ui/button";
import { Info, ArrowRight, Star, Shield, BadgeCheck, TrendingUp } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { lenders, type LenderType } from "@/data/lenders";
import { LenderCard } from "./LenderCard";
import { TrustIndicators } from "./TrustIndicators";

export const AffiliateLoanSection = () => {
  const [selectedType, setSelectedType] = useState<LenderType>("private");
  const navigate = useNavigate();
  const location = useLocation();

  const filteredLenders = lenders
    .filter(lender => lender.type === selectedType)
    .slice(0, 3);

  const handleNavigate = (path: string) => {
    if (location.pathname === path) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path, { state: { from: location.pathname } });
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 bg-[url('placeholder.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-primary border border-primary/10">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Compare Today's Best Rates</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Compare Top Student Loan Lenders
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Find and compare the best student loan and refinancing rates from leading lenders, handpicked for their reliability and competitive offers.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Info className="h-4 w-4 text-primary" />
            <span>We earn affiliate commission when you get approved through our platform</span>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">100% Secure Process</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white shadow-sm border border-gray-100">
              <BadgeCheck className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-gray-700">Verified Partners</span>
            </div>
          </div>

          {/* Loan Type Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              variant={selectedType === "private" ? "default" : "outline"}
              onClick={() => setSelectedType("private")}
              className={`w-full sm:w-auto sm:min-w-[200px] transition-all duration-300 ${
                selectedType === "private" 
                  ? "shadow-lg hover:shadow-xl" 
                  : "hover:border-primary/50"
              }`}
            >
              Private Student Loans
            </Button>
            <Button
              variant={selectedType === "refinance" ? "default" : "outline"}
              onClick={() => setSelectedType("refinance")}
              className={`w-full sm:w-auto sm:min-w-[200px] transition-all duration-300 ${
                selectedType === "refinance" 
                  ? "shadow-lg hover:shadow-xl" 
                  : "hover:border-primary/50"
              }`}
            >
              Student Loan Refinancing
            </Button>
          </div>
        </div>

        {/* Lenders List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredLenders.map((lender) => (
            <div 
              key={lender.name}
              onClick={() => handleNavigate(`/lender/${lender.name.toLowerCase().replace(/\s+/g, '-')}`)}
              className="cursor-pointer"
            >
              <LenderCard 
                lender={lender}
                featured={lender.featured}
                showDetails={false}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Button 
            variant="default"
            size="lg" 
            onClick={() => handleNavigate("/all-lenders")}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto px-8"
          >
            <span className="flex items-center justify-center gap-2">
              View All Lenders
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
