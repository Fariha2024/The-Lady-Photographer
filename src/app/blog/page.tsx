
// src/app/blog/page.tsx  //  origional code
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const BlogPage: React.FC = async () => {
  // Fetch data from an API directly within the component
  const res = await fetch("https://p9xftove.api.sanity.io/v1/data/query/production");
  const posts: BlogPost[] = await res.json();

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

export default BlogPage;


// src/app/blog/page.tsx
{/*import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
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

export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/blog-posts');
  const data = await res.json();

  return {
    props: {
      posts: data, // Assuming data is an array of blog posts
    },
  };
}

export default BlogPage;*/}


