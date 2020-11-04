@Cart @pending
Feature: Cart

  Scenario: Validate products can be added and removed from cart
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Add a product to cart
    Then Product should be added in cart
    And User removes product from cart
    Then Cart should be empty

  Scenario: Validate user can continue shopping on cart page
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Add a product to cart
    Then Product should be added in cart
    When User continues with shopping
    Then User should be presented with Product listing page
    And User should be able to add products to cart
