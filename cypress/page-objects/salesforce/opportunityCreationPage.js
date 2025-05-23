/// <reference types='cypress' />
import AssertText from "../../../utils/assert";
import Element from "../../../utils/element";
import AccountCreationPage from "../../page-objects/salesforce/accountCreationPage";
import CaseCreationPage from "../../page-objects/salesforce/caseCreationPage";
import CaseDeletePage from "../../page-objects/salesforce/caseDeletePage";
import ContactCreationPage from "../../page-objects/salesforce/contactCreationPage";
const contactPage = new ContactCreationPage();
const elementUtils = new Element();
const caseCreationPage = new CaseCreationPage();
const caseDeletePage = new CaseDeletePage();
const assert = new AssertText();
const accountCreationPage = new AccountCreationPage();

class OpportunityCreationPage {
  OpptyNavigationButton =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Opportunities")])[1]';
  OpptyPageButton = '(//span[contains(text(),"Opportunities")])[1]';
  //'(//a[@title="Opportunities"]/*[text()="Opportunities"])[1]';
  newOpptyCreationButton = "//div[@title='New']";
  newOpptyCreationTab =
    '(//span[@title="Opportunity"]/following-sibling::*[contains(text(), "New Opportunity")])[1]';
  opptyTypeButton = '//label//*[text()="New Business"]/preceding-sibling::span';
  opptyTypeChannelSalesButton =
    '//label//*[text()="Channel Sales"]/preceding-sibling::span';
  opptyCreationNextPageButton = '//button//*[text()="Next"]';
  opptyTypeText = '//label//*[text()="New Business"]';
  opptyTypeChannelSalesText = '//label//*[text()="Channel Sales"]';
  // case creation form elements
  opptyTypeDropdown =
    "//span[text()='Type']/parent::span/following-sibling::div//a";
  opptyNameInput =
    "//label/span[text()='Opportunity Name']/parent::label/../input";
  opptyStageDropdown =
    "//span/span[text()='Stage']/../following-sibling::div//a";
  opptyCloseDateInput =
    "//label/span[text()='Close Date']/../following-sibling::div/input";
  opptycompetitiveDeal = "//span[text()='Affirm']";
  opptymoveToChosenButton = "(//div[text()='Competitive Deal']/..//button)[1]";
  opptyLeadSourceDropdown =
    "//span[text()='Lead Source']/../following-sibling::div//a";
  closeDateText = "//label/span[text()='Close Date']";
  opptysavebutton = "//button[@title='Save']";
  opptyPriceBook = "//label[text()='Price Book']/..//input";
  priceBookHeaderText = '//*[contains(text(), "Choose Price Book")]';
  priceBookButton = '//div[@role="dialog"]//button/span[text()="Save"]';
  priceBookNoteText =
    "//div[text()='Select a Price Book to associate with this opportunity. You can add products only from the Price Book you associate with this opportunity. Changing the Price Book deletes all products from the opportunity.']";
  opptyProduct =
    '//th[.="Clover Bread Pay App"]/parent::tr//td//div[contains(@class,"checkbox-container")]';
  //'//th[.="{{text}}"]/parent::tr//td//div[contains(@class,"checkbox-container")]';
  opptyNextButton = "//button[@title='Next']";
  editSelectedProductText = "//h2[text()='Edit Selected Products']";
  salesChannelText = "//span[text()='Sales Channels']";
  opptyRecordTypeText =
    '(//div[contains(@class, "recordTypeName")]/span[text()="New Business"])[1]';
  opptyRecordTypeChannelSalesText =
    '(//div[contains(@class, "recordTypeName")]/span[text()="Channel Sales"])[1]';
  clearSelectionButton =
    "//button[@class='slds-button slds-button_icon slds-input__icon slds-input__icon_right']";
  productListTest =
    "//span[@title='Products']/following-sibling::span[@title='(1)']";
  bdroutbound = "//span[text()='BDR Outbound']";
  opptyNameAfterSave =
    "//lightning-formatted-text[@data-output-element-id='output-field' and text()='Ohio State Buckeyes_test - Bread Direct - {{text}}' ]";
  opptyNameChannelSalesAfterSave =
    "//lightning-formatted-text[@data-output-element-id='output-field' and text()='Ohio State Buckeyes_test - RBC Core - {{text}}' ]";
  probabilityaftersave =
    "//lightning-formatted-number[@data-output-element-id='output-field' and text()='0%' ]";
  diligenceRequest =
    "//span[@class='slds-truncate slds-m-right--xx-small'][normalize-space()='Diligence Requests']";
  deligenceRequestNewMenu =
    "//lightning-button-menu[@data-target-reveals='sfdc:StandardButton.DiligenceRequest__c.New']//lightning-primitive-icon[@variant='bare']";
  deligenceRequestNewButton = "//span[normalize-space()='New']";
  opptyCreationToastMessage = '//span[@data-aura-class="forceActionsText"]';
  toastDeleteIcon = "//button[contains(@class,'toastClose')]";
  opportunitiesTab =
    '//div[@class="appNavItems"]//span[text()="Opportunities"]';
  newOpportunityButton = '//div[@title="New"]';
  sideButtonToDelete =
    '(//span[@class="slds-assistive-text" and text()="Show Actions"]/..)[1]';
  opportunitiesDeleteButton = '//a[@title="Delete"]';
  deleteMessage =
    '//div[@class="modal-header slds-modal__header"]/following-sibling::div[1]//div';
  deleteButton = '//button[@title="Delete"]';
  toastMessage = '//span[@data-aura-class="forceActionsText"]';
  cloverBreadPayApp =
    "//lightning-formatted-text[normalize-space()='Clover Bread Pay App']";
  productsHeader =
    "//span[@class='test-id__field-label'][contains(.,'Products')]";
  breadPayUpsell = "//span[text()='Bread Pay Success Upsell']";
  nextBestAction =
    "(//span[text()='Next Best Action']/following::div/div//a)[1]";
  nextBestActionDetail =
    "(//span[text()='Next Best Action Detail']/following::textarea[@role='textbox'])[1]";
  nextBestActionTooltip =
    '(//span[text()="Next Best Action"]/following::div//span[@role="tooltip"])[1]';
  oppFieldHistory = '//span[@title="Opportunity Field History"]';
  financialsFile = "(//span[text()='Financials'])[1]";
  diligenceAppovedDateField = "(//span[text()='Diligence Approved Date'])[1]";
  diligenceRejectedDateField = "(//span[text()='Diligence Rejected Date'])[1]";
  subNavigationMenu = "//button[@title='Select a List View: Opportunities']";
  subNavigationMenuSearchBox = "//input[@role='combobox']";
  selectOption = "//mark[normalize-space()='All Open Opportunities']";
  searchBox = "//input[@class='slds-input']";
  opportunityName = "(//a[contains(@title,'{{text}}')])[1]";
  //opportunityName = "(//a[contains(@title,'Ohio State Buckeyes_test')])[1]";
  diliganceRequests = "(//div[@class='slds-media'])[4]";
  diliganceName = "(//a[@class='slds-truncate'])[3]";
  accountName = "//a[@title='Ohio State Buckeyes_test']";
  cidccri = "//li[@title='CIDC/CRI']";
  experian = "(//a[text()='Experian'])[2]";

  /**
   * This function returns XPATH for account name
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForAccountNameText(searchText) {
    return `//force-lookup[@data-output-element-id="output-field"]//slot/span[text()="${searchText}"]`;
  }

  /**
   * This function returns XPATH of option from type select dropdown values
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForOpptyTypeDropdownValues(searchText) {
    return `//a[@title="${searchText}"]`;
  }

  /**
   * This function returns XPATH of option from type select dropdown values
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForPriceBookOptionValues(searchText) {
    return `//*[@title="${searchText}"]`;
  }

  /**
   * This function returns XPATH of option from lead source select dropdown values
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForOpptyLeadSourceDropdownValues(searchText) {
    return `//a[@title="${searchText}"]`;
  }

  /**
   * This function returns XPATH of option from stage select dropdown values
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForOpptyStageDropdownValues(searchText) {
    return `(//a[@title="${searchText}"])[1]`;
  }

  /**
   * This function return XPATH for account search result based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForAccountSearchResults(searchText) {
    return `//div[@title="${searchText}"]`;
  }

  /**
   * This function return XPATH for competitive deal value based given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForCompetitiveDealValues(searchText) {
    return `//span[text()="${searchText}"]`;
  }

  /**
   * This function return XPATH for product name based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForProductNameValues(searchText) {
    return `//a[@title="${searchText}"]`;
  }

  /**
   * This function return XPATH for product list based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForProductList(searchText) {
    return `//a[text()="${searchText}"]`;
  }

  /**
   * This function returns XPATH for product list channel sales based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForProductListChannelSales(searchText) {
    return `(//article)[3]//a[text()="${searchText}"]`;
  }

  /**
   * This function return XPATH for opportunity name based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXpathForOpportunityName(searchText) {
    return `//lightning-formatted-text[@data-output-element-id='output-field' and contains(text(),"${searchText}")]`;
  }

  /**
   * This function verify opportunity name
   * @param {string} expectedOpportunityName expectedOpportunityName should be any string value
   */
  getOpportunityName(expectedOpportunityName) {
    cy.xpath(this.getXpathForOpportunityName(expectedOpportunityName))
      .should("exist")
      .invoke("text")
      .then((actualName) => {
        expect(actualName.trim()).to.eq(expectedOpportunityName);
      });
  }

  /**
   * This function click on opportunity navigation button
   */
  clickOnOpportunityNavigationButton() {
    cy.xpath(this.OpptyNavigationButton).should("have.text", "Opportunities");
    cy.xpath(this.OpptyNavigationButton).click();
  }

  /**
   * This function return XPATH based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getOutputText(searchText) {
    return `//lightning-formatted-text[@data-output-element-id="output-field" and text()="${searchText}"]`;
  }

  /**
   * This function Navigate to New Opportunity Page
   */
  navigateToNewOpportunityPage() {
    const caseCreationPage = new CaseCreationPage();
    caseCreationPage.verifyLogoutButtonVisible();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(4000);
    //Below code will navigate to case page
    caseCreationPage.clickNavigationMenuButton();
    cy.xpath(this.OpptyNavigationButton).should("have.text", "Opportunities");
    cy.xpath(this.OpptyNavigationButton).click();
    cy.xpath(this.OpptyPageButton).should("be.visible");
    cy.xpath(this.OpptyPageButton).should("have.text", "Opportunities");
    cy.xpath(this.newOpptyCreationButton)
      .should("be.visible")
      .should("have.text", "New");
    //Closing all tabs that are opned already
    caseCreationPage.closeAlltabs();
  }

  /**
   * This function return string message to confirm opportunity deleted
   * @param {string} accountName accountName should be any string value such as account name
   * @param {string} type type should be opportunity type
   * @param {number} quarter quarter should be number such as 1,2,3,4
   * @param {number} year year should be any number such as 2000,2002,2024,2025
   * @returns
   */
  getOpportunityDeleteSuccessMessage(accountName, type, quarter, year) {
    return (
      accountName +
      " - " +
      type +
      " - Q" +
      quarter +
      " " +
      year +
      '" was deleted. Undo'
    );
  }
  /**
   * This function is creation of  opportunity in Bread console
   * @param {*} newText
   * @param {*} newOpportunityText
   * @param {*} opportunityRecordType
   * @param {*} requesterAccountName
   * @param {*} noneText
   * @param {*} type
   * @param {*} stage
   * @param {*} opportunityName
   * @param {*} leadSource
   */
  createOpportunity(
    newText,
    newOpportunityText,
    opportunityRecordType,
    closedDate,
    requesterAccountName,
    noneText,
    type,
    stage,
    opportunityName,
    leadSource,
  ) {
    //Below code will create a new service case
    elementUtils.click(this.OpptyPageButton);
    cy.xpath(this.newOpptyCreationButton)
      .should("be.visible")
      .should("have.text", newText);
    // eslint-disable-next-line cypress/no-force
    elementUtils.click(this.newOpptyCreationButton, false, true);
    cy.xpath(this.newOpptyCreationTab).should("be.visible");
    cy.xpath(this.newOpptyCreationTab).should("contain", newOpportunityText);
    cy.xpath(this.opptyTypeText).should("be.visible");
    cy.xpath(this.opptyTypeText).should("have.text", opportunityRecordType);
    // Click the Split screen button if aria-expanded is true
    contactPage.clickSplitViewModeButton();
    elementUtils.click(this.opptyTypeButton);
    elementUtils.click(this.opptyCreationNextPageButton);
    //adding closedate
    cy.xpath(this.opptyCloseDateInput).should("exist");
    elementUtils.type(this.opptyCloseDateInput, closedDate);
    //select account
    elementUtils.type(
      caseCreationPage.requesterAccountNameInput,
      requesterAccountName,
      true,
      false,
      true,
      false,
    );
    cy.xpath(
      caseCreationPage.getXPathForSuccessUserSearchResult(requesterAccountName),
    ).should("exist");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(
      caseCreationPage.getXPathForSuccessUserSearchResult(requesterAccountName),
    ).click({ force: true });
    //select type value
    cy.xpath(this.opptyTypeDropdown).should("have.text", noneText);
    elementUtils.click(this.opptyTypeDropdown);
    cy.xpath(this.getXPathForOpptyTypeDropdownValues(type)).should(
      "be.visible",
    );
    elementUtils.click(this.getXPathForOpptyTypeDropdownValues(type));
    cy.xpath(this.opptyTypeDropdown).should("have.text", type);
    //stage select
    cy.xpath(this.opptyStageDropdown).should("have.text", noneText);
    elementUtils.click(this.opptyStageDropdown, true, false);
    cy.xpath(this.getXPathForOpptyTypeDropdownValues(stage)).should(
      "be.visible",
    );
    elementUtils.click(this.getXPathForOpptyTypeDropdownValues(stage));
    cy.xpath(this.opptyStageDropdown).should("have.text", stage);
    cy.xpath(this.opptyNameInput).type(opportunityName);
    //competitivedealselect
    elementUtils.click(this.opptycompetitiveDeal, true);
    elementUtils.click(this.opptymoveToChosenButton);
    //leadsource
    cy.xpath(this.opptyLeadSourceDropdown).scrollIntoView();
    cy.xpath(this.opptyLeadSourceDropdown).should("have.text", noneText);
    elementUtils.click(this.opptyLeadSourceDropdown);
    cy.xpath(this.getXPathForOpptyTypeDropdownValues(leadSource)).should(
      "be.visible",
    );
    elementUtils.click(this.getXPathForOpptyTypeDropdownValues(leadSource));
    cy.xpath(this.opptyLeadSourceDropdown).should("have.text", leadSource);
  }
  /**
   * This function is created for Opportunity save button and close success toast modal
   */
  opportunitySaveButton() {
    //click on Opportunity save button and close success toast modal
    cy.xpath(this.opptysavebutton)
      .should("be.visible")
      .should("not.have.attr", "disabled");
    elementUtils.click(this.opptysavebutton);
    elementUtils.click(accountCreationPage.toastCloseIcon);
  }
  /**
   *
   * @param {string} successMessage successMessage should contains name of the opportunity
   */
  verifyDeleteOpportunity(successMessage) {
    const caseCreationPage = new CaseCreationPage();
    const elementUtils = new Element();
    cy.xpath(this.opportunitiesTab).should("be.visible");
    cy.xpath(this.opportunitiesTab).should("have.text", "Opportunities");
    elementUtils.click(this.opportunitiesTab, false, true);
    caseCreationPage.closeAlltabs();
    cy.xpath(this.newOpportunityButton)
      .should("be.visible")
      .should("have.text", "New");
    elementUtils.click(this.sideButtonToDelete, false, true);
    elementUtils.click(this.opportunitiesDeleteButton, false, true);
    cy.xpath(this.deleteMessage).should(
      "have.text",
      "Are you sure you want to delete this opportunity?",
    );
    elementUtils.click(this.deleteButton, false, true);
    cy.xpath(this.toastMessage)
      .should("be.visible")
      .invoke("text")
      .should("contain", successMessage);
    //Closing all tabs that are still opened
    caseCreationPage.closeAlltabs();
  }
  /**
   * This function is created for delete opportunity service case deletion
   * @param {*} opportunityText
   * @param {*} newText
   * @param {*} OpportunitiesText
   * @param {*} caseDeletePreConfirmText
   */
  deleteOpportunityServiceCase(
    opportunityText,
    newText,
    OpportunitiesText,
    caseDeletePreConfirmText,
  ) {
    // Below code will delete the created case
    caseCreationPage.closeAlltabs();
    assert.have(this.OpptyPageButton, opportunityText);
    cy.xpath(this.newOpptyCreationButton)
      .should("be.visible")
      .should("have.text", newText);
    caseCreationPage.clickNavigationMenuButton();
    cy.xpath(this.OpptyNavigationButton).should("have.text", OpportunitiesText);
    elementUtils.click(this.OpptyNavigationButton);
    assert.have(this.OpptyPageButton, opportunityText);
    cy.xpath(this.newOpptyCreationButton)
      .should("be.visible")
      .should("have.text", newText);
    elementUtils.click(caseDeletePage.caseSideButtonToDelete, false, true);
    caseDeletePage.clickCaseDeleteButton();
    cy.xpath(caseDeletePage.caseDeletePreConfirmMessage).should(
      "have.text",
      caseDeletePreConfirmText,
    );
    elementUtils.click(caseDeletePage.caseDeleteConfirmButton);
    //eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    caseDeletePage.verifyCaseDeleteToastMessage();
  }
}
export default OpportunityCreationPage;
