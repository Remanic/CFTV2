
import { useState } from "react";
import { 
  FileText, 
  BarChart2, 
  Calculator, 
  Award,
  ChevronRight,
  CreditCard,
  Landmark
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
      id: "lenders",
      title: "Compare Lenders & Rates",
      description: "Find and compare the best student loan options for your needs",
      icon: <Landmark className="h-5 w-5" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      targetSection: "#affiliate-loan-section",
      actionText: "View lenders"
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
      title: "Comparing Loan Options",
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
    },
    {
      id: "tools",
      title: "Financial Tools",
      description: "Calculators and tools to help plan your financial future",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      targetSection: "#quick-understand",
      actionText: "Use tools"
    }
  ];

  // Improved scroll function with better positioning
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId.replace('#', ''));
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Enhanced question subtitle - made more visible */}
      <div className="mb-6 text-center">
        <h3 className="text-lg md:text-xl font-medium text-blue-700 px-4 py-2 rounded-lg bg-blue-50 inline-block shadow-sm border border-blue-100">
          Where are you in the student loan process?
        </h3>
      </div>
      
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
                  path.color.replace('text-', 'bg-').replace('-600', '-600 hover:bg-' + path.color.split('-')[1] + '-700')
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
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {journeyPaths.map((path) => (
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
                path.color.replace('text-', 'bg-').replace('-600', '-600 hover:bg-' + path.color.split('-')[1] + '-700'),
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
    </div>
  );
};
