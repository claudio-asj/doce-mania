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
      animation: {
        'grow-once': 'grow 1s ease-out forwards',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}