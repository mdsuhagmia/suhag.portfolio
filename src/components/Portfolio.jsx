import React from 'react'
import project from '../assets/project.png'
import commers from '../assets/commers.png'
import blog from '../assets/blog.png'
import Container from './Container'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-950 py-24 text-white">
      <Container>
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-white">My Portfolio</h2>
            <p className="text-lg text-gray-400 mt-4">
              Selected works I've built for clients and personal growth.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={project} alt="" className='h-full w-full' />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Portfolio Website</h3>
                <p className="text-sm text-gray-300 mb-3">Dark mode, animations</p>
                <a href="https://petroildesign.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>


            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={commers} alt="" className='h-full w-full' />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition duration-300">E-commerce Website</h3>
                <p className="text-sm text-gray-300 mb-3">React, Tailwind, JavaScript</p>
                <a href="https://sprightly-dolphin-d01670.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>


            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden sm:col-span-2 sm:col-start-1 sm:mx-auto md:col-span-1 md:col-start-auto">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={blog} alt="" className='h-full w-full sm:max-w-[360px]' />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Blog App</h3>
                <p className="text-sm text-gray-300 mb-3">React, Tailwind, JavaScript</p>
                <a href="https://luxury-kelpie-15c405.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

  )
}

export default Portfolio