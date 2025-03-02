
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Calculator, BookOpen, Clock, BarChart, PieChart, ScatterChart, TrendingUp } from "lucide-react";

export const LoanRepaymentSection = () => {
  return (
    <section 
      id="loan-repayment" 
      className="py-16 bg-emerald-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Loan Repayment Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the best repayment plan for your financial situation and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3">
              <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wide shadow-md">
                Most Popular
              </span>
            </div>
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Repayment Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Calculate monthly payments, interest costs, and compare different repayment plans side by side.</p>
            <Link 
              to="/student-loan-repayment-calculator" 
              state={{ from: "/", section: "loan-repayment" }}
              className="inline-block"
            >
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Calculate Options
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <BarChart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Income-Driven Plans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Explore repayment plans based on your income, including IBR, PAYE, REPAYE, and ICR.</p>
            <Link 
              to="/income-based-repayment" 
              state={{ from: "/", section: "loan-repayment" }}
              className="inline-block"
            >
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Explore IDR Plans
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <PieChart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fixed Payment Plans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn about standard and fixed payment options for consistent monthly payments.</p>
            <Link 
              to="/standard-repayment" 
              state={{ from: "/", section: "loan-repayment" }}
              className="inline-block"
            >
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Standard Plans
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <ScatterChart className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Graduated & Extended</h3>
            <p className="text-gray-600 mb-6 flex-grow">Explore plans with increasing payments over time or extended terms for lower monthly costs.</p>
            <div className="space-y-3">
              <Link 
                to="/graduated-repayment" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Graduated Repayment
                </Button>
              </Link>
              <Link 
                to="/extended-repayment" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Extended Repayment
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Private Loan Repayment</h3>
            <p className="text-gray-600 mb-6 flex-grow">Strategies for effectively managing and repaying your private student loans.</p>
            <Link 
              to="/private-loan-repayment" 
              state={{ from: "/", section: "loan-repayment" }}
              className="inline-block w-full"
            >
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Private Loan Strategies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
