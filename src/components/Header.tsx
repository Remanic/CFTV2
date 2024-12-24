import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Cashflowtime</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};