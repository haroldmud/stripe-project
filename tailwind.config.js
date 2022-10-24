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
        gray79: "#798693",
        blue0a: "#0a2540",
        blue0e2: "#0a2540e2",
        bluebff: "#635bff",
        blue00d: "#00d4ff",
      },
      padding: {
        "20r": "20rem",
        "10r": "10rem",

        "9s": "9px",
        "5s": "5px",
      },
      width: {
        fit: "fit-content",
        "40r": "40rem",
        "32r": "32rem",
        "30r": "30rem",
        "25r": "25rem",
        "20r": "20rem",
        "18r": "18rem",
        "16r": "16rem",
        "15r": "15rem",
        "40s": "35px",
        "16s": "16px",
        "14s": "14px",
        half: "50%",
      },
      height: {
        fit: "fit-content",
        "40r": "40rem",
        "35r": "35rem",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "5r": "5rem",
      },
      borderRadius: {
        "1r": "2rem",
      },
      margin: {
        "40r": "40rem",
        "32r": "32rem",
        "20r": "20rem",
        "8r": "8rem",
      },
      inset: {
        "140r": "140rem",
        "124r": "124rem",
      },
    },
  },
  plugins: [],
};
