import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import reactCert from "./assets/react js.pdf";
import cadCert from "./assets/Berlin CAD certificate.pdf";
import pythonCert from "./assets/python certificate.pdf";
import internshipCert from "./assets/Edureka - Internship Certificate.pdf";
import cssCert from "./assets/css.pdf";
import bootstrapCert from "./assets/css,bootstrap.pdf";
import fusionCert from "./assets/fusion certificate.pdf";
import solidworksCert from "./assets/solidworks cerificate.pdf";

const certificates = [
  {
    title: "React.js Certificate",
    file: reactCert,
    description: "React.js Frontend Development Certification",
  },
  {
    title: "AutoCAD Certificate",
    file: cadCert,
    description: "AutoCAD Professional Certification",
  },
  {
    title: "Python Certificate",
    file: pythonCert,
    description: "Python Programming Certification",
  },
  {
    title: "Edureka Internship",
    file: internshipCert,
    description: "Web Development Internship Certificate",
  },
  {
    title: "CSS Certificate",
    file: cssCert,
    description: "CSS Web Design Certification",
  },
  {
    title: "Bootstrap Certificate",
    file: bootstrapCert,
    description: "Bootstrap Responsive Web Design",
  },
  {
    title: "Fusion 360 Certificate",
    file: fusionCert,
    description: "Fusion 360 CAD Certification",
  },
  {
    title: "SolidWorks Certificate",
    file: solidworksCert,
    description: "SolidWorks Mechanical Design Certification",
  },
];

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-gray-950 border border-violet-500 p-8"
      aria-labelledby="certificate-heading"
    >
      <h2
        id="certificate-heading"
        className="text-3xl md:text-4xl text-center font-bold text-purple-500 mb-4"
      >
        Professional Certificates
      </h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        These certifications demonstrate my expertise in React.js,
        JavaScript, Python, AutoCAD, SolidWorks, Fusion 360,
        Bootstrap, CSS, and web development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((certificate, index) => (
          <article
            key={index}
            className="rounded-xl border border-purple-500 overflow-hidden hover:scale-105 transition"
            data-aos="zoom-in-up"
          >
            <iframe
              src={certificate.file}
              title={certificate.title}
              loading="lazy"
              className="w-full h-64"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-500">
                {certificate.title}
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                {certificate.description}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-purple-400 hover:text-pink-400"
              >
                View Certificate →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;