
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
        "group relative p-6 rounded-xl border",
        highlight 
          ? "bg-white border-blue-200" 
          : "bg-white border-[#E2E8F0]",
        isActive 
          ? "border-blue-600" 
          : "border-[#E2E8F0]"
      )}
      onMouseEnter={onMouseEnter}
    >
      {/* Simplified decorative elements */}
      {highlight && (
        <div className="absolute -top-2 -right-2 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center z-10">
          <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full text-blue-600 font-bold",
          highlight ? "bg-blue-50" : "bg-[#F1F0FB]"
        )}>
          {number}
        </div>
        <Icon className={cn(
          "w-6 h-6",
          highlight ? "text-blue-600" : "text-blue-600"
        )} />
      </div>
      
      <h3 className="text-xl font-semibold text-[#2D3748] mb-4 font-playfair">
        {title}
      </h3>
      
      <ul className="space-y-2 text-[#4A5568] mb-6 flex-grow">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <ChevronRight className={cn(
              "w-4 h-4 mt-1",
              highlight ? "text-blue-600" : "text-blue-600"
            )} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {sectionId && (
        <Button
          onClick={handleClick}
          className={cn(
            "w-full mt-auto flex items-center justify-center gap-2",
            highlight 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "bg-blue-600 hover:bg-blue-700",
            "text-white transition-colors"
          )}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
