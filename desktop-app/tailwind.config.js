/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#264653',
          light: '#3a5f6b',
          dark: '#1e6b5c',
          darker: '#1a2f36',
          darkest: '#0f1c21',
        },
        'persian-green': {
          DEFAULT: '#2a9d8f',
          light: '#3db5a0',
          dark: '#1e6b5c',
        },
        saffron: {
          DEFAULT: '#e9c46a',
          light: '#edc878',
          dark: '#b8984a',
        },
        'sandy-brown': {
          DEFAULT: '#f4a261',
          light: '#f6b074',
          dark: '#c7824b',
        },
        'burnt-sienna': {
          DEFAULT: '#e76f51',
          light: '#ea8166',
          dark: '#b85a42',
        },
        light: '#e2e8f0',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
};

export default config;
