
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileText, TrendingUp } from "lucide-react";

export const LoanComparison = () => {
  return (
    <section 
      id="loan-comparison" 
      className="py-16 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loan Understanding Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides to help you understand student loans, loan comparison, and make informed borrowing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Federal vs Private Loans</h3>
            <p className="text-gray-600 mb-6 flex-grow">Compare federal and private student loan options to understand which is best for your education financing needs.</p>
            <Link 
              to="/loan-comparison-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Read Comparison Guide
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Parent PLUS Loan Guide</h3>
            <p className="text-gray-600 mb-6 flex-grow">Everything parents need to know about borrowing federal Parent PLUS loans for their child's education.</p>
            <Link 
              to="/parent-plus-guide" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Parent PLUS Guide
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col">
            <div className="mb-4 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Student Loan Essentials</h3>
            <p className="text-gray-600 mb-6 flex-grow">Learn the fundamentals of student loans, including terminology, types, and borrowing considerations.</p>
            <Link 
              to="/student-loan-essentials" 
              state={{ from: "/", section: "loan-comparison" }}
              className="inline-block"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Read Essentials Guide
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
