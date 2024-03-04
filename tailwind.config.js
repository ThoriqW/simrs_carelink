/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F6F1F1",
        "button": "#146C94",
        "hover": "#AFD3E2",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/background/bg-login.png')" 
      }
    },
  },
  plugins: [],
}

