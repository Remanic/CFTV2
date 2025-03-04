
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JourneyPath } from "./journeyPathsData";
import { scrollToSection } from "./scrollUtils";

type MobileJourneyPathProps = {
  paths: JourneyPath[];
};

export const MobileJourneyPath = ({ paths }: MobileJourneyPathProps) => {
  return (
    <div className="block md:hidden space-y-3">
      {paths.map((path) => (
        <div 
          key={path.id}
          className={cn(
            "relative p-4 rounded-lg border transition-all duration-200",
            path.borderColor, path.bgColor, "shadow-sm"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={cn(
                "inline-flex items-center justify-center w-8 h-8 rounded-full",
                path.bgColor
              )}>
                <span className={path.color}>{path.icon}</span>
              </span>
              <h3 className="font-semibold text-gray-900 text-sm">
                {path.title}
              </h3>
            </div>
            
            <Button 
              size="sm"
              className={cn(
                "text-xs px-3 py-1 h-8 whitespace-nowrap",
                path.buttonColor
              )}
              onClick={() => scrollToSection(path.targetSection)}
            >
              {path.actionText}
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
          
          <p className="text-gray-600 text-xs mt-2 ml-10">
            {path.description}
          </p>
        </div>
      ))}
    </div>
  );
};
