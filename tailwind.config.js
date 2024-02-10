/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button": "#146C94"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/background/bg-login.png')" 
      }
    },
  },
  plugins: [],
}

