import React, { useState } from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';
import { InputField } from './components/InputField';
import { CalculateButton } from './components/CalculateButton';

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

  const inputFields = [
    {
      id: 'initialDeposit',
      label: 'Initial Deposit',
      value: formData.initialDeposit,
      placeholder: 'e.g. 5000',
      Icon: DollarSign
    },
    {
      id: 'monthlyContribution',
      label: 'Monthly Contribution',
      value: formData.monthlyContribution,
      placeholder: 'e.g. 500',
      Icon: DollarSign
    },
    {
      id: 'annualReturn',
      label: 'Expected Annual Return',
      value: formData.annualReturn,
      placeholder: 'e.g. 7',
      Icon: Percent
    },
    {
      id: 'years',
      label: 'Investment Period (Years)',
      value: formData.years,
      placeholder: 'e.g. 20',
      Icon: Calendar
    },
    {
      id: 'taxRate',
      label: 'Tax Rate',
      value: formData.taxRate,
      placeholder: 'e.g. 25',
      Icon: Percent
    }
  ];

  return (
    <div className="space-y-6">
      {inputFields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)}
        />
      ))}
      <CalculateButton 
        onClick={handleSubmit}
        label="Calculate Savings Growth"
      />
    </div>
  );
};