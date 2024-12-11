/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosaClaro: '#FFC1CC',
        rosaEscuro: '#FF8AAE',
        azulClaro: '#87CEEB',
        azulEscuro: '#4682B4',
        marrom: '#8B4513',
        preto: '#333333',
        branco: '#fefefe'
      },
    },
  },
  plugins: [],
}