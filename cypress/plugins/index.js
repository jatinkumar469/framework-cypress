/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const path = require("path");

const fse = require("fs-extra");

require("dotenv").config();

async function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(`config`, `${file}.json`);
  return await fse.readJSON(pathToConfigFile);
}

module.exports = async (on, config) => {
  on("task", {
    log(message) {
      console.log(`-> ${message}`);
      return null;
    },
  });

  // set default env to UAT
  const file =
    config.env.configFile || `uat` || config.env.codeCoverageTasksRegistered;
  const fileLoadPromise = getConfigurationByFile(file, config);

  return fileLoadPromise.then(async (envConfig) => {
    let updatedConfig = {
      ...config,
      ...envConfig,
      env: { ...envConfig.env, ...process.env, ...config.env },
    };
    return updatedConfig;
  });
};
