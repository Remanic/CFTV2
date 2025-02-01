import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import {
  Calculator,
  DollarSign,
  PiggyBank,
  Info,
  HelpCircle,
  Calendar,
  Percent,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RepaymentMethod {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
  description: string;
}

export const RepaymentMethodSelector = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [income, setIncome] = useState("");
  const [results, setResults] = useState<RepaymentMethod[]>([]);

  const calculateRepaymentMethods = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const yearlyIncome = parseFloat(income);

    // Standard Repayment (10 years)
    const standardMonthly = (amount * (rate/12) * Math.pow(1 + rate/12, 120)) / (Math.pow(1 + rate/12, 120) - 1);
    
    // Income-Based (assuming 10% of discretionary income)
    const discretionaryIncome = Math.max(0, yearlyIncome - 23000);
    const ibMonthly = (discretionaryIncome * 0.1) / 12;
    
    // Graduated (starting at 60% of standard, increasing every 2 years)
    const gradMonthly = standardMonthly * 0.6;

    const methods: RepaymentMethod[] = [
      {
        name: "Standard Repayment",
        monthlyPayment: standardMonthly,
        totalInterest: (standardMonthly * 120) - amount,
        totalPayment: standardMonthly * 120,
        timeToRepay: 120,
        description: "Fixed monthly payments over 10 years"
      },
      {
        name: "Income-Based Repayment",
        monthlyPayment: ibMonthly,
        totalInterest: (ibMonthly * 240) - amount,
        totalPayment: ibMonthly * 240,
        timeToRepay: 240,
        description: "Payments based on your income and family size"
      },
      {
        name: "Graduated Repayment",
        monthlyPayment: gradMonthly,
        totalInterest: (gradMonthly * 120 * 1.3) - amount,
        totalPayment: gradMonthly * 120 * 1.3,
        timeToRepay: 120,
        description: "Payments start low and increase every two years"
      }
    ];

    setResults(methods);
    toast({
      title: "Calculation Complete",
      description: "We've analyzed your loan details and found the best repayment options.",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" />
            Student Loan Repayment Calculator
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Compare different repayment plans and find the one that best fits your financial situation
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={calculateRepaymentMethods} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="loanAmount" className="text-base font-medium">
                    Loan Amount
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your total student loan amount</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="Enter loan amount"
                    className="pl-10"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="interestRate" className="text-base font-medium">
                    Interest Rate (%)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Current federal student loan interest rates range from 4.99% to 7.54%</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    placeholder="Enter interest rate"
                    className="pl-10"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="income" className="text-base font-medium">
                    Annual Income
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Your gross annual income before taxes</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="income"
                    type="number"
                    placeholder="Enter annual income"
                    className="pl-10"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              Calculate Repayment Options
            </Button>
          </form>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <PiggyBank className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Your Repayment Options
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((method, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                    {method.name}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-5 h-5 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{method.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Payment</span>
                      <span className="text-lg font-semibold text-primary">
                        ${method.monthlyPayment.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Interest</span>
                      <span className="text-base text-gray-900">
                        ${method.totalInterest.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Payment</span>
                      <span className="text-base text-gray-900">
                        ${method.totalPayment.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Time to Repay</span>
                      <span className="text-base text-gray-900 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {(method.timeToRepay / 12).toFixed(0)} years
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};