import BasePage from '../helper/basepage';

class GlobalHeader extends BasePage {

  basketIcon = "//*[@data-icon='shopping-cart']";

  clickOnBasketIcon() {
    super.click(this.basketIcon);
  }

}

export default new GlobalHeader();
