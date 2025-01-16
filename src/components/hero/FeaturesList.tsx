import { GraduationCap, Search, Star, CheckCircle2 } from "lucide-react";
import { FeaturePill } from "./FeaturePill";

export const FeaturesList = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-wrap justify-center gap-3">
        <FeaturePill
          icon={GraduationCap}
          text="Navigate FAFSA"
          className="bg-[#8B5CF6]/10 text-[#8B5CF6]"
        />
        <FeaturePill
          icon={Search}
          text="Find Best Loans"
          className="bg-[#D946EF]/10 text-[#D946EF]"
        />
        <FeaturePill
          icon={Star}
          text="Maximize Aid"
          className="bg-[#F97316]/10 text-[#F97316]"
        />
        <FeaturePill
          icon={CheckCircle2}
          text="Simplify Repayment"
          className="bg-[#0EA5E9]/10 text-[#0EA5E9]"
        />
      </div>
      
      <span className="text-lg md:text-xl text-[#9b87f5] font-medium mt-8">
        All in One Place
      </span>
    </div>
  );
};