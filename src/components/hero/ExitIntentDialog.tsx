
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExitFeedbackForm } from "./ExitFeedbackForm";

interface ExitIntentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSkip: () => void;
  onSubmit: () => void;
}

export const ExitIntentDialog = ({ 
  open, 
  onOpenChange,
  onSkip,
  onSubmit
}: ExitIntentDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Before You Go...</DialogTitle>
          <DialogDescription className="text-gray-600">
            Would you mind taking a quick moment to let us know why you're leaving? This helps us improve.
          </DialogDescription>
        </DialogHeader>
        <ExitFeedbackForm onSkip={onSkip} onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};
