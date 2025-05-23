/// <reference types='cypress' />
import Element from "../../../utils/element";
import AccountCreationPage from "../../page-objects/salesforce/accountCreationPage";
import MerchantSeedingPage from "../../page-objects/salesforce/merchantSeedingPage";
const accountCreationPage = new AccountCreationPage();
const elementUtils = new Element();
const merchantSeedingPage = new MerchantSeedingPage();
class AccountSyncPage {
  childAccName = '//lightning-formatted-text[@slot="primaryField"]';
  accCenterPage =
    '//flexipage-record-home-scrollable-column[contains(@id,"middleColumn")]';
  syncTextMessage =
    '//p//strong[text()="Please sync changes to merchant data to Bread Platform - Production."]';
  syncButton = '//button[text()="Sync"]';
  syncSuccessMsg = '//p//strong[text()="Changes synced successfully."]';
  syncokButton = '//button[text()="Ok"]';
  editButton = '//button[text()="Edit"]';
  accLegalName = '//input[@name="Legal_Name__c"]';
  accShowmoreActions =
    '//div[@class="slds-media"]/following-sibling::div//span[text()="Show more actions"]';
  accShowMoreActionButton =
    '//div[@class="slds-media"]/following-sibling::div//lightning-button-menu/button';
  viewPlatformDetail =
    "//a[@role='menuitem']/span[text()='View Platform Details']";
  viewMerchant =
    '//div[@id="wrapper-body"]//strong[contains(text(),"View Merchant")]';
  editSuccessMessage = '//title[text()="Edit Merchant"]/parent::body//strong';
  platformOkButton = '//button[text()="OK"]';
  syncTextMessagePreview =
    '//p//strong[text()="Please sync changes to merchant data to Bread Platform - Preview."]';

  /**
   * This function gets Platform text
   * @param {string} searchtext text to pass as an argument
   * @returns Xpath of the Platform Text
   */
  getPlatformtext(searchtext) {
    return `//p[text()="${searchtext}"]`;
  }

  /**
   * This function gets xpath for account dropdown
   * @param {string} searchText text to pass as an argument
   * @returns Xpath of the Account Dropdown
   */
  accdropdwnbutton(searchText) {
    return `//button[@aria-label="${searchText}"]`;
  }

  /**
   * This function gets xpath of Parent Account
   * @param {string} searchText text to pass as an argument
   * @returns Xpath of Parent Account
   */
  getParentAccountselect(searchText) {
    return `//lightning-base-combobox-formatted-text[@title="${searchText}"]`;
  }
  /**
   * This function is verify the Sync button in the account
   * @param {*} updatefieldName
   * @param {*} posupdatefield
   * @param {*} parentlegalname
   */
  verifyAccSyncButton(updatefieldName, posupdatefield, parentlegalname) {
    elementUtils.click(this.editButton);
    elementUtils.click(this.accdropdwnbutton(updatefieldName));
    accountCreationPage.selectDropdowns(posupdatefield);
    elementUtils.type(this.accLegalName, parentlegalname, false, true);
    elementUtils.click(accountCreationPage.saveButton);
  }
  /**
   * This function is Verify the sync field values in the view platform Screen
   * @param {*} parentlegalname
   * @param {*} posupdatefield
   */
  verifySyncFieldValues(parentlegalname, posupdatefield) {
    elementUtils.click(this.accShowMoreActionButton, true);
    elementUtils.click(this.viewPlatformDetail, false, true);
    elementUtils.click(merchantSeedingPage.nextButton);
    cy.xpath(this.getPlatformtext(parentlegalname)).scrollIntoView();
    cy.xpath(this.getPlatformtext(parentlegalname)).should("be.visible");
    cy.xpath(
      this.getPlatformtext(posupdatefield.replace(/\s+/g, "")),
    ).scrollIntoView();
    cy.xpath(this.getPlatformtext(posupdatefield.replace(/\s+/g, ""))).should(
      "be.visible",
    );
    elementUtils.click(this.platformOkButton, true);
  }
}
export default AccountSyncPage;
