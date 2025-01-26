
 {/*}import { PortableText } from "@portabletext/react"; // For rich text rendering
import React from "react";
import { client } from "../../../sanity/lib/client"; // Adjust import path
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


// Function to fetch blog data
async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainimage
  }`;
    async function BlogPreview({ params }: { params: { slug: string } }) {
  const data: any = await client.fetch(query, { slug }); // Pass the slug as a parameter
  return data;
}


// BlogPreview Component
export default async function BlogPreview({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Fariha's Blog
        </span>
        <span className="mt-2 block text-3xl text-center font-bold tracking-tight sm:text-4xl">
          The Art of Life Within the Art &gt; {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.mainimage).url()}
        width={1000}
        height={500}
        alt={data.title}
        priority
        className="rounded-lg"
      />

      <div className="mt-16">
        <PortableText value={data.body} />
      </div>
    </div>
  );
}*/} 








  {/*import { PortableText } from "@portabletext/react";
  import Image from "next/image";
  import { client } from "@/sanity/lib/client"; // Adjust import path
  import { urlFor } from "@/sanity/lib/image"; // Adjust import path
  
  export default async function BlogPreview({ params }: { params: { slug: string } }) {
    const { slug } = params; // Destructure slug from params
    
    if (!slug) {
      return <div>Loading...</div>;
    }
  
    const query = `*[_type == "post" && slug.current == $slug][0]{ title, body, mainimage }`;
    const data = await client.fetch(query, { slug });
  
    if (!data) {
      return <div>Post not found.</div>;
    }
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
  
        <Image
          src={urlFor(data.mainimage).url()}
          width={800}
          height={500}
          alt={data.title}
          className="rounded-lg"
          objectFit="cover"
        />
  
        <div className="mt-16">
          <PortableText value={data.body} />
        </div>
      </div>
    );
  }*/}
                   





  {/*export default function(){
    return( 
      <h1>hello to me</h1>
    )
  }*/}
  




