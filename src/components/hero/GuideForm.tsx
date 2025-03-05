
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { saveUserInfo, downloadGuide } from "@/utils/guideUtils";

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
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save user information to localStorage
      saveUserInfo(formData.name, formData.email);
      
      // Show success toast and download option
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
    onClose();
    setFormData({ name: "", email: "", consent: false });
    setShowDownload(false);
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
            <p className="text-gray-600 text-sm">Click the button below to download your free student loan guide.</p>
          </div>
          <Button 
            onClick={handleDownload}
            className="w-full font-semibold rounded-full text-base sm:text-lg py-4 sm:py-6 bg-green-600 hover:bg-green-700"
          >
            Download Your Guide Now
          </Button>
        </div>
      )}
    </div>
  );
};
