
import { useState } from "react";
import { 
  BookOpen, 
  FileText, 
  BarChart2, 
  Calculator, 
  Award,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type JourneyPath = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  targetSection: string;
  actionText: string;
};

export const JourneyPathSelector = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const journeyPaths: JourneyPath[] = [
    {
      id: "research",
      title: "Research & Planning",
      description: "Understanding loan options and how financial aid works",
      icon: <BookOpen className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      targetSection: "#quick-understand",
      actionText: "Learn the basics"
    },
    {
      id: "application",
      title: "Application Process",
      description: "Completing FAFSA and loan applications correctly",
      icon: <FileText className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      targetSection: "#fafsa-guide",
      actionText: "FAFSA guide"
    },
    {
      id: "comparison",
      title: "Comparing Options",
      description: "Evaluating federal, private and other loan types",
      icon: <BarChart2 className="h-5 w-5" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      targetSection: "#loan-comparison",
      actionText: "Compare loans"
    },
    {
      id: "repayment",
      title: "Repayment Planning",
      description: "Finding the best repayment strategy for your situation",
      icon: <Calculator className="h-5 w-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      targetSection: "#loan-repayment",
      actionText: "Repayment options"
    },
    {
      id: "forgiveness",
      title: "Loan Forgiveness",
      description: "Programs that may eliminate part or all of your debt",
      icon: <Award className="h-5 w-5" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      targetSection: "#loan-forgiveness",
      actionText: "Forgiveness programs"
    }
  ];

  // Helper function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId.replace('#', ''));
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Mobile view: Card layout */}
      <div className="block md:hidden space-y-3">
        {journeyPaths.map((path) => (
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
                  `bg-${path.color.split('-')[1]}-600 hover:bg-${path.color.split('-')[1]}-700`
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
      
      {/* Desktop view: Visual path selector grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {journeyPaths.map((path) => (
          <div 
            key={path.id}
            className={cn(
              "relative p-4 rounded-lg border transition-all duration-200 cursor-pointer",
              "hover:shadow-md flex flex-col h-full",
              hoveredPath === path.id 
                ? `${path.borderColor} ${path.bgColor} shadow-sm scale-105` 
                : `${path.borderColor} ${path.bgColor} shadow-sm`
            )}
            onMouseEnter={() => setHoveredPath(path.id)}
            onMouseLeave={() => setHoveredPath(null)}
          >
            <div className="flex items-center gap-2 mb-2">
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
            
            <p className="text-gray-600 text-xs mb-4 flex-grow">
              {path.description}
            </p>
            
            <Button 
              size="sm"
              className={cn(
                "mt-auto w-full text-xs justify-between group",
                `bg-${path.color.split('-')[1]}-600 hover:bg-${path.color.split('-')[1]}-700`
              )}
              onClick={() => scrollToSection(path.targetSection)}
            >
              {path.actionText}
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform",
                hoveredPath === path.id ? "translate-x-1" : ""
              )} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
