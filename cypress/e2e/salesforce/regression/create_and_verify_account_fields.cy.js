import Credentials from "../../../../utils/credentials";
import Element from "../../../../utils/element";
import testData from "../../../fixtures/salesforceFormTestData.json";
import profileUserTestData from "../../../fixtures/salesforceProfileUserTestData.json";
import appTestData from "../../../fixtures/salesforceTestData.json";
import commonUtilities from "../../../page-objects/common/commonUtilities";
import AccountCreationPage from "../../../page-objects/salesforce/accountCreationPage";
import AccountSyncPage from "../../../page-objects/salesforce/accountSyncPage";
import CaseCreationPage from "../../../page-objects/salesforce/caseCreationPage";
import CaseDeletePage from "../../../page-objects/salesforce/caseDeletePage";
import ContactCreationPage from "../../../page-objects/salesforce/contactCreationPage";
import OpportunityCreationPage from "../../../page-objects/salesforce/opportunityCreationPage";

describe("Verify case creation from account creation with success owner user flow in Bread console", () => {
  const caseCreationPage = new CaseCreationPage();
  const accountCreationPage = new AccountCreationPage();
  const contactCreationPage = new ContactCreationPage();
  const elementUtils = new Element();
  const commonUtil = new commonUtilities();
  const caseDeletePage = new CaseDeletePage();
  const accountTestData = testData.accountCreation;
  const successUserName =
    profileUserTestData.profileUserName.accountCreationWithSuccessUser;
  const accountName = commonUtil.genericRandomText(8);
  const supportPhoneNumber = commonUtil.getRandomPhoneNumber();
  const accSyncPage = new AccountSyncPage();
  const appName = appTestData.appnames.breadConsole_appname;
  const opportunityCreationPage = new OpportunityCreationPage();

  before("Login to salesforce as an automation QA user.", () => {
    cy.navigateAndLoginSalesforce(
      Credentials.salesforceUsernameOppty,
      Credentials.salesforcePasswordCases,
    );
  });

  it("Select the Bread Console App and navigates to new account creation page", () => {
    accountCreationPage.selectAppsFromAppLauncher(appName);
    accountCreationPage.navigateToNewAccountsCreationPage();
  });

  it("Verify the creation of a account service case in Bread console", () => {
    elementUtils.click(accountCreationPage.newButton, true, true);
    cy.xpath(accountCreationPage.breadMerchant)
      .should("be.visible")
      .should("have.text", accountTestData.breadMerchant);
    // Click the Split screen button if aria-expanded is true
    contactCreationPage.clickSplitViewModeButton();
    elementUtils.click(accountCreationPage.breadMerchant);
    elementUtils.click(accountCreationPage.nextButton);
    elementUtils.click(accountCreationPage.healthStatusReason);
    accountCreationPage.selectDropdowns(accountTestData.healthStatusReason);
    elementUtils.type(
      accountCreationPage.accountSuccessOwner,
      successUserName,
      true,
      false,
      true,
      true,
    );
    elementUtils.click(
      caseCreationPage.getFormattedXpath(
        accountCreationPage.accountSearch,
        successUserName,
      ),
    );
    elementUtils.click(accountCreationPage.salesTeam, true);
    elementUtils.click(
      caseCreationPage.getFormattedXpath(
        accountCreationPage.salesTeamDropDownValue,
        accountTestData.salesTeam,
      ),
      false,
      true,
    );
    elementUtils.type(accountCreationPage.accountName, accountName);
    elementUtils.click(accountCreationPage.classification);
    accountCreationPage.selectDropdowns(accountTestData.classification);
    //SPI-3570  New Secondary Vertical “Firearms”
    //select primary vertical dropdonw option
    accountCreationPage.selectDropdownOptionAndRetry(
      accountCreationPage.primaryVerticaldropdown,
      accountTestData.primaryVertical,
    );
    //select secondary vertical dropdonw option
    accountCreationPage.selectDropdownOptionAndRetry(
      accountCreationPage.secondaryVerticaldropdown,
      accountTestData.secondaryVertical,
    );
    elementUtils.type(accountCreationPage.phoneNumber, supportPhoneNumber);
    //click on Save button and verify account Creation sucess message
    accountCreationPage.verifyAccountCreatedSucMessage(accountName);
    cy.viewport(1500, 600);
    //SPI-3570  The selection of “Firearms” should produce a value of “High” in the Fraud Risk Level Account field.
    accountCreationPage.verifyAccountDetails(accountTestData.fraudRiskLevel);
  });

  it("Verify the account shoe more actions menu options new fields addition and deleted fields in Bread console", () => {
    // click on show more actions button new options added and removed few more options refer SPI-3465 story
    elementUtils.click(accSyncPage.accShowMoreActionButton, true);
    cy.xpath(accountCreationPage.amendmentsNonNegotiatedOpt).should(
      "contain",
      "Amendments Non-Negotiated",
    );
    cy.xpath(accountCreationPage.amendmentsNegotiatedOpt).should(
      "contain",
      "Amendments Negotiated",
    );
    //verifying the Submit for Approval option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption(
        "Submit for Approval",
      ),
    ).should("not.exist");
    //verifying the Printable View option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption(
        "Printable View",
      ),
    ).should("not.exist");
    //verifying the Sharing option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption("Sharing"),
    ).should("not.exist");
    //verifying the Check for New Data option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption(
        "Check for New Data",
      ),
    ).should("not.exist");
    //verifying the Sharing Hierarchy option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption(
        "Sharing Hierarchy",
      ),
    ).should("not.exist");
    //verifying the View Website option is not present on the Account Highlight Panel action buttons with a Sales - Enterprise User profile
    cy.xpath(
      accountCreationPage.getXpathForShowMoreActionsMenuOption("View Website"),
    ).should("not.exist");
  });

  //SPI-3288  "Verify ‘Inactive Days' added to the list of fields that show on the ‘Contact’ level"
  it("Verify the creation of an account contact in the Bread console", () => {
    cy.viewport(1700, 600);
    caseCreationPage.closeAlltabs();
    cy.xpath(accountCreationPage.createdAccName).should("be.visible");
    elementUtils.click(accountCreationPage.createdAccName);
    cy.xpath(accountCreationPage.contacts).should("be.visible");
    elementUtils.click(accountCreationPage.contacts);
    cy.xpath(caseCreationPage.newContact)
      .should("be.visible")
      .should("have.text", "New");
    elementUtils.click(caseCreationPage.newContact, false, true);
    // Click the Split screen button if aria-expanded is true
    contactCreationPage.clickSplitViewModeButton();
    cy.xpath(contactCreationPage.salutationText).scrollIntoView();
    cy.xpath(contactCreationPage.salutationText).should(
      "have.text",
      "--None--",
    );
    elementUtils.click(contactCreationPage.salutationButton);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        accountTestData.salutation,
      ),
    ).should("have.text", accountTestData.salutation);
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        accountTestData.salutation,
      ),
    );
    cy.xpath(contactCreationPage.salutationText).should(
      "have.text",
      accountTestData.salutation,
    );
    elementUtils.type(
      contactCreationPage.contactFirstName,
      accountTestData.contactFirstName,
      false,
      true,
      true,
    );
    elementUtils.type(
      contactCreationPage.contactLastName,
      accountTestData.contactLastName,
      false,
      true,
      true,
    );
    cy.xpath(accountCreationPage.saveButton).should("be.visible");
    elementUtils.click(accountCreationPage.saveButton);
    cy.xpath(accountCreationPage.userMessage).should("be.visible");
    cy.xpath(accountCreationPage.toastCloseIcon).should("be.visible");
    cy.xpath(accountCreationPage.toastCloseIcon).click();
    //Closing all tabs that are opned already
    caseCreationPage.closeAlltabs();
    //accountCreationPage.navigateToNewAccountsCreationPage();
    cy.xpath(accountCreationPage.createdAccName).should("be.visible");
    elementUtils.click(accountCreationPage.createdAccName);
    cy.xpath(accountCreationPage.contacts).should("be.visible");
    elementUtils.click(accountCreationPage.contacts);
    cy.xpath(accountCreationPage.authorizedSigner).scrollIntoView();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.xpath(accountCreationPage.inactiveDays).should(
      "have.text",
      "Inactive Days",
    );
  });

  it("Verify the deletion of the account contact.", () => {
    cy.viewport(1500, 600);
    //Closing all tabs that are opned already
    caseCreationPage.closeAlltabs();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    // eslint-disable-next-line cypress/no-force
    elementUtils.click(caseCreationPage.navigationMenuButton, true, true);
    cy.xpath(contactCreationPage.contactNavigationButton).should(
      "have.text",
      "Contacts",
    );
    elementUtils.click(contactCreationPage.contactNavigationButton);
    cy.xpath(contactCreationPage.contactPageButton).should("be.visible");
    cy.xpath(contactCreationPage.contactPageButton).should(
      "have.text",
      "Contacts",
    );
    elementUtils.click(contactCreationPage.subNavigationMenu);
    cy.xpath(opportunityCreationPage.subNavigationMenuSearchBox).type(
      accountTestData.recentlyViewed,
    );
    elementUtils.click(contactCreationPage.recentlyViewed);
    elementUtils.click(opportunityCreationPage.sideButtonToDelete, false, true);
    elementUtils.click(
      opportunityCreationPage.opportunitiesDeleteButton,
      false,
      true,
    );
    elementUtils.click(caseDeletePage.caseDeleteConfirmButton);
    cy.xpath(contactCreationPage.contactDeletionToastMessage)
      .should("be.visible")
      .should("contain", "deleted");
  });

  it("Verify the deletion of created account in Bread console", () => {
    // Below code will delete the created account
    accountCreationPage.navigateToNewAccountsCreationPage();
    accountCreationPage.accountDeletion(accountName, true);
  });
});
