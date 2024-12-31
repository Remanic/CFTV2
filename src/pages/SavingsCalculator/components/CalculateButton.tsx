import React from 'react';
import { Button } from "@/components/ui/button";

interface CalculateButtonProps {
  onClick: () => void;
  label: string;
}

export const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick, label }) => {
  return (
    <Button 
      onClick={onClick}
      className="w-full bg-green-500 hover:bg-green-600"
      size="lg"
    >
      {label}
    </Button>
  );
};