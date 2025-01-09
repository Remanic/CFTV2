import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, GraduationCap, PiggyBank, CreditCard, ChartBar, Home, Car, Search, BookOpen, ClipboardCheck, Calendar } from "lucide-react";

interface NavItemsProps {
  calculatorLinks: Array<{
    icon: any;
    label: string;
    path: string;
    color: string;
  }>;
}

export const DesktopNavigation = ({ calculatorLinks }: NavItemsProps) => {
  const fafsaLinks = [
    {
      icon: Search,
      label: "Find State Deadlines",
      path: "/state-deadline-finder",
      color: "text-yellow-500"
    },
    {
      icon: BookOpen,
      label: "Complete Guide",
      path: "/fafsa-application-guide",
      color: "text-blue-500"
    },
    {
      icon: ClipboardCheck,
      label: "Review & Understand",
      path: "/fafsa-review-guide",
      color: "text-green-500"
    },
    {
      icon: Calendar,
      label: "2024 Deadlines",
      path: "/fafsa-deadline-2024-2025",
      color: "text-purple-500"
    },
    {
      icon: Calendar,
      label: "2025 Deadlines",
      path: "/fafsa-deadline-2025-2026",
      color: "text-orange-500"
    },
    {
      icon: Calculator,
      label: "Aid Estimator",
      path: "/fafsa-aid-estimator",
      color: "text-pink-500"
    }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            Calculators
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] max-w-[calc(100vw-2rem)]">
              {calculatorLinks.map(({ icon: Icon, label, path, color }) => (
                <li key={path}>
                  <Link
                    to={path.toLowerCase()}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            FAFSA
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] max-w-[calc(100vw-2rem)]">
              {fafsaLinks.map(({ icon: Icon, label, path, color }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};