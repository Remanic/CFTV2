
export const LatestChangesSection = () => {
  return (
    <section id="latest-changes" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Latest Changes to IDR Plans in 2025</h2>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">SAVE Plan:</span> Still offered but under legal threat. Borrowers are in forbearance (no payments, no interest, but no forgiveness credit) due to litigation.
            </li>
            <li>
              <span className="font-semibold">PAYE and ICR:</span> Both reopened to new enrollees in mid-January 2025 after being closed since June 2024.
            </li>
            <li>
              <span className="font-semibold">Legislative Risks:</span> House Republican proposals could limit IDR forgiveness or PSLF, but these aren't law yet.
            </li>
            <li>
              <span className="font-semibold">PSLF Buy Back:</span> A new option to reclaim forgiveness credit for past forbearance periods.
            </li>
            <li>
              <span className="font-semibold">Stay Informed:</span> Check StudentAid.gov regularly for updates, especially if you're on SAVE.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
