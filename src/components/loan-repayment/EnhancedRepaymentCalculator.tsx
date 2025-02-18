
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { LoanInputForm } from "./LoanInputForm";
import { RepaymentPlanCard } from "./RepaymentPlanCard";
import { calculateRepaymentPlans, expertTips } from "./utils/calculations";
import type { LoanDetails, RepaymentPlan } from "./utils/calculations";
import { Card } from "@/components/ui/card";
import { Calculator, Wallet, Gift, RefreshCw, Clock } from "lucide-react";

const icons = {
  Calculator,
  Wallet,
  Gift,
  RefreshCw,
  Clock,
};

export const EnhancedRepaymentCalculator = () => {
  const { toast } = useToast();
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanAmount: "50000",
    interestRate: "5.5",
    loanTerm: "120",
    income: "60000",
    familySize: "1",
    occupation: "",
  });
  const [plans, setPlans] = useState<RepaymentPlan[]>([]);
  const [isRealtime, setIsRealtime] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (name: string, value: number) => {
    setLoanDetails((prev) => ({
      ...prev,
      [name]: value.toString(),
    }));
  };

  useEffect(() => {
    if (isRealtime && loanDetails.loanAmount && loanDetails.interestRate) {
      calculatePlans();
    }
  }, [loanDetails]);

  const calculatePlans = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const amount = parseFloat(loanDetails.loanAmount.replace(/,/g, ''));
    const rate = parseFloat(loanDetails.interestRate.replace(/,/g, ''));

    if (!amount || isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid loan amount greater than 0.",
        variant: "destructive",
      });
      return;
    }

    if (!rate || isNaN(rate) || rate <= 0 || rate > 100) {
      toast({
        title: "Invalid Interest Rate",
        description: "Please enter a valid interest rate between 0 and 100.",
        variant: "destructive",
      });
      return;
    }

    try {
      const calculatedPlans = calculateRepaymentPlans(loanDetails);
      setPlans(calculatedPlans);
      
      if (!isRealtime) {
        toast({
          title: "Calculation Complete",
          description: "Compare different repayment plans side by side.",
        });
      }
    } catch (error) {
      console.error("Calculation error:", error);
      toast({
        title: "Calculation Error",
        description: "There was an error calculating the repayment plans. Please check your inputs.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <LoanInputForm
        loanDetails={loanDetails}
        handleInputChange={handleInputChange}
        handleSliderChange={handleSliderChange}
      />
      {plans.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <RepaymentPlanCard
                key={plan.name.toLowerCase()}
                plan={plan}
              />
            ))}
          </div>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Expert Tips for Loan Repayment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertTips.map((tip, index) => {
                const IconComponent = icons[tip.icon as keyof typeof icons];
                return (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};
