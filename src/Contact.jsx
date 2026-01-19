import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import insta from './skill icons/instagram.png'
import facebook from './skill icons/facebook.png'
import linkedin from './skill icons/linkedin.png'

const Contact = () => {


   useEffect(() => {
          AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
          });
          AOS.refresh();
        }, []);


  return (
    <div className='border border-violet-500 min-h-screen w-full bg-gray-950'>
      
      <h1 className='mt-10 text-violet-500 text-center m-5 text-3xl md:text-5xl font-bold' data-aos="zoom-in-up">Contact Me</h1>
      
      <div className='w-full flex justify-center items-center py-8 px-2 md:px-0' data-aos="zoom-in-up">
        
        <div className='w-full max-w-lg md:max-w-2xl border border-purple-500 rounded-xl bg-gray-950 shadow-lg' data-aos="zoom-in-up">
          
          <form action="" className='flex flex-col gap-6 md:gap-8 p-4 md:p-10' data-aos="zoom-in-up">
            
            <input data-aos="zoom-in-up" type="text" className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full rounded-xl backdrop-blur-md bg-white/10' placeholder='Give me your name' />
            
            <input data-aos="zoom-in-up" type="email" className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full rounded-xl backdrop-blur-md bg-white/10' placeholder='Enter your E-mail' />
            
            <textarea data-aos="zoom-in-up" name="" placeholder='Your message' className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full h-32 md:h-40 rounded-xl backdrop-blur-md bg-white/10' id=""></textarea>
            
            <div>

              <h1 className='text-purple-500 mb-4 text-lg md:text-xl font-semibold'>Connect with me</h1>

              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>

              <a href="https://www.instagram.com/_berlin_222_/?hl=en">

                <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                  <img src={insta} alt="" className='w-8 h-8 mb-2' />
                  <h1 className='text-violet-500 text-base md:text-lg'>Instagram</h1>
                </div>
              </a>
                <a href="https://www.facebook.com/berlin.thorsp">

                <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                  <img src={facebook} alt="" className='w-8 h-8 mb-2' />
                  <h1 className='text-violet-500 text-base md:text-lg'>Messenger</h1>
                </div>
                </a>

                <a href="https://www.linkedin.com/in/berlin-sp/">

                <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                  <img src={linkedin} alt="" className='w-8 h-8 mb-2' />
                  <h1 className='text-violet-500 text-base md:text-lg'>LinkedIn</h1>

                </div>
                </a>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact