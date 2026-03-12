/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#121212',
                charcoalLight: '#1e1e1e',
                nude: {
                    dark: '#bca38f',
                    DEFAULT: '#d4bca4',
                    light: '#e8d5c4'
                },
                beige: {
                    deep: '#c6b3a3',
                    DEFAULT: '#e6dfd7'
                },
                brown: {
                    soft: '#8b7355',
                    dark: '#5a4634'
                },
                cream: {
                    warm: '#fdfbf7',
                    DEFAULT: '#f5f0e6'
                },
                gold: {
                    soft: '#e5c158',
                    DEFAULT: '#d4af37',
                    dark: '#b3922b'
                }
            },
            fontFamily: {
                sans: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
