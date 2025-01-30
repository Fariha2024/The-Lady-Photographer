import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Card2: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Card container */}
      <div className="bg-zinc-950 text-zinc-50 shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 ease-in-out">
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/port9.jpg" // Path to your image in the public folder
            alt="Wedding Photography" // Alt text for the image
            layout="fill" // Make image fill the container
            objectFit="cover" // Cover the space while maintaining aspect ratio
            className="rounded-t-lg" // Rounded corners for the image
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col items-start space-y-4">
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors duration-200">
            Wedding Photography
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Capture the most beautiful moments of your life.
          </p>

          {/* Button Section with Link */}
          <Link href="/port12.jpg">
            <a className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors duration-200">
              Insights
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
