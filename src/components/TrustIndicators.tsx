import { Shield, BadgeCheck, Trophy } from "lucide-react";

export const TrustIndicators = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-5 w-5 text-primary" />
        <span>Bank-level security</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <BadgeCheck className="h-5 w-5 text-secondary" />
        <span>Soft credit check</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Trophy className="h-5 w-5 text-warning" />
        <span>Compare instantly</span>
      </div>
    </div>
  );
};