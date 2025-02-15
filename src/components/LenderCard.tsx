import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Percent, Star, BadgeCheck, BadgeX } from "lucide-react";
import { type Lender } from "@/data/lenders";
import { useNavigate } from "react-router-dom";

interface LenderCardProps {
  lender: Lender;
  featured?: boolean;
  showDetails?: boolean;
}

export const LenderCard = ({ lender, featured, showDetails = false }: LenderCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/all-lenders");
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
      featured ? 'relative overflow-hidden' : ''
    }`}>
      <div className={`p-6 ${showDetails ? 'grid md:grid-cols-12 gap-6' : 'flex justify-between items-center'}`}>
        <div className="grid md:grid-cols-12 gap-6">
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
      </div>
    </Card>
  );
};
