import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const NavBar = () => {

   useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
      AOS.refresh();
    }, []);

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="flex justify-between items-center border-1 border-pink-500 p-4 shadow-lg bg-black relative fixed t-0">
        <h1 className="flex font-sanserif font-bold gap-2 text-3xl text-pink-500" data-aos="fade-right">BERLIN <span className="text-3xl text-white"> S P</span></h1>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <ul className={`flex-col md:flex-row md:flex md:gap-23 gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 z-10 ${menuOpen ? 'flex' : 'hidden'}`} style={{ listStyle: 'none' }}>
          <li><Link className='text-white hover:text-pink-500 block px-4 py-2 md:p-0' to="/">Home</Link></li>
          <li><Link className='text-white hover:text-pink-500 block px-4 py-2 md:p-0' to="/about">About </Link></li>
          <li><Link className='text-white hover:text-pink-500 block px-4 py-2 md:p-0' to="/skill">Skills</Link></li>
          <li><Link className='text-white hover:text-pink-500 block px-4 py-2 md:p-0' to="/contact">Contact</Link></li>
        </ul>
      
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/profile' element={<Profile/>}/> */}
        <Route path='/about'  element={<About/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default NavBar