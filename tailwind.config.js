module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Questrial: ["Questrial", "sans-serif"],
        Bebas: ["Bebas Neue", "cursive"],
        Taja: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
