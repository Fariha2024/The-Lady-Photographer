import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
import Header from './components/header'; 
import Footer from './components/footer'; // Import Footer component
import { finished } from "stream";
import Navbar from './components/navbar';



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Photography",
  description: "Lady Photographer - The Art Story...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <Navbar /> 
        {children}
        <Footer /> {/* Include Footer here */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <Header />
  {children}
  <Footer /> {/* Make sure to include this line */}
</body>
      </body>
    </html>
  );
}
