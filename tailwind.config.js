const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./components/**/*.js",
    "./components/**/*.ts",
    "./components/**/*.tsx",
    "./components/**/*.mdx",
    "./pages/**/*.js",
    "./pages/**/*.ts",
    "./pages/**/*.tsx",
    "./pages/**/*.mdx",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
      scale: ["active"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 2s linear infinite",
        "spin-very-slow": "spin 120s linear infinite",
      },
      colors: {
        yellow: colors.yellow,
        gray: colors.warmGray,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        // "6xl": "4rem",
      },
      scale: {
        flip: "-1",
        200: "2",
      },
    },
  },
}
