// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable, promise) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  console.log(err.message);
  if (err.message.includes("Error during LWC component connect phase")) {
    return false;
  }
  // when exception originated from AuraClientService
  // and don't want to fail the test so we return false
  if (err.message.includes("AuraClientService.postProcess")) {
    return false;
  }
  // when exception originated from AuraClientService.internalSend
  // and don't want to fail the test so we return false
  if (err.message.includes("AuraClientService.internalSend")) {
    return false;
  }
  // when exception originated ResizeObserver
  // and don't want to fail the test so we return false
  if (err.message.includes("ResizeObserver")) {
    return false;
  }
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case
  if (promise) {
    return false;
  }
  // when exception originated from Aura, Lightning's runtime
  // and don't want to fail the test so we return false
  if (err.message.includes("$A.getCallback()")) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});
