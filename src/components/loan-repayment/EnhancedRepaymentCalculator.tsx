import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calculator, DollarSign, PiggyBank, TrendingUp, Info, Percent } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  income: string;
  familySize: string;
}

interface RepaymentPlan {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
  description: string;
  popularity: number;
  benefits: string[];
}

export const EnhancedRepaymentCalculator = () => {
  const { toast } = useToast();
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanAmount: "",
    interestRate: "",
    loanTerm: "120",
    income: "",
    familySize: "1",
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
    
    const amount = parseFloat(loanDetails.loanAmount);
    const rate = parseFloat(loanDetails.interestRate) / 100 / 12;
    const months = parseInt(loanDetails.loanTerm);
    const yearlyIncome = parseFloat(loanDetails.income) || 0;

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid loan amount and interest rate.",
        variant: "destructive",
      });
      return;
    }

    const standardPayment = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const graduatedInitialPayment = standardPayment * 0.6;
    const extendedMonths = 300;
    const extendedPayment = (amount * rate * Math.pow(1 + rate, extendedMonths)) / (Math.pow(1 + rate, extendedMonths) - 1);
    const incomeBasedPayment = Math.max((yearlyIncome - 20000) * 0.1 / 12, 0);

    const calculatedPlans: RepaymentPlan[] = [
      {
        name: "Standard",
        monthlyPayment: standardPayment,
        totalInterest: (standardPayment * months) - amount,
        totalPayment: standardPayment * months,
        timeToRepay: months,
        description: "Fixed monthly payments over 10 years",
        popularity: 45,
        benefits: [
          "Predictable monthly payments",
          "Pay less interest over time",
          "Finish repayment faster"
        ]
      },
      {
        name: "Graduated",
        monthlyPayment: graduatedInitialPayment,
        totalInterest: (graduatedInitialPayment * months * 1.3) - amount,
        totalPayment: graduatedInitialPayment * months * 1.3,
        timeToRepay: months,
        description: "Payments start low and increase every 2 years",
        popularity: 25,
        benefits: [
          "Lower initial payments",
          "Payments increase with expected income growth",
          "Good for careers with growing income"
        ]
      },
      {
        name: "Extended",
        monthlyPayment: extendedPayment,
        totalInterest: (extendedPayment * extendedMonths) - amount,
        totalPayment: extendedPayment * extendedMonths,
        timeToRepay: extendedMonths,
        description: "Lower monthly payments over 25 years",
        popularity: 15,
        benefits: [
          "Lowest monthly payments",
          "More manageable for tight budgets",
          "Longer repayment period"
        ]
      },
      {
        name: "Income-Based",
        monthlyPayment: incomeBasedPayment,
        totalInterest: (incomeBasedPayment * 240) - amount,
        totalPayment: incomeBasedPayment * 240,
        timeToRepay: 240,
        description: "Payments based on your income",
        popularity: 35,
        benefits: [
          "Payments adjust with income changes",
          "Potential loan forgiveness after 20 years",
          "Protection during financial hardship"
        ]
      }
    ];

    setPlans(calculatedPlans);
    if (!isRealtime) {
      toast({
        title: "Calculation Complete",
        description: "Compare different repayment plans side by side.",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <form onSubmit={calculatePlans} className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the total amount you need to repay</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="loanAmount"
                  name="loanAmount"
                  type="number"
                  placeholder="Enter amount"
                  className="pl-10"
                  value={loanDetails.loanAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the annual interest rate</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="interestRate"
                  name="interestRate"
                  type="number"
                  step="0.1"
                  placeholder="Enter rate"
                  className="pl-10"
                  value={loanDetails.interestRate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="income">Annual Income</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current or expected annual income</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="income"
                  name="income"
                  type="number"
                  placeholder="Enter income"
                  className="pl-10"
                  value={loanDetails.income}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {!isRealtime && (
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Repayment Options
            </Button>
          )}
        </form>
      </Card>

      {plans.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <Card key={plan.name.toLowerCase()} className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {plan.name === "Standard" && <PiggyBank className="h-5 w-5 text-primary" />}
                    {plan.name === "Graduated" && <TrendingUp className="h-5 w-5 text-primary" />}
                    {plan.name === "Extended" && <DollarSign className="h-5 w-5 text-primary" />}
                    {plan.name === "Income-Based" && <Calculator className="h-5 w-5 text-primary" />}
                    {plan.name}
                  </h3>
                  <span className="text-sm text-gray-500">{plan.popularity}% choose this</span>
                </div>
                
                <p className="text-sm text-gray-600">{plan.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Payment</p>
                    <p className="text-2xl font-bold text-primary">
                      ${plan.monthlyPayment.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Interest</p>
                    <p className="text-lg font-semibold text-primary">
                      ${plan.totalInterest.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time to Repay</p>
                    <p className="text-lg font-semibold text-primary">
                      {(plan.timeToRepay / 12).toFixed(1)} years
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Benefits:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};