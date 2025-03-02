
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Clock, ShieldCheck, Bell, Star, ArrowRight } from "lucide-react";

export const LoanForgivenessPrograms = () => {
  return (
    <section 
      id="loan-forgiveness" 
      className="py-16 bg-violet-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Loan Forgiveness Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You may be eligible to have part or all of your student loans forgiven. Learn about the available programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 flex flex-col relative">
            <div className="absolute -top-3 -right-3 bg-violet-600 text-white text-xs px-2 py-1 rounded-full">
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1 fill-white" />
                <span>Most Popular</span>
              </div>
            </div>
            <div className="mb-4 bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Public Service Loan Forgiveness</h3>
            <p className="text-gray-600 mb-2 flex-grow">For those working in government or non-profit organizations. Get your federal loans forgiven after 10 years of payments.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/public-service-loan-forgiveness" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-violet-200 text-violet-700 hover:bg-violet-50">
                  Learn More
                </Button>
              </Link>
              <Link 
                to="/pslf-comprehensive-guide" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                  Full Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 flex flex-col">
            <div className="mb-4 bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Teacher Loan Forgiveness</h3>
            <p className="text-gray-600 mb-2 flex-grow">For teachers working in low-income schools. Up to $17,500 of your federal student loans could be forgiven.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link 
                to="/teacher-loan-forgiveness" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-violet-200 text-violet-700 hover:bg-violet-50">
                  Learn More
                </Button>
              </Link>
              <Link 
                to="/student-loan-forgiveness-eligibility" 
                state={{ from: "/", section: "loan-forgiveness" }}
                className="flex-1"
              >
                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 flex flex-col">
            <div className="mb-4 bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Forgiveness Eligibility Checker</h3>
            <p className="text-gray-600 mb-2 flex-grow">Find out if you qualify for loan forgiveness programs based on your specific situation.</p>
            
            <Link 
              to="/student-loan-forgiveness-eligibility" 
              state={{ from: "/", section: "loan-forgiveness" }}
              className="inline-block"
            >
              <Button className="w-full bg-violet-600 hover:bg-violet-700 group">
                <span>Check Your Eligibility</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 flex flex-col">
            <div className="mb-4 bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Bell className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Latest Forgiveness News</h3>
            <p className="text-gray-600 mb-2 flex-grow">Stay updated on new forgiveness programs and changes to existing programs.</p>
            
            <Link 
              to="/latest-loan-forgiveness" 
              state={{ from: "/", section: "loan-forgiveness" }}
              className="inline-block"
            >
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Get Latest Updates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
