
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface GuideCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  path: string;
}

export const GuideCard = ({ title, description, icon: Icon, color, textColor, path }: GuideCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (location.pathname === path) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path, { state: { from: location.pathname } });
  };
  
  return (
    <Card 
      onClick={handleNavigate}
      className={`group relative overflow-hidden ${color} border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Icon className={`h-6 w-6 ${textColor}`} />
          <span className={textColor}>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <Button 
          onClick={handleNavigate}
          className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200"
        >
          Learn More
        </Button>
      </CardContent>
      <div className="absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </Card>
  );
};
