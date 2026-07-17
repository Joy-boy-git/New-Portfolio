import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import Certificates from "./Certificates";
import Tech from "./Tech";
import Mech from "./Mech";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("certificates");

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
        <title>Skills | Berlin S P - React Developer & Mechanical Engineer</title>

        <meta
          name="description"
          content="Explore the skills of Berlin S P including React.js, JavaScript, Tailwind CSS, HTML, CSS, AutoCAD, SolidWorks, Fusion 360, and professional certifications."
        />

        <meta
          name="keywords"
          content="Berlin SP Skills, React Developer, Frontend Developer, Mechanical Engineer, AutoCAD, SolidWorks, JavaScript, Tailwind CSS, React Portfolio"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/skill"
        />
      </Helmet>

      <main className="min-h-screen bg-gray-950 border border-pink-500">

        {/* Page Header */}

        <header className="text-center py-12">
          <h1
            className="text-4xl md:text-6xl font-bold text-purple-500"
            data-aos="zoom-in-up"
          >
            Skills & Portfolio
          </h1>

          <p
            className="mt-5 max-w-3xl mx-auto text-gray-300 text-lg px-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore my technical skills, mechanical engineering expertise,
            certifications, and modern web development technologies used in my
            projects.
          </p>
        </header>

        {/* Navigation Buttons */}

        <section
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-16 pb-10"
          aria-label="Skills Categories"
        >
          <button
            onClick={() => setActiveTab("certificates")}
            aria-pressed={activeTab === "certificates"}
            className={`h-12 rounded-lg border transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-purple-700 text-white border-purple-700"
                : "border-purple-500 text-pink-500 hover:bg-violet-950"
            }`}
          >
            Certificates
          </button>

          <button
            onClick={() => setActiveTab("mech")}
            aria-pressed={activeTab === "mech"}
            className={`h-12 rounded-lg border transition-all duration-300 ${
              activeTab === "mech"
                ? "bg-purple-700 text-white border-purple-700"
                : "border-purple-500 text-pink-500 hover:bg-violet-950"
            }`}
          >
            Mechanical Skills
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            aria-pressed={activeTab === "tech"}
            className={`h-12 rounded-lg border transition-all duration-300 ${
              activeTab === "tech"
                ? "bg-purple-700 text-white border-purple-700"
                : "border-purple-500 text-pink-500 hover:bg-violet-950"
            }`}
          >
            Frontend Skills
          </button>
        </section>

        {/* Skills Content */}

        <section
          className="px-5 md:px-10 pb-20"
          aria-live="polite"
        >
          {activeTab === "certificates" && <Certificates />}
          {activeTab === "tech" && <Tech />}
          {activeTab === "mech" && <Mech />}
        </section>

      </main>
    </>
  );
};

export default Skills;