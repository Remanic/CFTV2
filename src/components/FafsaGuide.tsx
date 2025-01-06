import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ClipboardCheck, Calculator, Calendar, AlertCircle } from "lucide-react";

export const FafsaGuide = () => {
  const navigate = useNavigate();
  
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  const deadlines = {
    applicationStart: "December 31, 2024",
    federalDeadline: "June 30, 2025",
    stateDeadlines: "Varies by state - Check early!",
    priorityDeadlines: "As early as February 2025"
  };

  const guides = [
    {
      title: "Comprehensive Guide to Filling Out the FAFSA Form",
      description: "Step-by-step instructions to complete your FAFSA application successfully",
      icon: BookOpen,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      path: "/fafsa-application-guide"
    },
    {
      title: "Review & Understand Your FAFSA Submission",
      description: "Learn how to review and understand your FAFSA submission details",
      icon: ClipboardCheck,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      textColor: "text-green-700",
      path: "/fafsa-review-guide"
    },
    {
      title: "FAFSA Deadlines for 2024",
      description: "Important deadlines and submission timeline for the 2024-2025 academic year",
      icon: Calendar,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      path: "/fafsa-deadline-2024-2025"
    },
    {
      title: "FAFSA Deadlines for 2025",
      description: "Key dates and deadlines for the 2025-2026 academic year FAFSA submission",
      icon: Calendar,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      textColor: "text-orange-700",
      path: "/fafsa-deadline-2025-2026"
    },
    {
      title: "FAFSA Aid Estimator",
      description: "Calculate your estimated financial aid before submitting your application",
      icon: Calculator,
      color: "bg-pink-50 hover:bg-pink-100 border-pink-200",
      textColor: "text-pink-700",
      path: "/fafsa-aid-estimator"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Master Your FAFSA Application
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join over 10 million students who use FAFSA annually to access federal financial aid. Let us guide you through every step of the process.
          </p>
          
          {/* Updated Deadlines Section with improved alignment */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse mb-3"></div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">Application Opens</p>
                <p className="font-semibold text-blue-700">{deadlines.applicationStart}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-red-500 mb-3"></div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">Federal Deadline</p>
                <p className="font-semibold text-red-700">{deadlines.federalDeadline}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-orange-500 mb-3"></div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">State Deadlines</p>
                <p className="font-semibold text-orange-700">{deadlines.stateDeadlines}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-purple-500 mb-3"></div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">Priority Deadlines</p>
                <p className="font-semibold text-purple-700">{deadlines.priorityDeadlines}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {guides.map((guide, index) => (
            <Card 
              key={index}
              onClick={() => navigate(guide.path)}
              className={`group relative overflow-hidden ${guide.color} border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <guide.icon className={`h-6 w-6 ${guide.textColor}`} />
                  <span className={guide.textColor}>{guide.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{guide.description}</p>
                <Button 
                  onClick={() => navigate(guide.path)}
                  className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200"
                >
                  Learn More
                </Button>
              </CardContent>
              <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};