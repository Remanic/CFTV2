import { GraduationCap, Search, Star, CheckCircle2 } from "lucide-react";
import { FeaturePill } from "./FeaturePill";

export const FeaturesList = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4">
        <FeaturePill
          icon={GraduationCap}
          text="Navigate FAFSA"
          className="bg-[#8B5CF6]/10 text-[#8B5CF6] w-full sm:w-auto font-semibold font-mono"
        />
        <FeaturePill
          icon={Search}
          text="Find Best Loans"
          className="bg-[#D946EF]/10 text-[#D946EF] w-full sm:w-auto font-semibold font-mono"
        />
        <FeaturePill
          icon={Star}
          text="Maximize Aid"
          className="bg-[#F97316]/10 text-[#F97316] w-full sm:w-auto font-semibold font-mono"
        />
        <FeaturePill
          icon={CheckCircle2}
          text="Simplify Repayment"
          className="bg-[#0EA5E9]/10 text-[#0EA5E9] w-full sm:w-auto font-semibold font-mono"
        />
      </div>
      
      <span className="text-lg md:text-xl font-serif italic mt-8 text-black font-mono">
        All in One Place
      </span>
    </div>
  );
};