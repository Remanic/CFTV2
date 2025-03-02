
import { BookOpen, Shield } from "lucide-react";

export const BenefitsGrid = () => {
  const benefits = [
    {
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />,
      title: "Step-by-Step Guidance",
      description: "Clear instructions for FAFSA and loan applications"
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />,
      title: "Compare Options",
      description: "See all your loan options side by side"
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />,
      title: "Maximum Aid",
      description: "Get all the financial aid you qualify for"
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />,
      title: "Smart Repayment",
      description: "Find the plan that saves you the most money"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12 w-full">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className="text-center p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-sm hover:shadow-md 
            transition-all duration-300 border border-gray-100 hover:translate-y-[-4px] group"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 
            mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
            {benefit.icon}
          </div>
          <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{benefit.title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};
