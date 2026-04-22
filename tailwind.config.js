/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#CACACA',
          50:  '#F2F2F2',
          100: '#CACACA',
          200: '#ABABAB',
          300: '#8C8C8C',
        },
        ink: {
          DEFAULT: '#111111',
          50:  '#CACACA',
          100: '#A0A0A0',
          200: '#707070',
          300: '#404040',
          400: '#222222',
          500: '#111111',
        },
        dark: {
          DEFAULT: '#111111',
          50:  '#1A1A1A',
          100: '#222222',
          200: '#2C2C2C',
          300: '#383838',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem',    { lineHeight: '1',    letterSpacing: '-0.04em' }],
        '9xl': ['8rem',    { lineHeight: '0.95', letterSpacing: '-0.05em' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
        wide:    '0.06em',
        wider:   '0.12em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
