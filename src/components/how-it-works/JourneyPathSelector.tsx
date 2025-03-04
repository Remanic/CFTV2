
import { JourneyQuestion } from "./JourneyQuestion";
import { MobileJourneyPath } from "./MobileJourneyPath";
import { DesktopJourneyPath } from "./DesktopJourneyPath";
import { journeyPaths } from "./journeyPathsData";

export const JourneyPathSelector = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <JourneyQuestion question="Where are you in the student loan process?" />
      <MobileJourneyPath paths={journeyPaths} />
      <DesktopJourneyPath paths={journeyPaths} />
    </div>
  );
};
