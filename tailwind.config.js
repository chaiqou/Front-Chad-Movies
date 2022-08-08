/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "interstellar-movie": "url('@/assets/images/landing/interstellar.png')",
        "the-royal-tenenbaums":
          "url('@/assets/images/landing/the-royal-tenenbaums.png')",
        "shutter-island": "url('@/assets/images/landing/island.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
