
import { Calculator, Home, Car, CreditCard, PiggyBank, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const QuickUnderstand = () => {
  return (
    <section id="financial-tools" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Financial Planning Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make smarter financial decisions with personalized insights from our easy-to-use calculators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-pink-200">
            <div className="mb-4 bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Home className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-3 flex-grow">Calculate monthly payments, see how changes to interest rates affect costs, and find the best mortgage terms for your budget.</p>
            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pink-700">A 0.5% lower interest rate can save $20,000+ on a 30-year mortgage</p>
              </div>
            </div>
            <Link 
              to="/mortgage-payment-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                <span>Calculate Mortgage</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-pink-200">
            <div className="mb-4 bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Car className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Auto Loan Calculator</h3>
            <p className="text-gray-600 mb-3 flex-grow">See how different down payments, loan terms, and interest rates affect your monthly car payments and total ownership costs.</p>
            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pink-700">A larger down payment can reduce your total interest by thousands</p>
              </div>
            </div>
            <Link 
              to="/car-loan-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                <span>Calculate Auto Loan</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-pink-200">
            <div className="mb-4 bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Credit Card Calculator</h3>
            <p className="text-gray-600 mb-3 flex-grow">Plan your debt repayment strategy, see how much interest you'll save by increasing monthly payments, and get debt-free faster.</p>
            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pink-700">Paying just $50 more per month can cut years off your debt timeline</p>
              </div>
            </div>
            <Link 
              to="/credit-card-payment-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                <span>Calculate Credit Card</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-pink-200">
            <div className="mb-4 bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">EMI Calculator</h3>
            <p className="text-gray-600 mb-3 flex-grow">Calculate Equated Monthly Installments for any loan amount and term, see total interest costs, and optimize your repayment strategy.</p>
            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pink-700">Understand your true loan costs with detailed amortization schedules</p>
              </div>
            </div>
            <Link 
              to="/loan-emi-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                <span>Calculate EMI</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-pink-200">
            <div className="mb-4 bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
              <PiggyBank className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Savings Calculator</h3>
            <p className="text-gray-600 mb-3 flex-grow">See how compound interest grows your investments over time and plan your savings goals with personalized projections.</p>
            <div className="bg-pink-50 p-3 rounded-lg mb-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-pink-700">Starting just 5 years earlier can double your retirement savings</p>
              </div>
            </div>
            <Link 
              to="/compound-interest-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                <span>Calculate Savings</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
