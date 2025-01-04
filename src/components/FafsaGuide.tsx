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
      title: "FAFSA Aid Estimator",
      description: "Calculate your estimated financial aid before submitting your application",
      icon: Calculator,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
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
          
          {/* Deadlines Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            <Card className="bg-white/50 backdrop-blur border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span>Application Opens</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 font-semibold">{deadlines.applicationStart}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur border-2 border-red-100 hover:border-red-200 transition-all duration-300">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span>Federal Deadline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 font-semibold">{deadlines.federalDeadline}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur border-2 border-orange-100 hover:border-orange-200 transition-all duration-300">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span>State Deadlines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 font-semibold">{deadlines.stateDeadlines}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur border-2 border-purple-100 hover:border-purple-200 transition-all duration-300">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>Priority Deadlines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600 font-semibold">{deadlines.priorityDeadlines}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {guides.map((guide, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden ${guide.color} border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
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