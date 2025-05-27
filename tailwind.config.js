/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure all files are included
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      backgroundColor: ["hover"],
      textColor: ["hover"],
    },
  },
  plugins: [],
};
