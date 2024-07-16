/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        boxShadow: {
            arrowController: '0 4px 20px 0 rgba(0,0,0,0.16), 0 0 3px 0 rgba(0,0,0,0.12)',
        },
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
