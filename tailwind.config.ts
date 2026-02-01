import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f0df2',
        'accent-blue': '#00f2ff',
        'background-dark': '#0a0612',
        'neon-green': '#00ff41',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
