/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "Rossans":['Rossans'],
      "Poppins":['Poppins'],
      "Open":['Open Sans']
    },
    extend: {
      backgroundImage: {
        'header': "url('/src/components/Header/images/Header.png')",
      },
      colors: {
        'body': '#F3F3F3',
      },
    },
  },
  plugins: [],
}