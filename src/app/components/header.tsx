// src/app/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold">Photography</h1>
      </div>
    </header>
  );
};

export default Header;
