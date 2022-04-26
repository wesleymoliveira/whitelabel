const nextJest = require('next/jest');

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'tests/(.*)': '<rootDir>/__tests__/$1'
	},
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/*.stories.tsx',
		'!src/pages/**/*.tsx',
		'!src/components/*/index.ts',
		'!src/styles/*.ts',
		'!src/utils/errors.ts',
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	snapshotSerializers: ['@emotion/jest/serializer']
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
