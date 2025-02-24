
import { ArrowUpCircle } from "lucide-react";

interface PaymentProgressionProps {
  planName: string;
}

export const PaymentProgression = ({ planName }: PaymentProgressionProps) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <ArrowUpCircle className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-gray-700">
          {planName === "Graduated" 
            ? "Payment Progression" 
            : "Income-Based Adjustment"}
        </span>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-5 gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-1">
              <div 
                className="h-1 rounded-full bg-primary/20 transition-all duration-300"
                style={{
                  opacity: 0.3 + (i * 0.175),
                  height: `${4 + (i * 2)}px`,
                  transform: `scaleY(${1 + (i * 0.15)})`
                }}
              />
              <div className="text-[10px] text-gray-500 text-center">
                {planName === "Graduated" 
                  ? `Year ${(i + 1) * 2}`
                  : `Year ${i + 1}`}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {planName === "Graduated" 
            ? "Starting at a lower amount, payments increase gradually by 10% every 24 months"
            : "Payments are recalculated annually based on your updated income and family size"}
        </p>
      </div>
    </div>
  );
};
