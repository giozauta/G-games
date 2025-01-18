import React, { useState } from "react";

const HoverTopThreeBox = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;

    const x = e.clientX - centerX; // Distance from center X
    const y = e.clientY - centerY; // Distance from center Y

    const rotateX = -(y / box.height) * 30; // Exaggerated tilt
    const rotateY = (x / box.width) * 30;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
      transition: "transform 0.1s ease", // Smooth motion
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease", // Smooth reset
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="w-64 h-64 bg-gradient-to-br from-blue-500 to-teal-400 text-white text-2xl font-bold flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me!
      </div>
    </div>
  );
};

export default HoverTopThreeBox;
