/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ECF8FF",
        dark: "#141D26",
        text: "#101C45",
        block: "#203271",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        dm: ["DM Sans", "ui-dm-sans"],
      },
    },
  },
  plugins: [],
};
