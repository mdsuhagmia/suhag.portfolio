import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 90 },
  { name: 'Bootstrap', percent: 85 },
  { name: 'Tailwind CSS', percent: 92 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React.js', percent: 78 },
];

const ProgrammingSkills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,  
  });

  const slideInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref} className="space-y-0 font-open mt-10 md:mt-0 mb-14 md:mb-20">
      <motion.h2 
        variants={slideInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-[17px] sm:text-[20px] md:text-[20px] lg:text-[28px] tracking-[4px] md:tracking-[4px] lg:tracking-[5px] uppercase font-bold font-syne text-gray-200 pb-6">// Programming Skills</motion.h2>

      {skillsData.map(({ name, percent }) => (
        <div key={name} className='mr-0 md:mr-6 lg:mr-0'>
          <motion.div  
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between mb-1">
            <span className="text-[14px] sm:text-[18px] font-semibold text-gray-400">{name}</span>
            <span className="text-[12px] sm:text-[16px] font-medium text-gray-400">{percent}%</span>
          </motion.div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 sm:mb-4">
            <div
              className="bg-[#4B6EFF] h-2 sm:h-3 rounded-full transition-all duration-3000 ease-in-out"
              style={{ width: inView ? `${percent}%` : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingSkills;
