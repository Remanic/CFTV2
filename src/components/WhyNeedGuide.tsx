import { AlertCircle, DollarSign, Clock, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyNeedGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
            Why You Need This Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't let student loan debt control your future. Take charge with our comprehensive guide and expert strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <span>$1.7 Trillion Crisis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The total U.S. student loan debt affects 43 million borrowers. Don't become another statistic.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/10 hover:border-warning/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-warning" />
                <span>20+ Years Burden</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Without proper guidance, it takes 20+ years to pay off student loans. We'll show you how to cut that time in half.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <span>Expert Strategy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get personalized repayment strategies and insider tips to optimize your loan payments and save thousands.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};