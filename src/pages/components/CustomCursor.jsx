import React, { useState, useEffect } from "react";
import cursorIcon from "@/assets/cursorIcon.svg";
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-500 ease-out border-[2px] border-gray-400 h-8 w-8 rounded-full"
        style={{
          transform: `translate(${position.x - 16}px,${position.y - 16}px)`,
        }}
      ></div>
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-100 ease-out bg-[#f49e12] h-2 w-2 rounded-full"
        style={{
          transform: `translate(${position.x - 4}px,${position.y - 4}px)`,
        }}
      ></div>
    </>
  );
}

export default CustomCursor;
