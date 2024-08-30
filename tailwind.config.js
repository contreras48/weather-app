/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // Negro Suave para textos principales
        secondary: '#374151', // Gris Oscuro para detalles secundarios
        accent: '#F97316', // Naranja Suave para elementos destacados
        highlight: '#3B82F6', // Azul Claro para acentos
        neutral: {
          light: '#F3F4F6', // Fondo Principal claro
          medium: '#E5E7EB', // Fondo intermedio
          dark: '#6B7280', // Gris Oscuro para iconos y detalles
        },
        white: '#FFFFFF', // Blanco
        border: '#D1D5DB', // Gris claro para bordes
      },
    },
  },
  plugins: [],
}

