/// <reference types='cypress' />
import Element from "../../../utils/element";
import merchantSeedTestData from "../../fixtures/merchantSeedingTestData.json";
import MerchantSeedingPage from "../../page-objects/salesforce/merchantSeedingPage";
const merchantTestData = merchantSeedTestData.merchantSeed;
const merchantSeedingPage = new MerchantSeedingPage();
const elementUtils = new Element();

class MerchantSeedingAccountPage {
  hierarchyLeveldropdown = '//button[@aria-label="Hierarchy Level"]';
  createMerchantMenuOption = "//span[text()='Create Merchant']";
  createMerchantButton = '//button[@name="Account.Create_Merchant"]';
  merchantPreview =
    "(//input[@name='Create_merchant_in_Preview']/../label/span[@class='slds-checkbox_faux'])";
  merchantProd =
    "(//input[@name='Create_Merchant_in_Production']/../label/span[@class='slds-checkbox_faux'])";
  merchantNextButton = "//button[text()='Next']";
  websiteAccount = "//input[@name='Website']";
  websiteText = "(//span[text()='Website'])[2]";
  websiteLink = "//lightning-formatted-url/a[text()='www.google.com']";
  posCheckOutCapability =
    "//button[@aria-label='POS Checkout Capability' and @data-value='Tap To Pay & Key Entry']";
  legalName = "//input[@name='Legal_Name__c']";
  foreignEntity = "//input[@name='Foreign_Entity__c']";
  foreignEntitycheckbox =
    "//label/span[text()='Foreign Entity']/../following-sibling::div/span";
  federalTaxId = '//slot[@name="output"]/*[text()="00-0000000"]';
  taxidinputfield = "//input[@name= 'Federal_Tax_ID__c']";
  breadEngagementSection = "(//flexipage-record-home-scrollable-column)[2]";
  requestSubmitSuccessfullyTextPreview =
    '//p/strong[text()="Your request has been successfully submitted to Preview    ."]';
  requestSubmitSuccessfullyTextProd =
    '//p/strong[text()="Your request has been successfully submitted to Preview and Production."]';
  partner = "//input[@placeholder='Search Merchant Partners...']";
  merchantReferenceIdInputField = "//input[@name='Merchant_Reference_Id']";
  seedingMerchantProdText = "//span[text()='Seeding Environment: Production']";
  previewPlatformMerchantId =
    '//span[text()="Preview Platform Merchant ID"]/ancestor::dt/following-sibling::dd//lightning-formatted-text';
  platformMerchantId =
    '//span[text()="Platform Merchant ID"]/ancestor::dt/following-sibling::dd//lightning-formatted-text';
  createMerchantText = "//h2[text()='Create Merchant']";
  chooseEnvironmentText =
    "//strong[text()='Please choose the environment(s) in which you would like to create the merchant.']";
  createMerchantPreviewText = "//span[text()='Create Merchant in Preview']";
  createMerchantProdText = "//span[text()='Create Merchant in Production']";
  seedingPreviewText = "//span[text()='Seeding Environment: Preview    ']";
  seedingPreviewProdText =
    "//span[text()='Seeding Environment: Preview and Production']";
  basicInfotext = "//span[@title='Basic Info']";
  accountNameText = "(//span[text()='Account Name'])[3]";
  customerSupportPhoneNumber =
    "//label[text()='Customer Support Phone Number']";
  legalEntName =
    "//span[text()='Legal Entity Name']/abbr[@class='slds-required']";
  primaryVerticalText =
    "//label[text()='Primary Vertical']/abbr[@class='slds-required']";
  secondaryVerticalText =
    "//label[text()='Secondary Vertical']/abbr[@class='slds-required']";
  websiteCreateMerchantText =
    "//span[text()='Website']/abbr[@class='slds-required']";
  riskText = "//span[text()='Risk']";
  healthcareMerchant =
    "//select[@name='Healthcare_Merchant2']/option[text()='No']";
  emailOptInTrue =
    "//span[text()='Email Opt In']/../following-sibling::p/span[text()='True']";
  borrowRatio =
    "//span[text()='Borrow Ratio']/../following-sibling::p/span[number()='200']";
  delinquencyRatio =
    "//span[text()='   Delinquency Ratio']/../following-sibling::p/span[number()='100']";
  fraudrisklevelText =
    "//span[text()='Fraud Risk Level ']/following-sibling::span[text()='(Changes will be reflected after navigating to the next screen.)']";
  risklevelText = "//span[text()='Risk Level']";
  partnerText = "//span[text()='Partner']";
  attributesText = "//span[text()='Attributes']";
  posCreateMerchantText = "//span[text()='Point of Sale Checkout Capability']";
  seedingPreviewPageText =
    "//span[text()='Kindly review before Seeding Merchant to : Preview    ']";
  dropdownbutton =
    "//button[@class='slds-button slds-button_icon-border-filled fix-slds-button_icon-border-filled slds-button_last']";
  viewplatformdetailsButton = "//span[text()='View Platform Details']";
  viewplatformdetailsokButton = "//button[text()='OK']";
  IntegratedviewplatformdetailsButton =
    "//button[@name='Integration_Project__c.View_Edit_Merchant']";
  ClosewindowButton =
    "//button[@title='Cancel and close']//lightning-primitive-icon[@variant='bare']";
  editsalesforcebutton = "//a[normalize-space()='Edit in Salesforce']";
  customerSupportPhonePreview =
    "//span[text()='Customer Support Phone Number']/../following-sibling::p/span[text()='2344412111']";
  previewTaxIdValue = "//p[text()='00-0000000']";
  previewWebsiteValue =
    "//span[text()='Website']/../following-sibling::p/span[text()='www.google.com']";
  previewPrimaryVertical =
    "//span[text()='Primary Vertical']/../following-sibling::p/span[text()='Automotive']";
  previewSecondaryVertical =
    "//span[text()='Secondary Vertical']/../following-sibling::p/span[text()='Auto Aftermarket']";
  previewPointOfSale =
    "//span[text()='Point of Sale Checkout Capability']/../following-sibling::p";
  previewBorrowRatio =
    "//span/p[text()='  Borrow Ratio']/following-sibling::p[number()='200']";
  previewFraudRiskLevel =
    "//span[text()='Fraud Risk Level']/../following-sibling::p/span[text()='Medium']";
  previewRiskLevel =
    "//span[text()='Risk Level']/../following-sibling::p[text()='1']";
  previewMerchantRefId = "//span[text()='Merchant Reference Id']";
  programProductTableTitle =
    "//div[@class='slds-m-left_x-small slds-m-bottom_xx-small']";
  programProductErrorMsg =
    "//strong[.='Error : no program values found associated with the merchantID']";
  editParentAccountSubmissionSucMsg =
    "//div[@class='container slds-m-bottom_x-small']/flowruntime-display-text-lwc/lightning-formatted-rich-text/span/p/strong";

  /**
   * This function check element is visible or not
   * @param {string} element element can be valid XPATH
   */
  elementVisible(element) {
    cy.xpath(element).should("be.visible");
  }

  /**
   * This function check element is exists or not
   * @param {string} element element can be valid XPATH
   */
  elementExists(element) {
    cy.xpath(element).should("exist");
  }

  /**
   * This function returns XPATH for option selection from select input dropdown
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForNewAccountDropdownValues(searchText) {
    return `//span[@title="${searchText}"]`;
  }

  /**
   * This function returns the XPATH for primary vertical selected value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPrimaryVerticalValues(searchText) {
    return `//label[text()="Primary Vertical"]/following-sibling::div//select/option[text()="${searchText}"]`;
  }

  /**
   * This function returns the XPATH for secondary vertical selected value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForSecondaryVerticalValues(searchText) {
    return `//label[text()="Secondary Vertical"]/following-sibling::div//select/option[text()="${searchText}"]`;
  }

  /**
   * This function returns the XPATH for Point of Sale checkout capability option to select
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPOSValues(searchText) {
    return `//select[@name='Point_of_Sale_Checkout_Capability2']/option[text()="${searchText}"]`;
  }

  /**
   * This function returns the XPATH for Point of Sale Checkout Capability selected value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPreviewPOSValues(searchText) {
    return `//span[text()='Point of Sale Checkout Capability']/../following-sibling::p[text()="${searchText}"]`;
  }

  /**
   * This function returns XPATH for Primary vertical selected value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPreviewPrimaryVerticalValues(searchText) {
    return `//span[text()='Primary Vertical']/../following-sibling::p/span[text()="${searchText}"]`;
  }

  /**
   * This function returns XPATH for Secondary vertical selected value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPreviewSecondaryVerticalValues(searchText) {
    return `//span[text()='Secondary Vertical']/../following-sibling::p/span[text()="${searchText}"]`;
  }

  /**
   * This function select value from merchant dropdown
   * @param {string} dropDownvalue dropDownvalue should any string
   */
  selectDropdownMerchant(dropDownvalue) {
    cy
      .xpath(this.getXPathForNewAccountDropdownValues(dropDownvalue))
      .scrollIntoView(),
      cy
        .xpath(this.getXPathForNewAccountDropdownValues(dropDownvalue))
        .should("be.visible");
    cy.xpath(this.getXPathForNewAccountDropdownValues(dropDownvalue)).should(
      "have.text",
      dropDownvalue,
    );
    cy.xpath(this.getXPathForNewAccountDropdownValues(dropDownvalue)).click();
  }

  /**
   * This function verify products and program UI section
   */
  verifyProductsProgramUI() {
    //verify table title
    cy.xpath(this.programProductTableTitle).should("be.visible");
    //verify table column
    cy.xpath(this.getXPathForNewAccountDropdownValues("Program Name")).should(
      "be.visible",
    );
    cy.xpath(
      this.getXPathForNewAccountDropdownValues("Program Attributes"),
    ).should("be.visible");
    cy.xpath(this.getXPathForNewAccountDropdownValues("Product Name")).should(
      "be.visible",
    );
    cy.xpath(
      this.getXPathForNewAccountDropdownValues("Product Attributes"),
    ).should("be.visible");
    cy.xpath(this.programProductErrorMsg).should("be.visible");
  }

  /**
   * This function verify the merchant seeding prod fields
   */
  verifyMerchantSeedingProdFields() {
    this.elementExists(this.attributesText);
    this.elementExists(this.partnerText);
    this.elementExists(this.borrowRatio);
    this.elementExists(this.emailOptInTrue);
  }

  /**
   * This funtion creates a new merchant in both preview and prod environment in bread console
   */
  createMerchantOnPreviewAndProdEnvironment() {
    elementUtils.click(this.createMerchantButton);
    cy.xpath(this.createMerchantText).should("be.visible");
    cy.xpath(this.chooseEnvironmentText).should("be.visible");
    cy.xpath(this.createMerchantPreviewText).should("be.visible");
    cy.xpath(this.createMerchantProdText).should("be.visible");
    this.elementExists(this.merchantPreview);
    elementUtils.click(this.merchantPreview);
    this.elementExists(this.merchantProd);
    elementUtils.click(this.merchantProd);
    elementUtils.click(this.merchantNextButton);
    cy.xpath(this.seedingPreviewProdText).should("be.visible");
    cy.xpath(this.basicInfotext).should("be.visible");
    cy.xpath(this.customerSupportPhoneNumber).should("be.visible");
    elementUtils.click(this.merchantNextButton);
  }

  /**
   * This funtion creates a new merchant in preview environment in bread console
   */
  createMerchantOnPreview() {
    elementUtils.click(merchantSeedingPage.createMerchantbutton, true);
    cy.xpath(merchantSeedingPage.createMerchantScreen).should("be.visible");
    elementUtils.click(this.merchantPreview, true);
    elementUtils.click(merchantSeedingPage.nextButton, true);
    cy.xpath(merchantSeedingPage.seedEnviornmentScreen).should("be.visible");
    elementUtils.type(
      merchantSeedingPage.legalentityInputField,
      merchantTestData.legalName,
    );
    elementUtils.type(
      merchantSeedingPage.websiteInputField,
      merchantTestData.website,
    );
    elementUtils.click(merchantSeedingPage.nextButton, true);
  }

  /**
   * This funtion creates a new merchant in prod environment in bread console
   */
  createMerchantOnProd() {
    elementUtils.click(merchantSeedingPage.createMerchantbutton, false, true);
    cy.xpath(merchantSeedingPage.createMerchantScreen).should("be.visible");
    this.elementExists(merchantSeedingPage.productionCheckbox);
    elementUtils.click(merchantSeedingPage.productionCheckbox, false, true);
    elementUtils.click(merchantSeedingPage.nextButton);
    cy.xpath(merchantSeedingPage.seedEnviornmentScreen).should("be.visible");
    elementUtils.type(
      merchantSeedingPage.legalentityInputField,
      merchantTestData.legalName,
    );
    elementUtils.type(
      merchantSeedingPage.websiteInputField,
      merchantTestData.website,
    );
    elementUtils.click(merchantSeedingPage.nextButton);
  }

  /**
   * This funtion creates a new merchant from integration project in seeding environment in  bread console
   * @param {string} taxId  tax should be an valid string such as 7 digits random number along with 23- such as 23-1234567
   * @param {string} supportPhoneNumber support number should an valid string such as 10 digits random number
   */
  createMerchantFromIntegrationProject(taxId, supportPhoneNumber) {
    elementUtils.click(merchantSeedingPage.createMerchantbutton);
    cy.xpath(merchantSeedingPage.createMerchantScreen).should("be.visible");
    this.elementExists(merchantSeedingPage.previewCheckbox);
    elementUtils.click(merchantSeedingPage.previewCheckbox, true, true);
    this.elementExists(merchantSeedingPage.productionCheckbox);
    elementUtils.click(merchantSeedingPage.productionCheckbox, true, true);
    elementUtils.click(merchantSeedingPage.nextButton);
    cy.xpath(merchantSeedingPage.seedEnviornmentScreen).should("be.visible");
    elementUtils.type(
      merchantSeedingPage.legalentityInputField,
      merchantTestData.legalName,
    );
    elementUtils.type(
      merchantSeedingPage.websiteInputField,
      merchantTestData.website,
      true,
      true,
    );
    elementUtils.type(merchantSeedingPage.taxidInputField, taxId, true, true);
    elementUtils.type(
      merchantSeedingPage.customersupportPhonenumberInput,
      supportPhoneNumber,
      true,
      true,
    );
    cy.xpath(merchantSeedingPage.nextButton).should("be.visible");
    elementUtils.click(merchantSeedingPage.nextButton);
  }
}
export default MerchantSeedingAccountPage;
