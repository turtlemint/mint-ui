module.exports = {
	plugins: [
		"babel-plugin-styled-components",
		"@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread",
		"@babel/plugin-proposal-optional-chaining",
		"macros",
		"@babel/plugin-proposal-nullish-coalescing-operator"
	],
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
		"@babel/preset-typescript"
	]
};
