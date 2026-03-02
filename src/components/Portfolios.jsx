import React from 'react'
import orevi from '../assets/electroselling.png'
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
              className="text-4xl sm:text-5xl font-extrabold font-open text-white">My Portfolio</motion.h2>
            <motion.p
              variants={slideInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-md sm:text-lg max-w-[300px] mx-auto text-gray-400 mt-4">
              Selected works I've built for clients and personal growth.
            </motion.p>
          </div>
          <div
            className="grid gap-x-4 lg:gap-x-6 grid-cols-1 md:grid-cols-3">
            <motion.div
              variants={slideInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className='pb-8'
            >
              <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden max-w-md mx-auto">
                <div className="h-70 md:h-50 lg:h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                  <img src={orevi} alt="" className='h-full w-full' />
                </div>
                <div className="py-6 px-6 md:px-2 lg:px-6">
                  <h3 className="text-[19px] sm:text-[21px] md:text-[15px] lg:text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Electro Selling Website</h3>
                  <p className="text-sm md:text-[12px] lg:text-sm text-gray-300 mb-3">Node.js, Express.js, MongoDB And React.js</p>
                  <a href="https://electroselling.com" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className='pb-8'
            >
              <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden max-w-md mx-auto">
                <div className="h-70 md:h-50 lg:h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                  <img src={hekto} alt="" className='h-full w-full' />
                </div>
                <div className="py-6 px-6 md:px-2 lg:px-6">
                  <h3 className="text-[19px] sm:text-[21px] md:text-[15px] lg:text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Hekto E-commerce Website</h3>
                  <p className="text-sm md:text-[12px] lg:text-sm text-gray-300 mb-3">HTML, CSS, Tailwind CSS and React JS</p>
                  <a href="https://hekto-e-commerce-new.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="group rounded-3xl bg-[#111827] shadow-sm hover:shadow-sm hover:shadow-amber-50 transition duration-300 overflow-hidden max-w-md mx-auto sm:col-span-2 sm:col-start-1 sm:mx-auto">
                <div className="h-70 md:h-50 lg:h-60 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-gray-600 text-xl font-bold">
                  <img src={shopex} alt="" className='h-full w-full' />
                </div>
                <div className="py-6 px-6 md:px-2 lg:px-6">
                  <h3 className="text-[19px] sm:text-[21px] md:text-[15px] lg:text-[21px] font-bold mb-1 group-hover:text-cyan-400 transition duration-300">Shopex E-commerce Website</h3>
                  <p className="text-sm md:text-[12px] lg:text-sm  text-gray-300 mb-3">HTML, CSS, Tailwind CSS and React JS</p>
                  <a href="https://shopexs.netlify.app/" target='_blank' className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">Live Preview →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>

  )
}

export default Portfolios