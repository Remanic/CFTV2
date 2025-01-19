import { LucideIcon } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  content: string[];
  cta: {
    text: string;
    link: string;
  };
}