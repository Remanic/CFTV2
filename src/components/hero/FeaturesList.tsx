import { GraduationCap, Search, Star, CheckCircle2 } from "lucide-react";
import { FeaturePill } from "./FeaturePill";
import CurvedConnector from "./CurvedConnector";

export const FeaturesList = () => {
  return (
    <div className="flex flex-col items-center mt-8">
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
      
      <CurvedConnector />
      
      <span className="text-lg md:text-xl text-gray-700 font-medium relative">
        All in One Place
      </span>
    </div>
  );
};