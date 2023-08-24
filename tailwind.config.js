/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#242254",
        "font-color": "#03014C",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      flexShrink: {
        2: "2",
        3: "3",
      },
      gridTemplateColumns: {
        16: "repeat(16,minmax(0,1fr))",
        12: "repeat(12,minmax(0,1fr))",
        13: "repeat(12,minmax(0,1fr))",
      },
      gridTemplateRows: {
        12: "repeat(12,minmax(0,1fr))",
        13: "repeat(12,minmax(0,1fr))",
        16: "repeat(16,minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};
