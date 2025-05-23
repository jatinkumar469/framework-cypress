/// <reference types='cypress' />
import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import CaseCreationPage from "../../page-objects/salesforce/caseCreationPage";
import ContactCreationPage from "../../page-objects/salesforce/contactCreationPage";
import MerchantSeedingAccountPage from "../../page-objects/salesforce/merchantSeedingAccountPage";
const merchantSeedingAccountPage = new MerchantSeedingAccountPage();
const assert = new AssertText();
const elementUtils = new Element();
const caseCreationPage = new CaseCreationPage();
const contactCreationPage = new ContactCreationPage();

class AccountCreationPage {
  navigationMenu = '(//button[@title="Show Navigation Menu"])[1]';
  accountNavigationButton =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Accounts")])[1]';
  accountSearch =
    '//ul[@role="group"]/li[@class="slds-listbox__item" and .="{{text}}"]';
  accountPageButton = '(//a[@title="Accounts"]/*[text()="Accounts"])[1]';
  appName = '//span[@title="Bread Pay Service Console"]';
  Typedropdown = '//button[@aria-label="Type"]';
  newButton = '//a[@title="New"]';
  hamburgerMenu = '//button[@aria-haspopup="dialog" and @title="App Launcher"]';
  recentlyViewed = '//h1[contains(@class,"slds-scrollable_none")]';
  breadMerchant = '//div[text()="For Bread Merchants using CCB underwriting"]';
  partnerships = '//span[text()="Partnerships"]';
  rbcMerchant = '//span[text()="RBC Merchant"]';
  showMoreMenu = '//a[@title="Show one more action"]';
  newMenuOption = "//*[@title='New']";
  nextButton = '//span[text()="Next"]';
  healthStatusReason = '//button[@aria-label="Health Status Reason"]';
  accountName = '//input[@name="Name"]';
  exceptionName =
    '(//label[text()="Exception Name"]/following::div/input[@part="input"])[1]';
  primaryVerticaldropdown = '//button[@aria-label="Primary Vertical"]';
  exceptionStatusdropdown = '//button[@aria-label="Status"]';
  secondaryVerticaldropdown = '//button[@aria-label="Secondary Vertical"]';
  eCommercePlatform =
    '//button[@aria-label="E-Commerce Platform - Current Selection: --None--"]';
  supportPhoneNumber =
    "(//label[text()='Support Phone Number']/following::input[contains(@name,'Phone')])[1]";
  phoneNumber = '(//input[contains(@name,"Phone")])[1]';
  saveButton = '//button[text()="Save"]';
  searchAppAndItemsBox =
    "//input[contains(@placeholder,'Search apps and items')]";
  titleOftheaccount =
    '//div//lightning-formatted-text[@class="custom-truncate"]';
  closeButton = '//button[@title="Close Automation Test Account | Account"]';
  firstRecord = '(//th[@scope="row"])[1]';
  sideButtonToDelete = '(//div[@data-aura-class="forceVirtualAction"])[1]';
  deleteAccount = '//a[@title="Delete"]';
  deleteMessage = '//div[@class="detail slds-text-align--center"]';
  deleteButton = '//button[@title="Delete"]';
  userMessage = '//span[@data-aura-class="forceActionsText"]';
  toastDeleteIcon = "//button[contains(@class,'toastClose ')]";
  accountsTab = '//a[@title="Accounts"]';
  fewSecondsAgo = '//*[contains(text(), "Updated a few seconds ago")]';
  newAccountCreationButton = '(//a[@title="New" and @role="button"]/div)[1]';
  parentAccountSelect = '//input[@placeholder="Search Accounts..."]';
  lightningButtonMenu =
    "//ul[@class='slds-button-group-list']/li[2]/lightning-button-menu[contains(@class,'menu-button-item')]";
  lightningMenuButton =
    "//ul[@class='slds-button-group-list']/li[2]//button[contains(@class,'fix-slds-button_icon-border-filled slds-button_last')]";
  lightningShowMoreMenu =
    "//button[@class='slds-button slds-button_icon-border-filled fix-slds-button_icon-border-filled slds-button_last']//lightning-primitive-icon[@variant='bare']";
  viewAccountHeirarchyMenuOption = "(//*[@title='View Account Hierarchy'])[1]";
  accountHierarchyTableAccountClassificationColumn =
    "//table[@aria-label='Recently Viewed']/thead/tr//th[@title='Account Classification']";
  accountHierarchyTableHierarchyLevelColumn =
    "//span[@class='content'][normalize-space()='Hierarchy Level']";
  viewplatformDetailsMenuOption =
    "//a[@role='menuitem']/span[text()='View Platform Details']";
  viewPlatformDetailsHeading = '//h2[text()="View Platform Details"]';
  viewPlatformDetailsNextButton = '//button[text()="Next"]';
  searchEditbox = "//input[@name='Account-search-input']";
  recentlyViwedTableFirstRow =
    "//table[@aria-label='Recently Viewed']/tbody/tr[1]";
  recentlyViwedTableRows = "//table[@aria-label='Recently Viewed']/tbody/tr";
  accountCasesLabel = '//h2//a//span[@title="Cases"]';
  accountCasesHeader = '//a[.="Cases(1)"]';
  accountCaseLink = '//records-hoverable-link//a[@class="slds-truncate"]';
  accountCaseDeleteLink = '//a[@title="Delete"]';
  accountCaseAlertHeading =
    '//h1//support-output-case-subject-field[.="{{text}}"]';
  accountCaseRecordType =
    '//div[contains(@class,"recordTypeName")]/span[.="{{text}}"]';
  accountCaseStatus = '//div[contains(@class,"Status")]/span[.="{{text}}"]';
  caseStatusValue = "//button[@title='Edit Status']/preceding::span[1]";
  accountCaseDescription = '//div[@class="text" and .="{{text}}"]';
  accountCaseAccountName =
    '//div[@title="Account Name"]/parent::div//div//a[@data-refid="recordId"]';
  accountCaseOwner = '//a[@title="{{text}}"]';
  caseOwner = '//*[text()="{{text}}"]';
  accountSuccessOwner =
    '//label[.="Success Owner"]/parent::lightning-grouped-combobox//input[@placeholder="Search People..."]';
  anualAccountAttestationDate = '//input[@name="Annual_Attestation_Date__c"]';
  viewAnnualAttestationDueDate =
    '//span[.="Annual Attestation Due Date"]/ancestor::record_flexipage-record-field//dd//lightning-formatted-text';
  salesTeam = '//button[@aria-label="Sales Team"]';
  classification = '//button[@aria-label="Account Classification"]';
  accountDetailsPageScroll =
    '//flexipage-component2[@data-component-id="flexipage_tabset"]//flexipage-tabset2/ancestor::flexipage-record-home-scrollable-column';
  salesTeamDropdown = "//button[@aria-label='Sales Team']";
  salesTeamDropdownDefaultText =
    "//button[@aria-label='Sales Team']//span[@class='slds-truncate'][normalize-space()='--None--']";
  annualAccountAttestationDateEditIcon =
    "//button[@title='Edit Annual Attestation Date']";
  toastCloseIcon = "//*[contains(@class,'toastClose')]";
  accountToastMessage = '//span[contains(@class, "toastMessage")][1]';
  salesTeamDropDownValue =
    '//label[contains(text(),"Sales Team")]/parent::div//span[@title="{{text}}"]';
  primaryVerticalDropDownValue =
    '//label[text()="Primary Vertical"]/parent::div//span[@title="{{text}}"]';
  classificationDropDownValue =
    '//label[text()="Account Classification"]/parent::div//span[@title="{{text}}"]';
  accountHierarchyTableHeader = "//h1[@title='Account Hierarchy']";
  accountNameText = "//lightning-formatted-text[@slot='primaryField']";

  accountPartner = "(//label[text()='Partner']/following::div/input)[1]";
  partnerChargeAfter = "//*[text()='ChargeAfter']";
  showMoreActions =
    '//div[@class="slds-media"]/following-sibling::div//span[text()="Show more actions"]';
  amendmentsNonNegotiatedOpt = "//span[text()='Amendments Non-Negotiated']";
  amendmentsNegotiatedOpt = "//span[text()='Amendments Negotiated']";
  bankNameEditbox = "(//input[@name='Bank_Name__c'])[1]";
  bankAccountNoEditbox = "(//input[@name='Bank_Account_Number__c'])[1]";
  bankRoutingNoEditbox = "(//input[@name='Bank_Routing_Number__c'])[1]";
  accountCaseOwnerText = '(//*[contains(@title,"{{text}}")])[1]';
  bankDetails = '(//*[text()="{{text}}"])[2]';
  deleteCase = '(//button[@name="Delete"])[2]';
  exceptionNavigationBtn =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Exceptions")])[1]';
  marketingBudget =
    "//div[text()='Requesting approval for a paid marketing budget']";
  exceptionRecordType = '//span[text()="Marketing Budget"]';
  exceptionStatus = '(//div[@class="slds-form-element__control"])[4]';
  exceptionAccount = '(//div[@class="slds-grid"])[4]';
  exceptionNameValidation =
    '(//lightning-formatted-text[contains(@slot,"outputField")])[2]';
  exceptionTab = '(//span[text()="Exceptions"])[1]';
  exceptionNameTab = '//span[@title="Exception Name"]';
  chatter = '//a[text()="Chatter"]';
  internalTask = '//span[text()="Internal Task"]';
  internalTestSearchBox = '(//input[@role="combobox"])[1]';
  creditReportingDisputeText = '//*[@title="Credit Reporting Dispute (Open)"]';
  closedACDVText = '//*[@title="Closed ACDV"]';
  chatterTab = '(//div[@role="tablist"]/ul)[5]';
  createdAccName =
    '(//*[contains(@class,"slds-truncate outputLookupLink")])[1]';
  contacts = '//a[normalize-space()="Contacts"]';
  authorizedSigner = '//span[@title="Authorized Signer"]';
  inactiveDays = '//span[text()="Inactive Days"]';

  /**
   * Navigates to Given Account Details
   * @param {string} accountText text to pass as an argument
   */
  navigateToSpecificAccountDetails(accountText) {
    cy.xpath(this.newButton).should("be.visible");
    cy.xpath(this.newButton).should("exist");
    cy.xpath(this.fewSecondsAgo).should("be.visible");
    cy.xpath(this.fewSecondsAgo).should("exist");
    cy.xpath(this.recentlyViwedTableFirstRow).should("be.visible");
    cy.xpath(this.recentlyViwedTableFirstRow).should("have.length", 1);
    cy.xpath(this.getXpathForAccount(accountText)).scrollIntoView();
    cy.xpath(this.getXpathForAccount(accountText)).should("exist");
    cy.xpath(this.getXpathForAccount(accountText)).should("be.visible");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.getXpathForAccount(accountText)).click({ force: true });
  }

  /**
   * Gets showMoreActionsMenu option xpath for given text
   * @param {string} searchText text to get Xpath
   * @returns Xpath for showMoreActionsMenu option with given search text
   */
  getXpathForShowMoreActionsMenuOption(searchText) {
    return `//span[text()="${searchText}"]`;
  }

  /**
   * Gets account xpath for given text
   * @param {string} searchText text to get Xpath
   * @returns Xpath for Account with given search text
   */
  getXpathForAccount(searchText) {
    return `//a[@title="${searchText}"]`;
  }

  /**
   * Gets appname xpath for given searchtext
   * @param {string} searchText text to get Xpath
   * @returns Xpath for App Name with given sarch text
   */
  getXpathforAppName(searchText) {
    return `//*[@data-label="${searchText}"]//*[text()="${searchText}"]`;
  }

  /**
   * Gets app xpath for given searchtext
   * @param {string} searchText text to get Xpath
   * @returns Xpath for App with given search text
   */
  getXpathforApp(searchText) {
    return `//a[@data-label="${searchText}"]`;
  }

  /**
   * Gets xpath for createdaccount by text
   * @param {string} searchText text to get Xpath
   * @returns Xpath for Created Account with given search text
   */
  getXPathForCreatedAccount(searchText) {
    return `(//lightning-formatted-text[@data-output-element-id="output-field" and text()="${searchText}"])[1]`;
  }

  /**
   * Gets xpath for createdaccount bank details by text
   * @param {string} searchText text to get Xpath
   * @returns Xpath for Created Account bank details with given search text
   */
  getXPathForCreatedAccountBankDetails(searchText) {
    return `(//lightning-formatted-text[text()="${searchText}"])[1]`;
  }

  /**
   * Selects Apps From App Launcher For Given App Name
   * @param {string} appName text to pass as an argument
   */
  selectAppsFromAppLauncher(appName) {
    const caseCreationPage = new CaseCreationPage();
    caseCreationPage.closeAlltabs();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.xpath(this.hamburgerMenu).should("be.visible");
    cy.xpath(this.hamburgerMenu).focus();
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.hamburgerMenu).click({
      force: true,
    });
    caseCreationPage.closeAlltabs();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.xpath(this.searchAppAndItemsBox).should("be.visible");
    cy.xpath(this.searchAppAndItemsBox).clear();
    cy.xpath(this.searchAppAndItemsBox).type(appName);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    //caseCreationPage.closeAlltabs();
    cy.xpath(this.getXpathforAppName(appName))
      .should("be.visible")
      .should("contain", appName);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.xpath(this.getXpathforApp(appName)).should("be.visible");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.getXpathforApp(appName)).click({
      force: true,
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
  }

  /**
   * Gets XPath For New Account Dropdown Values
   * @param {string} searchText text to get Xpath
   * @returns Xpath For New Account Dropdown Values
   */
  getXPathFornewAccountDropdownValues(searchText) {
    return `(//span[@title="${searchText}"])[1]`;
  }

  /**
   * Selects Dropdowns For Given Dropdown Value
   * @param {any} dropDownvalue value to pass as an argument
   */
  selectDropdowns(dropDownvalue) {
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownvalue)).should(
      "exist",
    );
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownvalue)).should(
      "contain",
      dropDownvalue,
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownvalue)).click({
      force: true,
    });
  }

  /**
   * Selects Dropdowns option until desired option selected
   * @param {any} element locator value to pass as an argument
   * @param {any} dropDownvalue value to pass as an argument
   */
  selectDropdownOptionAndRetry(element, dropDownValue, retryCount = 3) {
    //exit if retry
    if (retryCount === 0) {
      throw new Error(
        `Failed to select ${dropDownValue} in ${element} after multiple attempts`,
      );
    }
    //check if the dropdown is visible, enabled and clickable
    cy.xpath(element).scrollIntoView();
    cy.xpath(element)
      .should("exist")
      .should("be.visible")
      .should("not.be.disabled")
      .click();
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownValue)).should(
      "exist",
    );
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownValue)).should(
      "contain",
      dropDownValue,
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.getXPathFornewAccountDropdownValues(dropDownValue)).click({
      force: true,
    });

    //Retry asserting that the correct value is selected
    cy.xpath(element)
      .invoke("text")
      .then((selectedValue) => {
        // If the correct option is selected, return, else retry
        if (!selectedValue.includes(dropDownValue)) {
          cy.log(`Retrying selection of ${dropDownValue}`);
          this.selectDropdownOptionAndRetry(
            element,
            dropDownValue,
            retryCount - 1,
          );
        }
      });
  }

  /**
   * Verifies Account Details For The Given Info
   * @param {any} info value to pass as an argument
   */
  //Can be removed
  verifyAccountDetails(info) {
    cy.xpath(this.getXPathForCreatedAccount(info)).scrollIntoView();
    cy.xpath(this.getXPathForCreatedAccount(info)).should("be.visible");
  }

  /**
   * Creates Bread Merchant Account With Given Values
   * @param {string} breadmerchantText text to pass an argument
   * @param {string} accountName text to pass an argument
   * @param {any} primaryVertical value to pass as an argument
   * @param {any} secondaryVertical value to pass as an argument
   */
  createBreadMerchantAccount(
    breadmerchantText,
    accountName,
    primaryVertical,
    secondaryVertical,
  ) {
    cy.xpath(this.newButton).should("be.visible");
    cy.xpath(this.newButton).click();
    cy.xpath(this.breadMerchant)
      .should("be.visible")
      .should("have.text", breadmerchantText);
    cy.xpath(this.breadMerchant).click();
    cy.xpath(this.nextButton).should("be.visible");
    cy.xpath(this.nextButton).click();
    cy.xpath(this.accountName).scrollIntoView();
    cy.xpath(this.accountName).should("be.visible");
    cy.xpath(this.accountName).type(accountName);
    cy.xpath(this.primaryVerticaldropdown).scrollIntoView();
    cy.xpath(this.primaryVerticaldropdown).should("be.visible");
    cy.xpath(this.primaryVerticaldropdown).click();
    this.selectDropdowns(primaryVertical);
    cy.xpath(this.secondaryVerticaldropdown).scrollIntoView();
    cy.xpath(this.secondaryVerticaldropdown).should("be.visible");
    cy.xpath(this.secondaryVerticaldropdown).click();
    this.selectDropdowns(secondaryVertical);
    cy.xpath(this.saveButton).should("be.visible");
    cy.xpath(this.saveButton).click();
  }

  /**
   * This function clicks on Accounts Tab
   */
  clickAccountsTab() {
    cy.xpath(this.accountsTab).should("be.visible");
    cy.xpath(this.accountsTab).should("have.text", "Accounts");
    cy.xpath(this.accountsTab).click();
  }

  /**
   * This function clicks on accounts navigation button
   */
  clickAccountsNavigationButton() {
    cy.xpath(this.accountNavigationButton).should("be.visible");
    cy.xpath(this.accountNavigationButton).should("have.text", "Accounts");
    cy.xpath(this.accountNavigationButton).click();
  }

  /**
   * Verifies Account Created Success Message
   * @param {string} accountName text to pass an argument
   */
  verifyAccountCreatedSucMessage(accountName) {
    cy.xpath(this.saveButton).should("be.visible");
    elementUtils.click(this.saveButton);
    cy.xpath(this.userMessage).should("be.visible");
    cy.xpath(this.userMessage).should(
      "have.text",
      `Account "${accountName}" was created.`,
    );
    //close the toast modal
    cy.xpath(this.toastCloseIcon).should("be.visible");
    cy.xpath(this.toastCloseIcon).click();
  }

  /**
   * This function will wait and reload the page until created case display on the account page
   * @param {*} milliSeconds
   * @param {*} attempt
   */
  waitUntilCaseCreationComplete(milliSeconds = 10000, attempt = 0) {
    if (attempt > 5) {
      throw `Case not created even after ${attempt} times reloaded the pages`;
    }
    cy.xpath(this.accountCasesLabel).should("be.visible");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(milliSeconds);
    cy.xpath(`count(${this.accountCasesHeader})`).then((count) => {
      cy.log(`Reload retry count:${count}`);
      if (count > 0) {
        cy.log("Case created successfully");
      } else {
        cy.reload();
        this.waitUntilCaseCreationComplete(attempt + 1);
      }
    });
  }

  /**
   * This function verify attestation due date
   */
  verifyAnnualAttestationDueDate() {
    cy.xpath(this.viewAnnualAttestationDueDate).scrollIntoView();
    cy.xpath(this.viewAnnualAttestationDueDate).should("be.visible");
    cy.xpath(this.viewAnnualAttestationDueDate).should("not.be.null");
  }

  /**
   * Verifies Account Success Owner
   * @param {any} successOwner value to pass as an argument
   */
  verifyAccounntSuccessOwner(successOwner) {
    cy.xpath(
      `//div[.="Success Owner"]/ancestor::flexipage-column2//a[.="${successOwner}"]`,
    ).should("be.visible");
  }

  /**
   * Verifies Sales Team
   * @param {any} salesTeam value to pass as an argument
   */
  verifySalesTeam(salesTeam) {
    cy.xpath(`//span[.="${salesTeam}"]`).should("be.visible");
  }

  /**
   * @param {any} classification value to pass as an argument
   * Verifies Classification
   */
  verifyClassification(classification) {
    cy.xpath(`//span[.="${classification}"]`).should("be.visible");
  }

  /**
   * Verifies Name of the Account
   * @param {string} accountName text to pass as an argument
   */
  verifyAccountName(accountName) {
    cy.xpath(`//span[.="${accountName}"]`).should("be.visible");
  }

  /**
   * Verifies Account's Record Type
   * @param {any} recordType value to pass as an argument
   */
  verifyAccountRecordType(recordType) {
    cy.xpath(
      `//div[contains(@class,"recordTypeName") and .="${recordType}"]`,
    ).should("be.visible");
  }

  /**
   * This function navigates to new account creation page
   */
  navigateToNewAccountsCreationPage() {
    const caseCreationPage = new CaseCreationPage();
    caseCreationPage.verifyLogoutButtonVisible();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
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
    cy.xpath(this.accountNavigationButton).should("be.visible");
    cy.xpath(this.accountNavigationButton).should("have.text", "Accounts");
    cy.xpath(this.accountNavigationButton).click();

    cy.xpath(this.accountPageButton).should("be.visible");
    cy.xpath(this.accountPageButton).should("have.text", "Accounts");
    //Closing all tabs that are opened already
    caseCreationPage.closeAlltabs();
    cy.xpath(this.recentlyViewed).should("be.visible");
    cy.xpath(this.recentlyViewed).should(
      "have.text",
      "AccountsRecently Viewed",
    );
  }

  /**
   * This function returns XPATH for account name action button
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getAccountActionButton(searchText) {
    return `//a[@title="${searchText}"]/ancestor::tr//td//span//*[contains(text(),"Show Actions")]//ancestor::a`;
  }

  /**
   * This function is used to delete the account from accounts page
   * @param {string} accountName should be any string
   * @param {boolean} accountsTab element needs select true.
   */
  accountDeletion(accountName, accountsTab = false) {
    const caseCreationPage = new CaseCreationPage();
    const elementUtils = new Element();
    const assert = new AssertText();
    // Below code will delete the created account
    if (accountsTab) {
      elementUtils.click(this.accountsTab, false, true);
    }
    caseCreationPage.closeAlltabs();
    elementUtils.click(this.navigationMenu);
    elementUtils.click(this.accountNavigationButton);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    elementUtils.click(this.getAccountActionButton(accountName), false, true);
    elementUtils.click(this.deleteAccount);
    assert.have(this.fewSecondsAgo, "Updated a few seconds ago");
    elementUtils.click(this.deleteButton);
    assert.have(
      this.accountToastMessage,
      `Account "${accountName}" was deleted. Undo`,
    );
    //Closing all tabs that are still opened
    caseCreationPage.closeAlltabs();
  }
  /**
   * This function is used for Creation of account in bread console
   *
   * @param {*} breadMerchant
   * @param {*} parentaccName
   * @param {*} heircahyLevel
   * @param {*} primaryVertical
   * @param {*} secondaryVertical
   */
  createAccount(
    breadMerchant,
    parentaccName,
    heircahyLevel,
    primaryVertical,
    secondaryVertical,
  ) {
    elementUtils.click(this.newButton);
    assert.have(this.breadMerchant, breadMerchant);
    elementUtils.click(this.breadMerchant);
    elementUtils.click(this.nextButton);
    elementUtils.type(this.accountName, parentaccName, true);
    elementUtils.click(merchantSeedingAccountPage.hierarchyLeveldropdown, true);
    this.selectDropdowns(heircahyLevel);
    //select primary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.primaryVerticaldropdown,
      primaryVertical,
    );
    //select secondary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.secondaryVerticaldropdown,
      secondaryVertical,
    );
    elementUtils.click(this.saveButton);
    this.verifyAccountCreatedSucMessage(parentaccName);
  }
  /**
   * This function is Verify the creation of a account service case
   * @param {*} breadMerchant
   * @param {*} rbcMerchant
   * @param {*} partnership
   * @param {*} healthStatusReason
   * @param {*} salesTeam
   * @param {*} accountName
   * @param {*} classification
   * @param {*} primaryVertical
   * @param {*} secondaryVertical
   * @param {*} supportPhoneNumber
   * @param {*} attestationDate
   */
  createAccountService(
    breadMerchant,
    rbcMerchant,
    partnership,
    healthStatusReason,
    salesTeam,
    accountName,
    classification,
    primaryVertical,
    secondaryVertical,
    supportPhoneNumber,
    attestationDate,
  ) {
    elementUtils.click(this.newButton, true, true);
    cy.xpath(this.breadMerchant)
      .should("be.visible")
      .should("have.text", breadMerchant);
    // Click the Split screen button if aria-expanded is true
    contactCreationPage.clickSplitViewModeButton();
    elementUtils.click(this.breadMerchant);
    cy.xpath(this.rbcMerchant)
      .should("be.visible")
      .should("have.text", rbcMerchant);
    cy.xpath(this.partnerships)
      .should("be.visible")
      .should("have.text", partnership);
    elementUtils.click(this.nextButton);
    elementUtils.click(this.healthStatusReason);
    this.selectDropdowns(healthStatusReason);
    elementUtils.click(this.salesTeam, true);
    elementUtils.click(
      caseCreationPage.getFormattedXpath(
        this.salesTeamDropDownValue,
        salesTeam,
      ),
      false,
      true,
    );
    elementUtils.type(this.accountName, accountName);
    elementUtils.click(this.classification);
    this.selectDropdowns(classification);
    //select primary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.primaryVerticaldropdown,
      primaryVertical,
    );
    //select secondary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.secondaryVerticaldropdown,
      secondaryVertical,
    );
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    elementUtils.type(this.supportPhoneNumber, supportPhoneNumber);
    elementUtils.type(this.anualAccountAttestationDate, attestationDate, true);
  }
  /**
   * this function is used for creating an account with and without legalname
   * @param {*} breadMerchant 
   *  @param {*} accountName
   * @param {*} hierarchyLevel 
   * @param {*} accountClassification 
   * @param {*} primaryVertical 
   * @param {*} secondaryVertical 
   * @param {*} supportPhoneNumber 
   * @param {*} website 
  
   */
  createAccountWithLegalName(
    breadMerchant,
    accountName,
    hierarchyLevel,
    accountClassification,
    primaryVertical,
    secondaryVertical,
    supportPhoneNumber,
    website,
  ) {
    elementUtils.click(this.newButton);
    cy.xpath(this.breadMerchant)
      .should("be.visible")
      .should("have.text", breadMerchant);
    // Click the Split screen button if aria-expanded is true
    contactCreationPage.clickSplitViewModeButton();
    elementUtils.click(this.breadMerchant);
    elementUtils.click(this.nextButton);
    elementUtils.type(this.accountName, accountName);
    merchantSeedingAccountPage.elementVisible(
      merchantSeedingAccountPage.hierarchyLeveldropdown,
    );
    elementUtils.click(merchantSeedingAccountPage.hierarchyLeveldropdown);
    this.selectDropdowns(hierarchyLevel);
    merchantSeedingAccountPage.elementVisible(this.classification);
    elementUtils.click(this.classification);
    merchantSeedingAccountPage.selectDropdownMerchant(accountClassification);
    //select primary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.primaryVerticaldropdown,
      primaryVertical,
    );
    //select secondary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.secondaryVerticaldropdown,
      secondaryVertical,
    );
    elementUtils.type(this.supportPhoneNumber, supportPhoneNumber);
    elementUtils.type(merchantSeedingAccountPage.websiteAccount, website);
  }
  /**
   * THis function is used for create an account
   * @param {*} breadMerchant
   * @param {*} accountName
   * @param {*} primaryVertical
   * @param {*} secondaryVertical
   */
  createAccountForIntegrationProject(
    breadMerchant,
    accountName,
    primaryVertical,
    secondaryVertical,
  ) {
    elementUtils.click(this.newButton);
    cy.xpath(this.breadMerchant)
      .should("be.visible")
      .should("have.text", breadMerchant);
    // Click the Split screen button if aria-expanded is true
    contactCreationPage.clickSplitViewModeButton();
    elementUtils.click(this.breadMerchant);
    elementUtils.click(this.nextButton);
    elementUtils.type(this.accountName, accountName);
    //select primary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.primaryVerticaldropdown,
      primaryVertical,
    );
    //select secondary vertical dropdonw option
    this.selectDropdownOptionAndRetry(
      this.secondaryVerticaldropdown,
      secondaryVertical,
    );
  }
  /**
   * This function is created for classfcation and primaryvertical
   * @param {*} accountClassificationProspect
   * @param {*} apparel_pm_option
   */
  classificationAndPrimaryVertical(
    accountClassificationProspect,
    apparel_pm_option,
  ) {
    merchantSeedingAccountPage.elementVisible(this.classification);
    elementUtils.click(this.classification);
    elementUtils.click(
      caseCreationPage.getFormattedXpath(
        this.classificationDropDownValue,
        accountClassificationProspect,
      ),
      true,
    );
    //select primary vertical dropdonw option
    elementUtils.click(this.primaryVerticaldropdown);
    elementUtils.click(
      caseCreationPage.getFormattedXpath(
        this.primaryVerticalDropDownValue,
        apparel_pm_option,
      ),
      true,
    );
  }
}
export default AccountCreationPage;
