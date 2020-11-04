import BasePage from '../helper/basepage';

class YourCartPage extends BasePage {

  checkoutButton = "//a[text()='CHECKOUT']";

  clickOnCheckoutButton() {
    super.click(this.checkoutButton);
  }

}

export default new YourCartPage();
