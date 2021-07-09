module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'prettier', // Add prettier plugin
	],
	extends: [
		'airbnb-typescript',
		'prettier',  // Extend the linter with new prettier rules
	],
	parserOptions: {
		project: './tsconfig.json'
	},
	rules: {
		'prettier/prettier': 'error', // Override any conflict rule by the prettier rule and consider all of them as level "error" 
		'import/prefer-default-export': 'off'
	},
	overrides: [{
		files: ['src/legacy/**/*.ts'],
		parser: '@typescript-eslint/parser',
		plugins: [
			'prettier',
		],
		extends: [
			'airbnb-typescript',
			'prettier',
		],
		parserOptions: {
			project: './tsconfig.json'
		},
		rules: {
			'prettier/prettier': 'error',
			'import/prefer-default-export': 'off',
			'no-console': 'off',
		}
	}]
};