module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        base: "16px",
      },
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        black: "hsl(0, 0%, 0%)",
        "dark-grey": "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        body: ["Commissioner", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
