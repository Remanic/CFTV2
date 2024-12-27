import { Button } from "@/components/ui/button";
import { type LenderType } from "@/data/lenders";

interface LenderTypeSelectorProps {
  selectedType: LenderType;
  onTypeChange: (type: LenderType) => void;
}

export const LenderTypeSelector = ({ selectedType, onTypeChange }: LenderTypeSelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <Button
        variant={selectedType === "private" ? "default" : "outline"}
        onClick={() => onTypeChange("private")}
        className="w-full sm:w-auto sm:min-w-[200px]"
      >
        Private Student Loans
      </Button>
      <Button
        variant={selectedType === "refinance" ? "default" : "outline"}
        onClick={() => onTypeChange("refinance")}
        className="w-full sm:w-auto sm:min-w-[200px]"
      >
        Student Loan Refinancing
      </Button>
    </div>
  );
};