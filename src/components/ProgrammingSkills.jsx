import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

  return (
    <div ref={ref} className="space-y-0 font-open mt-10 md:mt-0 mb-14 md:mb-20">
      <h2 className="text-[20px] md:text-[20px] lg:text-[28px] tracking-[4px] md:tracking-[4px] lg:tracking-[5px] uppercase font-bold font-syne text-black pb-6">// Programming Skills</h2>

      {skillsData.map(({ name, percent }) => (
        <div key={name} className='mr-0 md:mr-6 lg:mr-0'>
          <div className="flex justify-between mb-1">
            <span className="text-[18px] font-semibold text-[#2E2E2E]">{name}</span>
            <span className="text-[16px] font-medium text-[#4B6EFF]">{percent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[#4B6EFF] h-3 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: inView ? `${percent}%` : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingSkills;
