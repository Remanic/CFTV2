
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shuffle, TrendingUp, Home, Car, CreditCard, PiggyBank, Calculator } from "lucide-react";

export const LoanComparison = () => {
  return (
    <section 
      id="loan-comparison" 
      className="py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loan Comparison Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare different loan options to find the best rates and terms for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Shuffle className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Student Loan Comparison</h3>
            <p className="text-gray-600 mb-6 flex-grow">Compare federal and private student loan options to find the best fit for your education financing.</p>
            <Link 
              to="/loan-comparison-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Compare Options
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Home className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Calculate monthly payments, interest costs, and amortization schedules for home loans.</p>
            <Link 
              to="/mortgage-payment-calculator" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate Mortgage
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Auto Loan Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Estimate monthly payments and total costs for vehicle financing.</p>
            <Link 
              to="/car-loan-calculator" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate Auto Loan
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Credit Card Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Determine how long it will take to pay off credit card debt and how much interest you'll pay.</p>
            <Link 
              to="/credit-card-payment-calculator" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate Credit Card
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">EMI Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Calculate equated monthly installments for loans with this simple, accurate tool.</p>
            <Link 
              to="/loan-emi-calculator" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate EMI
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <PiggyBank className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Savings Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">See how your savings can grow with compound interest over time.</p>
            <Link 
              to="/compound-interest-calculator" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate Savings
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            to="/all-lenders"
            state={{ from: "/", section: "loan-comparison" }}
          >
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <TrendingUp className="h-5 w-5 mr-2" />
              View All Student Loan Lenders
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
