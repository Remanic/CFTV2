
import { Clock } from "lucide-react";
import { FeaturesList } from "./FeaturesList";

export const HeroHeading = () => {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
        <Clock className="h-4 w-4 mr-1" />
        <span className="text-xs sm:text-sm">Limited time offer - Get your free guide</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-sans">
          Simplify Your <span className="text-blue-600 relative inline-block font-playfair">
            Student Loan
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-200 -rotate-1"></span>
          </span> Journey
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mt-2">
          Clear guidance, better choices, and less stress with your education financing.
        </p>
      </div>

      <FeaturesList />
    </div>
  );
};
