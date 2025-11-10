import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-14">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-3xl font-bold text-indigo-500 mb-4">
                <Link to={"/"} target="_top">
                  <img src={logo} alt="" className="w-[200px] brightness-0 invert-100 " />
                </Link>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I'm Suhag Mia, a passionate Frontend Developer focused on crafting clean, responsive, and user-friendly web experiences using modern technologies like React.js, Tailwind CSS, and JavaScript.
              </p>
            </div>
            <div className="">
              <h3 className="text-xl md:text-[16px] lg:text-xl font-semibold mb-4 text-gray-200 mt-2">Quick Links</h3>
              <ul className="space-y-[1px] text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition text-[14px]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition text-[14px]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition text-[14px]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition text-[14px]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition text-[14px]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-6 mt-2 text-gray-200">Contact Info</h3>
              <div className="group hover:underline">
                <a href="https://www.google.com/maps?q=Jamalpur,+Mymensingh,+Bangladesh" target="_blank" rel="noopener noreferrer" className="mb-2 md:text-[14px] text-gray-400 flex gap-2 items-center group-hover:text-white"><FaMapMarkerAlt className="text-gray-400 text-[17px] group-hover:text-white" /> Jamalpur, Mymensingh, Bangladesh</a>
              </div>
              <div className="group hover:underline">
                <a href="tel:+880 1731 378743" className="mb-2 text-gray-400 flex gap-2 items-center group-hover:text-white"><FaPhoneAlt className="text-gray-400 text-md group-hover:text-white" /> +880 1731 378743</a>
              </div>
              <div className="group hover:underline">
                <a href="mailto:mdshohagmia53200@gmail.com" className="mb-2 text-gray-400 flex gap-2 items-center group-hover:text-white"><FaEnvelope className="text-gray-400 text-md group-hover:text-white" />mdshohagmia53200@gmail.com</a>
              </div>
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://www.facebook.com/mdsuhagmia.35573557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={22} />
                </a>
                <a
                  href="https://x.com/mdsuhagmia1280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={22}  />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-suhag-mia-00b2b9376/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCI3qKxtMSjiQ1JgI%2FP%2B%2BfA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={22} />
                </a>
                <a
                  href="https://github.com/mdsuhagmia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
        <div className="border-t border-t-gray-700 text-center text-gray-400 text-sm select-none flex items-center justify-center py-4">
          <p className="text-[18px] pl-1">&copy; {new Date().getFullYear()} Md Suhag Mia. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;