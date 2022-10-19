/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        "4r": "5rem",
        "15s": "15px",
        "8s": "8px",
        "5s": "5px",
      },
      colors: {
        grayf2: "#f2f2f2",
        grayd1: "#d1c4d1c7",
        graybe: "#bebebe4f",
        grayff: "#ffffff71",
        grayf69: "#ffffff69",
        blue0a: "#0a2540",
        blue0e2: "#0a2540e2",
      },
      padding: {
        "9s": "9px",
        "5s": "5px",
      },
      width: {
        fit: "fit-content",
        "32r": "32rem",
        "15r": "15rem",
        "30r": "30rem",
        half: "50%",
      },
      height: {
        fit: "fit-content",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "5r": "5rem",
      },
      borderRadius: {
        "1r": "2rem",
      },
    },
  },
  plugins: [],
};
