import React from 'react';

function Portfolio() {
  return (
    <div>
      <header>
        <h1 className="text-center text-4xl font-bold mb-6">Master the Exposure Triangle to Capture Stunning Photos... Always</h1>
      </header>
      <main className="px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Fariha Nizam</h2>
        <p className="mb-8">Reach out for inquiries, bookings, or collaborations!</p>

        {/* Adding Images with Comments Describing the Story Behind */}
        <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Fariha's Portrait */}
          <div className="portfolio-item">
            <img src="images/fariha-portrait.jpg" alt="Fariha Nizam Portrait" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">This portrait captures Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.</p>
          </div>

          {/* Wedding Photography Capture */}
          <div className="portfolio-item">
            <img src="images/wedding-capture.jpg" alt="Wedding Photography" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
          </div>

          {/* Candid Shot */}
          <div className="portfolio-item">
            <img src="images/candid-shot.jpg" alt="Candid Shot by Fariha Nizam" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info mb-8">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>Email: <a href="mailto:fariha@example.com" className="text-blue-500">fariha@example.com</a></p>
          <p>Phone: <span className="text-blue-500">+92-123-4567890</span></p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Fariha Nizam Photography</p>
      </footer>
    </div>
  );
}

export default Portfolio;
