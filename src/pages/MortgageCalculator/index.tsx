import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, DollarSign, Percent, Calendar } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { MortgageSummary } from "./components/MortgageSummary";

const MortgageCalculator = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [insurance, setInsurance] = useState("");
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Home className="h-8 w-8 text-orange-500" />
              <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
            </div>

            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  <button 
                    onClick={calculateMortgage}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors duration-200"
                  >
                    Calculate Mortgage Payment
                  </button>
                </div>

                <MortgageSummary 
                  breakdown={breakdown}
                  loanDetails={breakdown ? {
                    homePrice: parseFloat(homePrice),
                    downPayment: parseFloat(downPayment),
                    interestRate: parseFloat(interestRate),
                    loanTerm: parseFloat(loanTerm)
                  } : null}
                />
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