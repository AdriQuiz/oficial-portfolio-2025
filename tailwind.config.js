/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0d0d0d',
        'dark-grey': '#1c1c1c',
        'lightey-grey': '#323232',
        'pink': '#F7374F',
        'light-pink': '#FFC1C9',
        'wine': '#88304E',
        'dark-blue': '#20006B',
        'light-blue': '#9C94C6',
        'purple': '#522546'
      }
    },
  },
  plugins: [],
}

