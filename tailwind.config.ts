import type { Config } from 'tailwindcss';

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
      fontFamily: {
        sans: ['sans-serif'],
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      textOrientation: {
        upright: 'upright',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.text-upright': {
          textOrientation: 'upright',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
