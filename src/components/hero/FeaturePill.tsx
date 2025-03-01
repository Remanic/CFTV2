
import { LucideIcon } from "lucide-react";

interface FeaturePillProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const FeaturePill = ({ icon: Icon, text, className = "" }: FeaturePillProps) => {
  return (
    <div className={`inline-flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${className}`}>
      <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      <span className="font-medium truncate">{text}</span>
    </div>
  );
};
