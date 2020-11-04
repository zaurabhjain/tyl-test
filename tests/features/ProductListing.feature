@ProductListing @pending
Feature: Product listing


  Scenario: Validate products are displayed with heading, description, price and ability to add to cart
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    Then Validate product page is displayed with heading, description, price and ability to add to cart

  Scenario: Validate products can be sorted by Name in ascending order
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Sort products by "Name (A to Z)"
    Then Products should be displayed with Name in ascending order

  Scenario: Validate products can be sorted by Name in descending order
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Sort products by "Name (Z to A)"
    Then Products should be displayed with Name in descending order

  Scenario: Validate products can be sorted by Price (low to high)
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Sort products by "Price (low to high)"
    Then Products should be displayed with Price in ascending order

  Scenario: Validate products can be sorted by Price (high to low)
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Sort products by "Price (high to low)"
    Then Products should be displayed with Price in descending order

  Scenario: Validate products can be added and removed from cart from Product page
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Add a product to cart
    Then Product should be added in cart
    And User should be able to remove the product added to cart
    When User removes the product from cart
    Then Cart should be empty
