/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      lightGray: "#F4FAFF",
      gray: "#ADADAD",
      "gray-200": "#E9EDF4",
      "gray-500": "#a0aec0",
      white: {
        100: "#FFFFFF",
      },
      slate: {
        100: "#F7FAFC",
        200: "#E2E8F0",
        300: "#CBD5E0",
        400: "#A0AEC0",
        500: "#718096",
        600: "#4A5568",
        700: "#2D3748",
      },
      blue: {
        100: "#F3F6FA",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
      },
      orange: {
        100: "#FFF8F1",
        200: "#FEECDC",
        300: "#FCD9BD",
        400: "#FDBA8C",
        500: "#FF8A4C",
        600: "#FF5A1F",
        700: "#D03801",
        800: "#B43403",
      },
    },
  },
  plugins: [],
};
