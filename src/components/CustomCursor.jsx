import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const cursorPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const dotOffset = useRef({ x: 0, y: 0 });

  const circleRadius = 24; // outer circle radius (w-12 h-12 -> 48px / 2)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Dot offset based on movement direction
      const centerX = cursorPos.current.x || e.clientX;
      const centerY = cursorPos.current.y || e.clientY;

      let offsetX = (e.clientX - centerX) * 0.2;
      let offsetY = (e.clientY - centerY) * 0.2;

      // Clamp dot inside circle
      const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      const maxDistance = circleRadius - 6; // 6px margin for dot
      if (distance > maxDistance) {
        const scale = maxDistance / distance;
        offsetX *= scale;
        offsetY *= scale;
      }

      dotOffset.current.x = offsetX;
      dotOffset.current.y = offsetY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth cursor movement
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.01;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.01;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Dot slides inside circle
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotOffset.current.x}px, ${dotOffset.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[99999] w-12 h-12 rounded-full flex items-center justify-center border border-[#d420d1]"
    >
      {/* Dot */}
      <div
        ref={dotRef}
        className="w-3 h-3 bg-[#f00] rounded-full shadow-lg"
      ></div>
    </div>
  );
};

export default CustomCursor;
