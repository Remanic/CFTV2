
import { ArrowRight, Shield, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "./hero/FeaturesList";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { FeaturePill } from "./hero/FeaturePill";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [exitIntent, setExitIntent] = useState(false);
  const [exitFeedbackOpen, setExitFeedbackOpen] = useState(false);
  const [exitReason, setExitReason] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  // Track mouse movement to detect exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves at the top of the page
      if (e.clientY <= 20 && !exitIntent && hasInteracted) {
        setExitIntent(true);
        setExitFeedbackOpen(true);
      }
    };

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };
  }, [exitIntent, hasInteracted]);

  // Track beforeunload event
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!exitFeedbackOpen && hasInteracted) {
        setExitFeedbackOpen(true);
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [exitFeedbackOpen, hasInteracted]);

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
      // Here you would integrate with your email service
      // For demo, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your free student loan guide has been sent to your email.",
      });
      setDialogOpen(false);
      setFormData({ name: "", email: "", consent: false });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your guide. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExitFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate your input and will use it to improve our service.",
    });
    setExitFeedbackOpen(false);
    setExitReason("");
  };

  const handleExitFeedbackSkip = () => {
    setExitFeedbackOpen(false);
  };

  return (
    <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('placeholder.svg')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <FeaturePill 
                icon={BookOpen} 
                text="Expert Guidance" 
                className="bg-blue-50 text-blue-700"
              />
              <FeaturePill 
                icon={Clock} 
                text="Limited Time Offer" 
                className="bg-amber-50 text-amber-700"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 font-sans">
              Your Complete Student
              <br className="hidden sm:block" /> Loan Solution
              <FeaturesList />
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Say goodbye to loan stress and confusion – start your journey to financial freedom today with our comprehensive guide.
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Trusted by over 10,000 students and parents</span>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 px-4 w-full sm:w-auto">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6 h-auto rounded-full animate-pulse"
                >
                  Get Your Free Guide to Student Loans
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">Get Your Free Student Loan Guide</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    We'll send a comprehensive student loan guide tailored to your needs directly to your inbox.
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
              </DialogContent>
            </Dialog>
            <p className="text-sm text-amber-600 mt-2 font-medium animate-pulse">Free for now, but not forever.</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
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
                className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:translate-y-[-4px]"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exit Intent Feedback Dialog */}
      <Dialog open={exitFeedbackOpen} onOpenChange={setExitFeedbackOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Before You Go...</DialogTitle>
            <DialogDescription className="text-gray-600">
              Would you mind taking a quick moment to let us know why you're leaving? This helps us improve.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleExitFeedbackSubmit} className="space-y-6 mt-4">
            <RadioGroup 
              value={exitReason} 
              onValueChange={setExitReason}
              className="gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="too-complex" id="too-complex" />
                <Label htmlFor="too-complex">Information is too complex</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-looking" id="not-looking" />
                <Label htmlFor="not-looking">Not actively looking for loans right now</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-helpful" id="not-helpful" />
                <Label htmlFor="not-helpful">Content isn't helpful for my situation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
            
            <div className="flex gap-3 justify-end">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleExitFeedbackSkip}
              >
                Skip & Exit
              </Button>
              <Button 
                type="submit" 
                className="font-semibold"
                disabled={!exitReason}
              >
                Submit Feedback
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
