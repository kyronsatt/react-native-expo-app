/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/index.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Customize your application theme here
      colors: {
        primary: {
          10: "#C98FC5",
          30: "#8F0D87",
          60: "#6D0A67",
          90: "#2B0829",
        },
      },
      fontSize: {
        "paragraph-small": "8px",
        "paragraph-medium": "12px",
        "paragraph-large": "16px",
        "heading-small": "20px",
        "heading-medium": "32px",
        "heading-large": "48px",
      },
    },
  },
  plugins: [],
};
