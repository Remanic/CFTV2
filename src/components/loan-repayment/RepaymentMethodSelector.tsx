import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Calculator, DollarSign, PiggyBank } from "lucide-react";

interface RepaymentMethod {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
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
    const discretionaryIncome = Math.max(0, yearlyIncome - 23000); // Poverty line approximation
    const ibMonthly = (discretionaryIncome * 0.1) / 12;
    
    // Graduated (starting at 60% of standard, increasing every 2 years)
    const gradMonthly = standardMonthly * 0.6;

    const methods: RepaymentMethod[] = [
      {
        name: "Standard Repayment",
        monthlyPayment: standardMonthly,
        totalInterest: (standardMonthly * 120) - amount,
        totalPayment: standardMonthly * 120,
        timeToRepay: 120
      },
      {
        name: "Income-Based Repayment",
        monthlyPayment: ibMonthly,
        totalInterest: (ibMonthly * 240) - amount, // 20 years
        totalPayment: ibMonthly * 240,
        timeToRepay: 240
      },
      {
        name: "Graduated Repayment",
        monthlyPayment: gradMonthly,
        totalInterest: (gradMonthly * 120 * 1.3) - amount, // Approximation
        totalPayment: gradMonthly * 120 * 1.3,
        timeToRepay: 120
      }
    ];

    setResults(methods);
    toast({
      title: "Calculation Complete",
      description: "We've analyzed your loan details and found the best repayment options.",
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-indigo-600" />
          Find Your Optimal Repayment Method
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateRepaymentMethods} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="Enter amount"
                  className="pl-10"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="Enter rate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="income">Annual Income</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter income"
                  className="pl-10"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
            Calculate Repayment Options
          </Button>
        </form>

        {results.length > 0 && (
          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <PiggyBank className="w-6 h-6 text-indigo-600" />
              Repayment Options Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((method, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {method.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Monthly Payment: ${method.monthlyPayment.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Interest: ${method.totalInterest.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total Payment: ${method.totalPayment.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Time to Repay: {method.timeToRepay} months
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};