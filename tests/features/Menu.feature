@Menu @pending
Feature: Menu

  Scenario: Validate navigation options available in Menu
    Given User navigates to Saucelabs demo app
    Then Menu should not be displayed
    When Login using valid credentials
    Then Menu should be displayed
    When User clicks on "All Items" from Menu
    Then User should be presented with Products page
    When User clicks on "About" from Menu
    Then User should be presented with Saucelabs homepage
    When User clicks on "Reset App State" from Menu
    Then App should be reset

  Scenario: Validate Logout functionality
    Given User navigates to Saucelabs demo app
    When Login using valid credentials
    When User clicks on "Logout" from Menu
    Then User should be logged out
    Then Menu should not be displayed


