// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";
import "cypress-iframe";
import testData from "../fixtures/salesforceTestData.json";

const baseUrl = Cypress.config("baseUrl");
const salesforceBaseUrl = Cypress.config("saleforceBaseURL");

Cypress.Commands.add("navigateAndLoginSalesforce", (username, password) => {
  const requestBody = {
    ...testData.requestBodyForSalesforceLogin, // Clone the request body to avoid modifying the original
    un: username,
    username: username,
    pw: password,
  };

  // Clear all cookies, local storage, and session storage to ensure a clean state
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.window().then((win) => win.sessionStorage.clear());

  // Force a fresh session by using a unique session key
  const sessionKey = `SalesforceLogin_${username}_${new Date().getTime()}`;

  cy.session(sessionKey, () => {
    // Perform login via API
    cy.request({
      method: "POST",
      url: salesforceBaseUrl,
      body: requestBody,
      form: true,
    }).then((response) => {
      // Ensure the login was successful
      expect(response.status).to.eq(200);
    });

    // Navigate to the base URL after login
    cy.visit(`${baseUrl}${Cypress.env("home")}`);
  });

  // Log the login action for debugging
  Cypress.log({
    name: "navigateAndLoginSalesforce",
    message: `Logging in with user ${username}`,
    consoleProps: () => ({ username }),
  });
});

Cypress.Commands.add("getIframeBody", (iframe) => {
  Cypress.log({
    displayName: "Get Iframe",
    message: "getIframeBody",
  });
  return cy
    .get(iframe, { log: false })
    .its("0.contentDocument.body", { log: false })
    .should("not.be.empty")
    .then(cy.wrap);
});

Cypress.Commands.add("logoutSalesforce", () => {
  // Log the logout action for debugging
  Cypress.log({
    name: "logoutSalesforce",
    message: "Logging out of Salesforce and clearing session data",
  });

  // Perform logout by clearing all browser storage and cookies
  cy.clearAllCookies({ log: true });
  cy.clearAllLocalStorage({ log: true });
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});
