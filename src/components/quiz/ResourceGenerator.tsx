
import React from 'react';
import { 
  BookOpen, 
  Edit3, 
  BarChart2, 
  Calculator, 
  Award,
  FileText,
  CreditCard,
  School,
  Landmark,
  DollarSign,
  Clock,
  Shield,
  PieChart,
  BadgeCheck,
  GraduationCap,
  BookText
} from "lucide-react";
import { Resource } from "./types";

// Generate personalized resources based on journey stage AND specific answers
export const getPersonalizedResources = (
  journeyStage: string | null, 
  answers: Record<string, any>,
  expanded: boolean
): Resource[] => {
  // Comprehensive list of all available resources on the website
  const allResources: Resource[] = [
    // Research stage resources
    {
      title: "Student Loan Essentials Guide",
      description: "Understand the basics of federal and private student loans",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      link: "/student-loan-essentials",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "FAFSA Application Guide",
      description: "Step-by-step instructions for completing your FAFSA",
      icon: <FileText className="h-5 w-5 text-purple-600" />,
      link: "/fafsa-guide",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    // Application stage resources
    {
      title: "FAFSA Aid Estimator",
      description: "Calculate your potential financial aid before applying",
      icon: <Calculator className="h-5 w-5 text-indigo-600" />,
      link: "/fafsa-estimator",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },
    {
      title: "FAFSA Deadlines Guide",
      description: "Don't miss important FAFSA deadlines for 2024-2025",
      icon: <Clock className="h-5 w-5 text-red-600" />,
      link: "/fafsa-deadline-2025",
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      title: "FAFSA Review Guide",
      description: "How to review and understand your FAFSA results",
      icon: <BookText className="h-5 w-5 text-green-600" />,
      link: "/fafsa-review",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    // Comparison stage resources
    {
      title: "Loan Comparison Tool",
      description: "Compare different loan types side-by-side",
      icon: <BarChart2 className="h-5 w-5 text-emerald-600" />,
      link: "/loan-comparison-guide",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800"
    },
    {
      title: "Federal Loans Guide",
      description: "Everything you need to know about federal student loans",
      icon: <School className="h-5 w-5 text-blue-600" />,
      link: "/federal-loans-guide",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "Private Loans Guide",
      description: "Understanding private student loan options and considerations",
      icon: <Landmark className="h-5 w-5 text-indigo-600" />,
      link: "/private-loans-guide",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },
    {
      title: "Parent PLUS Loans Guide",
      description: "Information on Parent PLUS loans for parents of undergraduate students",
      icon: <BadgeCheck className="h-5 w-5 text-purple-600" />,
      link: "/parent-plus-guide",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    // Repayment stage resources
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
    },
    {
      title: "Standard Repayment Plan",
      description: "Understanding the standard 10-year repayment plan",
      icon: <PieChart className="h-5 w-5 text-green-600" />,
      link: "/standard-repayment",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      title: "Graduated Repayment Plan",
      description: "Start with lower payments that increase over time",
      icon: <BarChart2 className="h-5 w-5 text-purple-600" />,
      link: "/graduated-repayment",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
      title: "Extended Repayment Options",
      description: "How to lower your monthly payments with extended terms",
      icon: <Clock className="h-5 w-5 text-orange-600" />,
      link: "/extended-repayment",
      color: "bg-orange-50 border-orange-200 text-orange-800"
    },
    {
      title: "Private Loan Repayment",
      description: "Understanding repayment options for private student loans",
      icon: <Landmark className="h-5 w-5 text-indigo-600" />,
      link: "/private-loan-repayment",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800"
    },
    // Forgiveness stage resources
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
      icon: <Shield className="h-5 w-5 text-red-600" />,
      link: "/pslf-comprehensive-guide",
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      title: "Income-Driven Repayment Forgiveness",
      description: "How to get loan forgiveness after 20-25 years of IDR payments",
      icon: <Calculator className="h-5 w-5 text-green-600" />,
      link: "/idr-forgiveness",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      title: "Teacher Loan Forgiveness",
      description: "Special forgiveness options for educators",
      icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
      link: "/teacher-loan-forgiveness",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "Latest Loan Forgiveness Programs",
      description: "Stay updated on the latest student loan forgiveness initiatives",
      icon: <FileText className="h-5 w-5 text-violet-600" />,
      link: "/latest-loan-forgiveness",
      color: "bg-violet-50 border-violet-200 text-violet-800"
    },
    // Additional calculator resources
    {
      title: "Mortgage Calculator",
      description: "Plan for future home purchases with our mortgage calculator",
      icon: <DollarSign className="h-5 w-5 text-emerald-600" />,
      link: "/mortgage-calculator",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800"
    },
    {
      title: "Auto Loan Calculator",
      description: "Calculate car loan payments and affordability",
      icon: <Calculator className="h-5 w-5 text-blue-600" />,
      link: "/auto-loan-calculator",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "Credit Card Payoff Calculator",
      description: "Plan your strategy to pay off credit card debt",
      icon: <CreditCard className="h-5 w-5 text-red-600" />,
      link: "/credit-card-calculator",
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      title: "Savings Calculator",
      description: "Plan your future savings and investment growth",
      icon: <PieChart className="h-5 w-5 text-green-600" />,
      link: "/savings-calculator",
      color: "bg-green-50 border-green-200 text-green-800"
    }
  ];
  
  // Starter resources for each journey stage
  const baseResourceIds: Record<string, number[]> = {
    research: [0, 1], // Student Loan Essentials, FAFSA Guide
    application: [1, 2, 3], // FAFSA Guide, FAFSA Aid Estimator, FAFSA Deadlines
    comparison: [5, 6, 7], // Loan Comparison, Federal Loans, Private Loans
    repayment: [9, 10, 14], // Repayment Calculator, IBR Guide, Private Loan Repayment
    forgiveness: [15, 16, 17] // Forgiveness Eligibility, PSLF, IDR Forgiveness
  };
  
  // Start with base resources for the journey stage
  let selectedResourceIds = new Set<number>(
    journeyStage ? baseResourceIds[journeyStage] : baseResourceIds.research
  );
  
  // Add additional resources based on specific answers
  const addResourcesBasedOnAnswers = (answers: Record<string, any>) => {
    // Helper function to handle both array and single value answers
    const getValues = (key: string): string[] => {
      const value = answers[key];
      if (!value) return [];
      return Array.isArray(value) ? value : [value];
    };

    // Get all values from the answers
    const journeyPhases = getValues('application_status');
    const financialConcerns = getValues('financial_need');
    const loanTypes = getValues('loan_type');
    const specificGoals = getValues('specific_goal');

    // Add specific resources based on answers
    if (journeyPhases.includes('research')) {
      selectedResourceIds.add(0); // Student Loan Essentials
    }
    
    if (journeyPhases.includes('application')) {
      selectedResourceIds.add(1); // FAFSA Guide
      selectedResourceIds.add(2); // FAFSA Aid Estimator
    }
    
    if (journeyPhases.includes('comparing')) {
      selectedResourceIds.add(5); // Loan Comparison
    }
    
    if (journeyPhases.includes('repayment')) {
      selectedResourceIds.add(9); // Repayment Calculator
    }
    
    if (financialConcerns.includes('maximize_aid')) {
      selectedResourceIds.add(2); // FAFSA Aid Estimator
      selectedResourceIds.add(3); // FAFSA Deadlines
    }
    
    if (financialConcerns.includes('low_rates')) {
      selectedResourceIds.add(5); // Loan Comparison
      selectedResourceIds.add(7); // Private Loans Guide
    }
    
    if (financialConcerns.includes('repayment_options')) {
      selectedResourceIds.add(10); // IBR Guide
      selectedResourceIds.add(11); // Standard Repayment
      selectedResourceIds.add(12); // Graduated Repayment
    }
    
    if (financialConcerns.includes('forgiveness')) {
      selectedResourceIds.add(15); // Forgiveness Eligibility
      selectedResourceIds.add(16); // PSLF Guide
      selectedResourceIds.add(19); // Latest Forgiveness Programs
    }
    
    if (loanTypes.includes('federal')) {
      selectedResourceIds.add(6); // Federal Loans Guide
    }
    
    if (loanTypes.includes('private')) {
      selectedResourceIds.add(7); // Private Loans Guide
      selectedResourceIds.add(14); // Private Loan Repayment
    }
    
    if (loanTypes.includes('parent')) {
      selectedResourceIds.add(8); // Parent PLUS Guide
    }
    
    if (loanTypes.includes('refinancing')) {
      selectedResourceIds.add(14); // Private Loan Repayment
    }
    
    if (specificGoals.includes('understand')) {
      selectedResourceIds.add(0); // Student Loan Essentials
      selectedResourceIds.add(5); // Loan Comparison
    }
    
    if (specificGoals.includes('lower_payments')) {
      selectedResourceIds.add(10); // IBR Guide
      selectedResourceIds.add(13); // Extended Repayment
    }
    
    if (specificGoals.includes('pay_less')) {
      selectedResourceIds.add(9); // Repayment Calculator
      selectedResourceIds.add(11); // Standard Repayment
    }
    
    if (specificGoals.includes('qualify_forgiveness')) {
      selectedResourceIds.add(15); // Forgiveness Eligibility
      selectedResourceIds.add(16); // PSLF Guide
      selectedResourceIds.add(17); // IDR Forgiveness
      selectedResourceIds.add(18); // Teacher Loan Forgiveness
    }
  };

  // Process the answers to add resources
  addResourcesBasedOnAnswers(answers);
  
  // Convert Set to Array and map to resources
  const resources = Array.from(selectedResourceIds).map(id => allResources[id]);
  
  // Sort resources by priority (could implement a more sophisticated sorting method)
  
  // Return all resources if expanded, otherwise limit to 6
  return expanded ? resources : resources.slice(0, 6);
};
