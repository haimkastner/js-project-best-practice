module.exports = {
	root: true,
	parser: '@typescript-eslint/parser', // The dedicated TS parser 
	plugins: [
		'prettier', // Add prettier plugin
	],
	extends: [
		'airbnb-typescript', // The Airbnb rules policies extension
		'prettier',  // Extend the linter with new prettier rules
	],
	parserOptions: {
		project: './tsconfig.json' // The project TS configuration file 
	},
	rules: {
		'prettier/prettier': 'error', // Override any conflict rule by the prettier rule and consider all of them as level "error" 
		'import/prefer-default-export': 'off'
	},
	overrides: [{
		files: ['src/legacy/**/*.ts'], // Set specific rules policy for all TS files in the src/legacy directory
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