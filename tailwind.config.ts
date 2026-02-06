import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        chance: {
          black: '#0a0a0a',
          'black-soft': '#141414',
          white: '#fafafa',
          'white-muted': '#e5e5e5',
          accent: '#ffffff'
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
        'shine-gradient': 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
        'liquid-glass': 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)'
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-hover': '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
        'shine': '0 0 60px rgba(255,255,255,0.08)',
        'inner-glow': 'inset 0 0 30px rgba(255,255,255,0.05)'
      },
      backdropBlur: {
        'glass': '12px',
        'glass-strong': '20px'
      },
      animation: {
        'shine': 'shine 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      },
      keyframes: {
        shine: {
          '0%, 100%': { opacity: '0.5', transform: 'translateX(-100%)' },
          '50%': { opacity: '1', transform: 'translateX(100%)' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};

export default config;
