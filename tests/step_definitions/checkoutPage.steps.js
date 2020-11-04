import { Given } from 'cucumber';
import checkoutPage from '../pageobjects/checkout.page';

Given(/^Fill below checkout details and complete order$/, function (table) {
    let { firstName, lastName, postalCode } = { ...table.hashes()[0] };
    checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);
});

Given(/^Validate order is completed$/, function () {
    expect(checkoutPage.isThankYouMsgDisplayed()).toEqual(true, 'Thank you message is not displayed on order completion');
});

