import { GuideCard } from "../fafsa-guide/GuideCard";
import { GuideHeader } from "../fafsa-guide/GuideHeader";
import { Calculator, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LoanRepaymentSection = () => {
  const navigate = useNavigate();

  const guides = [
    {
      title: "Loan Calculator",
      description: "Compare different repayment plans and estimate your monthly payments",
      icon: Calculator,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      path: "/loan-repayment-calculator",
      highlight: true // New property to highlight this card
    },
    {
      title: "Income-Driven Plans",
      description: "Learn about income-based repayment options and how they work",
      icon: DollarSign,
      color: "bg-fuchsia-50 hover:bg-fuchsia-100 border-fuchsia-200",
      textColor: "text-fuchsia-700",
      path: "/income-driven-repayment"
    },
    {
      title: "Standard Repayment",
      description: "Understand the traditional 10-year repayment plan",
      icon: PiggyBank,
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      textColor: "text-teal-700",
      path: "/standard-repayment"
    },
    {
      title: "Graduated Plans",
      description: "Explore plans with increasing payments over time",
      icon: TrendingUp,
      color: "bg-amber-50 hover:bg-amber-100 border-amber-200",
      textColor: "text-amber-700",
      path: "/graduated-repayment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Loan Repayment Options"
          description="Explore different repayment plans and find the best strategy for your student loans. Use our calculator to compare options and make informed decisions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {guides.map((guide, index) => (
            <div 
              key={index} 
              onClick={() => navigate(guide.path)} 
              className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                guide.highlight ? 'ring-2 ring-purple-400 ring-offset-2 shadow-lg rounded-lg' : ''
              }`}
            >
              <GuideCard {...guide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};