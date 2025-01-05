import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const SarSection = () => {
  return (
    <section id="understand-sar" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">3. Learn About the FAFSA Submission Summary (SAR)</h2>
      
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-semibold mb-4">What is the SAR?</h3>
        <p>The Student Aid Report (SAR) is a summary of the information you provided on your FAFSA. Schools use this report to determine your eligibility for financial aid.</p>

        <Card className="p-6 my-6 bg-purple-50 border-purple-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Pro Tip</h4>
              <p className="text-gray-700">Download a copy of your SAR and share it with your school's financial aid office if requested.</p>
            </div>
          </div>
        </Card>

        <h3 className="text-xl font-semibold mt-8 mb-4">How to Access Your SAR</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Log In to StudentAid.gov</h4>
            <ul className="list-disc pl-6">
              <li>Navigate to the "My FAFSA" section and select "View or Print Your Student Aid Report."</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Review the Details</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information</strong>: Verify your demographic data.</li>
              <li><strong>FAFSA Questions</strong>: Ensure your answers are accurate and consistent.</li>
              <li><strong>Expected Family Contribution (EFC)</strong>: This number (or "SAI" for newer years) determines your financial need.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Identify Flags or Issues</h4>
            <ul className="list-disc pl-6">
              <li>The SAR highlights any errors, missing signatures, or flagged data for verification. Address these immediately.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Final Tips for Success</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Stay Organized</strong>: Track deadlines and keep copies of all submissions and corrections.</li>
            <li><strong>Ask for Help</strong>: Use FAFSA's live chat or contact your school's financial aid office with questions.</li>
            <li><strong>Be Proactive</strong>: Regularly monitor your FAFSA status and address any issues promptly.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};