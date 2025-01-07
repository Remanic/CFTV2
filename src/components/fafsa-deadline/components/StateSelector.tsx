import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (state: string) => void;
  uniqueStates: string[];
}

export const StateSelector = ({
  selectedState,
  onStateSelect,
  uniqueStates,
}: StateSelectorProps) => {
  return (
    <div className="flex-1">
      <Select value={selectedState} onValueChange={onStateSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Select your state" />
        </SelectTrigger>
        <SelectContent>
          {uniqueStates.map((state) => (
            <SelectItem key={state} value={state}>
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};