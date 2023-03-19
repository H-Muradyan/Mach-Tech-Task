/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "17.5": "70px",
      },
      height: {
        "17.5": "70px",
      },
      screens: {
        desktop: "1440px",
      },
      borderRadius: {
        "4xl": "40px",
        mix: "100px 100px 100px 240px",
      },
      colors: {
        background: "#302C42",
        mobNavBg: "#A59BCF",
        silver: "#8176AF",
        silverLight: "#C0B7E8",
        btnTextColor: "#343045",
        imgBackground: "rgba(0, 0, 0, 0.13)",
        borderColor: "rgba(192, 183, 232, 0.33)",
        cardImgBackground: "rgba(14, 14, 14, 0.32)",
      },
    },
  },
  plugins: [],
};
