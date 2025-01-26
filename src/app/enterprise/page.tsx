{/*import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EnterprisePage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-zinc-950">
        Enterprise Photography Services
      </h1>

      <p className="text-lg text-zinc-700 mb-12 text-center">
        At Fariha Nizam Photography, we offer enterprise-level photography services tailored to the needs of businesses, corporations, and events. With our expert team and high-end equipment, we bring your vision to life with creativity and precision.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service 1 *
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/blog sociall.jpg" 
            alt="Corporate Event Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-zinc-950 mb-2">Corporate Event Photography</h3>
          <p className="text-zinc-600">
            Capture the essence of your corporate events, conferences, and gatherings with our professional event photography services. We ensure every moment is beautifully documented.
          </p>
            {/* Service 2 *
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/port14.jpg" 
            alt="Commercial Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
         
        </div>

        {/* Service 2 *
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/port3.jpg" 
            alt="Commercial Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-zinc-950 mb-2">Commercial Photography</h3>
          <p className="text-zinc-600">
            Our commercial photography services are designed to highlight your products and services in the best light. Whether it's for marketing, e-commerce, or branding, we've got you covered.
          </p>
           {/* Service 2 *
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/port3.jpg" 
            alt="Commercial Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
        </div>

        {/* Service 3 *
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/image5.jpeg" 
            alt="Branding Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-zinc-950 mb-2">Branding Photography</h3>
          <p className="text-zinc-600">
            Let us help define your brand's story through visually striking photography that resonates with your target audience. Our branding services are customized to align with your vision and goals.
          </p>
   {/* Service 3 *
   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/port15.jpg" 
            alt="Branding Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />

        </div>
        
        </div>


      <section className="py-16 bg-zinc-50 mt-16">
        <h2 className="text-3xl font-semibold text-center text-zinc-950 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-zinc-700 mb-6 text-center max-w-3xl mx-auto">
          At Fariha Nizam Photography, we combine creative vision with technical expertise. Our team has years of experience working with enterprise clients, capturing high-quality images for commercial use, marketing, and branding. We prioritize quality, professionalism, and attention to detail in every project, ensuring that your business stands out.
        </p>

{/* Service 3 *
<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image 
            src="/port2.jpg" 
            alt="Branding Photography" 
            width={500} 
            height={300} 
            className="rounded-md mb-4"
          />
         </div>
      </section>
      </div>
    
  );
};

export default EnterprisePage;*/}



import React from 'react';
import Image from 'next/image';

const ServiceCard: React.FC<{ title: string; description: string; imgSrc: string; imgAlt: string }> = ({ title, description, imgSrc, imgAlt }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <Image src={imgSrc} alt={imgAlt} width={500} height={300} className="rounded-md mb-4" />
    <h3 className="text-2xl font-semibold text-zinc-950 mb-2">{title}</h3>
    <p className="text-zinc-600">{description}</p>
  </div>
);

const EnterprisePage: React.FC = () => {
  const services = [
    {
      title: 'Corporate Event Photography',
      description:
        'Capture the essence of your corporate events, conferences, and gatherings with our professional event photography services. We ensure every moment is beautifully documented.',
      imgSrc: '/blog-sociall.jpg',
      imgAlt: 'Corporate Event Photography',
    },
    {
      title: 'Commercial Photography',
      description:
        'Our commercial photography services are designed to highlight your products and services in the best light. Whether it’s for marketing, e-commerce, or branding, we’ve got you covered.',
      imgSrc: '/port14.jpg',
      imgAlt: 'Commercial Photography',
    },
    {
      title: 'Branding Photography',
      description:
        'Let us help define your brand’s story through visually striking photography that resonates with your target audience. Our branding services are customized to align with your vision and goals.',
      imgSrc: '/port3.jpg',
      imgAlt: 'Branding Photography',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-zinc-950">
        Enterprise Photography Services
      </h1>
      <p className="text-lg text-zinc-700 mb-12 text-center">
        At Fariha Nizam Photography, we offer enterprise-level photography services tailored to the needs of businesses, corporations, and events. With our expert team and high-end equipment, we bring your vision to life with creativity and precision.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
          />
        ))}
      </section>

      <section className="py-16 bg-zinc-50 mt-16">
        <h2 className="text-3xl font-semibold text-center text-zinc-950 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-zinc-700 mb-6 text-center max-w-3xl mx-auto">
          At Fariha Nizam Photography, we combine creative vision with technical expertise. Our team has years of experience working with enterprise clients, capturing high-quality images for commercial use, marketing, and branding. We prioritize quality, professionalism, and attention to detail in every project, ensuring that your business stands out.
        </p>
      </section>
    </div>
  );
};

export default EnterprisePage;
