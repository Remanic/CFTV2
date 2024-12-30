import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EMIForm } from './EMIForm';
import { EMIResults } from './EMIResults';
import { calculateEMI, EMIBreakdown } from './EMICalculationUtils';

const EMICalculator: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [breakdown, setBreakdown] = useState<EMIBreakdown | null>(null);

  const handleCalculate = (formData: {
    loanAmount: number;
    interestRate: number;
    loanTerm: number;
    processingFee: number;
  }) => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your EMI.",
        variant: "destructive",
      });
      return;
    }

    const result = calculateEMI(
      formData.loanAmount,
      formData.interestRate,
      formData.loanTerm,
      formData.processingFee
    );

    setBreakdown(result);
    toast({
      title: "Calculation Complete",
      description: "Your EMI has been calculated.",
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
              <Calculator className="h-8 w-8 text-indigo-500" />
              <h1 className="text-3xl font-bold">EMI Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <EMIForm onCalculate={handleCalculate} />
              {breakdown && <EMIResults breakdown={breakdown} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EMICalculator;