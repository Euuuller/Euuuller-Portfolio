/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        display: ['"Outfit"', "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#000000", // Pure Black
          secondary: "#0A0A0A", // Very dark grey for cards
        },
        accent: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
