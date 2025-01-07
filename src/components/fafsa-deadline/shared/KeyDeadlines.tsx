interface DeadlineInfo {
  state: string;
  date: string;
}

interface KeyDeadlinesProps {
  federalDeadline: string;
  openingDate: string;
  stateDeadlines: DeadlineInfo[];
}

export const KeyDeadlines = ({ federalDeadline, openingDate }: KeyDeadlinesProps) => {
  return (
    <section id="key-deadlines" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Key FAFSA Deadlines</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Federal Deadline</h3>
          <p className="text-red-600 font-bold mb-2">{federalDeadline}</p>
          <p className="text-gray-600">Submit as early as possible, starting {openingDate}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">College Deadlines</h3>
          <p className="text-gray-600">Check with individual colleges for their specific institutional aid deadlines</p>
        </div>
      </div>
    </section>
  );
};