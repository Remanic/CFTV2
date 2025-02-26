
import { Calculator, Home, Car, CreditCard, PiggyBank } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";

export const QuickUnderstand = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    if (location.pathname === path) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path, { state: { from: location.pathname } });
  };

  const tools = [
    {
      title: "Mortgage Calculator",
      description: "Calculate your monthly mortgage payments, including principal, interest, taxes, and insurance",
      icon: Home,
      color: "text-orange-500",
      path: "/mortgage-calculator"
    },
    {
      title: "Auto Loan Calculator",
      description: "Estimate your monthly car payments and total interest over the loan term",
      icon: Car,
      color: "text-purple-500",
      path: "/auto-loan-calculator"
    },
    {
      title: "Credit Card Payment Calculator",
      description: "Plan your credit card debt repayment and understand total interest costs",
      icon: CreditCard,
      color: "text-pink-500",
      path: "/credit-card-calculator"
    },
    {
      title: "EMI Calculator",
      description: "Calculate Equated Monthly Installments for any loan amount and term",
      icon: Calculator,
      color: "text-indigo-500",
      path: "/emi-calculator"
    },
    {
      title: "Savings Calculator",
      description: "Plan your savings goals and calculate compound interest earnings",
      icon: PiggyBank,
      color: "text-green-500",
      path: "/savings-calculator"
    }
  ];

  return (
    <section id="financial-tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Financial Planning Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card 
              key={tool.title}
              className={`border-2 border-${tool.color.replace('text-', '')}-200 hover:border-${tool.color.replace('text-', '')}-300 transition-colors duration-300 cursor-pointer`}
              onClick={() => handleNavigate(tool.path)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                  <span>{tool.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
