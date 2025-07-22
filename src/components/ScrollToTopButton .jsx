// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6"; // You can change icon

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`
        fixed bottom-2 right-2 z-[9999]
        bg-red-600 text-white text-xl p-2 rounded-full
        cursor-pointer hover:scale-110
        transition-all duration-500 ease-in-out shadow-lg
        ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4 pointer-events-none"}
      `}
    >
      <FaAnglesUp />
    </div>
  );
};

export default ScrollToTopButton;