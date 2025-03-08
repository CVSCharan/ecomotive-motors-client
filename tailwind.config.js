/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#28a745",
        accent: "#ffc107",
        dark: "#343a40",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        merriweather: ["var(--font-merriweather)", "Merriweather", "serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        lato: ["var(--font-lato)", "Lato", "sans-serif"],
        "heading-primary": ["var(--font-primary-heading)"],
        "heading-secondary": ["var(--font-secondary-heading)"],
        "body-primary": ["var(--font-primary-body)"],
        "body-secondary": ["var(--font-secondary-body)"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest2: ".2em",
      },
    },
  },
  plugins: [],
};
