
interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-16 animate-fade-in">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2D3748] relative inline-block">
      {title}
      <span className="absolute bottom-1 left-0 right-0 h-2 bg-blue-100 -z-10 -rotate-1"></span>
    </h2>
    <p className="text-lg sm:text-xl text-[#4A5568] max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);
