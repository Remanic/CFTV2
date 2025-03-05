import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, BookOpen, ClipboardCheck, Calendar, Calculator } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { saveUserInfo, downloadGuide } from "@/utils/guideUtils";

interface NavItemsProps {
  calculatorLinks: Array<{
    icon: any;
    label: string;
    path: string;
    color: string;
  }>;
}

export const DesktopNavigation = ({ calculatorLinks }: NavItemsProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const [showDownload, setShowDownload] = useState(false);
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

  const fafsaLinks = [
    {
      icon: Search,
      label: "Find State Deadlines",
      path: "/fafsa-state-deadlines",
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
      path: "/fafsa-deadlines",
      color: "text-purple-500"
    },
    {
      icon: Calculator,
      label: "Aid Estimator",
      path: "/fafsa-aid-calculator",
      color: "text-pink-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive the guide via email.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      saveUserInfo(formData.name, formData.email);
      
      toast({
        title: "Success!",
        description: "Your free student loan guide is ready to download.",
      });
      
      setShowDownload(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem preparing your guide. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    downloadGuide("studentLoanGuide");
    setDialogOpen(false);
    setFormData({ name: "", email: "", consent: false });
    setShowDownload(false);
  };

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
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Student Loan Guide</DialogTitle>
                <DialogDescription className="text-gray-600">
                  We'll send a comprehensive student loan guide tailored to your needs directly to your inbox.
                </DialogDescription>
              </DialogHeader>
              
              {!showDownload ? (
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="header-name" className="text-gray-700">Full Name</Label>
                      <Input
                        id="header-name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="header-email" className="text-gray-700">Email Address</Label>
                      <Input
                        id="header-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full"
                      />
                    </div>
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="header-consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consent: checked as boolean }))
                        }
                      />
                      <Label 
                        htmlFor="header-consent" 
                        className="text-sm text-gray-600 leading-tight"
                      >
                        I agree to receive my free guide and related information via email. You can unsubscribe at any time.
                      </Label>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full font-semibold rounded-full"
                    disabled={loading}
                  >
                    {loading ? "Preparing Your Guide..." : "Send My Free Guide Now"}
                  </Button>
                </form>
              ) : (
                <div className="mt-4 space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium mb-2">Your guide is ready!</p>
                    <p className="text-gray-600 text-sm">Click the button below to download your free student loan guide.</p>
                  </div>
                  <Button 
                    onClick={handleDownload}
                    className="w-full font-semibold py-3 bg-green-600 hover:bg-green-700"
                  >
                    Download Your Guide Now
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
