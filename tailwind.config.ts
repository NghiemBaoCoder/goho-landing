import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3ef',
        sand: '#d9cbbf',
        stone: '#a89b90',
        ink: '#111111',
        smoke: '#7b7470'
      },
      boxShadow: {
        soft: '0 28px 80px rgba(17, 17, 17, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
