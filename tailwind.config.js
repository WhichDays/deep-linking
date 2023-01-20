/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        whichdayslight: {
          light: "#d9effd",
          lower: "#96b8de",
          upper: "#6384a7",
          dark: "#12273f",
          highlight: "#8efdb2"
        },
      },
    },
  },
  plugins: [],
}
