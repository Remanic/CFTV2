import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const ReviewSection = () => {
  return (
    <section id="review-correct" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">2. How to Review and Correct Your FAFSA Form</h2>
      
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-semibold mb-4">Why Reviewing Your FAFSA is Crucial</h3>
        <p>Mistakes or outdated information can reduce your financial aid eligibility. By reviewing and correcting errors, you ensure the most accurate representation of your financial situation.</p>

        <Card className="p-6 my-6 bg-purple-50 border-purple-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Pro Tip</h4>
              <p className="text-gray-700">Only submit corrections for major changes (e.g., income updates or school additions). Avoid over-correcting minor errors.</p>
            </div>
          </div>
        </Card>

        <h3 className="text-xl font-semibold mt-8 mb-4">Steps to Review Your FAFSA</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Log In to Your FAFSA Account</h4>
            <ul className="list-disc pl-6">
              <li>Access your FAFSA form on StudentAid.gov.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Open the "Corrections" Tab</h4>
            <ul className="list-disc pl-6">
              <li>Navigate to the "Make FAFSA Corrections" option for the relevant academic year.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Review Key Sections</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information</strong>: Ensure your name, SSN, and date of birth match official documents.</li>
              <li><strong>School List</strong>: Verify that all intended schools are listed. You can add or remove schools as needed.</li>
              <li><strong>Financial Data</strong>: Confirm that your tax and income information is accurate. Use the IRS Data Retrieval Tool (DRT) for corrections when possible.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Submit Your Corrections</h4>
            <ul className="list-disc pl-6">
              <li>Save and resubmit your FAFSA once updates are made. A confirmation email will confirm the changes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};