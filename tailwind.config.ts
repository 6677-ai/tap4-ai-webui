import type { Config } from 'tailwindcss';

// 将 require() 语句移到文件顶部
const tailwindcssAnimate = require('tailwindcss-animate');
const tailwindcssTypography = require('@tailwindcss/typography');

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#fbbf24',
        background: '#f7f7f7', // 浅灰色背景
        foreground: '#1f2937',
        accent: '#4f46e5',
        muted: '#9ca3af',
        'dark-bg': '#1E1B24',
        'light-bg': '#F3F4F6',
        'gray-bg': '#e0e0e0', // 新增的稍深的灰色
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#4f46e5',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
      },
      maxWidth: {
        pc: '1322px',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
};

export default config;
