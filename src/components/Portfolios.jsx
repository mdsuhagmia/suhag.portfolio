import React from 'react'
import orevi from '../assets/orevi.png'
import hekto from '../assets/hekto.png'
import shopex from '../assets/shopex.png'
import Container from './Container'
import { motion } from 'framer-motion'

const Portfolios = () => {
  const slideInUp = {
    initial: { y: 50, scale: 0.8 },
    animate: { y: 0, scale: 1 },
  };
  return (
    <section id="portfolio" className="bg-indigo-950 py-24 text-white">
      <Container>
        <div className="">
          <div className="text-center mb-16">
            <motion.h2 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold font-open text-white">My Portfolio</motion.h2>
            <motion.p 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-400 mt-4">
              Selected works I've built for clients and personal growth.
            </motion.p>
          </div>

          <motion.div 
          variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          className="grid gap-x-4 sm:grid-cols-2 md:grid-cols-3">

            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={orevi} alt="" className='h-full w-full' />
              </div>
              <div className="p-6">
                <h3 className="text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Orebi E-commerce Website</h3>
                <p className="text-sm text-gray-300 mb-3">HTML, CSS, Tailwind CSS and React JS</p>
                <a href="https://orebi-new.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>


            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={hekto} alt="" className='h-full w-full' />
              </div>
              <div className="p-6">
                <h3 className="text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Hekto E-commerce Website</h3>
                <p className="text-sm text-gray-300 mb-3">HTML, CSS, Tailwind CSS and React JS</p>
                <a href="https://hekto-e-commerce-new.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>


            <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden sm:col-span-2 sm:col-start-1 sm:mx-auto md:col-span-1 md:col-start-auto">
              <div className="h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                <img src={shopex} alt="" className='h-full w-full sm:max-w-[360px]' />
              </div>
              <div className="p-6">
                <h3 className="text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Shopex E-commerce Website</h3>
                <p className="text-sm text-gray-300 mb-3">HTML, CSS, Tailwind CSS and React JS</p>
                <a href="https://shopexs.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>

  )
}

export default Portfolios