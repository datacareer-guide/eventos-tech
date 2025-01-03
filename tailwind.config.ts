import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: {
          light: '#ffffff',
          dark: '#111827', // gray-900
        },
        surface: {
          light: '#ffffff',
          dark: '#1f2937', // gray-800
        },
        text: {
          primary: {
            light: '#111827', // gray-900
            dark: '#f9fafb', // gray-50
          },
          secondary: {
            light: '#4b5563', // gray-600
            dark: '#9ca3af', // gray-400
          },
          muted: {
            light: '#6b7280', // gray-500
            dark: '#6b7280', // gray-500
          },
        },
        border: {
          light: '#e5e7eb', // gray-200
          dark: '#374151', // gray-700
        },
        status: {
          info: {
            text: '#1d4ed8', // blue-700
            bg: {
              light: '#dbeafe', // blue-100
              dark: '#1e3a8a', // blue-900
            }
          },
          success: {
            text: '#15803d', // green-700
            bg: {
              light: '#dcfce7', // green-100
              dark: '#14532d', // green-900
            }
          },
          warning: {
            text: '#b45309', // amber-700
            bg: {
              light: '#fef3c7', // amber-100
              dark: '#78350f', // amber-900
            }
          },
          error: {
            text: '#b91c1c', // red-700
            bg: {
              light: '#fee2e2', // red-100
              dark: '#7f1d1d', // red-900
            }
          },
        },
      },
      fontFamily: {
        sans: ['PixelOperator', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        mono: ['PixelOperator', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config
