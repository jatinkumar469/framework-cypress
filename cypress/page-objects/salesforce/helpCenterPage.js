/// <reference types='cypress' />

class helpCenterPage {
  quickFind = '//input[@placeholder="Quick Find"]';
  setupHome = '//div[@class="overflow uiBlock"]';
  allSites = '//mark[@class="highlight"]';
  helpCenterPageUrl = '//*[@class="net-url"]';
  helpCenterTextVerify =
    '//h1[@class="slds-page-header__title"and contains(text(),"Contact Merchant Success")]';
  allSitesHeader = '//span[text()="All Sites"]';
  pageTitle = '//div[@class="bPageTitle"]';
  header = '//*[@id="setupComponent"]';
  digitalExperience = '//*[text()="Digital Experience"]';
  contactMerchantSuccess = '//*[text()="Contact Merchant Success"]';
  caseSubject = '//input[@name="Subject"]';
  caseCategory = '//button[contains(@aria-label, "Category")]';
  caseSubCategory = '//button[contains(@aria-label, "Subcategory")]';
  orderSignageOption = '//*[@data-value="Signage Reorder" and @role="option"]';
  caseDescriptionTextArea = '(//textarea[@class="slds-textarea"])';
  merchantName = '//input[@name="SuppliedCompany"]';
  name = '//input[@name="SuppliedName"]';
  email = '//input[@name="SuppliedEmail"]';
  phone = '//input[@name="SuppliedPhone"]';
  uploadFiles = '//input[@type="file"]';
  closeWindow = '//button[@title="Cancel and close"]';
  doneButton = '//button[@type="button"]';
  fileName = '//div[@class="fileName slds-truncate"]';
  modalParent = '//div[@class="modal-container slds-modal__container"]';
  modalHeader = '//h1[text()="Upload Files"]';
  headerText = '//h2[@class="slds-text-heading--medium"]';
  modalFooter = '//div[@class="footerCmps forceContentPanelFooter"]';
  modalClose = '(//lightning-primitive-icon[@size="xx-small"])[5]';

  caseSubmitButton =
    '//div[@class="slds-align_absolute-center"]//button[@type="submit"]';
  successLabel = '//div/span[@class="toastMessage forceActionsText"]';
  contactMerchantSupport = '//h1[text()="Contact Merchant Success"]';
  appLauncher = '//div[@class="slds-r5"]';
  appSearch = '//input[@placeholder="Search apps and items..."]';
  navigationMenu = '//button[@title="Show Navigation Menu"]';
  navigationMenuBox = '//div[@id="navMenuList"]';
  casesMenu = '//section[@class="slds-popover slds-dynamic-menu"]//li[2]';
  casesTab = '//a[@title="Cases"]/*[text()="Cases"]';
  allCaseView = '//h1/span[text()="All Cases"]';
  subNavigationMenu = '//button[@title="Select a List View: Cases"]';
  subNavSearch = '//div/input[@placeholder="Search lists..."]';
  labelClose = '//button[@title="Close"]';
  allCases = '(//span[text()="All Cases"])[1]';
  //"//ul[@aria-label='Recent List Views']/li[2]/lightning-base-combobox-item";
  emptyheader = '//div[@data-aura-class="forceListViewManagerHeader"]';
  selectCase = "(//table//th[1]//a[contains(@class, 'slds-truncate')])[1]";
  textVerificationAfterReload = '//div[@class="slds-grid "]';
  createNewCaseButton = '//ul//div[@title="New"]';
  changeOwnerButton = '//ul//div[@title="Change Owner"]';
  recentlyViewved =
    '//span[@class=" virtualAutocompleteOptionText" and contains(text(),"Recently Viewed")]';

  getXPathForCaseCategoryDropdown(searchText) {
    return `//*[@data-value="${searchText}" and @role="option"]`;
  }
}
export default helpCenterPage;
