
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { saveUserInfo, downloadGuide, sendGuideToEmail } from "@/utils/guideUtils";

export const CtaBanner = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const [showDownload, setShowDownload] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

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
      // Save user information to localStorage
      saveUserInfo(formData.name, formData.email);
      
      // Send the guide to the user's email
      const emailSuccess = await sendGuideToEmail(formData.name, formData.email, "studentLoanGuide");
      setEmailSent(emailSuccess);
      
      // Show success toast and download option regardless of email status
      toast({
        title: "Success!",
        description: emailSuccess
          ? "Your free student loan guide has been sent to your email and is ready to download."
          : "Your free student loan guide is ready to download.",
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
    setEmailSent(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setShowDownload(false);
    setFormData({ name: "", email: "", consent: false });
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-10 rounded-2xl bg-white shadow-lg">
          <div className="md:max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Ready to Master Your Student Loans?
            </h2>
            <p className="text-gray-600 mb-6">
              Get our comprehensive guide sent straight to your inbox and start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg text-base shadow-md w-full sm:w-auto"
                  >
                    Get Free Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 font-playfair">Get Your Free Student Loan Guide</DialogTitle>
                    <DialogDescription className="text-gray-600 text-sm sm:text-base">
                      We'll send a comprehensive student loan guide tailored to your needs directly to your inbox.
                    </DialogDescription>
                  </DialogHeader>
                  
                  {!showDownload ? (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cta-name" className="text-gray-700">Full Name</Label>
                          <Input
                            id="cta-name"
                            placeholder="Enter your full name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cta-email" className="text-gray-700">Email Address</Label>
                          <Input
                            id="cta-email"
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
                            id="cta-consent"
                            checked={formData.consent}
                            onCheckedChange={(checked) => 
                              setFormData(prev => ({ ...prev, consent: checked as boolean }))
                            }
                          />
                          <Label 
                            htmlFor="cta-consent" 
                            className="text-xs sm:text-sm text-gray-600 leading-tight"
                          >
                            I agree to receive my free guide and related information via email. You can unsubscribe at any time.
                          </Label>
                        </div>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                        disabled={loading}
                      >
                        {loading ? "Preparing Your Guide..." : "Send My Free Guide Now"}
                      </Button>
                    </form>
                  ) : (
                    <div className="mt-4 space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 font-medium mb-2">Your guide is ready!</p>
                        {emailSent ? (
                          <p className="text-gray-600 text-sm">
                            We've sent the guide to your email. You can also download it directly using the button below.
                          </p>
                        ) : (
                          <p className="text-gray-600 text-sm">
                            Click the button below to download your free student loan guide.
                          </p>
                        )}
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
            </div>
          </div>
          
          <div className="hidden md:block bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">What You'll Get:</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Step-by-step loan application guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Repayment plan comparison tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Forgiveness program eligibility checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Latest updates on student loan policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
