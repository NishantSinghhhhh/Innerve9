/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        mx: '1390px',
      },
    },
    fontFamily: {
      angrybirds: ["AngryBirds", "sans-serif"],
      tthoves: ["TTHoves", "sans-serif"],// Add the custom font
      },
  },
  plugins: [],
}