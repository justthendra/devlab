/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,jsx,ts,tsx,vue}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
          colors: {
            primary: "rgba(0,9,10,0.15)",
          },
        },
    
    },
    plugins: [],
}