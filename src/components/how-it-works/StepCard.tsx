
import { LucideIcon, ChevronRight } from "lucide-react";
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
        "bg-white border border-[#E2E8F0]",
        highlight ? "bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-200" : "",
        isActive ? "ring-2 ring-[#8B5CF6]" : "border-[#E2E8F0]"
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full text-[#8B5CF6] font-bold",
          highlight ? "bg-violet-100" : "bg-[#F1F0FB]"
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
              highlight ? "text-violet-600" : "text-[#8B5CF6]"
            )} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {sectionId && (
        <Button
          onClick={handleClick}
          className={cn(
            "w-full mt-auto transition-colors",
            highlight ? "bg-violet-600 hover:bg-violet-700" : "bg-[#8B5CF6] hover:bg-[#7C3AED]",
            "text-white"
          )}
        >
          Learn More
        </Button>
      )}
    </div>
  );
};
