
import { Calculator, Home, Car, CreditCard, PiggyBank, DollarSign, Shield } from "lucide-react";
import { useLocation } from "react-router-dom";

export const useNavigationLinks = () => {
  const location = useLocation();
  
  // Extract the current section ID from the URL hash if any
  const currentSection = location.hash ? location.hash.substring(1) : '';

  const calculatorLinks = [
    { 
      icon: DollarSign, 
      label: "Loan Repayment Simulator", 
      path: "/student-loan-repayment-calculator", 
      color: "text-emerald-500",
      section: "loan-repayment"
    },
    { 
      icon: Shield, 
      label: "Loan Forgiveness Checker", 
      path: "/student-loan-forgiveness-eligibility", 
      color: "text-violet-500",
      section: "loan-forgiveness" 
    },
    { 
      icon: Home, 
      label: "Mortgage Calculator", 
      path: "/mortgage-payment-calculator", 
      color: "text-blue-500",
      section: "loan-comparison"
    },
    { 
      icon: Car, 
      label: "Auto Loan Calculator", 
      path: "/car-loan-calculator", 
      color: "text-green-500",
      section: "loan-comparison"
    },
    { 
      icon: CreditCard, 
      label: "Credit Card Calculator", 
      path: "/credit-card-payment-calculator", 
      color: "text-purple-500",
      section: "loan-comparison"
    },
    { 
      icon: Calculator, 
      label: "EMI Calculator", 
      path: "/loan-emi-calculator", 
      color: "text-orange-500",
      section: "loan-comparison"
    },
    { 
      icon: PiggyBank, 
      label: "Savings Calculator", 
      path: "/compound-interest-calculator", 
      color: "text-pink-500",
      section: "loan-comparison"
    },
  ].map(link => ({
    ...link,
    state: { 
      from: location.pathname,
      section: link.section || currentSection
    }
  }));

  const mainCalculators = calculatorLinks.slice(0, 5);
  const additionalCalculators = calculatorLinks.slice(5);

  return {
    calculatorLinks,
    mainCalculators,
    additionalCalculators
  };
};
