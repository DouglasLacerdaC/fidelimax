import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-800': '#19202D',
        'gray-700': '#333E4F',
        'gray-500': '#737A86',
        'gray-400': '#ACB1BA',
        'gray-300': '#CCD0D6',
        'gray-100': '#F2F4F8',

        'yellow-800': '#FFAE00',
        'yellow-700': '#FFB800'
      },
      boxShadow: {
        "custom-yellow": "0px 0px 0px 0px rgba(255, 213, 104, 0.24), 0px 1px 3px 0px rgba(255, 213, 104, 0.24), 0px 5px 5px 0px rgba(255, 213, 104, 0.20), 0px 11px 7px 0px rgba(255, 213, 104, 0.12), 0px 20px 8px 0px rgba(255, 213, 104, 0.04), 0px 31px 9px 0px rgba(255, 213, 104, 0.00)",
        "focus": "0 0 0 2px #333E4F"
      },
    },
  },
  plugins: [],
}
export default config
