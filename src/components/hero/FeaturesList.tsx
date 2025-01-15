import { GraduationCap, Search, Star, CheckCircle2 } from "lucide-react";
import { FeaturePill } from "./FeaturePill";

export const FeaturesList = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-wrap justify-center gap-3">
        <FeaturePill
          icon={GraduationCap}
          text="Navigate FAFSA"
          className="bg-primary/10 text-primary"
        />
        <FeaturePill
          icon={Search}
          text="Find Best Loans"
          className="bg-secondary/10 text-secondary"
        />
        <FeaturePill
          icon={Star}
          text="Maximize Aid"
          className="bg-warning/10 text-warning"
        />
        <FeaturePill
          icon={CheckCircle2}
          text="Simplify Repayment"
          className="bg-primary/10 text-primary"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      
      <span className="text-base md:text-lg text-gray-600 font-medium relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/10 rounded-full" />
        All in One Place
      </span>
    </div>
  );
};