// ContentComponent.tsx
import React from "react";

interface ContentComponentProps {
  title: string;
  description: string;
}

const ContentComponent: React.FC<ContentComponentProps> = ({ title, description }) => {
  return (
    <div className="p-6 flex flex-col items-start">
      <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
    </div>
  );
};

export default ContentComponent;
