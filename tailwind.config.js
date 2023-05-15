/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  mode: "jit",
  theme: {
    extend: {
      colors: {
        bgqpay: "##FFFFFF",

        dimWhite: "rgba(255, 255, 255, 0.7)",

        qpayone: "#EC1B24",
        qpaytwo: "#F99E1B",
        qpaygradient:
          "linear-gradient(90deg, rgba(236,27,36,1) 0%, rgba(249,159,31,1) 35%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      vxs: "380px",
      xs: "425px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-animated"),
    require("tailwind-scrollbar"),
  ],
};
