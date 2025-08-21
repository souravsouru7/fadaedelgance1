/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-delayed-2': 'float-delayed-2 10s ease-in-out infinite',
        'float-delayed-3': 'float-delayed-3 12s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) rotate(2deg)',
          },
          '50%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(20px) rotate(-2deg)',
          },
        },
        'float-delayed': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '25%': {
            transform: 'translateY(-15px) rotate(5deg) scale(1.05)',
          },
          '50%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '75%': {
            transform: 'translateY(15px) rotate(-5deg) scale(0.95)',
          },
        },
        'float-delayed-2': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '25%': {
            transform: 'translateY(-10px) rotate(-3deg) scale(1.1)',
          },
          '50%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '75%': {
            transform: 'translateY(10px) rotate(3deg) scale(0.9)',
          },
        },
        'float-delayed-3': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '25%': {
            transform: 'translateY(-12px) rotate(4deg) scale(1.08)',
          },
          '50%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
          },
          '75%': {
            transform: 'translateY(12px) rotate(-4deg) scale(0.92)',
          },
        },
      },
      colors: {
        'deep-space': '#0F0F23',
        'cosmic-purple': '#1A0B2A',
        'stellar-blue': '#16213E',
      },
    },
  },
  plugins: [],
}
