
import { AlertCircle, Clock, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyNeedGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Why This Matters
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Take Control of Your Student Loans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't let confusing loan terms and complex applications hold you back. Our guide makes it simple to understand your options.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <span>$1.7 Trillion Crisis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                America's student loan debt has reached a staggering $1.7 trillion, impacting 43 million borrowers. These aren't just numbers—they're dreams delayed, families stressed, and futures compromised.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-amber-500" />
                <span>20+ Years of Payments</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                On average, it takes over 20 years to pay off student loans, leaving millions trapped in financial limbo. With our guidance, you'll learn how to cut that timeline in half—or even faster.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-green-500" />
                <span>Your Path to Freedom</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                You don't need to navigate this alone. Our guide delivers personalized repayment strategies, forgiveness insights, and insider tips to save you thousands of dollars over the life of your loans.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
