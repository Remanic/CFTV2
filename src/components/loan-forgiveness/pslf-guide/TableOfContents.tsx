import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "what-is-pslf", title: "1. What is PSLF?" },
  { id: "eligibility", title: "2. Steps to Qualify" },
  { id: "common-pitfalls", title: "3. Common Pitfalls" },
  { id: "tips", title: "4. Success Tips" },
  { id: "faqs", title: "5. FAQs" },
  { id: "final-steps", title: "6. Final Steps" },
];

export const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-wrap gap-2 justify-start items-center">
      {sections.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            activeSection === id
              ? "bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-200 font-medium"
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          <ChevronRight className={cn(
            "h-3 w-3 transition-transform",
            activeSection === id ? "transform rotate-90" : ""
          )} />
          {title}
        </button>
      ))}
    </nav>
  );
};