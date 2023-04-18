/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         ubuntu: ["Ubuntu Condensed", "sans-serif"],
      },
      extend: {},
   },
   plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
