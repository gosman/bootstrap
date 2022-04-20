const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [ 'Nunito', ...defaultTheme.fontFamily.sans ],
            },
            colors: {
                'espresso': '#993300',
                'espresso-light': '#ce4400'
            }
        }
    },

    plugins: [ require('@tailwindcss/forms') ],
};
