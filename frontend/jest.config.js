// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = { 
  bail: 1, 
  clearMocks: true,
  collectCoverage: true, 
  collectCoverageFrom: [
    'pages/**/*.tsx',
    '!pages/**/_app.tsx',
    '!pages/**/_document.tsx',
    '!components/**/*.tsx',  
    '!store/ducks/repositories/**/*.ts',
    ], 
  coverageDirectory: "__tests__/coverage", 
  coverageReporters: [  
   "text",
   "lcov",   
 ], 
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-localstorage-mock"
  ],
  testEnvironment: "jsdom", 
  moduleNameMapper:{
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
        },
  testMatch: [
    "**/__tests__/**/*.spec.tsx",  "**/__tests__/**/**/*.spec.ts"   
  ], 
  transform: {
    ".(js|jsx|ts|tsx)": "babel-jest"
  }  
}