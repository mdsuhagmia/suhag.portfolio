import React from 'react'
import Container from './Container'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='bg-violet-800 py-3 hidden md:block'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className="">
            <p className="flex gap-2 items-center text-white text-[16px]"><FaEnvelope className="text-[16px] text-white" />mdshohagmia53200@gmail.com</p>
          </div>
          <div className="">
            <p className="text-[16px] flex gap-2 items-center text-white"><FaMapMarkerAlt className="text-[16px] text-white" /> Jamalpur, Mymensingh, Bangladesh</p>
          </div>
          <div className="">
            <p className="flex gap-2 items-center text-white text-[16px]"><FaPhoneAlt className="text-[16px] text-white" /> +880 1731 378743</p> 
          </div>
          <div>
            <Link to={"/contact"} className='text-md text-white font-semibold font-open bg-[#e632aa76] hover:bg-violet-400 px-8 py-2 rounded-2xl'>
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Header