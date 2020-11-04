import BasePage from '../helper/basepage';

class ProductsPage extends BasePage {

  sortByDropdown = ".product_sort_container";
  addToCartButton = "//div[contains(.,'$<PRICE>') and @class='inventory_item_price']/following-sibling::button[text()='ADD TO CART']";
  productPrice = ".inventory_item_price";

  selectSortingCriteria(criteria) {
    super.selectByVisibleText(this.sortByDropdown, criteria);
  }

  getProductPricesInAscOrder() {
    let productPrices = [];
    let productPriceElems = browser.$$(this.productPrice);
    productPriceElems.forEach(element => {
      productPrices.push(element.getText().replace('$', ''));
    });
    productPrices.sort((a, b) => a - b);
    return productPrices;
  }

  addCostliestAnd2ndCheapestProduct() {
    let productPrices = this.getProductPricesInAscOrder();
    super.click(this.addToCartButton.replace('<PRICE>', productPrices[productPrices.length - 2])); //2nd costliet product
    super.click(this.addToCartButton.replace('<PRICE>', productPrices[0])); //Cheapest product
  }

}

export default new ProductsPage();
