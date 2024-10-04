/*import React from 'react';

function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <header />
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">
          Lady Photographer - The Art Story...
        </h1>
        <p className="text-lg text-zinc-700 leading-relaxed mb-8 font-light">
          Renowned for her ability to capture the essence of her subjects through a creative and professional lens. With years of experience in the field, Fariha has built a reputation for her stunning portraits, fashion shoots, and event photography, blending technical expertise with a unique artistic vision. Her work not only tells stories but also reflects an innate understanding of light, composition, and emotion, making her one of the most sought-after photographers in the industry. Fariha's passion for photography, coupled with her keen eye for detail, allows her to produce images that are both captivating and meaningful, setting her apart as a true master of her craft.
        </p>
      </div>
    </div>
  );
}

export default Home;*/

// src/app/page.tsx
import React from 'react';
import selfPortrait from './images/selfPortrait/fariha.jpg';
import Image from 'next/image';
function Home() {
  return (
    <div>
      <header />
      <h1 className="text-3xl font-bold text-center mt-4">Lady Photographer - The Art Story...</h1>
      <p className="mt-2 text-center">
        Renowned for her ability to capture the essence of her subjects through a creative and professional lens. 
        With years of experience in the field, Fariha has built a reputation for her stunning portraits, 
        fashion shoots, and event photography, blending technical expertise with a unique artistic vision. 
        Her work not only tells stories but also reflects an innate understanding of light, composition, and emotion, 
        making her one of the most sought-after photographers in the industry. 
        Fariha's passion for photography, coupled with her keen eye for detail, allows her to produce images that 
        are both captivating and meaningful, setting her apart as a true master of her craft.
      </p>

         {/* Self-Portrait Section */}
         <section className="self-portrait text-center mt-8">
        <h2 className="text-2xl font-semibold">Self Portrait</h2>
        <Image 
          src={selfPortrait} 
          alt="Fariha Nizam Portrait" 
          className="self-portrait-img mt-4 rounded-md shadow-lg" 
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
        />
        <p className="mt-2">
          This portrait captures Fariha Nizam in her element, showcasing her passion and dedication to photography.
        </p>
      </section>
    </div>
  );
}

export default Home;