import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import insta from "./skill icons/instagram.png";
import facebook from "./skill icons/facebook.png";
import linkedin from "./skill icons/linkedin.png";

import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Berlin S P | React Developer | Frontend Web Developer Portfolio
        </title>

        <meta
          name="description"
          content="Berlin S P is a Frontend React Developer and Mechanical Engineering graduate. Explore responsive React.js websites, Tailwind CSS projects, UI/UX designs, JavaScript applications, and professional portfolio."
        />

        <meta
          name="keywords"
          content="Berlin SP, React Developer, Frontend Developer, Portfolio, JavaScript, Tailwind CSS, React.js, HTML, CSS, Mechanical Engineer"
        />

        <meta
          property="og:title"
          content="Berlin S P | React Developer Portfolio"
        />

        <meta
          property="og:description"
          content="Portfolio of Berlin S P showcasing React.js projects, frontend development, responsive web design, and UI animations."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://yourdomain.com"
        />

        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com"
        />
      </Helmet>

      <main className="bg-gray-950">

        {/* Hero Section */}

        <section
          className="min-h-screen flex items-center justify-center border border-pink-500 px-5"
        >
          <header className="text-center max-w-4xl">

            <h1
              className="text-4xl md:text-7xl font-bold text-pink-500"
              data-aos="zoom-in"
            >
              Berlin S P
            </h1>

            <h2
              className="mt-6 text-2xl md:text-5xl font-semibold text-purple-500"
              data-aos="fade-up"
            >
              Frontend React Developer & Mechanical Engineer
            </h2>

            <p
              className="mt-8 text-lg md:text-xl text-gray-300 leading-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I design and build responsive, modern, and high-performance
              websites using React.js, JavaScript, Tailwind CSS, HTML, and CSS.
              I also have a Mechanical Engineering background with expertise in
              AutoCAD, SolidWorks, and product design.
            </p>

            {/* Social Links */}

            <nav
              aria-label="Social Media Links"
              className="flex justify-center gap-6 mt-10"
            >
              <a
                href="https://www.instagram.com/_berlin_222_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berlin S P Instagram Profile"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.facebook.com/berlin.thorsp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berlin S P Facebook Profile"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/berlin-sp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Berlin S P LinkedIn Profile"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
            </nav>

          </header>
        </section>

        {/* About */}

        <section id="about">
          <About />
        </section>

        {/* Skills */}

        <section id="skills">
          <Skills />
        </section>

        {/* Contact */}

        <section id="contact">
          <Contact />
        </section>

      </main>
    </>
  );
};

export default Home;