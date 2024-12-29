import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DollarSign, Percent, Calendar } from 'lucide-react';

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

  return (
    <div className="space-y-6">
      {[
        { 
          label: 'Home Price', 
          key: 'homePrice', 
          icon: <DollarSign className="h-4 w-4" />,
          placeholder: 'e.g. 300000'
        },
        { 
          label: 'Down Payment', 
          key: 'downPayment', 
          icon: <DollarSign className="h-4 w-4" />,
          placeholder: 'e.g. 60000'
        },
        { 
          label: 'Interest Rate', 
          key: 'interestRate', 
          icon: <Percent className="h-4 w-4" />,
          placeholder: 'e.g. 4.5'
        },
        { 
          label: 'Loan Term (Years)', 
          key: 'loanTerm', 
          icon: <Calendar className="h-4 w-4" />,
          placeholder: 'e.g. 30'
        },
        { 
          label: 'Annual Property Tax', 
          key: 'propertyTax', 
          icon: <DollarSign className="h-4 w-4" />,
          placeholder: 'e.g. 3600'
        },
        { 
          label: 'Annual Insurance', 
          key: 'insurance', 
          icon: <DollarSign className="h-4 w-4" />,
          placeholder: 'e.g. 1200'
        }
      ].map(({ label, key, icon, placeholder }) => (
        <div key={key} className="space-y-2">
          <Label htmlFor={key} className="flex items-center gap-2">
            {icon} {label}
          </Label>
          <Input
            id={key}
            type="number"
            value={formData[key as keyof typeof formData]}
            onChange={(e) => handleInputChange(key as keyof typeof formData, e.target.value)}
            placeholder={placeholder}
            className="text-lg"
          />
        </div>
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