import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import solid from './assets/solidworks.png'
import cad from './assets/cad.png'
import fusion from './assets/fusion.png'

const Mech =()=>{

      useEffect(() => {
            AOS.init({
              disable: "phone",
              duration: 700,
              easing: "ease-out-cubic",
            });
            AOS.refresh();
          }, []);

    return(
      <div className='certificates w-full grid grid-cols-2 gap-10 mb-20  md:grid-cols-4 border border-violet-500 h-auto md:h-auto bg-gray-950 p-10 text-white' data-aos="zoom-in-up" data-aos-delay="100">
              {/* <div className='overflow-hidden  w-50 h-40 '> */}
      
                <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">
                
                    <img src={solid} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />
                
                    <p className='text-[12px] md:text-md text-cyan-300 text-center' data-aos="zoom-in-up">SOLID-WORKS</p>
                
                </div>

                <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">
                
                    <img src={cad} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />
                
                    <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">AUTO-CAD</p>
                
                </div>

                <div className='  w-20 md:w-30 flex-row justify-center p-4 items-center align-center border border-white rounded-lg backdrop-blur-none bg-white/10' data-aos="zoom-in-up">
                
                    <img src={fusion} data-aos="zoom-in-up" className='w-20 md:w-30' alt="" />
                
                    <p className='text-[12px] md:text-md text-cyan-300 text-center  ' data-aos="zoom-in-up">FUSION 360</p>
                
                </div>
                
                
                
              {/* </div> */}
          </div>
    )
}
export default Mech