/**
 * Class Credentials defined with properties and values. values taken from uat.json or prod.json
 * Each Property defined with username used to logged into the salesforce application based on test scenario
 */
class Credentials {
  static salesforcePassword = Cypress.env("salesforcePassword");
  static salesforceUsername = Cypress.env(
    "salesforceUsername",
  );
}
export default Credentials;
