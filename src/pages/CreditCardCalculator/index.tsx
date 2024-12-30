import React, { useState } from 'react';
import { CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCardForm } from './CreditCardForm';
import { CreditCardResults } from './CreditCardResults';
import { calculateCreditCard, CreditCardBreakdown } from './CreditCardCalculationUtils';

const CreditCardCalculator: React.FC = () => {
  const { toast } = useToast();
  const [breakdown, setBreakdown] = useState<CreditCardBreakdown | null>(null);

  const handleCalculate = (formData: {
    balance: number;
    interestRate: number;
    minimumPayment: number;
    additionalPayment: number;
  }) => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your credit card payments.",
        variant: "destructive",
      });
      return;
    }

    const result = calculateCreditCard(
      formData.balance,
      formData.interestRate,
      formData.minimumPayment,
      formData.additionalPayment
    );

    setBreakdown(result);
    toast({
      title: "Calculation Complete",
      description: "Your credit card payment plan has been calculated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CreditCard className="h-8 w-8 text-pink-500" />
              <h1 className="text-3xl font-bold">Credit Card Payment Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <CreditCardForm onCalculate={handleCalculate} />
              {breakdown && <CreditCardResults breakdown={breakdown} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreditCardCalculator;