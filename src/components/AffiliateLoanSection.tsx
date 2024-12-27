import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BadgeCheck, BadgeX, Info, Percent, Shield, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export const AffiliateLoanSection = () => {
  const lenders = [
    {
      name: "SoFi",
      featured: true,
      fixedAPR: "4.49% - 8.99%",
      variableAPR: "4.99% - 9.99%",
      minCreditScore: 650,
      pros: [
        "No origination fees",
        "Career coaching included",
        "Unemployment protection",
        "Parent PLUS refinancing available"
      ],
      cons: [
        "Requires good credit score",
        "No cosigner release option"
      ],
      specialFeatures: [
        "0.25% autopay discount",
        "Member benefits program",
        "Flexible repayment terms"
      ],
      link: "https://www.credible.com/sofi-student-loans"
    },
    {
      name: "Earnest",
      featured: true,
      fixedAPR: "4.25% - 9.99%",
      variableAPR: "4.74% - 10.99%",
      minCreditScore: 680,
      pros: [
        "Skip one payment per year",
        "Flexible payment options",
        "Merit-based underwriting",
        "Customizable loan terms"
      ],
      cons: [
        "Not available in all states",
        "Higher credit score requirement"
      ],
      specialFeatures: [
        "Precision pricing",
        "No fees whatsoever",
        "9-month grace period"
      ],
      link: "https://www.credible.com/earnest-student-loans"
    },
    {
      name: "CommonBond",
      featured: false,
      fixedAPR: "4.44% - 8.99%",
      variableAPR: "4.99% - 9.99%",
      minCreditScore: 660,
      pros: [
        "Social impact program",
        "Hybrid loan options",
        "24/7 customer support",
        "Flexible repayment plans"
      ],
      cons: [
        "Limited state availability",
        "Longer application process"
      ],
      specialFeatures: [
        "Hybrid rate options",
        "Social promise program",
        "Economic hardship forbearance"
      ],
      link: "https://www.credible.com/commonbond-student-loans"
    },
    {
      name: "Laurel Road",
      type: "refinance",
      featured: true,
      fixedAPR: "4.24% - 8.99%",
      variableAPR: "4.49% - 9.99%",
      minCreditScore: 660,
      pros: [
        "Special rates for healthcare professionals",
        "No maximum loan amount",
        "Parent PLUS refinancing",
        "Flexible terms"
      ],
      cons: [
        "Limited forbearance options",
        "Must have graduated to qualify"
      ],
      specialFeatures: [
        "Healthcare professional discounts",
        "Direct parent PLUS loan refinancing",
        "Career support services"
      ],
      link: "https://www.credible.com/laurel-road-student-loans"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Compare Top Student Loan Lenders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Find and compare the best student loan and refinancing rates from leading lenders. Pre-qualify in minutes without affecting your credit score.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <Info className="h-4 w-4" />
            We earn affiliate commission when you get approved through our links
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-2">Private Student Loans</h3>
              <p className="text-sm text-gray-600">
                Fund your education with competitive rates and flexible repayment options.
              </p>
            </Card>
            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h3 className="text-lg font-semibold mb-2">Student Loan Refinancing</h3>
              <p className="text-sm text-gray-600">
                Lower your rate or adjust terms by refinancing existing student loans.
              </p>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          {lenders.map((lender, index) => (
            <Card 
              key={index} 
              className={`border-2 hover:border-primary/20 transition-all duration-300 ${
                lender.featured ? 'relative overflow-hidden' : ''
              }`}
            >
              {lender.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <Trophy className="h-4 w-4" />
                  Featured Lender
                </div>
              )}
              
              <div className="grid md:grid-cols-12 gap-6 p-6">
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold mb-2">{lender.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-warning" />
                      <span>Fixed APR: {lender.fixedAPR}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-warning" />
                      <span>Variable APR: {lender.variableAPR}</span>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {lender.type === 'refinance' ? 'Refinancing' : 'Private Loans'}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h4 className="font-semibold mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {lender.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <BadgeCheck className="h-4 w-4 text-secondary" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3">
                  <h4 className="font-semibold mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {lender.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <BadgeX className="h-4 w-4 text-destructive" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">Special Features</h4>
                    <ul className="space-y-1 text-sm mb-4">
                      {lender.specialFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Percent className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full group"
                    onClick={() => window.open(lender.link, '_blank')}
                  >
                    Check Your Rate
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-lenders">
            <Button variant="outline" size="lg" className="group">
              View All Lenders
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="mt-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm text-gray-600">Bank-level data security</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-lg shadow-sm">
              <BadgeCheck className="h-6 w-6 text-secondary" />
              <span className="text-sm text-gray-600">Pre-qualify without affecting credit</span>
            </div>
            <div className="flex items-center gap-3 justify-center p-4 bg-white rounded-lg shadow-sm">
              <Trophy className="h-6 w-6 text-warning" />
              <span className="text-sm text-gray-600">Compare multiple lenders instantly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
