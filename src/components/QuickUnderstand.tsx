import { Clock, BookOpen, Calculator, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickUnderstand = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Understand Your Loan in 5 Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We break down complex loan terms into simple, actionable steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Repayment Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Understand when you need to start paying and how long it will take
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Loan Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Learn the key terms and conditions of your loan agreement
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Payment Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Calculate your monthly payments and total interest
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-4" />
              <CardTitle>FAFSA Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Step-by-step guidance for completing your FAFSA form
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};