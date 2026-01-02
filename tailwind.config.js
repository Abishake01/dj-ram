/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#bf40bf',
          blue: '#00d4ff',
          pink: '#ff10f0',
          green: '#39ff14',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 10px rgba(191, 64, 191, 0.5), 0 0 20px rgba(191, 64, 191, 0.5), 0 0 30px rgba(191, 64, 191, 0.5)',
          },
          '100%': { 
            textShadow: '0 0 20px rgba(191, 64, 191, 0.8), 0 0 30px rgba(191, 64, 191, 0.8), 0 0 40px rgba(191, 64, 191, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
