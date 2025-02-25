
import { GuideCard } from "../fafsa-guide/GuideCard";
import { GuideHeader } from "../fafsa-guide/GuideHeader";
import { Calculator, DollarSign, PiggyBank, TrendingUp, Clock, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LoanRepaymentSection = () => {
  const navigate = useNavigate();

  const guides = [
    {
      title: "Repayment Simulator",
      description: "Find your optimal repayment strategy with our interactive calculator",
      icon: Calculator,
      color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-700",
      path: "/loan-repayment-calculator"
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
    },
    {
      title: "Extended Plans",
      description: "Learn about longer repayment terms up to 25 years",
      icon: Clock,
      color: "bg-rose-50 hover:bg-rose-100 border-rose-200",
      textColor: "text-rose-700",
      path: "/extended-repayment"
    },
    {
      title: "Private Loan Options",
      description: "Compare private loan refinancing and repayment strategies",
      icon: ExternalLink,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      path: "/private-loan-repayment"
    }
  ];

  return (
    <section id="loan-repayment" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Loan Repayment Options"
          description="Explore different repayment plans and find the best strategy for your student loans. Use our simulator to compare options and make informed decisions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {guides.map((guide, index) => (
            <div key={index} onClick={() => navigate(guide.path)} className="cursor-pointer">
              <GuideCard {...guide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
