import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from '../assets/logo5.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">

            {/* Logo & About */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-indigo-500 mb-4">
                <img src={logo} alt="" className="w-[200px]" />
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I'm Suhag Mia, a passionate Frontend Developer focused on crafting clean, responsive, and user-friendly web experiences using modern technologies like React.js, Tailwind CSS, and JavaScript.
              </p>
            </div>

            {/* Quick Links */}
            <div className="hidden md:block md:w-2/6 md:ms-auto text-center">
              <h3 className="text-xl md:text-[16px] lg:text-xl font-semibold mb-4 text-gray-200 mt-2">Quick Links</h3>
              <ul className="space-y-[1px] text-gray-400">
                <li>
                  <a href="#home" className="hover:text-indigo-500 transition text-[14px]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-indigo-500 transition text-[14px]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-500 transition text-[14px]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-500 transition text-[14px]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-indigo-500 transition text-[14px]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-indigo-500 transition text-[14px]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-6 mt-2 text-gray-200">Contact Info</h3>
              <p className="mb-2 md:text-[14px] text-gray-400 flex gap-2 items-center"><FaMapMarkerAlt className="text-gray-400 text-[17px]" /> Jamalpur, Mymensingh, Bangladesh</p>
              <p className="mb-2 text-gray-400 flex gap-2 items-center"><FaPhoneAlt className="text-gray-400 text-md" /> +880 1731 378743</p>
              <p className="mb-2 text-gray-400 flex gap-2 items-center"><FaEnvelope className="text-gray-400 text-md" /> mdshohagmia53200@gmail.com</p>
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://www.facebook.com/mdsuhagmia.35573557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={22} />
                </a>
                <a
                  href="https://x.com/mdsuhagmia1280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={22}  />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-suhag-mia-00b2b9376/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCI3qKxtMSjiQ1JgI%2FP%2B%2BfA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={22} />
                </a>
                <a
                  href="https://github.com/mdsuhagmia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}

        </div>
      </Container>
        <div className="bg-gray-500 text-center text-gray-200 text-sm select-none flex items-center justify-center py-4">
          <p className="text-[18px] pl-1">&copy; {new Date().getFullYear()} Md Suhag Mia. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;