import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Car, DollarSign, Percent, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const AutoLoanCalculator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [salesTax, setSalesTax] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{
    principal: number;
    interest: number;
    tax: number;
    total: number;
  } | null>(null);

  const calculateAutoLoan = () => {
    if (!carPrice || !downPayment || !interestRate || !loanTerm || !salesTax) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your auto loan payment.",
        variant: "destructive",
      });
      return;
    }

    const tax = (parseFloat(carPrice) * parseFloat(salesTax)) / 100;
    const principal = parseFloat(carPrice) + tax - parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;

    const monthlyPmt = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

    setMonthlyPayment(monthlyPmt);
    setBreakdown({
      principal: monthlyPmt - (principal * rate),
      interest: principal * rate,
      tax: tax / months,
      total: monthlyPmt
    });

    toast({
      title: "Calculation Complete",
      description: "Your monthly auto loan payment has been calculated.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
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
                    <Label htmlFor="carPrice" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Car Price
                    </Label>
                    <Input
                      id="carPrice"
                      type="number"
                      value={carPrice}
                      onChange={(e) => setCarPrice(e.target.value)}
                      placeholder="e.g. 25000"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Down Payment
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      placeholder="e.g. 5000"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="flex items-center gap-2">
                      <Percent className="h-4 w-4" /> Interest Rate
                    </Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="e.g. 4.5"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> Loan Term (Years)
                    </Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      placeholder="e.g. 5"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salesTax" className="flex items-center gap-2">
                      <Percent className="h-4 w-4" /> Sales Tax Rate (%)
                    </Label>
                    <Input
                      id="salesTax"
                      type="number"
                      step="0.1"
                      value={salesTax}
                      onChange={(e) => setSalesTax(e.target.value)}
                      placeholder="e.g. 8.25"
                      className="text-lg"
                    />
                  </div>

                  <Button 
                    onClick={calculateAutoLoan}
                    className="w-full bg-purple-500 hover:bg-purple-600"
                    size="lg"
                  >
                    Calculate Auto Loan Payment
                  </Button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg space-y-6">
                  <h2 className="text-xl font-semibold text-purple-700">Monthly Payment Breakdown</h2>
                  
                  {breakdown ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-purple-600">Principal & Interest</p>
                        <p className="text-3xl font-bold text-purple-700">
                          ${(breakdown.principal + breakdown.interest).toFixed(2)}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-purple-200">
                        <p className="text-sm text-purple-600">Sales Tax (Monthly)</p>
                        <p className="text-xl font-semibold text-purple-700">
                          ${breakdown.tax.toFixed(2)}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-purple-200">
                        <p className="text-sm text-purple-600">Total Monthly Payment</p>
                        <p className="text-3xl font-bold text-purple-700">
                          ${breakdown.total.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg mt-6">
                        <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
                        <div className="space-y-2 text-sm">
                          <p className="flex justify-between">
                            <span className="text-gray-600">Vehicle Price:</span>
                            <span className="font-medium">${parseFloat(carPrice).toFixed(2)}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Sales Tax:</span>
                            <span className="font-medium">
                              ${((parseFloat(carPrice) * parseFloat(salesTax)) / 100).toFixed(2)}
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Down Payment:</span>
                            <span className="font-medium">${parseFloat(downPayment).toFixed(2)}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Down Payment %:</span>
                            <span className="font-medium">
                              {((parseFloat(downPayment) / parseFloat(carPrice)) * 100).toFixed(1)}%
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-purple-600">
                        Enter your auto loan details and click Calculate to see your estimated monthly payments.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">Tips</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                          <li>A larger down payment can significantly reduce your monthly payments</li>
                          <li>Don't forget to factor in sales tax when budgeting</li>
                          <li>Shorter loan terms usually mean higher payments but less total interest</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutoLoanCalculator;