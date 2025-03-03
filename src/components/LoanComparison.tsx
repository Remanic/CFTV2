
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, TrendingUp, DollarSign, ArrowRight, CheckCircle } from "lucide-react";

export const LoanComparison = () => {
  return (
    <section 
      id="loan-comparison" 
      className="py-16 bg-teal-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Loan Understanding Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides to help you understand student loans, loan comparison, and make informed borrowing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" />
                <span>Essential Guide</span>
              </div>
            </div>
            <div className="mb-4 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Federal vs Private Loans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Compare federal and private student loan options to understand which is best for your education financing needs.</p>
            <Link 
              to="/loan-comparison-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700 group">
                <span>Read Comparison Guide</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 flex flex-col">
            <div className="mb-4 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Parent PLUS Loan Guide</h3>
            <p className="text-gray-600 mb-6 flex-grow">Everything parents need to know about borrowing federal Parent PLUS loans for their child's education.</p>
            <Link 
              to="/parent-plus-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Parent PLUS Guide
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 flex flex-col">
            <div className="mb-4 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Student Loan Essentials</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn the fundamentals of student loans, including terminology, types, and borrowing considerations.</p>
            <Link 
              to="/student-loan-essentials" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Read Essentials Guide
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 flex flex-col">
            <div className="mb-4 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Private Student Loans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Understand private student loan options, interest rates, repayment terms, and when they might be right for you.</p>
            <Link 
              to="/private-loans-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Private Loans Guide
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100 flex flex-col">
            <div className="mb-4 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Federal Student Loans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn about federal student loan programs, benefits, and protections available to help finance your education.</p>
            <Link 
              to="/federal-loans-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Federal Loans Guide
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link 
            to="/all-lenders"
            state={{ from: "/", section: "loan-comparison" }}
          >
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              <TrendingUp className="h-5 w-5 mr-2" />
              View All Student Loan Lenders
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
