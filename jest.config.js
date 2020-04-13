module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      babelConfig: true
    }
  }
};
