import React from 'react'
import Container from './Container'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <section className='bg-violet-800 py-2'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className="">
            <p className="mb-2 flex gap-2 items-center text-white text-[16px]"><FaEnvelope className="text-[16px] text-white" />mdshohagmia53200@gmail.com</p>
          </div>
          <div className="">
            <p className="mb-2 text-[16px] flex gap-2 items-center text-white"><FaMapMarkerAlt className="text-[16px] text-white" /> Jamalpur, Mymensingh, Bangladesh</p>
          </div>
          <div className="">
            <p className="mb-2 flex gap-2 items-center text-white text-[16px]"><FaPhoneAlt className="text-[16px] text-white" /> +880 1731 378743</p>
          </div>
          <div>
            <h2 className='text-md text-white font-semibold font-open'>Icon Setup</h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Header