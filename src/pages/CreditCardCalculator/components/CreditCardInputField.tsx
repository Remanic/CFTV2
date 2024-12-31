import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from 'lucide-react';

interface CreditCardInputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  Icon: LucideIcon;
}

export const CreditCardInputField: React.FC<CreditCardInputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  Icon
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2">
        <Icon className="h-4 w-4" /> {label}
      </Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-lg"
      />
    </div>
  );
};