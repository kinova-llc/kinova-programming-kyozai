/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'kinova-teal': '#3CBFC8',
        'kinova-orange': '#FFBB55',
        'kinova-gray': '#4A4A4A',
        'kinova-green': '#5EA463'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}