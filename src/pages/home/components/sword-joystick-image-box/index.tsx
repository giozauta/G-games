import React, { useEffect, useState } from "react";

const SwordJoystickImageBox: React.FC = () => {
  const [isMovingLeft, setIsMovingLeft] = useState(false);
  const [isMovingRight, setIsMovingRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const swordStart = 600; // when animation starts
      const swordEnd = 2000; // when animation ends

      const joystickStart = 1500;
      const joystickEnd = 2400;
      console.log(currentScroll);

      setIsMovingLeft(currentScroll > swordStart && currentScroll < swordEnd);
      setIsMovingRight(
        currentScroll > joystickStart && currentScroll < joystickEnd,
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden   2xl:flex justify-end absolute top-[1240px] h-[1500px] w-full z-[-1] ">
      <div
        className={`w-80 h-80 flex justify-center items-center transition-transform duration-500 ${
          isMovingLeft
            ? `translate-x-[-1600px] rotate-180`
            : "translate-x-0 rotate-0"
        }`}
      >
        <img src="/images/sword.png" alt="sword" />
      </div>

      <div
        className={` absolute bottom-[220px]  right-[175px] w-60 flex justify-center items-end transition-transform duration-500 ${
          isMovingRight
            ? `translate-x-[140px] translate-y-[140px] `
            : "translate-x-0 translate-y-0"
        }`}
      >
        <img src="/images/joystick.webp" alt="joystick" />
      </div>
    </div>
  );
};

export default SwordJoystickImageBox;
