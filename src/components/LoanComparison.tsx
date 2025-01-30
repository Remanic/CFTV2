import { Card } from "@/components/ui/card";
import { BookOpen, DollarSign, Users, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LoanComparison = () => {
  const navigate = useNavigate();
  
  const loanGuides = [
    {
      title: "Federal Loans 101",
      icon: BookOpen,
      color: "bg-[#D6BCFA] hover:bg-[#C4A3F9] border-[#B491F8]",
      textColor: "text-[#1A1F2C]",
      path: "/federal-loans-guide",
      description: "Comprehensive guide to federal student loans, types, and benefits"
    },
    {
      title: "Federal vs Private Loans",
      icon: DollarSign,
      color: "bg-[#FDE1D3] hover:bg-[#FBD0BC] border-[#F9C1A7]",
      textColor: "text-[#1A1F2C]",
      path: "/loan-comparison-guide",
      description: "Compare federal and private student loans to make informed decisions"
    },
    {
      title: "Parent PLUS Loans",
      icon: Users,
      color: "bg-[#D3E4FD] hover:bg-[#BED7FB] border-[#ACCBF9]",
      textColor: "text-[#1A1F2C]",
      path: "/parent-plus-guide",
      description: "Everything parents need to know about PLUS loans"
    },
    {
      title: "Essential Student Information",
      icon: FileText,
      color: "bg-[#F1F0FB] hover:bg-[#E5E3F9] border-[#D9D6F7]",
      textColor: "text-[#1A1F2C]",
      path: "/student-loan-essentials",
      description: "Key information every student should know before borrowing"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Understanding Loan Types
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate your student loan options with confidence using our comprehensive guides.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {loanGuides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card 
                key={index}
                className={`${guide.color} border-2 transition-colors duration-300 cursor-pointer`}
                onClick={() => navigate(guide.path)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 ${guide.textColor}`} />
                    <h3 className={`text-xl font-semibold ${guide.textColor}`}>
                      {guide.title}
                    </h3>
                  </div>
                  <p className={`${guide.textColor} text-lg`}>
                    {guide.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};