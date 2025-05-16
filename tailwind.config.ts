import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)'],
                display: ['var(--font-playfair)'],
            },
            colors: {
                primary: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#eaddd7',
                    300: '#e0cec7',
                    400: '#d2bab0',
                    500: '#bfa094',
                    600: '#a18072',
                    700: '#977669',
                    800: '#846358',
                    900: '#43302b',
                },
                gold: {
                    50: '#fbf7e4',
                    100: '#f5ebbb',
                    200: '#eed990',
                    300: '#e7c665',
                    400: '#e0b445',
                    500: '#d9a534',
                    600: '#c7942f',
                    700: '#b07c28',
                    800: '#996522',
                    900: '#744016',
                },
            },
        },
    },
    plugins: [],
}

export default config