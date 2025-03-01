
import { GraduationCap, Search, Star, CheckCircle2 } from "lucide-react";
import { FeaturePill } from "./FeaturePill";

export const FeaturesList = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-2 md:gap-4">
        <FeaturePill
          icon={GraduationCap}
          text="Navigate FAFSA"
          className="bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 w-full sm:w-auto font-semibold font-mono text-sm"
        />
        <FeaturePill
          icon={Search}
          text="Find Best Loans"
          className="bg-[#D946EF]/10 text-[#D946EF] border border-[#D946EF]/20 w-full sm:w-auto font-semibold font-mono text-sm"
        />
        <FeaturePill
          icon={Star}
          text="Maximize Aid"
          className="bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 w-full sm:w-auto font-semibold font-mono text-sm"
        />
        <FeaturePill
          icon={CheckCircle2}
          text="Simplify Repayment"
          className="bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20 w-full sm:w-auto font-semibold font-mono text-sm"
        />
      </div>
      
      <span className="text-sm sm:text-base md:text-lg font-serif italic mt-3 text-black font-mono relative">
        All in One Place
        <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
      </span>
    </div>
  );
};
