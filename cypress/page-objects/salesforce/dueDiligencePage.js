/// <reference types='cypress' />
class DueDiligencePage {
  diligenceRequest = "//span[normalize-space()='Diligence Requests']";
  diligenceRequestNewMenu =
    "//lightning-button-menu[@data-target-reveals='sfdc:StandardButton.DiligenceRequest__c.New']//lightning-primitive-icon[@variant='bare']";
  diligenceRequestNewButton = "//span[normalize-space()='New']";
  newDueDiligenceRequestHeader = "//h2[text()='New Diligence Request']";
  platformDiligenceRadioButton =
    "//span[text()='Platform Diligence']/preceding::input[1]";
  dueDiligenceRequestNextButton = "//span[text()='Next']";
  platformDiligenceText =
    "//div[text()='This should be used for merchants integrating onto Bread Platform']";
  statusDropdown = "//button[@aria-label='Status']";
  accountSearchBox = "//input[@placeholder='Search Accounts...']";
  saveButton =
    "//button[@class='slds-button slds-button_brand'][contains(.,'Save')]";
  opportunityInputBox =
    "//input[contains(@class,'slds-combobox__input slds-input slds-combobox__input-value')]";
  diligenceRequestCreationToastMessage =
    "//div[contains(@id,'toastDescription')]/span[contains(@class,'toastMessage') and contains(text(),'Diligence Request')]";
  diligenceRequestCreationToastCloseIcon =
    "//button[contains(@class,'toastClose')]";
  editAMLBSAEscalatedIcon = "//button[@title='Edit AML/BSA Escalated']";
  editAMLBSAStatusIcon = "//button[@title='Edit AML/BSA Status']";
  amlBSAStatusValue =
    "//button[@title='Edit AML/BSA Status']/..//*[@data-output-element-id='output-field']";
  amlBSAStatusDropdown = "//button[@aria-label='AML/BSA Status']";
  editAMLBSADecisionDateIcon = "//button[@title='Edit AML/BSA Decision Date']";
  amlBSADecisionDateValue =
    "//button[@title='Edit AML/BSA Decision Date']/..//*[@data-output-element-id='output-field']";
  editCreditStatusIcon = "//button[@title='Edit Credit Status']";
  creditStatusValue =
    "//button[@title='Edit Credit Status']/..//*[@data-output-element-id='output-field']";
  editCreditDecisionDateIcon = "//button[@title='Edit Credit Decision Date']";
  creditStatusDropdown = "//button[@aria-label='Credit Status']";
  creditDecisionDateValue =
    "//button[@title='Edit Credit Decision Date']/..//*[@data-output-element-id='output-field']";
  editStatusIcon = "//button[@title='Edit Status']";
  statusValue =
    "//button[@title='Edit Status']/..//*[@data-output-element-id='output-field']";
  editRejectedReasonIcon = "//button[@title='Edit Rejected Reason']";
  editFinalDecisiondateIcon = "//button[@title='Edit Final Decision Date']";
  finalDecisionDateValue =
    "//button[@title='Edit Final Decision Date']/..//*[@data-output-element-id='output-field']";
  opportunitytab = "(//li[contains(@class,'oneConsoleTabItem')])[2]";
  diligenceSubmitSideBtn =
    "//button[contains(@class,'slds-button slds-button_icon-border-filled fix-slds-button_icon')]";
  submitApprovalBtn = "//span[text()='Submit for Diligence']";
  comments = "textarea[part='textarea']";
  submitBtn = "//button[text()='Submit']";
  approvalMsg = "//strong[contains(text(),'Approval')]";
  doneBtn = "//button[text()='Done']";
  sideBtnForApprove =
    '(//span[@class="slds-assistive-text" and text()="Show actions for Approval History"]/..)[1]';
  approveMenu = "//a[@title='Approve']";
  approveComment = "textarea[class*='inputTextArea']";
  approveBtn = "//span[text()='Approve']";
  diligenceApprovedDateText = "//span[text()='Diligence Approved Date']";
  diligenceApprovedDate =
    "//div[@data-target-selection-name='sfdc:RecordField.Opportunity.Diligence_Approved_Date__c']//lightning-formatted-text[@data-output-element-id='output-field']";
  rejectMenu = "//a[@title='Reject']";
  rejectBtn = "//span[text()='Reject']";
  diligenceRejectedDateText = "//span[text()='Diligence Rejected Date']";
  diligenceRejectedDate =
    "//div[@data-target-selection-name='sfdc:RecordField.Opportunity.Diligence_Rejected_Date__c']//lightning-formatted-text[@data-output-element-id='output-field']";

  getXpathForStatusDropdownOption(searchText) {
    return `//span[@class="slds-media__body"][text()="${searchText}"]`;
  }

  getXpathForAccountOption(searchText) {
    return `//span[contains(@class,'slds-listbox__option-text_entity')]/*[@title="${searchText}"]`;
  }

  getXpathForCreditDecisionDateValue(searchText) {
    return `//button[@title='Edit Credit Decision Date']/..//*[text()="${searchText}"]`;
  }

  getXpathForAMLBSADecisionDateValue(searchText) {
    return `//button[@title='Edit AML/BSA Decision Date']/..//*[text()="${searchText}"]`;
  }

  getXpathForFinalDecisionDateValue(searchText) {
    return `//button[@title='Edit Final Decision Date']/..//*[text()="${searchText}"]`;
  }
  getXpathForStatusValue(searchText) {
    return `//button[@title='Edit Status']/..//*[text()="${searchText}"]`;
  }
  getXpathForAMLBSADStatusValue(searchText) {
    return `//button[@title='Edit AML/BSA Status']/..//*[text()="${searchText}"]`;
  }
  getXpathForCreditStatusValue(searchText) {
    return `//button[@title='Edit Credit Status']/..//*[text()="${searchText}"]`;
  }
  getXPathForDueDiligenceDropdownValues(searchText) {
    return `(//span[@title="${searchText}"])[1]`;
  }

  getXPathForDueDiligenceCreditStatusDropdownValues(searchText) {
    return `//label[.="Credit Status"]/parent::div//span[@title="${searchText}"]`;
  }

  //This function clicks on Due diligence menu and click on New button in opportunity page
  clickDueDiligenceRequestNewButton() {
    cy.xpath(this.diligenceRequest).should("be.visible");
    cy.xpath(this.diligenceRequest).should("contains", "Diligence Requests");
    cy.xpath(this.diligenceRequestNewMenu).should("be.visible");
    cy.xpath(this.diligenceRequestNewMenu).click();
    cy.xpath(this.diligenceRequestNewButton).should("be.visible");
    cy.xpath(this.diligenceRequestNewButton).should("have.text", "New");
    cy.xpath(this.diligenceRequestNewButton).click();
  }

  //This function verifies the New Diligence Request model content
  verifyNewDiligenceRequestContent() {
    cy.xpath(this.newDueDiligenceRequestHeader).should("be.visible");
    cy.xpath(this.newDueDiligenceRequestHeader).should(
      "have.text",
      "New Diligence Request",
    );
    cy.xpath(this.platformDiligenceText).should("be.visible");
    cy.xpath(this.platformDiligenceText).should(
      "have.text",
      "This should be used for merchants integrating onto Bread Platform",
    );
  }

  //This function selects the Platform Diligence Radio button
  selectPlatformDiligenceRadioButton() {
    cy.xpath(this.platformDiligenceRadioButton).should("be.visible");
    cy.xpath(this.platformDiligenceText).should("be.visible");
    cy.xpath(this.platformDiligenceRadioButton).click();
  }

  //This function clicks on Due diligence menu and click on New button in opportunity page
  clickOnNewDiligenceRequestNextButton() {
    cy.xpath(this.dueDiligenceRequestNextButton).should("be.visible");
    cy.xpath(this.dueDiligenceRequestNextButton).should("have.text", "Next");
    cy.xpath(this.dueDiligenceRequestNextButton).click();
  }

  //This function selects the dropdown option
  selectDropdownOption(dropDownvalue) {
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(dropDownvalue)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(dropDownvalue)).should(
      "have.text",
      dropDownvalue,
    );
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(dropDownvalue)).click();
  }

  //Select an option from Status dropdown
  selectStatusDropdownValue(statusOption) {
    cy.xpath(this.statusDropdown).should("have.text", "--None--");
    cy.xpath(this.statusDropdown).click();
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(statusOption)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(statusOption)).click();
    cy.xpath(this.statusDropdown).should("have.text", statusOption);
  }

  //This function selects any duediligence dropdown option
  selectDueDiligenceDropdownOption(ele, dropdownOption) {
    cy.xpath(ele).scrollIntoView();
    cy.xpath(ele).should("have.text", "--None--");
    cy.scrollTo("center");
    cy.xpath(ele).focus();
    cy.xpath(ele).click();
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(dropdownOption)).should(
      "have.text",
      dropdownOption,
    );
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.getXPathForDueDiligenceDropdownValues(dropdownOption)).click({
      force: true,
    });
    cy.xpath(ele).should("have.text", dropdownOption);
  }

  //This function selects any duediligence credit status dropdown option
  selectDueDiligenceCreditStatusDropdownOption(ele, option) {
    cy.xpath(ele).scrollIntoView();
    cy.xpath(ele).should("have.text", "--None--");
    cy.scrollTo("center");
    cy.xpath(ele).focus();
    cy.xpath(ele).click();
    cy.xpath(
      this.getXPathForDueDiligenceCreditStatusDropdownValues(option),
    ).should("have.text", option);
    // eslint-disable-next-line cypress/no-force
    cy.xpath(
      this.getXPathForDueDiligenceCreditStatusDropdownValues(option),
    ).click({
      force: true,
    });
    cy.xpath(ele).should("have.text", option);
  }

  //This function clicks on Due diligence save button
  clickOnNewDiligenceRequestSaveButton() {
    cy.xpath(this.saveButton).should("be.enabled");
    cy.xpath(this.saveButton).should("be.visible");
    cy.xpath(this.saveButton).should("have.text", "Save");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.saveButton).click({ force: true });
  }

  //This function verifies the field value
  verifyElementText(ele) {
    cy.scrollTo("center");
    cy.xpath(ele).scrollIntoView();
    cy.xpath(ele).should("be.visible");
    cy.xpath(ele).should("exist");
  }
}
export default DueDiligencePage;
