/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "creamyWhite": "#d8d2bf"
      },
      screens: {
        "xsm":{"min": "170px"},
        "mdm":{"max": "768px"},
        "smm": {"max": "400px"}
      }
    },
  },
  plugins: [],
}

