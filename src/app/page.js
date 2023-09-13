import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cards from './components/Cards'



export default function page() {
  return (
    <div>
      <Nav />
      <Home />
      <Cards />
      {/* <About />
      <Contact /> */}
      <Footer />
    </div>
  )
}
