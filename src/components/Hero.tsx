
import { ArrowRight } from "lucide-react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "./hero/FeaturesList";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive the loan plan via email.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Here you would integrate with your email service
      // For demo, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your personalized loan plan has been sent to your email.",
      });
      setDialogOpen(false);
      setFormData({ name: "", email: "", consent: false });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your loan plan. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-6 md:py-10 lg:py-14 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('placeholder.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold leading-tight tracking-tight text-gray-900 mt-2 font-mono">
              Your Complete Student
              <br className="hidden sm:block" /> Loan Solution
              <FeaturesList />
            </h1>

            <p className="text-base sm:text-lg text-gray-800 italic font-sans px-4 max-w-2xl mx-auto">
              Say goodbye to loan stress and confusion – start your journey to financial freedom today.
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-600 font-sans">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Trusted by over 10,000 students and parents</span>
            </div>
          </div>

          <div className="flex justify-center mt-8 px-4 w-full sm:w-auto">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all font-mono w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-sm sm:text-base"
                >
                  Get Your Free Personalized Loan Plan
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Loan Plan</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    We'll send a personalized student loan plan tailored to your needs directly to your inbox.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input
                        id="email"
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
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, consent: checked as boolean }))
                        }
                      />
                      <Label 
                        htmlFor="consent" 
                        className="text-sm text-gray-600 leading-tight"
                      >
                        I agree to receive my personalized loan plan and related information via email. You can unsubscribe at any time.
                      </Label>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full font-semibold"
                    disabled={loading}
                  >
                    {loading ? "Preparing Your Plan..." : "Send My Free Loan Plan"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full px-4">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Expert Guidance",
                description: "Step-by-step help with FAFSA and loan applications"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Smart Comparison",
                description: "Compare lenders and find your best rate"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Aid Optimization",
                description: "Maximize your financial aid opportunities"
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Easy Management",
                description: "Track and manage all your loans in one place"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 font-mono"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
