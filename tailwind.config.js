module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gordita-regular": ['"Gordita Regular"', "sans-serif"],
        "gordita-regular-italic": ['"Gordita Regular Italic"', "sans-serif"],
        "gordita-thin": ['"Gordita Thin"', "sans-serif"],
        "gordita-thin-italic": ['"Gordita Thin Italic"', "sans-serif"],
        "gordita-light": ['"Gordita Light"', "sans-serif"],
        "gordita-light-italic": ['"Gordita Light Italic"', "sans-serif"],
        "gordita-medium": ['"Gordita Medium"', "sans-serif"],
        "gordita-medium-italic": ['"Gordita Medium Italic"', "sans-serif"],
        "gordita-bold": ['"Gordita Bold"', "sans-serif"],
        "gordita-bold-italic": ['"Gordita Bold Italic"', "sans-serif"],
        "gordita-black": ['"Gordita Black"', "sans-serif"],
        "gordita-black-italic": ['"Gordita Black Italic"', "sans-serif"],
        "gordita-ultra": ['"Gordita Ultra"', "sans-serif"],
        "gordita-ultra-italic": ['"Gordita Ultra Italic"', "sans-serif"],
        "georgia-regular": ['"Georgia Regular"', "serif"],
        "georgia-italic": ['"Georgia Italic"', "serif"],
        "georgia-bold": ['"Georgia Bold"', "serif"],
        "georgia-bold-italic": ['"Georgia Bold Italic"', "serif"],
      },
      keyframes: {
        "ghost-face": {
          "0%, 100%": { height: "100px" },
          "50%": { height: "20px" },
        },
        "eyes-move": {
          "0%, 100%": { top: "20px" },
          "50%": { top: "30px" },
        },
      },
      animation: {
        "ghost-face": "ghost-face 2s infinite ease-in-out",
        "eyes-move": "eyes-move 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
