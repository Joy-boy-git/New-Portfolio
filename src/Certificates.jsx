import React from 'react'
import react from './assets/react js.pdf'
import cad from './assets/Berlin CAD certificate.pdf'
import python from './assets/python certificate.pdf'
import edukera from './assets/Edureka - Internship Certificate.pdf'
import css from './assets/css.pdf'
import bootstrap from './assets/css,bootstrap.pdf'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Certificates = () => {

     useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
        AOS.refresh();
      }, []);
    

  return (
    <div className='certificates w-full grid grid-cols-2 gap-10 mb-20  md:grid-cols-4 border border-violet-500 h-auto md:h-auto bg-gray-950 p-10 text-white' data-aos="zoom-in-up" data-aos-delay="100">
        {/* <div className='overflow-hidden  w-50 h-40 '> */}

            <iframe src={react} className=' w-50 h-40 overflow-hidden'   data-aos="zoom-in-up"></iframe>
            <iframe src={cad} className=' w-50 h-40 overflow-hidden'  data-aos="zoom-in-up"></iframe>
            <iframe src={python} className=' w-50 h-40 overflow-hidden'  data-aos="zoom-in-up"></iframe>
            <iframe src={edukera} className=' w-50 h-40 overflow-hidden'  data-aos="zoom-in-up"></iframe>
            <iframe src={bootstrap} className=' w-50 h-40 overflow-hidden'  data-aos="zoom-in-up"></iframe>
            <iframe src={css} className=' w-50 h-40 overflow-hidden'  data-aos="zoom-in-up"></iframe>
    
        {/* </div> */}
    </div>
  )
}

export default Certificates