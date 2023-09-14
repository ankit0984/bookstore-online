"use client";
import Link from 'next/link';
import React, { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center">
              <Link href="/" className="text-white font-semibold text-lg">
                Edu-link
              </Link>
            </div>
            <div className="md:hidden">
                <button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get started
                </button>
              <button onClick={handleMenuToggle} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              {/* Conditionally render the Resources button */}
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              
                <button type="button"className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get started
                </button>
              
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              {/* Conditionally render the Resources button */}
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
