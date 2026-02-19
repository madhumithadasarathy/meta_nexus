/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#000000',
                    900: '#050505',
                    800: '#0a0a0a',
                    700: '#111111',
                    600: '#1a1a1a',
                    500: '#222222',
                },
                accent: {
                    DEFAULT: 'oklch(40.8% 0.153 2.432)',
                    light: 'oklch(55% 0.153 2.432)',
                    lighter: 'oklch(65% 0.12 2.432)',
                    dark: 'oklch(30% 0.153 2.432)',
                    muted: 'oklch(40.8% 0.08 2.432)',
                    glow: 'oklch(50% 0.2 2.432)',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px oklch(40.8% 0.153 2.432 / 0.3)' },
                    '100%': { boxShadow: '0 0 40px oklch(40.8% 0.153 2.432 / 0.6), 0 0 80px oklch(50% 0.2 2.432 / 0.3)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
