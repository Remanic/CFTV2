
import { LucideIcon } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  content: string[];
  sectionId?: string;
  highlight?: boolean;
  cta?: {
    text: string;
    link: string;
  };
}
