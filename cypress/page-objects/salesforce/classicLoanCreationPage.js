/// <reference types='cypress'/>

class ClassicLoanCreationPage {
  // Xpath for Classic loan creation
  LoanOriginationDate = '//input[@name="Loan_Origination_Date__c"]';
  LoanStartDate = '//input[@name="Loan_Start_Date__c"]';
  LoanEndDate = '//input[@name="Loan_End_Date__c"]';
  LoanPlatform = '//input[@name="Loan_Platform__c"]';
  LoanStatus = '//input[@name="Loan_Status__c"]';
  MerchantText = '//input[@name="Merchant_Text__c"]';
  viewClassicLoan = '(//lightning-formatted-text[.="{{text}}"])[2]';
  viewLoanPlatform = '(//lightning-formatted-text[.="{{text}}"])[1]';
  viewLoanStatus = '//lightning-formatted-text[.="{{text}}"]';
  viewMerchantText = '(//lightning-formatted-text[.="{{text}}"])[2]';
}
export default ClassicLoanCreationPage;
