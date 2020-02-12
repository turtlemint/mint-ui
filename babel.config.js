module.exports = {
	plugins: [
		"babel-plugin-styled-components",
		"@babel/proposal-class-properties",
		"@babel/proposal-object-rest-spread",
		"@babel/plugin-proposal-optional-chaining",
		"macros"
	],
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
		"@babel/preset-typescript"
	]
};
