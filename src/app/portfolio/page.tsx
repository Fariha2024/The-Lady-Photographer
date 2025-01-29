

///origional////
import React from 'react';
import Image from "next/image";

function Portfolio() {
  return (
    <div>
      <header>
        <h1 className="text-center text-4xl font-bold mb-20 mt-10">Master the Exposure Triangle to Capture Stunning Photos Always</h1>
      </header>
      <main className="px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Fariha Nizam</h2>
        <p className="mb-8">Reach out for inquiries, bookings, or collaborations!</p>
      </main>

      {/* Adding Images with Comments Describing the Story Behind */}
      <div>
        <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Fariha's Portrait */}
          <div className="portfolio-item">
            <Image src="/img5.jpg" alt="Fariha Nizam Portrait" className="w-full h-auto rounded-lg shadow-md"   width={500} // Example width
  height={300} // Example height 
  />
            <p className="mt-2">This portrait captures Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.</p>
          </div>

          {/* Wedding Photography Capture */}
         
          <div className="portfolio-item">
            <Image src="/img2.jpg" alt="Wedding Photography" className="w-full h-auto rounded-lg shadow-md"   width={500} // Example width
  height={300} // Example height
  />
            <p className="mt-2">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
          </div>

          {/* Candid Shot */}
          <div className="portfolio-item">
            <Image src="/img3.jpg" alt="Candid Shot by Fariha Nizam" className="w-full h-auto rounded-lg shadow-md"  width={500} // Example width
  height={300} // Example height
  />
            <p className="mt-2">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
          </div>

          
        </section>
      </div>
      <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="portfolio-item">
            <Image src="/img4.jpg" alt="Wedding Photography" className="w- h-auto rounded-lg shadow-md"  width={500} // Example width
  height={300} // Example height
  />
            <p className="mt-2">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
            </div>
            <div className="portfolio-item">
            <Image src="/img1.jpg" alt="Candid Shot by Fariha Nizam" className="w-full h-auto rounded-lg shadow-md mt-32"  width={500} // Example width
  height={300} // Example height
  />
            <p className="mt-2">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
          </div>
          <div className="portfolio-item">
            <Image src="/img6.jpg" alt="Candid Shot by Fariha Nizam" className="w-full h-auto rounded-lg shadow-md"    width={500} // Example width
  height={300} // Example height
   />
            <p className="mt-2">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
          </div>


            </section>
          </div>
  )}    
      {/* Portfolio Section */}
      
      <section id="portfolio" className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item */}
          <div className="portfolio-item">
            <Image
              src="/port19.jpg"
              alt="Fariha Nizam Portrait"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              width={500} // Example width
              height={300} // Example height
            />
            <p className="mt-4 text-center text-gray-700">
              Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.
            </p>
          </div>

          <div className="portfolio-item">
            <Image
              src="/port20.jpg"
              alt="Wedding Photography"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              width={500} // Example width
              height={300} // Example height
            />
            <p className="mt-4 text-center text-gray-700">
              A beautiful capture from one of the most prestigious weddings, showcasing her mastery of light and color.
            </p>
          </div>

          <div className="portfolio-item">
            <Image
              src="/port2.jpg"
              alt="Candid Shot by Fariha Nizam"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              width={500} // Example width
              height={300} // Example height
            />
            <p className="mt-4 text-center text-gray-700">
              A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <div className="font-sans text-gray-800">
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
          
           <div>
            <a
              href="#portfolio"
              className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition"
            >
              View Portfolio
            </a>
            </div>
            
          </div>
        </div>
  
      
export default Portfolio;////origional







      {/* Portfolio Section *
      <section id="portfolio" className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="portfolio-item">
              <img
                src={`images/portfolio/image-${index + 1}.jpg`}
                alt={`Portfolio Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-gray-700">
                Caption for Portfolio Image {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>*/}

     








/*import React from 'react';

function Portfolio() {
  return (
    <div>
      <header>
        <h1 className="text-center text-4xl font-bold mb-6">Master the Exposure Triangle to Capture Stunning Photos... Always</h1>
      </header>
      <main className="px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Fariha Nizam</h2>
        <p className="mb-8">Reach out for inquiries, bookings, or collaborations!</p>
</main>
</div>

        {/* Adding Images with Comments Describing the Story Behind *
        <div>
        <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Fariha's Portrait *
          <div className="portfolio-item">
            <img src="/img1.jpg" alt="Fariha Nizam Portrait" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">This portrait captures Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.</p>
          </div>

          {/* Wedding Photography Capture *
          <div className="portfolio-item">
            <img src="/img2.jpg" alt="Wedding Photography" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
          </div>

          {/* Candid Shot *
          <div className="portfolio-item">
            <img src="/img3.jpg" alt="Candid Shot by Fariha Nizam" className="w-full h-auto rounded-lg shadow-md" />
            <p className="mt-2">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
          </div>
          
          
        </section>


<div/>
         {/* Portfolio Section *
      <section id="portfolio" className="py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio Item *
        <div className="portfolio-item">
          <img
            src="/port19.jpg"
            alt="Fariha Nizam Portrait"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-center text-gray-700">
            Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.
          </p>
        </div>

        <div className="portfolio-item">
          <img
            src="/port20.jpg"
            alt="Wedding Photography"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-center text-gray-700">
            A beautiful capture from one of the most prestigious weddings, showcasing her mastery of light and color.
          </p>
        </div>

        <div className="portfolio-item">
          <img
            src="/port2.jpg"
            alt="Candid Shot by Fariha Nizam"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-center text-gray-700">
            A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.
          </p>
        </div>
      </div>
      
    </section>

<div className="font-sans text-gray-800">
{/* Hero Section *
<div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(images/hero-bg.jpg)' }}>
  <div className="text-center text-white bg-opacity-60 bg-black p-6 rounded-md">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
      Capturing Life's Most Beautiful Moments
    </h1>
    <p className="text-lg md:text-xl font-light mb-6">
      Explore the world through the lens of Fariha Nizam, where every picture tells a story.
    </p>
    <a
      href="#portfolio"
      className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition"
    >
      View Portfolio
    </a>
  </div>
  </div>
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition"
          >
            View Portfolio
          </a>
        </div>
        </div>
        
  );
}

export default Portfolio;

 

    

      {/* Portfolio Section *
      <section id="portfolio" className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="portfolio-item">
              <img
                src={`images/portfolio/image-${index + 1}.jpg`}
                alt={`Portfolio Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-4 text-center text-gray-700">
                Caption for Portfolio Image {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>*

     

       //////responsive
     {/*import React from 'react';
      import Image from 'next/image';
      
      function Portfolio() {
        return (
          <div>
            <header>
              <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 mt-10 px-4">
                Master the Exposure Triangle to Capture Stunning Photos Always
              </h1>
            </header>
            <main className="px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Fariha Nizam</h2>
              <p className="mb-8">Reach out for inquiries, bookings, or collaborations!</p>
            </main>
      
            {/* Adding Images with Comments Describing the Story Behind *
            <div>
              <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Fariha's Portrait *
                <div className="portfolio-item">
                  <Image
                    src="/img5.jpg"
                    alt="Fariha Nizam Portrait"
                    className="w-full h-auto rounded-lg shadow-md"
                    width={500}
                    height={300}
                  />
                  <p className="mt-2 text-sm sm:text-base">This portrait captures Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.</p>
                </div>
      
                {/* Wedding Photography Capture *
                <div className="portfolio-item">
                  <Image
                    src="/img2.jpg"
                    alt="Wedding Photography"
                    className="w-full h-auto rounded-lg shadow-md"
                    width={500}
                    height={300}
                  />
                  <p className="mt-2 text-sm sm:text-base">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
                </div>
      
                {/* Candid Shot *
                <div className="portfolio-item">
                  <Image
                    src="/img3.jpg"
                    alt="Candid Shot by Fariha Nizam"
                    className="w-full h-auto rounded-lg shadow-md"
                    width={500}
                    height={300}
                  />
                  <p className="mt-2 text-sm sm:text-base">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
                </div>
              </section>
            </div>
      
            {/* Additional Portfolio Section *
            <section className="contact-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="portfolio-item">
                <Image
                  src="/img4.jpg"
                  alt="Wedding Photography"
                  className="w-full h-auto rounded-lg shadow-md"
                  width={500}
                  height={300}
                />
                <p className="mt-2 text-sm sm:text-base">A beautiful capture from one of the most prestigious weddings Fariha covered, showcasing her mastery of light and color.</p>
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img1.jpg"
                  alt="Candid Shot by Fariha Nizam"
                  className="w-full h-auto rounded-lg shadow-md mt-4 sm:mt-0"
                  width={500}
                  height={300}
                />
                <p className="mt-2 text-sm sm:text-base">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img6.jpg"
                  alt="Candid Shot by Fariha Nizam"
                  className="w-full h-auto rounded-lg shadow-md"
                  width={500}
                  height={300}
                />
                <p className="mt-2 text-sm sm:text-base">A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.</p>
              </div>
            </section>
      
            {/* Portfolio Section *
            <section id="portfolio" className="py-16 px-6 md:px-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Portfolio</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Portfolio Item *
                <div className="portfolio-item">
                  <Image
                    src="/port19.jpg"
                    alt="Fariha Nizam Portrait"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={500}
                    height={300}
                  />
                  <p className="mt-4 text-center text-gray-700 text-sm sm:text-base">
                    Fariha Nizam in her element, thoughtful and composed before a major wedding shoot.
                  </p>
                </div>
      
                <div className="portfolio-item">
                  <Image
                    src="/port20.jpg"
                    alt="Wedding Photography"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={500}
                    height={300}
                  />
                  <p className="mt-4 text-center text-gray-700 text-sm sm:text-base">
                    A beautiful capture from one of the most prestigious weddings, showcasing her mastery of light and color.
                  </p>
                </div>
      
                <div className="portfolio-item">
                  <Image
                    src="/port2.jpg"
                    alt="Candid Shot by Fariha Nizam"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={500}
                    height={300}
                  />
                  <p className="mt-4 text-center text-gray-700 text-sm sm:text-base">
                    A candid shot during a Mehndi ceremony, capturing the joy and authenticity of the moment.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Hero Section *
            <div className="font-sans text-gray-800">
              <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
                <div>
                  <a
                    href="#portfolio"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
      export default Portfolio;*/
      




   