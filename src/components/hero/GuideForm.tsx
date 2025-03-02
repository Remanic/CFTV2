
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Your free student loan guide has been sent to your email.",
      });
      onClose();
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

  return (
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
  );
};
