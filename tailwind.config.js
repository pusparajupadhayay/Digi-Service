/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript files in the pages directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include your components directory
    "./app/**/*.{js,jsx,ts,tsx}" // If using the `app` directory for layouts (e.g., in Next.js 13+)
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {}, // Use this section to extend the default Tailwind theme
  },
  plugins: [], // Add any Tailwind CSS plugins here
};
