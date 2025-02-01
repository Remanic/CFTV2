import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calculator, DollarSign, PiggyBank, TrendingUp, Info } from "lucide-react";

interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
}

interface RepaymentPlan {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
  description: string;
}

export const EnhancedRepaymentCalculator = () => {
  const { toast } = useToast();
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanAmount: "",
    interestRate: "",
    loanTerm: "120",
  });
  const [plans, setPlans] = useState<RepaymentPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("standard");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculatePlans = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(loanDetails.loanAmount);
    const rate = parseFloat(loanDetails.interestRate) / 100 / 12; // Monthly interest rate
    const months = parseInt(loanDetails.loanTerm);

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid loan amount and interest rate.",
        variant: "destructive",
      });
      return;
    }

    // Standard Repayment
    const standardPayment = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    
    // Graduated Repayment (starts at 60% of standard payment)
    const graduatedInitialPayment = standardPayment * 0.6;
    
    // Extended Repayment (25 years)
    const extendedMonths = 300;
    const extendedPayment = (amount * rate * Math.pow(1 + rate, extendedMonths)) / (Math.pow(1 + rate, extendedMonths) - 1);

    const calculatedPlans: RepaymentPlan[] = [
      {
        name: "Standard",
        monthlyPayment: standardPayment,
        totalInterest: (standardPayment * months) - amount,
        totalPayment: standardPayment * months,
        timeToRepay: months,
        description: "Fixed monthly payments over 10 years"
      },
      {
        name: "Graduated",
        monthlyPayment: graduatedInitialPayment,
        totalInterest: (graduatedInitialPayment * months * 1.3) - amount,
        totalPayment: graduatedInitialPayment * months * 1.3,
        timeToRepay: months,
        description: "Payments start low and increase every 2 years"
      },
      {
        name: "Extended",
        monthlyPayment: extendedPayment,
        totalInterest: (extendedPayment * extendedMonths) - amount,
        totalPayment: extendedPayment * extendedMonths,
        timeToRepay: extendedMonths,
        description: "Lower monthly payments over 25 years"
      }
    ];

    setPlans(calculatedPlans);
    toast({
      title: "Calculation Complete",
      description: "Compare different repayment plans below.",
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <form onSubmit={calculatePlans} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
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
              <Input
                id="interestRate"
                name="interestRate"
                type="number"
                step="0.1"
                placeholder="Enter rate"
                value={loanDetails.interestRate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="loanTerm">Loan Term (months)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Standard term is 120 months (10 years)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="loanTerm"
                name="loanTerm"
                type="number"
                value={loanDetails.loanTerm}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Repayment Options
          </Button>
        </form>
      </Card>

      {plans.length > 0 && (
        <div className="space-y-6">
          <Tabs defaultValue={selectedPlan} onValueChange={setSelectedPlan}>
            <TabsList className="grid w-full grid-cols-3">
              {plans.map((plan) => (
                <TabsTrigger key={plan.name.toLowerCase()} value={plan.name.toLowerCase()}>
                  {plan.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {plans.map((plan) => (
              <TabsContent key={plan.name.toLowerCase()} value={plan.name.toLowerCase()}>
                <Card className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {plan.name === "Standard" && <PiggyBank className="h-5 w-5 text-primary" />}
                        {plan.name === "Graduated" && <TrendingUp className="h-5 w-5 text-primary" />}
                        {plan.name === "Extended" && <DollarSign className="h-5 w-5 text-primary" />}
                        {plan.name} Repayment Plan
                      </h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Monthly Payment</p>
                          <p className="text-2xl font-bold text-primary">
                            ${plan.monthlyPayment.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Interest</p>
                          <p className="text-2xl font-bold text-primary">
                            ${plan.totalInterest.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Payment</p>
                          <p className="text-2xl font-bold text-primary">
                            ${plan.totalPayment.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Time to Repay</p>
                          <p className="text-2xl font-bold text-primary">
                            {(plan.timeToRepay / 12).toFixed(1)} years
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};
