import React from 'react'
import Container from '../components/Container'
import ProgrammingSkills from '../components/ProgrammingSkills'

const Skills = () => {
  return (
    <section className='bg-[#103f5e] pt-26 pb-8'>
      <Container>
        <h4 className='text-[#fffb00] text-[40px] font-bold pb-16 text-center font-open'>My Skills</h4>
        <div className='grid grid-cols-2 gap-x-12'>
          <ProgrammingSkills />
          <div className='pb-16 md:pb-0'>
            <h2 className="text-[24px] md:text-[22px] lg:text-[28px] tracking-[6px] uppercase font-bold font-syne text-gray-200 pb-4">// Interests</h2>
            <ul className="space-y-4 pl-5 text-[12px] md:text-[13px] lg:text-[18px] text-gray-400 font-open font-semibold leading-7 list-disc marker:text-[#4B6EFF]">
              <li>Responsive Web Design & Mobile-First Development</li>
              <li>Modern JavaScript Frameworks (React.js, Next.js)</li>
              <li>Clean UI/UX Design with a Focus on Usability</li>
              <li>Reusable Components & Design Systems</li>
              <li>Performance Optimization & Lazy Loading</li>
              <li>Dark Mode Interfaces & Micro Animations</li>
              <li>Open-Source Contribution & Git Collaboration</li>
              <li>Learning Tools like Tailwind CSS & Framer Motion</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills