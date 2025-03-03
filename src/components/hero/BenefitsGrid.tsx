
import { Sparkles, ChartBar, CheckCircle2, Coins } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BenefitsGrid = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-5 w-5 text-blue-600" />,
      title: "Step-by-Step Guidance",
      description: "Clear instructions for FAFSA and loan applications",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-green-600" />,
      title: "Compare Options",
      description: "See all your loan options side by side",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-200",
      iconBg: "bg-green-50"
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-purple-600" />,
      title: "Maximum Aid",
      description: "Get all the financial aid you qualify for",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-50"
    },
    {
      icon: <Coins className="h-5 w-5 text-amber-600" />,
      title: "Smart Repayment",
      description: "Find the plan that saves you the most money",
      color: "from-amber-500/20 to-amber-600/10",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-50"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 md:mt-8 w-full"
    >
      {benefits.map((benefit, index) => (
        <motion.div 
          key={index} 
          variants={item}
          className={cn(
            "relative overflow-hidden p-4 rounded-xl bg-gradient-to-br shadow-sm",
            "hover:shadow-md transition-all duration-200",
            `${benefit.color} ${benefit.borderColor} border`,
            "flex flex-col items-start text-left"
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "inline-flex items-center justify-center w-8 h-8 rounded-full",
              benefit.iconBg
            )}>
              {benefit.icon}
            </span>
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
              {benefit.title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm pl-10">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
