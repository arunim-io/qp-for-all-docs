module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:unicorn/recommended',
	],
	plugins: ['svelte3', '@typescript-eslint', 'prettier', 'import'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	rules: {
		'import/no-unresolved': 0,
		'import/order': [
			'warn',
			{
				pathGroups: [
					{
						pattern: '~/**',
						group: 'external',
						position: 'after',
					},
				],
				'newlines-between': 'always-and-inside-groups',
			},
		],
		'prettier/prettier': [
			'warn',
			{},
			{
				usePrettierrc: true,
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.svelte'],
			},
		},
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
