import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  Icon: LucideIcon;
  content: string[];
  cta: {
    text: string;
    link: string;
  };
  isActive?: boolean;
  onMouseEnter?: () => void;
}

export const StepCard = ({
  number,
  title,
  Icon,
  content,
  cta,
  isActive,
  onMouseEnter,
}: StepCardProps) => (
  <div
    className={cn(
      "group relative p-6 rounded-xl transition-all duration-300 flex flex-col h-full",
      "hover:shadow-lg",
      "bg-white border border-[#E2E8F0]",
      isActive ? "ring-2 ring-[#8B5CF6]" : ""
    )}
    onMouseEnter={onMouseEnter}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F1F0FB] text-[#8B5CF6] font-bold">
        {number}
      </div>
      <Icon className="w-6 h-6 text-[#8B5CF6]" />
    </div>
    
    <h3 className="text-xl font-semibold text-[#2D3748] mb-4">
      {title}
    </h3>
    
    <ul className="space-y-2 text-[#4A5568] mb-6 flex-grow">
      {content.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 mt-1 text-[#8B5CF6]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    <Button
      asChild
      className="w-full mt-auto bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-colors"
    >
      <a href={cta.link}>{cta.text}</a>
    </Button>
  </div>
);