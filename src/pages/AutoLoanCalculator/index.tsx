import React, { useState } from 'react';
import { Car } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AutoLoanForm } from './AutoLoanForm';
import { AutoLoanResults } from './AutoLoanResults';
import { calculateAutoLoan } from './AutoLoanCalculationUtils';

const AutoLoanCalculator = () => {
  const { toast } = useToast();
  const [breakdown, setBreakdown] = useState(null);

  const handleCalculate = (formData) => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your auto loan payment.",
        variant: "destructive",
      });
      return;
    }

    const result = calculateAutoLoan(
      formData.carPrice,
      formData.downPayment,
      formData.interestRate,
      formData.loanTerm,
      formData.salesTax
    );

    setBreakdown(result);
    toast({
      title: "Calculation Complete",
      description: "Your auto loan payment has been calculated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Car className="h-8 w-8 text-purple-500" />
              <h1 className="text-3xl font-bold">Auto Loan Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <AutoLoanForm onCalculate={handleCalculate} />
              {breakdown && <AutoLoanResults breakdown={breakdown} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutoLoanCalculator;