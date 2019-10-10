module.exports = {
	cacheDirectory: ".jest-cache",
	coverageDirectory: ".jest-coverage",
	coveragePathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/", "<rootDir>/packages/(?:.+?)/dist/package.json"],
	coverageReporters: ["html", "text"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/", "<rootDir>/packages/(?:.+?)/dist/package.json"]
};
