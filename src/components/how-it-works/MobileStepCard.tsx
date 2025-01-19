import { LucideIcon, ChevronRight } from "lucide-react";
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
  cta: {
    text: string;
    link: string;
  };
}

export const MobileStepCard = ({
  number,
  title,
  Icon,
  content,
  cta,
}: MobileStepCardProps) => (
  <AccordionItem 
    value={`step-${number}`}
    className="border border-[#E2E8F0] rounded-lg bg-white"
  >
    <AccordionTrigger className="hover:no-underline px-4">
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
    <AccordionContent className="px-4 pb-4">
      <div className="pl-14">
        <ul className="space-y-2 text-[#4A5568] mb-4">
          {content.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-[#8B5CF6]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="w-full mt-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-colors"
        >
          <a href={cta.link}>{cta.text}</a>
        </Button>
      </div>
    </AccordionContent>
  </AccordionItem>
);