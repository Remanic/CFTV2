import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { MortgageSummary } from "./components/MortgageSummary";
import { MortgageForm } from "./components/MortgageForm";
import { PageHeader } from "./components/PageHeader";

const MortgageCalculator = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    homePrice: "",
    downPayment: "",
    interestRate: "",
    loanTerm: "",
    propertyTax: "",
    insurance: ""
  });
  const [breakdown, setBreakdown] = useState<{
    principal: number;
    interest: number;
    tax: number;
    insurance: number;
    total: number;
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateMortgage = () => {
    if (Object.values(formData).some(value => !value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your mortgage payment.",
        variant: "destructive",
      });
      return;
    }

    const principal = parseFloat(formData.homePrice) - parseFloat(formData.downPayment);
    const monthlyRate = parseFloat(formData.interestRate) / 100 / 12;
    const months = parseFloat(formData.loanTerm) * 12;
    const monthlyTax = parseFloat(formData.propertyTax) / 12;
    const monthlyInsurance = parseFloat(formData.insurance) / 12;

    const monthlyPrincipalAndInterest = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalMonthly = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance;

    setBreakdown({
      principal: monthlyPrincipalAndInterest - (principal * monthlyRate),
      interest: principal * monthlyRate,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      total: totalMonthly
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
            <PageHeader />
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <MortgageForm 
                  formData={formData}
                  onInputChange={handleInputChange}
                  onCalculate={calculateMortgage}
                />
                <MortgageSummary 
                  breakdown={breakdown}
                  loanDetails={breakdown ? {
                    homePrice: parseFloat(formData.homePrice),
                    downPayment: parseFloat(formData.downPayment),
                    interestRate: parseFloat(formData.interestRate),
                    loanTerm: parseFloat(formData.loanTerm)
                  } : null}
                />
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculator;