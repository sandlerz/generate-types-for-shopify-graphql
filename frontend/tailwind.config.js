/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aswad-black': '#18181c',
        'verified-black': '#222228',
        'mortar-grey': '#9e9e9e'
      },
    },
  },
  plugins: [],
}

