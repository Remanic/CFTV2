
import { Calculator, Home, Car, CreditCard, PiggyBank, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const QuickUnderstand = () => {
  return (
    <section id="financial-tools" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Financial Planning Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <div className="mb-4 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Home className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Calculate your monthly mortgage payments, including principal, interest, taxes, and insurance.</p>
            <Link 
              to="/mortgage-payment-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-gray-700 hover:bg-gray-800 group">
                <span>Calculate Mortgage</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <div className="mb-4 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Car className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Auto Loan Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Estimate your monthly car payments and total interest over the loan term.</p>
            <Link 
              to="/car-loan-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-gray-700 hover:bg-gray-800">
                Calculate Auto Loan
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <div className="mb-4 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Credit Card Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Plan your credit card debt repayment and understand total interest costs.</p>
            <Link 
              to="/credit-card-payment-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-gray-700 hover:bg-gray-800">
                Calculate Credit Card
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <div className="mb-4 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">EMI Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Calculate Equated Monthly Installments for any loan amount and term.</p>
            <Link 
              to="/loan-emi-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-gray-700 hover:bg-gray-800">
                Calculate EMI
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col">
            <div className="mb-4 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
              <PiggyBank className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Savings Calculator</h3>
            <p className="text-gray-600 mb-6 flex-grow">Plan your savings goals and calculate compound interest earnings.</p>
            <Link 
              to="/compound-interest-calculator" 
              state={{ from: "/", section: "financial-tools" }}
              className="inline-block"
            >
              <Button className="w-full bg-gray-700 hover:bg-gray-800">
                Calculate Savings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
