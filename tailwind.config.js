/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', // Changed from 'media' to 'selector'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
        accent: '#e74c3c',
      },
    },
  },
  plugins: [],
}
