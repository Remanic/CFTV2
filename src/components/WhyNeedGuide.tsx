import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyNeedGuide = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why You Need This Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Student loan debt has become a national crisis, but you don't have to become another statistic.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <span>$1.7 Trillion</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Total student loan debt in the United States, affecting 43 million borrowers
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-yellow-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-warning" />
                <span>40%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Of borrowers are expected to default on their student loans by 2023
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-secondary" />
                <span>20 Years</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Average time to pay off student loans without a proper repayment strategy
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};