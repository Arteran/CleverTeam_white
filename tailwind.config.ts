import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'emil': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      colors: {
        'clever-green': '#8DC63F',
        'clever-green-dark': '#7CB342',
        'clever-green-darker': '#558B2F',
        'clever-light-green': '#F1F8E9',
        'clever-lightest-green': '#F9FCF4',
        'clever-black': '#0A0A0A',
        'clever-dark': '#1A1A1A',
        'clever-gray-dark': '#333333',
        'clever-gray': '#555555',
        'clever-gray-light': '#888888',
        'clever-border': '#CCCCCC',
        'clever-border-light': '#DDDDDD',
        'clever-border-lighter': '#EEEEEE',
        'clever-bg-gray': '#F5F5F5',
        'clever-red': '#E53935'
      },
      fontFamily: {
        'heading': ['Archivo', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['monospace'],
      },
      screens: {
        'xs': '480px',
        'sm': '600px',
        'md': '900px',
        'lg': '1200px',
        'xl': '1400px'
      }
    },
  },
  plugins: [],
} satisfies Config;
