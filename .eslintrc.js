module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends: ['@hexatool/eslint-config'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:import/typescript',
			],
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': ['error'],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: {
							memberTypes: [
								// Index signature
								'signature',
								'call-signature',

								// Fields
								'public-static-field',
								'protected-static-field',
								'private-static-field',
								'#private-static-field',

								'public-decorated-field',
								'protected-decorated-field',
								'private-decorated-field',

								'public-instance-field',
								'protected-instance-field',
								'private-instance-field',
								'#private-instance-field',

								'public-abstract-field',
								'protected-abstract-field',

								'public-field',
								'protected-field',
								'private-field',
								'#private-field',

								'static-field',
								'instance-field',
								'abstract-field',

								'decorated-field',

								'field',

								// Static initialization
								'static-initialization',

								// Constructors
								'public-constructor',
								'protected-constructor',
								'private-constructor',

								'constructor',

								// Getters
								'public-static-get',
								'protected-static-get',
								'private-static-get',
								'#private-static-get',

								'public-decorated-get',
								'protected-decorated-get',
								'private-decorated-get',

								'public-instance-get',
								'protected-instance-get',
								'private-instance-get',
								'#private-instance-get',

								'public-abstract-get',
								'protected-abstract-get',

								'public-get',
								'protected-get',
								'private-get',
								'#private-get',

								'static-get',
								'instance-get',
								'abstract-get',

								'decorated-get',

								'get',

								// Setters
								'public-static-set',
								'protected-static-set',
								'private-static-set',
								'#private-static-set',

								'public-decorated-set',
								'protected-decorated-set',
								'private-decorated-set',

								'public-instance-set',
								'protected-instance-set',
								'private-instance-set',
								'#private-instance-set',

								'public-abstract-set',
								'protected-abstract-set',

								'public-set',
								'protected-set',
								'private-set',
								'#private-set',

								'static-set',
								'instance-set',
								'abstract-set',

								'decorated-set',

								'set',

								// Methods
								'public-static-method',
								'protected-static-method',
								'private-static-method',
								'#private-static-method',

								'public-decorated-method',
								'protected-decorated-method',
								'private-decorated-method',

								'public-instance-method',
								'protected-instance-method',
								'private-instance-method',
								'#private-instance-method',

								'public-abstract-method',
								'protected-abstract-method',

								'public-method',
								'protected-method',
								'private-method',
								'#private-method',

								'static-method',
								'instance-method',
								'abstract-method',

								'decorated-method',

								'method',
							],
							order: 'alphabetically-case-insensitive',
						},
					},
				],
				'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
				'@typescript-eslint/no-confusing-void-expression': [
					'error',
					{ ignoreArrowShorthand: true },
				],
				'@typescript-eslint/no-explicit-any': ['warn'],
				'@typescript-eslint/no-extra-non-null-assertion': ['error'],
				'@typescript-eslint/no-floating-promises': ['error'],
				'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
				'@typescript-eslint/no-non-null-assertion': ['error'],
				'@typescript-eslint/no-require-imports': ['error'],
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
				'@typescript-eslint/no-unnecessary-condition': ['error'],
				'@typescript-eslint/no-useless-constructor': ['error'],
				'@typescript-eslint/prefer-for-of': ['error'],
				'@typescript-eslint/prefer-nullish-coalescing': ['error'],
				'@typescript-eslint/prefer-readonly': ['error'],
				'@typescript-eslint/promise-function-async': [
					'error',
					{ checkArrowFunctions: false },
				],
				'@typescript-eslint/sort-type-union-intersection-members': ['error'],
				'@typescript-eslint/switch-exhaustiveness-check': ['error'],
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
};
