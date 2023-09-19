import React from 'react'
import Image from 'next/image'
export default function Demo() {
  return (
    <><div className='text-center text-xl font-semi-bold mt-4 mb-8'>
          <h1 className=' font-bold text-3xl'>Resources</h1>
          <h1 className='mt-3'>Here are some resources that will help you to learn from our resources ...</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/best-unit-testing-books.jpg" alt="" />
              </div>
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/best-node-js-books.jpg" alt="" />
              </div>
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/best-software-architecture-books.webp" alt="" />
              </div>
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/book1.jpg" alt="" />
              </div>
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/css1.jpg" alt="" />
              </div>
              <div>
                  <Image height={850} width={650} className="h-auto max-w-full rounded-lg" src="/Images/git.webp" alt="" />
              </div>
          </div>
          </>
  )
}
