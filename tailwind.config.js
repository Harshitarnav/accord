/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#027787',
      secondary: '#BD8D3C',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      blue: {
        100: '#D6E4F4', // Lightest blue
        200: '#B0C8E9',
        300: '#8AADD9',
        400: '#6492CB',
        500: '#3E77BC', // Middle blue
        600: '#3267A7',
        700: '#29558D',
        800: '#204373',
        900: '#163359', // Darkest blue
        1000: '#0F52BA', // Base blue
      },
      darkBlue: {
        100: '#b8e2f4', // Lightest blue
        200: '#8dcfec',
        300: '#6abce2',
        400: '#58afdd',
        500: '#46a2da', // Middle blue
        600: '#4194cb',
        700: '#3982b8',
        800: '#3271a5',
        900: '#235284', // Darkest blue
      },
      yellow: {
        100: '#fff4d1',
        200: '#ffe8a3',
        300: '#ffdb75',
        400: '#ffd147',
        500: '#ffc107', // This is the #FFC107 color
        600: '#e6ac06',
        700: '#cc9805',
        800: '#b38404',
        900: '#996f03',
      },
      
    },
    extend: {
      transitionProperty: {
        'width': 'width,height',
      },
      backgroundImage: {
        'bg': "url('/src/assets/HomePage/bg1.jpg')",
      }
    },
  },
  plugins: [],
}
