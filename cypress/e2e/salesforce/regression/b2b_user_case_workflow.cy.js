import Credentials from "../../../../utils/credentials";
import Element from "../../../../utils/element";
import testData from "../../../fixtures/merchantSupportCaseTestData.json";
import appTestData from "../../../fixtures/salesforceTestData.json";
import AccountCreationPage from "../../../page-objects/salesforce/accountCreationPage";
import CaseBuyerSupportPage from "../../../page-objects/salesforce/caseBuyerSupportPage";
import CaseCreationPage from "../../../page-objects/salesforce/caseCreationPage";

describe("Verify cace creation edit & read work flow using B2B support agent in Bread console", () => {
  const accountCreationPage = new AccountCreationPage();
  const caseCreationPage = new CaseCreationPage();
  const caseBuyerSupportPage = new CaseBuyerSupportPage();
  const elementUtils = new Element();
  const appName = appTestData.appnames.cases_appname;
  const newMerchantSupportCaseCreationFieldValues =
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

  it("Verify the creation of a merchant service case in Bread Pay service console", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    //Below code will create a new service case
    cy.xpath(caseCreationPage.newCaseCreationButton)
      .should("be.visible")
      .should("have.text", "New");
    elementUtils.click(caseCreationPage.newCaseCreationButton, false, true);
    cy.xpath(caseCreationPage.caseStatusDropdown).should("have.text", "New");
    cy.xpath(caseCreationPage.caseCategoryText).should("have.text", "--None--");
    elementUtils.click(caseCreationPage.caseCategoryDropdown);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.category,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.category,
      ),
    ).should("have.text", newMerchantSupportCaseCreationFieldValues.category);
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.category,
      ),
    );
    cy.xpath(caseCreationPage.caseCategoryText).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.category,
    );
    cy.xpath(caseCreationPage.caseSubcategoryText).should(
      "have.text",
      "--None--",
    );
    elementUtils.click(caseCreationPage.caseSubcategoryDropdown);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.subCategory,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.subCategory,
      ),
    ).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.subCategory,
    );
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.subCategory,
      ),
    );
    cy.xpath(caseCreationPage.caseSubcategoryText).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.subCategory,
    );
    elementUtils.click(caseCreationPage.casecloseReasonDropdown);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.caseCloseResone,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.caseCloseResone,
      ),
    ).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.caseCloseResone,
    );
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.caseCloseResone,
      ),
    );
    cy.xpath(caseCreationPage.casecloseReasonText).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.caseCloseResone,
    );
    elementUtils.type(
      caseCreationPage.caseSubjectInput,
      newMerchantSupportCaseCreationFieldValues.caseSubject,
    );
    elementUtils.type(
      caseCreationPage.caseDescriptionTextArea,
      newMerchantSupportCaseCreationFieldValues.caseDescription,
    );
    elementUtils.type(
      caseCreationPage.requesterAccountNameInput,
      newMerchantSupportCaseCreationFieldValues.requesterAccountName,
      false,
      false,
      true,
    );
    elementUtils.click(
      caseCreationPage.getXPathForcreatedCaseRequesteSearchResults(
        newMerchantSupportCaseCreationFieldValues.requesterAccountName,
      ),
    );
    elementUtils.type(
      caseCreationPage.requesterContactNameInput,
      newMerchantSupportCaseCreationFieldValues.requesterContactName,
      false,
      false,
      true,
    );
    elementUtils.click(
      caseCreationPage.getXPathForcreatedCaseRequesteSearchResults(
        newMerchantSupportCaseCreationFieldValues.requesterContactName,
      ),
    );
    cy.xpath(caseCreationPage.caseCreationSaveButton)
      .should("be.visible")
      .should("not.have.attr", "disabled");
    elementUtils.click(caseCreationPage.caseCreationSaveButton);
  });

  it("Verify the created merchant service case in Bread console", () => {
    cy.viewport(1500, 900);
    //Below code will validate the created case
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportCategory,
        newMerchantSupportCaseCreationFieldValues.category,
      ),
    ).should("be.visible");
    cy.xpath(
      caseBuyerSupportPage.merchantSupportDescriptionSection,
    ).scrollIntoView();
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSubject,
        newMerchantSupportCaseCreationFieldValues.caseSubject,
      ),
    ).should("be.visible");
    cy.xpath(
      caseBuyerSupportPage.buyerSupportRequesterSection,
    ).scrollIntoView();
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportAccountName,
        newMerchantSupportCaseCreationFieldValues.requesterAccountName,
      ),
    ).should("exist");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSuportContactName,
        newMerchantSupportCaseCreationFieldValues.requesterContactName,
      ),
    ).should("exist");
  });

  it("Verify edit merchant service case in Bread Pay service console", () => {
    cy.viewport(1500, 900);
    //Below code will create a new service case
    cy.xpath(caseCreationPage.caseEditButton)
      .should("be.visible")
      .should("have.text", "Edit");
    elementUtils.click(caseCreationPage.caseEditButton);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    elementUtils.click(caseCreationPage.caseCategoryDropdown);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editCategory,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editCategory,
      ),
    ).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.editCategory,
    );
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editCategory,
      ),
    );
    cy.xpath(caseCreationPage.caseCategoryText).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.editCategory,
    );
    cy.xpath(caseCreationPage.caseSubcategoryText).should(
      "have.text",
      "--None--",
    );
    elementUtils.click(caseCreationPage.caseSubcategoryDropdown);
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editSubCategory,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editSubCategory,
      ),
    ).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.editSubCategory,
    );
    elementUtils.click(
      caseCreationPage.getXPathForCaseTypeDropdownValues(
        newMerchantSupportCaseCreationFieldValues.editSubCategory,
      ),
    );
    cy.xpath(caseCreationPage.caseSubcategoryText).should(
      "have.text",
      newMerchantSupportCaseCreationFieldValues.editSubCategory,
    );
    cy.xpath(caseCreationPage.caseSubjectInput).clear();
    elementUtils.type(
      caseCreationPage.caseSubjectInput,
      newMerchantSupportCaseCreationFieldValues.editSubject,
    );
    cy.xpath(caseCreationPage.caseDescriptionTextArea).clear();
    elementUtils.type(
      caseCreationPage.caseDescriptionTextArea,
      newMerchantSupportCaseCreationFieldValues.editDescription,
    );
    cy.xpath(caseCreationPage.caseCreationSaveButton)
      .should("be.visible")
      .should("not.have.attr", "disabled");
    elementUtils.click(caseCreationPage.caseCreationSaveButton);
  });

  it("Verify the edited merchant service case in Bread console", () => {
    cy.viewport(1500, 900);
    //Below code will validate the created case
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportCategory,
        newMerchantSupportCaseCreationFieldValues.editCategory,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSubject,
        newMerchantSupportCaseCreationFieldValues.editSubCategory,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSubject,
        newMerchantSupportCaseCreationFieldValues.caseCloseResone,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSuccessOwner,
        newMerchantSupportCaseCreationFieldValues.successLever,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSuccessLevel,
        newMerchantSupportCaseCreationFieldValues.successLever,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSuccessLevelProducts,
        newMerchantSupportCaseCreationFieldValues.liveBreadProducts,
      ),
    ).should("be.visible");
    cy.xpath(
      caseBuyerSupportPage.merchantSupportDescriptionSection,
    ).scrollIntoView();
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSubject,
        newMerchantSupportCaseCreationFieldValues.editSubject,
      ),
    ).should("be.visible");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportCaseOrigin,
        newMerchantSupportCaseCreationFieldValues.editDescription,
      ),
    ).should("be.visible");
    cy.xpath(
      caseBuyerSupportPage.buyerSupportRequesterSection,
    ).scrollIntoView();
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportAccountName,
        newMerchantSupportCaseCreationFieldValues.requesterAccountName,
      ),
    ).should("exist");
    cy.xpath(
      caseCreationPage.getFormattedXpath(
        caseBuyerSupportPage.merchantSupportSuportContactName,
        newMerchantSupportCaseCreationFieldValues.requesterContactName,
      ),
    ).should("exist");
  });
});
