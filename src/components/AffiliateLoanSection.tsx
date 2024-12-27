import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BadgeCheck, Percent, Shield } from "lucide-react";

export const AffiliateLoanSection = () => {
  const loanOptions = [
    {
      title: "Student Loan Refinancing",
      description: "Lower your interest rates and save thousands",
      rate: "From 4.25% APR",
      benefits: ["No application fees", "Rate match guarantee", "Quick approval"],
      link: "https://www.credible.com/student-loans"
    },
    {
      title: "Personal Loans",
      description: "Flexible funding for your needs",
      rate: "From 5.99% APR",
      benefits: ["Funds as fast as 1 day", "No prepayment penalties", "Fixed rates"],
      link: "https://www.credible.com/personal-loans"
    },
    {
      title: "Home Loans",
      description: "Find your perfect mortgage solution",
      rate: "From 3.75% APR",
      benefits: ["Compare multiple lenders", "Free rate quotes", "Expert support"],
      link: "https://www.credible.com/mortgage"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Find Your Perfect Loan Match
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare personalized offers from multiple lenders without affecting your credit score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanOptions.map((option, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Percent className="h-5 w-5" />
                    {option.rate}
                  </div>
                  
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <BadgeCheck className="h-5 w-5 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button 
                      className="w-full group"
                      onClick={() => window.open(option.link, '_blank')}
                    >
                      Check Your Rate
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-primary" />
            Your data is protected with bank-level security
          </div>
        </div>
      </div>
    </section>
  );
};