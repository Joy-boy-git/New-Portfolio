import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import html from "./skill icons/html-5.png";
import css from "./skill icons/css-3.png";
import bootstrap from "./skill icons/bootstrap.png";
import javascript from "./skill icons/java-script.png";
import python from "./skill icons/python.png";
import react from "./skill icons/atom.png";
import tailwind from "./skill icons/tailwind.png";
import sql from "./skill icons/sql.png";

const technologies = [
  {
    name: "HTML5",
    image: html,
    description:
      "Semantic HTML5 for building accessible and SEO-friendly web pages.",
  },
  {
    name: "CSS3",
    image: css,
    description:
      "Modern CSS3 including Flexbox, Grid, animations, and responsive layouts.",
  },
  {
    name: "Bootstrap",
    image: bootstrap,
    description:
      "Bootstrap framework for responsive and mobile-first web development.",
  },
  {
    name: "JavaScript",
    image: javascript,
    description:
      "JavaScript ES6+ for interactive, dynamic, and modern web applications.",
  },
  {
    name: "Python",
    image: python,
    description:
      "Python programming for automation, backend development, and scripting.",
  },
  {
    name: "React.js",
    image: react,
    description:
      "React.js for building fast, reusable, and component-based user interfaces.",
  },
  {
    name: "Tailwind CSS",
    image: tailwind,
    description:
      "Tailwind CSS utility-first framework for creating modern responsive websites.",
  },
  {
    name: "MySQL",
    image: sql,
    description:
      "MySQL database for storing, managing, and querying relational data.",
  },
];

const Tech = () => {
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
      aria-labelledby="frontend-skills-heading"
    >
      <h2
        id="frontend-skills-heading"
        className="text-3xl md:text-4xl font-bold text-center text-purple-500 mb-4"
      >
        Frontend Development Skills
      </h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        My frontend development skills include HTML5, CSS3, JavaScript,
        React.js, Tailwind CSS, Bootstrap, Python, and MySQL. I use these
        technologies to build responsive, accessible, and high-performance web
        applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <article
            key={tech.name}
            className="rounded-xl border border-white bg-white/10 p-6 text-center hover:scale-105 transition duration-300"
            data-aos="zoom-in-up"
          >
            <img
              src={tech.image}
              alt={`${tech.name} logo`}
              loading="lazy"
              className="w-20 h-20 mx-auto object-contain"
            />

            <h3 className="mt-5 text-lg font-semibold text-cyan-300">
              {tech.name}
            </h3>

            <p className="mt-3 text-sm text-gray-300 leading-6">
              {tech.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tech;