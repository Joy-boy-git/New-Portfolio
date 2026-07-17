import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import solid from "./assets/solidworks.png";
import cad from "./assets/cad.png";
import fusion from "./assets/fusion.png";

const mechanicalSkills = [
  {
    name: "SolidWorks",
    image: solid,
    description:
      "3D CAD modeling, assemblies, sheet metal design, and mechanical product design.",
  },
  {
    name: "AutoCAD",
    image: cad,
    description:
      "2D drafting, technical drawings, engineering layouts, and dimensioning.",
  },
  {
    name: "Fusion 360",
    image: fusion,
    description:
      "3D modeling, product design, rendering, simulation, and CAD/CAM workflows.",
  },
];

const Mech = () => {
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
      aria-labelledby="mechanical-skills-heading"
    >
      <h2
        id="mechanical-skills-heading"
        className="text-3xl md:text-4xl font-bold text-center text-purple-500 mb-4"
      >
        Mechanical Engineering Skills
      </h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        My mechanical engineering expertise includes CAD design, 3D modeling,
        technical drafting, product development, and engineering software such
        as SolidWorks, AutoCAD, and Fusion 360.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mechanicalSkills.map((skill) => (
          <article
            key={skill.name}
            className="rounded-xl border border-white bg-white/10 p-6 text-center hover:scale-105 transition duration-300"
            data-aos="zoom-in-up"
          >
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              loading="lazy"
              className="w-24 h-24 mx-auto object-contain"
            />

            <h3 className="mt-6 text-xl font-semibold text-cyan-300">
              {skill.name}
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-6">
              {skill.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Mech;