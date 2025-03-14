
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Clock, ShieldCheck, Bell, Star, ArrowRight, Calculator, CheckCircle } from "lucide-react";

export const LoanForgivenessPrograms = () => {
  return (
    <section 
      id="loan-forgiveness" 
      className="py-16 bg-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Loan Forgiveness Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You may be eligible to have part or all of your student loans forgiven. Learn about the available programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wide shadow-md">
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-white" />
                <span>Most Popular</span>
              </div>
            </div>
            <div className="mb-4 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Public Service Loan Forgiveness</h3>
            <p className="text-gray-600 mb-2 flex-grow">For those working in government or non-profit organizations. Get your federal loans forgiven after 10 years of payments.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  Check Eligibility
                </Button>
              </Link>
              <Link 
                to="/pslf-comprehensive-guide" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Full Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 flex flex-col">
            <div className="mb-4 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Teacher Loan Forgiveness</h3>
            <p className="text-gray-600 mb-2 flex-grow">For teachers working in low-income schools. Up to $17,500 of your federal student loans could be forgiven.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  Check Eligibility
                </Button>
              </Link>
              <Link 
                to="/teacher-loan-forgiveness" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Full Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wide shadow-md">
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-white" />
                <span>Popular</span>
              </div>
            </div>
            <div className="mb-4 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Eligibility Checker</h3>
            <p className="text-gray-600 mb-2 flex-grow">Find out if you qualify for loan forgiveness programs based on your specific situation and loan details.</p>
            
            <div className="mt-4">
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="w-full"
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Check Your Eligibility <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wide shadow-md">
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-white" />
                <span>Most Popular</span>
              </div>
            </div>
            <div className="mb-4 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Income-Driven Repayment (IDR) Forgiveness</h3>
            <p className="text-gray-600 mb-2 flex-grow">Make payments based on your income, then receive forgiveness after 20-25 years of qualified payments.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  Check Eligibility
                </Button>
              </Link>
              <Link 
                to="/income-based-repayment" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Full Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 flex flex-col">
            <div className="mb-4 bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Bell className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Latest Forgiveness News</h3>
            <p className="text-gray-600 mb-2 flex-grow">Stay updated on new forgiveness programs and changes to existing programs.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50">
                  Check Eligibility
                </Button>
              </Link>
              <Link 
                to="/latest-loan-forgiveness" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Latest Updates <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

