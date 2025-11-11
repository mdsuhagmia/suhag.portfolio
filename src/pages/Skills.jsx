import React from 'react'
import Container from '../components/Container'
import ProgrammingSkills from '../components/ProgrammingSkills'
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from 'framer-motion';


const Skills = () => {
  
  const slideInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className='bg-[#103f5e] pt-14 sm:pt-20 md:pt-26 pb-8'>
      <Container>
        <motion.h4 
          variants={slideInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        className='text-[#ffffff] text-[40px] font-bold pb-2 text-center font-open'>My Skills</motion.h4>
        <motion.p
          variants={slideInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        className='text-gray-300 text-sm sm:text-lg md:text-xl text-center mb-2 sm:mb-16 max-w-3xl mx-auto font-open'>
          I specialize in modern Front-End Development, focusing on crafting high-performance, responsive user interfaces using React JS and Next JS. My passion lies in bridging the gap between design and functionality.
        </motion.p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16'>
          <ProgrammingSkills />
          <div className='pb-4 sm:pb-16 lg:pb-0'>
            <motion.h2 
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-[24px] md:text-[28px] tracking-[6px] uppercase font-bold font-syne text-gray-200 pb-4">// Interests</motion.h2>
            <ul className="space-y-2 sm:space-y-4 text-[11px] sm:text-[16px] md:text-[18px] text-gray-400 font-open font-semibold leading-7 marker:text-[#4B6EFF]">
              <motion.div 
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              className='flex items-center gap-x-1 sm:gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Responsive Web Design & Mobile-First Development</li>
              </motion.div>
              <motion.div 
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Modern JavaScript Frameworks (React.js, Next.js)</li>
              </motion.div>
              <motion.div 
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Clean UI Design with a Focus on Usability</li>
              </motion.div>
              <motion.div 
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Reusable Components & Design Systems</li>
              </motion.div>
              <motion.div
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Performance Optimization & Lazy Loading</li>
              </motion.div>
              <motion.div
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Dark Mode Interfaces & Micro Animations</li>
              </motion.div>
              <motion.div 
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Open-Source Contribution & Git Collaboration</li>
              </motion.div>
              <motion.div
                variants={slideInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className='flex items-center gap-x-2'>
                <HiBadgeCheck className='text-blue-400 text-[15px] sm:text-[19px] md:text-[21px]' />
                <li>Learning Tools like Tailwind CSS & Framer Motion</li>
              </motion.div>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills