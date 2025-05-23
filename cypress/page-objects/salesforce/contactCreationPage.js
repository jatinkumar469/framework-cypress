/// <reference types='cypress' />

class ContactCreationPage {
  contactNavigationButton =
    '(//*[contains(concat(" ", normalize-space(@class), " "), " menuLabel ") and contains(text(), "Contacts")])[1]';
  contactPageButton = '(//a[@title="Contacts"]/*[text()="Contacts"])[1]';
  newContactCreationButton = '(//a[@title="New" and @role="button"]/div)[1]';
  newContactCreationBtn = '(//button[text()="New" and @type="button"])[1]';
  contactPageLoaded = '//span[@class="countSortedByFilteredBy"]';
  importContactButton = '//div[@title="Import"]';
  intelligenceViewButton = '//div[@title="Intelligence View"]';
  whosViewingButton = '//div[@data-component-id="whosViewing"]';
  newContactCreationTab =
    '(//span[@title="Contact"]/following-sibling::*[contains(text(), "New Contact")])[1]';
  contactInformation = '//span[text()="Contact Information"]';
  splitViewModeButton = '//button[@title="Split view mode"]';
  salutationText = '//button[@name="salutation"]/span';
  salutationButton = '//button[@name="salutation"]';
  contactFirstName = '//input[@name="firstName"]';
  contactLastName = '//input[@name="lastName"]';
  contactCreationSaveButton = '//button[@name="SaveEdit"]';
  contactAccountLink = "(//span[contains(text(),'Ramesh Test User')])[1]";
  contactName =
    "(//span[@class='slds-truncate']//*[text()='Automation Test User'])[1]";
  supressFormMarketingEmailsText =
    "(//span[text()='Suppress from Marketing Emails'])[1]";
  supressFormMarketingEmailsEditButton =
    "//button[@title='Edit Suppress from Marketing Emails']";
  supressFormMarketingEmailsCheckbox =
    "//span[@part='input-checkbox']//input[@name='Suppress_from_Marketing_Emails__c']";
  contactCreationToastMessage =
    '//span[@class="toastMessage slds-text-heading--small forceActionsText"]';
  contactDeletionToastMessage =
    '//span[@class="toastMessage slds-text-heading--small forceActionsText"]';
  contactAccount = '(//span[text()="Automation Test User"])[1]';
  contactDeleteButton = '//button[@name="Delete"]';
  contactAccDeleteBtn = "//a[@title='Delete']";
  subNavigationMenu = "//button[@title='Select a List View: Contacts']";
  recentlyViewed = "(//mark[text()='Recently Viewed Contacts'])[1]";
  deleteContactName =
    '(//span[@class="slds-assistive-text" and text()="Show Actions"]/..)[1]';
  contactOutputText =
    '//lightning-formatted-name[@data-output-element-id="output-field"]';
  contactDeleteActionBtn = '//div[@data-aura-class="forceVirtualAction"]';

  getXPathForContactName(searchText) {
    return `(//span[@class='slds-truncate']//*[text()="${searchText}"])[1]`;
  }
  contactTitleName =
    '//button[@title="Edit Name"]/..//*[@data-output-element-id="output-field"]';

  accountNameInDetails =
    '(//button[@title="Edit Account Name"]/..//*[@data-output-element-id="output-field"]//span//slot//slot)[1]';

  getXPathForContactCreatedBy(searchText) {
    return `(//slot[contains(text(), "${searchText}")])[1]`;
  }
  getXPathForcreatedCaseRequesteSearchResults(searchText) {
    return `(//span/lightning-base-combobox-formatted-text[@title="${searchText}"])[1]`;
  }
  /**
   * This function returns XPATH for contact name action button
   * @param {string} searchText searchText should be any string
   * @returns {string} should return XPATH
   */
  getContactActionButton(searchText) {
    return `((//a[contains(@title,'${searchText}')])[1])`;
  }
  //this function Click the Split screen button if aria-expanded is true
  clickSplitViewModeButton() {
    // Click the Split screen button if aria-expanded is true
    cy.xpath(this.splitViewModeButton)
      .invoke("attr", "aria-expanded")
      .then((ariaExpanded) => {
        if (ariaExpanded === "true") {
          cy.xpath(this.splitViewModeButton).click();
        }
      });
  }
}
export default ContactCreationPage;
