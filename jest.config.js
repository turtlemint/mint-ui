
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
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleNameMapper: {
 		"\\.(css|less)$": "identity-obj-proxy"
	},
	testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/", "<rootDir>/packages/(?:.+?)/dist/package.json"]
};
