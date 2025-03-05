
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StateDeadlineFinderTool } from "@/components/fafsa-deadline/StateDeadlineFinderTool";

const StateDeadlineFinder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <StateDeadlineFinderTool />
      </main>
      <Footer />
    </div>
  );
};

export default StateDeadlineFinder;
