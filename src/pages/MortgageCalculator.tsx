import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Home, DollarSign, Percent, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const MortgageCalculator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{
    principal: number;
    interest: number;
    tax: number;
    insurance: number;
    total: number;
  } | null>(null);

  const calculateMortgage = () => {
    if (!homePrice || !downPayment || !interestRate || !loanTerm || !propertyTax || !insurance) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your mortgage payment.",
        variant: "destructive",
      });
      return;
    }

    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;
    const monthlyTax = parseFloat(propertyTax) / 12;
    const monthlyInsurance = parseFloat(insurance) / 12;

    const monthlyPrincipalAndInterest = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalMonthly = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance;

    setMonthlyPayment(totalMonthly);
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
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            ← Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Home className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
            </div>

            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="homePrice" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Home Price
                    </Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(e.target.value)}
                      placeholder="e.g. 300000"
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
                      placeholder="e.g. 60000"
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
                      placeholder="e.g. 30"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyTax" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Annual Property Tax
                    </Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                      placeholder="e.g. 3600"
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insurance" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Annual Insurance
                    </Label>
                    <Input
                      id="insurance"
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      placeholder="e.g. 1200"
                      className="text-lg"
                    />
                  </div>

                  <Button 
                    onClick={calculateMortgage}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    size="lg"
                  >
                    Calculate Mortgage Payment
                  </Button>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg space-y-6">
                  <h2 className="text-xl font-semibold text-orange-700">Monthly Payment Breakdown</h2>
                  
                  {breakdown ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-orange-600">Principal & Interest</p>
                        <p className="text-3xl font-bold text-orange-700">
                          ${(breakdown.principal + breakdown.interest).toFixed(2)}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-orange-200">
                        <div>
                          <p className="text-sm text-orange-600">Property Tax</p>
                          <p className="text-xl font-semibold text-orange-700">
                            ${breakdown.tax.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-orange-600">Insurance</p>
                          <p className="text-xl font-semibold text-orange-700">
                            ${breakdown.insurance.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-orange-200">
                        <p className="text-sm text-orange-600">Total Monthly Payment</p>
                        <p className="text-3xl font-bold text-orange-700">
                          ${breakdown.total.toFixed(2)}
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg mt-6">
                        <h3 className="font-semibold text-gray-700 mb-2">Loan Summary</h3>
                        <div className="space-y-2 text-sm">
                          <p className="flex justify-between">
                            <span className="text-gray-600">Loan Amount:</span>
                            <span className="font-medium">${(parseFloat(homePrice) - parseFloat(downPayment)).toFixed(2)}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Down Payment:</span>
                            <span className="font-medium">${parseFloat(downPayment).toFixed(2)}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Down Payment %:</span>
                            <span className="font-medium">
                              {((parseFloat(downPayment) / parseFloat(homePrice)) * 100).toFixed(1)}%
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-orange-600">
                        Enter your mortgage details and click Calculate to see your estimated monthly payments.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">Tips</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                          <li>A higher down payment typically means lower monthly payments</li>
                          <li>Don't forget to include property taxes and insurance in your budget</li>
                          <li>Consider how the loan term affects your total interest paid</li>
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

export default MortgageCalculator;