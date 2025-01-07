/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{ts,tsx}"),
    join(__dirname, "./app/**/*.{ts,tsx}"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
