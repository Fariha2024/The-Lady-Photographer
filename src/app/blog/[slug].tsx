{/*// src/app/blog/[slug].tsx  // origional code
import React, { useState } from "react";
import { useRouter } from "next/router";// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import selfPortrait from "/profilepicture.jpg";
import blogsociall from "/blog sociall.jpg";
import { StaticImageData } from "next/image";



interface BlogPostType {
  slug: string;
  title: string;
  content: string;
  image: string | StaticImageData ; // Allow both URLs and imported images
}

// Sample blog data, you would replace this with real data fetching logic
const blogPosts = [
  {
    slug: "first-post",
    title: "lady photographer",
    content: "This is the content of first post.",
    image: selfPortrait,
    
  },
  {
    slug: "second-post",
    title: "Social media ad agency",
    content: "This is the content of second post.",
    image: blogsociall,
   
  },
];

// Function to fetch post data
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const post = blogPosts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
};

// Function to fetch all blog post slugs for static generation
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    
    paths,
    fallback: false, // This will show a 404 page for any unknown routes
  };
};

const BlogPost = ({ post }: { post: BlogPostType }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const router = useRouter();// eslint-disable-next-line @typescript-eslint/no-unused-vars

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
    <div className="blog-post container mx-auto py-16 px-6">
      <header>
        <h1 className="text-3xl font-bold text-center mt-4 mb-10">{post.title}</h1>
        <Image
          src={post.image}
          alt="Post image"
          className="self-portrait-img mt-4 rounded-md shadow-lg"
          width={500}
          height={500}
        />
        <div className="mt-4">{post.content}</div>
      </header>

      {/* Comment Section *
      <section className="comment-section mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="comment-input mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={handleCommentChange}
            className="border p-2 w-full"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md"
          >
            Add Comment
          </button>
        </div>

        <div className="comments mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment bg-gray-100 p-4 mb-2 rounded-md">
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

export default BlogPost;*/} //origional code





// src/app/blog/[slug].tsx
{/*import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface BlogPostType {
  slug: string;
  title: string;
  content: string;
  image: string | StaticImageData;
}

// Function to fetch post data from Sanity API (adjust to your actual query)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const res = await fetch(`https://p9xftove.api.sanity.io/v1/data/query/production`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `*[_type == "post" && slug.current == "${slug}"][0]{
        title,
        content,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`,
    }),
  });

  const post = await res.json();

  return {
    props: {
      post: post.result || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://p9xftove.api.sanity.io/v1/data/query/production", {
    method: "POST",
    body: JSON.stringify({
      query: `*[_type == "post"]{
        slug
      }`,
    }),
  });

  const posts = await res.json();

  const paths = posts.result.map((post: { slug: { current: string } }) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false, // Show a 404 page for any unknown routes
  };
};

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
    <div className="blog-post container mx-auto py-16 px-6">
      <header>
        <h1 className="text-3xl font-bold text-center mt-4 mb-10">{post.title}</h1>
        {post.image && (
          <Image
            src={post.image}
            alt="Post image"
            className="self-portrait-img mt-4 rounded-md shadow-lg"
            width={500}
            height={500}
          />
        )}
        <div className="mt-4">{post.content}</div>
      </header>

      {/* Comment Section *
      <section className="comment-section mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="comment-input mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={handleCommentChange}
            className="border p-2 w-full"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md"
          >
            Add Comment
          </button>
        </div>

        <div className="comments mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment bg-gray-100 p-4 mb-2 rounded-md">
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

export default BlogPost;
*/}
























































/*"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from "react";
import CustomComponent from "../components/custom"
import DOMPurify from 'dompurify';


// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Import Quill CSS
import 'react-quill/dist/quill.snow.css'; 

const BlogEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  // Define the modules configuration for the toolbar
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      ['blockquote'],
      [{ 'align': [] }],
      ['image'],
      ['clean']
    ],
  };

  const handleChange = (value: string) => {
    setEditorContent(value);
  };

  return (
    <div>
      <h1>Create Your Blog Post</h1>
      <ReactQuill 
        value={editorContent} 
        onChange={handleChange} 
        theme="snow"
        modules={modules}
         // Pass the modules here
      />
      <div>
        <h2>Preview</h2>

        <div
  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorContent) }}
/>


        < CustomComponent />
      </div>
      
    </div>
    
  );
};

export default BlogEditor;*/

