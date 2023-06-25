/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "28px",
    },
    extend: {
      colors: {
        primary: "#F5F5F5",
        // abu muda
        secondary: "#E0DEDE",
        // abu lebih tua
        tertiary: "#FB2576",
        // pink
        quaternary: "#413F42",
        // tua banget
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
