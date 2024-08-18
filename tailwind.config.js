/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        niconne: ["Niconne", "cursive"],
      },
      colors: {
        primary: "#009688",
        "primary-dark": "#00635a",
        secondary: "#6c757d",
        "secondary-dark": "#545b62",
        success: "#28a745",
        "success-dark": "#1e7e34",
        info: "#17a2b8",
        "info-dark": "#117a8b",
        warning: "#ffc107",
        "warning-dark": "#d39e00",
        danger: "#dc3545",
        "danger-dark": "#bd2130",
        light: "#f8f9fa",
        "light-dark": "#dae0e5",
        dark: "#343a40",
        "dark-dark": "#1d2124",
        white: "#fff",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
