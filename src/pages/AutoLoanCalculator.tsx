import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AutoLoanCalculator = () => {
  const navigate = useNavigate();
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const calculateAutoLoan = () => {
    const principal = parseFloat(carPrice) - parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;

    const monthlyPmt = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPmt = monthlyPmt * months;

    setMonthlyPayment(monthlyPmt);
    setTotalPayment(totalPmt);
  };

  return (
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
          <Car className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl font-bold">Auto Loan Calculator</h1>
        </div>

        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="carPrice">Car Price ($)</Label>
                <Input
                  id="carPrice"
                  type="number"
                  value={carPrice}
                  onChange={(e) => setCarPrice(e.target.value)}
                  placeholder="e.g. 25000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment ($)</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="e.g. 5000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="e.g. 4.5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="e.g. 5"
                />
              </div>

              <Button 
                onClick={calculateAutoLoan}
                className="w-full"
                size="lg"
              >
                Calculate
              </Button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-semibold text-purple-700">Results</h2>
              
              {monthlyPayment && (
                <div>
                  <p className="text-sm text-purple-600">Monthly Payment</p>
                  <p className="text-3xl font-bold text-purple-700">
                    ${monthlyPayment.toFixed(2)}
                  </p>
                </div>
              )}

              {totalPayment && (
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-purple-600">Total Payment</p>
                  <p className="text-3xl font-bold text-purple-700">
                    ${totalPayment.toFixed(2)}
                  </p>
                  <p className="text-sm text-purple-600 mt-2">
                    Total Interest: ${(totalPayment - (parseFloat(carPrice) - parseFloat(downPayment))).toFixed(2)}
                  </p>
                </div>
              )}

              {!monthlyPayment && !totalPayment && (
                <p className="text-purple-600">
                  Enter your auto loan details and click Calculate to see your estimated payments.
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AutoLoanCalculator;