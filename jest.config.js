// jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // Use jsdom to simulate a browser environment
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extend Jest assertions with jest-dom
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS and style modules
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transform JavaScript/TypeScript files using Babel
  },
  transformIgnorePatterns: ['/node_modules/'], // Ignore transforming files in node_modules
  moduleDirectories: ['node_modules', '<rootDir>/src'], // Resolve modules from 'src' directory and 'node_modules'
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Match test files with '.test.js', '.spec.js', etc.
  collectCoverage: true, // Collect coverage information
  coverageDirectory: 'coverage', // Output directory for coverage reports
  coverageReporters: ['json', 'html'], // Format of coverage reports
};
