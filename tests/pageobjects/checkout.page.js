import BasePage from '../helper/basepage';

class CheckoutPage extends BasePage {

  firstNameTextBox = "#first-name";
  lastNameTextBox = "#last-name";
  postalCodeTextBox = "#postal-code";
  continueButton = "//input[@value='CONTINUE']";
  finishButton = "//a[text()='FINISH']";
  thankYouMessage = "//h2[text()='THANK YOU FOR YOUR ORDER']";

  fillCheckoutInfo(firstName, lastName, postalCode) {
    super.setValue(this.firstNameTextBox, firstName);
    super.setValue(this.lastNameTextBox, lastName);
    super.setValue(this.postalCodeTextBox, postalCode);
    super.click(this.continueButton);
    super.click(this.finishButton);
  }

  isThankYouMsgDisplayed() {
    return super.isElementDisplayed(this.thankYouMessage);
  }

}

export default new CheckoutPage();
