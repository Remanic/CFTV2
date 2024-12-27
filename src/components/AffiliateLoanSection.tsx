import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Info, Trophy, ArrowRight } from "lucide-react";
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Compare Top Student Loan Lenders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Find and compare the best student loan and refinancing rates from leading lenders. Pre-qualify in minutes without affecting your credit score.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Info className="h-4 w-4" />
            We earn affiliate commission when you get approved through our links
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={selectedType === "private" ? "default" : "outline"}
              onClick={() => setSelectedType("private")}
              className="min-w-[200px]"
            >
              Private Student Loans
            </Button>
            <Button
              variant={selectedType === "refinance" ? "default" : "outline"}
              onClick={() => setSelectedType("refinance")}
              className="min-w-[200px]"
            >
              Student Loan Refinancing
            </Button>
          </div>

          <TrustIndicators />
        </div>

        <div className="space-y-8">
          {filteredLenders.map((lender, index) => (
            <LenderCard 
              key={lender.name} 
              lender={lender}
              featured={lender.featured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-lenders">
            <Button variant="outline" size="lg" className="group">
              View All Lenders
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};