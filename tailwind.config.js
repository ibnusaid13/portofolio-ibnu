/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        neo: {
          black: '#0A0A0A',
          white: '#F5F0E8',
          yellow: '#FFE500',
          pink: '#FF3CAC',
          cyan: '#00E5FF',
          lime: '#AAFF00',
          orange: '#FF6B00',
          purple: '#7B2FFF',
          red: '#FF1744',
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px #0A0A0A',
        'neo-lg': '6px 6px 0px #0A0A0A',
        'neo-xl': '8px 8px 0px #0A0A0A',
        'neo-hover': '2px 2px 0px #0A0A0A',
        'neo-yellow': '4px 4px 0px #FFE500',
        'neo-pink': '4px 4px 0px #FF3CAC',
        'neo-cyan': '4px 4px 0px #00E5FF',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
    },
  },
  plugins: [],
}
