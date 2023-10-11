import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Demo from './components/Demo'



export default function page() {
  return (
    <div>
      <Home />
      <Demo />
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}
