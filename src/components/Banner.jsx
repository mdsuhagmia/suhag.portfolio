import React, { useState } from 'react'
import './banner.css'
import Container from './Container'
import banner from '../assets/banner.png'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import download from '../assets/download.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Banner = () => {

  let [sayHello, setSayHello] = useState(false)

  let slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1},
  }

  let slideInUp = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  let slideInRight = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <section id='banner' className={`bg-[url(./assets/bg.jpg)] bg-contian  bg-cover bg-center bg-no-repeat overflow-x-hidden`}>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
          <motion.div className='col-span-5 text-center md:text-left text-white relative'
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5}}
          transition={{ duration: 1 }}
          >
            <motion.div className='hidden md:block absolute top-[20%] left-[80%]'
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            >
              <img src={download} alt="" className='animate-spin [animation-duration:5s]' />
            </motion.div>
            <h2 className='text-2xl text-[#80db66] tracking-[7px] font-semibold font-open pb-1 sm:pb-2 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[140px]'>HELLO I'M</h2>
             <h1 className='text-[50px] md:text-[50px] lg:text-[78px] text-white leading-[87px] font-bold font-open pb-1 lg:pb-3'>Suhag Mia</h1>
             
            <div className='md:flex pb-2 pt-0 lg:pt-2'>
              <div className='pb-2 md:pb-0'>
                <h3 className='text-[18px] md:text-[15px] lg:text-[23px] text-white font-semibold font-open pr-2'>A Passionate </h3>
              </div>
              <div className=''>
                <TypeAnimation
              sequence={[
                'Frontend Developer', 
                1000,                   
                'I love React.js & Next.js',
                1000,
                'Tailwind CSS Expert',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-[23px] md:text-[16px] lg:text-[24px] text-[#80db66] font-syne font-bold"
              repeat={Infinity}
            />
              </div>
            </div>
            
            {sayHello && (
              <motion.p className="text-lg text-white animate-fade-in leading-relaxed pb-4 md:text-[12px]"
                variants={paragraphVariants}
                initial="hidden"
                animate={sayHello ? "visible" : "hidden"}
                transition={{ duration: 0.3 }}
              >
                Hello! I'm Suhag Mia — A passionate Frontend Developer with a focus on building clean, responsive, and user-friendly web experiences. <br />
              <a href="mailto:mdshohagmia53200@gmail.com" className="text-[#ffef0c] underline hover:text-[#ff9898f6] transition"> 👉 Email me here</a>
              </motion.p>
            )}
            <div className='pb-8 md:pb-16 pt-2'>
              <button className='text-white bg-[#63a451] text-[20px] px-[40px] py-[13px] rounded-[5px] font-semibold font-open hover:text-amber-200 hover:bg-blue-900 transition-all ease-in-out duration-500 cursor-pointer' onClick={()=>setSayHello(!sayHello)}>SAY HELLO</button>
            </div>
          </motion.div>
          <motion.div className='col-span-6 relative pt-0 md:pt-20'
           variants={slideInUp}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 1 }}
          >
            <img src={banner} alt="" className='relative w-full h-full pt-2 md:pt-6 z-[7]' />
            <div id='customani' className='absolute top-[62%] md:top-[66%] lg:top-[65%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]  h-[160px] w-[160px] md:h-[230px] md:w-[230px] lg:h-[270px] lg:w-[270px] rounded-full bg-[#3b3c46] opacity-[0.529] z-[6]'></div>
          </motion.div>
          <div className='hidden md:block'>
           <div className='text-white flex justify-end '>
            <div className='pt-[140px]'>
              <ul>
                <motion.li 
                 variants={slideInRight}
                 initial="initial"
                 whileInView="animate"
                 viewport={{ once: false, amount: 0.5 }}
                 transition={{ duration: 0.4 }}
                ><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://www.facebook.com/mdsuhagmia.35573557" target='_blank'><FaFacebookF /></a></motion.li>
                <motion.li
                 variants={slideInRight}
                 initial="initial"
                 whileInView="animate"
                 viewport={{ once: false, amount: 0.5 }}
                 transition={{ duration: 0.6 }}
                ><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://x.com/mdsuhagmia1280" target='_blank'><FaTwitter /></a></motion.li>
                <motion.li
                 variants={slideInRight}
                 initial="initial"
                 whileInView="animate"
                 viewport={{ once: false, amount: 0.5 }}
                 transition={{ duration: 0.9 }}
                ><a className='text-2xl border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://www.linkedin.com/in/md-suhag-mia-00b2b9376/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCI3qKxtMSjiQ1JgI%2FP%2B%2BfA%3D%3D" target='_blank'><FaLinkedin /></a></motion.li>
                <motion.li
                 variants={slideInRight}
                 initial="initial"
                 whileInView="animate"
                 viewport={{ once: false, amount: 0.5 }}
                 transition={{ duration: 1.2 }}
                ><a className='text-[26px] border-2 border-[#ccd3d933] inline-block py-2 px-3 rounded-xl hover:scale-110 hover:border-y-blue-400 hover:border-x-amber-500 transition-all ease-in-out duration-600 mb-2' href="https://github.com/mdsuhagmia" target='_blank'><FaGithub /></a></motion.li>
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