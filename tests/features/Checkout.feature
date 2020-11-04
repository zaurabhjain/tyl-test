@Checkout
Feature: Online shopping application


  Scenario: Validate successful checkout of products
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    And Sort products by "Price (high to low)"
    Then Add cheapest and 2nd costliest product to the basket
    And Proceed with Checkout
    And Fill below checkout details and complete order
      | firstName | lastName | postalCode |
      | John      | Smith    | AB1 2YZ    |
    Then Validate order is completed

  