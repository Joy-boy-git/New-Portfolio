import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

import insta from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import whatsapp from "./assets/whatsapp.png"; // Add WhatsApp icon

const Contact = () => {
  const formRef = useRef();

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    const formData = new FormData(formRef.current);

    const name = formData.get("from_name");
    const email = formData.get("reply_to");
    const message = formData.get("message");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(() => {
        setStatus("success");

        const whatsappMessage = `Hello Berlin,

Name: ${name}
Email: ${email}

Message:
${message}`;

        const whatsappURL = `https://wa.me/917639144640?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");

        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Berlin S P | React Developer Portfolio</title>

        <meta
          name="description"
          content="Contact Berlin S P for React.js, frontend web development, portfolio websites, responsive UI design, and collaboration opportunities."
        />

        <meta
          name="keywords"
          content="Contact Berlin SP, React Developer, Frontend Developer, Portfolio Website, Web Designer, JavaScript, Tailwind CSS"
        />

        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <main className="min-h-screen bg-gray-950 border border-violet-500">
        {/* Header */}

        <header className="text-center py-12">
          <h1
            className="text-4xl md:text-6xl font-bold text-violet-500"
            data-aos="zoom-in-up"
          >
            Contact Me
          </h1>

          <p
            className="mt-5 max-w-2xl mx-auto text-gray-300 px-5"
            data-aos="fade-up"
          >
            Interested in working together or have a project in mind?
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        {/* Contact Form */}

        <section className="flex justify-center px-5 pb-20">
          <div className="w-full max-w-2xl rounded-xl border border-purple-500 bg-gray-950 shadow-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-purple-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="from_name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-purple-500 bg-white/10 p-4 text-purple-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-purple-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="reply_to"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-purple-500 bg-white/10 p-4 text-purple-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-purple-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-purple-500 bg-white/10 p-4 text-purple-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-xl border border-purple-500 py-3 text-purple-400 transition hover:bg-purple-500 hover:text-white disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <div className="text-center">
                {status === "success" && (
                  <p className="text-green-400">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400">
                    Unable to send your message. Please try again.
                  </p>
                )}
              </div>
            </form>

            {/* Social Media */}

            <section className="px-8 pb-10">
              <h2 className="text-2xl font-semibold text-purple-500 mb-6">
                Connect with Me
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <a
                  href="https://www.instagram.com/_berlin_222_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-purple-500 p-5 hover:scale-105 transition text-center"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="mx-auto w-10 h-10"
                  />
                  <p className="mt-3 text-violet-500">Instagram</p>
                </a>


                <a
                  href="https://www.linkedin.com/in/berlin-sp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-purple-500 p-5 hover:scale-105 transition text-center"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="mx-auto w-10 h-10"
                  />
                  <p className="mt-3 text-violet-500">LinkedIn</p>
                </a>

                <a
                  href="https://wa.me/917639144640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-purple-500 p-5 hover:scale-105 transition text-center"
                >
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="mx-auto w-10 h-10"
                  />
                  <p className="mt-3 text-violet-500">WhatsApp</p>
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;