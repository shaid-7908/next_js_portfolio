/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      fontFamily:{
          popins:['Poppins','sans-serif']
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        customClock:{
          from:{transform:'rotate(0deg)'},
          to:{transform:'rotate(360deg)'}
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        customClock: 'customClock 3s linear infinite'
      },
      colors:{
        'dBlue':'#4831d4',
        'dYellow':'#ccf381'
     },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
