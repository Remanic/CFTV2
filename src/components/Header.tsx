import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calculator, GraduationCap, PiggyBank, CreditCard, ChartBar } from "lucide-react";

export const Header = () => {
  const isMobile = useIsMobile();

  const NavItems = () => (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-gray-600 hover:text-primary transition-colors duration-200 text-base">
          Financial Planning Tools
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <Calculator className="h-5 w-5 text-orange-500" />
              <span>EMI Calculator</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <PiggyBank className="h-5 w-5 text-green-500" />
              <span>Savings Calculator</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <CreditCard className="h-5 w-5 text-purple-500" />
              <span>Credit Card Calculator</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <ChartBar className="h-5 w-5 text-pink-500" />
              <span>Investment Tools</span>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-gray-600 hover:text-primary transition-colors duration-200 text-base">
          FAFSA
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <GraduationCap className="h-5 w-5 text-indigo-500" />
              <span>FAFSA Guide</span>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
              <GraduationCap className="h-5 w-5 text-violet-500" />
              <span>Application Tips</span>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <Button size={isMobile ? "lg" : "default"} className="w-full md:w-auto">
        Get Started
      </Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xl md:text-2xl font-bold text-primary tracking-tight hover:text-primary/90 transition-colors">
              CashFlowTime
            </Link>
          </div>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right"
                className="w-[300px] sm:w-[400px] p-6"
              >
                <nav className="flex flex-col items-start gap-6 mt-8">
                  <div className="w-full space-y-6">
                    <NavItems />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavItems />
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};