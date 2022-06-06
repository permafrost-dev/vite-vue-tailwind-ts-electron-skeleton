const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// remove renamed color warnings
['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'].forEach(name => delete colors[name]);

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
            },
        },
        ...colors,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
