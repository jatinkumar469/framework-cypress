import Credentials from "../../../../utils/credentials";
import testData from "../../../fixtures/merchantSupportCaseTestData.json";
import AccountCreationPage from "../../../page-objects/salesforce/accountCreationPage";

describe("Verify cace creation edit & read work flow using B2B support agent in Bread console", () => {
  const accountCreationPage = new AccountCreationPage();
    testData.createMerchantSupportCase;

  before("Login to salesforce as an automation QA user.", () => {
    cy.navigateAndLoginSalesforce(
      Credentials.salesforceUsername,
      Credentials.salesforcePassword,
    );
  });

  it("select cases app and navigation to new case creation page.", () => {
    accountCreationPage.selectAppsFromAppLauncher("Sales");
  });
  });
