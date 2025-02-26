
import React from "react";

export const EnrollmentSection = () => {
  return (
    <section id="how-to-enroll" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">How to Enroll in the Extended Repayment Plan</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="mb-4">Enrolling in the Extended Repayment Plan is simple and free. Here's how:</p>
        <ol className="list-decimal pl-6 space-y-4 mb-4">
          <li><span className="font-semibold">Contact Your Loan Servicer:</span> Call or visit your servicer's website to request the Extended Repayment Plan.</li>
          <li><span className="font-semibold">Choose Your Payment Type:</span> Decide between fixed or graduated payments based on your financial needs.</li>
          <li><span className="font-semibold">Confirm Your New Terms:</span> Review your new payment schedule and repayment term.</li>
          <li><span className="font-semibold">Set Up Auto-Pay (Optional):</span> Many servicers offer a 0.25% interest rate reduction for automatic payments.</li>
        </ol>
        <p>You can switch to this plan at any time, even if you're currently on another repayment plan.</p>
        <div className="mt-4 bg-amber-50 p-4 rounded-lg">
          <p className="text-amber-800">
            <span className="font-semibold">Important:</span> If you're switching from an IDR plan, you may lose access to certain benefits like loan forgiveness.
          </p>
        </div>
      </div>
    </section>
  );
};
