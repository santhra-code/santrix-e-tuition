/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C8B6D9",
        'primary-dark': "#8E6BBE",
        accent: "#F6A04D",
        beige: "#F2DFC8",
        'bg-soft': "#F5F0FA",
      },
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 16px 48px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px rgba(142, 107, 190, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(142, 107, 190, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(142, 107, 190, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
