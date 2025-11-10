import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { TiThMenu } from 'react-icons/ti'
import { RiCloseLargeLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from 'react-icons/fa'
import { IoTime } from "react-icons/io5";


const Menu = () => {
  let [openMenu, setOpenMenu] = useState(false)
  let menuRef = useRef()

  useEffect(()=>{
    let handleClickOutsite = (e)=>{
      if(openMenu && !menuRef.current.contains(e.target))
        setOpenMenu(false)
    }
    document.addEventListener("mousedown", handleClickOutsite)
    return ()=> document.removeEventListener("mousedown", handleClickOutsite)
  },[openMenu])

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (openMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [openMenu]);


  return (
    <nav className={`${scrolled == true ? "fixed top-0 z-[999] bg-[#e6f0f5] shadow-md transition-all ease-in-out duration-1000 py-2 w-full" : "bg-[#c2eafd]"} py-2`}>
      <Container>
        <div className='relative flex justify-between items-center'>
          <div className=''>
            <Link to={"/"} target='_top'>
              <img src={logo} alt="" className='w-40' />
            </Link>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4 lg:gap-6'>
              <li>
                <NavLink to={"/"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/skills"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>Skills</NavLink>
              </li>
              <li>
                <NavLink to={"/service"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} target='_top' className={({isActive}) => `text-md lg:text-md font-semibold font-open hover:text-indigo-500 relative after:absolute after:left-0 after:-bottom-[6px] after:content-[''] after:bg-[#2b91eb] after:h-[3px] after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500 ${isActive ? "text-red-500" : "text-indigo-950" }`}>Contact</NavLink>
                </li>
            </ul>
          </div>

          <div className='block md:hidden'>
            <button onClick={() => setOpenMenu(!openMenu)} className='flex items-center'>
              {openMenu ? "" : <TiThMenu className='text-3xl text-indigo-950 cursor-pointer' />}
            </button>
          </div>
        </div>

        <div className=''>
          {openMenu && (
            <div
              className="fixed h-full w-full inset-0 bg-[#000000a2] z-[999]"
              onClick={() => setOpenMenu(false)}
            ></div>
          )}
          <div ref={menuRef} className={`absolute left-0 top-0 bg-[#ffffff] shadow border-r-2 border-r-[#01ff3c] w-[80%] max-h-screen overflow-auto transition-all duration-700 ease-in-out z-[9999] ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}>
            {openMenu && (
              <div className='px-4'>
                <div className='block md:hidden text-right mt-2 mr-2'>
                  <div className='flex items-center justify-between'>
                    <Link to={"/"} target='_top'>
                      <img src={logo} alt="" className='w-36' />
                    </Link>
                    <button onClick={() => setOpenMenu(!openMenu)} >
                      {openMenu ? <RiCloseLargeLine className='text-3xl text-violet-950 cursor-pointer' /> : ""}
                    </button>
                  </div>
                </div>
                <div className='pt-8'>
                  <ul className=''>
                    <li className='pb-2'>
                      <NavLink to={"/"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>Home</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/about"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>About</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/skills"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>Skills</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/service"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>
                        Service
                      </NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/portfolio"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>Portfolio</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to={"/contact"} target='_top' className={({ isActive }) => `text-lg font-semibold font-open hover:text-indigo-500 ${isActive ? "text-red-500" : "text-indigo-950"}`}>Contact</NavLink>
                    </li>
                  </ul>
                  <div className='pt-2'>
                    <h2 className='text-lg font-bold font-syne text-violet-700 pb-2'>Contact Info</h2>
                    <div className='pb-2'>
                      <a href="https://www.google.com/maps?q=Jamalpur,+Mymensingh,+Bangladesh" target='_blank' className='flex items-center gap-x-2'>
                        <FaLocationDot className='text-[14px] text-violet-950' />
                        <p className='text-[14px] text-violet-950 font-medium font-nunito' >Jamalpur, Bangladesh</p>
                      </a>
                    </div>
                    <div className='flex items-center gap-x-2 pb-2'>
                      <MdMarkEmailUnread />
                      <p className='text-[12px]'>mdshohagmia53200@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <FaPhone />
                      <p>01731378743</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <IoTime />
                      <p>Everyday, 10am - 2am</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu