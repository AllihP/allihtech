/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  '#4169E1',
          cyan:  '#06bdef',
          deep:  '#0c54ab',
          red:   '#CE1126',
          black: '#040404',
        },
      },
      fontFamily: {
        heading: ['Syne', 'DM Sans', 'sans-serif'],
        body:    ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs2': '0.75rem',
        'hero': 'clamp(2.2rem, 5vw, 3.5rem)',
      },
      borderRadius: {
        'pill': '20px',
        '2xl': '1rem',
      },
      boxShadow: {
        'card':   '0 4px 10px rgba(0,0,0,0.10)',
        'card-hover': '0 8px 20px rgba(0,0,0,0.15)',
        'profile': '0 6px 20px rgba(0,0,0,0.08)',
        'profile-hover': '0 12px 30px rgba(65,105,225,0.15)',
        'blue-glow': '0 0 15px rgba(65,105,225,0.3)',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        countUp:  { from: { opacity: '0' }, to: { opacity: '1' } },
        scrollTicker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'ticker':   'scrollTicker 18s linear infinite',
      },
    },
  },
  plugins: [],
}
