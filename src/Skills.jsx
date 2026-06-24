import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Certificates from './Certificates';
import Tech from './Tech';
import Mech from './Mech';

const Skills = () => {

  const [showCerti, setShowcerti] = useState(true);
  const [showTechnical, setShowTechnical] = useState(false);
  const [showMech, setShowMech] = useState(false);


 useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  function handleMechToggle() {
    setShowMech((prev) => !prev);
    // Optionally close the other panel
    setShowTechnical(false);
    setShowcerti(false);
  }

  function handleCertificatesToggle() {
    setShowcerti((prev) => !prev);
    // Optionally close the other panel
    setShowTechnical(false);
    setShowMech(false);
  }

  function handleTechToggle() {
    setShowTechnical((prev) => !prev);
    // Optionally close the other panel
    setShowcerti(false);
    setShowMech(false);
  }

  return (
    <div className='h-[150vh] bg-gray-950'>
    <div className='w-full bg-transparent h-full md:h-full  border border-pink-500'>
      {/* Title */}
      <div className='text-purple-600 text-center mt-10 text-3xl md:text-5xl font-bold' data-aos="zoom-in-up" data-aos-delay="200"> 
        Portfolio Showcase
      </div>

      {/* main */}
      <div className= ' grid grid-cols-3 m-10 gap-10'>
    
        {/* certifcates */}
        <button onClick={handleCertificatesToggle} className='md:m-20 text-pink-500 border h-10 text-center p-1 border-purple-500 hover:bg-violet-950 hover:scale-106' data-aos="zoom-in-up" data-aos-delay="300">
          Certificates
        </button>

         <button onClick={handleMechToggle} className='md:m-20 text-pink-500 border text-center p-1 h-10 border-purple-500 hover:bg-violet-950 hover:scale-106' data-aos="zoom-in-up" data-aos-delay="300">
          Mech Stack
        </button>

        {/* skills */}
        <button onClick={handleTechToggle} className='md:m-20 text-pink-500 border text-center p-1 h-10 border-purple-500 hover:bg-violet-950 hover:scale-106' data-aos="zoom-in-up" data-aos-delay="300">
          Tech Stack
        </button>

      </div>
      
  {showCerti && <Certificates />}
  {showTechnical && <Tech />}
  {showMech && <Mech />}

    </div>
    </div>
  )
}

export default Skills