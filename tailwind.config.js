/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // This is where you define your fonts
      fontFamily: {
        // This 'sans' key becomes the DEFAULT font for your site
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        // This 'heading' key is a special class for titles
        'heading': ['Space Grotesk', 'sans-serif'],
      },
      // And your smaller font sizes
      fontSize: {
        'xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'sm': ['0.75rem', { lineHeight: '1rem' }],
        'base': ['0.75rem', { lineHeight: '1.25rem' }],
        'lg': ['0.875rem', { lineHeight: '1.5rem' }],
        'xl': ['1rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.125rem', { lineHeight: '1.75rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.25rem', { lineHeight: '1' }],
        '6xl': ['3rem', { lineHeight: '1' }],
        '7xl': ['3.75rem', { lineHeight: '1' }],
        '8xl': ['4.5rem', { lineHeight: '1' }],
        '9xl': ['6rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};