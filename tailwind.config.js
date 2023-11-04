/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-color': '#242254',
                'font-color': '#03014C',
                'red-upschool': '#B81342',
                'red-custom': '#BC0D4D',
                'pink-upschool': '#BB3860',
            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                check: ['"Pixelify Sans"', 'sans-serif'],
                anton: ["'Anton'", 'sans-serif'],
                didact: ["'Didact Gothic'", 'sans-serif'],
                annieUseYourTelescope: [
                    '"Annie Use Your Telescope"',
                    'cursive',
                ],
                greatvibes: ['Great Vibes', 'sans-serif'],
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
                12: 'repeat(12,minmax(0,1fr))',
                13: 'repeat(13,minmax(0,1fr))',
                14: 'repeat(14,minmax(0,1fr))',
                16: 'repeat(16,minmax(0,1fr))',
            },
            gridTemplateRows: {
                7: 'repeat(7,minmax(0,1fr))',
                8: 'repeat(8,minmax(0,1fr))',
                9: 'repeat(9,minmax(0,1fr))',
                10: 'repeat(10,minmax(0,1fr))',
                11: 'repeat(11,minmax(0,1fr))',
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
            gridColumnStart: {
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
            },
            gridColumnEnd: {
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
            },
            screens: {
                tab: '900px',
                // => @media (min-width: 900px) { ... }
                ms: '320px',
                xss: '340px',
                xs: '420px',
                xm: '540px',
                1450: '1450px',
                xxxl: '1800px',
                xlarge: '1920px',
                xxlarge: '2560px',
            },
            aspectRatio: {
                '2/1': '2 / 1',
            },
        },
    },
    plugins: [],
};
