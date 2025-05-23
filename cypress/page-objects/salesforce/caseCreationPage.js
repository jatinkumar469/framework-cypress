/// <reference types='cypress' />
import CaseDeletePage from "../../page-objects/salesforce/caseDeletePage";
class CaseCreationPage {
  analyticsTab = "//*[text()='Analytics']";
  // setUp section
  quarterlyPerformanceBoard = '//span[@title="Quarterly Performance"]';
  userProfileButton = '//*[@class="icon noicon" and @title="User"]';
  logoutButton = '//a[@class="action-link" and contains(text(), "Log out")]';
  quarterlyPerformanceBoardCSS = 'span[title="Quarterly Performance"]';
  setUpHomePage = '//span[@class="breadcrumbDetail uiOutputText"]';
  setUpHomePageCSS = 'span[class="breadcrumbDetail uiOutputText"]';
  setupBtn = "//*[@data-key='setup']";
  setUpSearchBox = "//input[@title='Search Setup']";
  setUpSearchBoxCSS = "input[title='Search Setup']";
  userSearchResult =
    '//*[@role="presentation" and @class="lookup__list  visible"]/li[2]';
  userSearchResultCSS =
    '[role="presentation"].lookup__list.visible > li:nth-of-type(2)';
  userProfileIframe = '//div[@class="content iframe-parent"]';
  userProfileIframeCSS = 'div[class="content iframe-parent"]';
  setUpUserTobeSelected = "//ul[@class='lookup__list  visible']/li[2]/a";
  setUpHomePageIcon = "//div[@class='setup-header-element'][1]";
  setupUserLoginBtn_XPATH = "//*[@id='topButtonRow']//input[@title='Login']";
  setupUserLoginBtn_CSS = "[id='topButtonRow'] input[title='Login']";
  setUpPageDescription = '//*[@class="pageDescription"]';
  // case creation Page Routing elements
  pageTitleLink = '(//div[@data-aura-class="navexConsoleNav"]/div[2]/div/a)[1]';
  pageTitleText =
    '//div[@class="oneConsoleNav navexConsoleNav"]/div[2]/div/a/span';
  commonNewButton = '(//*[text()="New"])[1]';
  tabList = '//div[@role="tablist"]';
  tabHeader = '//div[@class="slds-template__container"]/div/div/div/div/div[2]';
  navigationMenuButton = '(//button[@title="Show Navigation Menu"])[1]';
  navigationMenuButtonCSS = 'button[title="Show Navigation Menu"]';
  caseNavigationButton =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Cases")])[1]';
  caseNavigationButtonCSS = '.menuLabel:contains("Cases")';
  breadPayServiceConsoleTab = '//span[@title="Bread Pay Service Console"]';
  breadPayServiceConsoleTabCSS = 'span[title="Bread Pay Service Console"]';
  casePageButton = '(//a[@title="Cases"]/*[text()="Cases"])[1]';
  openedPagesCloseButton =
    '//*[@data-aura-class="navexConsoleTabItem"]//button[@type="button"]//*[@data-key="close" and @part="icon" and @class="slds-button__icon"]';
  newCaseCreationTab =
    '(//span[@title="Case"]/following-sibling::*[contains(text(), "New Case")])[1]';
  newCaseCreationButton =
    '(//a[@title="New" and @role="button"]/div[text()="New"])[1]';
  caseEditButton = '(//button[@name="Edit"])[1]';
  caseRecordTypeHeader = '//*[@title="Case Record Type"]';
  changeOwnerButton = '//div[@title="Change Owner"]';
  changeOwnerButtoninOpenedCase = '//*[text()="Change Owner"]';
  whosViewingButton = '//div[@data-component-id="whosViewing"]';
  intelligenceViewButton = "//div[@title='Intelligence View']";
  caseTypeText = '//label//*[text()="Merchant Support"]';
  caseTypeButton =
    '//label//*[text()="Merchant Support"]/preceding-sibling::span';
  caseCreationNextPageButton = '//button//*[text()="Next"]';
  // case creation form elements
  caseStatusDropdown = '//button[@data-value="New"]/span';
  caseCategoryText = '//button[contains(@aria-label, "Category")]/span';
  caseCategoryDropdown = '(//button[contains(@aria-label, "Category")])[1]';
  casecloseReasonText =
    '//button[contains(@aria-label, "Case Close Reason")]/span';
  casecloseReasonDropdown =
    '(//button[contains(@aria-label, "Case Close Reason")])[1]';
  caseSubcategoryText = '//button[contains(@aria-label, "Subcategory")]/span';
  caseSubcategoryDropdown =
    '(//div/button[contains(@aria-label, "Subcategory")])[1]';
  caseOriginText = '//button[contains(@aria-label, "Case Origin")]/span';
  caseOriginDropdown =
    '(//div/button[contains(@aria-label, "Case Origin")])[1]';
  caseBillToText = '//button[contains(@aria-label, "Bill To")]/span';
  caseBillToDropdown = '(//div/button[contains(@aria-label, "Bill To")])[1]';
  caseSubjectInput = '//input[@name="Subject"]';
  caseDescriptionTextArea = '(//textarea[@class="slds-textarea"])[1]';
  loanNumberEditbox = "//input[@name='Loan_Number__c']";
  requesterAccountNameInput = '//input[@placeholder="Search Accounts..."]';
  requesterContactNameInput = '//input[@placeholder="Search Contacts..."]';
  caseCreationSaveButton = '//button[@name="SaveEdit"]';
  caseNumber = '//span[contains(@class,"toastMessage")]';
  // Elements of created service case
  caseHeadline = '//*[@title="Salesforce Case Creation Demo"]';
  caseRecordTypeText = '(//div[contains(@class, "recordTypeName")])[2]';
  caseOptionDropdownButton =
    '//button//span[text()="Select a List View: Cases"]/..';
  caseLoneNumberTextArea =
    '//div[@class="slds-form-element__control slds-grow"]';
  reslovedStatus = "(//span[text()='Resolved'])[1]";
  newContact = '//button[@name="NewContact"]';
  /**
   * This function gets Formatted Xpath with given text
   * @param {string} xpath string to pass as an argument
   * @param {string} text text to pass as an argument
   * @returns Formatted Xpath with given xpath & text
   */
  getFormattedXpath(xpath, text) {
    return xpath.replace("{{text}}", text);
  }

  /**
   * This function gets Xpath for Success User Search Result with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Success User Search Result with given text
   */
  getXPathForSuccessUserSearchResult(searchText) {
    return `(//div[@title="${searchText}"])[1]`;
  }

  /**
   * This function gets Xpath for Logout Button For Success User with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Logout Button For Success User with given text
   */
  getXPathForLogoutButtonForSuccessUser(searchText) {
    return `//a[@class="action-link" and text()="Log out as ${searchText}"]`;
  }

  /**
   * This function gets Xpath for Success User Name In Case with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Success User Name In Case with given text
   */
  getXPathForSuccessUserNameInCase(searchText) {
    return `(//*[contains(text(), "${searchText}")])[1]`;
  }

  /**
   * This function gets Xpath for User Search Results with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for User Search Results with given text
   */
  getXPathForUserSearchResults(searchText) {
    return `//span[@title="${searchText}"]//span`;
  }

  /**
   * This function gets Xpath for Case Type Dropdown Values with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Type Dropdown Values with given text
   */
  getXPathForCaseTypeDropdownValues(searchText) {
    return `//span[@title="${searchText}"]`;
  }

  /**
   * This function gets Xpath for User Search Result CSS with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for User Search Result CSS with given text
   */
  getXPathForUserSearchResultsCSS(searchText) {
    return `span[title="${searchText}"] span`;
  }

  /**
   * This function gets Xpath for Created Case with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Created Case with given text
   */
  getXPathForCreatedCase(searchText) {
    return `(//slot[@name="output"]/*[text()="${searchText}"])[1]`;
  }
  getXPathForCreatedOppo(searchText) {
    return `(//slot[@name="outputField"]/*[text()="${searchText}"])[1]`;
  }
  /**
   * This function gets Xpath for Created Case Requester Account Names with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Created Case Requester Account Names with given text
   */
  getXPathForcreatedCaseRequesterAccountNames(searchText) {
    return `(//*[contains(text(),"${searchText}")])[1]`;
  }

  /**
   * This function gets Xpath for Created Case Requester Contact Names with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Created Case Requester Contact Names with given text
   */
  getXPathForcreatedCaseRequesterContactNames(searchText) {
    return `//*[contains(text(), "${searchText}")]`;
  }

  /**
   * This function gets Xpath for Created Case Requester Search Results with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Created Case Requester Search Results with given text
   */
  getXPathForcreatedCaseRequesteSearchResults(searchText) {
    return `(//*[@title="${searchText}"])[1]`;
  }

  /**
   * This function navigates to Setup page
   */
  navigateToSetupPage() {
    cy.visit("/lightning/setup/SetupOneHome/home");
  }

  /**
   * This function gets xpath caseType text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Type Text with given text
   */
  getXPathForCaseTypeText(searchText) {
    return `//label//*[text()="${searchText}"]`;
  }

  /**
   * This function gets xpath for CaseType button
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Type button with given text
   */
  getXPathForCaseTypeButton(searchText) {
    return `//label//*[text()="${searchText}"]/preceding-sibling::span`;
  }

  /**
   * This function gets xpath for CaseRecordtype
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Record Type with given text
   */
  getXPathForCaseRecordType(searchText) {
    return `(//div[contains(@class, "recordTypeName")]/span[text()="${searchText}"])[2]`;
  }

  /**
   * This function gets xpath for CaseType input field
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Type Input with given text
   */
  getXPathForCaseTypeInput(searchText) {
    return `//input[@name='${searchText}']`;
  }

  /**
   * This function gets xpath for CreatedCaseInputNumber
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Created Case Input Number with given text
   */
  getXPathForCreatedCaseInputNumber(searchText) {
    return `(//lightning-formatted-number[@data-output-element-id="output-field" and text()="${searchText}"])[1]`;
  }

  /**
   * This function gets xpath for Case Dropdown text with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Dropdown text with given text
   */
  getXPathForCaseDropDownText(searchText) {
    return `//button[@aria-label="${searchText}"]/span`;
  }

  /**
   * This function gets Xpath for Case Dropdown ith given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Dropdown with given text
   */
  getXPathForCaseDropDown(searchText) {
    return `(//div/button[contains(@aria-label, "${searchText}")])[1]`;
  }

  /**
   * This function gets xpath for Link with given text
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Link with given text
   */
  getXPathForLink(searchText) {
    return `//a[.='${searchText}']`;
  }

  /**
   * This functions gets xpath for case tittle
   * @param {string} searchText text to pass as an argument
   * @returns Xpath for Case Title with given text
   */
  getXPathForCaseTitle(searchText) {
    return `(//span[.='${searchText}'])[1]`;
  }

  /**
   * This function enter data in case bill to dropdown option
   * @param {string} caseBillToInfo
   */
  enterCaseBillToDropdownValue(caseBillToInfo) {
    cy.xpath(this.caseBillToText).scrollIntoView();
    cy.xpath(this.caseBillToText).should("have.text", "--None--");
    cy.xpath(this.caseBillToDropdown).click();
    cy.xpath(this.caseBillToDropdown).type(caseBillToInfo);
    cy.xpath(this.caseBillToDropdown).type("{enter}");
    cy.xpath(this.caseBillToText).should("have.text", caseBillToInfo);
  }

  /**
   * selects a value from the Case Category dropdown
   * @param {string} caseCategoryValue - The value to be selected from the dropdown
   */
  selectCaseCategoryValue(caseCategoryValue) {
    cy.xpath(this.caseCategoryDropdown).click();
    cy.xpath(this.getXPathForCaseTypeDropdownValues(caseCategoryValue)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForCaseTypeDropdownValues(caseCategoryValue)).should(
      "have.text",
      caseCategoryValue,
    );
    cy.xpath(this.getXPathForCaseTypeDropdownValues(caseCategoryValue)).click();
    cy.xpath(this.caseCategoryText).should("have.text", caseCategoryValue);
  }

  /**
   * selects a value from the Case Sub ssCategory dropdown
   * @param {string} caseSubCategoryValue - The value to be selected from the dropdown
   */
  selectCaseSubCategoryValue(caseSubCategoryValue) {
    cy.xpath(this.caseSubcategoryText).scrollIntoView();
    cy.xpath(this.caseSubcategoryText).should("have.text", "--None--");
    cy.xpath(this.caseSubcategoryDropdown).click();
    cy.xpath(
      this.getXPathForCaseTypeDropdownValues(caseSubCategoryValue),
    ).should("be.visible");
    cy.xpath(
      this.getXPathForCaseTypeDropdownValues(caseSubCategoryValue),
    ).should("have.text", caseSubCategoryValue);
    cy.xpath(
      this.getXPathForCaseTypeDropdownValues(caseSubCategoryValue),
    ).click();
    cy.xpath(this.caseSubcategoryText).should(
      "have.text",
      caseSubCategoryValue,
    );
  }

  /**
   * This function verifies new case creation button text
   */
  verifyNewCaseCreationButtonText() {
    cy.xpath(this.newCaseCreationButton)
      .should("be.visible")
      .should("have.text", "New");
  }

  /**
   * Verifies New Case Creation Tab
   */
  verifyNewCaseCreationTab() {
    cy.xpath(this.newCaseCreationTab).should("be.visible");
    cy.xpath(this.newCaseCreationTab).should("contain", "New Case");
  }

  /**
   * This function verifies CloseFile Added ToastMessage
   * @param {string} message text to pass as an argument
   */
  verifyCloseFileAddedToastMessage(message) {
    cy.xpath(this.fileAddedToastMessage).should("be.visible");
    cy.xpath(this.fileAddedToastMessage).should("have.text", message);
    cy.xpath(this.fileAddedToastCloseIcon).click();
  }

  /**
   * This function clicks on Case option dropdown button
   */
  clickCaaseOptionDropdownButton() {
    cy.xpath(this.caseOptionDropdownButton).should("be.visible");
    cy.xpath(this.caseOptionDropdownButton).click();
  }

  /**
   * This functions verifies and clicks on first case subject
   * @param {any} caseSubject value to pass as an argument
   */
  verifyAndClickFirstCaseSubject(caseSubject) {
    cy.xpath(
      "(//a[@data-refid='recordId' and text()='" + caseSubject + "'])[1]",
    ).scrollIntoView();
    cy.xpath(
      "(//a[@data-refid='recordId' and text()='" + caseSubject + "'])[1]",
    ).should("be.visible");
    cy.xpath(
      "(//a[@data-refid='recordId' and text()='" + caseSubject + "'])[1]",
    ).should("have.text", caseSubject);
    cy.xpath(
      "(//a[@data-refid='recordId' and text()='" + caseSubject + "'])[1]",
    )
      .first()
      .click();
  }

  /**
   * This function clicks on navigation menu button
   */
  clickNavigationMenuButton() {
    cy.xpath(this.navigationMenuButton).should("be.visible");
    cy.xpath(this.navigationMenuButton).should(
      "have.attr",
      "title",
      "Show Navigation Menu",
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.navigationMenuButton).click({
      force: true,
    });
  }

  /**
   * This function clicks on case navigation button
   */
  clickCaseNavigationButton() {
    cy.xpath(this.caseNavigationButton).should("be.visible");
    cy.xpath(this.caseNavigationButton).should("have.text", "Cases");
    cy.xpath(this.caseNavigationButton).click();
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.navigationMenuButton).click({
      force: true,
    });
  }

  /**
   * This function verifies case page button text
   */
  verifyCasePageButton() {
    cy.xpath(this.casePageButton).should("be.visible");
    cy.xpath(this.casePageButton).should("have.text", "Cases");
  }

  /**
   * This is to login as a merchant success user.
   */
  loginAsMerchantSuccessUser(successUserName) {
    cy.frameLoaded(`iframe[title*="User: ${successUserName}"]`);
    cy.iframe(`iframe[title*="User: ${successUserName}"]`)
      .find(this.setupUserLoginBtn_CSS)
      .then((obj) => {
        const nodeValue =
          obj["0"]["attributes"].getNamedItem("onclick")["nodeValue"];
        const first = nodeValue.split("'")[1];
        cy.request(first);
        cy.reload();
        cy.visit("/");
      });
  }

  /**
   *  This is to close all the cases that are opened already
   */
  closeAlltabs() {
    cy.document().then((doc) => {
      let element = doc.querySelectorAll(
        '[data-aura-class="navexConsoleTabItem"] button[type="button"]',
      );
      Array.from(element).forEach((button) => button.click());
    });
  }

  /**
   *  This is to close all the cases that are preopened already
   */
  closingAllThePreOpenedTabs() {
    cy.xpath(this.openedPagesCloseButton).then(($list) => {
      for (let index = 0; index < $list.length - 1; index++) {
        const $el = $list[index];
        cy.wrap($el).should("be.visible"); // Ensure the element is visible
        cy.wrap($el).click(); // Click on the element to close it
      }
    });
  }

  /**
   *Searches Integration Solution User
   * @param {any} integrationSolutionUser value to pass as an argument
   */
  searchIntegrationSolutionsUser(integrationSolutionUser) {
    cy.xpath(this.setUpHomePage).should("contain", "Home");
    cy.xpath(this.setUpSearchBox).click();
    cy.xpath(this.setUpSearchBox).clear();
    cy.xpath(this.setUpSearchBox).type(integrationSolutionUser);
    cy.xpath(this.userSearchResult).should("be.visible");
    cy.xpath(this.getXPathForUserSearchResults(integrationSolutionUser)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForUserSearchResults(integrationSolutionUser)).should(
      "have.text",
      integrationSolutionUser,
    );
    cy.xpath(
      this.getXPathForUserSearchResults(integrationSolutionUser),
    ).click();
    cy.xpath(this.userProfileIframe).should("be.visible");
  }

  /**
   * This function verifies the logout visibility
   */
  verifyLogoutButtonVisible() {
    cy.xpath(this.logoutButton)
      .should("be.visible")
      .should("contain", "Log out");
  }

  /**
   * Verify tabheader should not be empty
   */
  verifyTabHeaderExistNotBeEmpty() {
    cy.xpath(this.tabHeader).should("exist");
    cy.xpath(this.tabHeader)
      .should("have.attr", "data-aura-rendered-by")
      .and("not.be.empty");
  }

  /**
   * This is to verify tab and pagetitlelink
   */
  verifyPageTitleAndTabHeader() {
    cy.xpath(this.pageTitleLink).should("be.visible");
    cy.xpath(this.pageTitleText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.have.length.greaterThan(0);
      });
    cy.xpath(this.pageTitleLink).click();
    cy.xpath(this.tabHeader).should("be.visible").should("exist");
    cy.xpath(this.tabHeader)
      .should("have.attr", "data-aura-rendered-by")
      .and("not.be.empty");
  }

  /**
   * This function navigates to case creation page
   */
  navigateToCaseCreationPage() {
    const caseDeletePage = new CaseDeletePage();
    this.verifyLogoutButtonVisible();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    //Below code will navigate to case page
    cy.xpath(this.navigationMenuButton).should("be.visible");
    cy.xpath(this.navigationMenuButton).should(
      "have.attr",
      "title",
      "Show Navigation Menu",
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.navigationMenuButton).trigger("click", {
      force: true,
    });
    cy.xpath(this.caseNavigationButton).should("be.visible");
    cy.xpath(this.caseNavigationButton).should("have.text", "Cases");
    cy.xpath(this.caseNavigationButton).click();
    cy.xpath(this.casePageButton).should("be.visible");
    cy.xpath(this.casePageButton).should("have.text", "Cases");
    cy.xpath(caseDeletePage.updateFewSecondsAgoText)
      .should("be.visible")
      .and("contain", "Updated a few seconds ago");
    cy.xpath(this.newCaseCreationButton)
      .should("be.visible")
      .should("have.text", "New");
    cy.xpath(this.changeOwnerButton)
      .should("be.visible")
      .should("have.text", "Change Owner");
    cy.xpath(this.whosViewingButton).should("be.visible");
    //Closing all tabs that are opned already
    this.closeAlltabs();
  }

  /**
   * This function verifies caseRecordTypeText
   */
  verifyCaseRecordTypeText() {
    cy.xpath(this.caseRecordTypeText).scrollIntoView();
    cy.xpath(this.caseRecordTypeText).should("be.visible");
  }

  /**
   * This function verifies changeOwnerButton
   */
  verifyChangeOwnerButton() {
    cy.xpath(this.changeOwnerButton)
      .should("be.visible")
      .should("have.text", "Change Owner");
  }

  /**
   *  This function verifies commonNewButton
   */
  verifyCommonNewButton() {
    cy.xpath(this.commonNewButton)
      .should("be.visible")
      .should("have.text", "New");
  }

  /**
   * This function verifies pageTitletext
   */
  verifyPageTitleText() {
    cy.xpath(this.pageTitleText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.have.length.greaterThan(0);
      });
  }
  /**
   * This function verify change owner text
   */
  verifyChangeOwnerText() {
    cy.xpath(this.changeOwnerButton)
      .should("be.visible")
      .should("have.text", "Change Owner");
  }

  /**
   * This function verifies the case deletion
   */
  verifyDeleteClassicLoan() {
    this.clickCaseSideButtonToDelete();
    this.clickCaseDeleteButton();
    cy.xpath(this.caseDeletePreConfirmMessage).should(
      "have.text",
      "Are you sure you want to delete this Classic Loan?",
    );
    this.clickCaseDeleteConfirmationButton();
    this.verifyCaseDeleteToastMessage();
  }
}
export default CaseCreationPage;
