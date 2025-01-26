{/*import React from "react";
import { client } from "../../../sanity/lib/client"; // Adjust import path
import { PortableText } from "@portabletext/react"; // For rich text rendering
import { useRouter } from "next/router";

const BlogPreview = async () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  // Fetch post details based on slug
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        {/* Render the Portable Text content *
        <PortableText value={post.body} />
      </div>
    </div>
  );
};


    
  
}

{/*async function getData(slug:string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainimage
}[0]`;
  const data = await client.fetch(query);
return data;

export default async function BlogPreview ({params}:{params:{slug:string}}) {
  const data: fullBlog = await getData(params.slug);*/}






 {/*} import { PortableText } from "@portabletext/react";
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
  }
                 */}   















 {/* import { PortableText } from "@portabletext/react"; // For rich text rendering
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
}
*/}
{/*}
import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import blogPosts from "@/data/blogPosts"; // Replace with your actual data fetching logic

type BlogPostType = {
  slug: string;
  title: string;
  body: string; // Include body field
  image: string;
};

// Fetch the data for the specific blog post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const post = blogPosts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

// Generate static paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// BlogPost component
const BlogPost = ({ post }: { post: BlogPostType }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  if (!post) return <div>Post not found!</div>;

  return (
    <div className="container mx-auto py-16 px-6">
      <header>
        <h1 className="text-3xl font-bold text-center mt-4 mb-10">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.title}
          className="mt-4 rounded-md shadow-lg"
          width={800}
          height={500}
        />
      </header>

      {/* Blog Body *
      <div className="mt-8">
        <p className="text-lg leading-relaxed">{post.body}</p>
      </div>

      {/* Comment Section *
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={handleCommentChange}
            className="border p-2 w-full rounded-md"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add Comment
          </button>
        </div>

        <div className="mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 mb-2 rounded-md shadow"
              >
                {comment}
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;*/}


{/*import React from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const BlogPage = async () => {
  const res = await fetch("https://p9xftove.api.sanity.io/v1/data/query/production", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const { result: posts }: { result: BlogPost[] } = await res.json(); // Ensure correct structure of API response

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











