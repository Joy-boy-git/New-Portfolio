import React from 'react'
import html from './skill icons/html-5.png'
import css from './skill icons/css-3.png'
import bootstrap from './skill icons/bootstrap.png'
import javascript from './skill icons/java-script.png'
import python from './skill icons/python.png'
import react from './skill icons/atom.png'
import tailwind from './skill icons/tailwind.png'
import sql from './skill icons/sql.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Tech = () => {

    useEffect(() => {
            AOS.init({
              disable: "phone",
              duration: 700,
              easing: "ease-out-cubic",
            });
            AOS.refresh();
          }, []);
        

  return (
    <div data-aos="zoom-in-up" className='grid grid-cols-3 gap-10 mb-20 p-20 md:grid-cols-4 md:p-30 justify-center items-center align-center md:w-250 h-auto md:h-150 md:ml-50 border border-violet-500 '>

        <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-sm bg-white/10' data-aos="zoom-in-up">

            <img src={html} data-aos="zoom-in-up" className='w-30 md:w-40' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">HTML</p>

        </div>

        <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-sm bg-white/10' data-aos="zoom-in-up">

        <img src={css} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">CSS</p>

        </div>

        <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-sm bg-white/10' data-aos="zoom-in-up">

            <img src={bootstrap} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">BOOTSTRAP</p>

        </div>

        <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-sm bg-white/10' data-aos="zoom-in-up">

            <img src={javascript} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">JAVASCRIPT</p>

        </div>

        <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-sm bg-white/10' data-aos="zoom-in-up">

            <img src={python} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">PYTHON</p>

        </div>

        
         <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">

            <img src={react} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">REACT JS</p>

        </div>

         <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">

            <img src={tailwind} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">TAILWIND </p>

        </div>

         <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">

            <img src={sql} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />

            <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">MY SQL</p>

        </div>


    </div>
  )
}

export default Tech