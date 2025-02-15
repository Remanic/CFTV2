
import { Calculator, Home, Car, CreditCard, PiggyBank, DollarSign, Shield } from "lucide-react";
import { useLocation } from "react-router-dom";

export const useNavigationLinks = () => {
  const location = useLocation();

  const calculatorLinks = [
    { 
      icon: DollarSign, 
      label: "Loan Repayment Calculator", 
      path: "/loan-repayment-calculator", 
      color: "text-emerald-500" 
    },
    { 
      icon: Shield, 
      label: "Loan Forgiveness Checker", 
      path: "/loan-forgiveness-eligibility", 
      color: "text-violet-500" 
    },
    { 
      icon: Home, 
      label: "Mortgage Calculator", 
      path: "/mortgage-loan-calculator", 
      color: "text-blue-500" 
    },
    { 
      icon: Car, 
      label: "Auto Loan Calculator", 
      path: "/auto-loan-payment-calculator", 
      color: "text-green-500" 
    },
    { 
      icon: CreditCard, 
      label: "Credit Card Calculator", 
      path: "/credit-card-payment-calculator", 
      color: "text-purple-500" 
    },
    { 
      icon: Calculator, 
      label: "EMI Calculator", 
      path: "/monthly-loan-emi-calculator", 
      color: "text-orange-500" 
    },
    { 
      icon: PiggyBank, 
      label: "Savings Calculator", 
      path: "/compound-savings-calculator", 
      color: "text-pink-500" 
    },
  ].map(link => ({
    ...link,
    state: { from: location.pathname }
  }));

  const mainCalculators = calculatorLinks.slice(0, 5);
  const additionalCalculators = calculatorLinks.slice(5);

  return {
    calculatorLinks,
    mainCalculators,
    additionalCalculators
  };
};
