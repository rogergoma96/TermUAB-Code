module.exports = {
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jest-environment-jsdom-global',
};
