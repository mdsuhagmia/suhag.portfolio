import React from 'react'
import Container from './Container'
import { motion } from 'framer-motion';

const Services = () => {
  const slideInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const cartHeight = {
    initial: { y: 50, scale: 0.6 },
    animate: { y: 0, scale: 1 },
  }
  return (
    <section id='service' className='bg-gray-100 py-16 md:py-20'>
      <Container>
        <div className='text-center'>
          <motion.h4 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-[20px] md:text-[25px] font-bold font-syne text-[#180946] pb-1 pt-0 sm:pt-8">Service</motion.h4>
          <motion.h2 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[50px] font-bold font-syne text-[#085ea4] pb-6 md:pb-12">What I do</motion.h2>
        </div>

       <div>
          <div className="pb-0 md:pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-open">
              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Responsive Web Design</h4>
                <p className="text-[#555] text-[16px]">Design clean, mobile-first websites that look great on all devices.</p>
              </motion.div>

              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Frontend Development</h4>
                <p className="text-[#555] text-[16px]">Build interactive UIs with HTML, CSS, JavaScript, React.js and Next.js</p>
              </motion.div>

              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Tailwind & Bootstrap UI</h4>
                <p className="text-[#555] text-[16px]">Create fast and scalable UI using Tailwind CSS and Bootstrap.</p>
              </motion.div>

              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Pixel-Perfect Design</h4>
                <p className="text-[#555] text-[16px]">Turn design mockups into high-fidelity, pixel-perfect interfaces.</p>
              </motion.div>

              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">SPA Development</h4>
                <p className="text-[#555] text-[16px]">Develop smooth, fast single-page applications using React.js.</p>
              </motion.div>

              <motion.div 
              variants={cartHeight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="p-5 max-w-md mx-auto border rounded-2xl shadow-md hover:shadow-xl transition-all duration-100 hover:border-x-2 hover:border-red-700">
                <h4 className="text-[20px] font-semibold text-black mb-2">Dark Mode UI</h4>
                <p className="text-[#555] text-[16px]">Implement modern dark/light mode features for better UI.</p>
              </motion.div>
            </div>
         </div>
       </div>
      </Container>
    </section>
  )
}

export default Services