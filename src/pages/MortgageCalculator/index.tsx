import React, { useState } from 'react';
import { Home } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MortgageForm } from './MortgageForm';
import { MortgageResults } from './MortgageResults';
import { calculateMortgage, MortgageBreakdown } from './MortgageCalculationUtils';

const MortgageCalculator: React.FC = () => {
  const { toast } = useToast();
  const [breakdown, setBreakdown] = useState<MortgageBreakdown | null>(null);
  const [calculationData, setCalculationData] = useState<{
    homePrice: number;
    downPayment: number;
  } | null>(null);

  const handleCalculate = (formData: {
    homePrice: number;
    downPayment: number;
    interestRate: number;
    loanTerm: number;
    propertyTax: number;
    insurance: number;
  }) => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your mortgage payment.",
        variant: "destructive",
      });
      return;
    }

    const { monthlyPayment, breakdown } = calculateMortgage(
      formData.homePrice,
      formData.downPayment,
      formData.interestRate,
      formData.loanTerm,
      formData.propertyTax,
      formData.insurance
    );

    setBreakdown(breakdown);
    setCalculationData({
      homePrice: formData.homePrice,
      downPayment: formData.downPayment
    });

    toast({
      title: "Calculation Complete",
      description: "Your monthly mortgage payment has been calculated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Home className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <MortgageForm onCalculate={handleCalculate} />
              {breakdown && calculationData && (
                <MortgageResults 
                  breakdown={breakdown} 
                  homePrice={calculationData.homePrice}
                  downPayment={calculationData.downPayment}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculator;