import React from 'react'
import Container from './Container'
import ProgrammingSkills from './ProgrammingSkills'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' className='bg-[url(./assets/about.jpg)]'>
      <Container>
        <div className='text-center md:text-left'>
           <h2 className='text-[28px] text-[#e24c4cea] pt-[60px] md:pt-[80px] lg:pt-[100px] font-bold font-open pb-2'>About Me</h2>
           <h4 className='text-[#000000] text-[40px] font-bold pb-16'>Know Me More</h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 lg:gap-20'>
          <div className=''>
            <h2 className='text-black text-[24px] md:text-[22px] lg:text-[28px] tracking-[5px] uppercase font-bold font-syne pb-6'>// Biography</h2>
            <p className='text-[#010102af] text-[14px] md:text-[15px] lg:text-[20px] font-medium font-syne leading-[30px] pb-2 pr-0 md:pr-4 lg:pr-0'>Hi, my name is Suhag Mia. I’ve spent most of my waking hours for the last one years programing. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.</p>
            <div className='mt-8 mb-16 md:mb-12'>
              <a
                className='flex items-center gap-2 text-white bg-blue-500 py-4 px-6 rounded-xl text-2xl font-bold font-open hover:bg-blue-950 transition-all ease-in-out duration-500 w-fit'
                href="/MD_Suhag_Mia_CV.pdf"
                download="md-suhag-mia-cv"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>
          <div className='pt-8 md:pt-0'>
            <h2 className='text-black text-[24px] md:text-[22px] lg:text-[28px] tracking-[4px] md:tracking-[5px] uppercase font-bold font-syne pb-6'>// Personal Details</h2>

            <div class="pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Name:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Md. Suhag Mia</p>
            </div>

            <div class="pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Occupation:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Frontend Developer</p>
            </div>

            <div class="pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Email:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">mdshohagmia53200@gmail.com</p>
            </div>

            <div class="pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Phone:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">+8801731378743</p>
            </div>

            <div class="pb-3 md:pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Address:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Jamalpur Sadar, Mymensingh</p>
            </div>

            <div class="pb-8 md:pb-3 flex items-center gap-2 lg:gap-6">
              <h3 class="text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Nationality:</h3>
              <p class="text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Bangladeshi</p>
            </div>

          </div>
          

          <ProgrammingSkills/>

         <div className='pb-16 md:pb-0'>
            <h2 className="text-[24px] md:text-[22px] lg:text-[28px] tracking-[6px] uppercase font-bold font-syne text-black pb-4">// Interests</h2>
            <ul className="space-y-2 pl-5 text-[12px] md:text-[13px] lg:text-[18px] text-[#2E2E2E] font-open font-semibold leading-7 list-disc marker:text-[#4B6EFF]">
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

export default About