/// <reference types='cypress' />
class CaseBuyerSupportPage {
  buyerSupportCaseTypeText = '//label//*[text()="Buyer Support"]';
  BuyerSupportCaseTypeButton =
    '//label//*[text()="Buyer Support"]/preceding-sibling::span';
  buyerSupportRequesterAccountNameInput =
    '(//input[@placeholder="Search Accounts..."])[1]';

  SupportResearchCaseTypeText = '//label//*[text()="Support Research"]';
  SupportResearchCaseTypeButton =
    '//label//*[text()="Support Research"]/preceding-sibling::span';
  SupportResearchRequesterAccountNameInput =
    '(//input[@placeholder="Search Accounts..."])[1]';

  //{{text}} should be replaced with actual value of the element
  //getFormattedXpath can be used to replace value

  buyerSupportCategory = "//lightning-formatted-text[.='{{text}}']";
  buyerSupportCaseOrigin = "//span[.='{{text}}']";
  buyerSupportProduct = "//lightning-formatted-text[.='{{text}}']";
  buyerSupportAccountName = '(//span[(text())="{{text}}"])[1]';
  buyerSupportRequester = "//lightning-formatted-text[.='{{text}}']";
  buyerSupport = "//span[.='{{text}}']";
  buyerSupportSubject = '(//slot[@name="output"]/*[text()="{{text}}"])[1]';
  buyerSupportCaseRecordType = "(//span[.='{{text}}'])[1]";
  buyerSupportDetailsTabLink = "//a[.='Details']";
  buyerSupportDisputeTabLink = "//a[.='Dispute']";
  buyerSupportDescriptionSection = "(//span[.='Description'])[1]";
  buyerSupportRequesterSection = "(//span[.='Requester'])[1]";
  buyerSupportOtherInformationSection = "(//span[.='Other Information'])[1]";
  merchantSupportCategory = "//lightning-formatted-text[.='{{text}}']";
  merchantSupportCaseRecordType = "(//span[.='{{text}}'])[2]";
  merchantSupportCaseOrigin = "(//span[.='{{text}}'])[1]";
  merchantSupportDescriptionSection = "(//span[.='Description'])[1]";
  merchantSupportSubject = '(//slot[@name="output"]/*[text()="{{text}}"])[1]';
  merchantSupportAccountName = '(//*[contains(text(),"{{text}}")])[1]';
  merchantSupportSuportContactName = '(//span[(text())="{{text}}"])[1]';
  merchantSuccessOwner = '//span[normalize-space()="Success Owner"]';
  merchantSuccessLevel = '//span[normalize-space()="Success Level"]';
  merchantSuccessLevelProducts =
    '//span[normalize-space()="Live Bread Products"]';
  SupportResearchCategory = "//lightning-formatted-text[.='{{text}}']";
  SupportResearchCaseOrigin =
    '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';
  SupportResearchRequester = "//lightning-formatted-text[.='{{text}}']";
  SupportResearchcaseDescription =
    '(//slot[@name="output"]/*[text()="{{text}}"])[1]';
  SupportResearchSubject = '(//slot[@name="output"]/*[text()="{{text}}"])[1]';
  SupportResearchAccountName = '(//slot[(text())="{{text}}"])[2]';
  SupportResearchPriority =
    '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';
  SupportResearchStatus =
    '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';

  // xpath for penny test case creation
  pennyTestAccountName = '(//*[contains(text(),"{{text}}")])[1]';
  pennyTestRecordType =
    '(//div[contains(@class, "recordTypeName")]/span[text()="{{text}}"])[2]';
  pennyTestDescription =
    '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';
  pennyTestContactName = '//*[contains(text(), "{{text}}")]';
  pennyTestPriority = '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';
  pennyTestOrigin = '(//slot[@name="outputField"]/*[text()="{{text}}"])[1]';
  complaintSummaryTextArea =
    '(//label[text()="Complaint Summary"]/following::div/textarea)[1]';
  loan = '//div[@class = "actionBody"]';
  loanPlatform = '//div[@class="secondaryFields"]';
  //CBR case creation related elements
  creditBureauReportingTypeText =
    '//span[contains(text(),"Credit Bureau Reporting")]';
  CBRCaseTypeButton =
    '//label//*[text()="Credit Bureau Reporting"]/preceding-sibling::span';
  caseDetails = '//div[@class = "actionBody"]';
  CBRTitle = '//em[contains(.,"Credit Bureau Reporting Case")]';
  dispute = '//a[@data-label="Dispute"]';
  disputeSubTabs = '//a[@data-label="Dispute"]/following::slot[@name="tabs"]';
  showMoreOpt =
    '//button[@class="slds-button slds-button_icon-border-filled fix-slds-button_icon-border-filled slds-button_last"]';
  LogCall = '//div[@part="overlay dropdown"]';
  LoneNumberText = '//span[normalize-space()="Loan Number"]';
  CBREditButton = '(//button[normalize-space()="Edit"])[1]';
  CBRStatus = '(//label[text()="Status"]/following::button)[1]';

  /**
   * THis function used for verify the fields under case details page Remove 3 Fields from Case Page Layout
   * @param {*} caseCloseReason
   * @param {*} complaintText
   * @param {*} refundCheck
   */
  verifyCaseFields(caseCloseReason, complaintText, refundCheck) {
    cy.xpath(this.caseDetails).should("not.have.text", caseCloseReason);
    cy.xpath(this.caseDetails).should("not.have.text", complaintText);
    cy.xpath(this.caseDetails).should("not.have.text", refundCheck);
  }
}
export default CaseBuyerSupportPage;
