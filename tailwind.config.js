/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Rossans: ["Rossans"],
      Poppins: ["Poppins"],
      Open: ["Open Sans"],
      Garamond: ["Eb Garamond"],
      Nunito: ["Nunito"],
    },
    extend: {
      backgroundImage: {
        header: "url('/src/components/Header/images/Header.png')",
      },
      colors: {
        body: "#F3F3F3",
        primary: "#2C5364",
        secondary: "#0F2027",
        auxiliary: "#2C5364",
      },
    },
  },
  plugins: [],
};
