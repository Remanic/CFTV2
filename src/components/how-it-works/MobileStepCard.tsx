
import { LucideIcon, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileStepCardProps {
  number: string;
  title: string;
  Icon: LucideIcon;
  content: string[];
  sectionId?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export const MobileStepCard = ({
  number,
  title,
  Icon,
  content,
  sectionId,
  cta,
}: MobileStepCardProps) => {
  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <AccordionItem 
      value={`step-${number}`}
      className="border border-[#E2E8F0] rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      <AccordionTrigger className="hover:no-underline px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F1F0FB] text-[#8B5CF6] font-bold text-sm">
            {number}
          </div>
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-left font-semibold text-[#2D3748]">{title}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 space-y-3">
        <div className="pl-14">
          <ul className="space-y-2 text-[#4A5568] mb-4">
            {content.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-[#8B5CF6]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {sectionId && (
            <Button
              onClick={handleClick}
              className="w-full mt-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center gap-2"
            >
              <span>Go to {title}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
