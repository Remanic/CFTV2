
import React from "react";
import { 
  FileText, 
  BarChart2, 
  Calculator, 
  Award,
  CreditCard,
  Landmark
} from "lucide-react";

export type JourneyPath = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  targetSection: string;
  actionText: string;
  buttonColor: string;
};

// Create a function that returns the icon components
// This avoids using JSX directly in the .ts file
const createIconElement = (IconComponent: any) => {
  return React.createElement(IconComponent, { className: "h-5 w-5" });
};

export const journeyPaths: JourneyPath[] = [
  {
    id: "lenders",
    title: "Compare Lenders & Rates",
    description: "Find and compare the best student loan options for your needs",
    icon: createIconElement(Landmark),
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    targetSection: "#affiliate-loan-section",
    actionText: "View lenders",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    id: "application",
    title: "Application Process",
    description: "Completing FAFSA and loan applications correctly",
    icon: createIconElement(FileText),
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    targetSection: "#fafsa-guide",
    actionText: "FAFSA guide",
    buttonColor: "bg-purple-600 hover:bg-purple-700"
  },
  {
    id: "comparison",
    title: "Comparing Loan Options",
    description: "Evaluating federal, private and other loan types",
    icon: createIconElement(BarChart2),
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    targetSection: "#loan-comparison",
    actionText: "Compare loans",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700"
  },
  {
    id: "repayment",
    title: "Repayment Planning",
    description: "Finding the best repayment strategy for your situation",
    icon: createIconElement(Calculator),
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    targetSection: "#loan-repayment",
    actionText: "Repayment options",
    buttonColor: "bg-orange-600 hover:bg-orange-700"
  },
  {
    id: "forgiveness",
    title: "Loan Forgiveness",
    description: "Programs that may eliminate part or all of your debt",
    icon: createIconElement(Award),
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    targetSection: "#loan-forgiveness",
    actionText: "Forgiveness programs",
    buttonColor: "bg-amber-600 hover:bg-amber-700"
  },
  {
    id: "tools",
    title: "Financial Tools",
    description: "Calculators and tools to help plan your financial future",
    icon: createIconElement(CreditCard),
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    targetSection: "#quick-understand",
    actionText: "Use tools",
    buttonColor: "bg-blue-600 hover:bg-blue-700"
  }
];
