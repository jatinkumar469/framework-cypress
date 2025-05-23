/// <reference types='cypress' />
import Element from "../../../utils/element";

import CaseCreationPage from "./caseCreationPage";
class CaseDeletePage {
  caseSideButtonToDelete =
    '(//span[@class="slds-assistive-text" and text()="Show Actions"]/..)[1]';
  caseDeleteButton = '//a[@title="Delete"]';
  caseDeleteButtonText = '//a[@title="Delete"]/div';
  caseDeleteConfirmButton = '//button[@title="Delete"]';
  caseDeletePreConfirmMessage =
    '//div[@class="modal-header slds-modal__header"]/../div[2]/div';
  caseDeletionToastMessage =
    '//span[@class="toastMessage slds-text-heading--small forceActionsText"]';
  recentlyViewCasesOptionFromDropdown =
    '//span[contains(text(),"Recently Viewed (Pinned list)")]';
  updateFewSecondsAgoText =
    '//*[@class="countSortedByFilteredBy" and @aria-label="Recently Viewed"]/following-sibling::*';

  /**
   * This function verifies update few seconds ago text
   */
  verifyUpdateFewSecondsAgoText() {
    cy.xpath(this.updateFewSecondsAgoText).scrollIntoView();
    cy.xpath(this.updateFewSecondsAgoText)
      .should("be.visible")
      .and("contain", "Updated a few seconds ago");
  }

  /**
   * This function clicks on case side delete button
   */
  clickCaseSideButtonToDelete() {
    cy.xpath(this.caseSideButtonToDelete).should("be.visible");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.caseSideButtonToDelete).click({ force: true });
  }

  /**
   * This function clicks on case Delete button
   */
  clickCaseDeleteButton() {
    const elementUtils = new Element();
    cy.xpath(this.caseDeleteButton).should("be.visible");
    cy.xpath(this.caseDeleteButtonText).should("have.text", "Delete");
    elementUtils.click(this.caseDeleteButton, false, true);
  }

  /**
   * This function verifies case delete pre confirmation text
   */
  verifyCaseDeletePreConfirmationText() {
    cy.xpath(this.caseDeletePreConfirmMessage).scrollIntoView();
    cy.xpath(this.caseDeletePreConfirmMessage).should(
      "have.text",
      "Are you sure you want to delete this case?",
    );
  }

  /**
   * This function clicks on case delete confirmation button
   */
  clickCaseDeleteConfirmationButton() {
    cy.xpath(this.caseDeleteConfirmButton).should("be.visible");
    cy.xpath(this.caseDeleteConfirmButton).click();
  }

  /**
   * Verifies case delete toast message
   */
  verifyCaseDeleteToastMessage() {
    cy.xpath(this.caseDeletionToastMessage)
      .should("be.visible")
      .invoke("text")
      .should("contain", "was deleted");
  }

  /**
   * This function deletes the case
   */
  verifyDeleteCase() {
    const caseCreationPage = new CaseCreationPage();
    caseCreationPage.closeAlltabs();
    caseCreationPage.verifyCasePageButton();
    caseCreationPage.verifyNewCaseCreationButtonText();
    caseCreationPage.clickNavigationMenuButton();
    caseCreationPage.verifyCasePageButton();
    caseCreationPage.clickCaseNavigationButton();
    caseCreationPage.verifyCasePageButton();
    caseCreationPage.verifyNewCaseCreationButtonText();
    this.verifyUpdateFewSecondsAgoText();
    this.clickCaseSideButtonToDelete();
    cy.xpath(this.caseDeleteButtonText).should("have.text", "Delete");
    this.clickCaseDeleteButton();
    this.verifyCaseDeletePreConfirmationText();
    this.clickCaseDeleteConfirmationButton();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    this.verifyCaseDeleteToastMessage();
  }
  /**
   * This function deletes a case inside the account
   */
  deleteCaseFromAccount() {
    this.verifyCaseDeletePreConfirmationText();
    this.clickCaseDeleteConfirmationButton();
    this.verifyCaseDeleteToastMessage();
    this.verifyCaseDeleteToastMessage();
  }

  /**
   * This function verify delete lead
   */
  verifyDeleteLead() {
    const caseCreationPage = new CaseCreationPage();
    cy.xpath(caseCreationPage.newCaseCreationButton).should("have.text", "New");
    caseCreationPage.closeAlltabs();
    this.verifyUpdateFewSecondsAgoText();
    this.clickCaseSideButtonToDelete();
    this.clickCaseDeleteButton();
    cy.xpath(this.caseDeletePreConfirmMessage).should("be.visible");
    cy.xpath(this.caseDeletePreConfirmMessage).should(
      "have.text",
      "Are you sure you want to delete this lead?",
    );
    this.clickCaseDeleteConfirmationButton();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    this.verifyCaseDeleteToastMessage();
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
export default CaseDeletePage;
