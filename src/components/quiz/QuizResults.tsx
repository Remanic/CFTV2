
import { useQuiz } from "./QuizContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Edit3, 
  Search, 
  BarChart2, 
  Calculator, 
  Award,
  RefreshCw
} from "lucide-react";

export const QuizResults = () => {
  const { journeyStage, resetQuiz } = useQuiz();
  
  // Content for each journey stage
  const stageContent = {
    research: {
      title: "Start Your Research Journey",
      description: "We recommend starting with understanding the basics of student loans and financial aid.",
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      primaryLink: {
        to: "#fafsa-guide",
        text: "Complete FAFSA Guide"
      },
      secondaryLinks: [
        { to: "/student-loan-essentials", text: "Student Loan Essentials" },
        { to: "/private-loans-guide", text: "Private Loans Guide" }
      ],
      ctaText: "Begin your education financing journey with confidence! Our comprehensive guides will help you navigate the complex world of student loans and financial aid."
    },
    application: {
      title: "Complete Your Applications",
      description: "You're on the right track! Let's help you finish your FAFSA applications and loan paperwork.",
      icon: <Edit3 className="h-12 w-12 text-purple-600" />,
      primaryLink: {
        to: "/fafsa-guide",
        text: "FAFSA Application Guide"
      },
      secondaryLinks: [
        { to: "/fafsa-deadlines", text: "FAFSA Deadlines" },
        { to: "/fafsa-review-guide", text: "Review Your Application" }
      ],
      ctaText: "Don't miss out on financial aid! Our step-by-step guides ensure your applications are complete, accurate, and submitted before crucial deadlines."
    },
    comparison: {
      title: "Compare Your Loan Options",
      description: "Making the right choice is crucial. Let's compare loan options to find the best fit for you.",
      icon: <BarChart2 className="h-12 w-12 text-green-600" />,
      primaryLink: {
        to: "#loan-comparison",
        text: "Loan Comparison Tools"
      },
      secondaryLinks: [
        { to: "/federal-loans-guide", text: "Federal vs. Private Loans" },
        { to: "/parent-plus-guide", text: "Parent PLUS Loans Guide" }
      ],
      ctaText: "Don't settle for just any loan! Our comparison tools help you analyze interest rates, terms, and total costs to find the option that saves you the most money."
    },
    repayment: {
      title: "Optimize Your Loan Repayment",
      description: "Let's find the best repayment strategy to save you money and stress.",
      icon: <Calculator className="h-12 w-12 text-amber-600" />,
      primaryLink: {
        to: "#loan-repayment",
        text: "Repayment Calculator"
      },
      secondaryLinks: [
        { to: "/income-based-repayment", text: "Income-Based Options" },
        { to: "/extended-repayment", text: "Extended Repayment Plans" }
      ],
      ctaText: "Take control of your student debt! Our repayment calculators and guides help you choose plans that fit your budget while minimizing total interest paid."
    },
    forgiveness: {
      title: "Explore Loan Forgiveness Options",
      description: "You may qualify for loan forgiveness programs that could eliminate part or all of your debt.",
      icon: <Award className="h-12 w-12 text-red-600" />,
      primaryLink: {
        to: "#loan-forgiveness",
        text: "Forgiveness Programs"
      },
      secondaryLinks: [
        { to: "/public-service-loan-forgiveness", text: "PSLF Program" },
        { to: "/teacher-loan-forgiveness", text: "Teacher Loan Forgiveness" }
      ],
      ctaText: "Why pay if you don't have to? Thousands qualify for loan forgiveness but never apply. Our guides help you navigate the requirements and paperwork to maximize your forgiveness potential."
    }
  };
  
  // Get content based on journey stage
  const content = journeyStage ? stageContent[journeyStage] : stageContent.research;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full"
    >
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          {content.icon}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {content.title}
        </h3>
        <p className="text-gray-600">
          {content.description}
        </p>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
          <p className="text-gray-700 mb-4 text-center font-medium">
            {content.ctaText}
          </p>
          
          <Link to={content.primaryLink.to} className="block">
            <Button 
              className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
            >
              {content.primaryLink.text}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {content.secondaryLinks.map((link, index) => (
            <Link to={link.to} key={index}>
              <Button 
                variant="outline" 
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                {link.text}
              </Button>
            </Link>
          ))}
        </div>
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
