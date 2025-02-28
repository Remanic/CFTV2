
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Calculator, BookOpen, Clock } from "lucide-react";

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
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
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
              <BookOpen className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Repayment Guides</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn about Standard, Income-Driven, Graduated, and Extended repayment options for federal loans.</p>
            <div className="space-y-3">
              <Link 
                to="/standard-repayment" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Standard Repayment
                </Button>
              </Link>
              <Link 
                to="/income-based-repayment" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Income-Driven Plans
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 flex flex-col">
            <div className="mb-4 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Repayment Strategies</h3>
            <p className="text-gray-600 mb-6 flex-grow">Explore proven strategies to repay your loans faster and save money on interest.</p>
            <div className="space-y-3">
              <Link 
                to="/private-loan-repayment" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Private Loan Strategies
                </Button>
              </Link>
              <Link 
                to="/federal-loans-guide" 
                state={{ from: "/", section: "loan-repayment" }}
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Federal Loan Strategies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
