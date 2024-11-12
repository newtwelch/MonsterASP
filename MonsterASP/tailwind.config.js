/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,html}'],
    theme: {
        extend: {
            colors: {
                'primary': "#881BEF",
                'black': "#100E15",
                'gray': "#17161E",
                'red': "#FD749E",
                'blue': "#7577EA"
            },
            fontFamily: {
                "inter": ['inter', 'sans-serif'],
                "sg": ['Space Grotesk', 'sans-serif']
            }
        },
    },
    plugins: [],
}

