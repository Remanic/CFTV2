import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent, Calendar } from "lucide-react";

interface AutoLoanFormProps {
  onCalculate: (formData: {
    carPrice: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    salesTax: string;
  }) => void;
}

export const AutoLoanForm = ({ onCalculate }: AutoLoanFormProps) => {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [salesTax, setSalesTax] = useState("");

  const handleSubmit = () => {
    onCalculate({
      carPrice,
      downPayment,
      interestRate,
      loanTerm,
      salesTax,
    });
  };

  return (
    <Card className="p-6">
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
          onClick={handleSubmit}
          className="w-full bg-purple-500 hover:bg-purple-600"
          size="lg"
        >
          Calculate Auto Loan Payment
        </Button>
      </div>
    </Card>
  );
};