
import { BookOpen, Shield, MoveRight, BarChart3, CheckCircle2, ChartBar, Sparkles, Coins } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BenefitsGrid = () => {
  const benefits = [
    {
      icon: <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />,
      title: "Step-by-Step Guidance",
      description: "Clear instructions for FAFSA and loan applications",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50"
    },
    {
      icon: <ChartBar className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />,
      title: "Compare Options",
      description: "See all your loan options side by side",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-200",
      iconBg: "bg-green-50"
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />,
      title: "Maximum Aid",
      description: "Get all the financial aid you qualify for",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-50"
    },
    {
      icon: <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />,
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-12 w-full"
    >
      {benefits.map((benefit, index) => (
        <motion.div 
          key={index} 
          variants={item}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className={cn(
            "relative overflow-hidden p-4 sm:p-5 md:p-6 rounded-xl bg-gradient-to-br shadow-md",
            "hover:shadow-lg transition-all duration-300",
            `${benefit.color} ${benefit.borderColor} border`,
            "flex flex-col items-center text-center group"
          )}
        >
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full",
            "mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300",
            benefit.iconBg
          )}>
            {benefit.icon}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg md:text-xl">
            {benefit.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {benefit.description}
          </p>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl opacity-60"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};
