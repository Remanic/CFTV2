import { AlertCircle, Clock, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyNeedGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Why You Need This Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't let student loan debt define your life. It's time to take control with expert strategies designed to lighten your financial load and give you back your freedom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <span>$1.7 Trillion Crisis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                America's student loan debt has reached a staggering $1.7 trillion, impacting 43 million borrowers. These aren't just numbers—they're dreams delayed, families stressed, and futures compromised. Don't let yourself become part of this growing crisis.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-warning/10 hover:border-warning/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-warning" />
                <span>20+ Years of Struggle</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                On average, it takes over 20 years to pay off student loans, leaving millions trapped in financial limbo. Imagine how much life you could miss waiting for the weight to lift. With our guidance, you'll learn how to cut that timeline in half—or even faster.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-secondary" />
                <span>Your Path to Freedom</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                You don't need to navigate this alone. Our guide delivers personalized repayment strategies, forgiveness insights, and insider tips to save you thousands. We'll show you exactly how to turn your debt into a manageable, actionable plan—because your future is worth fighting for.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg border-2 border-primary/20 shadow-lg animate-float backdrop-blur-sm">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The Clock Is Ticking
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Every day you wait is a day interest accrues and opportunities slip away. Start today, and take the first step toward a debt-free future. 
            <span className="block mt-2 text-primary font-bold">
              Your financial freedom starts now.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};