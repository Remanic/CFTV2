import { Home } from "lucide-react";

export const PageHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Home className="h-8 w-8 text-orange-500" />
      <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
    </div>
  );
};