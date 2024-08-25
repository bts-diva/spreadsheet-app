/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        // Custom colors
        colors: {
          'custom-blue': '#1DA1F2',
          'custom-gray': '#F3F4F6',
          'custom-dark': '#1F2937',
        },
        // Custom spacing
        spacing: {
          'custom-xs': '0.5rem',
          'custom-md': '1.5rem',
          'custom-lg': '2rem',
        },
        // Custom font sizes
        fontSize: {
          'custom-sm': '0.75rem', // Small size
          'custom-md': '1rem',    // Medium size
          'custom-lg': '1.25rem', // Large size
        },
        // Custom font family
        fontFamily: {
          'custom-sans': ['Open Sans', 'sans-serif'],
          'custom-serif': ['Merriweather', 'serif'],
        },
      },
    },
    plugins: [],
  }
  