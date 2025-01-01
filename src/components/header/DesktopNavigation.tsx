import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, GraduationCap, PiggyBank, CreditCard, ChartBar, Home, Car } from "lucide-react";

interface NavItemsProps {
  calculatorLinks: Array<{
    icon: any;
    label: string;
    path: string;
    color: string;
  }>;
}

export const DesktopNavigation = ({ calculatorLinks }: NavItemsProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            Calculators
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] max-w-[calc(100vw-2rem)] -translate-x-1/4">
              {calculatorLinks.map(({ icon: Icon, label, path, color }) => (
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
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            FAFSA
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] p-4 space-y-2">
              <li>
                <Link
                  to="/fafsa-application-guide"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-700">FAFSA Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/fafsa-application-tips"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  <ChartBar className="h-5 w-5 text-violet-500" />
                  <span className="text-sm font-medium text-gray-700">Application Tips</span>
                </Link>
              </li>
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