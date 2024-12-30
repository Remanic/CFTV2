import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, Percent, Calendar } from 'lucide-react';

interface EMIFormProps {
  onCalculate: (formData: {
    loanAmount: number;
    interestRate: number;
    loanTerm: number;
    processingFee: number;
  }) => void;
}

export const EMIForm: React.FC<EMIFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
    processingFee: ''
  });

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const numericData = {
      loanAmount: parseFloat(formData.loanAmount),
      interestRate: parseFloat(formData.interestRate),
      loanTerm: parseFloat(formData.loanTerm),
      processingFee: parseFloat(formData.processingFee)
    };
    onCalculate(numericData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="loanAmount" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Loan Amount
        </Label>
        <Input
          id="loanAmount"
          type="number"
          value={formData.loanAmount}
          onChange={(e) => handleInputChange('loanAmount', e.target.value)}
          placeholder="e.g. 100000"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interestRate" className="flex items-center gap-2">
          <Percent className="h-4 w-4" /> Annual Interest Rate
        </Label>
        <Input
          id="interestRate"
          type="number"
          value={formData.interestRate}
          onChange={(e) => handleInputChange('interestRate', e.target.value)}
          placeholder="e.g. 10.5"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="loanTerm" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" /> Loan Term (Months)
        </Label>
        <Input
          id="loanTerm"
          type="number"
          value={formData.loanTerm}
          onChange={(e) => handleInputChange('loanTerm', e.target.value)}
          placeholder="e.g. 36"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="processingFee" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Processing Fee
        </Label>
        <Input
          id="processingFee"
          type="number"
          value={formData.processingFee}
          onChange={(e) => handleInputChange('processingFee', e.target.value)}
          placeholder="e.g. 1000"
          className="text-lg"
        />
      </div>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-indigo-500 hover:bg-indigo-600"
        size="lg"
      >
        Calculate EMI
      </Button>
    </div>
  );
};