export default {
  testEnvironment: 'jsdom',
  transform: {},
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/test/unit_test_coverage',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/test/unit_tests/mocks/fileMock.js',
  },
  modulePaths: [],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  testRegex: 'unit_tests/.*-spec.js',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  transformIgnorePatterns: [],
};
