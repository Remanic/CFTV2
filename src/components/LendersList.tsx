import { LenderCard } from "./LenderCard";
import { type Lender } from "@/data/lenders";

interface LendersListProps {
  lenders: Lender[];
}

export const LendersList = ({ lenders }: LendersListProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {lenders.map((lender) => (
        <LenderCard 
          key={lender.name} 
          lender={lender}
          featured={lender.featured}
        />
      ))}
    </div>
  );
};