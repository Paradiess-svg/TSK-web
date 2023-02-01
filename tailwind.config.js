/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat',sans-serif",
        comfort: "'Comfortaa', cursive"
      },
      colors: {
        warna1: 'rgba(52, 152, 219, 1)',
        warna2: 'rgba(41, 128, 185, 1)',
        warna3: 'rgba(52, 73, 94, 1)',
        warna4: 'rgba(241, 196, 15, 1)',
        warna5: 'rgba(243, 156, 18, 1)',
        warna6: 'rgba(44, 52, 135, 1)'
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    plugins: [],
  }
}
