
import React, { useState } from 'react';
import { DollarSign, Percent } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CreditCardInputField } from './components/CreditCardInputField';

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

  const inputFields = [
    {
      id: 'balance',
      label: 'Current Balance',
      value: formData.balance,
      placeholder: 'e.g. 5000',
      Icon: DollarSign
    },
    {
      id: 'interestRate',
      label: 'Annual Interest Rate (APR)',
      value: formData.interestRate,
      placeholder: 'e.g. 18.99',
      Icon: Percent
    },
    {
      id: 'minimumPayment',
      label: 'Minimum Monthly Payment',
      value: formData.minimumPayment,
      placeholder: 'e.g. 100',
      Icon: DollarSign
    },
    {
      id: 'additionalPayment',
      label: 'Additional Monthly Payment',
      value: formData.additionalPayment,
      placeholder: 'e.g. 50',
      Icon: DollarSign
    }
  ];

  return (
    <div className="space-y-6">
      {inputFields.map((field) => (
        <CreditCardInputField
          key={field.id}
          {...field}
          onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)}
        />
      ))}
      <Button 
        onClick={handleSubmit}
        className="w-full bg-pink-600 hover:bg-pink-700"
        size="lg"
      >
        Calculate Payment Plan
      </Button>
    </div>
  );
};
