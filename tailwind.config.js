/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        primary: '#DB1371',
        secondary: '#00B3FE',
      },

      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif']
      },

      dropShadow: {
        'neonBlue': [
          '0px 0px 5px #00B3FE', 
          '0px 0px 7px #00B3FE', 
          '0px 0px 3px #00B3FE'
        ],

        'neonPink': [
          '0px 0px 5px #DB1371', 
          '0px 0px 7px #DB1371', 
          '0px 0px 3px #DB1371'
        ]
      },

      keyframes: {
        flicker: {
          '0%': { opacity: 0.99 },
          '19.99%': { opacity: 0.99 },
          '20%': { opacity: 0.4 },
          '21.99%': { opacity: 0.4 },
          '22%': { opacity: 0.99 },
          '62.99%': { opacity: 0.99 },
          '63%': { opacity: 0.4 },
          '63.99%': { opacity: 0.4 },
          '64%': { opacity: 0.99 },
          '64.99%': { opacity: 0.99 },
          '65%': { opacity: 0.4 },
          '69.99%': { opacity: 0.4 },
          '70%': { opacity: 0.99 },
          '100%': { opacity: 0.99 },
        },
      },

      animation: {
        'flickerFast': 'flicker 1s linear infinite',
        'flickerSlow': 'flicker 3s linear infinite',
      },
    },
  },

  plugins: [],
}