/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,jsx}",
    "./components/**/*.{html,jsx}",
    "./src/**/*.{html,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
      },
      fontFamily: {
        Dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
