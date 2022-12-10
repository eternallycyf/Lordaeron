module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
  },
  testRegex: '(/src/*/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^lordaeron$': '<rootDir>/src/index.ts',
  },
};
