/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-color': '#242254',
                'font-color': '#03014C',
            },
            flexGrow: {
                2: '2',
                3: '3',
                4: '4',
                5: '5',
            },
            flexShrink: {
                2: '2',
                3: '3',
            },
            gridTemplateColumns: {
                16: 'repeat(16,minmax(0,1fr))',
                12: 'repeat(12,minmax(0,1fr))',
                13: 'repeat(13,minmax(0,1fr))',
            },
            gridTemplateRows: {
                12: 'repeat(12,minmax(0,1fr))',
                13: 'repeat(13,minmax(0,1fr))',
                15: 'repeat(15,minmax(0,1fr))',
                16: 'repeat(16,minmax(0,1fr))',
            },
            gridRow: {
                'span-7': 'span 7/ span 7',
                'span-8': 'span 8/ span 8',
                'span-9': 'span 9/ span 9',
                'span-10': 'span 10/ span 10',
            },
            gridRowStart: {
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
            },
            screens: {
                tab: '900px',
                // => @media (min-width: 900px) { ... }
                xs: '420px',
                xm: '540px',
            },
        },
    },
    plugins: [],
};
