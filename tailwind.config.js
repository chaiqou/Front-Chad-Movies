/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "interstellar-movie": "url('@/assets/landing/interstellar.png')",
        "the-royal-tenenbaums":
          "url('@/assets/landing/the-royal-tenenbaums.png')",
        "shutter-island": "url('@/assets/landing/island.png')",
      },
    },
  },
  plugins: [],
};
