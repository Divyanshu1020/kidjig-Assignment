/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_bg : '#00000033',
        blueBorder: "#6881FF",
        pra: "#C0C2CC",
      },
      maxWidth: {
        site_width : '990px',
      },
      textDecorationColor: {
        'custom-blue': '#6881FF',
      },
    },
  },
  plugins: [],
}

