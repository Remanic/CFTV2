
import { Button } from "@/components/ui/button";
import { Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { lenders, type LenderType } from "@/data/lenders";
import { LenderCard } from "./LenderCard";
import { TrustIndicators } from "./TrustIndicators";

export const AffiliateLoanSection = () => {
  const [selectedType, setSelectedType] = useState<LenderType>("private");

  const filteredLenders = lenders
    .filter(lender => lender.type === selectedType)
    .slice(0, 3);

  const handleViewAllClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
            Compare Top Student Loan Lenders
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 px-4">
            Find and compare the best student loan and refinancing rates from leading lenders.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8 px-4">
            <Info className="h-4 w-4 flex-shrink-0 text-gray-700" />
            <span className="text-sm">We earn affiliate commission when you get approved</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              variant={selectedType === "private" ? "default" : "outline"}
              onClick={() => setSelectedType("private")}
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              Private Student Loans
            </Button>
            <Button
              variant={selectedType === "refinance" ? "default" : "outline"}
              onClick={() => setSelectedType("refinance")}
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              Student Loan Refinancing
            </Button>
          </div>

          <TrustIndicators />
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredLenders.map((lender) => (
            <LenderCard 
              key={lender.name} 
              lender={lender}
              featured={lender.featured}
              showDetails={false}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-lenders" onClick={handleViewAllClick}>
            <Button 
              variant="default"
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              View All Lenders
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
