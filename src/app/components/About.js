import React from 'react'

export default function About() {
  return (
    <div id="about" className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold mb-36 underline'>About Us</h1>
<figure className="max-w-screen-md mx-auto text-center">
    
    <svg className="w-10 h-10 mx-auto mb-6 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p className="text-2xl italic font-medium text-white dark:text-white">"Explore a world of cutting-edge technology and groundbreaking medical knowledge at our bookstore. Dive into a curated selection of books that delve deep into the realms of tech innovation and medical breakthroughs, offering invaluable insights and inspiration to professionals and enthusiasts alike."</p>
    </blockquote>
    <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-100 dark:text-white">Kumar</cite>
            <cite className="pl-3 text-sm text-gray-100 dark:text-gray-400">Edu-link</cite>
        </div>
    </figcaption>
</figure>

    </div>
  )
}
