import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BadgeCheck, BadgeX, Info, Percent, Shield, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const AllLenders = () => {
  const allLenders = [
    {
      name: "SoFi",
      type: "private",
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
      type: "private",
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
      type: "private",
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
      name: "LendKey",
      type: "refinance",
      featured: false,
      fixedAPR: "4.25% - 8.77%",
      variableAPR: "4.74% - 9.51%",
      minCreditScore: 660,
      pros: [
        "Community bank and credit union network",
        "Competitive rates",
        "Multiple repayment options",
        "Cosigner release available"
      ],
      cons: [
        "Must complete full application to see exact rates",
        "Limited loan term options"
      ],
      specialFeatures: [
        "Interest rate reduction",
        "Unemployment protection",
        "No origination fees"
      ],
      link: "https://www.credible.com/lendkey-student-loans"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Overview
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Complete List of Student Loan Lenders</h1>
            <p className="text-lg text-gray-600 mb-8">
              Compare rates, terms, and benefits from our comprehensive network of trusted lending partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-semibold mb-4">Private Student Loans</h2>
              <p className="text-gray-600">
                Find the best rates and terms for new student loans to fund your education.
              </p>
            </Card>
            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h2 className="text-xl font-semibold mb-4">Student Loan Refinancing</h2>
              <p className="text-gray-600">
                Compare refinancing options to lower your rate or adjust your loan terms.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {allLenders.map((lender, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default AllLenders;
