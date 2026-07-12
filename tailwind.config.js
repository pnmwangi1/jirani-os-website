/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--color-ink-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        },
        tenant: {
          DEFAULT: 'rgb(var(--color-tenant) / <alpha-value>)',
          light: 'rgb(var(--color-tenant-light) / <alpha-value>)',
        },
        manager: {
          DEFAULT: 'rgb(var(--color-manager) / <alpha-value>)',
          light: 'rgb(var(--color-manager-light) / <alpha-value>)',
        },
        accountant: {
          DEFAULT: 'rgb(var(--color-accountant) / <alpha-value>)',
          light: 'rgb(var(--color-accountant-light) / <alpha-value>)',
        },
        caretaker: {
          DEFAULT: 'rgb(var(--color-caretaker) / <alpha-value>)',
          light: 'rgb(var(--color-caretaker-light) / <alpha-value>)',
        },
        contractor: {
          DEFAULT: 'rgb(var(--color-contractor) / <alpha-value>)',
          light: 'rgb(var(--color-contractor-light) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          light: 'rgb(var(--color-success-light) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
          light: 'rgb(var(--color-warning-light) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
          light: 'rgb(var(--color-danger-light) / <alpha-value>)',
        },
        info: {
          DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
          light: 'rgb(var(--color-info-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"General Sans"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.375rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(28 43 36 / 0.04), 0 8px 24px -8px rgb(28 43 36 / 0.10)',
        'soft-lg': '0 4px 16px rgb(28 43 36 / 0.06), 0 24px 48px -12px rgb(28 43 36 / 0.16)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
