
import { useQuiz } from "./QuizContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Edit3, 
  BarChart2, 
  Calculator, 
  Award,
  RefreshCw,
  ChevronRight,
  FileText,
  CreditCard,
  School,
  Landmark
} from "lucide-react";
import { useState } from "react";

type Resource = {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  color: string;
};

export const QuizResults = () => {
  const { journeyStage, resetQuiz, answers } = useQuiz();
  const [expanded, setExpanded] = useState(false);
  
  // Generate personalized resources based on journey stage AND specific answers
  const getPersonalizedResources = (): Resource[] => {
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
          link: "/loan-forgiveness-eligibility",
          color: "bg-amber-50 border-amber-200 text-amber-800"
        },
        {
          title: "Public Service Loan Forgiveness Guide",
          description: "Complete guide to PSLF eligibility and application",
          icon: <School className="h-5 w-5 text-red-600" />,
          link: "/public-service-loan-forgiveness",
          color: "bg-red-50 border-red-200 text-red-800"
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
    
    // Limit to max 4 resources (or show all if expanded)
    return expanded ? resources : resources.slice(0, 4);
  };
  
  const resources = getPersonalizedResources();
  const hasMoreResources = !expanded && getPersonalizedResources().length > 4;
  
  // Helper function to handle navigation to anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetLink: string) => {
    e.preventDefault();
    
    if (targetLink.startsWith('#')) {
      const targetElement = document.getElementById(targetLink.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For page navigation
      window.location.href = targetLink;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Your Personalized Resources
        </h3>
        <p className="text-gray-600">
          Based on your answers, we've selected these resources to help you on your student loan journey.
        </p>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.link} 
              onClick={(e) => handleLinkClick(e, resource.link)}
              className="block"
            >
              <div className={`p-4 rounded-lg border ${resource.color} hover:shadow-md transition-shadow flex flex-col h-full`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white">{resource.icon}</div>
                  <h4 className="font-semibold">{resource.title}</h4>
                </div>
                <p className="text-sm text-gray-600 mt-1 mb-3 flex-grow">{resource.description}</p>
                <div className="flex items-center justify-end mt-auto text-sm font-medium">
                  View resource <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {hasMoreResources && (
          <div className="text-center mt-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setExpanded(true)}
              className="text-blue-600 border-blue-200"
            >
              Show more recommendations
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          variant="ghost" 
          onClick={resetQuiz}
          className="text-gray-600 hover:text-blue-600"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> Take quiz again
        </Button>
      </div>
    </motion.div>
  );
};
