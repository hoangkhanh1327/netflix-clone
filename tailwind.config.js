module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'home-bg':
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('../images/misc/home-bg.jpg')",
                'home-bg-mobile':
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('../images/misc/home-mobile.jpg')",
                'home-joker':
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('../images/misc/joker1.jpg')",
                spinner: "url('../images/misc/spinner.png')",
            },
            spacing: {
                '1/20': '5%',
                1.26: '0.3125rem',
                2.5: '0.625rem',
                5: '1.25rem',
                7.5: '1.875rem',
                12.5: '3.125rem',
                15: '3.75rem',
                17: '4.25rem',
                17.5: '4.375rem',
                22: '5.25rem',
                37.5: '9.375rem',
                50: '12.5rem',
                125: '31.25rem',
                form: '600px',
            },
            colors: {
                form: 'rgba(0,0,0,0.75)',
                'form-input': '#333',
                'form-submit': '#e50914',
                'form-text': '#737373',
                'form-text-sm': '#8c8c8c',
                'form-link': '#0071eb',
                playBtn: '#e6e6e6',
                error: '#e87c03',
                profile: '#808080',
                'profile-bold': '#e5e5e5',
                'search-box': '#444444',
                'meta': '#0000008f',
                'play-btn': '#e50914',
                'player-border': '#ff0a10',
                'overlay': 'rgba(0, 0, 0, 0.5)'
            },
            boxShadow: {
                playBtn: '0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35)',
            },
            keyframes: {
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                loading: 'spin 1s linear infinite',
            },
            zIndex: {
                '999': '999'
            }
        },
        minHeight: {
            form: '600px',
        },
    },
    plugins: [],
};
