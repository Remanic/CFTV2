
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface GuideCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  path: string;
}

export const GuideCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  textColor, 
  path 
}: GuideCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    if (location.pathname === path) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path, { state: { from: location.pathname } });
  };

  return (
    <Card 
      className={`overflow-hidden border transition-all duration-300 hover:shadow-md ${color}`}
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNavigate();
        }
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-white/80 backdrop-blur-sm">
            <Icon className={`h-5 w-5 ${textColor}`} />
          </div>
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-gray-600 pb-4">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <Button 
          variant="link" 
          className={`px-0 font-medium ${textColor} hover:underline`}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};
