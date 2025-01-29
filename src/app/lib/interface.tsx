

//src/app/lib/interface.tsx

export interface simpleBlogCard{



  _id: string;
  title: string;
  
  slug: { current: string }; // Ensure slug is defined as an object with current property
 
  
  mainImage: {
    alt: string;
    asset: {
      url: string;
    }
    description: string;
  }
}
{/*export interface fullBlog{
  title: string;
  body: any;
  slug: string;
  block: any;
  author: { name: string };
  publishedAt: string;
  mainImage: {
    alt: string | undefined;
    asset: {
      url: string;
    }
  }
*/}


// /app/lib/interface.ts
{/*
export interface Category {
  title: string;
  slug: {
    current: string;
  };
  description: string;
}

export interface Author {
  name: string;
  slug: {
    current: string;
  };
  image: string;
  bio: string;
}

export interface MainImage {
  alt: string | undefined;
  asset: {
    url: string;
  };
}

export interface FullBlog {
  title: string;
  body: string; // This will depend on the structure of your portable text. Use appropriate type for portable text.
  slug: string;
  author: Author;
  publishedAt: string;
  mainImage: MainImage;
  categories: Category[]; // Assuming it's an array of categories
}*/}





import { PortableTextBlock } from "@portabletext/types";

export interface Category {
  title: string;
  slug: {
    current: string;
  };
  description: string;
}

export interface Author {
  name: string;
  slug: {
    current: string;
  };
  image: MainImage; // Should be an object, not a string
  bio: PortableTextBlock[]; // To properly handle PortableText content
}

export interface MainImage {
  alt?: string; // Optional, so `string | undefined` is unnecessary
  asset: {
    url: string;
  };
}

export interface FullBlog {
  title: string;
  body: PortableTextBlock[]; // Should match PortableText structure
  slug: string;
  author: Author;
  publishedAt: string;
  mainImage: MainImage;
  categories: Category[]; // Assuming it's an array of categories
}
