import { LucideIcon } from "lucide-react";

interface FeaturePillProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export const FeaturePill = ({ icon: Icon, text, className = "" }: FeaturePillProps) => {
  return (
    <div className={`inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 ${className}`}>
      <Icon className="h-5 w-5" />
      <span className="font-medium">{text}</span>
    </div>
  );
};