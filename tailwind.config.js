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
        "custom-gradientLight": "linear-gradient(to bottom, #ffffff, #F65A1D)",
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
        white2:"#ecece8",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
