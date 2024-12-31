import React from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { MortgageInputField } from './components/MortgageInputField';

interface MortgageFormProps {
  onCalculate: (formData: {
    homePrice: number;
    downPayment: number;
    interestRate: number;
    loanTerm: number;
    propertyTax: number;
    insurance: number;
  }) => void;
}

export const MortgageForm: React.FC<MortgageFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = React.useState({
    homePrice: '',
    downPayment: '',
    interestRate: '',
    loanTerm: '',
    propertyTax: '',
    insurance: ''
  });

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const numericData = {
      homePrice: parseFloat(formData.homePrice),
      downPayment: parseFloat(formData.downPayment),
      interestRate: parseFloat(formData.interestRate),
      loanTerm: parseFloat(formData.loanTerm),
      propertyTax: parseFloat(formData.propertyTax),
      insurance: parseFloat(formData.insurance)
    };
    onCalculate(numericData);
  };

  const inputFields = [
    {
      id: 'homePrice',
      label: 'Home Price',
      value: formData.homePrice,
      placeholder: 'e.g. 300000',
      Icon: DollarSign
    },
    {
      id: 'downPayment',
      label: 'Down Payment',
      value: formData.downPayment,
      placeholder: 'e.g. 60000',
      Icon: DollarSign
    },
    {
      id: 'interestRate',
      label: 'Interest Rate',
      value: formData.interestRate,
      placeholder: 'e.g. 4.5',
      Icon: Percent
    },
    {
      id: 'loanTerm',
      label: 'Loan Term (Years)',
      value: formData.loanTerm,
      placeholder: 'e.g. 30',
      Icon: Calendar
    },
    {
      id: 'propertyTax',
      label: 'Annual Property Tax',
      value: formData.propertyTax,
      placeholder: 'e.g. 3600',
      Icon: DollarSign
    },
    {
      id: 'insurance',
      label: 'Annual Insurance',
      value: formData.insurance,
      placeholder: 'e.g. 1200',
      Icon: DollarSign
    }
  ];

  return (
    <div className="space-y-6">
      {inputFields.map((field) => (
        <MortgageInputField
          key={field.id}
          {...field}
          onChange={(value) => handleInputChange(field.id as keyof typeof formData, value)}
        />
      ))}
      <Button 
        onClick={handleSubmit}
        className="w-full bg-orange-500 hover:bg-orange-600"
        size="lg"
      >
        Calculate Mortgage Payment
      </Button>
    </div>
  );
};