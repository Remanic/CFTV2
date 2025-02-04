
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { LoanInputForm } from "./LoanInputForm";
import { RepaymentPlanCard } from "./RepaymentPlanCard";
import { calculateRepaymentPlans } from "./utils/calculations";
import type { LoanDetails, RepaymentPlan } from "./utils/calculations";

export const EnhancedRepaymentCalculator = () => {
  const { toast } = useToast();
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanAmount: "",
    interestRate: "",
    loanTerm: "120",
    income: "",
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

  useEffect(() => {
    if (isRealtime && loanDetails.loanAmount && loanDetails.interestRate) {
      calculatePlans();
    }
  }, [loanDetails]);

  const calculatePlans = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const amount = parseFloat(loanDetails.loanAmount.replace(/,/g, ''));
    const rate = parseFloat(loanDetails.interestRate.replace(/,/g, ''));

    // Input validation
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
      />

      {plans.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <RepaymentPlanCard
              key={plan.name.toLowerCase()}
              plan={plan}
            />
          ))}
        </div>
      )}
    </div>
  );
};
