interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4 text-[#2D3748]">
      {title}
    </h2>
    <p className="text-xl text-[#4A5568]">
      {subtitle}
    </p>
  </div>
);