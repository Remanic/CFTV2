const CurvedConnector = () => {
  return (
    <div className="relative h-16 w-full my-4">
      <svg
        className="absolute left-1/2 -translate-x-1/2 w-[200px] h-full text-primary/20"
        viewBox="0 0 200 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 0C60 0 40 32 40 32C40 32 60 64 100 64C140 64 160 32 160 32C160 32 140 0 100 0Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};

export default CurvedConnector;