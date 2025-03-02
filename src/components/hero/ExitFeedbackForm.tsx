
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ExitFeedbackFormProps {
  onSkip: () => void;
  onSubmit: () => void;
}

export const ExitFeedbackForm = ({ onSkip, onSubmit }: ExitFeedbackFormProps) => {
  const [exitReason, setExitReason] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate your input and will use it to improve our service.",
    });
    setExitReason("");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
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
          onClick={onSkip}
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
  );
};
