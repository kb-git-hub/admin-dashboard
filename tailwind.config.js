/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'contentContainer': '1fr 5fr 2fr',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        'main': 'repeat(9, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
