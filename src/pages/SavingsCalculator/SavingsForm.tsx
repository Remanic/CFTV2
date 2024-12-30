import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, Percent, Calendar } from 'lucide-react';

interface SavingsFormProps {
  onCalculate: (formData: {
    initialDeposit: number;
    monthlyContribution: number;
    annualReturn: number;
    years: number;
    taxRate: number;
  }) => void;
}

export const SavingsForm: React.FC<SavingsFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    initialDeposit: '',
    monthlyContribution: '',
    annualReturn: '',
    years: '',
    taxRate: ''
  });

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const numericData = {
      initialDeposit: parseFloat(formData.initialDeposit),
      monthlyContribution: parseFloat(formData.monthlyContribution),
      annualReturn: parseFloat(formData.annualReturn),
      years: parseFloat(formData.years),
      taxRate: parseFloat(formData.taxRate)
    };
    onCalculate(numericData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="initialDeposit" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Initial Deposit
        </Label>
        <Input
          id="initialDeposit"
          type="number"
          value={formData.initialDeposit}
          onChange={(e) => handleInputChange('initialDeposit', e.target.value)}
          placeholder="e.g. 5000"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyContribution" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Monthly Contribution
        </Label>
        <Input
          id="monthlyContribution"
          type="number"
          value={formData.monthlyContribution}
          onChange={(e) => handleInputChange('monthlyContribution', e.target.value)}
          placeholder="e.g. 500"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="annualReturn" className="flex items-center gap-2">
          <Percent className="h-4 w-4" /> Expected Annual Return
        </Label>
        <Input
          id="annualReturn"
          type="number"
          value={formData.annualReturn}
          onChange={(e) => handleInputChange('annualReturn', e.target.value)}
          placeholder="e.g. 7"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" /> Investment Period (Years)
        </Label>
        <Input
          id="years"
          type="number"
          value={formData.years}
          onChange={(e) => handleInputChange('years', e.target.value)}
          placeholder="e.g. 20"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="taxRate" className="flex items-center gap-2">
          <Percent className="h-4 w-4" /> Tax Rate
        </Label>
        <Input
          id="taxRate"
          type="number"
          value={formData.taxRate}
          onChange={(e) => handleInputChange('taxRate', e.target.value)}
          placeholder="e.g. 25"
          className="text-lg"
        />
      </div>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-green-500 hover:bg-green-600"
        size="lg"
      >
        Calculate Savings Growth
      </Button>
    </div>
  );
};