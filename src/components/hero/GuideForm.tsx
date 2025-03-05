
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { saveUserInfo, sendGuideToEmail } from "@/utils/guideUtils";

interface GuideFormProps {
  onClose: () => void;
}

export const GuideForm = ({ onClose }: GuideFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const [emailSent, setEmailSent] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const { toast } = useToast();

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
      
      // Track form submission event
      if (window.gtag) {
        window.gtag('event', 'guide_form_submission', {
          'event_category': 'conversion',
          'event_label': 'loan_guide_form'
        });
      }
      
      // Show success toast and download option regardless of email status
      toast({
        title: "Success!",
        description: emailSuccess
          ? "Your free student loan guide has been sent to your email and is ready to download."
          : "Your free student loan guide is ready to download.",
      });
      
      setShowDownload(true);
    } catch (error) {
      // Track error event
      if (window.gtag) {
        window.gtag('event', 'guide_form_error', {
          'event_category': 'error',
          'event_label': 'loan_guide_form'
        });
      }
      
      toast({
        title: "Error",
        description: "There was a problem preparing your guide. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadRedirect = () => {
    // Track download page redirect action
    if (window.gtag) {
      window.gtag('event', 'guide_download_page_redirect', {
        'event_category': 'conversion',
        'event_label': 'loan_guide_download_page'
      });
    }
    
    // Redirect to the download page with user info as query parameters
    window.location.href = `/download-guide?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&guide=studentLoanGuide`;
    
    // Reset the form state
    onClose();
    setFormData({ name: "", email: "", consent: false });
    setShowDownload(false);
    setEmailSent(false);
  };

  return (
    <div>
      {!showDownload ? (
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
                className="text-xs sm:text-sm text-gray-600 leading-tight"
              >
                I agree to receive my free guide and related information via email. You can unsubscribe at any time.
              </Label>
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full font-semibold rounded-full text-base sm:text-lg py-4 sm:py-6"
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
                We've sent the guide to your email. Click the button below to go to the download page.
              </p>
            ) : (
              <p className="text-gray-600 text-sm">
                Click the button below to go to the download page for your free student loan guide.
              </p>
            )}
          </div>
          <Button 
            onClick={handleDownloadRedirect}
            className="w-full font-semibold rounded-full text-base sm:text-lg py-4 sm:py-6 bg-green-600 hover:bg-green-700"
          >
            Go to Download Page
          </Button>
        </div>
      )}
    </div>
  );
};
