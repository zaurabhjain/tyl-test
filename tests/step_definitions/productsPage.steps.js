import { Given } from 'cucumber';
import productsPage from '../pageobjects/products.page';

Given(/^Sort products by "([^"]*)?"$/, function (criteria) {
    productsPage.selectSortingCriteria(criteria)
});

Given(/^Add cheapest and 2nd costliest product to the basket$/, function () {
    productsPage.addCostliestAnd2ndCheapestProduct();
});

