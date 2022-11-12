/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}',
	],
	theme: {
		darkMode: 'class',
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@brainandbones/skeleton/tailwind/theme.cjs'),
	],
};
