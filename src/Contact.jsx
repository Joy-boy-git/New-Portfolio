import React, { useEffect, useRef, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from '@emailjs/browser'
import insta from './skill icons/instagram.png'
import facebook from './skill icons/facebook.png'
import linkedin from './skill icons/linkedin.png'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  useEffect(() => {
    AOS.init({ disable: "phone", duration: 700, easing: "ease-out-cubic" })
    AOS.refresh()
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <div className='border border-violet-500 min-h-screen w-full bg-gray-950'>

      <h1 className='mt-10 text-violet-500 text-center m-5 text-3xl md:text-5xl font-bold' data-aos="zoom-in-up">
        Contact Me
      </h1>

      <div className='w-full flex justify-center items-center py-8 px-2 md:px-0' data-aos="zoom-in-up">
        <div className='w-full max-w-lg md:max-w-2xl border border-purple-500 rounded-xl bg-gray-950 shadow-lg'>

          <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-6 md:gap-8 p-4 md:p-10'>

            <input
              data-aos="zoom-in-up"
              type="text"
              name="from_name"          // must match your EmailJS template variable
              required
              className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full rounded-xl backdrop-blur-md bg-white/10'
              placeholder='Give me your name'
            />

            <input
              data-aos="zoom-in-up"
              type="email"
              name="reply_to"           // must match your EmailJS template variable
              required
              className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full rounded-xl backdrop-blur-md bg-white/10'
              placeholder='Enter your E-mail'
            />

            <textarea
              data-aos="zoom-in-up"
              name="message"            // must match your EmailJS template variable
              required
              placeholder='Your message'
              className='border border-purple-500 text-base md:text-lg p-3 md:p-4 text-purple-500 w-full h-32 md:h-40 rounded-xl backdrop-blur-md bg-white/10'
            />

            {/* Submit button + feedback */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className='border border-purple-500 text-purple-500 py-3 px-6 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 disabled:opacity-50'
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className='text-green-400 text-center text-sm'>
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className='text-red-400 text-center text-sm'>
                Something went wrong. Please try again.
              </p>
            )}

            {/* Social links */}
            <div>
              <h1 className='text-purple-500 mb-4 text-lg md:text-xl font-semibold'>Connect with me</h1>
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>

                <a href="https://www.instagram.com/_berlin_222_/?hl=en">
                  <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                    <img src={insta} alt="Instagram" className='w-8 h-8 mb-2' />
                    <h1 className='text-violet-500 text-base md:text-lg'>Instagram</h1>
                  </div>
                </a>

                <a href="https://www.facebook.com/berlin.thorsp">
                  <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                    <img src={facebook} alt="Messenger" className='w-8 h-8 mb-2' />
                    <h1 className='text-violet-500 text-base md:text-lg'>Messenger</h1>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/berlin-sp/">
                  <div className='border border-purple-500 p-4 flex flex-col items-center rounded-lg bg-gray-950 w-full md:w-45 md:hover:scale-110 hover:scale-105'>
                    <img src={linkedin} alt="LinkedIn" className='w-8 h-8 mb-2' />
                    <h1 className='text-violet-500 text-base md:text-lg'>LinkedIn</h1>
                  </div>
                </a>

              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact