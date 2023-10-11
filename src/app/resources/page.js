"use client"
import Reviews from './Reviews';
import React, { useEffect, useState} from 'react';
import { Client, Databases} from 'appwrite';
import Link from 'next/link';

const client = new Client();

client
.setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`)
.setProject(`${process.env.NEXT_PUBLIC_PROJECT_ID}`);


export default function Page() {

  const [resources, setResources] = useState([]);
  useEffect(() => {
    const database = new Databases(client);
    let promise = database.listDocuments(
      `${process.env.NEXT_PUBLIC_REC_DATABASE_ID}` , `${process.env.NEXT_PUBLIC_REC_COLLECTION_ID}`
    );
    promise.then(function (response)
     {
      setResources(response.documents);
    }, function (error) {
    });
  }, [])

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Welcome to Book-Mart</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-justify text-white">Welcome to our Bookstore Web App, where you can explore a wide range of books,
              including those focused on book-related technology, hands-on guides, and biological and medical subjects. Dive into the latest advancements
              in technology, learn practical skills through hands-on guides, and delve into the fascinating worlds of biology and medicine. Whether you&apos;re
              interested in tech trends, seeking practical knowledge, or exploring life sciences, our app offers a diverse selection of books to cater to
              your intellectual curiosity and professional growth. Start your journey with us today and unlock a world of knowledge.</p>
          </div>
          <div className="lg:w-1/2 w-full mb-6 mt-38">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Trending Book</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4 mt-38 mb-40 ">
          {resources.map((item) => (
              <div key={item.id} className="xl:w-1/3 h-auto md:w-1/2 p-4">
                <div className=" bg-white bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img alt="ecommerce" className=" w-full h-full rounded-lg mb-4" src={item.Image}/>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.Title}</h1>
                  <p className="text-left md:text-justify sm:text-justify mb-3">{item.Description}</p>
                  <Link href={`/non-fic/${item.slug}`} className="text-indigo-700 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-black mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-black">
                      <svg className="w-4 h-4 mr-1" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-black inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Reviews/>
        </div>
      </section>
    </div>
  )
}


