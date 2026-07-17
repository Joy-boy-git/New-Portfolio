import React from 'react'
import { Link, Routes, Route} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import img1 from './assets/berlinport.jpg'
import resume from './assets/Resume Main.pdf'
import certificate from './assets/quality.png'
import experience from './assets/recommend.png'
import Skills from './Skills';
import Certificates from './Certificates';
import { Helmet } from "react-helmet-async";


const About = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Berlin S P | React Developer Portfolio</title>

        <meta
          name="description"
          content="Learn more about Berlin S P, a Mechanical Engineering graduate and Front-End React Developer specializing in React.js, Tailwind CSS, JavaScript, responsive web design, and modern UI development."
        />

        <meta
          name="keywords"
          content="Berlin SP, React Developer, Frontend Developer, Mechanical Engineer, Portfolio, JavaScript, Tailwind CSS"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/about"
        />
      </Helmet>

         <main
      id="about"
      className="w-full min-h-screen border border-purple-500 px-5 py-10"
    >
      {/* Heading */}
      <header className="text-center mb-14">
        <h1
          data-aos="zoom-in-up"
          className="text-4xl md:text-6xl font-bold text-purple-500"
        >
          About Berlin S P
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-5 max-w-3xl mx-auto text-gray-300 text-lg"
        >
          Mechanical Engineering graduate and Front-End Web Developer
          specializing in React.js, Tailwind CSS, JavaScript, responsive web
          design, and modern user interface development.
        </p>
      </header>

      <section className="flex flex-col md:flex-row items-center gap-14">
        {/* Left Side */}
        <article className="flex-1 flex flex-col items-center text-center">
          <img
            src={img1}
            alt="Berlin S P - Mechanical Engineer and React Developer"
            loading="lazy"
            data-aos="flip-right"
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-pink-500 shadow-xl shadow-pink-500 object-cover"
          />

          <h2
            className="mt-10 text-3xl md:text-5xl font-semibold text-purple-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hi, I'm Berlin S P
          </h2>

          <p
            className="mt-8 max-w-xl text-gray-300 leading-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I am a Mechanical Engineering graduate passionate about Front-End
            Development. I build responsive, fast, and modern websites using
            React.js, Tailwind CSS, JavaScript, HTML, and CSS. My goal is to
            create user-friendly digital experiences with smooth animations and
            clean UI designs.
          </p>

          <a
            href={resume}
            download="Berlin-SP-Resume.pdf"
            aria-label="Download Berlin SP Resume"
            className="mt-8 px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
          >
            Download Resume
          </a>
        </article>

        {/* Right Side */}
        <aside
          className="flex flex-row md:flex-col gap-5 flex-1"
          data-aos="fade-left"
        >
          {/* Certificates */}

          <article className="w-full rounded-xl bg-white/10 p-5 hover:scale-105 transition">
            <div className="flex justify-between items-center">
              <img
                src={certificate}
                alt="Professional Certificates"
                className="w-10 h-10"
              />

              <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex justify-center items-center font-bold">
                8
              </span>
            </div>

            <h3 className="mt-8 text-xl text-pink-500 font-semibold">
              Certificates
            </h3>

            <p className="mt-2 text-purple-300">
              Professional certifications showcasing technical skills,
              continuous learning, and career development.
            </p>
          </article>

          {/* Projects */}

          <article className="w-full rounded-xl bg-white/10 p-5 hover:scale-105 transition">
            <div className="flex justify-between items-center">
              <img
                src={certificate}
                alt="Web Development Projects"
                className="w-10 h-10"
              />

              <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex justify-center items-center font-bold">
                5
              </span>
            </div>

            <h3 className="mt-8 text-xl text-pink-500 font-semibold">
              Projects
            </h3>

            <p className="mt-2 text-purple-300">
              Personal and professional projects focused on React.js, responsive
              web design, animations, and modern front-end development.
            </p>
          </article>
        </aside>
      </section>
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{
  "@context":"https://schema.org",
  "@type":"Person",
  "name":"Berlin S P",
  "jobTitle":"Frontend Web Developer",
  "description":"React Developer and Mechanical Engineer",
  "url":"https://yourdomain.com",
  "sameAs":[
    "https://github.com/yourgithub",
    "https://linkedin.com/in/yourprofile"
  ]
}` }}
    />
    </>
  );
};

export default About;

