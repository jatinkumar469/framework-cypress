/// <reference types='cypress' />
import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
const assert = new AssertText();
const elementUtils = new Element();
class MerchantSeedingPage {
  createMerchantbutton = '//button[text()="Create Merchant"]';
  createMerchantScreen = '//h2[text()="Create Merchant"]';
  previewCheckbox = '//div//input[@name="Create_merchant_in_Preview"]';
  productionCheckbox = '//input[@name="Create_Merchant_in_Production"]';
  seedEnviornmentScreen = '//span[contains(text(), "Seeding Environment")]';
  nextButton = '//button[text()="Next"]';
  legalentityInputField = '//input[@name= "Legal_Entity_Name"]';
  websiteInputField = '//input[@name= "Website"]';
  taxidInputField = '//input[@name= "Tax_Id"]';
  customersupportPhonenumberInput =
    '//label[text()="Customer Support Phone Number"]/parent::div//input';
  customerPhonenumberInput = '//input[name="Phone"]';
  reviewScreen =
    '//span[contains(text(), "Kindly review before Seeding Merchant to ")]';
  submitButton = '//button[text()="Submit"]';
  okButton = '//button[text()="Ok"]';
  successMessage = '//div[@id="wrapper-body"]//strong';
  accountToastMessage =
    '//div[@role="alert"]//span[contains(@class, "toastMessage")][1]';
  moretab = '//slot[@name="main"]//button[text()="More"]';
  productstab = '//span[text()="Products"]';
  viewplatformbutton = '//button[text()="View Platform Details"]';
  editInSalesforceLink = '//a[text()="Edit in Salesforce"]';
  relatedAccount =
    '//span[text()="Account Name"]/ancestor::dt/following-sibling::dd//a';
  platformId =
    '//span[text()="Platform Merchant ID"]/ancestor::dt//following-sibling::dd//lightning-formatted-text';
  previewPlatformId =
    '//span[text()="Preview Platform Merchant ID"]/ancestor::dt//following-sibling::dd//lightning-formatted-text';
  createMerchantError = "//lightning-formatted-rich-text//p";
  okButtonCreateMerchantError = '//button[text()="OK"]';
  merchantVerifyUrl = '//span[.="{{text}}"]';

  /**
   * This function returns XPATH based on given string value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getReviewOutput(searchText) {
    return `//p[contains(text(),"${searchText}")]`;
  }

  /**
   * This function returns XPATH account name
   * @returns {string} Should return XPATH of account Name element
   */
  getAccountText() {
    return `//span[text()="Account Name"]/parent::p//following-sibling::p//span`;
  }

  /**
   * This function returns XPATH for account legal entity text
   * @returns {string} Should return XPATH of account legal entity element
   */
  getAccountLegalEntityText() {
    return `//span[text()="Legal Entity Name"]/parent::p//following-sibling::p//span`;
  }

  /**
   * This function returns XPATH based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getReviewOutputText(searchText) {
    return `//div[@id="wrapper-body"]//span[contains(text(),"${searchText}")]`;
  }

  /**
   * This function returns XPATH for account name action button
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getAccountactionbutton(searchText) {
    return `//a[text()="${searchText}"]/ancestor::tr//a[@role="button"]`;
  }

  /**
   * This function verify preview platform Id should not be null after merchant seeded
   */
  //Can be removed
  verifyPreviewPlatformIdShouldNotBeNull() {
    cy.xpath(this.previewPlatformId)
      .should("be.visible")
      .invoke("text")
      .should("not.be.null");
  }

  /**
   * This function switch to EditInSalesForce window
   */
  switchToEditSalesForceWindow() {
    cy.xpath(this.editInSalesforceLink).then(($editlink) => {
      const modifyTab = $editlink.prop("href");
      cy.visit(modifyTab);
    });
  }
  /**
   * This function is verifing merchant values in the review screen the Integration project
   * @param {*} parentaccName
   * @param {*} legalName
   * @param {*} primaryVertical
   * @param {*} secondaryVertical
   */
  verifyMerchantValues(
    parentaccName,
    legalName,
    primaryVertical,
    secondaryVertical,
  ) {
    cy.xpath(this.reviewScreen).should("be.visible");
    cy.xpath(this.getAccountText(parentaccName)).should("exist");
    assert.have(this.getAccountText(parentaccName), parentaccName);
    assert.have(this.getReviewOutputText(legalName), legalName);
    cy.xpath(this.getReviewOutputText(primaryVertical)).should("exist");
    assert.have(this.getReviewOutputText(primaryVertical), primaryVertical);
    cy.xpath(this.getReviewOutputText(secondaryVertical)).should("exist");
    assert.have(this.getReviewOutputText(secondaryVertical), secondaryVertical);
  }
  /**
   * This function is created for Verify merchant values in the review screen the Integration project
   * @param {*} accName
   * @param {*} legalName
   * @param {*} primaryVertical
   * @param {*} secondaryVertical
   */
  verifyMerchantValuesInIntegrationPro(
    accountName,
    legalName,
    primaryVertical,
    secondaryVertical,
  ) {
    cy.xpath(this.reviewScreen).should("be.visible");
    cy.xpath(this.getAccountText(accountName)).should("have.text", accountName);
    cy.xpath(this.getReviewOutputText(legalName)).should(
      "have.text",
      legalName,
    );
    cy.xpath(this.getReviewOutputText(primaryVertical)).should("exist");
    cy.xpath(this.getReviewOutputText(primaryVertical)).should(
      "have.text",
      primaryVertical,
    );
    cy.xpath(this.getReviewOutputText(secondaryVertical)).should("exist");
    cy.xpath(this.getReviewOutputText(secondaryVertical)).should(
      "have.text",
      secondaryVertical,
    );
  }
  /**
   * This function is created for verify review screen values in integration project
   * @param {*} accountName
   * @param {*} legalName
   * @param {*} supportPhoneNumber
   * @param {*} taxId
   * @param {*} primaryVerticalTestData
   * @param {*} secondaryVerticalTestData
   */
  reviewScreenIntegration(
    accountName,
    legalName,
    supportPhoneNumber,
    taxId,
    primaryVerticalTestData,
    secondaryVerticalTestData,
  ) {
    cy.xpath(this.reviewScreen).should("be.visible");
    cy.xpath(this.getAccountText(accountName)).should("exist");
    cy.xpath(this.getAccountText(accountName)).should("have.text", accountName);
    cy.xpath(this.getReviewOutputText(legalName)).should(
      "have.text",
      legalName,
    );
    cy.xpath(this.getReviewOutputText(supportPhoneNumber)).should(
      "have.text",
      supportPhoneNumber,
    );
    cy.xpath(this.getReviewOutput(taxId)).scrollIntoView();
    cy.xpath(this.getReviewOutput(taxId)).should("have.text", taxId);
    cy.xpath(this.getReviewOutputText(primaryVerticalTestData)).should("exist");
    cy.xpath(this.getReviewOutputText(primaryVerticalTestData)).should(
      "have.text",
      primaryVerticalTestData,
    );
    cy.xpath(this.getReviewOutputText(secondaryVerticalTestData)).should(
      "exist",
    );
    cy.xpath(this.getReviewOutputText(secondaryVerticalTestData)).should(
      "have.text",
      secondaryVerticalTestData,
    );
  }
  merchantSuccSubmission() {
    cy.xpath(this.submitButton).should("be.visible");
    elementUtils.click(this.submitButton);
    cy.xpath(this.successMessage)
      .should("be.visible")
      .invoke("text")
      .should("contain", "Your request has been successfully submitted");
    cy.xpath(this.okButton).should("be.visible");
    elementUtils.click(this.okButton);
    cy.xpath(this.platformId)
      .should("be.visible")
      .invoke("text")
      .should("not.be.null");
    cy.xpath(this.previewPlatformId)
      .should("be.visible")
      .invoke("text")
      .should("not.be.null");
  }
}
export default MerchantSeedingPage;
