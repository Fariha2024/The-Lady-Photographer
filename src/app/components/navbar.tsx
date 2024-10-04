
// src/app/components/navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white p-4">
      <ul className="flex justify-center space-x-8">
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
      </ul>
    </nav>
  );
};

export default Navbar;
