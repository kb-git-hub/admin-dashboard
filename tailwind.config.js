/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'contentContainer': '1fr 4fr 2fr',

      }


    },
  },
  plugins: [],
}
