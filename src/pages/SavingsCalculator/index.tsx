import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SavingsForm } from './SavingsForm';
import { SavingsResults } from './SavingsResults';
import { calculateSavings, SavingsBreakdown } from './SavingsCalculationUtils';

const SavingsCalculator: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [breakdown, setBreakdown] = useState<SavingsBreakdown | null>(null);

  const handleCalculate = (formData: {
    initialDeposit: number;
    monthlyContribution: number;
    annualReturn: number;
    years: number;
    taxRate: number;
  }) => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your savings growth.",
        variant: "destructive",
      });
      return;
    }

    const result = calculateSavings(
      formData.initialDeposit,
      formData.monthlyContribution,
      formData.annualReturn,
      formData.years,
      formData.taxRate
    );

    setBreakdown(result);
    toast({
      title: "Calculation Complete",
      description: "Your savings growth has been calculated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            ← Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <PiggyBank className="h-8 w-8 text-green-500" />
              <h1 className="text-3xl font-bold">Savings Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <SavingsForm onCalculate={handleCalculate} />
              {breakdown && <SavingsResults breakdown={breakdown} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavingsCalculator;