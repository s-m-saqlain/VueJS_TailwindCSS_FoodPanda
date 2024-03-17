/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        Foodpanda_Iamge: "url('../assets/Images/Foodpanda_Image.png')",
      },
    },
  },
  plugins: [],
};
