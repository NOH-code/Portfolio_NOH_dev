/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#3b82f6',
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#333333'
        }
      }
    }
  },
  plugins: [],
}
