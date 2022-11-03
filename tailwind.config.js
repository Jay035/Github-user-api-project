const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    })
  ],
  theme: {
    fontFamily: {
      'Bellefair': ['Bellefair', 'serif'],
      'Barlow': ['Barlow', 'sans-serif'],
      'Barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark': 'hsl(230 35% 7%)',
        'accent': 'hsl(231 77% 90%)',
        'menu-bg': '#979797',
      },
      backgroundImage: {
        'home-bg-mobile': "url('./components/assets/home/background-home-mobile.jpg')",
        'home-bg-tablet': "url('./components/assets/home/background-home-tablet.jpg')",
        'home-bg-desktop': "url('./components/assets/home/background-home-desktop.jpg')",
        'destination-bg-mobile': "url('./components/assets/destination/background-destination-mobile.jpg')",
        'destination-bg-tablet': "url('./components/assets/destination/background-destination-tablet.jpg')",
        'destination-bg-desktop': "url('./components/assets/destination/background-destination-desktop.jpg')",
        'crew-bg-mobile': "url('./components/assets/crew/background-crew-mobile.jpg')",
        'crew-bg-tablet': "url('./components/assets/crew/background-crew-tablet.jpg')",
        'crew-bg-desktop': "url('./components/assets/crew/background-crew-desktop.jpg')",
        'technology-bg-mobile': "url('./components/assets/technology/background-technology-mobile.jpg')",
        'technology-bg-tablet': "url('./components/assets/technology/background-technology-tablet.jpg')",
        'technology-bg-desktop': "url('./components/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  // plugins: [],
}
