import { Clock, Calendar, AlertCircle } from "lucide-react";

interface DeadlineHeaderProps {
  year: string;
  readingTime: string;
}

export const DeadlineHeader = ({ year, readingTime }: DeadlineHeaderProps) => {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-2 text-blue-600 mb-4">
        <Calendar className="h-5 w-5" />
        <span className="text-sm font-medium">Updated for {year}</span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        FAFSA Deadlines for {year}: Complete Guide
      </h1>
      
      <div className="flex items-center gap-4 text-gray-600">
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {readingTime}
        </span>
        <span className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          Last Updated: {new Date().toLocaleDateString()}
        </span>
      </div>
    </header>
  );
};