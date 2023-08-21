/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#242254",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
      },
      flexShrink: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [],
};
