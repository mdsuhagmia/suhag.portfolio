import React from 'react';
import Container from './Container';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Abouts = () => {

  const slideInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const slideInBottom = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='about' className='bg-[url(./assets/about.jpg)] pb-8 overflow-x-hidden'>
      <Container>
        <div className='text-center md:text-left'>
          <motion.h2
            className='text-[28px] text-[#e24c4cea] pt-[60px] md:pt-[80px] lg:pt-[100px] font-bold font-open pb-1 sm:pb-2'
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.h4
            className='text-[#000000] text-[40px] font-bold pb-8 sm:pb-12 md:pb-16'
            variants={slideInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Know Me More
          </motion.h4>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 lg:gap-20'>

          <div>
            <motion.h2
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className='text-black text-[24px] md:text-[22px] lg:text-[28px] tracking-[5px] uppercase font-bold font-syne pb-2 sm:pb-6'>// Biography</motion.h2>
            <motion.p
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className='text-[#010102af] text-[14px] md:text-[15px] lg:text-[20px] font-medium font-syne leading-[24px] sm:leading-[30px] md:sm:leading-[28px] lg:sm:leading-[30px] pb-2 pr-0 md:pr-4 lg:pr-0'>Hi, my name is Suhag Mia. I’ve spent most of my waking hours for the last one years programing. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.</motion.p>
            <motion.div className='mt-8 mb-8 sm:pb-10 md:mb-12'
              variants={slideInBottom}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <a
                className='flex items-center gap-2 text-white bg-blue-500 py-4 px-6 rounded-xl text-xl sm:text-2xl font-bold font-open hover:bg-blue-950 transition-all ease-in-out duration-500 w-fit'
                href="/MD_Suhag_Mia_CV.pdf"
                download="md-suhag-mia-cv"
              >
                <FaDownload />
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            className='pt-8 md:pt-0'
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-black text-[20px] md:text-[22px] lg:text-[28px] tracking-[4px] md:tracking-[5px] uppercase font-bold font-syne pb-6'>// Personal Details</h2>

            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Name</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Md. Suhag Mia</p>
              </div>
            </div>
            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Occupation</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Frontend Developer</p>
              </div>
            </div>
            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Email</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">mdshohagmia53200@gmail.com</p>
              </div>
            </div>
            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Phone</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">+8801731378743</p>
              </div>
            </div>
            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Address</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Jamalpur Sadar, Mymensingh</p>
              </div>
            </div>
            <div class="pb-3 flex items-center justify-between">
              <div className='w-[30%]'>
                <h3 class="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]">Nationality</h3>
              </div>
              <div className='w-[10%]'>
                <h4 className='text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] text-black font-semibold font-open min-w-[120px]'>:</h4>
              </div>
              <div className='w-[60%]'>
                <p class="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] text-[#00000090] font-semibold font-open">Bangladeshi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Abouts;