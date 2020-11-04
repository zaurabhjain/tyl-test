# Online shopping application tests
Test automation framework to test a sample online shopping application. The framework uses WebdriverIO and Cucumber as base. WebdriverIO is used to drive all web UI interactions and tests are written in BDD format helping the business users understand the tests better without delving deep into code. Allure reporter plugin is used to generate HTML reports.

Page object model is used to have better modularity in tests. Below is description of different folders.

## config
All the test runner configurations, environment configurations and any other configuration required in the project can be placed here.

## tests/features
All the feature files having tests can be placed in this folder

## tests/pageobjects
Used to place page classes related to different screens in the application

## tests/step_definitions
This folder can be used to place cucumber step definitions used in the tests

## tests/testdata
Test data to be used in athe application can go here. Multiple test data files can be maintained depending on number of environments.

## tests/helper
Reusable helper utility methods used in the glue code can be placed here.

Please follow below steps to run tests.

1. Run `npm install` to install dependencies
2. Run `npm run test` to execute tests
3. Run `npm run allure-report` to generate HTML report
