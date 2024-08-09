/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: { 
        PrimarebgColor : "#1a59a9"
      },
    },
  },
  plugins: [],
}

