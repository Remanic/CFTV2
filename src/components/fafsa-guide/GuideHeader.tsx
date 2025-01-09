interface GuideHeaderProps {
  title: string;
  description: string;
}

export const GuideHeader = ({ title, description }: GuideHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        {description}
      </p>
    </div>
  );
};