/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/*.tsx',
    './src/**/*.tsx',
    './src/**/**/*.tsx',
  ],
  theme: {
    extend: {
      height: {
        '60vh': '60vh',
      },
      minHeight: {
        '60vh': '60vh',
      },
    },
  },
  plugins: [],
}

