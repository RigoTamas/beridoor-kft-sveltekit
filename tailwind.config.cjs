/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite/**/*.js'
	],
	plugins: [require('flowbite/plugin'), require('daisyui')],
	darkMode: 'class',
	theme: {
		colors: {
			...colors,
			beridoorDarkModeBg: '#1d232a',
			beridoorLightModeSecondaryText: '#475569', // tailwind slate-600
			beridoorDarkModeSecondaryText: '#a1a1aa', // tailwind zinc-400
			beridoorBlue: '#143143',
			beridoorBlueLighter: '#1f3864',
			beridoorBlueLightest: '#155e75'
		},
		screens: {
			xxs: '400px',
			xs: '500px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }
			md: '768px',
			// => @media (min-width: 768px) { ... }
			lg: '1024px', // default in tailwind is 1024
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
			'3xl': '2300px'
		},
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
