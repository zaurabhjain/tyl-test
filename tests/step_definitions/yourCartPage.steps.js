import { Given } from 'cucumber';
import yourCartPage from '../pageobjects/yourCart.page';
import globalHeader from "../pageobjects/global.header";

Given(/^Proceed with Checkout$/, function () {
    globalHeader.clickOnBasketIcon();
    yourCartPage.clickOnCheckoutButton();
});

