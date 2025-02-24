
import { ArrowUpCircle } from "lucide-react";

interface PaymentProgressionProps {
  planName: string;
}

export const PaymentProgression = ({ planName }: PaymentProgressionProps) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <ArrowUpCircle className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-gray-700">
          {planName === "Graduated" 
            ? "Payment Progression" 
            : "Income-Based Adjustment"}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="h-1 rounded-full bg-primary/20"
            style={{
              opacity: 0.3 + (i * 0.175),
              height: `${4 + (i * 2)}px`
            }}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {planName === "Graduated" 
          ? "Payments increase by 10% every 24 months"
          : "Payments adjust annually based on income and family size"}
      </p>
    </div>
  );
};
