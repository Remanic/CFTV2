
import { LucideIcon, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  Icon: LucideIcon;
  content: string[];
  sectionId?: string;
  highlight?: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  cta?: {
    text: string;
    link: string;
  };
}

export const StepCard = ({
  number,
  title,
  Icon,
  content,
  sectionId,
  highlight,
  isActive,
  onMouseEnter,
  cta,
}: StepCardProps) => {
  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl transition-all duration-300 flex flex-col h-full",
        "hover:shadow-lg",
        highlight 
          ? "bg-white border-2 border-violet-200" 
          : "bg-white border border-[#E2E8F0]",
        isActive 
          ? "ring-2 ring-[#8B5CF6] transform scale-[1.02]" 
          : "border-[#E2E8F0]"
      )}
      onMouseEnter={onMouseEnter}
    >
      {/* Decorative elements */}
      {highlight && (
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-violet-100 rounded-full flex items-center justify-center z-10">
          <div className="h-4 w-4 bg-violet-500 rounded-full animate-pulse"></div>
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full text-[#8B5CF6] font-bold",
          highlight ? "bg-violet-50" : "bg-[#F1F0FB]",
          "group-hover:scale-110 transition-transform duration-300"
        )}>
          {number}
        </div>
        <Icon className={cn(
          "w-6 h-6",
          highlight ? "text-violet-600" : "text-[#8B5CF6]"
        )} />
      </div>
      
      <h3 className="text-xl font-semibold text-[#2D3748] mb-4">
        {title}
      </h3>
      
      <ul className="space-y-2 text-[#4A5568] mb-6 flex-grow">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <ChevronRight className={cn(
              "w-4 h-4 mt-1",
              highlight ? "text-violet-600" : "text-[#8B5CF6]",
              "group-hover:translate-x-1 transition-transform duration-300"
            )} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {sectionId && (
        <Button
          onClick={handleClick}
          className={cn(
            "w-full mt-auto transition-all duration-300 flex items-center justify-center gap-2",
            highlight 
              ? "bg-violet-600 hover:bg-violet-700" 
              : "bg-[#8B5CF6] hover:bg-[#7C3AED]",
            "text-white",
            "group-hover:translate-y-[-2px]",
          )}
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      )}
    </div>
  );
};
