const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  setupFilesAfterEnv: ['reflect-metadata'],
  transform: {
    ...tsJestTransformCfg,
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testMatch: ["**/tests/**/*.test.ts"]
};