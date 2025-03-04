
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JourneyPath } from "./journeyPathsData";
import { scrollToSection } from "./scrollUtils";

type DesktopJourneyPathProps = {
  paths: JourneyPath[];
};

export const DesktopJourneyPath = ({ paths }: DesktopJourneyPathProps) => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      {paths.map((path) => (
        <div 
          key={path.id}
          className={cn(
            "relative p-5 rounded-lg border transition-all duration-200 cursor-pointer",
            "hover:shadow-md flex flex-col h-full",
            hoveredPath === path.id 
              ? `${path.borderColor} ${path.bgColor} shadow-md scale-105` 
              : `${path.borderColor} ${path.bgColor} shadow-sm`,
            "group"
          )}
          onMouseEnter={() => setHoveredPath(path.id)}
          onMouseLeave={() => setHoveredPath(null)}
          onClick={() => scrollToSection(path.targetSection)}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className={cn(
              "inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors",
              path.bgColor,
              "group-hover:" + path.color.replace('text-', 'bg-').replace('-600', '-100')
            )}>
              <span className={cn(
                path.color,
                "transition-transform group-hover:scale-110"
              )}>{path.icon}</span>
            </span>
            <h3 className="font-semibold text-gray-900 text-base group-hover:text-gray-900 transition-colors">
              {path.title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {path.description}
          </p>
          
          <Button 
            size="sm"
            className={cn(
              "mt-auto w-full text-sm justify-between",
              path.buttonColor,
              "opacity-90 group-hover:opacity-100 transition-opacity"
            )}
          >
            {path.actionText}
            <ChevronRight className={cn(
              "h-4 w-4 transition-transform group-hover:translate-x-1"
            )} />
          </Button>
        </div>
      ))}
    </div>
  );
};
