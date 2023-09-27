"use client"
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function page() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("", {
          headers: {
            Authorization: "Bearer ",
          }
        });
        setBooks(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-justify text-white">Welcome to our Bookstore Web App, where you can explore a wide range of books,
              including those focused on book-related technology, hands-on guides, and biological and medical subjects. Dive into the latest advancements
              in technology, learn practical skills through hands-on guides, and delve into the fascinating worlds of biology and medicine. Whether you&apos;re
              interested in tech trends, seeking practical knowledge, or exploring life sciences, our app offers a diverse selection of books to cater to
              your intellectual curiosity and professional growth. Start your journey with us today and unlock a world of knowledge.</p>

            {/* dropdown button start */}
            <div className="relative inline-block text-left mt-8">
              <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Categories{' '}
                <svg className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute mt-2 space-y-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Non-Fiction</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Business and Finance</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Science and Nature</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Medical Reference</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Health and Wellness</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Medical Reference</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* dropdown button end */}
          </div>
          <div className="flex flex-wrap -m-4 mt-38">
            {books.map((item) => (
            <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.Image.data.attributes.url} alt="content" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item?.attributes.Title}</h2>
                <p className="leading-relaxed text-base">{item?.attributes.Description}</p>
              </div>
            </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  )
}