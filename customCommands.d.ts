declare namespace Cypress {
  interface Chainable<Subject> {
    navigateToSalesforce(): Chainable<any>;
    navigateAndLoginSalesforce(): Chainable<any>;
    getIframeBody(iframe: any): Chainable<any>;
  }
}