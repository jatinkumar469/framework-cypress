/// <reference types='cypress' />
import Element from "../../../utils/element";
import AccountCreationPage from "../../page-objects/salesforce/accountCreationPage";
import CaseCreationPage from "../../page-objects/salesforce/caseCreationPage";
import ContactCreationPage from "../../page-objects/salesforce/contactCreationPage";
const caseCreationPage = new CaseCreationPage();
const accountCreationPage = new AccountCreationPage();
const elementUtils = new Element();
const contactPage = new ContactCreationPage();
class IntegrationProjectPage {
  hamburgerMenu = '//div[@class="slds-icon-waffle"]';
  searchAppAndItemsBox = '//input[@placeholder="Search apps and items..."]';
  navigationMenu = '(//button[@title="Show Navigation Menu"])[1]';
  integrationProjectButton =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Integration Projects")])[1]';
  recentlyViewed = '//span[@aria-label="Recently Viewed"]/../span[2]';
  newButton = '//a[@title="New"]';
  nextButton = '//span[text()="Next"]';
  accountName =
    '//div[@part="input-container"]/input[@placeholder="Search Accounts..."]';
  accountNameValueLink = "//p[@title='Account Name']/following::p[1]";
  saveButton = '//button[text()="Save"]';
  deleteButton = '//button[@title="Delete"]';
  userMessage = '//span[@data-aura-class="forceActionsText"]';
  projectTab =
    '//div[@class="oneConsoleNav navexConsoleNav"]//a[@title="Integration Projects"]';
  fewSecondsAgo = '//*[contains(text(), "Updated a few seconds ago")]';
  sideButtonToDelete =
    '(//a[@role="button"]//span[text()="Show Actions"]/ancestor::a)[1]';
  deleteProject = '//a[@title="Delete"]';
  deleteConfirmationButton = '//button[@title="Delete"]';
  deleteConfirmationMessage = '//div[@class="detail slds-text-align--center"]';
  newIntergrationTab = '(//span[text()="New Integration Project"])[1]';
  newIntergrationText = '(//h2[text()="New Integration Project"])[1]';
  integrationPageButton =
    '(//a[@title="Integration Projects"]/*[text()="Integration Projects"])[1]';
  integrationChannel = '//button[@aria-label="Integration Channel"]';
  opportunity =
    '//div[@part="input-container"]/input[@placeholder="Search Opportunities..."]';
  salesRep =
    '(//label[text()="Sales Rep"]/following::div[@part="input-container"]/input[@placeholder="Search People..."])[1]';
  requestType = '//button[@aria-label="Request Type"]';
  status = '//button[@aria-label="Status"]';
  meetingDetails = '(//textarea[@class="slds-textarea"])[1]';
  dealHistory = '(//textarea[@class="slds-textarea"])[2]';
  integrationdGoals =
    '(//label[text()="Integration Goals"]/following::textarea[@class="slds-textarea"])[1]';
  casesLink = "//a[contains(@href,'Cases')]";
  newCaseButton = "//button[@name='NewCase']";
  caseType = "//span[normalize-space()='Merchant Integrations']";
  productsRelatedTab = '//li[@title="Products"]';
  moreMenuButton = "//button[@title='More Tabs']";
  newIntegrationButton =
    '//article[@aria-label="Integration Projects"]//button[@name="New"]';
  createMerchantButton = '//button[text()="Create Merchant"]';
  editButton =
    "//button[@name='Integration_Project__c.View_Edit_Merchant']/following::button[@name='Edit']";
  phaseDropdown = "//button[@aria-label='Phase']";
  reviewErrorMsg =
    "//strong[normalize-space()='Review the errors on this page.']";
  phaseUpdateWoLiveDateValueErrorMsg =
    "//ul[contains(@class,'errorsList')]/li[1]";
  actualLiveDateEditbox = "//input[@name='Actual_Live_Date__c']";
  relatedListQuickLinksHeading =
    "//h2[@class='slds-card__header-title slds-truncate' and text()='Related List Quick Links']";
  caseTab = "//a[@id='flexipage_tab2__item' and @data-label='Cases']";
  caseNewButton = "//button[@name='NewCase']";
  newCaseMerchantIntegrationsHeader =
    "//h2[contains(@class,'text-heading--medium') and text()='New Case: Merchant Integrations']";
  newCasePennyTestHeader =
    "//h2[contains(@class,'text-heading--medium') and text()='New Case: Penny Test']";
  caseCreationToastMessage =
    "//span[contains(@class,'toastMessage slds-text-heading--small')]";
  toastCloseButton = "//button[contains(@class,'toastClose')]";
  caseNumberOutputValue =
    "(//span[text()='Case Number']/following::lightning-formatted-text[@data-output-element-id='output-field'])[1]";
  integrationChannelErrorMsg =
    "//div[contains(text(),'Complete this field.')]/span[text()='Integration Channel']";

  getXpathforApp(text) {
    return `//a[@data-label="${text}"]`;
  }

  getXpathforProjectType(projectType) {
    return `//span[text()='${projectType}']`;
  }

  getXPathForIntegrationChannelDropdownValues(searchText) {
    return `//span[@title="${searchText}"]`;
  }

  getXPathForSelectSalesRep(searchText) {
    return `//*[@title="${searchText}"]`;
  }

  getXpathforCaseType(caseType) {
    return `//span[text()='${caseType}']`;
  }

  getXPathForAccountNameDropdownValues(searchText) {
    return `//*[@title="${searchText}"]/strong`;
  }

  getXpathforHeader(text) {
    return `//lightning-formatted-text[text()='${text}']`;
  }

  navigateToNewIntegrationProjectPage() {
    cy.xpath(this.navigationMenu).should("be.visible");
    elementUtils.click(this.navigationMenu);
    cy.xpath(this.integrationProjectButton).should("be.visible");
    cy.xpath(this.integrationProjectButton).should(
      "have.text",
      "Integration Projects",
    );
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    elementUtils.click(this.integrationProjectButton);
    cy.xpath(this.recentlyViewed).should("be.visible");
    cy.xpath(this.recentlyViewed).should(
      "have.text",
      "Updated a few seconds ago",
    );
  }

  /**
   * This function is created for creating integration project
   * @param {*} projectType
   * @param {*} integrationName
   * @param {*} accountName
   * @param {*} integrationChannel
   * @param {*} opportunity
   * @param {*} salesRep
   * @param {*} requestType
   * @param {*} meetingDetails
   * @param {*} dealHistory
   * @param {*} integrationGoals
   * @param {*} integrationName
   */
  createIntegrationProject(
    projectType,
    integrationName,
    accountName,
    integrationChannel,
    opportunity,
    salesRep,
    requestType,
    meetingDetails,
    dealHistory,
    integrationGoals,
  ) {
    cy.xpath(this.newButton).should("be.visible");
    cy.xpath(this.newButton).should("have.text", "New");
    cy.xpath(this.newButton).click();
    cy.xpath(this.newIntergrationTab).should("be.visible");
    cy.xpath(this.newIntergrationTab).should(
      "have.text",
      "New Integration Project",
    );
    cy.xpath(this.newIntergrationTab).click();
    cy.xpath(this.newIntergrationText).should("be.visible");
    cy.xpath(this.newIntergrationText).should(
      "have.text",
      "New Integration Project",
    );
    // Click the Split screen button if aria-expanded is true
    contactPage.clickSplitViewModeButton();
    cy.xpath(this.getXpathforProjectType(projectType))
      .should("be.visible")
      .should("have.text", projectType);
    cy.xpath(this.getXpathforProjectType(projectType)).click();
    cy.xpath(this.nextButton).should("be.visible").should("have.text", "Next");
    cy.xpath(this.nextButton).should("be.visible").click();
    elementUtils.type(
      accountCreationPage.accountName,
      integrationName,
      true,
      true,
      false,
      false,
    );
    elementUtils.type(this.accountName, accountName, true, true, true, false);
    cy.xpath(this.getXPathForAccountNameDropdownValues(accountName)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForAccountNameDropdownValues(accountName)).should(
      "have.text",
      accountName,
    );
    cy.xpath(this.getXPathForAccountNameDropdownValues(accountName)).click();
    cy.xpath(this.integrationChannel).should("be.visible").click();
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).should("be.visible");
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).should("have.text", integrationChannel);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).click();
    cy.xpath(this.opportunity).should("be.visible");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    elementUtils.click(this.opportunity);
    elementUtils.type(this.opportunity, opportunity, true, false, false, false);
    cy.xpath(this.getXPathForSelectSalesRep(opportunity)).contains(opportunity);
    elementUtils.click(this.getXPathForSelectSalesRep(opportunity), true, true);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    elementUtils.click(this.salesRep, true, true);
    elementUtils.type(this.salesRep, salesRep, true, false, false, false);
    cy.xpath(this.getXPathForSelectSalesRep(salesRep)).contains(salesRep);
    elementUtils.click(this.getXPathForSelectSalesRep(salesRep), true, true);
    elementUtils.click(this.requestType);
    cy.xpath(this.getXPathForSelectSalesRep(requestType)).should("be.visible");
    cy.xpath(this.getXPathForSelectSalesRep(requestType)).should(
      "have.text",
      requestType,
    );
    elementUtils.click(this.getXPathForSelectSalesRep(requestType));
    elementUtils.type(
      this.meetingDetails,
      meetingDetails,
      true,
      true,
      false,
      false,
    );
    elementUtils.type(this.dealHistory, dealHistory, true, true, false, false);
    elementUtils.type(
      this.integrationdGoals,
      integrationGoals,
      true,
      false,
      false,
    );
    cy.xpath(this.saveButton).should("be.visible");
    cy.xpath(this.saveButton).click();
    cy.xpath(this.userMessage).should("be.visible");
    cy.xpath(this.userMessage).should(
      "have.text",
      `Integration Project "${integrationName}" was created.`,
    );
    cy.xpath(this.toastCloseButton).click();
  }
  /**
   * This function is created for
   * @param {*} projectType
   * @param {*} integrationName
   * @param {*} integrationChannel
   */
  newIntegrationProject(projectType, integrationName, integrationChannel) {
    //changing the viewport to locate the element and perform the click operation
    cy.viewport(1536, 660);
    elementUtils.click(this.productsRelatedTab);
    elementUtils.click(this.newIntegrationButton, true);
    elementUtils.click(this.getXpathforProjectType(projectType), true);
    elementUtils.click(this.nextButton, true);
    elementUtils.type(accountCreationPage.accountName, integrationName, true);
    elementUtils.click(this.integrationChannel);
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).should("be.visible");
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).should("have.text", integrationChannel);
    cy.xpath(
      this.getXPathForIntegrationChannelDropdownValues(integrationChannel),
    ).click();
    elementUtils.click(this.saveButton, true);
    cy.xpath(this.userMessage).should("be.visible");
    cy.xpath(this.userMessage).should(
      "have.text",
      `Integration Project "${integrationName}" was created.`,
    );
  }
  /**
   * This function created fordeletion of a integration project in Bread Pay console
   * @param {*} integrationName
   */
  deletionOfIntegrationProject(integrationName) {
    // Below code will delete the created Integration project
    cy.xpath(this.projectTab).should("be.visible");
    cy.xpath(this.projectTab).should("have.text", "Integration Projects");
    cy.xpath(this.projectTab).click();
    caseCreationPage.closeAlltabs();
    cy.xpath(this.newButton).should("be.visible");
    //Below code will navigate to account creation page
    cy.xpath(caseCreationPage.navigationMenuButton).should("be.visible");
    cy.xpath(caseCreationPage.navigationMenuButton).should(
      "have.attr",
      "title",
      "Show Navigation Menu",
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(caseCreationPage.navigationMenuButton).trigger("click", {
      force: true,
    });
    cy.xpath(accountCreationPage.accountNavigationButton).should("be.visible");
    cy.xpath(accountCreationPage.accountNavigationButton).should(
      "have.text",
      "Accounts",
    );
    cy.xpath(accountCreationPage.accountNavigationButton).click();
    cy.xpath(accountCreationPage.accountPageButton).should("be.visible");
    cy.xpath(accountCreationPage.accountPageButton).should(
      "have.text",
      "Accounts",
    );
    cy.xpath(caseCreationPage.commonNewButton)
      .should("be.visible")
      .should("have.text", "New");
    cy.xpath(caseCreationPage.navigationMenuButton).should("be.visible");
    cy.xpath(caseCreationPage.navigationMenuButton).should(
      "have.attr",
      "title",
      "Show Navigation Menu",
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(caseCreationPage.navigationMenuButton).trigger("click", {
      force: true,
    });
    cy.xpath(this.integrationProjectButton).should("be.visible");
    cy.xpath(this.integrationProjectButton).should(
      "have.text",
      "Integration Projects",
    );
    cy.xpath(this.integrationProjectButton).click();
    cy.xpath(this.integrationPageButton).should("be.visible");
    cy.xpath(this.integrationPageButton).should(
      "have.text",
      "Integration Projects",
    );

    cy.xpath(this.newButton).should("be.visible").should("have.text", "New");
    cy.xpath(this.fewSecondsAgo).should("be.visible");
    cy.xpath(this.fewSecondsAgo).should(
      "have.text",
      "Updated a few seconds ago",
    );
    cy.xpath(this.sideButtonToDelete).should("be.visible");
    cy.xpath(this.sideButtonToDelete).click();
    cy.xpath(this.deleteProject).should("be.visible");
    cy.xpath(this.deleteProject).click();
    cy.xpath(this.deleteConfirmationMessage).should(
      "have.text",
      "Are you sure you want to delete this Integration Project?",
    );
    cy.xpath(this.deleteConfirmationButton).should("be.visible");
    cy.xpath(this.deleteConfirmationButton).click();
    cy.xpath(this.userMessage)
      .should("be.visible")
      .invoke("text")
      .should(
        "contain",
        `Integration Project "${integrationName}" was deleted. Undo`,
      );
    cy.xpath(accountCreationPage.toastCloseIcon).should("be.visible");
    cy.xpath(accountCreationPage.toastCloseIcon).click();

    //Closing all tabs that are still opened
    caseCreationPage.closeAlltabs();
  }
}
export default IntegrationProjectPage;
