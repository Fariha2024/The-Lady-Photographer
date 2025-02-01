

 // src/app/blog/index.tsx                orogioal code
{/*} import React from "react";
 import Link from "next/link";
 
 // Sample blog data
 const blogPosts = [
   { slug: "lady photographer", title: "lady photograher" },
   { slug: "the solution to the art industry" , title: "the solution to the art industry" },
     { slug: "social media ad agency", title: "ocial media ad agency" }, 
      { slug: "the frequency", title: "the frequency" },
 ];
 
 const BlogList = () => {
   return (
     <div className="container mx-auto py-16 px-6">
       <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
       <div>
         {blogPosts.map((post) => (
           <div key={post.slug} className="post mb-4">
             <Link href ={'/blog/${post.slug}'}>
               <span className="text-2xl font-semibold text-blue-500">{post.title}
                 </span>
                 
             </Link>      
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default BlogList;*/} //origioal code
 



{/*import React from 'react';          // it worked for introduction

 // Sample response
 const post = {
   title: "lady photographer",
   slug: { current: "lady-photographer" },
   body: [
     {
       _key: "5e2400ab3641",
       _type: "blockContent",
       style: "h2",
       children: [{ _key: "5e2400ab3641-0", _type: "span", text: "Introduction" }],
     },
     {
       _key: "dbcbbeae6ff0",
       _type: "blockContent",
       style: "normal",
       children: [{ _key: "dbcbbeae6ff0-0", _type: "span", text: "This is the body of the content." }],
     },
     // more blocks...
   ],
 };
 
 const BlogPost = () => {
   return (
     <div className="max-w-3xl mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
       <div className="prose max-w-none mb-4">
         {post.body.map((block) => {
           const { style, children } = block;
           return (
             <div key={block._key} className={style}>
               {children.map((child) => (
                 <p key={child._key}>{child.text}</p>
               ))}
             </div>
           );
         })}
       </div>
     </div>
   );
 };
 
 export default BlogPost; */}// it worked for introduction









{/*import React from "react";  //my workable url for fetching data from sanity

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const BlogPage: React.FC = async () => {
  // Fetch data from an API directly within the component
  const res = await fetch("https://p9xftove.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_id+%3D%3D+%22845af8f4-68da-486a-ad96-a088be454134%22%5D%5B0%5D%7B%0A++title%2C%0A++slug%2C%0A++body%0A%7D%0A");
  const data = await res.json();
  
  // Log the data to inspect its structure
  console.log("Fetched posts:", data);

  // Ensure `posts` is an array
  const posts = Array.isArray(data) ? data : [data];

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-zinc-900 mb-6">Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800">{post.title}</h2>
            <p className="text-lg text-zinc-700 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;*/}
{/*https://p9xftove.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_id+%3D%3D+%22845af8f4-68da-486a-ad96-a088be454134%22%5D%5B0%5D%7B%0A++title%2C%0A++slug%2C%0A++body%0A%7D%0A*/}//this a url for getting data of post with specific id


{/*[_type == "post" && _id == "specific-id"]{
  _id,
  title,
  slug,
  body
}[0]
*/}









{/*// src/app/blog/[slug].tsx
import { client } from '../../../sanity/lib/client'; // Import Sanity client
import Posts from '../../../components/posts'; // Import Posts component
import { fullBlog } from '@/app/lib/interface';

// Fetch data using getStaticProps
export async function getStaticProps() {
  const query = `*[_type == "post"] {
    _id,
    title,
    body[] {
      ...,
      _type == "block" => {
        ...,
        style
      }
    }
  }`;

  const posts = await client.fetch(query); // Fetch posts from Sanity
console.log(posts);
  return {
    props: {
      posts, // Pass the fetched posts as props
    },
  };
}

const BlogPostPage = ({ posts }: { posts: fullBlog[] }) => {
  return <Posts posts={posts} />; // Pass the posts to the Posts component
};

export default BlogPostPage;*/}












{/*PhotographyBlog
Home
Biography
Portfolio
Contact
Enterprise
Toggle theme
Dataset

production
API version

Other
Custom API version
v2023-05-26
Perspective

raw
Query URL [Copy to clipboard]
https://p9xftove.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_id+%3D%3D+%22845af8f4-68da-486a-ad96-a088be454134%22%5D%5B0%5D%7B%0A++title%2C%0A++slug%2C%0A++body%0A%7D%0A
1
2
3
4
5
6
*[_id == "845af8f4-68da-486a-ad96-a088be454134"][0]{
  title,
  slug,
  body
}

1
{}
{…} 3 properties
title:lady photographer
slug:{…} 2 properties
body:[…] 22 items
0:{…} 5 properties
_type:block
style:h2
_key:5e2400ab3641
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
1:{…} 5 properties
_type:block
style:normal
_key:dbcbbeae6ff0
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
2:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:33250b2911e2
3:{…} 5 properties
style:h3
_key:d578a193200a
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
4:{…} 5 properties
style:normal
_key:8f220985f8e1
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
5:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:46af5c55f10f
6:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:h3
_key:14c62a236a52
7:{…} 5 properties
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
_type:block
style:normal
_key:d682c3710bc2
markDefs:[] 0 items
8:{…} 5 properties
style:normal
_key:15cbe2b0970a
markDefs:[] 0 items
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
_type:block
9:{…} 5 properties
_type:block
style:normal
_key:6f9ab11e2dff
markDefs:[] 0 items
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
10:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:h3
_key:40b5d01f6773
11:{…} 5 properties
12:{…} 5 properties
13:{…} 5 properties
14:{…} 5 properties
15:{…} 5 properties
16:{…} 5 properties
17:{…} 5 properties
18:{…} 5 properties
19:{…} 5 properties
20:{…} 5 properties
21:{…} 5 properties
Execution: 5ms
End-to-end: 1360ms
Save result as
Contact Fariha Nizam
For inquiries, bookings, or collaborations:

fariha@example.com

+92-347-3396122

© 2000-2024 The Art Story Foundation. All Rights Reserved | Privacy Policy | Sitemap

1 error

Static route
What's new
Sanity Create Content Mapping, Visual Editing, and Content Releases     I WANT TO FETCH BY THE slug not by id how i write groc query ensured to fetch body containing   write qurey for me    Custom API version
v2023-05-26
Perspective

raw
Query URL [Copy to clipboard]
https://p9xftove.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_id+%3D%3D+%22845af8f4-68da-486a-ad96-a088be454134%22%5D%5B0%5D%7B%0A++title%2C%0A++slug%2C%0A++body%0A%7D%0A
1
2
3
4
5
6
*[_id == "845af8f4-68da-486a-ad96-a088be454134"][0]{
  title,
  slug,
  body
}

1
{}
{…} 3 properties
title:lady photographer
slug:{…} 2 properties
current:lady-photographer
_type:slug
body:[…] 22 items
0:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:h2
_key:5e2400ab3641
1:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:dbcbbeae6ff0
2:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:33250b2911e2
3:{…} 5 properties
style:h3
_key:d578a193200a
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
4:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:8f220985f8e1
5:{…} 5 properties
children:[…] 1 item
0:{…} 4 properties
_type:block
style:normal
_key:46af5c55f10f
markDefs:[] 0 items
6:{…} 5 properties
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
_type:block
style:h3
_key:14c62a236a52
7:{…} 5 properties
markDefs:[] 0 items
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
_type:block
style:normal
_key:d682c3710bc2
8:{…} 5 properties
markDefs:[] 0 items
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
_type:block
style:normal
_key:15cbe2b0970a
9:{…} 5 properties
markDefs:[] 0 items
children:[…] 2 items
0:{…} 4 properties
1:{…} 4 properties
_type:block
style:normal
_key:6f9ab11e2dff
10:{…} 5 properties
_type:block
style:h3
_key:40b5d01f6773
markDefs:[] 0 items
children:[…] 1 item
0:{…} 4 properties
11:{…} 5 properties
12:{…} 5 properties
13:{…} 5 properties
14:{…} 5 properties
15:{…} 5 properties
16:{…} 5 properties
17:{…} 5 properties
18:{…} 5 properties
19:{…} 5 properties
20:{…} 5 properties
21:{…} 5 properties
Execution: 7ms
End-to-end: 697ms
Save result as
Contact Fariha Nizam
For inquiries, bookings, or collaborations:

fariha@example.com

+92-347-3396122

© 2000-2024 The Art Story Foundation. All Rights Reserved | Privacy Policy | Sitemap

1 error

Static route
What's new
Sanity Create Content Mapping, Visual Editing, and Content Releases
ChatGPT said:
ChatGPT                       https://p9xftove.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_id%20%3D%3D%20%22845af8f4-68da-486a-ad96-a088be454134%22%5D%5B0%5D%7B%0A%20%20%20%20title%2C%0A%20%20%20%20slug%2C%0A%20%20%20%20body%0A%7D                                   The query URL fetches the document where the _id is "845af8f4-68da-486a-ad96-a088be454134", returning three fields: title, slug, and body.
The body field contains an array of block-level content (e.g., headings, paragraphs) styled with different markup (e.g., h2, h3, normal).
Example Response (JSON):
json
Copy code
{
  "title": "lady photographer",
  "slug": {
    "_type": "slug",
    "current": "lady-photographer"
  },
  "body": [
    {
      "_key": "5e2400ab3641",
      "_type": "block",
      "style": "h2",
      "children": [
        {
          "_key": "5e2400ab3641-0",
          "_type": "span",
          "text": "Introduction"
        }
      ]
    },
    {
      "_key": "dbcbbeae6ff0",
      "_type": "block",
      "style": "normal",
      "children": [
        {
          "_key": "dbcbbeae6ff0-0",
          "_type": "span",
          "text": "This is the body of the content."
        }
      ]
    },
    {
      "_key": "d578a193200a",
      "_type": "block",
      "style": "h3",
      "children": [
        {
          "_key": "d578a193200a-0",
          "_type": "span",
          "text": "Subheading"
        }
      ]
    },
    // more block items...
  ]
}              The query URL fetches the document where the _id is "845af8f4-68da-486a-ad96-a088be454134", returning three fields: title, slug, and body.
The body field contains an array of block-level content (e.g., headings, paragraphs) styled with different markup (e.g., h2, h3, normal).
Example Response (JSON):
json
Copy code
{
  "title": "lady photographer",
  "slug": {
    "_type": "slug",
    "current": "lady-photographer"
  },
  "body": [
    {
      "_key": "5e2400ab3641",
      "_type": "block",
      "style": "h2",
      "children": [
        {
          "_key": "5e2400ab3641-0",
          "_type": "span",
          "text": "Introduction"
        }
      ]
    },
    {
      "_key": "dbcbbeae6ff0",
      "_type": "block",
      "style": "normal",
      "children": [
        {
          "_key": "dbcbbeae6ff0-0",
          "_type": "span",
          "text": "This is the body of the content."
        }
      ]
    },
    {
      "_key": "d578a193200a",
      "_type": "block",
      "style": "h3",
      "children": [
        {
          "_key": "d578a193200a-0",
          "_type": "span",
          "text": "Subheading"
        }
      ]
    },
    // more block items...
  ]
}}*/}
{/*}
*[_id == "845af8f4-68da-486a-ad96-a088be454134"][0]{
  title,
  slug,
  body
}
*/}

//lady photographer content
{/*import { fullBlog } from "@/app/lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";


async function getdata(slug:string){
  const query =

 `
*[_type=="post" && slug.current == 'lady-photographer']

{"currentSlug": slug.current,title,
  body,mainimage,

}[0]
`

const data=await client.fetch(query);
return data;
}

export default async function BlogArticle({params}:{params:{slug:string}}){
  const data:fullBlog=await getdata(params.slug);
  console.log(data);
  return (
    <div>
      <span>
<h1>fariha Blog</h1>

</span>
<h1>{data.title}</h1>

    <div className="mt-16">
      <PortableText value={data.body}/>
  
    </div>

    </div>
    
  );
}
*/}


//src/app/blog/[slug]/page.tsx origionalllll

{/*import { FullBlog }  from "@/app/lib/interface";//Category
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";  // Import the getdata function to fetch the data

export const revalidate = 60;

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(params.slug);
  // Log the fetched data to inspect its structure
console.log("Fetched Data:", data);{

  // If no data is found, show a 'Blog not found' message
  if (!data) {
    return <div>Blog not found</div>;
  
  }
  return (
    <div>
      <h1 className="mb-6 font-seibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url && (
        <div>
          <Image 
            src={data.mainImage.asset.url} 
            alt={data.mainImage.alt || data.title} 
            width={800} 
            height={400} 
          />
        </div>
      )}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

   {/* Author Info *
   {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  )};
}
*/}
  {/* Displaying the author info *
      <div className="author-info mt-8">
        <h3>About the Author: {data.author.name}</h3>
        <p>{data.author.bio}</p>
        <Image 
          src={data.author.image} 
          alt={data.author.name} 
          width={50} 
          height={50} 
        />
      </div>
  * Displaying the categories *
  {data.categories && data.categories.length > 0 && (
        <div className="categories mt-8">
          <h3>Categories:</h3>
          <ul>
            * Correctly mapping over categories 
            {data.categories.map((category: Category) => (
              <li key={category.slug.current}>{category.title}</li>
            ))}
          </ul>
        </div>
    
      )}
    </div>
  );
}*/}


//origionalllllllllll
{/*import { FullBlog } from "@/app/lib/interface"; // Category

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData"; // Import the getdata function to fetch the data

export const revalidate = 60;

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(params.slug);

  // Log the fetched data to inspect its structure
  console.log("Fetched Data:", data);

  // If no data is found, show a 'Blog not found' message
  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url ? (
        <div>
          <Image 
            src={data.mainImage.asset.url} 
            alt={data.mainImage.alt || data.title} 
            width={800} 
            height={400} 
          />
        </div>
      ) : null}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}////////////origional//////////



{/*import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";
'import PageProps from "next"'
export const revalidate = 60;

export default async function BlogArticle({ params }: PageProps<{ slug: string }>) {
  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(params.slug);

  // Log the fetched data to inspect its structure
  console.log("Fetched Data:", data);

  // If no data is found, show a 'Blog not found' message
  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url ? (
        <div>
          <Image 
            src={data.mainImage.asset.url} 
            alt={data.mainImage.alt || data.title} 
            width={800} 
            height={400} 
          />
        </div>
      ) : null}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}




//origional////////workable
{/*import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";

// Revalidate time for ISR (Incremental Static Regeneration)
export const revalidate = 60;

// Define the type for Next.js dynamic route props
interface BlogArticleProps {
  params:  '{ slug: string; }'   // { slug: string };
}

export default async function BlogArticle({ params }: BlogArticleProps) {
  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(params.slug);

  console.log("Fetched Data:", data);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url && (
        <div>
          <Image 
            src={data.mainImage.asset.url} 
            alt={data.mainImage.alt || data.title} 
            width={800} 
            height={400} 
          />
        </div>
      )}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}
//origional////////




//responsive
{/*
import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";

export const revalidate = 60;

interface BlogArticleProps {
  params: { slug: string };
}

export default async function BlogArticle({ params }: BlogArticleProps) {
  const data: FullBlog = await getdata(params.slug);
  console.log("Fetched Data:", data);

  if (!data) {
    return <div className="text-center text-lg font-semibold p-6">Blog not found</div>;
  }

  return (
    <div className="bg-white text-black p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Blog Title *
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">{data.title}</h1>

      {/* Blog Image (Responsive) *
      {data.mainImage?.asset?.url && (
        <div className="w-full flex justify-center">
          <Image 
            src={data.mainImage.asset.url} 
            alt={data.mainImage.alt || data.title} 
            width={800} 
            height={400} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Blog Content *
      <section className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
        {data.body ? <PortableText value={data.body} /> : <p>No content available</p>}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold">About the Author: {data.author.name}</h3>

          <div className="author-bio text-sm sm:text-base mt-4 leading-relaxed">
            {data.author.bio ? <PortableText value={data.author.bio} /> : <p>No biography available</p>}
          </div>

          {data.author.image?.asset?.url && (
            <div className="flex justify-center mt-6">
              <Image
                src={data.author.image.asset.url}
                alt={data.author.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}*/}


{/*workable
import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";

// Revalidate time for ISR (Incremental Static Regeneration)
export const revalidate = 60;

// Define the type for Next.js dynamic route props
type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { slug } = params;

  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(slug);

  console.log("Fetched Data:", data);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
          />
        </div>
      )}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}






{/*theek hai
import { FullBlog } from "../../lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";

// Revalidate time for ISR (Incremental Static Regeneration)
export const revalidate = 60;

// Define the type for Next.js dynamic route props
type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { slug } = params;

  // Fetching data dynamically based on the slug parameter
  const data: FullBlog = await getdata(slug);

  console.log("Fetched Data:", data);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {/* Displaying the main image if it exists *
      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
          />
        </div>
      )}

      {/* Rendering the body content using PortableText *
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {/* Author Info *
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>

          {/* Rendering author's bio with PortableText *
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}//theek hai





{/*

import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";

export const revalidate = 60;

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { slug } = params;
  const data: FullBlog = await getdata(slug);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
            priority // Add priority for above-the-fold images
          />
        </div>
      )}

      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}
*/}




{/*}
import { FullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getdata } from "@/app/lib/getData";


export default async function BlogArticle({ params }: 
  
  
  
  BlogArticleProps) {
  const { slug } = params;
  const data = await getdata(slug);

  // Handle the case where data is null
  if (!data) {
    return <div>Blog not found or failed to load.</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>

      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
            priority
          />
        </div>
      )}

      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>

      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>

          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}    */}


{/*good
import { GetStaticPropsContext, GetStaticPathsResult } from 'next';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type BlogArticleProps = {
  params: {
    slug: string;
  };
};

type BlogData = {
  title: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  body?: any;
  author?: {
    name: string;
    bio?: any;
    image?: {
      asset: {
        url: string;
      };
    };
  };
};

async function getdata(slug: string): Promise<BlogData | null> {
  // Replace with your data-fetching logic
  return fetch(`/api/blog/${slug}`).then((res) => res.json());
}

async function fetchSlugs(): Promise<string[]> {
  // Replace this with your actual data-fetching logic
  return ['post-1', 'post-2', 'post-3',' post-4']; // Example hardcoded slugs
}

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { slug } = params;
  const data = await getdata(slug);

  if (!data) {
    return <div>Blog not found or failed to load.</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>
      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
            priority
          />
        </div>
      )}
      <section className="mt-16">
        {data.body ? (
          <PortableText value={data.body} />
        ) : (
          <p>No content available</p>
        )}
      </section>
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>
          <div className="author-bio">
            {data.author.bio ? (
              <PortableText value={data.author.bio} />
            ) : (
              <p>No biography available</p>
            )}
          </div>
          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // Fetch all possible slugs
  const slugs = await fetchSlugs(); // Use the fetchSlugs function
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking', // or 'true' or 'false'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug as string}*/}





{/*

  import Image from 'next/image';
import { PortableText } from '@portabletext/react';

// Fetch individual blog data
async function getData(slug: string) {
  const res = await fetch(`https://your-sanity-api.com/blog/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

// Fetch all possible blog slugs
export async function generateStaticParams() {
  const res = await fetch('https://your-sanity-api.com/blog/slugs');
  const slugs = await res.json();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <div>Blog not found or failed to load.</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-semibold">{data.title}</h1>
      {data.mainImage?.asset?.url && (
        <div>
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            width={800}
            height={400}
            priority
          />
        </div>
      )}
      <section className="mt-16">
        {data.body ? <PortableText value={data.body} /> : <p>No content available</p>}
      </section>
      {data.author && (
        <div className="author-info mt-8">
          <h3>About the Author: {data.author.name}</h3>
          <div className="author-bio">
            {data.author.bio ? <PortableText value={data.author.bio} /> : <p>No biography available</p>}
          </div>
          {data.author.image?.asset?.url && (
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              width={100}
              height={100}
              className="rounded-full mt-6"
            />
          )}
        </div>
      )}
    </div>
  );
}*/}












//src/app/blog/[slug]/page.tsx

async function getData(slug: string) {
  try {
    const res = await fetch(`https://your-sanity-api.com/blog/${slug}`, {
      next: { revalidate: 60 }, // Enable ISR
    });

    if (!res.ok) {
      console.error("Failed to fetch data:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch('https://your-sanity-api.com/blog/slugs');

    if (!res.ok) throw new Error("Failed to fetch slugs");

    const slugs = await res.json();

    return slugs.map((slug: string) => ({
      params: { slug }, // ✅ Correct structure
    }));
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}
