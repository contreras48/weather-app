/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F4F6', // Fondo Principal claro
        secondary: '#38C1A3', // Fondo para card
        accend: '#FFFFFF',
        primaryText: '#FFFFFF',
        secondaryText: '#111827'
      },
    },
  },
  plugins: [],
}

