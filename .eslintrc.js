module.exports = {
	env: {
		node: true,
		jest: true,
		browser: true,
	},
	extends: [
		"eslint:recommended",
		"airbnb-base",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@next/next/recommended",
		// "plugin:cypress/recommended",
		// "plugin:jest-dom/recommended",
		"prettier",
	],
	rules: {
		"class-methods-use-this": ["error", { enforceForClassFields: false }],
		"import/extensions": ["error", "never"],
		"import/no-anonymous-default-export": "warn",
		"import/no-import-module-exports": "off",
		"import/no-extraneous-dependencies": "off",
		"react/prop-types": "off",
		"jsx-a11y/alt-text": [
			"warn",
			{
				elements: ["img"],
				img: ["Image"],
			},
		],
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
		"react/jsx-sort-props": [
			"warn",
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
	},
	plugins: [
		"import",
		"@typescript-eslint",
		"react",
		"jsx-a11y",
		// "cypress",
		// "jest-dom",
	],
	settings: {
		react: {
			version: "18",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				moduleDirectory: ["node_modules", "src/"],
			},
		},
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
		ecmaFeatures: {
			jsx: true,
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: ["plugin:@typescript-eslint/recommended"],
		},
		{
			files: ["**/*.test.js", "**/*.test.jsx"],
			env: {
				jest: true,
			},
		},
	],
};
