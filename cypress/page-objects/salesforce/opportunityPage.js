class opportunityPage {
  AppExchange = '//button[@title="App Launcher"]';
  SearchItems = '//input[@placeholder="Search apps and items..."]';
  newopportunitybutton = '//div[@title="New"]';
  breadcardrecordtype = '//span[text()="Bread Card"]/preceding-sibling::input';
  nextbutton = '//span[text()="Next"]/parent::button';
  OpprortunityName =
    '//span[text()="Opportunity Name"]/parent::label//following-sibling::input';
  upsell = '//div[text()="For upsell opportunities with existing merchants"]';
  Dateinput =
    '//span[text()="Close Date"]/parent::label//following-sibling::div//input';
  Accountsearch = '//input[@placeholder="Search Accounts..."]';
  typedropdown = '//span[text()="Type"]/parent::span/following-sibling::div//a';
  savebutton = '//button[@title="Save"]';
  stagedropdown =
    '//span[text()="Stage"]/parent::span/following-sibling::div//a';
  opportunityNavigation =
    '//div[@id="navMenuList"]//span[text()="Opportunities"]';
  opportunitylistviewpage =
    '(//div[contains(@class, "slds-page-header")]//span[text()="Opportunities"])[1]';
  breadcard =
    '//div[text()="For Bread Financial Card-driven contracts (Card, Sales Finance, Embedded Finance)"]';
  priceBookHeader = "//div[@class='modal-header slds-modal__header']/h1";
  priceBookModalCloseIcon = "//button[@title='Cancel and close']";
  priceBookDescription = "//div[contains(@class,'pbDescription')]";
  pricebookinput = '//label[text()="Price Book"]/following-sibling::div//input';
  productsheader = '//h2[text()="Add Products"]';
  associatedDocsHeader =
    "//span[@class='slds-card__header-link' and text()='Associated Documents']";
  productsSection = "//span[@title='Products']";
  priceBookInputClearIcon = "//button[@title='Clear Selection']";
  editselectedproduct = '//h2[text()="Edit Selected Products"]';
  selectedproductext = '//span[text()="Product"]';
  opportunityrecordpage = '//records-entity-label[text()="Opportunity"]';
  opportunitiestab =
    '//div[@class="appNavItems"]//span[text()="Opportunities"]';
  sideButtonToDelete = '(//div[@data-aura-class="forceVirtualAction"])[1]';
  opportunitiesdeletebutton = '//a[@title="Delete"]';
  deleteMessage =
    '//div[@class="modal-header slds-modal__header"]/following-sibling::div[1]//div';
  deleteButton = '//button[@title="Delete"]';
  toastmessage = '//span[@data-aura-class="forceActionsText"]';

  /**
   * This function return XPATH for opportunity record type input based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForopportunityRecordTypeInput(searchText) {
    return `//span[text()="${searchText}"]/preceding-sibling::input`;
  }

  /**
   * This function return XPATH for product checkbox
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getxpathForProductCheckbox(searchText) {
    return `//a[text()="${searchText}"]/ancestor::tr//input/..`;
  }

  /**
   * This function return XPATH for account name based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForAccountNameInOutPut(searchText) {
    return `//span[text()="Account Name"]/ancestor::dt//following-sibling::dd//slot[text()="${searchText}"]`;
  }

  /**
   * This function return XPATH for account name based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getXPathForAccountNameOutPutText(searchText) {
    return `(//span[text()="${searchText}"])[1]`;
  }

  /**
   * This function return XPATH for opportunity record type based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getxpathforOppotunityRecordTypeout(searchText) {
    return `//span[text()="Opportunity Record Type"]//ancestor::dt//following-sibling::dd//span[text()="${searchText}"]`;
  }

  /**
   * This function return XPATH for opportunity based on account name and opportunity type
   * @param {string} accname  accname should be any string value such as account name
   * @param {string} opptype opptype should any string value such as type of opportunity
   * @returns
   */
  getxpathforOpportunityName(accname, opptype) {
    return `//lightning-formatted-text[@data-output-element-id="output-field" and contains(text(),"${accname}") and contains(text(),"${opptype}")]`;
  }

  /**
   * This function  return XPATH for products based on given value
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getxpathforproductoutput(searchText) {
    return `//span[@title="Products"]/ancestor::article//a[text()="${searchText}"]`;
  }
}
export default opportunityPage;
