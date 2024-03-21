/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-Color': '#F8EDEB',
            },
            keyframes: {
                slideIn: {
                    '0%': {
                        transform: 'translate(-100%)',
                    },
                    '100%': {
                        transform: 'translate(0%)',
                    },
                },
            },
            animation: {
                slideIn: 'slideIn 30s linear infinite',
            },
        },
    },
    plugins: [],
};
