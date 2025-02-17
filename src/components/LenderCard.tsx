import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Percent, Star, BadgeCheck, BadgeX, DollarSign, GraduationCap, Clock, Shield } from "lucide-react";
import { type Lender } from "@/data/lenders";
import { useNavigate } from "react-router-dom";

interface LenderCardProps {
  lender: Lender;
  featured?: boolean;
  showDetails?: boolean;
}

export const LenderCard = ({ lender, featured, showDetails = true }: LenderCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/best-student-loan-lenders");
    window.scrollTo(0, 0);
  };

  if (!showDetails) {
    return (
      <Card className={`border hover:border-primary/20 transition-all duration-300 overflow-hidden ${
        featured ? 'relative bg-gradient-to-r from-primary/5 to-transparent' : ''
      }`}>
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <h3 className="font-semibold text-lg text-gray-900">{lender.name}</h3>
              {featured && (
                <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-primary" />
                <span>Fixed: {lender.fixedAPR}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-primary" />
                <span>Variable: {lender.variableAPR}</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleViewDetails}
            className="w-full sm:w-auto whitespace-nowrap group"
          >
            Compare Rates
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`border-2 hover:border-primary/20 transition-all duration-300 ${
      featured ? 'relative bg-gradient-to-r from-blue-50/30 to-transparent' : ''
    }`}>
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{lender.name}</h3>
            {featured && (
              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                Editor's Choice
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="h-4 w-4" />
            <span>Minimum Credit Score: {lender.minCreditScore}</span>
          </div>
        </div>

        {/* Rates Section */}
        <div className="grid md:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500">Fixed APR</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">{lender.fixedAPR}</span>
              <span className="text-sm text-gray-500">with autopay</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500">Variable APR</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">{lender.variableAPR}</span>
              <span className="text-sm text-gray-500">with autopay</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500">Loan Amount</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">{lender.loanAmount}</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pros */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <BadgeCheck className="h-5 w-5 text-green-500" />
              Key Benefits
            </h4>
            <ul className="space-y-2">
              {lender.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-1">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <BadgeX className="h-5 w-5 text-red-500" />
              Considerations
            </h4>
            <ul className="space-y-2">
              {lender.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-1">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          {/* Special Features */}
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <Star className="h-5 w-5 text-yellow-500" />
              Special Features
            </h4>
            <ul className="space-y-2">
              {lender.specialFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-500 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">No Application Fee</div>
              <div className="text-gray-500">$0 to apply</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">Grace Period</div>
              <div className="text-gray-500">6 months</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">Term Length</div>
              <div className="text-gray-500">5-20 years</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <div className="font-medium">Cosigner Release</div>
              <div className="text-gray-500">After 24 payments</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t">
          <div className="text-sm text-gray-500">
            Checking rates won't affect your credit score
          </div>
          <Button 
            className="w-full md:w-auto whitespace-nowrap group bg-primary hover:bg-primary/90"
            onClick={() => window.open(lender.link, '_blank')}
          >
            Check Your Rate
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
