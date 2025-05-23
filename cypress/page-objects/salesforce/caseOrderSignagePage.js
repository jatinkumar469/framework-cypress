/// <reference types='cypress' />
class CaseOrderSignagePage {
  // Locators for order signage Page
  submitOrderSignageButton =
    '(//button[@name="Case.Submit_Order_Signage" and text()="Submit Order Signage"])[1]';
  onlyCaseOwnerSubmitText =
    '//*[contains(text(), "Only Case owner can submit the Signage Order.")]';
  confirmOrderSignageSubmitText =
    '//*[contains(text(), "You cannot make any changes once you submit the Signage Order. Please confirm before you submit.")]';
  orderSubmittedSuccessfullyText =
    '//*[contains(text(), "Order Submitted Successfully")]';

  cancelOrderSignageButton = '(//button[@name="Case.Cancel_Order_Signage"])[1]';
  onlyCaseOwnerCancelText =
    '//*[contains(text(), "Only case owner can cancel a Signage Order.")]';
  submittedOrderCantBeCancelled =
    '//*[contains(text(), "Once Submitted/Fulfilled the order cannot be cancelled.")]';
  orderSignageButtonPopUp =
    '(//button[@class="slds-button slds-button_brand"])[2]';
  changeCaseOwnerButton = '(//button[@name="ChangeOwnerOne"])[1]';
  changeCaseOwnerPopUp =
    '//div[@class="modal-header slds-modal__header"]/*[contains(@id, "title")]';
  searchUserInputToChangeOwner =
    '(//input[@title="Search Users" and @placeholder="Search Users..."])[1]';
  changeCaseOwnerSubmitButton = '(//button[@title="Submit"])[1]';
  relatedTabLink = '(//a[(text()="Related") and @data-label="Related"])[1]';
  signageOrdersTab = '//span[@title="Signage Orders"]';
  processOrderSignageFilesTab =
    '(//*[(text())="Process Order Signage Files"])[1]';
  processOrderSignageFilesTabNoItemsMsg =
    "//p[contains(@id,'flowruntime_datatable_info_message_display')]/span[contains(text(),'0 of 0 items')]";
  processOrderSignageFilesTabNoItemSelectedMsg =
    "//p[contains(@id,'flowruntime_datatable_info_message_display')]/span[contains(text(),'0 items selected')]";
  processOrderSignageFilesTabNoItemsDisplayMsg =
    "//p[contains(text(),'No items to display.')]";
  processOrderSignageFilesTabNoFileProcessErrorMsg =
    "//span[text()='Please select minimum 1 rows']";
  invalidFileOrderSignageProcessedErrorMsg =
    "//strong[text()='Error Processing the file. Please check if required fields are present.']";
  invalidFileOrderSignageProcessedOkButton =
    "//button[@class='slds-button slds-button_brand' and text()='Ok']";
  uploadFileButton = '(//span[(text())="Upload Files"])[1]';
  uploadFileSelectorButton =
    '//div[@part="file-selector"]//input[@type="file"]';
  uploadFileButtonCSS = "span[part='button']";
  dropFileButton = '(//span[(text())="Or drop files"])[1]';
  fileUploadConfirmationText =
    '(//span[@role="status" and text()="1 of 1 file uploaded"])[1]';
  fileUploadFooterConfirmationText =
    "(//span[text()='0 of 1 file uploaded'])[1]";
  fileUploadConfirmButtonText = '(//span[(text())="Done"])[1]';
  fileUploadConfirmButton = '//button[@type="button"]/span[(text())="Done"]/..';
  fileUploadPopUoCloseButton =
    '(//*[@data-key="close" and @class="slds-icon slds-icon_xx-small"])[3]';
  modalParent = '(//div[@class="panel slds-modal slds-fade-in-open"])[1]';
  modalHeader = '(//h2[text()="Upload Files"])[1]';
  headerText =
    '(//h2[@class="title slds-text-heading--medium slds-hyphenate" and text()="Upload Files"])[1]';
  modalFooter = '(//div[@class="footerCmps forceContentPanelFooter"])[1]';
  modalClose =
    '(//lightning-primitive-icon[@size="xx-small"]/*[@data-key="close"]/..)[1]';
  doneButton = '//button[@type="button"]/span[(text())="Done"]';
  caseSubmitButton = '//button[@name="save"]';
  submitOrderSignageBtn = '//button[@name="Case.Submit_Order_Signage"]';
  fileAddesSuccessButton =
    '//span[contains(text(), "1 file was added to the Case.")]';
  filesViewAllButton =
    '//span[@class="view-all-label" and text()="View All"]/span[text()="Files"]/..';
  firstFileName =
    '(//div[@class="forceContentFileTitle"]//span[@title="Breadpay_order_signage_Sample"])[1]';
  firstRowFile =
    '(//div[@class="forceContentFileTitle"]//span[@data-aura-class="uiOutputText"])[1]';
  fileAddedToastMessage =
    "//div[contains(@id,'toastDescription')]/span[contains(@class,'toastMessage')]";
  fileAddedToastCloseIcon = "//button[contains(@class,'toastClose')]";
  filesShowActionButton =
    '(//div[@data-aura-class="forceVirtualAction"]/a[@role="button"])[51]';
  fileDeleteButton =
    '(//*[@class="uiMenuItem"]/a[@role="menuitem" and @title="Delete"])[1]';
  fileDeleteButtonText =
    '(//*[@class="uiMenuItem"]/a[@role="menuitem" and @title="Delete"])[1]/div';
  fileDeletePreConfirmMessage =
    '//div[@class="modal-header slds-modal__header"]/../div[2]/div';
  fileDeleteConfirmButton = '//button[@title="Delete"]';
  fileDeletionToastMessage =
    '(//span[@class="toastMessage slds-text-heading--small forceActionsText"])[1]';
  openedCaseNavigationButton = '(//span[@class="title slds-truncate"])[2]';
  processFileButton =
    '(//button[(text()="Process File") and @type="button"])[1]';
  secFileDeleteButton = '(//a[@title="Delete" and @role="menuitem"])[2]';
  secFileDeleteButtonText =
    '(//a[@title="Delete" and @role="menuitem"])[2]/div';
  processOrderSignageFileRadioButton =
    '(//label[contains(@id, "radio-button-label")]/span)[1]';
  processOrderSignageFileText =
    '//label[contains(@id, "radio-button-label")]//*[text()="Select Item 1"]';
  processOrderSignageButton =
    '//button[@kx-scope="button-brand" and text()="Process File"]';
  noOfOrderSignageProcessed =
    '//*[@title="Signage Orders"]/following-sibling::span';
  orderSignageIDText =
    '(//td[@data-label="Signage ID"])[1]//div[@class="slds-truncate"]//span';
  programChangePurpose =
    '//button[@aria-label="Program Change Purpose"]//span[text()="--None--"]';
  otherThresholds =
    "//flexipage-component2[1]//flexipage-column2[2]//textarea[@class='slds-textarea']";
  channelsMarkedIn =
    "//flexipage-component2[2]//flexipage-field[1]//textarea[@class='slds-textarea']";
  disabledFinancingProgramId =
    "//flexipage-component2[2]//flexipage-field[2]//textarea[@class='slds-textarea']";
  //Order signage xpath
  orderSignageEditWindowTitle = '//h2[contains(text(), "Edit")]';
  orderSignageEditLink = "//div//a[.='Edit']";
  orderSignangeTrackingNumberInput = '//input[@name="Tracking_URL__c"]';
  orderSignageDetailsTab = '//a[@data-label="Details"]';
  orderSignageCaseStatus = '//lightning-formatted-text[.="Resolved"]';

  /**
   * This function gets Xpath for Order Signage Show Action
   * @param {number} rowIndex index to pass as an argument
   * @returns Xpath for Order Signage Show Action
   */
  getXpathOrderSignageShowAction(rowIndex) {
    return `//table[@aria-label="Signage Orders"]//tr[${rowIndex}]//td[6]`;
  }

  /**
   * This function verifies the ProcessOrderSignageFile section content when no files present
   */
  verifyProcessOrderSignangeFileSectionContentWhenNoFiles() {
    cy.xpath(this.processOrderSignageFilesTab).scrollIntoView();
    cy.xpath(this.processOrderSignageFilesTab).should("be.visible");
    cy.xpath(this.processOrderSignageFilesTab).should(
      "have.text",
      "Process Order Signage Files",
    );
    cy.xpath(this.processOrderSignageFilesTabNoItemsMsg).should("be.visible");
    cy.xpath(this.processOrderSignageFilesTabNoItemSelectedMsg).should(
      "be.visible",
    );
    cy.xpath(this.processOrderSignageFilesTabNoItemsDisplayMsg).should(
      "be.visible",
    );
  }

  /**
   * This function verifies the ProcessOrderSignageFile section content when no files present
   */
  verifyProcessOrderSignangeFileProcessErrorMessageWhenNoFile() {
    cy.xpath(this.processOrderSignageFilesTabNoFileProcessErrorMsg).should(
      "be.visible",
    );
    cy.xpath(this.processOrderSignageFilesTabNoFileProcessErrorMsg).should(
      "have.text",
      "Please select minimum 1 rows",
    );
  }

  /**
   * This function verifies the signage order tab text
   */
  verifySignageOrderTextUnderRelatedTab() {
    cy.xpath(this.signageOrdersTab).should("be.visible");
    cy.xpath(this.signageOrdersTab).should("have.text", "Signage Orders");
  }

  /**
   * This function verifies the invalid file process error message
   */
  verifyInvalidFileProcessErrorMessage() {
    cy.xpath(this.invalidFileOrderSignageProcessedErrorMsg).should(
      "be.visible",
    );
    cy.xpath(this.invalidFileOrderSignageProcessedErrorMsg).should(
      "have.text",
      "Error Processing the file. Please check if required fields are present.",
    );
  }

  /**
   * This function verifies the upload file button text
   */
  verifyUploadFileButton() {
    cy.xpath(this.uploadFileButton).should("be.visible");
    cy.xpath(this.uploadFileButton).should("have.text", "Upload Files");
  }

  /**
   * This function clicks on file upload done button
   */
  clickFileUploadDoneButton() {
    cy.xpath(this.fileUploadFooterConfirmationText).should("be.visible");
    cy.xpath(this.doneButton).should("be.visible");
    cy.xpath(this.doneButton).should("have.text", "Done");
    cy.xpath(this.doneButton).trigger("click");
  }

  /**
   * This function getFileName and verify it
   * @param {string} expectedFileName text to pass as an argument
   */
  getFileNameAndVerify(expectedFileName) {
    cy.xpath(this.firstRowFile).should("be.visible");
    cy.xpath(this.firstRowFile)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal(expectedFileName);
      });
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
   * This function verifies case page button text
   */
  verifyCasePageButton() {
    cy.xpath(this.casePageButton).should("be.visible");
    cy.xpath(this.casePageButton).should("have.text", "Cases");
  }

  /**
   * This function verifies process order signage file text
   */
  verifyprocessOrderSignageFileText() {
    cy.xpath(this.processOrderSignageFileText).should("be.visible");
    cy.xpath(this.processOrderSignageFileText).should(
      "have.text",
      "Select Item 1",
    );
  }

  /**
   * This function verify uploaded files
   */
  verifyUploadedFileName(expectedFileName) {
    cy.xpath(this.firstFileName).should("be.visible");
    cy.xpath(this.firstFileName)
      .invoke("text")
      .then((name) => expect(name).equal(expectedFileName));
  }

  /**
   * This function verifies done button text and performs click on done button
   */
  verifyClickDoneAfterFileUploaded() {
    cy.xpath(this.doneButton).should("be.visible");
    cy.xpath(this.doneButton).should("have.text", "Done");
    cy.xpath(this.doneButton).trigger("click");
  }

  /**
   * This function verifies file process text
   */
  verifyFileProcessButton() {
    cy.xpath(this.processFileButton).should("be.visible");
    cy.xpath(this.processFileButton).should("have.text", "Process File");
  }

  /**
   * This function verifies process order signage text
   */
  verifyProcessOrderSignageText() {
    cy.xpath(this.processOrderSignageFileText).should("be.visible");
    cy.xpath(this.processOrderSignageFileText).should(
      "have.text",
      "Select Item 1",
    );
  }

  /**
   * This function uploads a file
   */
  uploadFileMethod() {
    cy.xpath(this.doneButton).should("be.visible");
    cy.xpath(this.doneButton).last().click();
    cy.xpath(this.fileAddesSuccessButton).should("be.visible");
    cy.xpath(this.fileAddesSuccessButton).should(
      "have.text",
      "1 file was added to the Case.",
    );
  }

  /**
   * Verifies Updated Case Owner
   * @param {string} successUserName text to pass as an argument
   */
  verifyUpdatedCaseOwner(successUserName) {
    cy.xpath(
      "//*[contains(text(), '" + successUserName + " now owns the record')]",
    ).should("be.visible");
    cy.xpath(
      this.getXPathForSuccessUserNameInCase(successUserName),
    ).scrollIntoView();
    cy.xpath(this.getXPathForSuccessUserNameInCase(successUserName)).should(
      "be.visible",
    );
    cy.xpath(this.getXPathForSuccessUserNameInCase(successUserName)).should(
      "contain",
      successUserName,
    );
  }

  /**
   * This function verifies submit order button text
   */
  verifySubmitOrderSignageButton() {
    cy.xpath(this.submitOrderSignageButton).should("be.visible");
    cy.xpath(this.submitOrderSignageButton).should(
      "have.text",
      "Submit Order Signage",
    );
  }

  /**
   * This function verifies case Owner submit text
   */
  verifyOnlyCaseOwnerCanSubmitText() {
    cy.xpath(this.onlyCaseOwnerSubmitText).should("be.visible");
    cy.xpath(this.onlyCaseOwnerSubmitText).should(
      "have.text",
      "Only Case owner can submit the Signage Order.",
    );
  }

  /**
   *  This function verifies cancel order text
   */
  verifyCancelOrderSignageButtonText() {
    cy.xpath(this.cancelOrderSignageButton).should("be.visible");
    cy.xpath(this.cancelOrderSignageButton).should(
      "have.text",
      "Cancel Order Signage",
    );
  }

  /**
   * This function verifies only case owner submit text
   */
  verifyOnlyCaseOwnerCanCancelText() {
    cy.xpath(this.onlyCaseOwnerCancelText).should("be.visible");
    cy.xpath(this.onlyCaseOwnerCancelText).should(
      "have.text",
      "Only case owner can cancel a Signage Order.",
    );
  }

  /**
   * This function verifies change owner text
   */
  verifyChangeOwnerButtonText() {
    cy.xpath(this.changeCaseOwnerButton).should("be.visible");
    cy.xpath(this.changeCaseOwnerButton).should("have.text", "Change Owner");
  }

  /**
   * This function verifies change owner popup
   */
  verifyChangeOwnerPopup() {
    cy.xpath(this.changeCaseOwnerPopUp).first().should("be.visible");
    cy.xpath(this.changeCaseOwnerPopUp)
      .first()
      .should("have.text", "Change Case Owner");
  }

  /**
   * This function verifies process order signage button
   */
  verifyProcessOrderSignageButton() {
    cy.xpath(this.processOrderSignageButton).scrollIntoView();
    cy.xpath(this.processOrderSignageButton).should("be.visible");
    cy.xpath(this.processOrderSignageButton).should(
      "have.text",
      "Process File",
    );
  }

  /**
   * This function verifies confirm order signage button
   */
  verifyconfirmOrderSignageButtonText() {
    cy.xpath(this.confirmOrderSignageSubmitText).should("be.visible");
    cy.xpath(this.confirmOrderSignageSubmitText).should(
      "have.text",
      "You cannot make any changes once you submit the Signage Order. Please confirm before you submit.",
    );
  }

  /**
   * This function verifies order submitted successfully text
   */
  verifyOrderSubmittedSuccessText() {
    cy.xpath(this.orderSubmittedSuccessfullyText).should("be.visible");
    cy.xpath(this.orderSubmittedSuccessfullyText).should(
      "contain",
      "Order Submitted Successfully",
    );
  }

  /**
   * This function verifies cancel order signage button
   */
  verifyCancelOrderSignageButton() {
    cy.xpath(this.cancelOrderSignageButton).should("be.visible");
    cy.xpath(this.cancelOrderSignageButton).should(
      "have.text",
      "Cancel Order Signage",
    );
  }

  /**
   * This function to verify order cant be cancel text
   */
  verifySubmittedOrderCantCancelText() {
    cy.xpath(this.submittedOrderCantBeCancelled).should("be.visible");
    cy.xpath(this.submittedOrderCantBeCancelled).should(
      "have.text",
      "Once Submitted/Fulfilled the order cannot be cancelled.",
    );
  }

  /**
   * This function to verify order signage ID
   */
  verifyOrderSignageId() {
    cy.xpath(this.orderSignageIDText).should("be.visible");
    cy.xpath(this.orderSignageIDText)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).not.to.be.empty;
        expect(text.trim().length).to.equal(36);
      });
  }

  /**
   *Edits Tracking Number of Order Signage
   * @param {number} orderNumber number to pass as an argument
   * @param {any} showAction value to pass as an argument
   */
  editTrackNumberOrderSignage(orderNumber, showAction) {
    cy.xpath(showAction).should("be.visible");
    cy.xpath(showAction).click();
    cy.xpath(this.orderSignageEditLink).should("be.visible");
    // eslint-disable-next-line cypress/no-force
    cy.xpath(this.orderSignageEditLink).click({ force: true });
    cy.xpath(this.orderSignageEditWindowTitle).should("be.visible");
    cy.scrollTo("bottom");
    cy.xpath(this.orderSignangeTrackingNumberInput).scrollIntoView();
    cy.xpath(this.orderSignangeTrackingNumberInput).clear();
    cy.xpath(this.orderSignangeTrackingNumberInput).type(orderNumber);
    cy.xpath(this.caseCreationSaveButton).should("be.visible");
    cy.xpath(this.caseCreationSaveButton).click();
    cy.xpath(this.caseDeletionToastMessage).should("be.visible");
    cy.xpath(this.caseDeletionToastMessage)
      .invoke("text")
      .should("contain", "was saved");
  }
  /**
   * This function verifies submitOrderSignageBtn
   */
  verifySubmitOrderSignageBtn() {
    cy.xpath(this.submitOrderSignageBtn).should("be.visible");
  }
}
export default CaseOrderSignagePage;
