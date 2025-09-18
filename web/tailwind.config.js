/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#264653',
          light: '#3a5f6b',
          dark: '#1a2f36',
          darker: '#1a2f36',
          darkest: '#0f1c21',
        },
        persian: {
          DEFAULT: '#2a9d8f',
          dark: '#1e6b5c',
          darker: '#134f44',
        },
        saffron: {
          DEFAULT: '#e9c46a',
          dark: '#b8984a',
        },
        sandy: {
          DEFAULT: '#f4a261',
          dark: '#c7824b',
        },
        burnt: {
          DEFAULT: '#e76f51',
          dark: '#b85a42',
        },
        dark: {
          slate: '#1e293b',
          midnight: '#0f172a',
          steel: '#374151',
          emerald: '#065f46',
          amber: '#92400e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'particle-float': 'particleFloat 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(42, 157, 143, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(42, 157, 143, 0.8)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 30px rgba(42, 157, 143, 0.6)',
        'glow-lg': '0 0 40px rgba(42, 157, 143, 0.8)',
      },
    },
  },
  plugins: [],
  safelist: [
    'from-charcoal-darkest',
    'via-charcoal-darker', 
    'to-charcoal-dark',
    'from-persian',
    'to-saffron',
    'from-sandy',
    'to-burnt',
    'bg-gradient-to-br',
    'bg-gradient-to-r'
  ]
};
