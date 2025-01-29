
///origional//////
import React from "react";

const Footer: React.FC = () => {
  return (
    
    <footer className="bg-zinc-900 text-zinc-50 py-8 px-6">
      <div className="container mx-auto text-center">
        {/* Contact Section */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Fariha Nizam</h2>
          <p className="text-lg">For inquiries, bookings, or collaborations:</p>
          <p>
            <a href="mailto:fariha@example.com" className="text-blue-400 hover:underline">
              fariha@example.com
            </a>
          </p>
          <p className="text-blue-400">+92-347-3396122</p>
        </div>

        {/* Footer Links */}
        <p className="text-sm">
          © 2000-2024 The Art Story Foundation. All Rights Reserved |{" "}
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> |{" "}
          <a href="#" className="text-gray-400 hover:text-white">Sitemap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;



//responsive /////////////////
{/*import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-50 py-6 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto text-center">
        {/* Contact Section *
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Contact Fariha Nizam
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            For inquiries, bookings, or collaborations:
          </p>
          <p className="mt-2">
            <a
              href="mailto:fariha@example.com"
              className="text-blue-400 hover:underline text-sm sm:text-base"
            >
              fariha@example.com
            </a>
          </p>
          <p className="text-blue-400 text-sm sm:text-base mt-1">
            +92-347-3396122
          </p>
        </div>

        {/* Footer Links *
        <p className="text-xs sm:text-sm mt-6">
          © 2000-2024 The Art Story Foundation. All Rights Reserved |{" "}
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-gray-400 hover:text-white">
            Sitemap
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;*/}
