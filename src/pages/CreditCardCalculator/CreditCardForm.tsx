import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, Percent } from 'lucide-react';

interface CreditCardFormProps {
  onCalculate: (formData: {
    balance: number;
    interestRate: number;
    minimumPayment: number;
    additionalPayment: number;
  }) => void;
}

export const CreditCardForm: React.FC<CreditCardFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    balance: '',
    interestRate: '',
    minimumPayment: '',
    additionalPayment: ''
  });

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const numericData = {
      balance: parseFloat(formData.balance),
      interestRate: parseFloat(formData.interestRate),
      minimumPayment: parseFloat(formData.minimumPayment),
      additionalPayment: parseFloat(formData.additionalPayment)
    };
    onCalculate(numericData);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="balance" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Current Balance
        </Label>
        <Input
          id="balance"
          type="number"
          value={formData.balance}
          onChange={(e) => handleInputChange('balance', e.target.value)}
          placeholder="e.g. 5000"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interestRate" className="flex items-center gap-2">
          <Percent className="h-4 w-4" /> Annual Interest Rate (APR)
        </Label>
        <Input
          id="interestRate"
          type="number"
          value={formData.interestRate}
          onChange={(e) => handleInputChange('interestRate', e.target.value)}
          placeholder="e.g. 18.99"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="minimumPayment" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Minimum Monthly Payment
        </Label>
        <Input
          id="minimumPayment"
          type="number"
          value={formData.minimumPayment}
          onChange={(e) => handleInputChange('minimumPayment', e.target.value)}
          placeholder="e.g. 100"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalPayment" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Additional Monthly Payment
        </Label>
        <Input
          id="additionalPayment"
          type="number"
          value={formData.additionalPayment}
          onChange={(e) => handleInputChange('additionalPayment', e.target.value)}
          placeholder="e.g. 50"
          className="text-lg"
        />
      </div>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-pink-500 hover:bg-pink-600"
        size="lg"
      >
        Calculate Payment Plan
      </Button>
    </div>
  );
};