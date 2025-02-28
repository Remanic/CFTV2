
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shuffle, TrendingUp, Home, Car } from "lucide-react";

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
      </div>
    </section>
  );
};
