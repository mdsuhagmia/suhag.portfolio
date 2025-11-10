import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const cursorPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const dotOffset = useRef({ x: 0, y: 0 });

  const circleRadius = 24;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      const centerX = cursorPos.current.x || e.clientX;
      const centerY = cursorPos.current.y || e.clientY;

      let offsetX = (e.clientX - centerX) * 0.2;
      let offsetY = (e.clientY - centerY) * 0.2;

      const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      const maxDistance = circleRadius - 6;
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
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.01;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.01;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }

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
  className="fixed pointer-events-none z-[99999] w-12 h-12 rounded-full flex items-center justify-center border border-l-red-600 border-t-cyan-400 border-r-fuchsia-500 border-b-yellow-500"
>
  <div
    ref={dotRef}
    className="w-3 h-3 bg-fuchsia-500 rounded-full shadow-lg" 
    style={{ mixBlendMode: 'difference' }} 
  ></div>
</div>
  );
};

export default CustomCursor;
