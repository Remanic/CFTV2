
import { useState } from "react";
import { 
  BookOpen, 
  FileText, 
  BarChart2, 
  Calculator, 
  Award,
  ChevronRight,
  ExternalLink
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
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  
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
    <div className="max-w-3xl mx-auto">
      {/* Mobile view: Dropdown selector */}
      <div className="block md:hidden mb-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Where are you in your loan journey?</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => {
              const pathId = e.target.value;
              if (pathId) {
                setSelectedPath(pathId);
                const path = journeyPaths.find(p => p.id === pathId);
                if (path) {
                  scrollToSection(path.targetSection);
                }
              }
            }}
            value={selectedPath || ""}
          >
            <option value="" disabled>Select your stage</option>
            {journeyPaths.map(path => (
              <option key={path.id} value={path.id}>
                {path.title}
              </option>
            ))}
          </select>
          
          {selectedPath && (
            <div className="mt-4">
              <Button 
                className="w-full"
                onClick={() => {
                  const path = journeyPaths.find(p => p.id === selectedPath);
                  if (path) {
                    scrollToSection(path.targetSection);
                  }
                }}
              >
                Go to {journeyPaths.find(p => p.id === selectedPath)?.actionText}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop view: Visual path selector */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {journeyPaths.map((path) => (
          <div 
            key={path.id}
            className={cn(
              "relative p-4 rounded-lg border transition-all duration-200 cursor-pointer",
              "hover:shadow-md flex flex-col h-full",
              selectedPath === path.id 
                ? `${path.borderColor} ${path.bgColor} shadow-sm` 
                : "border-gray-200 bg-white"
            )}
            onClick={() => setSelectedPath(path.id)}
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
            
            <p className="text-gray-600 text-xs mb-3 flex-grow">
              {path.description}
            </p>
            
            {selectedPath === path.id && (
              <Button 
                size="sm"
                className={cn(
                  "mt-2 w-full text-xs justify-between group",
                  `bg-${path.color.split('-')[1]}-600 hover:bg-${path.color.split('-')[1]}-700`
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(path.targetSection);
                }}
              >
                {path.actionText}
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
