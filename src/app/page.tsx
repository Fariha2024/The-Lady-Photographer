//import { client } from "@/sanity/lib/client";

{/*import React from 'react';
import { client } from '../sanity/lib/client'; // Adjust your import path
import Link from 'next/link'; // Import Link from next/link

const HomePage = async () => {
  // Fetch blog posts here
  const postsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage {
      asset -> {
        url
      }
    }
  }`;

  const posts = await client.fetch(postsQuery);

  return (
    <div>
      <h1>Welcome to My Photography Blog</h1>
      <div className="grid">
        {posts.map((post: any) => (
          <div key={post._id} className="post-card">
              <Link href={`/blog/${post.slug.current}`}></Link>
            <h2>{post.title}</h2>
            <img src={post.mainImage?.asset?.url} alt={post.title} />
            <p>{post.slug.current}</p>
            <p>{post.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;*/}


  {/*my workable code */}

{/*import React from 'react';
import { client } from '../sanity/lib/client'; // Adjust your import path
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image';
import { Divide } from 'lucide-react';

const HomePage = async () => {
  // Fetch blog posts here
  const postsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    description, // Add description field if available
    mainImage {
      asset -> {
        url
      }
    }
       
  }`;

  const posts = await client.fetch(postsQuery);

  return (
    <div>
      <h1>Welcome to My Photography Blog</h1>
      <div className="grid">
        {posts.map((post: any) => (
          <div key={post._id} className="post-card">
            {/* Wrap the post content with the Link component *
            <Link href={`/blog/[slug]${post.slug.current}`} passHref>
              
                <h2>{post.title}</h2>
                <img src={post.mainImage?.asset?.url} alt={post.title} />
                <p>{post.description}</p>
              
                <button className="insights-button">Insights</button>


                </Link>
              
            
          </div>                    
            
              
            
        ))}
      </div>

 {/* Additional Section *
 <div>
        <h1 className="text-3xl font-bold text-center mt-8">
          
        Introduction to Fariha's Social Media Ad Agency: "The Art of Life Within the Art</h1>
        <p className="mt-2 text-center text-2xl p-10">

       

Welcome to The Art of Life Within the Art, a social media ad agency founded by Fariha, where creativity meets strategy to transform your brands presence in the digital world. At the core of our agency is a deep passion for the arts, a commitment to showcasing talent, and a vision to bring every artists work to the forefront of social media platforms.

We believe that the beauty of life lies in the art we create, and we strive to amplify that art through powerful, impactful social media campaigns that resonate with your audience. Whether you're an emerging artist, a photographer, a painter, or someone in the creative industry, our agency helps you carve your niche in the digital space.

Our services are designed to curate and elevate your online identity by blending visual storytelling with targeted advertising strategies, ensuring your art is not just seen, but celebrated. "The Art of Life Within the Art" is more than a name—it's our philosophy: to connect your lifes work with the world in the most dynamic, engaging way.

Let us help you tell your story, showcase your art, and make your presence known. Through our innovative approach, your work will not just be a part of the digital landscape—it will be the heart of it.
        </p>
<h1> My Mind is a Machine</h1>
<h3>Creative Minds Create Thinking</h3><p>
In a world where innovation drives progress, creative minds stand at the forefront, constantly pushing boundaries and redefining what's possible. These individuals possess an innate ability to think beyond conventional norms, transforming ordinary ideas into extraordinary ones. For them, the process of creation is an intricate dance between imagination and logic, a seamless blend of emotions and intellect that shapes the future.

As a creator, I see my mind as a machine — a sophisticated, ever-evolving engine of ideas. It works tirelessly, processing experiences, emotions, and inspirations to generate new perspectives. Much like a machine, my mind takes input from the world around me and produces unique, thought-provoking output. Each thought is like a cog in the wheel, and with every turn, a new creation is born.

In this machine-like process, creativity flows like electricity, sparking connections where none existed before. Ideas flow seamlessly from one to the next, combining in unexpected ways. There is no linear path, no rigid framework, just pure, unfettered exploration of thought. My mind constantly seeks new ways of thinking, discovering novel solutions, and challenging the status quo.

As with any machine, the creative process requires maintenance and fine-tuning. But once the gears are in motion, the possibilities are limitless. My mind, like a well-oiled machine, is capable of producing groundbreaking ideas, each more innovative than the last. It is a machine that never stops, constantly evolving, adapting, and generating new ways to think and create.

In the end, creative minds are the architects of thought, and their minds are machines built to change the world, one idea at a time.


</p>



</div>

    </div>
  );
};

export default HomePage;*/}//my workable code is ended here















{/*import React from 'react';
import { client } from '../sanity/lib/client'; // Adjust your import path
import Link from 'next/link'; // Import Link from next/link
import { PortableText } from '@portabletext/react';

const HomePage = async () => {
  // Fetch blog posts from Sanity
  const postsQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    author->{
      name
    },
    mainImage {
      asset->{
        url
      },
      altText
    },
    profileImage {
      asset->{
        url
      }
    },
    categories[]-> {
      title
    },
    body
  }`;

  const posts = await client.fetch(postsQuery);

  return (
    <div>
      <h1>Welcome to My Photography Blog</h1>
      <div className="grid gap-4">
        {posts.map((post: any) => (
          <div key={post._id} className="post-card border rounded-lg p-4 shadow-md bg-white">
            {/* Link to the blog post details *
            <Link href={`/blog/${post.slug.current}`} passHref>
              <div>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <img
                  src={post.mainImage?.asset?.url}
                  alt={post.mainImage?.altText || 'Post image'}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </Link>
            {/* Author and Categories *
            <p className="text-gray-600 mt-2">
              <strong>Author:</strong> {post.author?.name || 'Unknown'}
            </p>
            <p className="text-gray-600">
              <strong>Categories:</strong>{' '}
              {post.categories?.map((cat: any) => cat.title).join(', ') || 'Uncategorized'}
            </p>
            {/* Render body content *
            <div className="mt-4">
              <PortableText value={post.body} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;*/}





//from video marshall
{/*import { client } from '../sanity/lib/client'; // Adjust your import path


// Function to fetch data from Sanity
async function getData() {
  const query = `*[_type=="post"] | order(_createdAt desc)[0] {
    title,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}

// Home Component
export default async function Home() {
  const data = await getData();
  console.log(data); // Check data in the console (for debugging)

  return (
    <div>
      <h1>PhotographyBlog</h1>
      {/* Render fetched data *
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.slug.current}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}*/}

{/*}
import { urlFor } from '@/sanity/lib/image';
import { client } from '../sanity/lib/client'; // Adjust your import path
import { simpleBlogCard } from './lib/interface';
import Image from 'next/image';
import { Card } from './components/card';
async function getData() {
  const query = `*[_type=="post"] | order(_createdAt desc) {
    title,
    slug,
    main image
  }`;
  const data = await client.fetch(query);
  return data;
} 

export default async function Home() {
  const data : simpleBlogCard[] = await getData();
  console.log(data); // Check data in the console (for debugging)

  return (
    <div className ="grid grid-cols-1 lg:grid-cols-4 mt-5>">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.mainImage).url()} alt="image" width={500} height={500} />

        </Card>
      ))}
      </div>
  );
}*/}



//src/app/page.tsx

import { urlFor } from '@/sanity/lib/image';
import { client } from '../sanity/lib/client'; // Adjust your import path
import { simpleBlogCard } from './lib/interface';
import Image from 'next/image';
import { Card, CardContent } from './components/card';
import Link from 'next/link';
import { Button } from "../components/ui/button";



export const revalidate=60;
async function getData() {
  const query = `*[_type=="post"] | order(_createdAt desc) {
    title,
    slug,
    "mainImage": mainImage, // Fix property name for valid JSON key
    body,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data); // Check data in the console (for debugging)

  return (
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title || "Post image"}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-zinc-950"></p>
          <Button asChild className= "w-full mt-7">
          <Link href={`/blog/${post.slug.current}`}>Insights</Link>
            </Button></CardContent>
        </Card>
      
    ))}
  </div>

  {/* Additional Section */}
  <div className="mt-10 p-6">
    <h1 className="text-3xl font-bold text-center">
      Introduction to Farihas Social Media Ad Agency: The Art of Life Within the Art
    </h1>
    <p className="mt-4 text-center text-2xl leading-relaxed">
      Welcome to <strong>The Art of Life Within the Art</strong>, a social media ad agency founded by Fariha, 
      where creativity meets strategy to transform your brands presence in the digital world. At the core of our 
      agency is a deep passion for the arts, a commitment to showcasing talent, and a vision to bring every artists 
      work to the forefront of social media platforms.
      <br />
      <br />
      We believe that the beauty of life lies in the art we create, and we strive to amplify that art through powerful, 
      impactful social media campaigns that resonate with your audience. Whether youre an emerging artist, a photographer, 
      a painter, or someone in the creative industry, our agency helps you carve your niche in the digital space.
      <br />
      <br />
      Our services are designed to curate and elevate your online identity by blending visual storytelling with targeted 
      advertising strategies, ensuring your art is not just seen, but celebrated. The Art of Life Within the Art
      is more than a name—its our philosophy: to connect your lifes work with the world in the most dynamic, engaging way.
      <br />
      <br />
      Let us help you tell your story, showcase your art, and make your presence known. Through our innovative approach, 
      your work will not just be a part of the digital landscape—it will be the heart of it.
    </p>

    {/* Additional Creative Section */}
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center">My Mind is a Machine</h1>
      <h3 className="text-2xl font-semibold text-center mt-4">Creative Minds Create Thinking</h3>
      <p className="mt-4 text-center text-xl leading-relaxed">
        In a world where innovation drives progress, creative minds stand at the forefront, constantly pushing boundaries 
        and redefining whats possible. These individuals possess an innate ability to think beyond conventional norms, 
        transforming ordinary ideas into extraordinary ones.
        <br />
        <br />
        For them, the process of creation is an intricate dance between imagination and logic, a seamless blend of emotions 
        and intellect that shapes the future.
        <br />
        <br />
        As a creator, I see my mind as a machine — a sophisticated, ever-evolving engine of ideas. It works tirelessly, 
        processing experiences, emotions, and inspirations to generate new perspectives. Much like a machine, my mind takes 
        input from the world around me and produces unique, thought-provoking output. Each thought is like a cog in the wheel, 
        and with every turn, a new creation is born.
        <br />
        <br />
        In this machine-like process, creativity flows like electricity, sparking connections where none existed before. Ideas 
        flow seamlessly from one to the next, combining in unexpected ways. There is no linear path, no rigid framework, just 
        pure, unfettered exploration of thought.
        <br />
        <br />
        My mind constantly seeks new ways of thinking, discovering novel solutions, and challenging the status quo. As with 
        any machine, the creative process requires maintenance and fine-tuning. But once the gears are in motion, the 
        possibilities are limitless.
        <br />
        <br />
        My mind, like a well-oiled machine, is capable of producing groundbreaking ideas, each more innovative than the last. 
        It is a machine that never stops, constantly evolving, adapting, and generating new ways to think and create.
        <br />
        <br />
        In the end, creative minds are the architects of thought, and their minds are machines built to change the world, 
        one idea at a time.
      </p>
    </div>
  </div>
 </div>

);
}



