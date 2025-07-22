import React, { useState } from 'react'
import './banner.css'
import Container from './Container'
import banner from '../assets/banner.png'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import download from '../assets/download.png'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {

  let [sayHello, setSayHello] = useState(false)

  return (
    <section id='banner' className={`bg-[url(./assets/bg.jpg)] bg-contian  bg-cover bg-center bg-no-repeat`}>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
          <div className='col-span-5 text-center md:text-left text-white relative'>
            <div className='hidden md:block absolute top-[20%] left-[80%]'>
              <img src={download} alt="" className='animate-spin [animation-duration:5s]' />
            </div>
            <h2 className='text-2xl text-[#80db66] tracking-[7px] font-semibold font-open pb-2 pt-[110px] md:pt-[140px]'>HELLO I'M</h2>
             <h1 className='text-[50px] md:text-[50px] lg:text-[78px] text-white leading-[87px] font-bold font-open pb-1 lg:pb-3'>Suhag Mia</h1>
             
            <div className='md:flex pb-2 pt-0 lg:pt-2'>
              <div className='pb-2 md:pb-0'>
                <h3 className='text-[18px] md:text-[16px] lg:text-[23px] text-white font-semibold font-open pr-2'>A Passionate </h3>
              </div>
              <div className=''>
                <TypeAnimation
              sequence={[
                'Frontend Developer', 
                1000,                   
                'I love React.js',
                1000,
                'Tailwind CSS Expert',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-[23px] md:text-[18px] lg:text-[24px] text-[#80db66] font-syne font-bold"
              repeat={Infinity}
            />
              </div>
            </div>
            
            {sayHello && (
              <p className="text-lg text-white animate-fade-in leading-relaxed pb-4 md:text-[12px]">
                Hello! I'm Suhag Mia — A passionate Frontend Developer with a focus on building clean, responsive, and user-friendly web experiences. <br />
              <a href="mailto:mdshohagmia53200@gmail.com" className="text-[#ffef0c] underline hover:text-[#ff9898f6] transition"> 👉 Email me here</a>
              </p>
            )}
            <div className='pb-8 md:pb-16 pt-2'>
              <button className='text-white bg-[#63a451] text-[20px] px-[40px] py-[13px] rounded-[5px] font-semibold font-open hover:text-amber-200 hover:bg-blue-900 transition-all ease-in-out duration-500' onClick={()=>setSayHello(!sayHello)}>SAY HELLO</button>
            </div>
          </div>
          <div className='col-span-6 relative pt-0 md:pt-20'>
            <img src={banner} alt="" className='relative w-full h-full pt-2 md:pt-6 z-[7]' />
            <div id='customani' className='absolute top-[62%] md:top-[66%] lg:top-[65%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]  h-[160px] w-[160px] md:h-[230px] md:w-[230px] lg:h-[270px] lg:w-[270px] rounded-full bg-[#3b3c46] opacity-[0.529] z-[6]'></div>
          </div>
          <div className='hidden md:block'>
           <div className='text-white flex justify-end '>
            <div className='pt-[140px]'>
              <ul>
                <li><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://www.facebook.com/mdsuhagmia.35573557" target='_blank'><FaFacebookF /></a></li>
                <li><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="#"><FaTwitter /></a></li>
                <li><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://www.linkedin.com/in/md-suhag-mia-00b2b9376/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCI3qKxtMSjiQ1JgI%2FP%2B%2BfA%3D%3D" target='_blank'><FaLinkedin /></a></li>
                <li><a className='text-[26px] border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://github.com/mdsuhagmia" target='_blank'><FaGithub /></a></li>
              </ul>
            </div>
           </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner