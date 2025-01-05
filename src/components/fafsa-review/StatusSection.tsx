import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const StatusSection = () => {
  return (
    <section id="check-status" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">1. How to Check Your FAFSA Status</h2>
      
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-semibold mb-4">Why Checking Your FAFSA Status is Important</h3>
        <p>After submitting your FAFSA, verifying its status ensures that your application has been successfully processed. Missing or incomplete submissions could delay financial aid offers from schools.</p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Steps to Check Your FAFSA Status</h3>
        
        <Card className="p-6 mb-6 bg-purple-50 border-purple-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Pro Tip</h4>
              <p className="text-gray-700">Check your status weekly, especially during peak submission times, to catch and resolve issues promptly.</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Log In to Your Account</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visit StudentAid.gov and log in using your FSA ID.</li>
              <li>If you're a parent or contributor, use your unique FSA ID to access relevant sections.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Navigate to Your FAFSA Dashboard</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Click "My FAFSA" and select the appropriate academic year.</li>
              <li>Your status will appear as one of the following:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Submitted</strong>: Your application has been successfully sent.</li>
                  <li><strong>Processing</strong>: Your FAFSA is being reviewed by Federal Student Aid.</li>
                  <li><strong>Action Required</strong>: Corrections or additional information are needed.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Monitor Email Notifications</h4>
            <ul className="list-disc pl-6">
              <li>Keep an eye on your registered email for updates or requests from FAFSA or your schools.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};