import { Clock, BookOpen, Calculator, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickUnderstand = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Master Your Loan in Minutes, Not Hours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Skip the confusion. Get crystal-clear understanding of your loans with our interactive guide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">Smart Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Visual repayment schedule that adapts to your financial situation
              </p>
            </CardContent>
          </Card>
          
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">Loan Terms Decoded</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Complex terms explained in simple language you'll actually understand
              </p>
            </CardContent>
          </Card>
          
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <Calculator className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">Smart Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Instantly see how different payment strategies affect your future
              </p>
            </CardContent>
          </Card>
          
          <Card className="transform hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">FAFSA Made Easy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Step-by-step walkthrough with pro tips to maximize your aid
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};