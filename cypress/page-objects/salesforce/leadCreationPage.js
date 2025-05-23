/// <reference types='cypress' />

class LeadCreationPage {
  // Xpath for Lead creation
  navigationMenuButton = '(//div//button[@title="Show Navigation Menu"])[1]';
  createNewLead = '//a[@title="New" and @role="button"]/div[text()="New"]';
  newLeadCreationTab =
    '(//span[@title="Lead"]/following-sibling::*[contains(text(), "New Lead")])[1]';
  newLeadTitle = '//h2[.="New Lead"]';
  leadSalutationDropDown = "//button[@name='salutation']/span";
  leadSaluationOption = '//lightning-base-combobox-item[.="{{text}}"]';
  leadFirstName = "//input[@name='firstName']";
  leadMiddleName = "//input[@name='middleName']";
  leadLastName = "//input[@name='lastName']";
  leadCompany = "//input[@name='Company']";
  navMenuItemLeads =
    '//ul[@aria-label="Navigation Menu"]/li/div/a[@data-label="Leads"]';
  otherEcommercePlatform = '//input[@name="Other_E_Commerce_Platform__c"]';
  source = '//input[@name="Source__c"]';
  originalSourceDrillDownDropDown =
    '//input[@name="Original_Source_Drill_Down_1__c"]';
  activeFlowCount = '//input[@name="Groove_Active_Flows_Count__c"]';
  linkedInUrl = '//input[@name="LinkedIn_URL__c"]';
  navMenuSelectedItem =
    '//div[@role="navigation" and @class="appNavItems"]/div[contains(@class,"selectedListItem")]/a';
  viewDetailsTab = '//a[@data-label="Details"]';
  viewLeadCompany = '(//lightning-formatted-text[.="{{text}}"])[2]';
  viewLeadStatus = '//lightning-formatted-text[.="{{text}}"]';
  viewLeadName = '//lightning-formatted-name[.="{{text}}"]';
  viewEbookLeadLabel = '//span[.="Ebook Lead"]';
  viewSource = '//lightning-formatted-text[.="{{text}}"]';
  viewActiveFlowsCount = '//lightning-formatted-number[.="{{text}}"]';
  viewLinkedInUrl = '//lightning-formatted-url[.="{{text}}"]';
  successMessageCreateLead = '//span[contains(@class,"toastMessage")]';
  leadSideButtonToDelete =
    '(//a//span[@class="slds-assistive-text" and text()="Show Actions"]/..)[1]';

  /**
   * This function create full name from specified value
   * @param {object} leadTestData leadTestData object should have property such as salutation, firstName, middleName, lastName
   * @returns {string}
   */
  getFullName(leadTestData) {
    const fullName =
      leadTestData.salutation +
      " " +
      leadTestData.firstName +
      " " +
      leadTestData.middleName +
      " " +
      leadTestData.lastName;
    return fullName;
  }

  /**
   * This function verify selected item from navigation menu as Lead
   */
  verifySelectedNavMenuItemAsLead() {
    cy.xpath(this.navMenuSelectedItem)
      .invoke("text")
      .then((text) => {
        expect(text).to.be.equals("Leads");
      });
  }
}
export default LeadCreationPage;
