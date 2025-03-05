
import { 
  BookOpen, 
  Edit3, 
  BarChart2, 
  Calculator, 
  Award,
  FileText,
  CreditCard,
  School,
  Landmark
} from "lucide-react";
import { Resource } from "./types";

// Generate personalized resources based on journey stage AND specific answers
export const getPersonalizedResources = (
  journeyStage: string | null, 
  answers: Record<string, any>,
  expanded: boolean
): Resource[] => {
  // Default resources for each journey stage
  const baseResources: Record<string, Resource[]> = {
    research: [
      {
        title: "Student Loan Essentials Guide",
        description: "Understand the basics of federal and private student loans",
        icon: <BookOpen className="h-5 w-5 text-blue-600" />,
        link: "#student-loan-essentials",
        color: "bg-blue-50 border-blue-200 text-blue-800"
      },
      {
        title: "FAFSA Application Guide",
        description: "Step-by-step instructions for completing your FAFSA",
        icon: <FileText className="h-5 w-5 text-purple-600" />,
        link: "#fafsa-guide",
        color: "bg-purple-50 border-purple-200 text-purple-800"
      }
    ],
    application: [
      {
        title: "FAFSA Application Guide",
        description: "Complete walkthrough of the FAFSA application process",
        icon: <Edit3 className="h-5 w-5 text-purple-600" />,
        link: "#fafsa-guide",
        color: "bg-purple-50 border-purple-200 text-purple-800"
      },
      {
        title: "FAFSA Aid Estimator",
        description: "Calculate your potential financial aid before applying",
        icon: <Calculator className="h-5 w-5 text-indigo-600" />,
        link: "/fafsa-estimator",
        color: "bg-indigo-50 border-indigo-200 text-indigo-800"
      }
    ],
    comparison: [
      {
        title: "Loan Comparison Tool",
        description: "Compare different loan types side-by-side",
        icon: <BarChart2 className="h-5 w-5 text-emerald-600" />,
        link: "#loan-comparison",
        color: "bg-emerald-50 border-emerald-200 text-emerald-800"
      },
      {
        title: "Top Lenders Comparison",
        description: "See rates and terms from leading student loan providers",
        icon: <Landmark className="h-5 w-5 text-indigo-600" />,
        link: "#affiliate-loan-section",
        color: "bg-indigo-50 border-indigo-200 text-indigo-800"
      }
    ],
    repayment: [
      {
        title: "Repayment Calculator",
        description: "Calculate monthly payments and compare repayment plans",
        icon: <Calculator className="h-5 w-5 text-orange-600" />,
        link: "/student-loan-repayment-calculator",
        color: "bg-orange-50 border-orange-200 text-orange-800"
      },
      {
        title: "Income-Based Repayment Guide",
        description: "Explore repayment options based on your income",
        icon: <CreditCard className="h-5 w-5 text-blue-600" />,
        link: "/income-based-repayment",
        color: "bg-blue-50 border-blue-200 text-blue-800"
      }
    ],
    forgiveness: [
      {
        title: "Loan Forgiveness Eligibility Checker",
        description: "Find out if you qualify for loan forgiveness programs",
        icon: <Award className="h-5 w-5 text-amber-600" />,
        link: "/student-loan-forgiveness-eligibility",
        color: "bg-amber-50 border-amber-200 text-amber-800"
      },
      {
        title: "Public Service Loan Forgiveness Guide",
        description: "Complete guide to PSLF eligibility and application",
        icon: <School className="h-5 w-5 text-red-600" />,
        link: "/pslf-comprehensive-guide",
        color: "bg-red-50 border-red-200 text-red-800"
      },
      {
        title: "Income-Driven Repayment Forgiveness",
        description: "How to get loan forgiveness after 20-25 years of IDR payments",
        icon: <Calculator className="h-5 w-5 text-green-600" />,
        link: "/idr-forgiveness",
        color: "bg-green-50 border-green-200 text-green-800"
      }
    ]
  };
  
  // Start with base resources for the journey stage
  let resources = journeyStage ? [...baseResources[journeyStage]] : [...baseResources.research];
  
  // Add additional specialized resources based on specific answers
  if (answers.loan_type === "federal") {
    resources.push({
      title: "Federal Loans Guide",
      description: "Everything you need to know about federal student loans",
      icon: <School className="h-5 w-5 text-blue-600" />,
      link: "/federal-loans-guide",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    });
  }
  
  if (answers.loan_type === "private") {
    resources.push({
      title: "Private Loans Guide",
      description: "Understanding private student loan options and considerations",
      icon: <Landmark className="h-5 w-5 text-indigo-600" />,
      link: "/private-loans-guide",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    });
  }
  
  if (answers.financial_need === "forgiveness") {
    resources.push({
      title: "Teacher Loan Forgiveness",
      description: "Special forgiveness options for educators",
      icon: <Award className="h-5 w-5 text-green-600" />,
      link: "/teacher-loan-forgiveness",
      color: "bg-green-50 border-green-200 text-green-800"
    });
  }
  
  if (answers.specific_goal === "pay_less") {
    resources.push({
      title: "Extended Repayment Options",
      description: "How to lower your monthly payments with extended terms",
      icon: <Calculator className="h-5 w-5 text-orange-600" />,
      link: "/extended-repayment",
      color: "bg-orange-50 border-orange-200 text-orange-800"
    });
  }
  
  if (answers.specific_goal === "lower_payments") {
    resources.push({
      title: "Income-Driven Repayment Guide",
      description: "Make payments based on your income for more affordable monthly payments",
      icon: <Calculator className="h-5 w-5 text-blue-600" />,
      link: "/income-based-repayment",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    });
  }
  
  if (answers.specific_goal === "qualify_forgiveness") {
    // Only add if not already added in the forgiveness section
    if (!resources.some(r => r.link === "/idr-forgiveness")) {
      resources.push({
        title: "Income-Driven Repayment Forgiveness",
        description: "How to get loan forgiveness after 20-25 years of IDR payments",
        icon: <Calculator className="h-5 w-5 text-green-600" />,
        link: "/idr-forgiveness",
        color: "bg-green-50 border-green-200 text-green-800"
      });
    }
  }
  
  // Limit to max 4 resources (or show all if expanded)
  return expanded ? resources : resources.slice(0, 4);
};
