/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      angrybirds: ["AngryBirds", "sans-serif"],
      tthoves: ["TTHoves", "sans-serif"],// Add the custom font
      },
  },
  plugins: [],
}