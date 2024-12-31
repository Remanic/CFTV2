import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, GraduationCap, ChartBar } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <div className="font-medium text-sm text-gray-500 px-3">Main Calculators</div>
        {mainCalculators.map(({ icon: Icon, label, path, color }) => (
          <Link
            key={path}
            to={path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Icon className={`h-5 w-5 ${color}`} />
            <span className="text-sm font-medium text-gray-700">{label}</span>
          </Link>
        ))}
      </div>

      <div className="border-t pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-500"
        >
          More Calculators
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-2">
            {additionalCalculators.map(({ icon: Icon, label, path, color }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="font-medium text-sm text-gray-500 px-3 mb-2">FAFSA</div>
        <Link
          to="/fafsa-application-guide"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <GraduationCap className="h-5 w-5 text-indigo-500" />
          <span className="text-sm font-medium text-gray-700">FAFSA Guide</span>
        </Link>
        <Link
          to="/fafsa-application-tips"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChartBar className="h-5 w-5 text-violet-500" />
          <span className="text-sm font-medium text-gray-700">Application Tips</span>
        </Link>
      </div>

      <div className="border-t pt-4 px-3">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
};