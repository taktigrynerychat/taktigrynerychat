module.exports = {
  displayName: 'ui',
  preset: '../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  testMatch: [
    '**/?(*.)+(spec).+(ts)?(x)',
  ],
  coverageDirectory: '../../coverage/apps/ui',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  coverageReporters: [
    'html',
    'lcovonly',
  ],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/index.ts',
    '!**/*.{module,config,model}.ts',
  ],
};
