
// src/app/components/navbar.tsx

import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYelp, FaGithub } from "react-icons/fa";
import { ModeToggle } from './modetoggle';


const Navbar = () => {
  return (
    <div>
    <header className="bg-black text-white  py-3">
    <div className="container  max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold">PhotographyBlog</h1>
      </div>
  </header>

    <nav className="bg-zinc-800  text-white p-4 pr-52">
   
      <ul className="absolute pl-80 flex justify-center space-x-8 items-center">
       
        <li>
          <Link href="/" className="hover:text-zinc-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/biography" className="hover:text-zinc-400">
            Biography
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-zinc-400">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-zinc-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-zinc-400">
            Enterprise
          </Link>
         
        </li>
      </ul>
   
     {/* Social Media Icons */}
     <div className="relative ml-auto flex space-x-4 pr-10 items-center justify-end  " >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-white"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://www.yelp.com/biz/spersch-studio-sydney"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-white"
        >
          <FaYelp size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub size={20} />
         
        </a>
        <ModeToggle/>
     
      </div>
      </nav> 
      </div>
  );
};

export default Navbar;
