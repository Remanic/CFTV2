import { Card } from "@/components/ui/card";
import { BookOpen, DollarSign, Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GuideCard } from "./fafsa-guide/GuideCard";
import { GuideHeader } from "./fafsa-guide/GuideHeader";

export const LoanComparison = () => {
  const navigate = useNavigate();
  
  const loanGuides = [
    {
      title: "Federal Loans 101",
      description: "Comprehensive guide to federal student loans, types, and benefits",
      icon: BookOpen,
      color: "bg-violet-50 hover:bg-violet-100 border-violet-200",
      textColor: "text-violet-700",
      path: "/federal-loans-guide"
    },
    {
      title: "Federal vs Private Loans",
      description: "Compare federal and private student loans to make informed decisions",
      icon: DollarSign,
      color: "bg-rose-50 hover:bg-rose-100 border-rose-200",
      textColor: "text-rose-700",
      path: "/loan-comparison-guide"
    },
    {
      title: "Parent PLUS Loans",
      description: "Everything parents need to know about PLUS loans",
      icon: Users,
      color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200",
      textColor: "text-cyan-700",
      path: "/parent-plus-guide"
    },
    {
      title: "Essential Student Information",
      description: "Key information every student should know before borrowing",
      icon: FileText,
      color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
      textColor: "text-emerald-700",
      path: "/student-loan-essentials"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Understanding Loan Types"
          description="Navigate your student loan options with confidence using our comprehensive guides."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {loanGuides.map((guide, index) => (
            <div key={index} onClick={() => navigate(guide.path)} className="cursor-pointer">
              <GuideCard {...guide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};