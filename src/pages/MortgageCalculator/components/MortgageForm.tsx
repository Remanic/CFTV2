import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent, Calendar } from "lucide-react";

interface MortgageFormProps {
  formData: {
    homePrice: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    propertyTax: string;
    insurance: string;
  };
  onInputChange: (field: string, value: string) => void;
  onCalculate: () => void;
}

export const MortgageForm = ({ formData, onInputChange, onCalculate }: MortgageFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="homePrice" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" /> Home Price
          </Label>
          <Input
            id="homePrice"
            type="number"
            value={formData.homePrice}
            onChange={(e) => onInputChange('homePrice', e.target.value)}
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
            value={formData.downPayment}
            onChange={(e) => onInputChange('downPayment', e.target.value)}
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
            value={formData.interestRate}
            onChange={(e) => onInputChange('interestRate', e.target.value)}
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
            value={formData.loanTerm}
            onChange={(e) => onInputChange('loanTerm', e.target.value)}
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
            value={formData.propertyTax}
            onChange={(e) => onInputChange('propertyTax', e.target.value)}
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
            value={formData.insurance}
            onChange={(e) => onInputChange('insurance', e.target.value)}
            placeholder="e.g. 1200"
            className="text-lg"
          />
        </div>
      </div>

      <button 
        onClick={onCalculate}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors duration-200"
      >
        Calculate Mortgage Payment
      </button>
    </div>
  );
};