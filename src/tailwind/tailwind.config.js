/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./lib/**/*.{html,erb,haml,slim,rb}",
        "./app/**/*.{html,erb,haml,slim,rb}",
        "./config/**/*.rb",
        "./*.erb",
        "./test.tailwind.html"
    ]
};
