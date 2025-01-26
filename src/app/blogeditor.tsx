"use client";

import dynamic from 'next/dynamic';
import React, { useState } from "react";
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
      />
      <div>
        <h2>Preview</h2>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorContent) }}
        />
      </div>
    </div>
  );
};

export default BlogEditor;
