/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandstone: "#E6D5C3", // Earthy background tones
        charcoal: "#1A1614",  // Rich dark framing and contrast
        cream: "#F5F2EB",     // Soft contrast surface text
        mutedGold: "#D4AF37", // Accent color for active states/highlights
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'], // Display Serif
        sans: ['Inter', 'system-ui', 'sans-serif'],        // Technical & body sans-serif
      },
    },
  },
  plugins: [],
}
