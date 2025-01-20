/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "chakra-petch": ["Chakra Petch", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #000000, #0D1800)",
        "custom-gradient2": "linear-gradient(to top, #000000, #0D1800)",
        "custom-gradient-RightTop-leftBottom":
          "linear-gradient(to bottom left, #0C1700, black)",
        bar: "url('/images/bar.png')",
        "bar-mobile": "url('/images/bar-mobile.png')",
        sword: "url('/images/sword.png')",
      },
      colors: {
        blue2: "#6ec1e4",
        orange2: "#F75A1D",
        green2: "#60D600",
        white2: "#ecece8",
        creemy: "#F2F2F2",
        creemy2: "#fcfbf5",
        lightBlue: "#CBD9DF",
      },
      animation: {
        "like-animation": "like 0.5s ease-in-out", //ანიმაცია
        "caret-blink": "caret-blink 1s ease-in-out infinite",
        rotate3d: "rotate3d 4s infinite linear", //ჯილდოს 3d ეფექტისთვის ანიმაცია
        scalePulse: "scalePulse 2s infinite ease-in-out", //ვარსკვლავის 3დ ეფექტის ანიმაცია
      },
      keyframes: {
        like: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" }, // გაიზრდება
          "100%": { transform: "scale(1)" }, // დაბრუნდება ორიგინალზე
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        rotate3d: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        scalePulse: {
          "0%, 100%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
