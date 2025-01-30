

//src/app/lib/getData.tsx
{/*}
import { client } from "@/sanity/lib/client";

// Safe data fetching with parameterized query
export async function getdata(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    },

 author-> {
    name,
    bio,
    image {
      asset-> {
        url
      },
      alt
    }
  },
  publishedAt
}`;


  // Fetch data using the parameterized query
  const data = await client.fetch(query, { slug });

  return data;


}*/}





{/*

import { client } from "@/sanity/lib/client";
import { FullBlog } from "@/app/lib/interface";
export async function getdata(slug: string): Promise< FullBlog> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    },
    author-> {
      name,
      bio,
      image {
        asset-> {
          url
        },
        alt
      }
    },
    publishedAt
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}
*/}




import { client } from "@/sanity/lib/client";
import  {FullBlog } from "../lib/interface";

export async function getdata(slug: string): Promise<FullBlog> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    },
    author-> {
      name,
      bio,
      image {
        asset-> {
          url
        },
        alt
      }
    },
    publishedAt
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}