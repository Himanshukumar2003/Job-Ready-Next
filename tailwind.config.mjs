/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "--theme-font-family": '"Rubik", serif'
      },
      fontSize: {
        "--theme-2xl": "52px",
        "--theme-xl": "44px",
        "--theme-lg": "38px",
        "--theme-md": "32px",
        "--theme-sm": "24px",
        "--theme-xs": "15px"
      },
      fontWeight: {
        "--theme-light": "400",
        "--theme-bold": "500",
        "--theme-Extrabold": "700"
      },
      borderRadius: {
        "--theme-fullradius": "60px",
        "--theme-normalradius": "8px"
      },
      colors: {
        "--theme-primary-one": "#ffa03a",
        "--theme-primary-one-light": "#fff0e6",
        "--theme-light": "#ffffff",
        "--theme-text-primary": "#160803",
        "--theme-text-secondary": "#5e5e5e",
        "--theme-dark-gradient": "linear-gradient(112deg, #fff6e9, #ffb15d)"
      },
      boxShadow: {
        "--theme-lightshadow": "0 4px 46px 12px rgba(0,0,0,.02)",
        "--theme-darkshadow": ""
      },
      backgroundImage: {
        '--theme-gradient': 'linear-gradient(130deg, #f96e1d, #f6bc45)',
        '--theme-dark-gradient': 'linear-gradient(112deg, #ffa03a, #eea849)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}