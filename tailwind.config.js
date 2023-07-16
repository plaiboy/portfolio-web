module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 800: "#2867b2", "800_a5": "#1a57cea5" },
        black: {
          900: "#000000",
          "900_a0": "#000000a0",
          "900_c9": "#000000c9",
          "900_3f": "#0000003f",
        },
        gray: {
          50: "#fffbfb",
          200: "#f0f0f0",
          "50_01": "#faf7f7",
          "700_a0": "#636060a0",
        },
        blue_gray: { 100: "#d9d9d9" },
        red: { 600: "#cb4848" },
        indigo: { A700: "#3446e7" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { josefinsans: "Josefin Sans", saira: "Saira" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
