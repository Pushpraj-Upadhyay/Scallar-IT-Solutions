/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary": "#512da8",
      },
      backgroundColor: {
        "primary": "#512da8",
      }
    },
  },
  plugins: [],
}

