/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: '#D6C6FF',
          200: '#b0afb4ff'
        },
        dark: {
          100: '#1E1E1E',
          200: '#121212'
        },
        acent: "#AB8BFF"
      }
    },
  },
  plugins: [],
}

