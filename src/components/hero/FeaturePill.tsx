
import { LucideIcon } from "lucide-react";

interface FeaturePillProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const FeaturePill = ({ icon: Icon, text, className = "" }: FeaturePillProps) => {
  return (
    <div className={`inline-flex items-center justify-center space-x-2 px-3 py-1.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${className}`}>
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
      <span className="font-medium">{text}</span>
    </div>
  );
};
