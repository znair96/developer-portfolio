/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      Black : '#151515',
      Green:'#4EE1A0',
      'Dark-Grey':'#242424',
      Grey:'#d9d9d9',
      White:'#FFFFFF'
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    }
    
  },
  plugins: [],
}

