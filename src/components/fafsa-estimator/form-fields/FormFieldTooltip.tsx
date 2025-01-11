import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

interface FormFieldTooltipProps {
  tooltip: string;
}

export const FormFieldTooltip = ({ tooltip }: FormFieldTooltipProps) => {
  const isMobile = useIsMobile();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger 
          type="button" 
          className={`p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
            isMobile ? 'touch-none' : ''
          }`}
        >
          <Info className="h-4 w-4 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent 
          side={isMobile ? "bottom" : "right"}
          align={isMobile ? "center" : "start"}
          className="max-w-[200px] text-sm"
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};