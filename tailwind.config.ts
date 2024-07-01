import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/img/background.png')",
        /* 'dark_overlay2': 'linear-gradient(180deg, rgba(3, 42, 92, 0.21) 0%, rgba(3, 42, 92, 0.35) 50%, rgba(3, 42, 92, 0.85) 100%)',
        'dark_overlay': 'linear-gradient(180deg, rgba(3, 42, 92, 1) 0%, rgba(3, 42, 92, 1) 100%)', */
        //'light_overlay': 'linear-gradient(180deg, rgba(15, 102, 214, 0.70) 0%, rgba(12, 83, 175, 0.65) 100%)',
      },
      backgroundColor: {
        'primary': '#003182',
        'secondary': '#072e6d',
        'secondary_gray': '#F5F5FF',
        'secondary_blue': '#063BA3',
        'lightblue': '#E8EFF7',
        'lightgreen': '#E2FFF4',
        'alert': '#FEF1F1',
        'alert_alt': '#D32F2F',
        'black': '#24252D',
      },
      colors: {
        'primary': '#003182',
        'black': '#24252D',
        'lightblue': '#33CEFF',
        'secondary': '#F2F2F2',
        'secondary_gray': '#9E9EAB',
        'secondary_blue': '#063BA3',
        'secondary_green': '#0E9675',
        'cold_blue': '#4573B6',
        'alert': '#A02928',

      },
      borderColor: {
        'primary': '#17194A',
        'secondary': '#F2F2F2',
      },
      boxShadow: {
        'light': '0 2px 4px rgba(3, 42, 92, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config