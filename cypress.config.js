const { defineConfig } = require("cypress");

const esbuildPreprocessor = require("./cypress/support/esbuild-preprocessor.js");

module.exports = defineConfig({
  projectId: "oq3efc",
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  includeShadowDom: true,
  video: false,
  e2e: {
    async setupNodeEvents(on, config) {
      esbuildPreprocessor(on);
      const updatedConfig = await require("./cypress/plugins/index.js")(
        on,
        config,
      );
      // @bahmutov/cy-grep plugin
      return require("@bahmutov/cy-grep/src/plugin")(updatedConfig);
    },
    excludeSpecPattern: ["**/__snapshots__/*"],
    testIsolation: false,
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalModifyObstructiveThirdPartyCode: true,
  },
});
