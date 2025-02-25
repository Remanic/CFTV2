
interface IDRPlanCardProps {
  title: string;
  status: string;
  details: string[];
  changes?: string;
  audience: string;
}

export const IDRPlanCard = ({ title, status, details, changes, audience }: IDRPlanCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <span className="font-semibold">Status in 2025:</span>
          <span>{status}</span>
        </div>
        <div>
          <p className="font-semibold mb-2">Details:</p>
          <ul className="list-disc pl-6 space-y-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        {changes && (
          <div>
            <p className="font-semibold mb-2">Changes Up to 2025:</p>
            <p>{changes}</p>
          </div>
        )}
        <div>
          <p className="font-semibold">Who It's For:</p>
          <p>{audience}</p>
        </div>
      </div>
    </div>
  );
};
