import React from 'react'
import insta from './skill icons/instagram.png'
import messenger from'./skill icons/facebook.png'
import linedln from './skill icons/linkedin.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import About from './About'
import {gsap} from'gsap'
import {useGSAP} from '@gsap/react'
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {

    useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

    return (<div className='h-auto bg-transparent w-full'>
        <div className='flex flex-col md:flex-row flex-wrap p-4 md:p-10 gap-8 md:gap-20 border border-pink-500 w-full min-h-screen justify-center items-center bg-gray-950' >
           
            <div className='space-y-5 w-full md:w-2/3 flex flex-col items-center md:gap-10 justify-center align-center md:items-center text-center md:text-center'>
                <h1 data-aos="zoom-in"   className='text-pink-500 text-3xl md:text-6xl font-bold'>
                    Welcome to my Portfolio
                </h1>
                <h2 data-aos="zoom-in" data-aos-delay="200" className='text-purple-500 text-xl md:text-3xl lg:text-5xl font-semibold'>
                    I'm BERLIN S P
                </h2>
              
                <div className='flex gap-4 justify-center md:justify-start mt-4' data-aos-delay="300">
                    <a href="https://www.instagram.com/_berlin_222_/?hl=en">
                        <img data-aos="zoom-in" data-aos-delay="300" className='insta  hover:scale-110 w-7 h-7' src={insta} alt="Instagram"  />
                    </a>
                    <a href="https://www.facebook.com/berlin.thorsp">
                        <img data-aos="zoom-in" data-aos-delay="300" className='fb hover:scale-110 w-7 h-7' src={messenger} alt="Messenger" />
                    </a>
                    <a href="https://www.linkedin.com/in/berlin-sp/">
                    <img data-aos="zoom-in" data-aos-delay="300" className= ' linkedin hover:scale-110 w-7 h-7' src={linedln} alt="LinkedIn" />
                    </a>
                </div>
              
            </div>
        </div>
        <About/>
        <Skills/>
        <Contact/>
        </div>
    )
}

export default Home