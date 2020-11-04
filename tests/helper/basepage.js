export default class BasePage {

    waitForElementDisplay(element) {
        element.waitForDisplayed({timeout: 10000, timeoutMsg: "Element is not displayed", interval: 500});
    }

    waitForElementEnabled(element) {
        element.waitForEnabled({timeout: 2000, timeoutMsg: "Element is not enabled", interval: 500});
    }

    click(locator) {
        let element = $(locator);
        this.waitForElementDisplay(element);
        this.waitForElementEnabled(element);
        element.click();
    }

    getAttribute(locator, attribute) {
        let element = $(locator);
        return element.getAttribute(attribute);
    }

    setValue(locator, text) {
        let element = $(locator);
        this.waitForElementDisplay(element);
        this.waitForElementEnabled(element);
        element.setValue(text);
    }

    selectByVisibleText(locator, text) {
        let element = $(locator);
        this.waitForElementDisplay(element);
        this.waitForElementEnabled(element);
        element.selectByVisibleText(text);
    }

    isElementDisplayed(locator) {
        return $(locator).isDisplayed();
    }
   
}

