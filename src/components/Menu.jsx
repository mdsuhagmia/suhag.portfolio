import React, { useEffect, useState } from 'react'
import Container from './Container'
import logo from '../assets/logo5.png'
import { TiThMenu } from 'react-icons/ti'
import { RiCloseLargeLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  let [openMenu, setOpenMenu] = useState(false)

  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 90);
  //   }

  //   window.addEventListener("scroll", handleScroll);
    
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className={`py-2 w-full z-[99999] bg-[#063346] absolute 
        ${scrolled && "fixed bg-[#382372] shadow-md text-white transition-all ease-in-out duration-300"}`}>
      <Container>
        <div className='relative flex justify-between items-center'>
          <div className=''>
            <Link to={"/"} target='_top'>
              <img src={logo} alt="" className='w-50' />
            </Link>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4 lg:gap-6'>
              <li>
                <NavLink to={"/"} className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7] ${isActive ? "text-blue-500" : "text-white" }`}>Home</NavLink>
              </li>
              <li>
                <Link to={"/about"} className='text-white text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7]'>About</Link>
              </li>
              <li>
                <Link to={"/service"} className='text-white text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7]'>Service</Link>
              </li>
              <li>
                <Link to={"/pricing"} className='text-white text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7]'>Pricing</Link>
              </li>
              <li>
                <Link to={"/portfolio"} className='text-white text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7]'>Portfolio</Link>
              </li>
              <li>
                <Link to={"/contact"} className='text-white text-md lg:text-md font-semibold font-open hover:text-[#ffffffc7]'>Contact</Link>
                </li>
            </ul>
          </div>

          <div className='block md:hidden'>
            <button onClick={() => setOpenMenu(!openMenu)} className='flex items-center'>
              {openMenu ? "" : <TiThMenu className='text-3xl text-white cursor-pointer' />}
            </button>
          </div>
        </div>

        <div className={`absolute left-0 top-0 bg-blue-500 transition-all duration-700 ease-in-out z-[9999] ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className='block md:hidden text-right mt-2 mr-2'>
            <button onClick={() => setOpenMenu(!openMenu)} >
              {openMenu ? <RiCloseLargeLine className='text-3xl text-white cursor-pointer' /> : ""}
            </button>
          </div>
          {openMenu && (
            <div className='w-[200px] text-center'>
              <ul className=''>
                <li className='pb-2'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]'
                    href="#banner"
                    onClick={() => setOpenMenu(false)}>
                    Home
                  </a>
                </li>
                <li className='pb-2'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]'
                    href="#about"
                    onClick={() => setOpenMenu(false)}>
                    About
                  </a>
                </li>
                <li className='pb-2'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]'
                    href="#service"
                    onClick={() => setOpenMenu(false)}>
                    Service
                  </a>
                </li>
                <li className='pb-2'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]'
                    href="#pricing"
                    onClick={() => setOpenMenu(false)}>
                    Pricing
                  </a>
                </li>
                <li className='pb-2'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]' href="#portfolio"
                    onClick={() => setOpenMenu(false)}>
                    Portfolio
                  </a>
                </li>
                <li className='pb-6'>
                  <a
                    className='text-white text-xl font-semibold font-open hover:text-[#ffffffc7]'
                    href="#contact"
                    onClick={() => setOpenMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Menu