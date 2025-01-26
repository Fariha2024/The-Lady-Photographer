 // src/app/blog/index.tsx                orogioal code
import React from "react";
import Link from "next/link";

// Sample blog data
const blogPosts = [
  { slug: "lady photographer", title: "lady photograher" },
  { slug: "the solution to the art industry" , title: "the solution to the art industry" },
    { slug: "second-post", title: "second-post" }, 
     { slug: "fourth-post", title: "" },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug} className="post mb-4">
            <Link href ={`/blog/${post.slug}`}>
              <span className="text-2xl font-semibold text-blue-500">{post.title}
                </span>
                
            </Link>      
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList; //origioal code

// src/app/blog/index.tsx
{/*import React from "react";
import Link from "next/link";

// Sample blog data
const blogPosts = [
  { slug: "first-post", title: "First Post" },
  { slug: "second-post", title: "Second Post" },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug} className="post mb-4">
            <Link href={/blog/${post.slug}}>
              <a className="text-2xl font-semibold text-blue-500">{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;*/}




{/*// src/app/blog/index.tsx
import React from "react";
import Link from "next/link";

// Sample blog data
const blogPosts = [
  { slug: "first-post", title: "first-post" },
  { slug: "second-post", title: "second-post" },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug} className="post mb-4">
            {/* Correct Link syntax using template literals *
            <Link href={`/blog/${post.slug}`}>
              <span className="text-2xl font-semibold text-blue-500">{post.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;*/}
