/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2b2344",
        red: "#f66a6b",
        pink: "#fac5c5",
        "light-pink": "#fef0f0",
        "lightest-pink": "#fef6f6",
        grey: "#ededed",
        "dark-grey": "#757575",
        "darkest-grey": "#3a3a3a",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #b9aed6 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #f9b3b3 14.53%, #fac6c6 69.36%, #9686c1 117.73%)",
      }),
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        YesevaOne: ["Yeseva One", "cursive"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
