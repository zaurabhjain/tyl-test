import { Given } from 'cucumber';
import loginPage from '../pageobjects/login.page';
const globalTestData = require('../testdata/globalTestData');


Given(/^User navigates to Saucelabs demo app$/, function () {
    browser.url("https://www.saucedemo.com");
});

Given(/^Login using valid credentials$/, function () {
    loginPage.enterUsername(globalTestData.getField('username'));
    loginPage.enterPassword(globalTestData.getField('password'));
    loginPage.clickOnLoginButton();
});

