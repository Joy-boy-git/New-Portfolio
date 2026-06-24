import React from 'react'
import { Link, Routes, Route} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import img1 from './assets/berlinport.jpg'
import resume from './assets/Berlin_SP_Resume.pdf'
import certificate from './assets/quality.png'
import experience from './assets/recommend.png'
import Skills from './Skills';
import Certificates from './Certificates';

const About = () => {

  useEffect(() => {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
      AOS.refresh();
    }, []);

  return (
  <div className='border border-purple-500 w-full min-h-screen '>
      {/* About Tittle */}
      <div className='flex justify-center items-center mt-10'>
        <h1 data-aos="zoom-in-up" className='text-3xl sm:text-4xl md:text-6xl text-purple-500 font-bold text-center'>About me</h1>
      </div>
      {/* main body */}
      <div className='main-body flex flex-col md:flex-row gap-15 md:gap-20 p-4 md:p-8 w-full items-center'>
        {/* Left: Image and Info */}
        <div className='about-body flex flex-col justify-center items-center w-full md:w-1/2'>
          <div className='image flex flex-col justify-center items-center w-full'>
            <img className='rounded-full w-32 mt-10 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-2 border-pink-500 shadow-xl shadow-pink-500 object-cover' data-aos="flip-right" src={img1} alt="Profile" />
            <h2 data-aos="zoom-in-up" data-aos-delay="300" className='text-purple-500 text-2xl sm:text-3xl lg:text-5xl font-semibold mt-10 text-center'>
              I'm BERLIN S P
            </h2>
            <p data-aos="zoom-in-up" data-aos-delay="300" className='text-pink-400 mt-10 text-base md:text-xl max-w-xl text-center'>
              I'm a Mechanical Engineering student and also passionate about web development and creating responsive web pages.
            </p>
            <button className='w-32 h-10 bg-pink-400 mt-8 rounded shadow hover:bg-pink-500 transition'>
              <a href={resume} className='text-white text-lg font-semibold' download="Berlin_SP_Resume.pdf"data-aos-delay="300">Resume</a>
            </button>
          </div>
        </div>
        {/* Right: Boxes */}
        <div className='flex  flex-row md:flex-col gap-4 md:gap-5 w-full md:w-1/2 justify-center items-center mt-8 md:mt-0' data-aos="zoom-in-up"data-aos-delay="300">

          <div className='w-50 md:flex-col hover:scale-106 h-auto md:w-82 md:h-full rounded-lg bg-white/10 backdrop-blur-none' data-aos="zoom-in-up"data-aos-delay="300">
            
            <div className='rounded-full flex justify-between p-2 'data-aos="zoom-in-up"data-aos-delay="300">
              
              <img src={certificate} className='md:w-10 w-8 h-8 md:h-10   p-1 'data-aos="zoom-in-up"data-aos-delay="300" alt="" />
              <div className='rounded-full md:w-10 w-7 h-7 md:h-10  md:p-1 bg-purple-700 text-white  text-center text-xl 'data-aos="zoom-in-up"data-aos-delay="300">8</div>
              
            </div>

            <div className='flex justify-betweeen p-1 items-center md:mt-8 'data-aos="zoom-in-up"data-aos-delay="300">

              <div className=' text-sm text-pink-500 md:text-xl'data-aos="zoom-in-up"data-aos-delay="300">Certificates <br />
              <p className='text-sm text-purple-500'data-aos="zoom-in-up"data-aos-delay="300"> Recognitions that define my professional journy</p>
              </div>
        
            </div>
          
          </div>
         
          
          <div className=' w-50 h-full hover:scale-106 md:w-82 md:h-full rounded-lg bg-white/10 backdrop-blur-none' data-aos="zoom-in-up"data-aos-delay="300">

            <div className='rounded-full flex justify-between p-2 'data-aos="zoom-in-up"data-aos-delay="300">
              
              <img src={experience} className=' md:w-10 w-8 h-8 md:h-10   p-1 'data-aos="zoom-in-up"data-aos-delay="300" alt="" />
              <div className='rounded-full md:w-10 w-7 h-7 md:h-10  md:p-1 bg-purple-700 text-white text-center text-xl 'data-aos="zoom-in-up"data-aos-delay="300">0</div>
              
            </div>

            <div className='flex justify-betweeen p-1 items-center md:mt-8 'data-aos="zoom-in-up"data-aos-delay="300">

              <div className=' text-sm text-pink-500 md:text-xl'data-aos="zoom-in-up"data-aos-delay="300">Projects <br />
              <p className='text-sm text-purple-500'data-aos="zoom-in-up"data-aos-delay="300"> Building Experience from Real-World Experience</p>
              </div>
             

            </div>

          </div>
         
        </div>
      </div>
      {/* <Skills/> */}
      
    </div>
    
  )
}

export default About