
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, GraduationCap, ChartBar, Search, BookOpen, ClipboardCheck, Calendar, Calculator } from "lucide-react";
import { useState } from "react";

interface MobileNavigationProps {
  mainCalculators: Array<{
    icon: any;
    label: string;
    path: string;
    color: string;
  }>;
  additionalCalculators: Array<{
    icon: any;
    label: string;
    path: string;
    color: string;
  }>;
}

export const MobileNavigation = ({
  mainCalculators,
  additionalCalculators,
}: MobileNavigationProps) => {
  const [isCalculatorsExpanded, setIsCalculatorsExpanded] = useState(false);
  const [isFafsaExpanded, setIsFafsaExpanded] = useState(false);

  const fafsaLinks = [
    {
      icon: Search,
      label: "Find State Deadlines",
      path: "/state-deadline-finder",
      color: "text-yellow-500"
    },
    {
      icon: BookOpen,
      label: "Complete Guide",
      path: "/fafsa-application-guide",
      color: "text-blue-500"
    },
    {
      icon: ClipboardCheck,
      label: "Review & Understand",
      path: "/fafsa-review-guide",
      color: "text-green-500"
    },
    {
      icon: Calendar,
      label: "2024 Deadlines",
      path: "/fafsa-deadline-2024-2025",
      color: "text-purple-500"
    },
    {
      icon: Calendar,
      label: "2025 Deadlines",
      path: "/fafsa-deadline-2025-2026",
      color: "text-orange-500"
    },
    {
      icon: Calculator,
      label: "Aid Estimator",
      path: "/fafsa-aid-estimator",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <button
          onClick={() => setIsCalculatorsExpanded(!isCalculatorsExpanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
        >
          Calculators
          {isCalculatorsExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isCalculatorsExpanded && (
          <div className="space-y-1 pl-2">
            {mainCalculators.map(({ icon: Icon, label, path, color }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Link>
            ))}
            {additionalCalculators.map(({ icon: Icon, label, path, color }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <button
          onClick={() => setIsFafsaExpanded(!isFafsaExpanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
        >
          FAFSA Resources
          {isFafsaExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isFafsaExpanded && (
          <div className="mt-1 space-y-1 pl-2">
            {fafsaLinks.map(({ icon: Icon, label, path, color }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4 px-3">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
};
