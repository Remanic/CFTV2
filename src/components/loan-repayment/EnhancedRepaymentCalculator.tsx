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
import { Calculator, DollarSign, PiggyBank, TrendingUp, Info, Percent, Award, Lightbulb } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  income: string;
  familySize: string;
  occupation: string;
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
  pslf_eligible: boolean;
  optimizationTips: string[];
}

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
    
    // Parse input values
    const amount = parseFloat(loanDetails.loanAmount.replace(/,/g, ''));
    const rate = parseFloat(loanDetails.interestRate.replace(/,/g, ''));
    const months = parseInt(loanDetails.loanTerm);
    const yearlyIncome = parseFloat(loanDetails.income.replace(/,/g, '')) || 0;
    const isPublicService = loanDetails.occupation?.toLowerCase().includes('public') || 
                           loanDetails.occupation?.toLowerCase().includes('government') ||
                           loanDetails.occupation?.toLowerCase().includes('non-profit');

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
      // Convert annual rate to monthly rate (divide by 100 for percentage to decimal)
      const monthlyRate = (rate / 100) / 12;
      
      // Standard payment calculation using amortization formula
      const standardPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                            (Math.pow(1 + monthlyRate, months) - 1);
      
      // Graduated payment starts at 60% of standard payment
      const graduatedInitialPayment = standardPayment * 0.6;
      
      // Extended payment (25 years = 300 months)
      const extendedMonths = 300;
      const extendedPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, extendedMonths)) / 
                             (Math.pow(1 + monthlyRate, extendedMonths) - 1);
      
      // Income-based payment (10% of discretionary income)
      const povertyLine = 13590 + (4720 * (parseInt(loanDetails.familySize) - 1)); // 2023 Poverty Guidelines
      const discretionaryIncome = Math.max(0, yearlyIncome - (povertyLine * 1.5));
      const incomeBasedPayment = Math.max((discretionaryIncome * 0.1) / 12, 0);

      const calculatedPlans: RepaymentPlan[] = [
        {
          name: "Standard",
          monthlyPayment: standardPayment || 0,
          totalInterest: ((standardPayment || 0) * months) - amount,
          totalPayment: (standardPayment || 0) * months,
          timeToRepay: months,
          description: "Fixed monthly payments over 10 years",
          popularity: 45,
          pslf_eligible: true,
          benefits: [
            "Predictable monthly payments",
            "Pay less interest over time",
            "Finish repayment faster"
          ],
          optimizationTips: [
            "Make bi-weekly payments to reduce interest",
            "Round up payments to pay off faster",
            "Set up autopay for 0.25% interest rate reduction"
          ]
        },
        {
          name: "Graduated",
          monthlyPayment: graduatedInitialPayment || 0,
          totalInterest: ((graduatedInitialPayment || 0) * months * 1.3) - amount,
          totalPayment: (graduatedInitialPayment || 0) * months * 1.3,
          timeToRepay: months,
          description: "Payments start low and increase every 2 years",
          popularity: 25,
          pslf_eligible: true,
          benefits: [
            "Lower initial payments",
            "Payments increase with expected income growth",
            "Good for careers with growing income"
          ],
          optimizationTips: [
            "Make extra payments during income increases",
            "Consider refinancing after salary increases",
            "Save money during lower payment periods"
          ]
        },
        {
          name: "Extended",
          monthlyPayment: extendedPayment || 0,
          totalInterest: ((extendedPayment || 0) * extendedMonths) - amount,
          totalPayment: (extendedPayment || 0) * extendedMonths,
          timeToRepay: extendedMonths,
          description: "Lower monthly payments over 25 years",
          popularity: 15,
          pslf_eligible: false,
          benefits: [
            "Lowest monthly payments",
            "More manageable for tight budgets",
            "Longer repayment period"
          ],
          optimizationTips: [
            "Consider refinancing if interest rates drop",
            "Make extra payments when possible",
            "Evaluate income-driven plans as alternatives"
          ]
        },
        {
          name: "Income-Based",
          monthlyPayment: incomeBasedPayment || 0,
          totalInterest: ((incomeBasedPayment || 0) * 240) - amount,
          totalPayment: (incomeBasedPayment || 0) * 240,
          timeToRepay: 240,
          description: "Payments based on your discretionary income",
          popularity: 35,
          pslf_eligible: true,
          benefits: [
            "Payments adjust with income changes",
            "Potential loan forgiveness after 20-25 years",
            "Protection during financial hardship"
          ],
          optimizationTips: [
            "Recertify income annually",
            "Document public service employment",
            "Track qualifying payments for forgiveness"
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
    } catch (error) {
      console.error("Calculation error:", error);
      toast({
        title: "Calculation Error",
        description: "There was an error calculating the repayment plans. Please check your inputs.",
        variant: "destructive",
      });
    }
  };

  // ... keep existing code (render JSX)

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
                  type="text"
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
                      <p>Enter the annual interest rate (e.g., 5.5 for 5.5%)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="interestRate"
                  name="interestRate"
                  type="text"
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
                      <p>Enter your actual or estimated annual income before taxes</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Enter income"
                  className="pl-10"
                  value={loanDetails.income}
                  onChange={handleInputChange}
                  required
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
                    {plan.pslf_eligible && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Award className="h-4 w-4 text-green-500 ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Eligible for Public Service Loan Forgiveness</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </h3>
                  <span className="text-sm text-gray-500">{plan.popularity}% choose this</span>
                </div>
                
                <p className="text-sm text-gray-600">{plan.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Payment</p>
                    <p className="text-2xl font-bold text-primary">
                      ${Math.round(plan.monthlyPayment).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Interest</p>
                    <p className="text-lg font-semibold text-primary">
                      ${Math.round(plan.totalInterest).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time to Repay</p>
                    <p className="text-lg font-semibold text-primary">
                      {Math.round(plan.timeToRepay / 12)} years
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

                <div className="space-y-2">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    Optimization Tips:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.optimizationTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-500">•</span>
                        {tip}
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
