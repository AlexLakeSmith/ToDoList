module.exports = {
  content: ["./src/**/*. {html,js,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"]
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
