import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "what-is-fafsa", title: "1. What Is the FAFSA?" },
  { id: "how-to-fill", title: "2. How to Fill Out the FAFSA" },
  { id: "after-submit", title: "3. After You Submit" },
  { id: "tips", title: "4. Helpful Tips" },
  { id: "faqs", title: "5. FAQs" },
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
    <nav className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <ul className="space-y-3">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={cn(
                "text-left w-full px-3 py-2 rounded-md transition-colors text-sm",
                "hover:bg-gray-100",
                activeSection === id
                  ? "text-blue-600 bg-blue-50 hover:bg-blue-100 font-medium"
                  : "text-gray-600"
              )}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};