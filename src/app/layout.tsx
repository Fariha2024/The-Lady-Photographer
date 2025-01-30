{/*//import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from "./components/themeprovider";

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
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          
        
        <Navbar />
     <main className="p-4 sm:p-6 md:p-8 lg:p-12">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
    
  );
}*/}

// </ClerkProvider>
         {/**<SignedOut>
            {/* You can show the SignInButton or other UI when the user is not signed in *
           <SignInButton />
        </SignedOut>

         <SignedIn>
            {/* Show the UserButton when the user is signed in *
           <UserButton />
         </SignedIn>*/}
        











{/*import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
//import Header from './components/header'; 
import Footer from './components/footer'; // Import Footer 
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
        
        <Navbar /> 
        <main>{children}</main>
        <Footer /> {/* Include Footer here *
      </body>
    </html>
  );
}
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}*/}



//layout.tsx

import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from "./components/themeprovider";


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
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

         
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="p-4 sm:p-6 md:p-8 lg:p-12">{children}</main>
          <Footer />
        </ThemeProvider>
      
      </body>
    </html>
  );
}
