import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";
import eslintParserTypescript from "@typescript-eslint/parser";

import globals from "globals";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = tseslint.config(
	{
		ignores: [".next", "node_modules", "*.*"],
	},

	// Base
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	eslintPluginImport.flatConfigs.recommended,

	// Next.js
	...compat.extends("plugin:@next/next/core-web-vitals", "prettier"),

	//

	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			parser: eslintParserTypescript,
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.es2022,
			},
		},

		rules: {
			// these rules are too slow
			"import/no-cycle": "off",
			"react-compiler/react-compiler": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unused-vars": "off",

			// this doesn't make any sense
			"@typescript-eslint/prefer-nullish-coalescing": "off",

			// no
			"@typescript-eslint/consistent-type-definitions": "off",

			// why tho
			"@typescript-eslint/array-type": "off",

			// sort imports
			"import/order": "error",

			// no let exports
			"import/no-mutable-exports": "error",

			"import/no-default-export": "error",

			"import/no-unresolved": "off",

			"no-irregular-whitespace": ["error", { skipJSXText: true }],

			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],

			"@typescript-eslint/consistent-type-exports": [
				"error",
				{ fixMixedExportsWithInlineTypeSpecifier: true },
			],

			"import/no-duplicates": ["error", { "prefer-inline": true }],

			// false negatives
			"import/namespace": ["off"],

			// we allow empty interfaces
			"no-empty-pattern": "off",
			"@typescript-eslint/no-empty-interface": "off",

			"react/no-unescaped-entities": "off",

			// we allow empty functions
			"@typescript-eslint/no-empty-function": "off",

			// we sometimes use async functions that don't await anything
			"@typescript-eslint/require-await": "off",

			// numbers and booleans are fine in template strings
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true, allowBoolean: true },
			],

			"@typescript-eslint/no-empty-object-type": "off",

			"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
		},
	},

	{
		files: [
			"src/app/**/{page,layout,loading,route,not-found,error,global-error,default,robots,sitemap,opengraph-image}.ts?(x)",
			"src/i18n/*.ts",
			"*.d.ts",
			"tailwind.config.ts",
			"prettier.config.js",
			"middleware.ts",
			"robots.ts",
			"sitemap.ts",
		],
		rules: {
			"import/no-default-export": "off",
		},
	},

	{
		files: ["src/i18n/*.ts"],
		rules: {
			"@typescript-eslint/no-unsafe-member-access": "off",
		},
	},
);

export default config;
