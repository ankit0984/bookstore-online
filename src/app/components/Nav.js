"use client";
import Link from 'next/link';
import React, { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center">
              <Link href="/" className="text-white font-semibold text-lg">
                Book-Mart (A Virtual Digital Library)
              </Link>
            </div>
            <div className="md:hidden">
              {/* dropdown button */}

            {/* dropdown button end */}
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
              <Link href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium scroll-smooth">
                About
              </Link>
              {/* Conditionally render the Resources button */}
              <Link href="/resources" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              {/* Dropdown button  */}
              <div className="relative inline-block text-left">
              <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Book-Categories{' '}
                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute mt-2 space-y-1 bg-blue-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <Link href="/non-fic" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                       Non-Fiction
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Business and Finance
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Science and Nature
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Medical Reference
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Health and Wellness
                    </Link>
                    <li href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Medical Reference
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* dropdown button end  */}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium scroll-smooth">
                About
              </Link>
              {/* Conditionally render the Resources button */}
              <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              
              {/* Dropdown button  */}
              <div className="relative inline-block text-left">
              <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Book-Categories{' '}
                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute mt-2 space-y-1 bg-blue-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <Link href="/non-fic" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                       Non-Fiction
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Business and Finance
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Science and Nature
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Medical Reference
                    </Link>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Health and Wellness
                    </Link>
                    <li href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Medical Reference
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* dropdown button end  */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
